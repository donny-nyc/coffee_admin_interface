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
    <ul>
      <li>How is the `Products` view different from inventory?</li>
      <li>
        <p>
          Products should track the distinct items / services available for sale.
          Inventory should keep track of how many of those physical items are
          available, and where they are located in our system.
        </p>
      </li>
      <li>What service is responsible for pricing? Is `Product` strictly 
        descriptive metadata, and Inventory strictly quantities / locations?
      </li>
      <li>Price shouldn't be a fixed quantity. Many inputs we should consider.</li>
      <li>Requires additional complexity: how do we model price for
        arbitrary goods and services?
      </li>

      <li>How do we determine a fair price for a given product?</li>
      <li>Commodity price? Similar products? How do we pull these values
        and how often? Do we need real-time, or periodic?
      </li>

      <li>We can't nail down product metadata. Other than a few generic
        attributes, the interesting qualities are going to vary from one
        asset type to another
      </li>

      <li>Where do we manage available products? I'm assuming those use-cases are
        being serviced here? Basic CRUD operations: creating, editing, dropping
        available product classes?
      </li>

      <li>What about static assets? How are we managing multimedia content?
        images, video, audio, etc.?
      </li>
    </ul>

    <ul>
      <li>Products Data Model</li>
      <li>id</li>
      <li>Name: string</li>
      <li>Description: string</li>
    </ul>
    <ProductsList />
  </div>
</template>

<style>

</style>
