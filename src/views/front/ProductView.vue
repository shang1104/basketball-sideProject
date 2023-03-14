<template>
  <div class="container-fluid bg-black py-5">
    <div class="container">
      <div class="row">
        <h3 class="text-white text-center pb-10">所有課程</h3>
        <div class="col-12">
          <ul class="list-unstyled" v-for="product in products" :key="product.id">
            <li class="border border-1 border-outset rounded-3 text-white d-flex justify-content-center mb-9">
              <div class="col-4">
                <img class="me-4 rounded-5 p-4" style="max-width:90%" :src="product.imageUrl">
              </div>
              <div class="col-5 d-flex flex-column justify-content-center align-content-center align-content-lg-start">
                <h6 class="d-flex justify-content-center d-lg-block align-items-center text-center text-lg-start">{{ product.title }}</h6>
                <p class="description text-center text-lg-start">{{ product.description }}</p>
              </div>
              <div class="col-3 d-flex flex-column justify-content-around align-items-center">
                <p class="price text-w fst-italic">NT${{product.price}}</p>
                <button type="button" class="p-0 py-md-2 px-md-5 rounded-3 bg-black text-white border border-1 border-white join" @click="addToCart(product.id)">預約上課
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      products: {},
    };
  },
  components: {
    RouterLink,
  },
  methods: {
    getProducts() {
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          console.log(res)
          this.products = res.data.products;
          console.log(this.products)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToCart(id) {
      const data = {
        product_id: id,
        qty: 1,
      };
      this.$http
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          alert(`預約成功`)
        });
    },
  },
  mounted() {
    this.getProducts();
    // console.log(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
  },
};
</script>

<style>
.description {
  display: none;
}
@media (min-width: 768px) {
  .description {
    display: block;
  }
}
.price {
  font-size: 16px;
}
@media (min-width: 576px) {
  .price {
    font-size: 30px;
  }
}
.join {
  font-size: 16px;
}
.join:hover {
  color: black !important;
  background-color: white !important;
  border: 1px solid;
}
@media (min-width: 576px) {
  .join {
    font-size: 28px;
  }
}
</style>