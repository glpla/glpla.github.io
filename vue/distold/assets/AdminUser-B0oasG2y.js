import{C as p,r as c,A as h,_ as v,o as m,a,c as o,f as g,w as k,F as u,m as d,e as y,q as U,d as e,t as n,T as S}from"./index-DLiG_4_C.js";const b=p("user",()=>{const r=c([]),t=c(!1),l=c("");return{users:r,isLoading:t,fetchUsers:async()=>{t.value=!0;let s=await h("https://glpla.github.io/utils/data/data2024/rank202401.json");r.value=s.data.cont,t.value=!1,l.value="user loaded"}}}),x={class:"admin-user"},C=["src"],w={class:"name"},A={class:"credit"},B={class:"star"},D={class:"iconfont icon-favorites-fill"},F=["onClick"],L={__name:"AdminUser",setup(r){const t=b();return m(()=>{t.fetchUsers()}),(l,_)=>(a(),o("div",x,[g(S,{tag:"ul",appear:"",class:"lists","move-class":"tg-class"},{default:k(()=>[(a(!0),o(u,null,d(y(t).users,(s,i)=>(a(),o("li",{class:"item",key:s.id,style:U(`--delay: ${i}`)},[e("div",null,n(i+1),1),e("div",null,n(s.usn),1),e("img",{class:"img",src:"https://glpla.github.io/utils"+s.uavatar,alt:""},null,8,C),e("div",w,n(s.uname),1),e("div",A,n(s.ucredit),1),e("div",B,[(a(!0),o(u,null,d(s.ucredit,f=>(a(),o("span",D))),256))]),e("button",{onClick:f=>l.toDetail(s.id)},"Details",8,F)],4))),128))]),_:1})]))}},T=v(L,[["__scopeId","data-v-b167eac7"]]);export{T as default};