<template>
  <main>
    <div class="container-fluid bg-black py-5">
      <div class="container">
        <div class="row">
          <h3 class="text-white text-center pb-10">所有課程</h3>
          <table class="table">
            <thead class="text-white">
              <tr class="text-center">
                <th class="col-2 ">圖片</th>
                <th class="col-3">上課名稱</th>
                <th class="col-1 text-nowwrap">堂數</th>
                <th class="col-1">價格</th>
                <th class="col-1 text-nowrap">查看細節</th>
                <th class="col-1 text-nowrap">加入課程</th>
              </tr>
            </thead>
            <tbody class="text-white">
              <tr class="text-center tableDark" v-for="product in products" :key="product.id">
                <th>
                  <div style="height: 100px; 
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center" :style="{backgroundImage:`url(${product.imageUrl})`}"></div>
                </th>
                <td class="align-middle">{{ product.title }}</td>
                <td class="align-middle">{{ product.unit }}</td>
                <td class="align-middle">{{ product.price }}</td>
                <td class="align-middle">
                  <button @click="openModal(product.id)" type="button" class="btn btn-primary text-white text-nowrap me-2">查看更多</button>
                </td>
                <td class="align-middle">
                  <button @click="addToCart(product.id)" type="button" class="btn btn-pink text-white text-nowrap">加入課程</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
  <TestView></TestView>
</template>

<script> //
import { RouterLink } from "vue-router";
import TestView from '../../components/TestView.vue';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

const productModal = {
  props: ['id'],
  data() {
    return {
      modal: {},
      tempProduct: {},
    };
  },
  // template: '#userProductModal',
  mounted() {
    // this.modal = new bootstrap.Modal(this.$refs.modal);
  }
}

export default {
  data() {
    return {
      products: {},
      productId: '',
    };
  },
  components: {
    RouterLink, TestView,
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
    openModal(id) {
      this.productId = id
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          console.log(res);
          this.$router.push(`/product/${id}`)
        })
      // console.log('外層帶入 productId', id)

    }
  },
  mounted() {
    this.getProducts();
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