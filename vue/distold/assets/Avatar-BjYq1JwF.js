import{_ as h,f as l,o as v,c as k,b as s,j as y,i as p,N as x,C as d}from"./index-4NOsK6IO.js";const N={class:"avatar"},b={class:"avatar-box"},C=["src"],I={__name:"Avatar",props:{user:{type:Object,default:()=>({})}},setup(c){let o=l(!1),n=l("");const r=c;let i=l(null);const f=()=>{i.value.click()},m=e=>{console.log(e.target.files[0]);let t=e.target.files[0];g(t)},g=e=>{let t=new FormData;t.append("image",e),d.post("/api/uploadimg",t,{headers:{"Content-Type":"multipart/form-data"}}).then(a=>{console.log("then",a),_({usn:r.user.usn,ukey:"imgUrl",uvalue:a.data.data.url}),r.user.imgUrl=a.data.data.url}).catch(a=>{console.log("err",a)})},_=e=>{d.post("/user/modify",e).then(t=>{console.log("then",t),u("修改成功")}).catch(t=>{console.log("err",t),u("修改失败")})},u=e=>{o.value=!0,n.value=e,setTimeout(()=>{o.value=!1},3e3)};return(e,t)=>(v(),k("div",N,[s("div",b,[s("img",{src:c.user.imgUrl,alt:""},null,8,C),s("input",{type:"file",name:"image",ref_key:"ipt",ref:i,accept:"image/*",hidden:"",onChange:m},null,544),s("div",{class:"avatar-btn",onClick:f},"上传头像")]),y(x,{flag:p(o),tips:p(n)},null,8,["flag","tips"])]))}},w=h(I,[["__scopeId","data-v-fe9399c3"]]);export{w as default};