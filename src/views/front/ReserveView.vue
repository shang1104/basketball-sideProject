<template>
  <main class="bg-black">
    <div class="container-fluid py-5" v-if="cart.total>0">
      <div class="container">
        <div class="row">
          <h3 class="text-white text-center pb-10">已預約課程</h3>
          <div class="col-12 col-sm-8 mx-auto">
            <table class="table align-middle">
              <thead>
                <tr class="text-white">
                  <th class="col-2">上課名稱</th>
                  <th class="col-1" style="50px;">堂數</th>
                  <th class="col-2">價格</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="cart.carts">
                  <tr class="tableDark" v-for="item in cart.carts" :key="item.id">
                    <td class="text-white">
                      {{ item.product.title }}
                    </td>
                    <td>
                      <div class="input-group input-group-sm">
                        <select name="" id="" class="form-control bg-black text-white" v-model="item.qty" @change="updateCartItem(item)" :disabled="item.id === cartItem">
                          <option :value="i" v-for="i in 20" :key="i +'123'">{{ i }}</option>
                        </select>
                      </div>
                    </td>
                    <td class="text-white d-flex justify-content-between">
                      {{ item.product.price }}
                      <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteItem(item)" :disabled="item.id === cartItem"><i class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </template>
              </tbody>
              <tfoot>
                <tr class="text-white">
                  <td colspan="2" class="text-end">總計</td>
                  <td>{{ cart.total }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-10" v-else>
      <div class="row text-center">
        <div class="col-12 text-center">
          <p class="text-white mb-3 fs-6">目前並無任何課程預約</p>
          <p class="text-white fs-6">返回課程頁面</p>
          <RouterLink to="/products" class="text bg-white fs-1 px-1 border border-1 rounded-3 text-decoration-none">預約上課</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      products: [],
      productId: '',
      cart: {},
      cartItem: '', //存id
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
          // console.log('產品列表', res.data.products);
          this.products = res.data.products
        })
    },
    openModal(id) {
      this.productId = id;
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
          // console.log('購物車', res.data);
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
      this.cartItem = item.id
      // console.log(data, item.id);
      this.$http.put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`, { data })
        .then(res => {
          console.log('更新購物車', res.data);
          this.getCarts();
          this.cartItem = '';
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
    //電話認證
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需為正確的手機號碼格式'
    },
  },
  mounted() {
    this.getProducts();
    this.getCarts();
  }
}
</script>

<style scoped>
main {
  min-height: calc(100vh - 168px);
}
.container-fluid {
  min-height: calc(100vh - 22vh);
}
</style>