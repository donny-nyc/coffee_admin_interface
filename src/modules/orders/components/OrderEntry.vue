<script lang="ts">
  import { defineComponent } from 'vue';
  import CustomerOrder from '../types/customer_order';

  export default defineComponent({
    name: 'OrderEntry',
    props: {
      order: Object as () => CustomerOrder
    },
    data() {
      return {
        order_item_visibility: 'hidden'
      };
    },
    methods: {
      toggle_show() {
        if(this.order_item_visibility != 'hidden') {
          this.order_item_visibility = 'hidden';
        } else {
          this.order_item_visibility = '';
        }
      }
    }
  });
</script>

<template>
  <table>
    <tr>
      <td><button @click="toggle_show()">Show</button></td>
      <td>{{this.order.id}}</td>
      <td>{{this.order.total_amount}}</td>
      <td><a href="#">{{this.order.customer.name}}</a></td>
      <td>{{this.order.created_on}}</td>
      <td>{{this.order.expected_by}}</td>
      <td>{{this.order.order_status}}</td>
      <td><a href="#">{{this.order.tracking_number}}</a></td>
      <td>UPS</td>
    </tr>
  </table>
  <table v-bind:class="order_item_visibility">
    <tr>
      <th>ID</th>
      <th>Quantity</th>
      <th>Unit Price</th>
      <th>Total</th>
    </tr>
    <tr>
      <td>1</td>
      <td>4,513</td>
      <td>1</td>
      <td>4,513.00</td>
    </tr>
  </table>
</template>

<style scoped>
  .hidden {
    display: none;
  }
</style>
