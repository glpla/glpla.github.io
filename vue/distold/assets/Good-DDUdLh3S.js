import{A as g,r as i,B as f,_ as v,C as u,o as S,c as n,F as k,e as y,b as d,d as s,j as l,t as c,p as m,k as x}from"./index-DvUMe5fe.js";import{u as C}from"./cart-ChrFAXst.js";const G=g("good",()=>{const t=i([]);i(!1);let r=i(null);return{good:t,fetchGood:async()=>{try{const e=await f.get("https://glpla.github.io/utils/data/coffee.json");console.log(e.data.cont),t.value=e.data.cont}catch(e){r.value=e.message}finally{}}}}),b=t=>(m("data-v-11307954"),t=t(),x(),t),w={class:"good"},B={key:0,class:"wrap"},I=["src"],F={class:"info"},j={class:"title"},D={class:"flavour"},N={class:"desc"},T={class:"price"},V={class:"price-inner"},A={class:"price-discount"},E=["onClick"],L=b(()=>s("span",{class:"iconfont icon-cart-full-fill"},null,-1)),M=[L],O={key:1,class:"wrap"},$={__name:"Good",setup(t){const r=G(),_=C(),e=u(()=>a=>(a.price*(1-a.discount)).toFixed(2)),h=a=>{console.log(a),_.addToCart(a)};S(()=>{r.fetchGood()});const p=u(()=>r.good);return(a,q)=>(d(),n("div",w,[p.value.length?(d(),n("div",B,[(d(!0),n(k,null,y(p.value,(o,z)=>(d(),n("div",{class:"item",key:o.id},[s("img",{class:"img",src:"https://glpla.github.io/utils"+o.img,alt:""},null,8,I),s("div",F,[s("div",j,[l(c(o.name)+" ",1),s("span",D,c(o.flavour),1)]),s("div",N,c(o.desc.repeat(2)),1),s("div",T,[l("¥"+c(o.price)+" ",1),s("span",V,[l("(市场价"),s("span",null,"¥"+c(o.priceOrignal),1),l(")")])]),s("div",A,[l("预估到手 "),s("span",null,"¥"+c(e.value(o)),1)])]),s("div",{class:"btn",onClick:H=>h(o)},M,8,E)]))),128))])):(d(),n("div",O," lists empty"))]))}},P=v($,[["__scopeId","data-v-11307954"]]);export{P as default};