import V from"./LoginView-fc75b2fc.js";import{_ as w,r as b,o as u,c as h,a as e,F as x,g,h as k,t as _,b as c,w as I,d as C,i as P,v as S,e as E,n as m,p as U,f as $}from"./index-f4979c4b.js";const{VITE_APP_URL:p,VITE_APP_PATH:f}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"shangway",BASE_URL:"/basketball-sideProject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},q={data(){return{cart:{},cartItem:"",fullPage:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""},orderId:""}},components:{LoginView:V},methods:{isPhone(s){return/^(09)[0-9]{8}$/.test(s)?!0:"需要正確的電話號碼"},getCarts(){const s=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!1,opacity:.2});this.$http.get(`${p}/v2/api/${f}/cart`).then(t=>{this.cart=t.data.data,s.hide(),console.log("購物車",t.data.data)})},deleteItem(s){this.$http.delete(`${p}/v2/api/${f}/cart/${s.id}`).then(t=>{console.log("刪除購物車",t),this.getCarts()})},createOrder(){const s=this.form;this.$http.post(`${p}v2/api/${f}/order`,{data:s}).then(t=>{console.log("送出報名表",t),this.orderId=t.data.orderId,this.$router.push(`/order/${this.orderId}`)}).catch(t=>{console.log(t)})},updateCartItem(s){const t={product_id:s.product.id,qty:s.qty};this.cartItem=s.id,this.$http.put(`${p}/v2/api/${f}/cart/${s.id}`,{data:t}).then(v=>{console.log("更新購物車",v.data),this.cartItem="",this.getCarts()})}},mounted(){this.getCarts()}},d=s=>(U("data-v-27ec59ec"),s=s(),$(),s),A={class:"bg-black"},N=C('<div class="container-fluid bg-black py-10" data-v-27ec59ec><ul class="row d-flex justify-content-center list-unstyled m-0" data-v-27ec59ec><li class="col-8 text-white d-flex justify-content-around" data-v-27ec59ec><div class="badge rounded-pill fs-7 bg-white text-primary" data-v-27ec59ec>1.填寫資訊</div><div class="badge rounded-pill fs-7 bg-secondary text-primary" data-v-27ec59ec>2.確認付款</div><div class="badge rounded-pill fs-7 bg-secondary text-primary" data-v-27ec59ec>3.付款完成</div></li></ul></div>',1),T={class:"container-fluid bg-black py-5"},j={class:"container"},D={class:"row d-flex justify-content-evenly"},F={class:"col-lg-5 mb-4 mb-xl-0"},L=d(()=>e("h6",{class:"text-white text-left"},"已預約課程",-1)),R={class:"table align-middle vl-parent"},B={ref:"formContainer"},M=d(()=>e("tr",{class:"text-white"},[e("th",{class:"col-2"},"上課名稱"),e("th",{class:"col-1 text-center",style:{}},"堂數"),e("th",{class:"col-2"},"價格")],-1)),O=[M],H={class:"text-white"},z={class:"input-group input-group-sm"},G=["onUpdate:modelValue","onChange","disabled"],J=["value"],K={class:"text-white d-flex justify-content-between"},Q=["onClick","disabled"],W=d(()=>e("i",{class:"fa-solid fa-trash"},null,-1)),X=[W],Y={class:"text-white"},Z=d(()=>e("td",{colspan:"2",class:"text-end"},"總計",-1)),ee={class:"col-lg-5"},te=d(()=>e("h6",{class:"text-white text-center mb-9"},"填寫個人資料",-1)),se={class:"form-floating text-white mb-6"},ae=d(()=>e("label",{for:"name",class:"text-white"},"姓名",-1)),oe={class:"form-floating text-white mb-6"},le=d(()=>e("label",{for:"tel",class:"text-white"},"請輸入電話",-1)),de={class:"form-floating text-white mb-6"},ce=d(()=>e("label",{for:"address",class:"text-white"},"上課地點",-1)),ne={class:"form-floating text-white mb-6"},ie=d(()=>e("label",{for:"email",class:"text-white"},"請輸入信箱",-1)),re=d(()=>e("div",{class:"d-flex justify-content-center mt-5"},[e("button",{type:"submit",class:"btn btn-white text-black"}," 送出報名表 ")],-1));function ue(s,t,v,he,l,n){const i=b("VField"),r=b("ErrorMessage"),y=b("VForm");return u(),h("section",A,[N,e("div",T,[e("div",j,[e("div",D,[e("div",F,[L,e("table",R,[e("thead",B,O,512),e("tbody",null,[l.cart.carts?(u(!0),h(x,{key:0},g(l.cart.carts,o=>(u(),h("tr",{class:"tableDark",key:o.id},[e("td",H,_(o.product.title),1),e("td",null,[e("div",z,[P(e("select",{name:"",id:"",class:"form-control bg-black text-white text-center","onUpdate:modelValue":a=>o.qty=a,onChange:a=>n.updateCartItem(o),disabled:o.id===l.cartItem},[(u(),h(x,null,g(20,a=>e("option",{value:a,key:a+"123"},_(a),9,J)),64))],40,G),[[S,o.qty]])])]),e("td",K,[E(_(o.final_total)+" ",1),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:a=>n.deleteItem(o),disabled:o.id===l.cartItem},X,8,Q)])]))),128)):k("",!0)]),e("tfoot",null,[e("tr",Y,[Z,e("td",null,_(l.cart.final_total),1)])])])]),e("div",ee,[te,c(y,{onSubmit:n.createOrder,class:"form-signin position-relative text-center"},{default:I(({errors:o})=>[e("div",se,[ae,c(i,{id:"name",name:"姓名",type:"text",rules:"required",modelValue:l.form.user.name,"onUpdate:modelValue":t[0]||(t[0]=a=>l.form.user.name=a),class:m(["text-black",{"is-invalid":o.姓名}]),placeholder:"請輸入姓名"},null,8,["modelValue","class"]),c(r,{name:"姓名",class:"invalid-feedback"})]),e("div",oe,[le,c(i,{id:"tel",name:"電話",type:"text",rules:n.isPhone,modelValue:l.form.user.tel,"onUpdate:modelValue":t[1]||(t[1]=a=>l.form.user.tel=a),class:m(["text-black",{"is-invalid":o.電話}]),placeholder:"請輸入電話"},null,8,["rules","modelValue","class"]),c(r,{name:"電話",class:"invalid-feedback"})]),e("div",de,[ce,c(i,{id:"address",name:"地址",type:"text",rules:"required",modelValue:l.form.user.address,"onUpdate:modelValue":t[2]||(t[2]=a=>l.form.user.address=a),class:m(["text-black",{"is-invalid":o.地址}]),placeholder:"請輸入上課地點"},null,8,["modelValue","class"]),c(r,{name:"地址",class:"invalid-feedback"})]),e("div",ne,[ie,c(i,{id:"email",name:"信箱",type:"text",rules:"required|email",modelValue:l.form.user.email,"onUpdate:modelValue":t[3]||(t[3]=a=>l.form.user.email=a),class:m(["text-black",{"is-invalid":o.信箱}]),placeholder:"請輸入信箱"},null,8,["modelValue","class"]),c(r,{name:"信箱",class:"invalid-feedback"})]),re]),_:1},8,["onSubmit"])])])])])])}const pe=w(q,[["render",ue],["__scopeId","data-v-27ec59ec"]]);export{pe as default};
