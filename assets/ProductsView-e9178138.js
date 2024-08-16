import{_ as g,R as w,o as d,c as n,a as t,e as m,f as y,U as k,F as u,s as p,L as c,K as x}from"./index-c0f7cc17.js";import{S as f}from"./sweetalert2.all-0cdba191.js";const{VITE_APP_URL:r,VITE_APP_PATH:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"shangway",BASE_URL:"/basketball-sideProject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},$={data(){return{products:{},productId:"",searchShow:["全部","投籃","運球","防守","基本動作"],select:"無"}},components:{RouterLink:w},methods:{filterProduct(){const o=this.$loading.show({canCancel:!1});let s=this.select;s=="全部"&&(s=""),this.$http.get(`${r}v2/api/${h}/products?category=${s}`).then(l=>{this.products=l.data.products,o.hide()})},keyword(){const o=this.$loading.show({canCancel:!1}),s=this.$route.query.keyword;this.$http.get(`${r}v2/api/${h}/products`).then(l=>{let _=[];console.log(l),_=l.data.products.filter(a=>a.title.toLowerCase().includes(s.toLowerCase())),this.products==0?console.log("查不到東西"):!this.products==0&&console.log("查到東西"),this.products=_,o.hide()})},getProducts(){if(this.$route.query.keyword)return this.keyword();{const s=this.$loading.show({canCancel:!1});this.$http.get(`${r}v2/api/${h}/products`).then(l=>{this.products=l.data.products,s.hide()}).catch(l=>{console.log(l)})}},addToCart(o){const s={product_id:o,qty:1};this.$http.post(`${r}v2/api/${h}/cart`,{data:s}).then(l=>{f.fire({title:"成功加入課程!",showConfirmButton:!1,icon:"success",timer:1500})})},openModal(o){this.productId=o,this.$http.get(`${r}v2/api/${h}/product/${o}`).then(s=>{this.$router.push(`/product/${o}`)})}},mounted(){this.getProducts(),console.log("keyword",this.$route.query.keyword)}},v={class:"bg-black"},P={class:"container-fluid py-5"},C={class:"container"},T={class:"row"},S=t("h3",{class:"text-white text-center pb-10"},"所有課程",-1),V={class:"text-white"},A=["value"],E={key:0,class:"text-center text-white mt-10"},L=t("h3",null,"查無商品",-1),I=[L],R={key:1,class:"col-12"},U={class:"table border-collapse"},D=t("thead",{class:"text-white"},[t("tr",{class:"text-center d-none d-md-table-row"},[t("th",{class:"col-md-3"},"圖片"),t("th",{class:"col-md-3"},"上課名稱"),t("th",{class:"col-md-1"},"堂數"),t("th",{class:"col-md-1"},"價格"),t("th",{class:"col-md-1"},"查看細節"),t("th",{class:"col-md-1"},"加入課程")])],-1),B={class:"text-white"},M={class:"col-md-4 border-0 d-none d-md-table-cell",style:{height:"100px"}},q=["src"],N={class:"col-md-3 align-middle border-0 d-none d-md-table-cell"},z={class:"align-middle border-0 d-none d-md-table-cell"},F={class:"col-md-1 align-middle border-0 d-none d-md-table-cell"},H={class:"col-md-1 d-flex d-md-table-cell align-middle border-0 d-none d-md-table-cell"},O=["onClick"],j={class:"col-1 col-md-1 d-flex d-md-table-cell align-middle border-0 d-none d-md-table-cell"},K=["onClick"],G={class:"col-3 align-middle border-0 d-table-cell d-md-none"},J={class:"d-none d-md-table-cell align-middle border-0 d-table-cell d-md-none"},Q={class:"col-1 align-middle border-0 d-table-cell d-md-none"},W=t("br",null,null,-1),X={class:"col-1 d-flex d-md-table-cell align-middle border-0 d-table-cell d-md-none"},Y=["onClick"],Z={class:"col-1 d-flex d-md-table-cell align-middle border-0 d-table-cell d-md-none"},tt=["onClick"];function et(o,s,l,_,a,i){return d(),n("main",v,[t("div",P,[t("div",C,[t("div",T,[S,t("p",V,[m("分類 : "),y(t("select",{class:"bg-black text-white","onUpdate:modelValue":s[0]||(s[0]=e=>a.select=e),onChange:s[1]||(s[1]=(...e)=>i.filterProduct&&i.filterProduct(...e)),name:"",id:""},[(d(!0),n(u,null,p(a.searchShow,e=>(d(),n("option",{value:e,key:`${e}+123`},c(e),9,A))),128))],544),[[k,a.select]])]),this.products==0?(d(),n("div",E,I)):(d(),n("div",R,[t("table",U,[D,t("tbody",B,[(d(!0),n(u,null,p(a.products,e=>(d(),n("tr",{class:"text-center tableDark border border-start-0 border-end-0 border-bottom-1",key:e.id},[t("td",M,[t("img",{src:e.imageUrl,style:{height:"100px"},alt:""},null,8,q)]),t("td",N,c(e.title),1),t("td",z,c(e.unit),1),t("td",F,"NT$"+c(e.price),1),t("td",H,[t("button",{onClick:b=>i.openModal(e.id),type:"button",class:"btn btn-primary btn-sm text-white text-nowrap me-2"},"查看更多",8,O)]),t("td",j,[t("button",{onClick:b=>i.addToCart(e.id),type:"button",class:"btn btn-pink btn-sm text-white text-nowrap"},"加入課程",8,K)]),t("td",{class:"col-6 border-0 d-table-cell d-md-none",style:x([{height:"100px","background-size":"contain","background-repeat":"no-repeat","background-position":"center"},{backgroundImage:`url(${e.imageUrl})`}])},null,4),t("td",G,c(e.title),1),t("td",J,c(e.unit),1),t("td",Q,[m("NT$"),W,m(c(e.price),1)]),t("td",X,[t("button",{onClick:b=>i.openModal(e.id),type:"button",class:"btn btn-primary btn-sm text-white text-nowrap me-2"},"查看更多",8,Y)]),t("td",Z,[t("button",{onClick:b=>i.addToCart(e.id),type:"button",class:"btn btn-pink btn-sm text-white text-nowrap"},"加入課程",8,tt)])]))),128))])])]))])])])])}const lt=g($,[["render",et]]);export{lt as default};
