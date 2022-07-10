<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
  import MainNavBar from '@/modules/navigation/components/MainNavBar.vue';
</script>

<template>
  <div id='flex-box'>
    <MainNavBar />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  #flex-box {
    display: flex;
    flex-flow: row;
  }
</style>
