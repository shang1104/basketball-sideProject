<template>
  <div class="container-fluid">
    <div class="text-end mt-4">
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal" @click="openModal('create')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">上課名稱</th>
          <th width="120">分類</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.category }}</td>
          <td>
            {{ item.origin_price }}
          </td>
          <td>
            {{ item.price }}
          </td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal('edit', item)">
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal('delete', item)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- 編輯或新增的Modal -->
  <div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row flex-nowrap">
            <div class="col-sm-4 me-2">
              <div class="mb-3">
                <label for="imageUrl" class="form-label">主要圖片</label>
                <input type="text" class="form-control mb-2" placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl">
              </div>
              <img class="img-fluid" :src="tempProduct.imageUrl" alt="">
              <div>
                <h4>多圖設置</h4>
                <!-- 判斷 tempProduct.imagesUrl 是一個陣列 -->
                <div v-if="Array.isArray(tempProduct.imagesUrl)">
                  <template v-for="(img,key) in tempProduct.imagesUrl" :key="key + 123">
                    <input type="text" class="form-contral w-75 mb-3" v-model="tempProduct.imagesUrl[key]">
                    <img :src="tempProduct.imagesUrl[key]" alt="" class="img-fluid mb-4">
                  </template>
                  <!-- 判斷新增、刪除出現的時機 -->
                  <div v-if="
                  !tempProduct.imagesUrl.length ||
                  tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1 ]">
                    <button class="btn btn-outline-primary btn-sm d-block w-100" @click="tempProduct.imagesUrl.push('')">
                      新增圖片
                    </button>
                  </div>
                  <div v-else>
                    <button class="btn btn-outline-danger btn-sm d-block w-100" @click="tempProduct.imagesUrl.pop()">
                      刪除圖片
                    </button>
                  </div>
                </div>
                <div v-else>
                  <button class="btn btn-outline-primary btn-sm d-block w-100" @click="addImage">
                    新增多圖
                  </button>
                </div>

              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model="tempProduct.title">
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input id="category" type="text" class="form-control" placeholder="請輸入分類" v-model="tempProduct.category">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input id="unit" type="text" class="form-control" placeholder="請輸入單位" v-model="tempProduct.unit">
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input id="origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價" v-model.number="tempProduct.origin_price">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input id="price" type="number" min="0" class="form-control" placeholder="請輸入售價" v-model.number="tempProduct.price">
                </div>
              </div>
              <hr>

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea id="description" type="text" class="form-control" placeholder="請輸入產品描述">
                  </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea id="description" type="text" class="form-control" placeholder="請輸入說明內容">
                  </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input id="is_enabled" class="form-check-input" type="checkbox" v-model="tempProduct.is_enabled">
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="updateProduct()">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 刪除的Modal -->
  <div id="delProductModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="delProductModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deleteProduct()">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      tempProduct: {
        imagesUrl: [],
      },
      productModal: {},
      isNew: true, // 判斷“編輯”或“新增”使用
    }
  },
  methods: {
    checkLogin() {
      this.$http
        .post(`${VITE_APP_URL}/v2/api/user/check`)
        .then(res => {
          // console.log(res);
        })
    },
    getProducts(page = 1) {
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/products/all`)
        .then(res => {
          this.products = res.data.products
          console.log('getProducts', res.data.products);
        })
        .catch(error => {
          console.log(error);
        })
    },
    deleteProduct() {
      this.$http
        .delete(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`)
        .then(res => {
          this.getProducts();
          this.deleteModal.hide();
        })
    },
    updateProduct() {
      let methods = 'post';
      let url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/product`
      // 如果不是新增，就修改methods和url變成修改
      if (!this.isNew) {
        url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`;
        methods = 'put'
      }
      this.$http
      [methods](url, { data: this.tempProduct })
        .then(res => {
          this.getProducts();
          this.productModal.hide();
        });
    },
    openModal(status, item) {
      if (status === 'create') {
        this.productModal.show();
        this.isNew = true;
        //帶入初始化資料
        this.tempProduct = {
          imagesUrl: [],
        };
      } else if (status === 'edit') {
        this.productModal.show();
        this.isNew = false;
        //帶入當前要編輯的資料
        this.tempProduct = { ...item };
      } else if (status === 'delete') {
        this.deleteModal.show();
        this.tempProduct = { ...item }; //等等取id使用
      }
    },
    addImage() {
      this.tempProduct.imagesUrl = [];
      this.tempProduct.imagesUrl.push("");
    }
  },
  mounted() {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("hexToken="))
      ?.split("=")[1];
    this.$http.defaults.headers.common["Authorization"] = cookieValue;
    this.checkLogin();
    this.getProducts();

    this.productModal = new bootstrap.Modal("#productModal");
    this.deleteModal = new bootstrap.Modal("#delProductModal")
  }
}
</script>