<template>
  <div class="custom-loading" v-if="active">
    <div class="preloader d-flex align-items-center justify-content-center">
      <div class="preloader-circle"></div>
      <div class="preloader-img pere-text">
        <img src="assets/img/logo.png" alt="logo" />
        <span class="small text-warning fw-bold d-block mt-5">LOADING…</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean
  }
}
</script>