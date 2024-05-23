<template>
  <section>
    <div class="container-fluid banner">
      <div class="container">
        <div class="row position-relative">
          <div class="col-sm-12 col-md-6 position-absolute translate-y">
            <img class="basketball-tutor" src="/src/assets/專題作品圖/basketball-tutor.png" alt="籃球圖片">
            <div class="d-flex flex-column mb-9">
              <p class="text-white fs-4 fst-normal">籃球家教</p>
              <div class="d-flex my-3 ">
                <div class="col-9">
                  <input type="text" class="searchInput input-search w-100 me-6 rounded-3" placeholder="請輸入分類課程">
                  <ul class="my-2 mx-1 flex-row searchList list-unstyled">
                    <li>
                      <router-link to="/reserve" class="me-2 px-1 text-primary bg-white border border-1 rounded-1 text-decoration-none">預約上課</router-link>
                    </li>
                    <li>
                      <router-link to="/products" class="me-2 px-1 text-primary bg-white border border-1 rounded-1 text-decoration-none">課程介紹</router-link>
                    </li>
                    <li>
                      <router-link to="/promble" class="me-2 px-1 text-primary bg-white border border-1 rounded-1 text-decoration-none">常見問題</router-link>
                    </li>
                  </ul>
                </div>
                <div class="col-3 ms-6">
                  <span>
                    <a class="border border-1 fs-5 borer-white text-decoration-none rounded-circle text-white material-symbols-outlined" href="#">search</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <main>
    <div class="container-fulid bg-black py-5">
      <div class="container bgline">
        <!-- 課程介紹 -->
        <h5 class=" text-white text-center pb-10">課程介紹</h5>
        <div class="row">
          <div class="col-sm-12 col-md-6 col-xl-3">
            <ul class="fram text-center list-unstyled text-white border border-1-white rounded-4">
              <li class="my-6">
                <span class="iconColor fs-4 material-symbols-outlined">
                  handshake
                </span>
              </li>
              <li class="mb-6">
                <p class="fs-7">手把手親自就有教導</p>
              </li>
              <li class="fs-10 mb-9 text-nowrap">正確姿勢、基本動作</li>
            </ul>
          </div>
          <div class="col-sm-12 col-md-6 col-xl-3">
            <ul class="fram text-center list-unstyled text-white border border-1-white rounded-4">
              <li class="my-6">
                <span class="iconColor fs-4 material-symbols-outlined">
                  bolt
                </span>
              </li>
              <li class="mb-6">
                <p class="fs-7">高效率學習</p>
              </li>
              <li class="fs-10 mb-5 text-nowrap">客製化專屬課表<br>動作更順暢</li>
            </ul>
          </div>
          <div class="col-sm-12 col-md-6 col-xl-3">
            <ul class="fram text-center list-unstyled text-white border border-1-white rounded-4">
              <li class="my-6">
                <span class="iconColor fs-4 material-symbols-outlined">
                  sports_basketball
                </span>
              </li>
              <li class="mb-6">
                <p class="fs-7">靈活運用</p>
              </li>
              <li class="fs-10 mb-5 text-nowrap">場上隨機應變<br>動作更行雲流水</li>
            </ul>
          </div>
          <div class="col-sm-12 col-md-6 col-xl-3">
            <ul class="fram text-center list-unstyled text-white border border-1-white rounded-4">
              <li class="my-6">
                <span class="iconColor fs-4 material-symbols-outlined">
                  pin_drop
                </span>
              </li>
              <li class="mb-6">
                <p class="fs-7">指定地點</p>
              </li>
              <li class="fs-10 mb-5 text-nowrap">專業老師到您指定的地點<br>一對一教學</li>
            </ul>
          </div>
        </div>

        <!-- 預約課程 -->
        <p class="text-center text-white fs-5 pt-11 mb-9">預約課程</p>
        <div class="row">
          <div class="col-sm-12 col-md-6 col-xl-3 position-relative">
            <ul class="number text-white mt-6 ps-5 pt-9 border border-1-white rounded-3 list-unstyled ">
              <li>
                <p class="numberColor fs-1 position-absolute top-10 start-50 translate-middle fw-bold text-white text-center">01</p>
              </li>
              <li>
                <p class="fs-7">預約</p>
              </li>
              <li>
                <p class="fs-10 mb-5">線上預約指定老師<br>由老師安排專屬課程</p>
              </li>
            </ul>
          </div>
          <div class="col-sm-12 col-md-6 col-xl-3  position-relative ">
            <ul class="number text-white mt-6 ps-5 pt-9 border border-1-white rounded-3 list-unstyled">
              <li>
                <p class="numberColor fs-1 position-absolute top-10 start-50 translate-middle fw-bold text-white text-center">02</p>
              </li>
              <li>
                <p class="fs-7">付款</p>
              </li>
              <li>
                <p class="fs-10 mb-5">支援各種支付方式<br>提供12期分期付款
                </p>
              </li>
            </ul>
          </div>
          <div class="col-sm-12 col-md-6 col-xl-3  position-relative ">
            <ul class="number text-white mt-6 ps-5 pt-9 border border-1-white rounded-3 list-unstyled ">
              <li>
                <p class="numberColor fs-1 position-absolute top-10 start-50 translate-middle fw-bold text-white text-center">03</p>
              </li>
              <li>
                <p class="fs-7">上課</p>
              </li>
              <li>
                <p class="fs-10 mb-5">地點由您指定<br>密集性一對一教學</p>
              </li>
            </ul>
          </div>
          <div class="col-sm-12 col-md-6 col-xl-3  position-relative ">
            <ul class="number text-white mt-6 ps-5 pt-9 border border-1-white rounded-3 list-unstyled ">
              <li>
                <p class="numberColor fs-1 position-absolute top-10 start-50 translate-middle fw-bold text-white text-center">04</p>
              </li>
              <li>
                <p class="fs-7">滿意度</p>
              </li>
              <li>
                <p class="fs-10 mb-5">提供課程滿意度及回饋<br>讓我們持續成長與進步</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- 籃球課程內容 -->
        <article>
          <h5 class="text-center text-white pt-10 mb-9">籃球課程內容</h5>
          <div class="row">
            <!-- 客製化籃球課程桌機顯示 -->
            <div class="d-none d-xl-block col-sm-10 mx-auto rounded-1 text-white course course-1 course-img mb-xl-9">
              <ul class="d-md-flex align-items-xl-end flex-xl-column list-unstyled">
                <li>
                  <p class="course-title fs-7 mr-2">客製化籃球課程</p>
                </li>
                <li class="d-flex justify-content-xl-end">
                  <p class="course-text fs-10 w-60">
                    一套統一的上課模式來教導學生，沒辦法因為一個學生改變上課模式，而家教截然不同，可以透過一來一往的教學過程，對學生有更深入的了解，知道他們擅長什麼、不擅長什麼，並針對學生的進度調整課程內容，教練會擬訂「客製化」的課程，尋得最理想的訓練方式，幫助學生成長。
                  </p>
                </li>
              </ul>
            </div>
            <!-- 客製化籃球課程機平板顯示 -->
            <div class="d-block d-xl-none col-sm-12 course course-1 course-img">
            </div>
            <ul class="d-block d-xl-none flex-column list-unstyled text-white">
              <li>
                <p class="d-block d-xl-none course-title text-center fs-7 my-6">客製化籃球課程</p>
              </li>
              <li class="d-flex justify-content-center">
                <p class="course-text fs-10 w-75">
                  一套統一的上課模式來教導學生，沒辦法因為一個學生改變上課模式，而家教截然不同，可以透過一來一往的教學過程，對學生有更深入的了解，知道他們擅長什麼、不擅長什麼，並針對學生的進度調整課程內容，教練會擬訂「客製化」的課程，尋得最理想的訓練方式，幫助學生成長。
                </p>
              </li>
            </ul>
            <!-- 兒童籃球桌機顯示 -->
            <div class="d-none d-xl-block col-sm-10 mx-auto rounded-1 text-white course course-2 course-img mb-xl-9">
              <ul class="d-md-flex flex-xl-column list-unstyled">
                <li>
                  <p class="course-title fs-7 ms-2">兒童籃球課程</p>
                </li>
                <li class="d-flex">
                  <p class="course-text fs-10 w-60">
                    兒童籃球會依照小朋友年齡有所調整，但大部分的課程內容會以提升平衡、手眼協調，以及基本動作的練習，如運球、傳球和投籃，而大約中高年級的學生，則會有基本的體能訓練、模擬走位、比賽規則介紹，以及基本戰術的介紹等等，若是團體小班制，教練也會依情況安排比賽，藉此讓學生熟悉籃球比賽規則，和訓練球場應變能力。
                  </p>
                </li>
              </ul>
            </div>
            <!-- 兒童籃球課程平板顯示 -->
            <div class="d-block d-xl-none col-sm-12 course course-2 course-img">
            </div>
            <ul class="d-block d-xl-none flex-column list-unstyled text-white">
              <li>
                <p class="d-block d-xl-none course-title text-center fs-7 my-6">兒童籃球課程</p>
              </li>
              <li class="d-flex justify-content-center">
                <p class="course-text fs-10 w-75">
                  兒童籃球會依照小朋友年齡有所調整，但大部分的課程內容會以提升平衡、手眼協調，以及基本動作的練習，如運球、傳球和投籃，而大約中高年級的學生，則會有基本的體能訓練、模擬走位、比賽規則介紹，以及基本戰術的介紹等等，若是團體小班制，教練也會依情況安排比賽，藉此讓學生熟悉籃球比賽規則，和訓練球場應變能力。
                </p>
              </li>
            </ul>
            <!-- 成人籃球課程桌機顯示 -->
            <div class="d-none d-xl-block col-sm-10 mx-auto rounded-1 text-white course course-3 course-img mb-xl-9">
              <ul class="d-md-flex align-items-xl-end flex-xl-column list-unstyled">
                <li>
                  <p class="course-title fs-7 mr-2">成人籃球課程</p>
                </li>
                <li class="d-flex justify-content-xl-end">
                  <p class="course-text fs-10 w-60">
                    初學者的課程內容可能包含籃球比賽規則、基本戰術，或是基本動作講解，並有大量的基本動作和體能訓練，如果您是進階的學生，可以請教練指導您需要加強的部分，例如：攻防演練、上籃動作的修正，或是如何提升投籃的準確率等等。一對一籃球教練課程教學彈性較大，可以請教練依您的學習方向，以及體能狀況調整教學內容。
                  </p>
                </li>
              </ul>
            </div>
            <!-- 成人籃球課程手機平板顯示 -->
            <div class="d-block d-xl-none col-sm-12 course course-3 course-img">
            </div>
            <ul class="d-block d-xl-none flex-column list-unstyled text-white">
              <li>
                <p class="d-block d-xl-none course-title text-center fs-7 my-6">成人籃球課程</p>
              </li>
              <li class="d-flex justify-content-center">
                <p class="course-text fs-10 w-75">
                  初學者的課程內容可能包含籃球比賽規則、基本戰術，或是基本動作講解，並有大量的基本動作和體能訓練，如果您是進階的學生，可以請教練指導您需要加強的部分，例如：攻防演練、上籃動作的修正，或是如何提升投籃的準確率等等。一對一籃球教練課程教學彈性較大，可以請教練依您的學習方向，以及體能狀況調整教學內容。
                </p>
              </li>
            </ul>
            <!-- 社團籃球課程課程 -->
            <div class="d-none d-xl-block col-sm-10 mx-auto rounded-1 text-white course course-4 course-img mb-xl-9">
              <ul class="d-md-flex flex-xl-column list-unstyled">
                <li>
                  <p class="course-title fs-7 ms-2">社團籃球課程</p>
                </li>
                <li class="d-flex">
                  <p class="course-text fs-10 w-60">
                    學校社團籃球課程，可以先和教練討論本學期希望的學習方向，籃球課程中會包含熱身、體能訓練、主要訓練，以及收操等等課程內容，主要訓練可能會有攻防演練、防守步法訓練等等，與敵隊應對的訓練，或是上籃、投籃練習、運球、持球等等基礎動作訓練。學生可以自行與指導老師討論希望學習的課程內容，並請指導老師設計課程。
                  </p>
                </li>
              </ul>
            </div>
            <!-- 社團籃球課程程平板顯示 -->
            <div class="d-block d-xl-none col-sm-12 course course-4 course-img">
            </div>
            <ul class="d-block d-xl-none flex-column list-unstyled text-white">
              <li>
                <p class="d-block d-xl-none course-title text-center fs-7 my-6">社團籃球課程</p>
              </li>
              <li class="d-flex justify-content-center">
                <p class="course-text fs-10 w-75">
                  學校社團籃球課程，可以先和教練討論本學期希望的學習方向，籃球課程中會包含熱身、體能訓練、主要訓練，以及收操等等課程內容，主要訓練可能會有攻防演練、防守步法訓練等等，與敵隊應對的訓練，或是上籃、投籃練習、運球、持球等等基礎動作訓練。學生可以自行與指導老師討論希望學習的課程內容，並請指導老師設計課程。
                </p>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
    }
  }

}
</script>
<style scoped>
.searchList {
  display: flex;
  opacity: 0;
  visibility: hidden;
}
.searchInput:focus + .searchList,
.searchList:active {
  opacity: 1;
  visibility: visible;
}
.container-fluid {
  min-height: calc(100vh);
}
.banner {
  height: 640px;
  background-image: url(/src/assets/專題作品圖/bg-img.png);
  background-repeat: no-repeat;
  background-position: center;
  background-color: currentcolor;
  background-size: cover;
  object-fit: cover;
}
@media (min-width: 1200px) {
  .bgline {
    background-image: url(/src/assets/專題作品圖/bgline-img.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: center;
    object-fit: cover;
  }
}
.basketball-tutor {
  max-width: 100%;
  background-repeat: no-repeat;
  background-position-x: center;
}
.translate-y {
  transform: translateY(50%);
}

.fram:hover {
  background-image: linear-gradient(to bottom right, #9d0191, #120078);
}
.fram:hover .iconColor {
  color: #fecd1a;
}

.number:hover {
  background-image: linear-gradient(to top right, #9d0191, #120078);
}
.number:hover .numberColor {
  color: #fecd1a !important;
}

.course-img {
  height: 240px;
  background-repeat: no-repeat;
  background-blend-mode: screen, normal;
  background-position: center;
  background-color: #161134;
  background-size: cover;
  object-fit: cover;
}
.course-1 {
  background-image: url(/src/assets//專題作品圖/course-item01.svg);
}
.course-2 {
  background-image: url(/src/assets//專題作品圖/course-item02.svg);
}
.course-3 {
  background-image: url(/src/assets//專題作品圖/course-item03.svg);
}
.course-4 {
  background-image: url(/src/assets//專題作品圖/course-item04.svg);
}
@media (min-width: 1200px) {
  .course {
    border: 1px solid #6c757d;
    overflow-y: hidden;
  }
  .course-title {
    transition: 0s;
    transform: translate(-7px, 180px);
  }
  .course-text {
    opacity: 0;
    transition: 0s;
    transform: translate(-7px, 180px);
  }
  .course:hover {
    background-color: rgba(15, 5, 72, 71%);
  }
  .course:hover .course-title {
    color: #fecd1a;
    transition: 1s;
    transform: translate(-7px, 50px);
  }
  .course:hover .course-text {
    display: block;
    opacity: 1;
    transition: 1s;
    transform: translateY(53px);
  }
}

.w-60 {
  width: 60%;
}

.icon {
  width: 40px;
}
</style>