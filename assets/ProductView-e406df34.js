import{_ as u,a as h,o,c,b as t,F as p,g,t as n}from"./index-df38a6af.js";const{VITE_APP_URL:r,VITE_APP_PATH:l}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"shangway",BASE_URL:"/basketball-sideProject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},x={data(){return{products:{}}},components:{RouterLink:h},methods:{getProducts(){this.$http.get(`${r}/v2/api/${l}/products/all`).then(e=>{console.log(e),this.products=e.data.products,console.log(this.products)}).catch(e=>{console.log(e)})},addToCart(e){const i={product_id:e,qty:1};this.$http.post(`${r}/v2/api/${l}/cart`,{data:i}).then(a=>{alert("預約成功")})}},mounted(){this.getProducts()}},f={class:"container-fluid bg-black py-5"},m={class:"container"},b={class:"row"},P=t("h3",{class:"text-white text-center pb-10"},"所有課程",-1),y={class:"col-12"},v={class:"border border-1 border-outset rounded-3 text-white d-flex justify-content-center mb-9"},k={class:"col-4"},w=["src"],$={class:"col-5 d-flex flex-column justify-content-center align-content-center align-content-lg-start"},T={class:"d-flex justify-content-center d-lg-block align-items-center text-center text-lg-start"},E={class:"description text-center text-lg-start"},V={class:"col-3 d-flex flex-column justify-content-around align-items-center"},A={class:"price text-w fst-italic"},j=["onClick"];function R(e,i,a,L,d,_){return o(),c("div",f,[t("div",m,[t("div",b,[P,t("div",y,[(o(!0),c(p,null,g(d.products,s=>(o(),c("ul",{class:"list-unstyled",key:s.id},[t("li",v,[t("div",k,[t("img",{class:"me-4 rounded-5 p-4",style:{"max-width":"90%"},src:s.imageUrl},null,8,w)]),t("div",$,[t("h6",T,n(s.title),1),t("p",E,n(s.description),1)]),t("div",V,[t("p",A,"NT$"+n(s.price),1),t("button",{type:"button",class:"p-0 py-md-2 px-md-5 rounded-3 bg-black text-white border border-1 border-white join",onClick:B=>_.addToCart(s.id)},"預約上課 ",8,j)])])]))),128))])])])])}const D=u(x,[["render",R]]);export{D as default};
