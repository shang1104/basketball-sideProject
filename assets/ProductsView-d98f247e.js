import{_ as d,o as c,c as n,a as p,b as t,F as g,g as b,k as m,t as a}from"./index-26428348.js";const x={};function $(e,o){return c(),n("h1",null,"這是註冊元件")}const k=d(x,[["render",$]]);const{VITE_APP_URL:l,VITE_APP_PATH:i}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"shangway",BASE_URL:"/basketball-sideProject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},w={data(){return{products:{},productId:""}},components:{RouterLink:p,TestView:k},methods:{getProducts(){this.$http.get(`${l}/v2/api/${i}/products/all`).then(e=>{console.log(e),this.products=e.data.products,console.log(this.products)}).catch(e=>{console.log(e)})},addToCart(e){const o={product_id:e,qty:1};this.$http.post(`${l}/v2/api/${i}/cart`,{data:o}).then(_=>{alert("預約成功")})},openModal(e){this.productId=e,this.$http.get(`${l}/v2/api/${i}/product/${e}`).then(o=>{console.log(o),this.$router.push(`/product/${e}`)})}},mounted(){this.getProducts()}},P={class:"container-fluid bg-black py-5"},y={class:"container"},f={class:"row"},v=t("h3",{class:"text-white text-center pb-10"},"所有課程",-1),T={class:"table"},V=t("thead",{class:"text-white"},[t("tr",{class:"text-center"},[t("th",{class:"col-2"},"圖片"),t("th",{class:"col-3"},"上課名稱"),t("th",{class:"col-1 text-nowwrap"},"堂數"),t("th",{class:"col-1"},"價格"),t("th",{class:"col-1 text-nowrap"},"查看細節"),t("th",{class:"col-1 text-nowrap"},"加入課程")])],-1),E={class:"text-white"},A={class:"align-middle"},I={class:"align-middle"},C={class:"align-middle"},R={class:"align-middle"},D=["onClick"],L={class:"align-middle"},S=["onClick"];function B(e,o,_,U,h,r){return c(),n("main",null,[t("div",P,[t("div",y,[t("div",f,[v,t("table",T,[V,t("tbody",E,[(c(!0),n(g,null,b(h.products,s=>(c(),n("tr",{class:"text-center tableDark",key:s.id},[t("th",null,[t("div",{style:m([{height:"100px","background-size":"contain","background-repeat":"no-repeat","background-position":"center"},{backgroundImage:`url(${s.imageUrl})`}])},null,4)]),t("td",A,a(s.title),1),t("td",I,a(s.unit),1),t("td",C,a(s.price),1),t("td",R,[t("button",{onClick:u=>r.openModal(s.id),type:"button",class:"btn btn-primary text-white text-nowrap me-2"},"查看更多",8,D)]),t("td",L,[t("button",{onClick:u=>r.addToCart(s.id),type:"button",class:"btn btn-pink text-white text-nowrap"},"加入課程",8,S)])]))),128))])])])])])])}const z=d(w,[["render",B]]);export{z as default};
