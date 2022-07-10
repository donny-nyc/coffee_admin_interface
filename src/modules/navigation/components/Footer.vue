<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Footer'
  });
</script>

<template>
  <div id='footer'>
    Copyright Benchmark Solutions ©{{new Date().getFullYear()}}
  </div>
</template>

<style scoped>
  #footer {
    height: 300px;
    background-color: #999;
    width: 100vw;
    margin: 0;
  }
</style>
