<script lang="ts">
import { defineComponent } from 'vue';
import type { Category, Product } from '../types';
import { productsClient } from '../clients';
import { RouterLink } from 'vue-router';

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

      console.log(this.products);
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
    },
    checkAllProduct(_: any) {
      if (this.selectedProducts.length < this.products.length) {
        this.products.forEach((product: Product) => {
          this.selectedProducts.push(product.getId());
        });
      } else {
        this.selectedProducts = [];
      }

      console.log('selectedProducts:', this.selectedProducts);
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
    <button @click="fetchProducts()">Fetch All</button>
    <div v-for="category in categories" v-bind:key="category.id">
      <input type="checkbox" v-bind:name="category.name" v-bind:value="category" v-model="selectedCategories" @change="check($event)" />
      <label v-bind:for="category.name">{{category.name}}</label>
    </div>
    <table id='products_table'>
      <tr id='products_table_header'>
        <th>
          <input type="checkbox" @change="checkAllProduct($event)" />
        </th>
        <th>ID</th>
        <th>Name</th>
        <th>Description</th>
        <th />
      </tr>
      <tr class="products_table_row" v-for="product in this.products" v-bind:key="product.id">
        <td>
          <input type="checkbox" v-bind:name="product.name" v-bind:value="product.id" v-model="selectedProducts" @change="checkProduct($event)" />
        </td>
        <td>
          {{product.getId()}} 
        </td>
        <td> 
          {{product.getName()}} 
        </td>
        <td> 
          {{product.getDescription()}}
        </td>
        <td> 
          <router-link :to="{ name: 'editProduct', params:{'productId': product.getId()}}">edit</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<style @scoped>
  #products_table {
    width: 100%;
    color: #DDD;
    line-height: 3;
  }

  #products_table a {
    padding: 10px 20px 10px 20px;
  }

  #products_table a:link {
    text-decoration: none;  
  }

  #products_table a:hover {
    text-decoration: underline;  
  }

  .products_table_row {
    background-color: #555;
    text-align: center;
  }

  #products_table_header {
    background-color: #111;
  }
</style>
