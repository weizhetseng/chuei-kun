import{_ as p}from"./envelope-solid-194eb448.js";import{_ as b,a as f}from"./btn_breadcrumb-b2d83530.js";import{l as g,r as s,o,c as n,a as t,b as e,p as x,w as c,F as y,n as h,f as v}from"./index-f3a7399d.js";const k={class:"bg-bgword bg-no-repeat bg-[center_top_-40px] pt-10"},w={class:"container"},S=e("div",{class:"titleStyle mb-9"},[e("h2",{class:"text-4xl text-Mred font-bold"},"忘記密碼"),e("p",null,"Forgot Password")],-1),F={class:"gap-5 m-auto mb-16 relative sm:flex lg:w-2/3"},D=e("label",{class:"w-full p-2 flex items-center gap-1 text-lg font-bold sm:w-32 sm:border-r sm:border-gray",for:"user"},[e("div",{class:"border border-Mred rounded-full p-2"},[e("img",{src:p,alt:""})]),v(" 帳號 ")],-1),B=e("div",{class:"flex justify-center items-center gap-5"},[e("button",{class:"buttonStyle2 group",type:"reset"},[e("span",{class:"btnWordStyle2"},"清除")]),e("button",{class:"buttonStyle group",type:"submit"},[e("span",{class:"btnWordStyle"},"送出")])],-1),I={key:1,class:"mt-7 mb-20"},C=e("p",{class:"text-3xl text-center mb-20 font-bold text-Mred"}," 您的新密碼已經發送到您的手機，請查看訊息 ",-1),M={class:"text-center"},N=e("span",{class:"linkWordStyle"},"返回登入頁",-1),j={__name:"Forget",setup(V){const r=g(!1);function i(){r.value=!0}return(W,a)=>{const d=s("Field"),_=s("error-message"),m=s("Form"),u=s("RouterLink");return o(),n(y,null,[t(b),e("div",k,[e("div",w,[t(f),S,r.value?(o(),n("div",I,[C,e("div",M,[t(u,{to:"/login",class:"group linkStyle"},{default:c(()=>[N]),_:1})])])):(o(),x(m,{key:0,action:"",class:"w-4/5 m-auto mb-20",onSubmit:a[0]||(a[0]=l=>i())},{default:c(({errors:l})=>[e("div",F,[D,t(d,{class:h(["w-full outline-none border-b border-lgray p-2 sm:w-[calc(100%-148px)]",{"is-invalid":l.userID}]),id:"userID",name:"userID",type:"text",label:"帳號",placeholder:"請輸入手機號碼或電子信箱 ",rules:"required"},null,8,["class"]),t(_,{name:"userID",class:"block absolute right-0 -bottom-6 text-red-700 text-right"})]),B]),_:1}))])])],64)}}};export{j as default};
