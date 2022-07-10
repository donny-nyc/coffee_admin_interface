<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'PermissionsDashboard'
  });
</script>

<template>
  <div>
    <h1>Permissions</h1>
    <ul>
      <li>I'm not in love with the admin-admin naming scheme. I've got to find
        something better.
      </li>
      <li>So what can we do as an admin-admin? We can add new users to our org</li>
      <li>Are we global admin-admins? Or org-specific?</li>
      <li>We can reset passwords, and perform other mgmt. service functions</li>
      <li>We can set user and role-level permissions:
        eg: view-orders, create-orders, modify-orders
      </li>
      <li>Are we multi-tenant or single-tenant?</li>
      <li>Who is the default admin user (is there one?)</li>
      <li>Should admin-users be distinct from customer-users? If so, how?</li>
      <li>Would password resets, etc. be better aligned with the customers view?</li>
      <li>This might be better branded as a permissions view</li>
    </ul>
  </div>
</template>
