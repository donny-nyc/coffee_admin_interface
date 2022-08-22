<script lang="ts"></script>

<template>
  <div id='main-nav-bar'>
    <h1>Espresso Admin</h1>

    <p>
      <router-link to='/products'>Products</router-link>
      <router-link to='/customers'>Customers</router-link>
      <router-link to='/inventory'>Inventory</router-link>
      <router-link to='/orders'>Orders</router-link>
      <router-link to='/permissions'>Permissions</router-link>
    </p>
  </div>
</template>

<style>
  #main-nav-bar {
    width: 200px;
    height: 100vh;
    margin: 0;
    background-color: #111;
    color: #DDD;
  }

  p {
    display: flex;
    flex-direction: column;
  }

  a {
    color: #DDD;
    line-height: 2;
  }

  a:link {
    width: 100%;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
