<script setup>
import { store } from '../store/store.js'
import { findUser } from '../utils/api';

let searchQuery = "";

const handleSubmit = async () => {
  store.users = await findUser(searchQuery);
}
</script>

<template>
  <section class="search">
    <form @submit.prevent="handleSubmit" class="form">
      <input @keydown.enter.prevent="handleSubmit" v-model="searchQuery" class="form__input" placeholder="Search..." type="search" id="search" name="search">
      <button class="form__button" type="submit">Search</button>
    </form>
  </section>
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

.search {
  margin: 3rem 0;
}

.form {
  display: flex;
  gap: 1rem;

  &__input {
    border: 0;
    border-radius: 15px;
    font-size: 1.2rem;
    background-color: var(--darkGray);
    color: var(--white);
    padding: 0.5rem 1rem;
    width: 100%;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(30deg, var(--myColor1) 30%, var(--myColor2) 70%);
    color: var(--white);
    font-weight: 700;
    border: none;
    border-radius: 10px;
    padding: 0.25rem 1.5rem;
    cursor: pointer;
    transition: --myColor1 0.4s, --myColor2 0.4s ease-in;

    &:hover {
      --myColor1: rgb(76, 191, 237);
      --myColor2: rgb(130, 177, 238);
    }
  }
}
</style>
