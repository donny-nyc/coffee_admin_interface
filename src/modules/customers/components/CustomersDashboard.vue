<script lang="ts">
  import { defineComponent } from 'vue';
  import CustomersList from './CustomersList.vue';

  export default defineComponent({
    name: 'CustomersDashboard',
    components: {
      CustomersList,
    }
  });
</script>

<template>
  <div>
    <h1>Customers</h1>
    <CustomersList />
  </div>
</template>

<style>

</style>
