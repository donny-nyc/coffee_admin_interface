<script lang='ts'>
  import { defineComponent } from 'vue';
  import type { Product } from '../types';
  import productsFetcher from '../helpers/products_fetcher';

  export default defineComponent({
    name: "Edit",
    props: {
      product_id: Number
    },
    setup(props) {
      props.product_id;
    },
    data() {
      return {
        product: {} as Product
      }
    },
    methods: {
      async fetchProduct() {
        this.product = await productsFetcher.fetch_product(this.product_id);
      }
    },
    async created() {

    }
  });
</script>

<template>

</template>

<style>

</style>
