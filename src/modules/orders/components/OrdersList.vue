<script lang="ts">
  import { defineComponent } from 'vue';
  import OrderEntry from './OrderEntry.vue';
  import fetcher from '../helpers/orders_fetcher';

  export default defineComponent({
    name: 'OrdersList',

    data() {
      return {
        orders: [],
      }
    },
    components: {
      OrderEntry,
    },
    methods: {
      async fetchOrders() {
        this.orders = await fetcher.get();
      },
    },
    mounted() {
        console.log('fetch orders');
        this.fetchOrders();
    },
  });
</script>

<template>
  <h2>Open Orders</h2>
  <table>
    <tr>
      <th />
      <th>ID</th>
      <th>Total</th>
      <th>Customer</th>
      <th>Created On</th>
      <th>Due By</th>
      <th>Status</th>
      <th>Tracking Number</th>
      <th>Courier</th>
    </tr>
    <OrderEntry v-for="order in this.orders" />
  </table>
</template>
