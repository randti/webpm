<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from '@/components/Menu.vue';

</script>

<template>
  <div id="root">
    <Menu class="menu" />
    <RouterView class="router-view" />
  </div>
</template>

<style scoped lang="scss">
#root {
  display: grid;
  grid-template-areas: 'router-view';
  grid-template-columns: auto 1fr;
  font-family: sans-serif;
}

.sidebar {
  grid-area: 'menu';
}

.router-view {
  grid-area: 'router-view';
  padding: 0rem;
}
</style>
