function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./AdminComment-TzVBdPYn.js","./index-CLJThBxz.js","./index-acOeo2Ea.css","./index.browser-DP16PUbO.js","./AdminComment-AxtqIxG7.css","./AdminGood-BZymmoT3.js","./RichEditor-CBadrzGy.js","./RichEditor-BZVg25AT.css","./AdminGood-j6oZyonj.css","./AdminPromotion-BediIfh6.js","./AdminPromotion-B5FrdUmy.css","./AdminUser-7thYjXra.js","./AdminOrder-DJ4m7W_S.js","./xlsx-ChWuxSKv.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as v,r as E,I as f,c as _,d as i,F as g,m as A,e as a,E as D,J as I,a as r,n as L,i as R,t as h,K as o,L as e}from"./index-CLJThBxz.js";const k={class:"admin"},P={class:"flex-box"},V=["onClick"],C={class:"cont"},O={__name:"Admin",setup(T){const m=o(()=>e(()=>import("./AdminComment-TzVBdPYn.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),n=o(()=>e(()=>import("./AdminGood-BZymmoT3.js"),__vite__mapDeps([5,1,2,6,7,8]),import.meta.url)),l=o(()=>e(()=>import("./AdminPromotion-BediIfh6.js"),__vite__mapDeps([9,1,2,6,7,10]),import.meta.url)),d=o(()=>e(()=>import("./AdminUser-7thYjXra.js"),__vite__mapDeps([11,1,2]),import.meta.url)),p=o(()=>e(()=>import("./AdminOrder-DJ4m7W_S.js"),__vite__mapDeps([12,13,1,2]),import.meta.url));let t=E(0),c=f([{tag:"用户",com:d},{tag:"商品",com:n},{tag:"订单",com:p},{tag:"活动",com:l},{tag:"评论",com:m}]);return(y,B)=>(r(),_("div",k,[i("div",P,[(r(!0),_(g,null,A(a(c),(u,s)=>(r(),_("div",{class:L(["item",{active:a(t)==s}]),key:s,onClick:x=>R(t)?t.value=s:t=s},h(u.tag),11,V))),128))]),i("div",C,[(r(),D(I(a(c)[a(t)].com)))])]))}},b=v(O,[["__scopeId","data-v-40210501"]]);export{b as default};