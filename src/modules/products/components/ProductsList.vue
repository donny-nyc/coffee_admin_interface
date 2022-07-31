<script lang="ts">
import { defineComponent } from 'vue';
import type { Category, Product } from '../types';
import { productsClient } from '../clients';

export default defineComponent({
  name: 'ProductsList',
  data() {
    return {
      products: [] as Product[],
      categories: [] as Category[],
      selectedCategories: [] as Category[],
      selectedProducts: [] as string[]
    }
  },

  methods: {
    async fetchProducts() {
      await productsClient.fetch_available_products();

      this.products = productsClient.get_products();
      this.categories = productsClient.get_categories();
    },
    async deleteProducts() {
      await productsClient.delete_products(this.selectedProducts);
      this.selectedProducts = [];

      await this.fetchProducts();
    },
    async deleteAllProducts() {
      await productsClient.delete_all_products();
      this.selectedProducts = [];

      await this.fetchProducts();
    },
    async check(_: any) {
      await productsClient.fetch_available_products(this.selectedCategories);
      this.products = productsClient.get_products();
    },
    async checkProduct(_: any) {
      console.log(this.selectedProducts);
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
    <button @click="deleteProducts()">Delete Products</button>
    <button @click="deleteAllProducts()">Delete All</button>
    <div v-for="category in categories" v-bind:key="category.id">
      <input type="checkbox" v-bind:name="category.name" v-bind:value="category" v-model="selectedCategories" @change="check($event)" />
      <label v-bind:for="category.name">{{category.name}}</label>
    </div>
    <ul>
      <li v-for="product in this.products" v-bind:key="product.id">
        <input type="checkbox" v-bind:name="product.name" v-bind:value="product.id" v-model="selectedProducts" @change="checkProduct($event)" />
        <label v-bind:for="product.name">
          {{product.getId()}} - {{product.getName()}} - {{product.getDescription()}}
        </label>
      </li>
    </ul>
  </div>
</template>
