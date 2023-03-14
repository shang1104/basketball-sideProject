<template>
  <!-- 所有課程 -->
  <main>
    <div class="container-fluid bg-black py-5">
      <div class="container">
        <div class="row">
          <h3 class="text-white text-center pb-10">所有課程</h3>
          <table class="table">
            <thead class="text-white">
              <tr class="text-center bg-primary">
                <th class="col-2">圖片</th>
                <th class="col-3">上課名稱</th>
                <th class="col-1 text-nowrap">堂數</th>
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
                  <button @click="addToCard(product.id)" type="button" class="btn btn-pink text-white text-nowrap">加入課程</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
  <!-- 已預約課程 -->
  <main>
    <div class="container-fluid bg-black py-5">
      <div class="container">
        <div class="row">
          <h3 class="text-white text-center pb-10">已預約課程</h3>
          <div class="col-12 mx-auto">
            <table class="table align-middle">
              <thead>
                <tr class="text-white bg-primary">
                  <th class="col-1"></th>
                  <th class="col-2">上課名稱</th>
                  <th class="col-1" style="50px;">堂數</th>
                  <th class="col-2">價格</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="cart.carts">
                  <tr class="tableDark" v-for="item in cart.carts" :key="item.id">
                    <td></td>
                    <td class="text-white">
                      {{ item.product.title }}
                    </td>
                    <td>
                      <div class="input-group input-group-sm">
                        <select name="" id="" class="form-control bg-black text-white" v-model="item.qty" @change="updateCartItem(item)" :disabled="item.id === loadingItem">
                          <option :value="i" v-for="i in 20" :key="i +'123'">{{ i }}</option>
                        </select>
                      </div>
                    </td>
                    <td class="text-white d-flex justify-content-between">
                      {{ item.product.price }}
                      <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteItem(item)" :disabled="item.id === loadingItem"><i class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </template>
              </tbody>
              <tfoot>
                <tr class="text-white">
                  <td colspan="3" class="text-end">總計</td>
                  <td>{{ cart.total }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- 報名表單 -->
  <main>
    <div class="container-fulid bg-black py-5">
      <div class="container">
        <div class="row">
          <h3 class="text-white text-center pb-9">報名表單</h3>
          <div class="col-sm-8 col-lg-6 col-xl-4 mx-auto">
            <VForm v-slot="{ errors }" class="form-signin position-relative text-center">
              <div class="form-floating text-white mb-6">
                <label for="name" class="text-white me-5">姓名</label>
                <VField id="name" name="姓名" type="text" rules="required" class="text-black" :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" />
                <ErrorMessage name="姓名" class="invalid-feedback" />
              </div>
              <div class="form-floating text-white mb-6">
                <label for="age" class="text-white me-5">年齡</label>
                <VField id="age" name="年齡" type="number" rules="required" class="text-black" :class="{ 'is-invalid': errors['年齡'] }" placeholder="請輸入年齡" />
                <ErrorMessage name="年齡" class="invalid-feedback" />
              </div>
              <div class="form-floating text-white mb-6">
                <label for="sex" class="text-white me-5">性別</label>
                <VField id="sex" name="性別" type="radio" rules="required" class="text-black" :class="{ 'is-invalid': errors['性別'] }" placeholder="請選擇性別" as="radio" />
                <span class="me-3" value="man">男性</span>
                <input class="me-9" type="radio" name="性別" id="man">
                <span class="me-3" value="male">女性</span>
                <input class="me-9" type="radio" name="性別" id="male">
                <ErrorMessage name="sex" class="invalid-feedback" />
              </div>
              <div class="form-floating text-white mb-6">
                <label for="group" class="text-white me-5">個人/團體</label>
                <VField id="group" name="個人/團體" type="radio" rules="required" class="text-black" :class="{ 'is-invalid': errors['個人團體'] }" placeholder="請選擇個人或團體" as="radio" />
                <span class="me-3" value="single">個人</span>
                <input class="me-9" type="radio" name="個人/團體" id="single">
                <span class="me-3" value="group">團體</span>
                <input class="me-9" type="radio" name="個人/團體" id="group">
                <ErrorMessage name="個人/團體" class="invalid-feedback" />
              </div>
              <div class="form-floating text-white mb-6">
                <label for="level" class="text-white me-5">組別</label>
                <VField id="level" name="組別" rules="required" class="text-black d-none" :class="{ 'is-invalid': errors['組別'] }" placeholder="請選擇組別" as="select" />
                <select v-validate="'included:高中,國中,國小'" name="組別" id="組別">
                  <option value="">請選擇組別</option>
                  <option value="高中">高中</option>
                  <option value="國中">國中</option>
                  <option value="國小">國小</option>
                </select>
                <ErrorMessage name="分類" class="invalid-feedback" />
              </div>
              <div class="form-floating text-white mb-6">
                <label for="tel" class="text-white me-5">請輸入電話</label>
                <VField id="tel" name="電話" type="text" :rules="isPhone" class="text-black" :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話" />
                <ErrorMessage name="電話" class="invalid-feedback" />
              </div>
              <div class="form-floating text-white mb-6">
                <label for="email" class="text-white me-5">請輸入信箱</label>
                <VField id="email" name="信箱" type="text" rules="required|email" class="text-black" :class="{ 'is-invalid': errors['信箱'] }" placeholder="請輸入信箱" />
                <ErrorMessage name="信箱" class="invalid-feedback" />
              </div>
              <div class="d-flex justify-content-center mt-5">
                <button type="submit" class="btn btn-primary border border-1 border-secondary text-white">
                  送出報名表單
                </button>
              </div>
            </VForm>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { RouterLink } from "vue-router";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      products: [],
      productId: '',
      cart: {},
      loadingItem: '', //存id
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',

      }
    }
  },
  methods: {
    getProducts() {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
        .then(res => {
          console.log('產品列表', res.data.products);
          this.products = res.data.products
        })
    },
    openModal(id) {
      this.productId = id;
      console.log('外層帶入 productId', id);
    },
    //新增購物車
    addToCard(product_id, qty = 1) { //當qty沒有傳入該參數時，會使用預設值
      const data = {
        product_id,
        qty,
      };
      this.$http.post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data })
        .then(res => {
          console.log('加入購物車', res.data)
          // this.$refs.productModal.hide();
          this.getCarts();
          this.getProducts();
          alert('已預約課程')
        })
    },
    //取得購物車
    getCarts() {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then(res => {
          console.log('購物車', res.data);
          this.products = res.data.products
          this.cart = res.data.data
        })
      this.getProducts()
    },
    //修改購物車
    updateCartItem(item) { //購物車的id , 產品的id
      const data = {
        product_id: item.product.id,
        qty: item.qty,
      };
      this.loadingItem = item.id
      // console.log(data, item.id);
      this.$http.put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`, { data })
        .then(res => {
          console.log('更新購物車', res.data);
          this.getCarts();
          this.loadingItem = '';
        })
      this.getProducts();
    },
    deleteItem(item) { //購物車的id , 產品的id
      this.$http.delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`)
        .then(res => {
          console.log('刪除購物車', res.data);
          this.getCarts();
        })
    },
    onSubmit() {
      console.log(`有跳出onSubmit`);
    },
    //電話認證
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需為正確的手機號碼格式'
    },
  },
  //區域註冊
  // components: {
  //   productModal,
  // },
  mounted() {
    this.getProducts();
    this.getCarts();
  }
}
</script>

<style>
.form-signin > .form-floating > label {
  padding: 0px;
  position: absolute;
  top: 0;
  left: 30px;
}
.tableDark:hover {
  background-color: #221a4f;
}
</style>