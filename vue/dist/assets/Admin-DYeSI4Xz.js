function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./AdminComment-CHhvN6AD.js","./index-DTrq-Qla.js","./index-DA7ni3tk.css","./index.browser-DP16PUbO.js","./AdminComment-AxtqIxG7.css","./AdminGood-HmKeEk54.js","./food-BfXTS8yf.js","./AdminGood-ChTXTWyh.css","./AdminPromotion-CFEabY7D.js","./RichEditor-DuYpc5yC.js","./RichEditor-BZVg25AT.css","./AdminPromotion-B5FrdUmy.css","./AdminUser-B4GBvGIe.js","./AdminOrder-k35A-snP.js","./xlsx-ChWuxSKv.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as v,r as E,I as f,c as _,d as i,F as g,m as A,e as a,E as D,J as I,a as r,n as L,i as R,t as h,K as o,L as e}from"./index-DTrq-Qla.js";const k={class:"admin"},P={class:"flex-box"},V=["onClick"],C={class:"cont"},O={__name:"Admin",setup(T){const m=o(()=>e(()=>import("./AdminComment-CHhvN6AD.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),n=o(()=>e(()=>import("./AdminGood-HmKeEk54.js"),__vite__mapDeps([5,6,1,2,7]),import.meta.url)),l=o(()=>e(()=>import("./AdminPromotion-CFEabY7D.js"),__vite__mapDeps([8,1,2,9,10,11]),import.meta.url)),d=o(()=>e(()=>import("./AdminUser-B4GBvGIe.js"),__vite__mapDeps([12,1,2]),import.meta.url)),p=o(()=>e(()=>import("./AdminOrder-k35A-snP.js"),__vite__mapDeps([13,14,1,2]),import.meta.url));let t=E(0),c=f([{tag:"用户",com:d},{tag:"商品",com:n},{tag:"订单",com:p},{tag:"活动",com:l},{tag:"评论",com:m}]);return(y,B)=>(r(),_("div",k,[i("div",P,[(r(!0),_(g,null,A(a(c),(u,s)=>(r(),_("div",{class:L(["item",{active:a(t)==s}]),key:s,onClick:b=>R(t)?t.value=s:t=s},h(u.tag),11,V))),128))]),i("div",C,[(r(),D(I(a(c)[a(t)].com)))])]))}},F=v(O,[["__scopeId","data-v-7cc1ab3c"]]);export{F as default};