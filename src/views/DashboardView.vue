<template>
  <div class="container-fluid">
    <nav class="py-6 border-bottom border-secondary">
      <router-link class="ext-primary text-decoration-none mx-2" to="/admin">後台首頁</router-link>
      <router-link class="text-primary text-decoration-none mx-2" to="/admin/order">後台訂單列表</router-link>
      <router-link class="text-primary text-decoration-none mx-2" to="/admin/products">後台產品列表</router-link>
      <router-link class="text-primary text-decoration-none mx-2" to="/">登出</router-link>
    </nav>
  </div>
  <RouterView></RouterView>

</template>
<script>
import { RouterView } from "vue-router";
export default {
  components: {
    RouterView
  }
}
</script>