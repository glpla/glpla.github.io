import{E as G,f as g,C as y,_ as k,G as v,o as i,H as N,i as p,c as r,B as I,T as L,q as w,s as x,b as s,g as $,F as b,e as B,j as S,N as F,d as _,t as n}from"./index-4NOsK6IO.js";import{u as T}from"./cart-Dw6bVP2t.js";const C=G("good",()=>{let e="https://glpla.github.io/utils/data/coffee.json",t=g([]),c=g(!1),o=g("");return{good:t,isLoading:c,errMsg:o,fetchGood:async()=>{c.value=!0,o.value="loading...";try{const d=await y.get(e);t.value=d.data.cont,o.value="loading ok"}catch(d){o.value=d.message}finally{c.value=!1,o.value="loading done"}},testFn:async()=>{const d=await y.get(e);t.value=d.data.cont}}}),V=e=>(w("data-v-f2580fd6"),e=e(),x(),e),j={key:0,class:"msg"},D=V(()=>s("div",{class:"modal-cont"},[s("div",{class:"item",style:{"--deg":"0"}}),s("div",{class:"item",style:{"--deg":"1"}}),s("div",{class:"item",style:{"--deg":"2"}}),s("div",{class:"item",style:{"--deg":"3"}}),s("div",{class:"item",style:{"--deg":"4"}}),s("div",{class:"item",style:{"--deg":"5"}}),s("div",{class:"item",style:{"--deg":"6"}}),s("div",{class:"item",style:{"--deg":"7"}}),s("div",{class:"item",style:{"--deg":"8"}}),s("div",{class:"item",style:{"--deg":"9"}}),s("div",{class:"item",style:{"--deg":"10"}}),s("div",{class:"item",style:{"--deg":"11"}}),s("div",{class:"item",style:{"--deg":"12"}}),s("div",{class:"item",style:{"--deg":"13"}}),s("div",{class:"item",style:{"--deg":"14"}}),s("div",{class:"item",style:{"--deg":"15"}}),s("div",{class:"item",style:{"--deg":"16"}}),s("div",{class:"item",style:{"--deg":"17"}})],-1)),E=[D],M={__name:"Loading",setup(e){const t=C();let c=v(()=>t.isLoading);return(o,u)=>(i(),N(L,{to:"body"},[p(c)?(i(),r("div",j,E)):I("",!0)]))}},q=k(M,[["__scopeId","data-v-f2580fd6"]]),H=e=>(w("data-v-11afc653"),e=e(),x(),e),O={class:"good"},z={key:0,class:"wrap"},A=["src"],J={class:"info"},K={class:"title"},P={class:"flavour"},Q={class:"desc"},R={class:"price"},U={class:"price-inner"},W={class:"price-discount"},X=["onClick"],Y=H(()=>s("span",{class:"iconfont icon-cart-full-fill"},null,-1)),Z=[Y],ss={key:1,class:"wrap"},es={__name:"Good",setup(e){let t=g(!1),c=g("");const o=C(),u=T(),f=v(()=>l=>(l.price*(1-l.discount)).toFixed(2)),d=l=>{u.addToCart(l),m("添加到购物车")},h=v(()=>o.good);$(()=>{o.fetchGood(),m("数据加载完毕")});const m=l=>{t.value=!0,c.value=l,setTimeout(()=>{t.value=!1},3e3)};return(l,ts)=>(i(),r("div",O,[h.value.length?(i(),r("div",z,[(i(!0),r(b,null,B(h.value,(a,os)=>(i(),r("div",{class:"item",key:a.id},[s("img",{class:"img",src:"https://glpla.github.io/utils"+a.img,alt:""},null,8,A),s("div",J,[s("div",K,[_(n(a.name)+" ",1),s("span",P,n(a.flavour),1)]),s("div",Q,n(a.desc.repeat(2)),1),s("div",R,[_("¥"+n(a.price)+" ",1),s("span",U,[_("(市场价"),s("span",null,"¥"+n(a.priceOrignal),1),_(")")])]),s("div",W,[_("预估到手 "),s("span",null,"¥"+n(f.value(a)),1)])]),s("div",{class:"btn",onClick:as=>d(a)},Z,8,X)]))),128))])):(i(),r("div",ss,"lists empty")),S(q),S(F,{flag:p(t),tips:p(c)},null,8,["flag","tips"])]))}},ls=k(es,[["__scopeId","data-v-11afc653"]]);export{ls as default};