<script setup>
import PeselValidator from './components/PeselValidator.vue';
</script>

<template>
  <main>
    <PeselValidator />
  </main>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-padding-top: 50px;
  overflow-x: hidden;
}
</style>
