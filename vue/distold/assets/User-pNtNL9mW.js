import{_ as E,r as c,o as R,v as j,c as v,d as t,g as o,f as N,w as G,T as L,e as n,x,y as V,F as y,m as C,h as H,z as J,A as K,a as p,q as B,t as g,n as T,B as O,i as P,p as Q,k as W}from"./index-DLiG_4_C.js";import{u as X,w as Y}from"./xlsx-ChWuxSKv.js";import{N as Z}from"./Notice-XSdsvMEW.js";const l=b=>(Q("data-v-e804aeef"),b=b(),W(),b),tt={class:"user"},st=l(()=>t("span",{class:"iconfont icon-customer-fill"},null,-1)),et=l(()=>t("span",{class:"iconfont icon-change"},null,-1)),at=l(()=>t("span",{class:"iconfont icon-excel-full"},null,-1)),lt=l(()=>t("tr",{class:"tbl-header"},[t("th",null,[o("学号"),t("br"),t("span",null,"usn")]),t("th",null,[o("昵称"),t("br"),t("span",null,"uname")]),t("th",null,[o("头像"),t("br"),t("span",null,"uavatar")]),t("th",null,[o("积分"),t("br"),t("span",null,"ucredit")]),t("th",null,[o("操作"),t("br"),t("span",null,"uoper")])],-1)),nt={hidden:""},ot=["src"],ut={class:"btn-group"},it=["onClick"],ct=l(()=>t("span",{class:"iconfont icon-edit"},null,-1)),rt=[ct],dt=["onClick"],_t=l(()=>t("span",{class:"iconfont icon-delete-fill"},null,-1)),vt=[_t],pt={key:0,class:"add-user-wrap"},ht=l(()=>t("h3",{class:"dia-title"},"add user",-1)),bt={class:"dia-cont"},ft={class:"add-item"},mt=l(()=>t("span",null,"学号",-1)),gt={class:"add-item"},kt=l(()=>t("span",null,"昵称",-1)),xt={class:"add-item"},yt=l(()=>t("span",null,"头像",-1)),Ct={class:"img-box"},wt=["value"],St={class:"add-item"},Ut=l(()=>t("span",null,"积分",-1)),It=["onClick"],Nt=l(()=>t("button",{class:"add",type:"submit"},[o("提交 "),t("span",{class:"iconfont icon-tick"})],-1)),Vt=l(()=>t("span",{class:"iconfont icon-close"},null,-1)),Bt={__name:"User",setup(b){let f=c(!1),w=c(""),D=c(null),k=c(null),_=c([]),m=c(!1),r=c(-1),e=c({usn:"",uname:"",uavatar:"",ucredit:0});const S=s=>{m.value=!0,s&&(e.value={...s})},F=s=>{console.log(s),_.value.splice(s,1)},M=()=>{m.value=!1,f.value=!1,I()},q=()=>{if(!e.value.usn){console.log("user sn is null"),i("学号不能为空");return}if(!e.value.uname){console.log("user name is null"),i("用户昵称不能为空");return}if(!e.value.uavatar){console.log("user avatar is null"),i("用户头像不能为空");return}if(!e.value.ucredit){console.log("user credit is null"),i("用户积分不能为空");return}m.value=!1,_.value.unshift(e.value),i("添加用户成功"),I()},z=s=>{console.log(s),e.value.ucredit=s+1},$=()=>{if(k.value){let s=X.table_to_book(k.value);Y(s,"user.xlsx"),i("导出成功")}else console.log("tbl is null"),i("导出失败")},U=()=>{K.get("https://glpla.github.io/utils/data/data2024/rank202401.json").then(s=>{_.value=[..._.value,...s.data.cont],i("数据加载完毕")})},A=()=>{_.value=[],U()};R(()=>{U()});const I=()=>{e.value={usn:"",uname:"",uavatar:"",ucredit:0},r.value=-1};j(r,(s,d)=>{e.value.uavatar="/avatar/avatar"+s+".png"},{immediate:!0});const i=s=>{f.value=!0,w.value=s,setTimeout(()=>{f.value=!1},3e3)};return(s,d)=>(p(),v("div",tt,[t("div",{class:"btns-box"},[t("button",{class:"btn add-user-btn",onClick:S},[o("添加 "),st]),t("button",{class:"btn add-user-btn btn1",onClick:A},[o("刷新 "),et]),t("button",{class:"btn add-user-btn btn2",onClick:$},[o("导出 "),at])]),t("div",{class:"tbl-box",ref_key:"tblBox",ref:D},[t("table",{ref_key:"tbl",ref:k},[lt,N(L,{appear:"",class:"lists","move-class":"tg-class"},{default:G(()=>[(p(!0),v(y,null,C(n(_),(a,u)=>(p(),v("tr",{key:a.id,style:B(`--delay: ${u}`)},[t("td",null,g(a.usn),1),t("td",null,g(a.uname),1),t("td",null,[t("span",nt,g(a.uavatar),1),t("img",{class:"img-avatar",src:"https://glpla.github.io/utils"+a.uavatar,alt:"user avatar"},null,8,ot)]),t("td",null,g(a.ucredit),1),t("td",ut,[t("button",{class:"btn edit-btn",onClick:h=>S(a)},rt,8,it),t("button",{class:"btn del-btn",onClick:h=>F(u)},vt,8,dt)])],4))),128))]),_:1})],512)],512),n(m)?(p(),v("div",pt,[t("form",{onSubmit:H(q,["prevent"])},[ht,t("div",bt,[t("div",ft,[mt,x(t("input",{type:"text",placeholder:"your sn",name:"usn","onUpdate:modelValue":d[0]||(d[0]=a=>n(e).usn=a),required:""},null,512),[[V,n(e).usn,void 0,{trim:!0}]])]),t("div",gt,[kt,x(t("input",{type:"text",placeholder:"your name",name:"uname","onUpdate:modelValue":d[1]||(d[1]=a=>n(e).uname=a),required:""},null,512),[[V,n(e).uname,void 0,{trim:!0}]])]),t("div",xt,[yt,t("div",Ct,[(p(),v(y,null,C(10,(a,u)=>t("label",{class:T(["avatar-img",{active:n(r)==u}]),style:B({backgroundImage:"url(https://glpla.github.io/utils/avatar/avatar"+u+".png)"})},[x(t("input",{type:"radio",name:"uavatar",value:u,"onUpdate:modelValue":d[2]||(d[2]=h=>P(r)?r.value=h:r=h),hidden:""},null,8,wt),[[O,n(r)]])],6)),64))])]),t("div",St,[Ut,t("div",null,[(p(),v(y,null,C(10,(a,u)=>t("span",{class:T(["iconfont icon-favorites credit-icon",{active:u<n(e).ucredit}]),key:a,onClick:h=>z(u)},null,10,It)),64))])]),t("div",{class:"btn-group"},[Nt,t("button",{class:"cancle",type:"button",onClick:M},[o("取消 "),Vt])])])],32)])):J("",!0),N(Z,{flag:n(f),tips:n(w)},null,8,["flag","tips"])]))}},Mt=E(Bt,[["__scopeId","data-v-e804aeef"]]);export{Mt as default};