import{f as d,r as o,_ as m,g as v,o as _,E as w,a,c as r,k as g,F as f,l as S,x as h,u as c,t as k,D as y}from"./index--aP1ir6c.js";import{c as x}from"./api-CneDOw5Z.js";const I=d("swiper",()=>{let l=o([]),e=o(!1),s=o("");return{swipers:l,isLoading:e,errMsg:s,fetchSwiper:async()=>{e.value=!0,s.value="loading...";const t=await x();l.value=[...t.data.cont],e.value=!1,s.value="loading ok"}}}),b={class:"dot-box"},B={key:1},H={__name:"HomeSwiper",setup(l){const e=I(),s=v(()=>e.swipers);let n,t=o(0);const u=()=>{t.value++,t.value=t.value%e.swipers.length};return _(()=>{e.fetchSwiper(),n=setInterval(()=>{u()},3e3)}),w(()=>{clearInterval(n)}),(z,D)=>s.value.length?(a(),r("div",{key:0,class:"home-swiper",style:y(`background-image:url(${s.value[c(t)].url})`)},[g("div",b,[(a(!0),r(f,null,S(s.value,(p,i)=>(a(),r("div",{class:h(["dot",{active:i==c(t)}]),key:p.id},k(i+1),3))),128))])],4)):(a(),r("div",B,"empty"))}},L=m(H,[["__scopeId","data-v-be0be27c"]]);export{L as H};