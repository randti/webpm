<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';



</script>

<template>
  <div class="wrapper">

  
  <div id="root">
    <Menu class="menu" />

    <RouterView class="router-view" />
  </div>
    <div class="footer">
    <Footer class="footer-out"/>
    </div>
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

* {
    margin: 0;
    padding: 0;
}

html,
body {
    height: 100%;
}

.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100%;
}

.root {
    flex: 1 0 auto;
}

.footer {
    flex: 0 0 auto;
}
</style>
