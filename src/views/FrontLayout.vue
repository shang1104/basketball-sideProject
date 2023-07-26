<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-black">
      <div class="container">
        <router-link to="/home"><span class="d-lg-block d-none text-white fw-bold fst-italic fs-5 text-nowrap">basketball tutor
            <span class="fs-8 fst-normal">籃球家教</span>
          </span></router-link>
        <router-link to="/home"><span class="d-lg-none fs-4 text-white text-nowrap">籃球家教</span></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="xx-active text-center text-white material-symbols-outlined">
            menu
          </span>
          <!-- <span class="xx-active text-center text-white material-symbols-outlined">
          xxx
        </span> -->
        </button>
        <div class="collapse navbar-collapse flex-grow-0" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item text text-center mx-4 my-3 py-2">
              <router-link to="/products" class="navbar-link text-a fs-10 py-3 px-3 text-white text-decoration-none text-nowrap">課程內容</router-link>
            </li>
            <li class="nav-item text text-center mx-4 my-3 py-2">
              <router-link to="/cart" class="navbar-link text-a fs-10 py-3 px-3 text-white text-decoration-none text-nowrap">報名表單</router-link>
            </li>
            <li class="nav-item text text-center mx-4 my-3 py-2">
              <router-link to="/reserve" class="navbar-link text-a fs-10 py-3 px-3 text-white text-decoration-none text-nowrap">預約上課</router-link>
            </li>
            <li class="nav-item text text-center mx-4 my-3 py-2">
              <router-link to="/promble" class="navbar-link text-a fs-10 py-3 px-3 text-nowrap text-white text-decoration-none">常見問題</router-link>
            </li>
            <li class="nav-item text text-center mx-4 my-3 py-2">
              <router-link to="/login" class="navbar-link text-a fs-10 py-3 px-3 text-white text-decoration-none text-nowrap">註冊/登入</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <!-- 內頁 -->
  <router-view></router-view>

  <footer class="bg-black">
    <div class="container">
      <div class="row">
        <div class="col-12 col-xl-4 mb-9 mb-xl-0 d-flex justify-content-center justify-content-xl-start">
          <span class="d-flex flex-lg-row justify-content-start justify-content-lg-center justify-content-xl-start align-items-start align-items-sm-center flex-column text-white fw-bold fst-italic fs-5 text-nowrap">basketball tutor
            <span class="fs-8 ms-5 fst-normal">籃球家教</span>
          </span>
        </div>
        <div class="col-12 col-xl-4 d-flex text-white justify-content-around align-items-center mb-9 mb-xl-0">
          <a href="#" class="text-white text-decoration-none"><i class="fa-brands fa-facebook d-flex align-items-center fs-8 icon"></i></a>
          <a href="#" class="text-white text-decoration-none"><i class="fa-brands fa-facebook-messenger d-flex align-items-center fs-8 icon"></i></a>
          <a href="#" class="text-white text-decoration-none"><i class="fa-brands fa-line d-flex align-items-center fs-8 icon"></i></a>
          <a href="#" class="text-white text-decoration-none"><i class="fa-brands fa-instagram d-flex align-items-center fs-8 icon"></i></a>
          <a href="#" class="text-white text-decoration-none"><i class="fa-brands fa-youtube d-flex align-items-center fs-8 icon"></i></a>
        </div>
        <div class="col-12 col-xl-4 d-flex text-white justify-content-sm-center align-items-center mb-9 mb-xl-0">
          <ul class="list-unstyled d-flex flex-column flex-xl-row">
            <li class="text-white me-5 mb-5 mb-xl-0">
              <i class="fa-regular fa-envelope me-3"></i>
              <a href="mailto:Service@idea.com" class="text-white text-decoration-none">Service@idea.com</a>
            </li>
            <li class="text-white">
              <i class="fa-solid fa-phone me-3"></i>
              <a href="tel:0912345678" class="text-white text-decoration-none">0912345678</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p class="fs-10 text-sm-center text-xl-start text-white">Copyright © 2023 shang. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>

</template>

<style>
.text:hover {
  border-radius: 4px;
  background-color: white;
}
.text:hover .text-a {
  color: black !important;
}
</style>