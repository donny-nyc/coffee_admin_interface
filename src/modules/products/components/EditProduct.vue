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
        category_id: 0,
        attributes: [] as { name: String, value: String}[]
      }
    },
    methods: {
      async fetchProduct() {
        const product: Product = await productsClient.fetch_product(this.productId);

        if(!product) {
          console.error('Failed to fetch:', this.productId);
          return;
        }

        console.log(product);

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
      console.log(this.productId);

      await this.fetchProduct(); 
    }
  });
</script>

<template>
  <div>
    <h1>Edit Product - {{ productId }}</h1>

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
      <button @click="removeAttribute(index)">Remove</button>
    </div>

    <button @click="updateProduct()">Submit</button>
  </div>
</template>

<style>

</style>
