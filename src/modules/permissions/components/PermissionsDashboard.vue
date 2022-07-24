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
      <li>How do we register / manage permissions? Like any other resource?</li>
      <li>If so, how / where do we associate permissions with specific actions?</li>
      <li>Eg - how / where do we enfore that users-view lets us fetch the users
        within our organization?
      </li>
      <li>We should also consider permissions for anonymous users w/o logins
        or a purchase history
      </li>
    </ul>

    <h3>Let's enumerate permissions</h3>
    <h4>Users - incl. customers and admins</h4>
    <ul>
      <li>users-fetch-local - access to user records in our org.</li>
      <li>users-fetch-global - access to users across all orgs</li>
      <li>users-edit-{local,global} - can modify existing records (destructive?)</li>
      <li>users-create-{local,global} - can create new user records</li> 
    </ul>
    <h4>Permissions - meta</h4>
    <ul>
      <li>CRUD</li>
      <li>Would we need to scope global / local? I don't see why.</li>
    </ul>
    <h4>Payments</h4>
    <p>
      I suspect that these need to be scoped carefully. Generally speaking,
      only the user owning the payment method should be allowed to use it.
      There may be some exceptions where specific admins can create orders on
      behalf of a given user, and apply their payment method, but this should
      be rare.
    </p>
    <ul>
      <li>payment-create { payment_method: xxxx }</li>
      <li>payment-edit</li>
    </ul>
  </div>
</template>
