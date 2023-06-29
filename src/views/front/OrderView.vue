<template>
  <!-- 填寫資訊 , 確認付款 , 訂單完成 -->
  <section>
    <StateView :state="2"></StateView>
  </section>
  <section>
    <!-- 要把已預約的課程 顯示此頁 -->
    <div class="container-fluid bg-black py-5">
      <div class="container">
        <div class="row d-flex justify-content-evenly">
          <div class="col-lg-5 mb-4 mb-xl-0">
            <h6 class="text-white text-left">課程清單</h6>
            <table class="table align-middle" style="background-color:#221a4f">
              <tbody>
                <tr class="tableDark" v-for="item in order.products" :key="item+1">
                  <td class="text-white" style="width:30%">
                    <img style="width:80px" :src="item.product.imageUrl" alt="課程照片">
                  </td>
                  <td class="text-white text-center" style="width:50%">
                    <span>{{ item.product.title }}</span><br>
                    <span>{{ item.qty }} 堂課</span>
                  </td>
                  <td class="text-white text-center">
                    <span>NT {{ order.total }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-lg-5">
            <h6 class="text-white text-left">聯絡資料</h6>
            <table class="table align-middle" style="background-color:#221a4f">
              <tbody>
                <tr class="text-white">
                  <td class="w-25 fw-bold">姓名</td>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr class="text-white">
                  <td class="w-25 fw-bold">電話</td>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr class="text-white">
                  <td class="w-25 fw-bold">上課地點</td>
                  <td>{{ order.user.address }}</td>
                </tr>
                <tr class="text-white">
                  <td class="w-25 fw-bold">信箱</td>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr class="text-white">
                  <td class="w-25 fw-bold">訂單編號</td>
                  <td>{{ order.id }}</td>
                </tr>
                <tr class="text-white">
                  <td class="w-25 fw-bold">付款方式</td>
                  <td>{{ order.user.paymentMethod }}</td>
                </tr>
                <tr class="text-white">
                  <td class="w-25 fw-bold">付款狀態</td>
                  <td v-if="order.is_paid === false" class="text-danger">尚未付款</td>
                  <td v-else class="text-success">已付款</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button @click=checkPay() type="submit" class="btn btn-pink text-white">確認付款</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StateView from '../../components/StateView.vue';
//載入狀態
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      order: {
        user: {},
      },
      cart: {},
      orderId: '',
    }
  },
  components: { StateView },
  methods: {
    getOrder() {
      this.orderId = this.$route.params.id;
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/order/${this.orderId}`)
        .then(res => {
          const { order } = res.data;
          this.order = order
          console.log('order', res.data)
        })
    },
    checkPay() {
      this.$http
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/pay/${this.orderId}`)
        .then(res => {
          console.log('確認付款', res)
          this.$router.push(`/pay/${this.orderId}`)
        })
    }
  },
  mounted() {
    this.getOrder();
  },
}
</script>

<style>
.form-signin > .form-floating > label {
  padding: 0px;
  position: absolute;
  top: 0;
  left: 0px;
}
</style>