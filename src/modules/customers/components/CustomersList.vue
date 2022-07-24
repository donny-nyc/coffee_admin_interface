<script lang="ts">
import { defineComponent } from 'vue';
import customersFetcher from '../helpers/customers_fetcher'

export default defineComponent({
  name: 'CustomersList',
  data() {
    return {
      customers: []
    }
  },

  methods: {
    async fetchCustomers() {
      this.customers = await customersFetcher.get_active_customers();
    }
  },
  created() {
    this.fetchCustomers();
  }
});
</script>

<template>
  <div>
    <ul>
      <li v-for="customer in this.customers">
        {{customer.name}}
      </li>
    </ul>
  </div>
</template>
