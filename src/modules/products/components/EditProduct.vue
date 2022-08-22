<script lang="ts">
  import { defineComponent } from 'vue';
  import Product from '../types/product';
  import { productsClient } from '../clients';
  
  export default defineComponent({
    name: 'EditProduct',
    props: {
      productId: String
    },
    data() {
      return {
        id: '',
        name: '',
        description: '',
        categories: [],
        category_id: 0,
        attributes: [] as { name: String, value: String}[]
      }
    },
    methods: {
      async fetchProduct() {
        await productsClient.fetch_product(this.productId);

        const products = productsClient.get_products();

        if(productsClient.no_products()) {
          console.error('Failed to fetch:', this.productId);
          return;
        }

        console.log(products);

        const product = products[0];
        console.log('product:', product);

        this.id = product.getId();
        this.name = product.getName();
        this.description = product.getDescription();
        this.category_id = product.getCategoryId();
        this.attributes = product.getAttributes();
      },
      async updateProduct() {
        await productsClient.update_product(new Product(this.name, this.category_id, this.attributes, this.description, this.id));
        console.log(this.name, this.description, this.category_id, this.attributes); 
      },
      async addAttribute() {
        this.attributes.push({name: '', value: ''});
      },
      removeAttribute(idx: number) {
        if(idx < 0) {
          console.error('negative index not allowed:', idx);
          return;
        }

        if(idx >= this.attributes.length) {
          console.error('index out of bounds:', idx);
          return;
        }

        this.attributes.splice(idx, 1);
      }
    },
    async created() {
      await this.fetchProduct(); 

      this.categories = await productsClient.get_categories();
      console.log(this.categories);

      console.log(this.productId);
    }
  });
</script>

<template>
  <div id='edit_product_form'>
    <h1>Edit Product - {{ productId }}</h1>

    <label for="name">Name</label><br />
    <input type="text" name="name" v-model='name' /><br />
    <br />

    <label for="description">Description</label><br />
    <input type="text" name="description" v-model='description' /><br />
    <br />

    <label for="category_id">Category</label><br />
    <select name="category_id" list="category_id" v-model='category_id'>
      <option v-for="category in this.categories" v-bind:value="category.id" v-bind:key="category.id">
        {{category.name}}
      </option>
    </select>
    <br />

    <h2>Attributes</h2>
    <div v-for='(attribute, index) in attributes' v-bind:key='index'>
      <label for='name'>Name</label>
      <input type="text" name='name' v-model='attribute.name' />

      <label for='value'>Value</label>
      <input type="text" name="value" v-model='attribute.value' />
      <button @click="removeAttribute(index)">Remove</button>
    </div>

    <button @click="addAttribute()">Add Attribute</button>
    <button @click="updateProduct()">Submit</button>
  </div>
</template>

<style>
  #edit_product_form {
    background-color: #333;
    color: #eee;
  }

  #edit_product_form input, select {
    background-color: #333;
    color: #eee;
    border-width: 0 0 2px 0;
  }
</style>
