<template>
  <div class="container-fluid ">
    <div class="text-end mt-4">
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal" @click="openModal('create')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th class="fs-8" width="170">購買時間</th>
          <th class="fs-8" width="120">Email</th>
          <th class="fs-8" width="200">上課名稱</th>
          <th class="fs-8" width="120">應付金額</th>
          <th class="fs-8" width="120">是否付款</th>
          <th class="fs-8" width="120">編輯</th>
        </tr>
      </thead>
      <tbody class="border border-2 border-black">
        <tr v-for="order in orders" :key="order+123" @mouseover="showHoveredRow(order)" @mouseleave="hideHoveredRow" :class="{ 'highlight-row': hoveredRowIndex === order }">
          <td>{{ time(order.create_at) }}</td>
          <td>{{ order.user.email }}</td>
          <td>
            <ul class="list-unstyled">
              <li class="border-bottom border-primary" v-for="(item, index) in order.products" :key="index">
                {{ item.product.title }} 課堂：{{ item.qty }}
              </li>
            </ul>
          </td>
          <td class="fw-bold">{{ order.total }}</td>
          <td>
            <span class="text-success" v-if="order.is_paid">付款</span>
            <span class="text-danger" v-else>未付款</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm">
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      orders: {},
      // 
      hoveredRowIndex: -1  // 初始化hoveredIndex为-1，表示没有hover任何行
    }
  },
  methods: {
    // 
    showHoveredRow(order) {
      this.hoveredRowIndex = order;
    },
    hideHoveredRow() {
      this.hoveredRowIndex = -1;
    },
    // 
    getOrder() {
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/orders`)
        .then((res) => {
          this.orders = res.data.orders
          console.log(res);
        })
    },
    time(at) {
      const date = new Date(at * 1000)
      const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' }
      return date.toLocaleString('zh-TW', options)
    }
  },
  mounted() {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("hexToken="))
      ?.split("=")[1];
    this.$http.defaults.headers.common["Authorization"] = cookieValue;
    this.getOrder();
  },
}
</script>

<style>
.highlight-row {
  background-color: #adb5bd; /* 设置蓝色背景 */
  color: white;
}
</style>
