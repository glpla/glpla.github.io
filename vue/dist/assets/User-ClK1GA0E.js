import{_ as g,r as c,c as e,d as a,F as u,e as r,u as v,l as k,m as q,q as x,b as d,t as n,p as C,k as S}from"./index-BW-jPEur.js";const s=l=>(C("data-v-16457da8"),l=l(),S(),l),U={class:"user"},w=s(()=>a("div",{class:"item"},[a("div",null,"sn"),a("div",null,"name"),a("div",null,"avatar"),a("div",null,"email"),a("div",null,"role"),a("div",null,"credit"),a("div",null,"oper")],-1)),I=["src"],B={class:"btn-group"},F=["onClick"],N=s(()=>a("span",{class:"iconfont icon-edit"},null,-1)),V=[N],$=["onClick"],A=s(()=>a("span",{class:"iconfont icon-delete-fill"},null,-1)),D=[A],E={key:0,class:"add-user-wrap"},L=s(()=>a("h3",{class:"dia-title"},"add user",-1)),M={class:"dia-cont"},j=x('<div class="add-item" data-v-16457da8><span data-v-16457da8>id</span><input type="text" placeholder="your id" name="uid" required data-v-16457da8></div><div class="add-item" data-v-16457da8><span data-v-16457da8>pass</span><input type="password" placeholder="your pass" name="upass" required data-v-16457da8></div><div class="add-item" data-v-16457da8><span data-v-16457da8>name</span><input type="text" placeholder="your name" name="uname" required data-v-16457da8></div><div class="add-item" data-v-16457da8><span data-v-16457da8>cell</span><input type="text" placeholder="your cell" name="ucell" required data-v-16457da8></div><div class="add-item" data-v-16457da8><span data-v-16457da8>mail</span><input type="text" placeholder="your mail" name="umail" required data-v-16457da8></div><div class="add-item" data-v-16457da8><span data-v-16457da8>avatar</span><img src="" alt="" data-v-16457da8></div>',6),z={class:"add-item"},G=s(()=>a("span",null,"credit",-1)),H={class:"btn-group"},J={class:"iconfont icon-favorites"},K=s(()=>a("div",{class:"add-item"},[a("span",null,"role"),a("select",{name:"urole"},[a("option",{value:"admin"},"admin"),a("option",{value:"user"},"user")])],-1)),O=s(()=>a("button",{class:"add",type:"submit"},"submit",-1)),P={__name:"User",setup(l){let p=c([{id:100,usn:"20221081",uavatar:"/imgs/avatar/avatar0.png",uname:"glpla",umail:"1942194789@qq.com",urole:"admin"},{id:101,usn:"20222019",uavatar:"/imgs/avatar/avatar1.png",uname:"cnplaman",umail:"258482435@qq.com",urole:"user"}]),i=c(!1);const _=()=>{i.value=!0},m=o=>{console.log(o)},h=o=>{console.log(o)},b=()=>{i.value=!1},y=()=>{i.value=!1};return(o,Q)=>(d(),e("div",U,[a("button",{class:"btn add-user-btn",onClick:_},"user add"),w,(d(!0),e(u,null,r(v(p),(t,R)=>(d(),e("div",{class:"item",key:t.id},[a("div",null,n(t.usn),1),a("div",null,n(t.uname),1),a("img",{src:t.uavatar,alt:"user avatar"},null,8,I),a("div",null,n(t.umail),1),a("div",null,n(t.urole),1),a("div",null,n(t.ucredit),1),a("div",B,[a("button",{class:"btn edit-btn",onClick:f=>m(t.id),title:"edit by id"},V,8,F),a("button",{class:"btn del-btn",onClick:f=>h(t.id),title:"delete by id"},D,8,$)])]))),128)),v(i)?(d(),e("div",E,[a("form",{onSubmit:k(y,["prevent"])},[L,a("div",M,[j,a("div",z,[G,a("div",H,[(d(),e(u,null,r(5,t=>a("span",J)),64))])]),K,a("div",{class:"btn-group"},[O,a("button",{class:"cancle",type:"button",onClick:b},"cancel")])])],32)])):q("",!0)]))}},W=g(P,[["__scopeId","data-v-16457da8"]]);export{W as default};