<script lang="ts">
import { defineComponent } from 'vue';
import type { Category, Product } from '../types';
import productsFetcher from '../helpers/products_fetcher';

export default defineComponent({
  name: 'ProductsList',
  data() {
    return {
      products: [] as Product[],
      categories: [] as Category[],
      selectedCategories: [] as Category[]
    }
  },

  methods: {
    async fetchProducts() {
      await productsFetcher.fetch_available_products();

      this.products = productsFetcher.get_products();
      this.categories = productsFetcher.get_categories();
    },
    async check(_: any) {
      await productsFetcher.fetch_available_products(this.selectedCategories);
      this.products = productsFetcher.get_products();
    }
  },
  async created() {
    await this.fetchProducts();
  }
});
</script>

<template>
  <div>
    <h2>Product List</h2>
    <div v-for="category in categories" v-bind:key="category.id">
      <input type="checkbox" v-bind:name="category.name" v-bind:value="category" v-model="selectedCategories" @change="check($event)" />
      <label v-bind:for="category.name">{{category.name}}</label>
    </div>
    <ul>
      <li v-for="product in this.products" v-bind:key="product.id">
        {{product.getName()}} - {{product.getDescription()}}
      </li>
    </ul>
  </div>
</template>
