<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
  import MainNavBar from '@/modules/navigation/components/MainNavBar.vue';
  import Footer from '@/modules/navigation/components/Footer.vue';
</script>

<template>
  <div id='flex-box'>
    <MainNavBar />
    <div>
      <router-view></router-view>
    </div>
  </div>
  <Footer />
</template>

<style>
  body {
    font-family: sans-serif;
  }

  #flex-box {
    display: flex;
    flex-flow: row;
  }
</style>
