import{_ as R,m as $,r,o as q,q as M,c as p,d as l,k as c,F as x,e as C,u as i,s as w,v as V,x as L,y as O,i as G,j as J,b as _,t as k,n as T,f as K,z as P,A as Q,p as W,l as X}from"./index-C6zddt7Q.js";import{u as Y,w as Z}from"./xlsx-ChWuxSKv.js";const n=m=>(W("data-v-fe14171c"),m=m(),X(),m),ll={class:"user"},el={class:"btns-box"},sl=n(()=>l("span",{class:"iconfont icon-customer-fill"},null,-1)),tl=n(()=>l("span",{class:"iconfont icon-change"},null,-1)),al=n(()=>l("span",{class:"iconfont icon-excel-full"},null,-1)),ol=n(()=>l("tr",{class:"tbl-header"},[l("th",null,[c("学号"),l("br"),l("span",null,"usn")]),l("th",null,[c("姓名"),l("br"),l("span",null,"uname")]),l("th",null,[c("头像"),l("br"),l("span",null,"uavatar")]),l("th",null,[c("积分"),l("br"),l("span",null,"ucredit")]),l("th",null,[c("操作"),l("br"),l("span",null,"uoper")])],-1)),nl={hidden:""},ul=["src"],il={class:"btn-group"},cl=["onClick"],rl=n(()=>l("span",{class:"iconfont icon-edit"},null,-1)),dl=[rl],vl=["onClick"],pl=n(()=>l("span",{class:"iconfont icon-delete-fill"},null,-1)),_l=[pl],fl={key:0,class:"add-user-wrap"},hl=n(()=>l("h3",{class:"dia-title"},"add user",-1)),bl={class:"dia-cont"},ml={class:"add-item"},gl=n(()=>l("span",null,"学号",-1)),kl={class:"add-item"},yl=n(()=>l("span",null,"姓名",-1)),xl={class:"add-item"},Cl=n(()=>l("span",null,"头像",-1)),wl={class:"img-box"},Sl=["value"],Ul={class:"add-item"},Il=n(()=>l("span",null,"积分",-1)),Ml=["onClick"],Vl=n(()=>l("button",{class:"add",type:"submit"},[c("提交 "),l("span",{class:"iconfont icon-tick"})],-1)),Tl=n(()=>l("span",{class:"iconfont icon-close"},null,-1)),Bl={__name:"User",setup(m){const B=$("axios");let f=r(null),y=r(null),h=r([]),g=r(!1),v=r(-1),a=r(!1),t=r({usn:"",uname:"",uavatar:"",ucredit:0}),o=r(null),D=r(0);const S=e=>{g.value=!0,e&&(t.value={...e})},F=e=>{console.log(e),h.value.splice(e,1)},N=()=>{g.value=!1,a.value=!1,I()},j=()=>{if(!t.value.usn){console.log("user sn is null"),console.log(a.value),a.value=!0,o.value&&(o.value.tips="user sn is null",console.log(o.value.tips));return}if(!t.value.uname){console.log("user name is null"),console.log(a.value),a.value=!0,o.value&&(o.value.tips="user name is null",console.log(o.value.tips));return}if(!t.value.uavatar){console.log("user avatar is null"),console.log(a.value),a.value=!0,o.value&&(o.value.tips="user avatar is null",console.log(o.value.tips));return}if(!t.value.ucredit){console.log("user credit is null"),a.value=!0,o.value&&(o.value.tips="user credit is null",console.log(o.value.tips));return}g.value=!1,a.value=!1,h.value.unshift(t.value),I()},z=e=>{console.log(e),t.value.ucredit=e+1},E=()=>{if(y.value){let e=Y.table_to_book(y.value);Z(e,"user.xlsx")}else console.log("tbl is null")},U=()=>{B.get("https://glpla.github.io/utils/data/data2024/rank202401.json").then(e=>{h.value=[...h.value,...e.data.cont]})};q(()=>{U(),f.value.onscroll=e=>{f.value.scrollTop/(f.value.scrollHeight-f.value.offsetHeight)>=.8&&U()}});const I=()=>{t.value={usn:"",uname:"",uavatar:"",ucredit:0},v.value=-1,D.value=0},A=()=>a.value=!1;return M(v,(e,u)=>{t.value.uavatar="/avatar/avatar"+e+".png"},{immediate:!0}),M(a,(e,u)=>{e&&setTimeout(()=>{a.value=!1},3e3)}),(e,u)=>{const H=J("Tips");return _(),p("div",ll,[l("div",el,[l("button",{class:"btn add-user-btn",onClick:S},[c("添加 "),sl]),l("button",{class:"btn add-user-btn btn1",onClick:u[0]||(u[0]=(...s)=>e.reloadData&&e.reloadData(...s))},[c("刷新 "),tl]),l("button",{class:"btn add-user-btn btn2",onClick:E},[c("导出 "),al])]),l("div",{class:"tbl-box",ref_key:"tblBox",ref:f},[l("table",{ref_key:"tbl",ref:y},[ol,(_(!0),p(x,null,C(i(h),(s,d)=>(_(),p("tr",{key:s.id},[l("td",null,k(s.usn),1),l("td",null,k(s.uname),1),l("td",null,[l("span",nl,k(s.uavatar),1),l("img",{class:"img-avatar",src:"https://glpla.github.io/utils"+s.uavatar,alt:"user avatar"},null,8,ul)]),l("td",null,k(s.ucredit),1),l("td",il,[l("button",{class:"btn edit-btn",onClick:b=>S(s)},dl,8,cl),l("button",{class:"btn del-btn",onClick:b=>F(d)},_l,8,vl)])]))),128))],512)],512),i(g)?(_(),p("div",fl,[l("form",{onSubmit:L(j,["prevent"])},[hl,l("div",bl,[l("div",ml,[gl,w(l("input",{type:"text",placeholder:"your sn",name:"usn","onUpdate:modelValue":u[1]||(u[1]=s=>i(t).usn=s)},null,512),[[V,i(t).usn,void 0,{trim:!0}]])]),l("div",kl,[yl,w(l("input",{type:"text",placeholder:"your name",name:"uname","onUpdate:modelValue":u[2]||(u[2]=s=>i(t).uname=s)},null,512),[[V,i(t).uname,void 0,{trim:!0}]])]),l("div",xl,[Cl,l("div",wl,[(_(),p(x,null,C(10,(s,d)=>l("label",{class:T(["avatar-img",{active:i(v)==d}]),style:K({backgroundImage:"url(https://glpla.github.io/utils/avatar/avatar"+d+".png)"})},[w(l("input",{type:"radio",name:"uavatar",value:d,"onUpdate:modelValue":u[3]||(u[3]=b=>Q(v)?v.value=b:v=b),hidden:""},null,8,Sl),[[P,i(v)]])],6)),64))])]),l("div",Ul,[Il,l("div",null,[(_(),p(x,null,C(10,(s,d)=>l("span",{class:T(["iconfont icon-favorites credit-icon",{active:d<i(t).ucredit}]),key:s,onClick:b=>z(d)},null,10,Ml)),64))])]),l("div",{class:"btn-group"},[Vl,l("button",{class:"cancle",type:"button",onClick:N},[c("取消 "),Tl])])])],32)])):O("",!0),G(H,{ref_key:"modal",ref:o,show:i(a),onEmitModal:A},null,8,["show"])])}}},Nl=R(Bl,[["__scopeId","data-v-fe14171c"]]);export{Nl as default};