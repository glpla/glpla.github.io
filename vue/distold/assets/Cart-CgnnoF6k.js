import{_ as L,r as S,G as _,g as $,w as f,o as c,c as a,F as C,b as o,a as k,v as b,e as q,t as d,q as I,s as D}from"./index-CeVYWr2Z.js";import{u as O}from"./cart-MuxgtwNt.js";const l=r=>(I("data-v-38a0a43c"),r=r(),D(),r),U={class:"cart"},B={class:"item leading"},F={class:"leading-title"},V=l(()=>o("span",null,"商品",-1)),x={class:"sort-box"},M={class:"leading-title"},E=l(()=>o("span",null,"单价",-1)),G={class:"sort-box"},N={class:"leading-title"},T=l(()=>o("span",null,"库存",-1)),j={class:"sort-box"},z=l(()=>o("div",null,"操作",-1)),H={class:"item"},J=["value"],K={class:"ellipsis"},P={class:"btn-group"},Q=["onClick"],R={class:"number"},W=["onClick"],X={class:"total"},Y={key:1,class:"empty"},Z=l(()=>o("span",{class:"iconfont icon-cart-full-fill"},null,-1)),ss=l(()=>o("div",null,"购物车为空",-1)),ts=[Z,ss],os={__name:"Cart",setup(r){const g=O(),n=S({selectedAll:!1,selectedLists:[],lists:[]}),h=t=>{t.quantity<t.stock&&t.quantity++},m=t=>{t.quantity>1&&t.quantity--},w=_(()=>n.selectedLists.reduce((t,s)=>t+s.quantity*s.price,0).toFixed(2)),p=t=>{n.lists.sort((s,e)=>s[t]-e[t])},v=t=>{n.lists.sort((s,e)=>e[t]-s[t])},y=t=>{n.lists.sort((s,e)=>s[t].localeCompare(e[t]))},A=t=>{n.lists.sort((s,e)=>e[t].localeCompare(s[t]))};$(()=>{n.lists=_(()=>g.cart)});let u=!0;return f(()=>n.selectedAll,t=>{t?n.selectedLists=[...n.lists]:u&&(n.selectedLists=[])}),f(()=>n.selectedLists,t=>{t.length==n.lists.length?(n.selectedAll=!0,u=!0):(n.selectedAll=!1,u=!1)}),(t,s)=>(c(),a("div",U,[n.lists.length?(c(),a(C,{key:0},[o("div",B,[k(o("input",{type:"checkbox","onUpdate:modelValue":s[0]||(s[0]=e=>n.selectedAll=e),onChange:s[1]||(s[1]=(...e)=>t.selAll&&t.selAll(...e))},null,544),[[b,n.selectedAll]]),o("div",F,[V,o("div",x,[o("span",{class:"iconfont icon-up icon",onClick:s[2]||(s[2]=e=>y("name"))}),o("span",{class:"iconfont icon-down icon",onClick:s[3]||(s[3]=e=>A("name"))})])]),o("div",M,[E,o("div",G,[o("span",{class:"iconfont icon-up icon",onClick:s[4]||(s[4]=e=>p("price"))}),o("span",{class:"iconfont icon-down icon",onClick:s[5]||(s[5]=e=>v("price"))})])]),o("div",N,[T,o("div",j,[o("span",{class:"iconfont icon-up icon",onClick:s[6]||(s[6]=e=>p("stock"))}),o("span",{class:"iconfont icon-down icon",onClick:s[7]||(s[7]=e=>v("stock"))})])]),z]),(c(!0),a(C,null,q(n.lists,e=>(c(),a("div",H,[k(o("input",{type:"checkbox",value:e,"onUpdate:modelValue":s[8]||(s[8]=i=>n.selectedLists=i),onChange:s[9]||(s[9]=(...i)=>t.selItem&&t.selItem(...i))},null,40,J),[[b,n.selectedLists]]),o("div",K,d(e.name),1),o("div",null,d(e.price),1),o("div",null,d(e.stock),1),o("div",P,[o("button",{onClick:i=>m(e)},"-",8,Q),o("div",R,d(e.quantity),1),o("button",{onClick:i=>h(e)},"+",8,W)])]))),256)),o("div",X,[o("div",null,"总价: "+d(w.value),1),o("button",{class:"order-btn",onClick:s[10]||(s[10]=(...e)=>t.setOrder&&t.setOrder(...e))},"立即下单"),o("button",{class:"cart-btn",onClick:s[11]||(s[11]=(...e)=>t.setOrder&&t.setOrder(...e))},"找人代付")])],64)):(c(),a("div",Y,ts))]))}},ls=L(os,[["__scopeId","data-v-38a0a43c"]]);export{ls as default};