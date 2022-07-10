<script lang="ts">
import { defineComponent } from 'vue';
import productsFetcher from '../helpers/products_helper';

export default defineComponent({
  name: 'ProductsList',
  data() {
    return {
      products: []
    }
  },

  methods: {
    async fetchProducts() {
      this.products = await productsFetcher.get();
    }
  },
  mounted() {
    console.log('products list');
    this.fetchProducts();
  }
});
</script>

<template>
  <div>
    <h2>Product List</h2>
    <ul>
      <li v-for="product in this.products">
        {{product.name}} - {{product.description}}
      </li>
    </ul>
  </div>
</template>
