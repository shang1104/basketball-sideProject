<template>
  <main>
    <div class="container-fluid bg-black py-5">
      <div class="container">
        <div class="row">
          <h3 class="text-white text-center pb-10">所有課程</h3>
          <p class="text-white">分類 :
            <select class="bg-primary text-white" v-model="select" @change="filterProduct" name="" id="">
              <option :value="show" v-for="show in searchShow" :key="`${show}+123`">{{ show }}</option>
            </select>
          </p>
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
  <!-- <TestView></TestView> -->
</template>

<script> //
import { RouterLink } from "vue-router";
// import TestView from '../../components/TestView.vue';
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      products: {},
      productId: '',
      searchWords: {},
      searchShow: ['全部', '投籃', '運球', '防守', '基本動作'],
      select: '全部',
      filterProducts: [],
    };
  },
  components: {
    RouterLink,
  },
  methods: {
    filterProduct() {
      console.log(this.select);
      this.getProducts()
    },
    getProducts() {
      const loader = this.$loading.show({
        canCancel: false,
      })
      let category = this.select
      if (category == '全部') {
        category = ''
      }
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products?category=${category}`)
        .then((res) => {
          // console.log('產品料表', res)
          this.products = res.data.products;
          loader.hide()
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
        .post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          Swal.fire({
            title: '成功加入課程!',
            showConfirmButton: false,
            icon: 'success',
            timer: 1500
          })
        });
    },
    openModal(id) {
      this.productId = id
      this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/product/${id}`)
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