import{r as m,u,w as g}from"./xlsx-ChWuxSKv.js";import{_ as h,r as _,c as s,d as e,F as y,e as w,u as S,b as r,t as o}from"./index-lUHXOrYZ.js";const B={class:"order"},E={class:"btn-box"},F={__name:"Order",setup(C){let n=_([]),a=_(null);const f=()=>{a.value.click()},p=l=>{const c=l.target.files[0],t=new FileReader;t.readAsArrayBuffer(c),t.onload=v=>{const k=v.target.result,i=m(k,{type:"binary"}),x=i.SheetNames[0],d=u.sheet_to_json(i.Sheets[x]);console.log(d),n.value=d}},b=()=>{if(tbl.value){let l=u.table_to_book(tbl.value);g(l,"order.xlsx")}else console.log("tbl is null")};return(l,c)=>(r(),s("div",B,[e("div",E,[e("button",{onClick:f},"导入 - excel"),e("input",{type:"file",onChange:p,ref_key:"ipt",ref:a,hidden:""},null,544),e("button",{onClick:b},"导出 - excel")]),(r(!0),s(y,null,w(S(n),t=>(r(),s("div",{class:"item",key:l.index},[e("div",null,o(t.name),1),e("div",null,o(t.cell),1),e("div",null,o(t.gender),1),e("div",null,o(t.grade),1),e("div",null,o(t.major),1)]))),128))]))}},A=h(F,[["__scopeId","data-v-8c58c20f"]]);export{A as default};