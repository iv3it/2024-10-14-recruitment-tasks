<script setup>
import { ref } from 'vue';
import { validatePESEL } from '../utils/validatePesel'

const pesel = ref('');
const isValid = ref(false);
const error = ref('');

const checkPESEL = () => {
  if(pesel.value.length === 0) {
    error.value = '';
  } else if (pesel.value.length > 0 && pesel.value.length < 11) {
    error.value = 'PESEL number is too short.';
    isValid.value = false;
  } else if (!validatePESEL(pesel.value)) {
    error.value = 'Invalid PESEL number.';
    isValid.value = false;
  } else {
    error.value = '';
    isValid.value = true;
  }
};
</script>

<template>
  <div class="box">
    <h1 class="title">PESEL Validator</h1>

    <input v-model="pesel" type="text" maxlength="11" @input="checkPESEL" placeholder="PESEL number..." class="input"/>
    <p v-if="error" class="message red">{{ error }}</p>
    <p v-else-if="isValid" class="message green">PESEL number is valid</p>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 2.3rem;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
}

.input {
  border: none;
  border-bottom: 1px solid var(--white);
  padding-bottom: 1rem;
  outline: none;
  background-color: var(--black);
  font-size: 2.2rem;
  color: var(--white);
}

.submit {
  margin-top: 3rem;
  font-size: 1.5rem;
  background-color: var(--black);
  color: var(--white);
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: 0.23s;
  border: 1px solid var(--white);
}

.submit:hover {
  background-color: var(--green);
  border: 1px solid var(--green);
}

.message {
  margin-top: 1rem;
}

.message.green {
  color: var(--green);
}

.message.red {
  color: var(--red);
}
</style>
