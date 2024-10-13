<script setup>
import { ref } from 'vue';
import { editUser } from '../utils/api';

defineProps({
  user: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['reloadUserList']);

const isFormOpen = ref(false);

const toggleEditing = () => {
  isFormOpen.value = !isFormOpen.value;
}

const handleSubmitEditForm = async(userId, user) => {
  await editUser(userId, user);
  toggleEditing();
  emit('reloadUserList');
}

</script>

<template>
  <div class="user">
    <div>
      <p class="user__data"><span class="user__data__badge" :class="{'user__data__badge--green': user.status === 'active', 'user__data__badge--red': user.status === 'inactive'}" >{{ user.status }}</span></p>
      <p class="user__data"><span class="user__data__title">Name:</span> {{ user.name }}</p>
      <p class="user__data"><span class="user__data__title">Gender:</span> {{ user.gender }}</p>
      <p class="user__data"><span class="user__data__title">Email:</span> {{ user.email }}</p>
    </div>
    <button v-if="!isFormOpen" class="user__button" @click="toggleEditing">Edit</button>
    <button v-else class="user__button" @click="toggleEditing">Close</button>

    <div v-if="isFormOpen">
      <form @submit.prevent="handleSubmitEditForm(user.id, user)" class="form">
        <h3 class="form__title">Edit:</h3>

        <div class="form__row">
          <label for="userName" class="form__row__label">Name:</label>
          <input v-model="user.name" id="userName" class="form__row__input" required/>
        </div>
        
        <div class="form__row">
          <label for="userGender" class="form__row__label">Gender:</label>
          <select v-model="user.gender" id="userGender" class="form__row__input" required>
            <option disabled value="">Select one...</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>

        <div class="form__row">
          <label for="userEmail" class="form__row__label">Email:</label>
          <input v-model="user.email" id="userEmail" class="form__row__input" required/>
        </div>

        <div class="form__row">
          <label for="userStatus" class="form__row__label">Status:</label>
          <select v-model="user.status" id="userStatus" class="form__row__input" required>
            <option disabled value="">Select one...</option>
            <option value="active">active</option>
            <option value="inactive">inactive</option>
          </select>
        </div>

        <button class="form__button" type="submit">Save</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@property --myColor1 {
  syntax: '<color>';
  initial-value: #00d7fd;
  inherits: false;
}

@property --myColor2 {
  syntax: '<color>';
  initial-value: #00a0fd;
  inherits: false;
}

.user {
  background-color: var(--darkGray);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  justify-content: space-between;

  &__data {
    margin: 0.25rem 0;
    display: block;

    &__title {
      font-weight: 700;
    }

    &__badge {
      color: var(--white);
      display: block;
      width: max-content;
      margin-bottom: 1rem;
      padding: 0.25rem 0.5rem;
      border-radius: 6px;

      &--green {
        background-color: var(--green);
      }

      &--red {
        background-color: var(--red);
      }
    }
  }

  &__button {
    background: linear-gradient(30deg, var(--myColor1) 30%, var(--myColor2) 70%);
    color: var(--white);
    border: none;
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 10px;
    margin-top: 1rem;
    cursor: pointer;
    transition: --myColor1 0.4s, --myColor2 0.4s ease-in;

    &:hover {
      --myColor1: rgb(76, 191, 237);
      --myColor2: rgb(130, 177, 238);
    }
  }
}

.form {
  &__title {
    font-size: 1.2rem;
    font-weight: 700;
  }

  &__row {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    &__label {
      display: block;
      font-weight: 600;
    }

    &__input {
      background-color: var(--white);
      border: none;
      border-radius: 6px;
      padding: 0.5rem 1rem;
    }
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(30deg, var(--myColor1) 30%, var(--myColor2) 70%);
    color: var(--white);
    border: none;
    border-radius: 10px;
    padding: 0.7rem 1.8rem;
    cursor: pointer;
    margin-top: 1rem;
    transition: --myColor1 0.4s, --myColor2 0.4s ease-in;
    font-weight: 700;

    &:hover {
      --myColor1: rgb(76, 191, 237);
      --myColor2: rgb(130, 177, 238);
    }
  }
}
</style>
