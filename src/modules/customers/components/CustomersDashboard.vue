<script lang="ts">
  import { defineComponent } from 'vue';
  import CustomersList from './CustomersList.vue';

  export default defineComponent({
    name: 'CustomersDashboard',
    components: {
      CustomersList,
    }
  });
</script>

<template>
  <div>
    <h1>Customers</h1>
    <h2>ToDo</h2>
    <ul>
      <li>I want to review my customer's orders</li>
      <li>I want to manage my customer's contact details</li>
      <li>
        <ul>
          <li>I want to send / receive messages to the customer</li>
          <li>Like a live chat? Or email? Both?</li>
          <li>How do we effectively model conversations? Across multiple mediums</li>
        </ul>
      </li>
    </ul>

    <h2>Customer - Data Model</h2>
    <ul>
      <li>First Name</li>
      <li>Last Name (Is this still true?)</li>
      <li>...address</li>
      <li>...contacts</li>
      <li>...payments (what exactly?)</li>
    </ul>
    <CustomersList />
  </div>
</template>

<style>

</style>
