<template>
  <!-- {{product.category}}
  {{product.content}}
  {{product.description}}
  {{product.id}}
  {{product.imageUrl}}
  {{product.price}}
  {{product.origin_price}}
  {{product.unit}}
  {{product.num}} -->
  <div class="container-fluid bg-black">
    <div class="container">
      <div class="row">
        <div class="col-12 m-2">
          <div class="nav">
            <ul class="list-unstyled text-white d-flex">
              <li class="me-1">首頁 > </li>
              <li class="me-1">課程頁面 > </li>
              <li class="bg-white text-black rounded-1 px-1">課程細節</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <div v-for="product in products" :key="product.id"></div> -->
      <div class="row text-white">
        <div class="col-12 col-xl-6">
          <div class="card">
            <img :src="products.imageUrl" style="height:400px;background-repeat:no-repeat;background-size:100% 100%" alt="防守圖片">
          </div>
        </div>
        <div class="col-12 col-xl-6 d-flex flex-column justify-content-between">
          <div class="mb-xl-2">
            <h3 class="mt-2 mt-xl-0">{{ products.category }}</h3>
            <p class="mt-xl-5 fs-8">{{products.description}}</p>
          </div>
          <div class="d-flex flex-column align-items-end me-10 mb-10">
            <div class="fs-7" v-if="products.origin_price === products.price">原價:{{ products.origin_price }}</div>
            <div v-else>
              <div class="fs-4">原價:{{ products.origin_price }}</div>
              <del class="fs-7">特價{{ products.price}}</del>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      products: {},
    }
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params //從網址取得id
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.products = res.data.product
          console.log('取得客戶產品', res.data.product);
        })
    }
  },
  mounted() {
    this.getProduct();
  }
}
</script>
