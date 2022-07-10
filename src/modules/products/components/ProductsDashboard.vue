<script lang="ts">
  import { defineComponent } from 'vue';
  import ProductsList from './ProductsList.vue';

  export default defineComponent({
    name: "ProductsDashboard",
    components: {
      ProductsList,
    }
  });
</script>

<template>
  <div>
    <h1>Products</h1>
    <ProductsList />
  </div>
</template>

<style>

</style>
