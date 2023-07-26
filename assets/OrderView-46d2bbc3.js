import{S as u}from"./StateView-14207126.js";import{_ as p,r as w,o as d,c as r,a as t,b,F as c,q as x,J as e}from"./index-36e314b9.js";const{VITE_APP_URL:i,VITE_APP_PATH:a}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"shangway",BASE_URL:"/basketball-sideProject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},f={data(){return{order:{user:{}},cart:{},orderId:""}},components:{StateView:u},methods:{getOrder(){this.orderId=this.$route.params.id,this.$http.get(`${i}/v2/api/${a}/order/${this.orderId}`).then(o=>{const{order:n}=o.data;this.order=n,console.log("order",o.data)})},checkPay(){this.$http.post(`${i}/v2/api/${a}/pay/${this.orderId}`).then(o=>{console.log("確認付款",o),this.$router.push(`/pay/${this.orderId}`)})}},mounted(){this.getOrder()}},y={class:"container-fluid bg-black py-5"},m={class:"container"},g={class:"row d-flex justify-content-evenly"},k={class:"col-lg-5 mb-4 mb-xl-0"},P=t("h6",{class:"text-white text-left"},"課程清單",-1),v={class:"table align-middle",style:{"background-color":"#221a4f"}},V={class:"text-white",style:{width:"30%"}},I=["src"],E={class:"text-white text-center",style:{width:"50%"}},S=t("br",null,null,-1),A={class:"text-white text-center"},T={class:"col-lg-5"},O=t("h6",{class:"text-white text-left"},"聯絡資料",-1),$={class:"table align-middle",style:{"background-color":"#221a4f"}},D={class:"text-white"},R=t("td",{class:"w-25 fw-bold"},"姓名",-1),B={class:"text-white"},L=t("td",{class:"w-25 fw-bold"},"電話",-1),U={class:"text-white"},N=t("td",{class:"w-25 fw-bold"},"上課地點",-1),j={class:"text-white"},q=t("td",{class:"w-25 fw-bold"},"信箱",-1),C={class:"text-white"},F=t("td",{class:"w-25 fw-bold"},"訂單編號",-1),H={class:"text-white"},M=t("td",{class:"w-25 fw-bold"},"付款方式",-1),J={class:"text-white"},z=t("td",{class:"w-25 fw-bold"},"付款狀態",-1),G={key:0,class:"text-danger"},K={key:1,class:"text-success"},Q=t("td",null,null,-1);function W(o,n,X,Y,s,_){const h=w("StateView");return d(),r(c,null,[t("section",null,[b(h,{state:2})]),t("section",null,[t("div",y,[t("div",m,[t("div",g,[t("div",k,[P,t("table",v,[t("tbody",null,[(d(!0),r(c,null,x(s.order.products,l=>(d(),r("tr",{class:"tableDark",key:l+1},[t("td",V,[t("img",{style:{width:"80px"},src:l.product.imageUrl,alt:"課程照片"},null,8,I)]),t("td",E,[t("span",null,e(l.product.title),1),S,t("span",null,e(l.qty)+" 堂課",1)]),t("td",A,[t("span",null,"NT "+e(s.order.total),1)])]))),128))])])]),t("div",T,[O,t("table",$,[t("tbody",null,[t("tr",D,[R,t("td",null,e(s.order.user.name),1)]),t("tr",B,[L,t("td",null,e(s.order.user.tel),1)]),t("tr",U,[N,t("td",null,e(s.order.user.address),1)]),t("tr",j,[q,t("td",null,e(s.order.user.email),1)]),t("tr",C,[F,t("td",null,e(s.order.id),1)]),t("tr",H,[M,t("td",null,e(s.order.user.paymentMethod),1)]),t("tr",J,[z,s.order.is_paid===!1?(d(),r("td",G,"尚未付款")):(d(),r("td",K,"已付款"))]),t("tr",null,[Q,t("td",null,[t("button",{onClick:n[0]||(n[0]=l=>_.checkPay()),type:"submit",class:"btn btn-pink text-white"},"確認付款")])])])])])])])])])],64)}const st=p(f,[["render",W]]);export{st as default};
