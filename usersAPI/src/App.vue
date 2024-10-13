<script setup>
import SearchBar from './components/SearchBar.vue';
import UsersList from './components/UsersList.vue'

</script>

<template>
  <main>
    <h1 class="title">User App</h1>
    <SearchBar />
    <Suspense>
      <template #default>
        <UsersList />
      </template>
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </main>
</template>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-padding-top: 50px;
  overflow-x: hidden;
}

.title {
  font-size: 3.2rem;
  font-weight: 700;
  text-align: center;
  color: transparent;
  background: linear-gradient(30deg, var(--lightBlue) 0%, var(--lightBlue2) 100%); 
  background-clip: text;
  width: max-content;
  margin: 3rem auto 0 auto;
}
</style>
