import{_ as g,r as o,c as s,d as a,F as u,e as r,u as v,l as k,m as q,q as x,b as d,t as c,p as C,k as S}from"./index-DKNwLkGg.js";const t=n=>(C("data-v-a1c2cb8e"),n=n(),S(),n),U={class:"user"},w=t(()=>a("div",{class:"item"},[a("div",null,"sn"),a("div",null,"name"),a("div",null,"avatar"),a("div",null,"email"),a("div",null,"role"),a("div",null,"credit"),a("div",null,"oper")],-1)),I=["src"],B={class:"btn-group"},F=["onClick"],N=t(()=>a("span",{class:"iconfont icon-edit"},null,-1)),V=[N],$=["onClick"],A=t(()=>a("span",{class:"iconfont icon-delete-fill"},null,-1)),D=[A],E={key:0,class:"add-user-wrap"},L=t(()=>a("h3",{class:"dia-title"},"add user",-1)),M={class:"dia-cont"},j=x('<div class="add-item" data-v-a1c2cb8e><span data-v-a1c2cb8e>id</span><input type="text" placeholder="your id" name="uid" required data-v-a1c2cb8e></div><div class="add-item" data-v-a1c2cb8e><span data-v-a1c2cb8e>pass</span><input type="password" placeholder="your pass" name="upass" required data-v-a1c2cb8e></div><div class="add-item" data-v-a1c2cb8e><span data-v-a1c2cb8e>name</span><input type="text" placeholder="your name" name="uname" required data-v-a1c2cb8e></div><div class="add-item" data-v-a1c2cb8e><span data-v-a1c2cb8e>cell</span><input type="text" placeholder="your cell" name="ucell" required data-v-a1c2cb8e></div><div class="add-item" data-v-a1c2cb8e><span data-v-a1c2cb8e>mail</span><input type="text" placeholder="your mail" name="umail" required data-v-a1c2cb8e></div><div class="add-item" data-v-a1c2cb8e><span data-v-a1c2cb8e>avatar</span><img src="" alt="" data-v-a1c2cb8e></div>',6),z={class:"add-item"},G=t(()=>a("span",null,"credit",-1)),H={class:"btn-group"},J={class:"iconfont icon-favorites"},K=t(()=>a("div",{class:"add-item"},[a("span",null,"role"),a("select",{name:"urole"},[a("option",{value:"admin"},"admin"),a("option",{value:"user"},"user")])],-1)),O=t(()=>a("button",{class:"add",type:"submit"},"submit",-1)),P={__name:"User",setup(n){let p=o([{id:100,usn:"20221081",uavatar:"/avatar/avatar0.png",uname:"glpla",umail:"1942194789@qq.com",urole:"admin"},{id:101,usn:"20222019",uavatar:"/avatar/avatar1.png",uname:"cnplaman",umail:"258482435@qq.com",urole:"user"}]),l=o(!1);const _=()=>{l.value=!0},m=i=>{console.log(i)},b=i=>{console.log(i)},h=()=>{l.value=!1},y=()=>{l.value=!1};return(i,Q)=>(d(),s("div",U,[a("button",{class:"btn add-user-btn",onClick:_},"user add"),w,(d(!0),s(u,null,r(v(p),(e,R)=>(d(),s("div",{class:"item",key:e.id},[a("div",null,c(e.usn),1),a("div",null,c(e.uname),1),a("img",{src:e.uavatar,alt:"user avatar"},null,8,I),a("div",null,c(e.umail),1),a("div",null,c(e.urole),1),a("div",null,c(e.ucredit),1),a("div",B,[a("button",{class:"btn edit-btn",onClick:f=>m(e.id),title:"edit by id"},V,8,F),a("button",{class:"btn del-btn",onClick:f=>b(e.id),title:"delete by id"},D,8,$)])]))),128)),v(l)?(d(),s("div",E,[a("form",{onSubmit:k(y,["prevent"])},[L,a("div",M,[j,a("div",z,[G,a("div",H,[(d(),s(u,null,r(5,e=>a("span",J)),64))])]),K,a("div",{class:"btn-group"},[O,a("button",{class:"cancle",type:"button",onClick:h},"cancel")])])],32)])):q("",!0)]))}},W=g(P,[["__scopeId","data-v-a1c2cb8e"]]);export{W as default};