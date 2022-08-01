<script lang="ts">
  import { defineComponent } from 'vue';
  import Product from '../types/product';
  import { productsClient } from '../clients';
  
  export default defineComponent({
    name: 'NewProduct',
    data() {
      return {
        name: '',
        description: '',
        category_id: 0,
        attributes: [] as { name: String, value: String}[]
      }
    },
    methods: {
      async createProduct() {
        await productsClient.create_product(new Product(this.name, this.category_id, this.attributes, this.description));
        console.log(this.name, this.description, this.category_id, this.attributes); 
      },
      async addAttribute() {
        this.attributes.push({name: '', value: ''});
      }
    }
  });
</script>

<template>
  <div>
    <h1>New Product</h1>

    <input type="text" name="name" v-model='name' />
    <label for="name">Name</label>
    <br />

    <input type="text" name="description" v-model='description' />
    <label for="description">Description</label>
    <br />

    <label for="category_id">Category</label>
    <select name="category_id" list="category_id" v-model='category_id'>
      <option value="1">Clothing</option>
      <option value="2">Electronics</option>
      <option value="3">Food and Beverage</option>
    </select>
    <br />

    <h2>Attributes</h2>
    <button @click="addAttribute()">Add Attribute</button>
    <div v-for='(attribute, index) in attributes' v-bind:key='index'>
      <input type="text" name='name' v-model='attribute.name' />
      <label for='name'>Name</label>

      <input type="text" name="value" v-model='attribute.value' />
      <label for='value'>Value</label>
    </div>

    <button @click="createProduct()">Submit</button>
  </div>
</template>

<style>

</style>
