import{A as K,j as L,i as D,bh as Q,e as O,X as U,W as B,af as T,o as A,D as Y,_ as P,l as tt,aC as et,a6 as N,a7 as z,br as F,ap as V,w as at,R as rt,I as nt}from"./installCanvasRenderer-Dz4YvAYh.js";import{m as G,o as I,q as it,I as lt,r as ot,t as C}from"./AxisBuilder-CJ6ixypU.js";var Mt=function(){function t(){}return t.prototype.getNeedCrossZero=function(){var e=this.option;return!e.scale},t.prototype.getCoordSysModel=function(){},t}(),M=K();function st(t){return t.type==="category"?ct(t):gt(t)}function ut(t,e){return t.type==="category"?vt(t,e):{ticks:L(t.scale.getTicks(),function(a){return a.value})}}function ct(t){var e=t.getLabelModel(),a=H(t,e);return!e.get("show")||t.scale.isBlank()?{labels:[],labelCategoryInterval:a.labelCategoryInterval}:a}function H(t,e){var a=Z(t,"labels"),r=G(e),i=j(a,r);if(i)return i;var n,l;return D(r)?n=$(t,r):(l=r==="auto"?ht(t):r,n=q(t,l)),X(a,r,{labels:n,labelCategoryInterval:l})}function vt(t,e){var a=Z(t,"ticks"),r=G(e),i=j(a,r);if(i)return i;var n,l;if((!e.get("show")||t.scale.isBlank())&&(n=[]),D(r))n=$(t,r,!0);else if(r==="auto"){var c=H(t,t.getLabelModel());l=c.labelCategoryInterval,n=L(c.labels,function(u){return u.tickValue})}else l=r,n=q(t,l,!0);return X(a,r,{ticks:n,tickCategoryInterval:l})}function gt(t){var e=t.scale.getTicks(),a=I(t);return{labels:L(e,function(r,i){return{level:r.level,formattedLabel:a(r,i),rawLabel:t.scale.getLabel(r),tickValue:r.value}})}}function Z(t,e){return M(t)[e]||(M(t)[e]=[])}function j(t,e){for(var a=0;a<t.length;a++)if(t[a].key===e)return t[a].value}function X(t,e,a){return t.push({key:e,value:a}),a}function ht(t){var e=M(t).autoInterval;return e??(M(t).autoInterval=t.calculateCategoryInterval())}function ft(t){var e=dt(t),a=I(t),r=(e.axisRotate-e.labelRotate)/180*Math.PI,i=t.scale,n=i.getExtent(),l=i.count();if(n[1]-n[0]<1)return 0;var c=1;l>40&&(c=Math.max(1,Math.floor(l/40)));for(var u=n[0],o=t.dataToCoord(u+1)-t.dataToCoord(u),d=Math.abs(o*Math.cos(r)),y=Math.abs(o*Math.sin(r)),p=0,h=0;u<=n[1];u+=c){var s=0,g=0,v=Q(a({value:u}),e.font,"center","top");s=v.width*1.3,g=v.height*1.3,p=Math.max(p,s,7),h=Math.max(h,g,7)}var b=p/d,m=h/y;isNaN(b)&&(b=1/0),isNaN(m)&&(m=1/0);var f=Math.max(0,Math.floor(Math.min(b,m))),x=M(t.model),w=t.getExtent(),k=x.lastAutoInterval,E=x.lastTickCount;return k!=null&&E!=null&&Math.abs(k-f)<=1&&Math.abs(E-l)<=1&&k>f&&x.axisExtent0===w[0]&&x.axisExtent1===w[1]?f=k:(x.lastTickCount=l,x.lastAutoInterval=f,x.axisExtent0=w[0],x.axisExtent1=w[1]),f}function dt(t){var e=t.getLabelModel();return{axisRotate:t.getRotate?t.getRotate():t.isHorizontal&&!t.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()}}function q(t,e,a){var r=I(t),i=t.scale,n=i.getExtent(),l=t.getLabelModel(),c=[],u=Math.max((e||0)+1,1),o=n[0],d=i.count();o!==0&&u>1&&d/u>2&&(o=Math.round(Math.ceil(o/u)*u));var y=it(t),p=l.get("showMinLabel")||y,h=l.get("showMaxLabel")||y;p&&o!==n[0]&&g(n[0]);for(var s=o;s<=n[1];s+=u)g(s);h&&s-u!==n[1]&&g(n[1]);function g(v){var b={value:v};c.push(a?v:{formattedLabel:r(b),rawLabel:i.getLabel(b),tickValue:v})}return c}function $(t,e,a){var r=t.scale,i=I(t),n=[];return O(r.getTicks(),function(l){var c=r.getLabel(l),u=l.value;e(l.value,c)&&n.push(a?u:{formattedLabel:i(l),rawLabel:c,tickValue:u})}),n}var W=[0,1],pt=function(){function t(e,a,r){this.onBand=!1,this.inverse=!1,this.dim=e,this.scale=a,this._extent=r||[0,0]}return t.prototype.contain=function(e){var a=this._extent,r=Math.min(a[0],a[1]),i=Math.max(a[0],a[1]);return e>=r&&e<=i},t.prototype.containData=function(e){return this.scale.contain(e)},t.prototype.getExtent=function(){return this._extent.slice()},t.prototype.getPixelPrecision=function(e){return U(e||this.scale.getExtent(),this._extent)},t.prototype.setExtent=function(e,a){var r=this._extent;r[0]=e,r[1]=a},t.prototype.dataToCoord=function(e,a){var r=this._extent,i=this.scale;return e=i.normalize(e),this.onBand&&i.type==="ordinal"&&(r=r.slice(),_(r,i.count())),B(e,W,r,a)},t.prototype.coordToData=function(e,a){var r=this._extent,i=this.scale;this.onBand&&i.type==="ordinal"&&(r=r.slice(),_(r,i.count()));var n=B(e,r,W,a);return this.scale.scale(n)},t.prototype.pointToData=function(e,a){},t.prototype.getTicksCoords=function(e){e=e||{};var a=e.tickModel||this.getTickModel(),r=ut(this,a),i=r.ticks,n=L(i,function(c){return{coord:this.dataToCoord(this.scale.type==="ordinal"?this.scale.getRawOrdinalNumber(c):c),tickValue:c}},this),l=a.get("alignWithLabel");return bt(this,n,l,e.clamp),n},t.prototype.getMinorTicksCoords=function(){if(this.scale.type==="ordinal")return[];var e=this.model.getModel("minorTick"),a=e.get("splitNumber");a>0&&a<100||(a=5);var r=this.scale.getMinorTicks(a),i=L(r,function(n){return L(n,function(l){return{coord:this.dataToCoord(l),tickValue:l}},this)},this);return i},t.prototype.getViewLabels=function(){return st(this).labels},t.prototype.getLabelModel=function(){return this.model.getModel("axisLabel")},t.prototype.getTickModel=function(){return this.model.getModel("axisTick")},t.prototype.getBandWidth=function(){var e=this._extent,a=this.scale.getExtent(),r=a[1]-a[0]+(this.onBand?1:0);r===0&&(r=1);var i=Math.abs(e[1]-e[0]);return Math.abs(i)/r},t.prototype.calculateCategoryInterval=function(){return ft(this)},t}();function _(t,e){var a=t[1]-t[0],r=e,i=a/r/2;t[0]+=i,t[1]-=i}function bt(t,e,a,r){var i=e.length;if(!t.onBand||a||!i)return;var n=t.getExtent(),l,c;if(i===1)e[0].coord=n[0],l=e[1]={coord:n[1]};else{var u=e[i-1].tickValue-e[0].tickValue,o=(e[i-1].coord-e[0].coord)/u;O(e,function(h){h.coord-=o/2});var d=t.scale.getExtent();c=1+d[1]-e[i-1].tickValue,l={coord:e[i-1].coord+o*c},e.push(l)}var y=n[0]>n[1];p(e[0].coord,n[0])&&(r?e[0].coord=n[0]:e.shift()),r&&p(n[0],e[0].coord)&&e.unshift({coord:n[0]}),p(n[1],l.coord)&&(r?l.coord=n[1]:e.pop()),r&&p(l.coord,n[1])&&e.push({coord:n[1]});function p(h,s){return h=T(h),s=T(s),y?h>s:h<s}}const Et=pt;var J={show:!0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#6E7079",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#E0E6F1"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.2)","rgba(210,219,238,0.2)"]}}},xt=A({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},J),R=A({boundaryGap:[0,0],axisLine:{show:"auto"},axisTick:{show:"auto"},splitNumber:5,minorTick:{show:!1,splitNumber:5,length:3,lineStyle:{}},minorSplitLine:{show:!1,lineStyle:{color:"#F4F7FD",width:1}}},J),yt=A({splitNumber:6,axisLabel:{showMinLabel:!1,showMaxLabel:!1,rich:{primary:{fontWeight:"bold"}}},splitLine:{show:!1}},R),mt=Y({logBase:10},R);const It={category:xt,value:R,time:yt,log:mt};var S=Math.log;function Ct(t,e,a){var r=lt.prototype,i=r.getTicks.call(a),n=r.getTicks.call(a,!0),l=i.length-1,c=r.getInterval.call(a),u=ot(t,e),o=u.extent,d=u.fixMin,y=u.fixMax;if(t.type==="log"){var p=S(t.base);o=[S(o[0])/p,S(o[1])/p]}t.setExtent(o[0],o[1]),t.calcNiceExtent({splitNumber:l,fixMin:d,fixMax:y});var h=r.getExtent.call(t);d&&(o[0]=h[0]),y&&(o[1]=h[1]);var s=r.getInterval.call(t),g=o[0],v=o[1];if(d&&y)s=(v-g)/l;else if(d)for(v=o[0]+s*l;v<o[1]&&isFinite(v)&&isFinite(o[1]);)s=C(s),v=o[0]+s*l;else if(y)for(g=o[1]-s*l;g>o[0]&&isFinite(g)&&isFinite(o[0]);)s=C(s),g=o[1]-s*l;else{var b=t.getTicks().length-1;b>l&&(s=C(s));var m=s*l;v=Math.ceil(o[1]/s)*s,g=T(v-m),g<0&&o[0]>=0?(g=0,v=T(m)):v>0&&o[1]<=0&&(v=0,g=-T(m))}var f=(i[0].value-n[0].value)/c,x=(i[l].value-n[l].value)/c;r.setExtent.call(t,g+s*f,v+s*x),r.setInterval.call(t,s),(f||x)&&r.setNiceExtent.call(t,g+s,v-s)}var wt=function(t){P(e,t);function e(){var a=t!==null&&t.apply(this,arguments)||this;return a.type=e.type,a.layoutMode={type:"box",ignoreSize:!0},a}return e.type="title",e.defaultOption={z:6,show:!0,text:"",target:"blank",subtext:"",subtarget:"blank",left:0,top:0,backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:"bold",color:"#464646"},subtextStyle:{fontSize:12,color:"#6E7079"}},e}(tt),kt=function(t){P(e,t);function e(){var a=t!==null&&t.apply(this,arguments)||this;return a.type=e.type,a}return e.prototype.render=function(a,r,i){if(this.group.removeAll(),!!a.get("show")){var n=this.group,l=a.getModel("textStyle"),c=a.getModel("subtextStyle"),u=a.get("textAlign"),o=et(a.get("textBaseline"),a.get("textVerticalAlign")),d=new N({style:z(l,{text:a.get("text"),fill:l.getTextColor()},{disableBox:!0}),z2:10}),y=d.getBoundingRect(),p=a.get("subtext"),h=new N({style:z(c,{text:p,fill:c.getTextColor(),y:y.height+a.get("itemGap"),verticalAlign:"top"},{disableBox:!0}),z2:10}),s=a.get("link"),g=a.get("sublink"),v=a.get("triggerEvent",!0);d.silent=!s&&!v,h.silent=!g&&!v,s&&d.on("click",function(){F(s,"_"+a.get("target"))}),g&&h.on("click",function(){F(g,"_"+a.get("subtarget"))}),V(d).eventData=V(h).eventData=v?{componentType:"title",componentIndex:a.componentIndex}:null,n.add(d),p&&n.add(h);var b=n.getBoundingRect(),m=a.getBoxLayoutParams();m.width=b.width,m.height=b.height;var f=at(m,{width:i.getWidth(),height:i.getHeight()},a.get("padding"));u||(u=a.get("left")||a.get("right"),u==="middle"&&(u="center"),u==="right"?f.x+=f.width:u==="center"&&(f.x+=f.width/2)),o||(o=a.get("top")||a.get("bottom"),o==="center"&&(o="middle"),o==="bottom"?f.y+=f.height:o==="middle"&&(f.y+=f.height/2),o=o||"top"),n.x=f.x,n.y=f.y,n.markRedraw();var x={align:u,verticalAlign:o};d.setStyle(x),h.setStyle(x),b=n.getBoundingRect();var w=f.margin,k=a.getItemStyle(["color","opacity"]);k.fill=a.get("backgroundColor");var E=new rt({shape:{x:b.x-w[3],y:b.y-w[0],width:b.width+w[1]+w[3],height:b.height+w[0]+w[2],r:a.get("borderRadius")},style:k,subPixelOptimize:!0,silent:!0});n.add(E)}},e.type="title",e}(nt);function St(t){t.registerComponentModel(wt),t.registerComponentView(kt)}export{Mt as A,It as a,Et as b,Ct as c,St as i};