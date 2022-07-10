<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'MainNavBar',
  });
</script>

<template>
  <div id='main-nav-bar'>
    <h1>Espresso Admin</h1>

    <p>
      <router-link to='/products'>Products</router-link>
      <router-link to='/customers'>Customers</router-link>
      <router-link to='/inventory'>Inventory</router-link>
      <router-link to='/Orders'>Orders</router-link>
    </p>
  </div>
</template>

<style>
  #main-nav-bar {
    width: 200px;
    height: 100vh;
    margin: 0;
    background-color: #AAA;
  }

  p {
    display: flex;
    flex-direction: column;
  }

  a {
    width: 100%;
    background-color: white;
  }
</style>
