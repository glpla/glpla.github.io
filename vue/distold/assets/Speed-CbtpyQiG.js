import{_ as ne,r as le,o as oe,a as se,c as ve,d as ge}from"./index-C0kaU_JG.js";import{_ as Q,ab as ue,aS as ce,g as he,A as x,bn as X,Q as de,Z as F,D as J,O as Y,l as $,bo as q,$ as j,b1 as fe,a5 as me,aa as I,a9 as ee,z as te,G as ae,a8 as ye,au as pe,a4 as we,a as Se,J as Ae,T as re,W as be,U as Me,N as _e,ae as Pe,af as xe}from"./installCanvasRenderer-CioQ-8se.js";import{S as ie}from"./sausage-ropfwOpW.js";import{c as ke}from"./createSeriesDataSimply-BcVC4w9g.js";var Ce=function(){function p(){this.angle=0,this.width=10,this.r=10,this.x=0,this.y=0}return p}(),Ee=function(p){Q(i,p);function i(e){var r=p.call(this,e)||this;return r.type="pointer",r}return i.prototype.getDefaultShape=function(){return new Ce},i.prototype.buildPath=function(e,r){var f=Math.cos,s=Math.sin,t=r.r,c=r.width,o=r.angle,_=r.x-f(o)*c*(c>=t/3?1:2),m=r.y-s(o)*c*(c>=t/3?1:2);o=r.angle-Math.PI/2,e.moveTo(_,m),e.lineTo(r.x+f(o)*c,r.y+s(o)*c),e.lineTo(r.x+f(r.angle)*t,r.y+s(r.angle)*t),e.lineTo(r.x-f(o)*c,r.y-s(o)*c),e.lineTo(_,m)},i}(ue);function De(p,i){var e=p.get("center"),r=i.getWidth(),f=i.getHeight(),s=Math.min(r,f),t=x(e[0],i.getWidth()),c=x(e[1],i.getHeight()),o=x(p.get("radius"),s/2);return{cx:t,cy:c,r:o}}function K(p,i){var e=p==null?"":p+"";return i&&(Se(i)?e=i.replace("{value}",e):Ae(i)&&(e=i(p))),e}var Le=function(p){Q(i,p);function i(){var e=p!==null&&p.apply(this,arguments)||this;return e.type=i.type,e}return i.prototype.render=function(e,r,f){this.group.removeAll();var s=e.get(["axisLine","lineStyle","color"]),t=De(e,f);this._renderMain(e,r,f,s,t),this._data=e.getData()},i.prototype.dispose=function(){},i.prototype._renderMain=function(e,r,f,s,t){var c=this.group,o=e.get("clockwise"),_=-e.get("startAngle")/180*Math.PI,m=-e.get("endAngle")/180*Math.PI,E=e.getModel("axisLine"),V=E.get("roundCap"),N=V?ie:re,y=E.get("show"),O=E.getModel("lineStyle"),D=O.get("width"),h=[_,m];ce(h,!o),_=h[0],m=h[1];for(var n=m-_,A=_,P=[],L=0;y&&L<s.length;L++){var k=Math.min(Math.max(s[L][0],0),1);m=_+n*k;var C=new N({shape:{startAngle:A,endAngle:m,cx:t.cx,cy:t.cy,clockwise:o,r0:t.r-D,r:t.r},silent:!0});C.setStyle({fill:s[L][1]}),C.setStyle(O.getLineStyle(["color","width"])),P.push(C),A=m}P.reverse(),he(P,function(T){return c.add(T)});var M=function(T){if(T<=0)return s[0][1];var a;for(a=0;a<s.length;a++)if(s[a][0]>=T&&(a===0?0:s[a-1][0])<T)return s[a][1];return s[a-1][1]};this._renderTicks(e,r,f,M,t,_,m,o,D),this._renderTitleAndDetail(e,r,f,M,t),this._renderAnchor(e,t),this._renderPointer(e,r,f,M,t,_,m,o,D)},i.prototype._renderTicks=function(e,r,f,s,t,c,o,_,m){for(var E=this.group,V=t.cx,N=t.cy,y=t.r,O=+e.get("min"),D=+e.get("max"),h=e.getModel("splitLine"),n=e.getModel("axisTick"),A=e.getModel("axisLabel"),P=e.get("splitNumber"),L=n.get("splitNumber"),k=x(h.get("length"),y),C=x(n.get("length"),y),M=c,T=(o-c)/P,a=T/L,d=h.getModel("lineStyle").getLineStyle(),S=n.getModel("lineStyle").getLineStyle(),w=h.get("distance"),v,g,l=0;l<=P;l++){if(v=Math.cos(M),g=Math.sin(M),h.get("show")){var u=w?w+m:m,b=new X({shape:{x1:v*(y-u)+V,y1:g*(y-u)+N,x2:v*(y-k-u)+V,y2:g*(y-k-u)+N},style:d,silent:!0});d.stroke==="auto"&&b.setStyle({stroke:s(l/P)}),E.add(b)}if(A.get("show")){var u=A.get("distance")+w,G=K(de(l/P*(D-O)+O),A.get("formatter")),z=s(l/P),W=v*(y-k-u)+V,R=g*(y-k-u)+N,Z=A.get("rotate"),B=0;Z==="radial"?(B=-M+2*Math.PI,B>Math.PI/2&&(B+=Math.PI)):Z==="tangential"?B=-M-Math.PI/2:be(Z)&&(B=Z*Math.PI/180),B===0?E.add(new F({style:J(A,{text:G,x:W,y:R,verticalAlign:g<-.8?"top":g>.8?"bottom":"middle",align:v<-.4?"left":v>.4?"right":"center"},{inheritColor:z}),silent:!0})):E.add(new F({style:J(A,{text:G,x:W,y:R,verticalAlign:"middle",align:"center"},{inheritColor:z}),silent:!0,originX:W,originY:R,rotation:B}))}if(n.get("show")&&l!==P){var u=n.get("distance");u=u?u+m:m;for(var H=0;H<=L;H++){v=Math.cos(M),g=Math.sin(M);var U=new X({shape:{x1:v*(y-u)+V,y1:g*(y-u)+N,x2:v*(y-C-u)+V,y2:g*(y-C-u)+N},silent:!0,style:S});S.stroke==="auto"&&U.setStyle({stroke:s((l+H/L)/P)}),E.add(U),M+=a}M-=a}else M+=T}},i.prototype._renderPointer=function(e,r,f,s,t,c,o,_,m){var E=this.group,V=this._data,N=this._progressEls,y=[],O=e.get(["pointer","show"]),D=e.getModel("progress"),h=D.get("show"),n=e.getData(),A=n.mapDimension("value"),P=+e.get("min"),L=+e.get("max"),k=[P,L],C=[c,o];function M(a,d){var S=n.getItemModel(a),w=S.getModel("pointer"),v=x(w.get("width"),t.r),g=x(w.get("length"),t.r),l=e.get(["pointer","icon"]),u=w.get("offsetCenter"),b=x(u[0],t.r),G=x(u[1],t.r),z=w.get("keepAspect"),W;return l?W=te(l,b-v/2,G-g,v,g,null,z):W=new Ee({shape:{angle:-Math.PI/2,width:v,r:g,x:b,y:G}}),W.rotation=-(d+Math.PI/2),W.x=t.cx,W.y=t.cy,W}function T(a,d){var S=D.get("roundCap"),w=S?ie:re,v=D.get("overlap"),g=v?D.get("width"):m/n.count(),l=v?t.r-g:t.r-(a+1)*g,u=v?t.r:t.r-a*g,b=new w({shape:{startAngle:c,endAngle:d,cx:t.cx,cy:t.cy,clockwise:_,r0:l,r:u}});return v&&(b.z2=L-n.get(A,a)%L),b}(h||O)&&(n.diff(V).add(function(a){var d=n.get(A,a);if(O){var S=M(a,c);Y(S,{rotation:-((isNaN(+d)?C[0]:$(d,k,C,!0))+Math.PI/2)},e),E.add(S),n.setItemGraphicEl(a,S)}if(h){var w=T(a,c),v=D.get("clip");Y(w,{shape:{endAngle:$(d,k,C,v)}},e),E.add(w),q(e.seriesIndex,n.dataType,a,w),y[a]=w}}).update(function(a,d){var S=n.get(A,a);if(O){var w=V.getItemGraphicEl(d),v=w?w.rotation:c,g=M(a,v);g.rotation=v,j(g,{rotation:-((isNaN(+S)?C[0]:$(S,k,C,!0))+Math.PI/2)},e),E.add(g),n.setItemGraphicEl(a,g)}if(h){var l=N[d],u=l?l.shape.endAngle:c,b=T(a,u),G=D.get("clip");j(b,{shape:{endAngle:$(S,k,C,G)}},e),E.add(b),q(e.seriesIndex,n.dataType,a,b),y[a]=b}}).execute(),n.each(function(a){var d=n.getItemModel(a),S=d.getModel("emphasis"),w=S.get("focus"),v=S.get("blurScope"),g=S.get("disabled");if(O){var l=n.getItemGraphicEl(a),u=n.getItemVisual(a,"style"),b=u.fill;if(l instanceof fe){var G=l.style;l.useStyle(me({image:G.image,x:G.x,y:G.y,width:G.width,height:G.height},u))}else l.useStyle(u),l.type!=="pointer"&&l.setColor(b);l.setStyle(d.getModel(["pointer","itemStyle"]).getItemStyle()),l.style.fill==="auto"&&l.setStyle("fill",s($(n.get(A,a),k,[0,1],!0))),l.z2EmphasisLift=0,I(l,d),ee(l,w,v,g)}if(h){var z=y[a];z.useStyle(n.getItemVisual(a,"style")),z.setStyle(d.getModel(["progress","itemStyle"]).getItemStyle()),z.z2EmphasisLift=0,I(z,d),ee(z,w,v,g)}}),this._progressEls=y)},i.prototype._renderAnchor=function(e,r){var f=e.getModel("anchor"),s=f.get("show");if(s){var t=f.get("size"),c=f.get("icon"),o=f.get("offsetCenter"),_=f.get("keepAspect"),m=te(c,r.cx-t/2+x(o[0],r.r),r.cy-t/2+x(o[1],r.r),t,t,null,_);m.z2=f.get("showAbove")?1:0,m.setStyle(f.getModel("itemStyle").getItemStyle()),this.group.add(m)}},i.prototype._renderTitleAndDetail=function(e,r,f,s,t){var c=this,o=e.getData(),_=o.mapDimension("value"),m=+e.get("min"),E=+e.get("max"),V=new ae,N=[],y=[],O=e.isAnimationEnabled(),D=e.get(["pointer","showAbove"]);o.diff(this._data).add(function(h){N[h]=new F({silent:!0}),y[h]=new F({silent:!0})}).update(function(h,n){N[h]=c._titleEls[n],y[h]=c._detailEls[n]}).execute(),o.each(function(h){var n=o.getItemModel(h),A=o.get(_,h),P=new ae,L=s($(A,[m,E],[0,1],!0)),k=n.getModel("title");if(k.get("show")){var C=k.get("offsetCenter"),M=t.cx+x(C[0],t.r),T=t.cy+x(C[1],t.r),a=N[h];a.attr({z2:D?0:2,style:J(k,{x:M,y:T,text:o.getName(h),align:"center",verticalAlign:"middle"},{inheritColor:L})}),P.add(a)}var d=n.getModel("detail");if(d.get("show")){var S=d.get("offsetCenter"),w=t.cx+x(S[0],t.r),v=t.cy+x(S[1],t.r),g=x(d.get("width"),t.r),l=x(d.get("height"),t.r),u=e.get(["progress","show"])?o.getItemVisual(h,"style").fill:L,a=y[h],b=d.get("formatter");a.attr({z2:D?0:2,style:J(d,{x:w,y:v,text:K(A,b),width:isNaN(g)?null:g,height:isNaN(l)?null:l,align:"center",verticalAlign:"middle"},{inheritColor:u})}),ye(a,{normal:d},A,function(z){return K(z,b)}),O&&pe(a,h,o,e,{getFormattedLabel:function(z,W,R,Z,B,H){return K(H?H.interpolatedValue:A,b)}}),P.add(a)}V.add(P)}),this.group.add(V),this._titleEls=N,this._detailEls=y},i.type="gauge",i}(we);const Ne=Le;var Ve=function(p){Q(i,p);function i(){var e=p!==null&&p.apply(this,arguments)||this;return e.type=i.type,e.visualStyleAccessPath="itemStyle",e}return i.prototype.getInitialData=function(e,r){return ke(this,["value"])},i.type="series.gauge",i.defaultOption={z:2,colorBy:"data",center:["50%","50%"],legendHoverLink:!0,radius:"75%",startAngle:225,endAngle:-45,clockwise:!0,min:0,max:100,splitNumber:10,axisLine:{show:!0,roundCap:!1,lineStyle:{color:[[1,"#E6EBF8"]],width:10}},progress:{show:!1,overlap:!0,width:10,roundCap:!1,clip:!0},splitLine:{show:!0,length:10,distance:10,lineStyle:{color:"#63677A",width:3,type:"solid"}},axisTick:{show:!0,splitNumber:5,length:6,distance:10,lineStyle:{color:"#63677A",width:1,type:"solid"}},axisLabel:{show:!0,distance:15,color:"#464646",fontSize:12,rotate:0},pointer:{icon:null,offsetCenter:[0,0],show:!0,showAbove:!0,length:"60%",width:6,keepAspect:!1},anchor:{show:!1,showAbove:!1,size:6,icon:"circle",offsetCenter:[0,0],keepAspect:!1,itemStyle:{color:"#fff",borderWidth:0,borderColor:"#5470c6"}},title:{show:!0,offsetCenter:[0,"20%"],color:"#464646",fontSize:16,valueAnimation:!1},detail:{show:!0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0,borderColor:"#ccc",width:100,height:null,padding:[5,10],offsetCenter:[0,"40%"],color:"#464646",fontSize:30,fontWeight:"bold",lineHeight:30,valueAnimation:!1}},i}(Me);const Te=Ve;function Ge(p){p.registerChartView(Ne),p.registerSeriesModel(Te)}const ze={class:"speed"},Oe={__name:"Speed",setup(p){let i=le(null);_e([Ge,xe]);let e;return e={series:[{type:"gauge",axisLine:{lineStyle:{width:30,color:[[.3,"#67e0e3"],[.7,"#37a2da"],[1,"#fd666d"]]}},pointer:{itemStyle:{color:"auto"}},axisTick:{distance:-30,length:8,lineStyle:{color:"#fff",width:2}},splitLine:{distance:-30,length:30,lineStyle:{color:"#fff",width:4}},axisLabel:{color:"inherit",distance:40,fontSize:20},detail:{valueAnimation:!0,formatter:"{value} km/h",color:"inherit"},data:[{value:70}]}]},oe(()=>{let r=Pe(i.value);setInterval(function(){r.setOption({series:[{data:[{value:+(Math.random()*100).toFixed(2)}]}]})},2e3),e&&r.setOption(e)}),(r,f)=>(se(),ve("div",ze,[ge("div",{class:"chart",ref_key:"main",ref:i},null,512)]))}},Ze=ne(Oe,[["__scopeId","data-v-5a03942d"]]);export{Ze as default};