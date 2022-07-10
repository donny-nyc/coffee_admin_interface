<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import ProductsDashboard from '@/modules/products/components/ProductsDashboard.vue';
import CustomersDashboard from '@/modules/customers/components/CustomersDashboard.vue';
</script>

<template>
  <div>
    <ProductsDashboard />
    <CustomersDashboard />
  </div>
</template>

<style>
</style>
