<template>
  <!-- 填寫資訊 , 確認付款 , 訂單完成 -->
  <section>
    <div class="container-fulid bg-black py-10">
      <ul class="row d-flex justify-content-center list-unstyled m-0">
        <li class="col-8 text-white d-flex justify-content-around">
          <div class="badge rounded-pill fs-7 bg-white text-primary">1.填寫資訊</div>
          <div class="badge rounded-pill fs-7 bg-white text-primary">2.確認付款</div>
          <div class="badge rounded-pill fs-7 bg-white  text-primary">3.付款完成</div>
        </li>
      </ul>
    </div>
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
                    <span class="text-pink">價錢：NT {{ order.total }}</span>
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <span class="text-white">{{ item.qty}} 堂</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-lg-5">
            <h6 class="text-white text-left">聯絡資料</h6>
            <span class="fs-8 p-1 mb-0 text-nowrap bg-success rounded-3 text-white">感謝您訂購課程，祝您學習順利</span>
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
                  <td class="w-25 fw-bold">付款狀態</td>
                  <td v-if="order.is_paid === false">尚未付款</td>
                  <td v-else>已付款</td>
                </tr>
                <tr>
                  <td class="text-white">課程已安排</td>
                  <td>
                    <span class="px-3 py-2 text-white bg-success rounded-3">
                      {{ message }}
                    </span>
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
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      order: {
        user: {},
      },
      products: [],
      cart: {},
      orderId: '',
      message: '',
    }
  },
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
    getPay() {
      this.orderId = this.$route.params.id;
      this.$http
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/pay/${this.orderId}`)
        .then(res => {
          console.log('pay', res.data)
          this.message = res.data.message
          // const { order } = res.data;
          // this.order = order
        })
    },
  },
  mounted() {
    this.getOrder()
    this.getPay();
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
.tableDark:hover {
  background-color: #221a4f;
}
</style>