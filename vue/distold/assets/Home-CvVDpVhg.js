import{_ as b,f,g as y,o as u,c as m,u as C,h as M,b as e,i as p,j as s,k as r,d as i,l as k,n as w,m as x,p as j,q as B,s as T,x as V,F as $,e as I,t as S,y as L,z}from"./index-4NOsK6IO.js";const A={__name:"Map",setup(h){let n=f(null),o=f(null);const l=f(""),d=f("");window.initMap=()=>{console.log("init map","123");let t=new TMap.LatLng(d.value,l.value);o.value=new TMap.Map(n.value,{center:t,zoom:17.2,viewMode:"2D",showControl:!1}),g(t)};const g=t=>{new TMap.MultiMarker({position:t,map:o.value,styles:{marker:new TMap.MarkerStyle({width:20,height:30,anchor:{x:10,y:30}})},geometries:[{position:t,id:"marker"}]})},_=()=>{console.log("load script","123");let t=document.createElement("script");t.type="text/javascript",t.src="https://map.qq.com/api/gljs?v=1.exp&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&callback=initMap",document.body.appendChild(t)},a=t=>{console.log(`Latitude: ${t.coords.latitude}, Longitude: ${t.coords.longitude}`),l.value=t.coords.longitude,d.value=t.coords.latitude,_()},v=t=>{console.error(`Error code: ${t.code}. Message: ${t.message}`)};return y(()=>{navigator.geolocation.getCurrentPosition(a,v)}),(t,pe)=>(u(),m("div",{class:"map",ref_key:"map",ref:n},null,512))}},D=b(A,[["__scopeId","data-v-9c5b463c"]]),c=h=>(B("data-v-a870fa28"),h=h(),T(),h),E={class:"aside"},H={class:"logo"},P=["src"],R=c(()=>e("div",{class:"title"},"大树 · 桂林 · 中国",-1)),W=c(()=>e("span",{class:"iconfont icon-customer-fill"},null,-1)),q=c(()=>e("span",{class:"iconfont icon-all-fill"},null,-1)),F=c(()=>e("span",{class:"iconfont icon-cart-full-fill"},null,-1)),N=c(()=>e("span",{class:"iconfont icon-order-fill"},null,-1)),O=c(()=>e("span",{class:"iconfont icon-shuju"},null,-1)),U=c(()=>e("span",{class:"iconfont icon-message-comments-fill"},null,-1)),J=c(()=>e("span",{class:"iconfont icon-layers-fill"},null,-1)),Z=c(()=>e("span",{class:"iconfont icon-settings-fill"},null,-1)),G=c(()=>e("span",{class:"iconfont icon-fuwu"},null,-1)),K=c(()=>e("span",{class:"iconfont icon-info-fill"},null,-1)),Q=c(()=>e("span",{class:"iconfont icon-logout"},null,-1)),X={__name:"Aside",setup(h){let n=f("/imgs/avatar.jpg"),o=f(!1);const l=C(),d=()=>{j.replace("/"),localStorage.removeItem("token")};return(g,_)=>{const a=M("router-link");return u(),m("div",E,[e("div",H,[e("img",{src:p(n),alt:""},null,8,P)]),e("div",{class:"iconfont icon-thlist ham",onClick:_[0]||(_[0]=v=>p(l).switchFlag())}),R,e("nav",{class:w(["main-nav",{active:p(l).flag}])},[s(a,{class:"nav-item",to:"/home/user"},{default:r(()=>[W,i(" User")]),_:1}),s(a,{class:"nav-item",to:"/home/good"},{default:r(()=>[q,i(" Good")]),_:1}),s(a,{class:"nav-item",to:"/home/cart"},{default:r(()=>[F,i(" Cart")]),_:1}),s(a,{class:"nav-item",to:"/home/order"},{default:r(()=>[N,i(" Order")]),_:1}),s(a,{class:"nav-item",to:"/home/charts"},{default:r(()=>[O,i(" Charts")]),_:1}),s(a,{class:"nav-item",to:"/home/message"},{default:r(()=>[U,i(" Meassage")]),_:1}),s(a,{class:"nav-item",to:"/home/todo"},{default:r(()=>[J,i(" Todo")]),_:1}),s(a,{class:"nav-item",to:"/home/setup"},{default:r(()=>[Z,i(" Setup")]),_:1}),s(a,{class:"nav-item",to:"/home/admin"},{default:r(()=>[G,i(" Admin")]),_:1}),s(a,{class:"nav-item",to:"/home/about"},{default:r(()=>[K,i(" About")]),_:1}),e("a",{class:"nav-item",onClick:k(d,["prevent"])},[Q,i(" Logout")])],2),e("div",{class:w(["map-box",{active:p(o)}]),onClick:_[2]||(_[2]=v=>x(o)?o.value=!0:o=!0)},[s(D),e("div",{class:"close-btn",onClick:_[1]||(_[1]=k(v=>x(o)?o.value=!1:o=!1,["stop"]))},"×")],2)])}}},Y=b(X,[["__scopeId","data-v-a870fa28"]]),ee={class:"dot-box"},te={__name:"HomeSwiper",setup(h){let n=f(0),o=["https://cdn.pixabay.com/photo/2018/05/28/22/11/message-in-a-bottle-3437294_640.jpg","https://cdn.pixabay.com/photo/2016/05/07/16/52/sea-1377712_640.jpg","https://cdn.pixabay.com/photo/2019/10/30/16/22/message-4589929_640.jpg","https://cdn.pixabay.com/photo/2020/06/20/19/20/message-in-a-bottle-5322111_640.jpg","https://cdn.pixabay.com/photo/2022/09/15/13/59/message-in-a-bottle-7456502_640.jpg","https://cdn.pixabay.com/photo/2020/06/20/19/20/message-in-a-bottle-5322110_640.jpg"],l;const d=()=>{n.value++,n.value=n.value%o.length};return y(()=>{l=setInterval(()=>{d()},3e3)}),V(()=>{clearInterval(l)}),(g,_)=>(u(),m("div",{class:"home-swiper",style:L({backgroundImage:"url("+p(o)[p(n)]+")"})},[e("div",ee,[(u(!0),m($,null,I(p(o).length,(a,v)=>(u(),m("div",{class:w(["dot",{active:v==p(n)}]),key:a},S(v+1),3))),128))])],4))}},oe=b(te,[["__scopeId","data-v-bba331f5"]]),se={class:"bread"},ae=["to"],ne={__name:"Bread",setup(h){const n=z();return(o,l)=>(u(),m("div",se,[(u(!0),m($,null,I(p(n).matched,(d,g)=>(u(),m("div",{key:g,to:d.path},S(d.name)+"/",9,ae))),128))]))}},ce=b(ne,[["__scopeId","data-v-6deb1e26"]]),le={class:"home"},ie={class:"main"},re={class:"header"},de={class:"cont"},_e={__name:"Home",setup(h){return(n,o)=>{const l=M("RouterView");return u(),m("div",le,[s(Y),e("div",ie,[e("header",re,[s(oe)]),s(ce),e("div",de,[s(l)])])])}}},me=b(_e,[["__scopeId","data-v-ae9d7c34"]]);export{me as default};