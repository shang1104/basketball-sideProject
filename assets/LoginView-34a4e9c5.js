import{_ as d,o as u,c as p,b as s,j as m,i as l,k as c}from"./index-df38a6af.js";const{VITE_APP_URL:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"shangway",BASE_URL:"/basketball-sideProject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},_={data(){return{apiUrl:"https://vue3-course-api.hexschool.io/v2",user:{username:"",password:""}}},methods:{login(){const n=`${h}admin/signin`;this.$http.post(n,this.user).then(e=>{const{token:i,expired:a}=e.data;document.cookie=`hexToken=${i};expires=${new Date(a)}; path=/`,this.$router.push("/home")}).catch(e=>{alert(e.response.data.message)})}}},f={class:"container-fulid bg-black py-9"},g={class:"container"},w={class:"row"},b=s("h3",{class:"text-white text-center pb-9"},"註冊/登入",-1),x={class:"col-sm-8 col-lg-6 col-xl-4 mx-auto"},P={class:"form-floating mb-6"},v=s("label",{for:"floatingInput"},"Email address",-1),k={class:"form-floating mb-6"},E=s("label",{for:"floatingPassword"},"Password",-1),V=s("button",{class:"btn btn-lg btn-white w-100",id:"login",type:"submit"}," 登入 ",-1);function T(n,e,i,a,t,r){return u(),p("main",null,[s("div",f,[s("div",g,[s("div",w,[b,s("div",x,[s("form",{class:"form-signin",onSubmit:e[2]||(e[2]=m((...o)=>r.login&&r.login(...o),["prevent"]))},[s("div",P,[l(s("input",{type:"email",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=o=>t.user.username=o),id:"floatingInput",placeholder:"name@example.com",required:"",autofocus:""},null,512),[[c,t.user.username]]),v]),s("div",k,[l(s("input",{type:"password",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=o=>t.user.password=o),id:"floatingPassword",placeholder:"Password",required:""},null,512),[[c,t.user.password]]),E]),V],32)])])])])])}const y=d(_,[["render",T]]);export{y as default};
