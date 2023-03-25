<template>

  <section>
    <div class="container-fulid bg-black py-10">
      <ul class="row d-flex justify-content-center list-unstyled m-0">
        <li class="col-8 text-white d-flex justify-content-around">
          <div class="badge rounded-pill fs-7 bg-white text-primary">1.填寫資訊</div>
          <div class="badge rounded-pill fs-7 bg-white text-primary">2.確認付款</div>
          <div class="badge rounded-pill fs-7 bg-secondary text-primary">3.付款完成</div>
        </li>
      </ul>
    </div>
  </section>
  <section>
    <!-- 要把已預約的課程 顯示此頁 -->
    <div class="container-fluid bg-black py-5">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-4">
            <h6 class="text-white text-center">已預約課程</h6>
            <table class="table align-middle">
              <thead>
                <tr class="text-white">
                  <th class="col-2">上課名稱</th>
                  <th class="col-1" style="50px;">堂數</th>
                  <th class="col-2">價格</th>
                </tr>
              </thead>
              <tbody>
                <tr class="tableDark" v-for="item in order.products" :key="item+1">
                  <td class="text-white">
                    {{ item.product.title }}
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <select name="" id="" class="form-control bg-black text-white">
                        <option :value="i" v-for="i in 20" :key="i +'123'">{{ item.qty }}</option>
                      </select>
                    </div>
                  </td>
                  <td class="text-white d-flex justify-content-between">
                    {{  }}
                    <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteItem(item)" :disabled="item.id === loadingItem"><i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="text-white">
                  <td colspan="2" class="text-end">總計</td>
                  <td>{{ order.total }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="col-lg-4">
            <h6 class="text-white text-center">聯絡資料</h6>
            <table class="table align-middle">
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
                <tr class="border border-0 border-black">
                  <td></td>
                  <td>
                    <button class="btn btn-primary" type="button">確認付款</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div v-for="item in order.products" :key="item+1">
    <!-- {{ item }} -->
  </div>

</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      order: {
        user: {},
      },
      // products: [],
      cart: {},
      orderId: '',
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
.tableDark:hover {
  background-color: #221a4f;
}
</style>