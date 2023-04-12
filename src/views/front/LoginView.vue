<template>
  <section class="container-fluid bg-black py-9">
    <div class="container">
      <div class="row">
        <h3 class="text-white text-center pb-9">註冊/登入</h3>
        <div class="col-sm-8 col-lg-6 col-xl-4 mx-auto">
          <form class="form-signin" @submit.prevent="login">
            <div class="form-floating mb-6">
              <input type="email" class="form-control" v-model="user.username" id="floatingInput" placeholder="name@example.com" required autofocus>
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-6">
              <input type="password" class="form-control" v-model="user.password" id="floatingPassword" placeholder="Password" required>
              <label for="floatingPassword">Password</label>
            </div>
            <button class="btn btn-lg btn-white w-100" id="login" type="submit">
              登入
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const { VITE_APP_URL } = import.meta.env;
export default {
  data() {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      // console.log(`123`);
      const api = `${VITE_APP_URL}admin/signin`;
      this.$http
        .post(api, this.user)
        .then((response) => {
          const { token, expired } = response.data;
          // 寫入 cookie token
          // expires 設置有效時間
          document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`;
          this.$router.push('/home')
        }).catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
}
</script>

<style scoped>
section {
  min-height: calc(100vh - 168px);
}
</style>