<script setup>
import {RouterLink, RouterView} from 'vue-router'
import BackLink from './components/BackLink.vue'
</script>

<template>
  <header>
    <h2><RouterLink to="/">Rozcestník</RouterLink></h2>
  </header>
  <div>
    <BackLink/>
    <RouterView/>
  </div>
</template>

<style scoped>
header {
  height: 30px;
}
</style>
