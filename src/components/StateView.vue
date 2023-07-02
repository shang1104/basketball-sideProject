<template>
  <div class="container-fluid bg-black py-10">
    <ul class="row justify-content-center list-unstyled m-0">
      <li class="col-8 d-flex flex-column flex-md-row justify-content-md-around text-white text-center">
        <div class="badge rounded-pill fs-7 bg-secondary text-primary mb-2 mb-md-0" :class="{ 'bg-white': state >= 1, 'bg-secondary' :state < 1 }">1.填寫資訊</div>
        <div class="badge rounded-pill fs-7 bg-secondary text-primary mb-2 mb-md-0" :class="{ 'bg-white' : state >= 2 , 'bg-secondary' :state < 2 }">2.確認付款</div>
        <div class="badge rounded-pill fs-7 bg-secondary text-primary mb-2 mb-md-0" :class="{ 'bg-white' : state >= 3 , 'bg-secondary' :state < 3}">3.付款完成</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['state'],
}
</script>


        <!-- <div class="badge rounded-pill fs-7 bg-white text-primary mb-2 mb-md-0">1.填寫資訊</div>
        <div class="badge rounded-pill fs-7 bg-secondary text-primary mb-2 mb-md-0">2.確認付款</div>
        <div class="badge rounded-pill fs-7 bg-secondary text-primary mb-2 mb-md-0">3.付款完成</div> -->