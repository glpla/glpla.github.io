import{_ as q,l as z,r,m as E,o as N,c as v,d as t,j as n,F as x,e as y,u,q as C,v as w,s as A,x as R,b as _,t as f,n as U,f as $,y as L,z as G,p as J,k as K}from"./index-Codf4qAA.js";import{u as O,w as P}from"./xlsx-ChWuxSKv.js";const e=b=>(J("data-v-1a84e450"),b=b(),K(),b),Q={class:"user"},W=e(()=>t("span",{class:"iconfont icon-customer-fill"},null,-1)),X=e(()=>t("span",{class:"iconfont icon-change"},null,-1)),Y=e(()=>t("span",{class:"iconfont icon-excel-full"},null,-1)),Z=e(()=>t("tr",{class:"tbl-header"},[t("th",null,[n("学号"),t("br"),t("span",null,"usn")]),t("th",null,[n("姓名"),t("br"),t("span",null,"uname")]),t("th",null,[n("头像"),t("br"),t("span",null,"uavatar")]),t("th",null,[n("积分"),t("br"),t("span",null,"ucredit")]),t("th",null,[n("操作"),t("br"),t("span",null,"uoper")])],-1)),tt={hidden:""},at=["src"],st={class:"btn-group"},et=["onClick"],lt=e(()=>t("span",{class:"iconfont icon-edit"},null,-1)),nt=[lt],ot=["onClick"],ut=e(()=>t("span",{class:"iconfont icon-delete-fill"},null,-1)),ct=[ut],it={key:0,class:"add-user-wrap"},dt=e(()=>t("h3",{class:"dia-title"},"add user",-1)),rt={class:"dia-cont"},vt={class:"add-item"},_t=e(()=>t("span",null,"学号",-1)),pt={class:"add-item"},ht=e(()=>t("span",null,"姓名",-1)),bt={class:"add-item"},mt=e(()=>t("span",null,"头像",-1)),ft={class:"img-box"},gt=["value"],kt={class:"add-item"},xt=e(()=>t("span",null,"积分",-1)),yt=["onClick"],Ct=e(()=>t("button",{class:"add",type:"submit"},[n("提交 "),t("span",{class:"iconfont icon-tick"})],-1)),wt=e(()=>t("span",{class:"iconfont icon-change"},null,-1)),Ut=e(()=>t("span",{class:"iconfont icon-close"},null,-1)),St={__name:"User",setup(b){const S=z("axios");let c=r(null),g=r(null),p=r([]),m=r(!1),o=r(0),l=r({usn:"",uname:"",uavatar:"/avatar/avatar0.png",ucredit:1});const I=()=>{m.value=!0},V=s=>{console.log(s)},B=s=>{console.log(s)},D=()=>{m.value=!1,l.value={usn:"",uname:"",uavatar:"/avatar/avatar0.png",ucredit:1},o.value=0},F=()=>{m.value=!1,p.value.unshift(l.value),l.value={usn:"",uname:"",uavatar:"/avatar/avatar0.png",ucredit:1},o.value=0},H=s=>{console.log(s),l.value.ucredit=s+1},M=()=>{l.value={usn:"",uname:"",uavatar:"/avatar/avatar0.png",ucredit:1},o.value=0},T=()=>{p.value=[],k()},j=()=>{if(g.value){let s=O.table_to_book(g.value);P(s,"user.xlsx")}else console.log("tbl is null")},k=()=>{S.get("https://glpla.github.io/utils/data/data2024/rank202401.json").then(s=>{p.value=[...p.value,...s.data.cont]})};return E(o,(s,i)=>{l.value.uavatar="/avatar/avatar"+s+".png"},{immediate:!0}),N(()=>{k(),console.log(window),c.value.onscroll=s=>{console.log(c.value.scrollTop,c.value.scrollHeight,c.value.offsetHeight),c.value.scrollTop/(c.value.scrollHeight-c.value.offsetHeight)>=.8&&k()}}),(s,i)=>(_(),v("div",Q,[t("div",{class:"btns-box"},[t("button",{class:"btn add-user-btn",onClick:I},[n("添加用户 "),W]),t("button",{class:"btn add-user-btn",onClick:T},[n("刷新数据 "),X]),t("button",{class:"btn add-user-btn",onClick:j},[n("导出Excel "),Y])]),t("div",{class:"tbl-box",ref_key:"tblBox",ref:c},[t("table",{ref_key:"tbl",ref:g},[Z,(_(!0),v(x,null,y(u(p),(a,d)=>(_(),v("tr",{key:a.id},[t("td",null,f(a.usn),1),t("td",null,f(a.uname),1),t("td",null,[t("span",tt,f(a.uavatar),1),t("img",{class:"img-avatar",src:"https://glpla.github.io/utils"+a.uavatar,alt:"user avatar"},null,8,at)]),t("td",null,f(a.ucredit),1),t("td",st,[t("button",{class:"btn edit-btn",onClick:h=>V(a.id),title:"edit by id"},nt,8,et),t("button",{class:"btn del-btn",onClick:h=>B(a.id),title:"delete by id"},ct,8,ot)])]))),128))],512)],512),u(m)?(_(),v("div",it,[t("form",{onSubmit:A(F,["prevent"])},[dt,t("div",rt,[t("div",vt,[_t,C(t("input",{type:"text",placeholder:"your sn",name:"usn",required:"","onUpdate:modelValue":i[0]||(i[0]=a=>u(l).usn=a)},null,512),[[w,u(l).usn]])]),t("div",pt,[ht,C(t("input",{type:"text",placeholder:"your name",name:"uname",required:"","onUpdate:modelValue":i[1]||(i[1]=a=>u(l).uname=a)},null,512),[[w,u(l).uname]])]),t("div",bt,[mt,t("div",ft,[(_(),v(x,null,y(10,(a,d)=>t("label",{class:U(["avatar-img",{active:u(o)==d}]),style:$({backgroundImage:"url(https://glpla.github.io/utils/avatar/avatar"+d+".png)"})},[C(t("input",{type:"radio",name:"uavatar",value:d,"onUpdate:modelValue":i[2]||(i[2]=h=>G(o)?o.value=h:o=h),hidden:""},null,8,gt),[[L,u(o)]])],6)),64))])]),t("div",kt,[xt,t("div",null,[(_(),v(x,null,y(10,(a,d)=>t("span",{class:U(["iconfont icon-favorites credit-icon",{active:d<u(l).ucredit}]),key:a,onClick:h=>H(d)},null,10,yt)),64))])]),t("div",{class:"btn-group"},[Ct,t("button",{class:"add",type:"button",onClick:M},[n("重写 "),wt]),t("button",{class:"cancle",type:"button",onClick:D},[n("取消 "),Ut])])])],32)])):R("",!0)]))}},Bt=q(St,[["__scopeId","data-v-1a84e450"]]);export{Bt as default};