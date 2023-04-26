<template>
  <div class="container-fluid bg-black">
    <div class="container">
      <div class="row">
        <div class="col-12 m-2">
          <div class="nav">
            <ul class="list-unstyled text-white d-flex">
              <li>
                <router-link class="text-white text-decoration-none" to="/products">
                  課程內容&ensp;>&ensp;
                </router-link>
              </li>
              <li class="bg-white text-black rounded-1 px-1">{{ title }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row text-white pb-5">
        <div class="col-12 col-xl-6">
          <div class="card">
            <img :src="`${imgUrl}`" style="height:400px;background-repeat:no-repeat;background-size:100% 100%" alt="課程圖片">
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
              <del class="fs-7">原價{{ products.origin_price}}</del>
              <div class="fs-4">特價:{{ products.price }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="d-flex">
            <div class="product">
              <a class="me-3" href="#" v-for="item,index in imagesUrl" :key="`${index}`" @click.prevent="subImg(item,index)">
                <img v-if="item" :src="item" style="height:100px;width:100px;" alt="產品圖片" />
              </a>
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
      imgUrl: '',
      imagesUrl: [],
      title: '',
    }
  },
  methods: {
    subImg(item, index) {
      this.imgUrl = item;
    },
    getProduct() {
      const { id } = this.$route.params //從網址取得id
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.products = res.data.product
          this.title = res.data.product.title
          this.imgUrl = res.data.product.imageUrl
          this.imagesUrl = res.data.product.imagesUrl
        })
    }
  },
  mounted() {
    this.getProduct();
  }
}
</script>
