import{_ as c,x as u,o as _,m as r,c as h,d as e,e as s,f as p,h as m,a as v,p as g,k as x}from"./index-C0kaU_JG.js";import{R as f}from"./RichEditor-B1Wb6gOM.js";import{u as y}from"./goods-CnIc8SPH.js";import"./api-CvFuAddq.js";const t=d=>(g("data-v-6e599bfa"),d=d(),x(),d),b={class:"admin-good"},q={class:"item"},S=t(()=>e("div",null,"id",-1)),k=["value"],I={class:"item"},B=t(()=>e("div",null,"名称",-1)),G=["value"],R={class:"item"},w=t(()=>e("div",null,"简介",-1)),A=["value"],D={class:"item"},E=t(()=>e("div",null,"风味",-1)),H=["value"],M={class:"item"},N=t(()=>e("div",null,"价格",-1)),V=["value"],F={class:"item"},j=t(()=>e("div",null,"折扣",-1)),z=["value"],C={class:"item"},J=t(()=>e("div",null,"库存",-1)),K=["value"],L={class:"item"},O=t(()=>e("div",null,"地址",-1)),P=["value"],Q={class:"item"},T=t(()=>e("div",null,"电话",-1)),U=["value"],W={class:"item"},X=t(()=>e("div",null,"营业",-1)),Y=["value"],Z={class:"item"},$=t(()=>e("div",null,"详情",-1)),ee=t(()=>e("div",{class:"btn-group"},[e("button",{type:"submit"},"提交"),e("button",{type:"reset"},"重填"),e("button",null,"取消")],-1)),oe={__name:"AdminGoodDetail",setup(d){const i=u(),o=y(),n=l=>{console.log("good",l.target)};_(()=>{o.fetchGoodById(i.params.id),console.log("good",o.good)});const a=r(()=>o.good);return console.log("good 123",a.value),(l,te)=>(v(),h("div",b,[e("form",{onSubmit:m(n,["prevent"])},[e("div",q,[S,e("input",{type:"text",name:"id",value:s(o).good.id,disabled:""},null,8,k)]),e("div",I,[B,e("input",{type:"text",name:"uname",maxlength:"20",required:"",value:s(o).good.name,placeholder:"good name, 20 chars"},null,8,G)]),e("div",R,[w,e("input",{type:"text",name:"udesc",maxlength:"60",required:"",value:s(o).good.desc,placeholder:"good desc, 60 chars"},null,8,A)]),e("div",D,[E,e("input",{type:"text",name:"uflavour",maxlength:"6",required:"",value:s(o).good.flavour,placeholder:"good flavour, 6 chars"},null,8,H)]),e("div",M,[N,e("input",{type:"text",name:"uprice",maxlength:"3",required:"",value:s(o).good.price,placeholder:"good price"},null,8,V)]),e("div",F,[j,e("input",{type:"text",name:"udiscount",maxlength:"1",required:"",value:s(o).good.discount,placeholder:"good discount, 1 - 9"},null,8,z)]),e("div",C,[J,e("input",{type:"text",name:"udiscount",maxlength:"3",required:"",value:s(o).good.stock,placeholder:"good stock"},null,8,K)]),e("div",L,[O,e("input",{type:"text",name:"uaddress",maxlength:"30",required:"",value:s(o).good.address,placeholder:"good address, 30 chars"},null,8,P)]),e("div",Q,[T,e("input",{type:"text",name:"ucell",maxlength:"11",required:"",value:s(o).good.phone,placeholder:"good cellphone, 11 chars"},null,8,U)]),e("div",W,[X,e("input",{type:"text",name:"uopen",maxlength:"20",required:"",value:s(o).good.businessHours,placeholder:"good businessHours, 20 chars"},null,8,Y)]),e("div",Z,[$,p(f,{class:"rich-editor"})]),ee],32)]))}},ne=c(oe,[["__scopeId","data-v-6e599bfa"]]);export{ne as default};