<template>
  <!-- 填寫資訊 , 確認付款 , 訂單完成 -->
  <section>
    <div class="container-fulid bg-black py-10">
      <ul class="row d-flex justify-content-center list-unstyled m-0">
        <li class="col-8 text-white d-flex justify-content-around">
          <div class="badge rounded-pill fs-7 bg-white text-primary">1.填寫資訊</div>
          <div class="badge rounded-pill fs-7 bg-secondary text-primary">2.確認付款</div>
          <div class="badge rounded-pill fs-7 bg-secondary text-primary">3.付款完成</div>
        </li>
      </ul>
    </div>
  </section>
  <section>
    <!-- 要把已預約的課程 顯示此頁 -->
    <div class="container-fluid bg-black py-5">
      <div class="container">
        <div class="row d-flex justify-content-evenly">
          <div class="col-lg-4 mb-4 mb-xl-0">
            <h6 class="text-white text-center pb-5">已預約課程</h6>
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
                  <td colspan="2" class="text-end">總計</td>
                  <td>{{ cart.final_total }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="col-lg-4">
            <h6 class="text-white text-center mb-9">填寫個人資料</h6>
            <VForm v-slot="{ errors }" @submit="createOrder" class="form-signin position-relative text-center">
              <div class="form-floating text-white mb-6">
                <label for="name" class="text-white">姓名</label>
                <VField id="name" name="姓名" type="text" rules="required" v-model="form.user.name" class="text-black" :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" />
                <ErrorMessage name="姓名" class="invalid-feedback" />
              </div>
              <!-- <div class="form-floating text-white mb-6">
                <label for="age" class="text-white">年齡</label>
                <VField id="age" name="年齡" type="number" rules="required" class="text-black" :class="{ 'is-invalid': errors['年齡'] }" placeholder="請輸入年齡" />
                <ErrorMessage name="年齡" class="invalid-feedback" />
              </div>
              <div class="form-floating text-white mb-6">
                <label for="sex" class="text-white">性別</label>
                <VField id="sex" name="性別" type="radio" rules="required" class="text-black" :class="{ 'is-invalid': errors['性別'] }" placeholder="請選擇性別" as="radio" />
                <span class="me-3" value="man">男性</span>
                <input class="me-9" type="radio" name="性別" id="man" checked>
                <span class="me-3" value="male">女性</span>
                <input class="me-9" type="radio" name="性別" id="male">
                <ErrorMessage name="sex" class="invalid-feedback" />
              </div>
              <div class="form-floating text-white mb-6">
                <label for="group" class="text-white">個人/團體</label>
                <VField id="group" name="個人/團體" type="radio" rules="required" class="text-black" :class="{ 'is-invalid': errors['個人團體'] }" placeholder="請選擇個人或團體" as="radio" />
                <span class="me-3" value="single">個人</span>
                <input class="me-9" type="radio" name="個人/團體" id="single" checked>
                <span class="me-3" value="group">團體</span>
                <input class="me-9" type="radio" name="個人/團體" id="group">
                <ErrorMessage name="個人/團體" class="invalid-feedback" />
              </div>
              <div class="form-floating text-white mb-6">
                <label for="level" class="text-white">組別</label>
                <VField id="level" name="組別" rules="required" class="text-black d-none" :class="{ 'is-invalid': errors['組別'] }" placeholder="請選擇組別" as="select" />
                <select v-validate="'included:高中,國中,國小'" name="組別" id="組別">
                  <option value="">請選擇組別</option>
                  <option value="高中">高中</option>
                  <option value="國中">國中</option>
                  <option value="國小">國小</option>
                </select>
                <ErrorMessage name="分類" class="invalid-feedback" />
              </div> -->
              <div class="form-floating text-white mb-6">
                <label for="tel" class="text-white">請輸入電話</label>
                <VField id="tel" name="電話" type="text" :rules="isPhone" v-model="form.user.tel" class="text-black" :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話" />
                <ErrorMessage name="電話" class="invalid-feedback" />
              </div>
              <div class="form-floating text-white mb-6">
                <label for="address" class="text-white">上課地點</label>
                <VField id="address" name="地址" type="text" rules="required" v-model="form.user.address" class="text-black" :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入上課地點" />
                <ErrorMessage name="地址" class="invalid-feedback" />
              </div>
              <div class="form-floating text-white mb-6">
                <label for="email" class="text-white">請輸入信箱</label>
                <VField id="email" name="信箱" type="text" rules="required|email" v-model="form.user.email" class="text-black" :class="{ 'is-invalid': errors['信箱'] }" placeholder="請輸入信箱" />
                <ErrorMessage name="信箱" class="invalid-feedback" />
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
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      cart: {},
      form: {
        user: {
          name: '',
          eamil: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      orderId: '',
    }
  },
  methods: {
    //電話認證 
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    getCarts() { //取得購物車
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then((res => {
          this.cart = res.data.data;
          console.log('取得購物車', res.data.data);
        }))
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
        // https://vue3-course-api.hexschool.io/v2/api/shangway/order
        .catch(error => {
          console.log(error);
        })
    }
  },
  mounted() {
    this.getCarts();
  },
}
</script>

<style scoped>
.form-signin > .form-floating > label {
  padding: 0px;
  position: absolute;
  top: 0;
  left: 0px;
}
.tableDark:hover {
  background-color: #221a4f;
}
</style>