import{l as n,r as s}from"./index-C0kaU_JG.js";import{c as d}from"./api-CvFuAddq.js";const v=n("cart",()=>{const e=s(!1),t=s([]),r=s("");return{isLoading:e,cart:t,msg:r,addToCart:a=>{const o=t.value.find(c=>c.id===a.id);o?o.quantity++:t.value.push({...a,quantity:1}),r.value="Product added to cart"},fetchCart:async()=>{e.value=!0;let a=await d();t.value=a.data,e.value=!1,r.value="Cart fetched"}}});export{v as u};