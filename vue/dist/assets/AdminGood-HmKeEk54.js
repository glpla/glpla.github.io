import{u as i}from"./food-BfXTS8yf.js";import{_ as u,Q as _,o as m,a as e,c as a,F as p,m as g,d as s,t as n,e as h}from"./index-DTrq-Qla.js";const f={class:"admin-good"},v=["src"],k=["onClick"],x={__name:"AdminGood",setup(B){const l=_(),d=i();m(()=>{d.fetchGood()});const r=t=>{console.log(t),l.push({name:"admingooddetail",params:{id:t}})};return(t,D)=>(e(),a("div",f,[(e(!0),a(p,null,g(h(d).goods,(o,c)=>(e(),a("div",{class:"item",key:o.id},[s("div",null,n(c+1),1),s("img",{class:"img",src:"https://glpla.github.io/utils"+o.image,alt:""},null,8,v),s("div",null,n(o.name),1),s("div",null,n(o.phone),1),s("button",{onClick:F=>r(o.id)},"Details",8,k)]))),128))]))}},b=u(x,[["__scopeId","data-v-761d5854"]]);export{b as default};