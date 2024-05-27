<template>
  <main class="bg-black">
    <div class="container-fluid py-5">
      <div class="container">
        <div class="row">
          <h3 class="text-white text-center pb-10">所有課程</h3>
          <p class="text-white">分類 :
            <select class="bg-primary text-white" v-model="select" @change="filterProduct" name="" id="">
              <option :value="show" v-for="show in searchShow" :key="`${show}+123`">{{ show }}</option>
            </select>
          </p>
          <div class="col-12">
            <table class="table border-collapse">
              <thead class="text-white">
                <tr class="text-center d-none d-md-table-row">
                  <th class="col-md-3">圖片</th>
                  <th class="col-md-3">上課名稱</th>
                  <th class="col-md-1">堂數</th>
                  <th class="col-md-1">價格</th>
                  <th class="col-md-1">查看細節</th>
                  <th class="col-md-1">加入課程</th>
                </tr>
              </thead>
              <tbody class="text-white">
                <tr class="text-center tableDark border border-start-0 border-end-0 border-bottom-1" v-for="product in products" :key="product.id">
                  <!-- 電腦版 -->
                  <td class="col-md-4 border-0 d-none d-md-table-cell" style="height: 100px;">
                    <img :src="product.imageUrl" style="height:100px" alt="">
                  </td>
                  <td class="col-md-3 align-middle border-0 d-none d-md-table-cell">{{ product.title }}</td>
                  <td class=" align-middle border-0 d-none d-md-table-cell">{{ product.unit }}</td>
                  <td class="col-md-1 align-middle border-0 d-none d-md-table-cell">NT${{ product.price }}</td>
                  <td class="col-md-1 d-flex d-md-table-cell align-middle border-0 d-none d-md-table-cell">
                    <button @click="openModal(product.id)" type="button" class="btn btn-primary btn-sm text-white text-nowrap me-2">查看更多</button>
                  </td>
                  <td class="col-1 col-md-1 d-flex d-md-table-cell align-middle border-0 d-none d-md-table-cell">
                    <button @click="addToCart(product.id)" type="button" class="btn btn-pink btn-sm text-white text-nowrap">加入課程</button>
                  </td>
                  <!-- 手機版 -->
                  <td class="col-6 border-0 d-table-cell d-md-none" style="height: 100px; 
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center" :style="{backgroundImage:`url(${product.imageUrl})`}">
                  </td>
                  <td class="col-3 align-middle border-0 d-table-cell d-md-none">{{ product.title }}</td>
                  <td class="d-none d-md-table-cell align-middle border-0 d-table-cell d-md-none">{{ product.unit }}</td>
                  <td class="col-1 align-middle border-0 d-table-cell d-md-none">NT$<br>{{ product.price }}</td>
                  <td class="col-1 d-flex d-md-table-cell align-middle border-0 d-table-cell d-md-none">
                    <button @click="openModal(product.id)" type="button" class="btn btn-primary btn-sm text-white text-nowrap me-2">查看更多</button>
                  </td>
                  <td class="col-1 d-flex d-md-table-cell align-middle border-0 d-table-cell d-md-none">
                    <button @click="addToCart(product.id)" type="button" class="btn btn-pink btn-sm text-white text-nowrap">加入課程</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script> 
import { RouterLink } from "vue-router";
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
          console.log('產品料表', res)
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
main {
  min-height: calc(100vh - 168px);
}
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
