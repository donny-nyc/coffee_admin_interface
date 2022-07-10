<script lang="ts">
  import { defineComponent } from 'vue';
  import OrdersList from './OrdersList.vue';

  export default defineComponent({
    name: 'OrdersDashboard',
    
    components: {
      OrdersList,
    },
  });
</script>

<template>
  <h1>Orders</h1>
  <div id='top-order-metrics'>
    <span>Open: 5</span>
    <span>Complete: 23</span>
    <span>Lost: 0</span>
  </div>
  <OrdersList />
</template>

<style>
  #top-order-metrics {
    display: flex;
    width: 100%;
    flex-direction: row;
  }

  #top-order-metrics span {
    margin: 50px;
  }
</style>
