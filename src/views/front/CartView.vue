<template>
  <!-- 填寫資訊 , 確認付款 , 訂單完成 -->
  <section class="bg-black">
    <div class="container-fluid bg-black py-10">
      <ul class="row justify-content-center list-unstyled m-0">
        <li class="col-8 d-flex flex-column flex-md-row justify-content-md-around text-white text-center">
          <div class="badge rounded-pill fs-7 bg-white text-primary mb-2 mb-md-0">1.填寫資訊</div>
          <div class="badge rounded-pill fs-7 bg-secondary text-primary mb-2 mb-md-0">2.確認付款</div>
          <div class="badge rounded-pill fs-7 bg-secondary text-primary mb-2 mb-md-0">3.付款完成</div>
        </li>
      </ul>
    </div>
    <!-- 要把已預約的課程 顯示此頁 -->
    <div class="container-fluid bg-black py-5">
      <div class="container">
        <div class="row d-flex justify-content-center mb-md-9 mb-0">
          <div class="col-md-10 col-lg-6 mb-4 mb-xl-0">
            <!-- <h6 class="text-white text-left">已預約課程</h6> -->
            <table class="table align-middle vl-parent">
              <thead ref="formContainer">
                <tr class="text-white">
                  <th class="col-2">上課名稱</th>
                  <th class="col-3 text-center" style="50px;">堂數</th>
                  <th class="col-4 col-sm-1 col-lg-1   col-xl-1">價格</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="cart.carts">
                  <tr class="tableDark" v-for="item in cart.carts" :key="item.id">
                    <td class="text-white text-nowrap">
                      {{ item.product.title }}
                    </td>
                    <td>
                      <div class="input-group input-group-sm">
                        <select name="" id="" class="form-control bg-black text-white text-center" v-model="item.qty" @change="updateCartItem(item)" :disabled="item.id === cartItem">
                          <option :value="i" v-for="i in 20" :key="i +'123'">{{ i }}</option>
                        </select>
                      </div>
                    </td>
                    <td class="text-white">
                      <span class="me-1 me-sm-5">
                        {{ item.final_total }}
                      </span>
                      <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteItem(item)" :disabled="item.id === cartItem"><i class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </template>
              </tbody>
              <tfoot>
                <tr class="text-white">
                  <td colspan="2" class="text-end">總計</td>
                  <td>{{ cart.final_total }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-md-10 col-lg-6">
            <!-- <h6 class="text-white text-center mb-9">填寫個人資料</h6> -->
            <VForm v-slot="{ errors }" @submit="createOrder">
              <div class="text-white mb-3 d-flex flex-column text-start">
                <label for="name" class="text-white form-label">姓名</label>
                <VField id="name" name="姓名" type="text" rules="required" v-model="form.user.name" class="text-black" :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" />
                <ErrorMessage name="姓名" class="invalid-feedback" />
              </div>
              <div class="text-white mb-6 d-flex flex-column text-start">
                <label for="tel" class="text-white">請輸入電話</label>
                <VField id="tel" name="電話" type="text" :rules="isPhone" v-model="form.user.tel" class="text-black" :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話" />
                <ErrorMessage name="電話" class="invalid-feedback" />
              </div>
              <div class="text-white mb-6 d-flex flex-column text-start">
                <label for="address" class="text-white">上課地點</label>
                <VField id="address" name="地址" type="text" rules="required" v-model="form.user.address" class="text-black" :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入上課地點" />
                <ErrorMessage name="地址" class="invalid-feedback" />
              </div>
              <div class="text-white mb-6 d-flex flex-column text-start">
                <label for="email" class="text-white">請輸入信箱</label>
                <VField id="email" name="信箱" type="text" rules="required|email" v-model="form.user.email" class="text-black" :class="{ 'is-invalid': errors['信箱'] }" placeholder="請輸入信箱" />
                <ErrorMessage name="信箱" class="invalid-feedback" />
              </div>
              <div class="text-white mb-6 d-flex flex-column text-start">
                <label for="start">上課時間</label>
                <!-- <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31"> -->
                <!-- <VueDatePicker :value="dateValue" :min="minDate" :max="maxDate" placeholder="chose" v-model="date"></VueDatePicker> -->
                <VueDatePicker v-mode="date" locale="zh-cn" value-format="yyyy-MM-dd hh:mm:ss"></VueDatePicker>
              </div>
              <div class=" text-white mb-6 d-flex flex-column text-start">
                <label for="paymentMethod" class="form-label">付款方式</label>
                <select class="form-control" name="paymentMethod" id="paymentMethod" v-model="form.user.paymentMethod">
                  <option value="信用卡">信用卡</option>
                  <option value="現金付款">現金付款</option>
                </select>
              </div>
              <div class="d-flex justify-content-center mt-5">
                <button type="submit" class="btn btn-white text-black">
                  送出報名表
                </button>
              </div>
            </VForm>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import LoginView from './LoginView.vue';
// 載入日曆套件
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      cart: {},
      cartItem: '',
      fullPage: false,  //vueLoading 滿版
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
          paymentMethod: '信用卡',
        },
        message: '',
      },
      orderId: '',
    }
  },
  components: {
    LoginView, VueDatePicker

  },
  methods: {
    //電話認證 
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    //取得購物車
    getCarts() {
      const loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        opacity: 0.2,
      })
      // setTimeout(() => {
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then((res => {
          this.cart = res.data.data;
          loader.hide()
          console.log('購物車', res.data.data);
        }))
      // }, 50000)

    },
    // 刪除購物車
    deleteItem(item) {
      this.$http
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`)
        .then((res => {
          console.log('刪除購物車', res);
          this.getCarts();
        }))
    },
    //送出報名表
    createOrder() {
      const order = this.form;
      this.$http
        .post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/order`, { data: order })
        .then(res => {
          console.log('送出報名表', res);
          this.orderId = res.data.orderId
          this.$router.push(`/order/${this.orderId}`)
        })
        .catch(error => {
          console.log(error);
        })
    },
    //修改購物車
    updateCartItem(item) {
      const data = {
        product_id: item.product.id,
        qty: item.qty,
      };
      this.cartItem = item.id,
        this.$http
          .put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`, { data })
          .then(res => {
            console.log('更新購物車', res.data);
            this.cartItem = '';
            this.getCarts();
          })
    },
  },
  mounted() {
    this.getCarts();
  },
}
</script>

<style scoped>
.tableDark:hover {
  background-color: #221a4f;
}
section {
  min-height: calc(100vh - 168px);
}
</style>