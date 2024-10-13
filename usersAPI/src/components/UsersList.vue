<script setup>
import User from './User.vue'
import { store } from '../store/store.js'
import { getUsers } from '../utils/api'

store.users = await getUsers();

async function handleReloadUserList() {
  store.users = await getUsers();
}
</script>

<template>
  <section class="users" v-if="store.users.length > 0">
    <h2 class="sectionTitle">Users:</h2>
      <ul class="users__list">
        <li v-for="(user, index) in store.users" :key="index">
          <User :user="user"  @reloadUserList="handleReloadUserList"/>
        </li>
      </ul>
  </section>
  <p v-else>No results.</p>
</template>

<style lang="scss" scoped>
.users {
  position: relative;
  display: flex;
  flex-direction: column;

  &__list {
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    @media(max-width: 967px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>