(window.webpackJsonp=window.webpackJsonp||[]).push([[11,17],{192:function(t,e,n){"use strict";n.r(e);var o={name:"Tagline",props:["as"],computed:{computedTag:function(){return this.as||"div"}}},r=(n(198),n(20)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.computedTag,{tag:"component",staticClass:"Tagline"},[t._t("default")],2)}),[],!1,null,"d1f6c19a",null);e.default=component.exports},193:function(t,e,n){var content=n(199);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("63faa848",content,!0,{sourceMap:!1})},194:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(63),n(216),n(11),n(35),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(46),n(47),n(34),n(12),n(232);var o={mounted:function(){var t=this,e=this.getReveals&&this.getReveals();if(e){var n=new Map;e.forEach((function(t){var e=t.targets,o=t.onInViewport;[].concat(e).forEach((function(t){var e,r;n.set(t,(e=function(t){o&&o(t)},(r=function t(){if(t.called)return t.value;t.called=!0;for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t.value=e.apply(this,o)}).called=!1,r))}))})),this.observer=new IntersectionObserver((function(e){e.forEach((function(e){if(e.isIntersecting){var o=e.target;o.classList.add("is-seen"),n.get(o)(o),t.observer.unobserve(o)}}))}),{threshold:.25}),n.forEach((function(e,n){return t.observer.observe(n)})),this.$nextTick((function(){t.observer.takeRecords()}))}},computed:{baseProps:function(){return{typeName:this.$props.typeName,background:this.$props.background,spacing:this.$props.spacing}}}}},198:function(t,e,n){"use strict";n(193)},199:function(t,e,n){var o=n(44)(!1);o.push([t.i,".Tagline[data-v-d1f6c19a]{font-weight:700;font-size:1.25rem;line-height:1.6;text-transform:none;color:#00e0ff}",""]),t.exports=o},200:function(t,e,n){var content=n(215);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("bd357b20",content,!0,{sourceMap:!1})},205:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.default=t.exports,t.exports.__esModule=!0},206:function(t,e,n){var o=n(210);t.exports=function(source,t){if(null==source)return{};var e,i,n=o(source,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n},t.exports.default=t.exports,t.exports.__esModule=!0},208:function(t,e,n){"use strict";n.r(e);n(100);function o(source,t){if(null==source)return{};var e,i,n=function(source,t){if(null==source)return{};var e,i,n={},o=Object.keys(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||(n[e]=source[e]);return n}(source,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n}var r,l,c,f,d,v,h,y=n(209),m=n.n(y),x=n(195),_=n(23),k=function(){return"undefined"!=typeof window},w=function(){return r||k()&&(r=window.gsap)&&r.registerPlugin&&r},O=function(t){return"string"==typeof t},j=function(t){return"function"==typeof t},M=function(element,t){var e="x"===t?"Width":"Height",n="scroll"+e,o="client"+e;return element===c||element===f||element===d?Math.max(f[n],d[n])-(c["inner"+e]||f[o]||d[o]):element[n]-element["offset"+e]},T=function(t,e){var p="scroll"+("x"===e?"Left":"Top");return t===c&&(null!=t.pageXOffset?p="page"+e.toUpperCase()+"Offset":t=null!=f[p]?f:d),function(){return t[p]}},B=function(element,t){if(!(element=v(element)[0])||!element.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var rect=element.getBoundingClientRect(),e=!t||t===c||t===d,n=e?{top:f.clientTop-(c.pageYOffset||f.scrollTop||d.scrollTop||0),left:f.clientLeft-(c.pageXOffset||f.scrollLeft||d.scrollLeft||0)}:t.getBoundingClientRect(),o={x:rect.left-n.left,y:rect.top-n.top};return!e&&t&&(o.x+=T(t,"x")(),o.y+=T(t,"y")()),o},P=function(t,e,n,o,r){return isNaN(t)||"object"===Object(_.a)(t)?O(t)&&"="===t.charAt(1)?parseFloat(t.substr(2))*("-"===t.charAt(0)?-1:1)+o-r:"max"===t?M(e,n)-r:Math.min(M(e,n),B(t,e)[n]-r):parseFloat(t)-r},H=function(){r=w(),k()&&r&&document.body&&(c=window,d=document.body,f=document.documentElement,v=r.utils.toArray,r.config({autoKillThreshold:7}),h=r.config(),l=1)},C={version:"3.6.0",name:"scrollTo",rawVars:1,register:function(t){r=t,H()},init:function(t,e,n,o,r){l||H();var data=this;data.isWin=t===c,data.target=t,data.tween=n,e=function(t,e,n,o){if(j(t)&&(t=t(e,n,o)),"object"!==Object(_.a)(t))return O(t)&&"max"!==t&&"="!==t.charAt(1)?{x:t,y:t}:{y:t};if(t.nodeType)return{y:t,x:t};var p,r={};for(p in t)"onAutoKill"!==p&&(r[p]=j(t[p])?t[p](e,n,o):t[p]);return r}(e,o,t,r),data.vars=e,data.autoKill=!!e.autoKill,data.getX=T(t,"x"),data.getY=T(t,"y"),data.x=data.xPrev=data.getX(),data.y=data.yPrev=data.getY(),null!=e.x?(data.add(data,"x",data.x,P(e.x,t,"x",data.x,e.offsetX||0),o,r,Math.round),data._props.push("scrollTo_x")):data.skipX=1,null!=e.y?(data.add(data,"y",data.y,P(e.y,t,"y",data.y,e.offsetY||0),o,r,Math.round),data._props.push("scrollTo_y")):data.skipY=1},render:function(t,data){for(var e,n,o,r,l,f=data._pt,d=data.target,v=data.tween,y=data.autoKill,m=data.xPrev,x=data.yPrev,_=data.isWin;f;)f.r(t,f.d),f=f._next;e=_||!data.skipX?data.getX():m,o=(n=_||!data.skipY?data.getY():x)-x,r=e-m,l=h.autoKillThreshold,data.x<0&&(data.x=0),data.y<0&&(data.y=0),y&&(!data.skipX&&(r>l||r<-l)&&e<M(d,"x")&&(data.skipX=1),!data.skipY&&(o>l||o<-l)&&n<M(d,"y")&&(data.skipY=1),data.skipX&&data.skipY&&(v.kill(),data.vars.onAutoKill&&data.vars.onAutoKill.apply(v,data.vars.onAutoKillParams||[]))),_?c.scrollTo(data.skipX?e:data.x,data.skipY?n:data.y):(data.skipY||(d.scrollTop=data.y),data.skipX||(d.scrollLeft=data.x)),data.xPrev=data.x,data.yPrev=data.y},kill:function(t){var e="scrollTo"===t;(e||"scrollTo_x"===t)&&(this.skipX=1),(e||"scrollTo_y"===t)&&(this.skipY=1)}};C.max=M,C.getOffset=B,C.buildGetter=T,w()&&r.registerPlugin(C),x.a.registerPlugin(C);var S={name:"Button",components:{CaretDown:m.a},props:{href:{type:String,default:null},to:{type:[String,Object],default:null},target:{type:String,default:null},rel:{type:String,default:null},role:{type:String,default:null},type:{type:String,default:null}},computed:{getTagName:function(){return this.to?"nuxt-link":this.href?"a":this.role&&"button"===this.role?"span":"button"},getPropsToPass:function(){var t=this.$props;t.type;return o(t,["type"])},isScrollTo:function(){return this.href&&this.href.startsWith("#")}},methods:{handleClick:function(t){if(this.isScrollTo){t.preventDefault();var e=t.currentTarget.getAttribute("href");window.history.replaceState(null,null,e),x.a.to(window,{duration:.6,scrollTo:{y:e},ease:"power2.easeOut"})}}}},X=(n(214),n(20)),component=Object(X.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.getTagName,t._b({tag:"component",class:["Button","Button--"+(t.type||"plain")],on:{click:t.handleClick}},"component",t.getPropsToPass,!1),[n("span",[t._t("default")],2),t._v(" "),n("span",{staticClass:"Button__icon"},[n("CaretDown",{staticClass:"icon-caret_down"})],1)])}),[],!1,null,"66a556f8",null);e.default=component.exports},209:function(t,e,n){n(63);var o=n(205),r=n(206);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),c=e.children,f=void 0===c?[]:c,d=data.class,v=data.staticClass,style=data.style,h=data.staticStyle,y=data.attrs,m=void 0===y?{}:y,x=r(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){o(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[d,v],style:[style,h],attrs:Object.assign({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 8"},m)},x),f.concat([n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 8a1 1 0 01-.753-.341l-6-6A1 1 0 111.753.34L7 5.481l5.247-5.14a1 1 0 011.506 1.318l-6 6A1 1 0 017 8z",fill:"#fff"}})]))}}},210:function(t,e){t.exports=function(source,t){if(null==source)return{};var e,i,n={},o=Object.keys(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||(n[e]=source[e]);return n},t.exports.default=t.exports,t.exports.__esModule=!0},214:function(t,e,n){"use strict";n(200)},215:function(t,e,n){var o=n(44)(!1);o.push([t.i,'.Button[data-v-66a556f8]{font-weight:600;font-size:1rem;line-height:1.5;display:inline-flex;align-items:center;padding:16px 24px;border-radius:99px;background:transparent;background-size:200% auto;color:#00e0ff;text-transform:uppercase;transition:background-color .2s ease,background-position .4s ease,color .2s ease,box-shadow .2s ease,transform .2s ease}.Button .Button__icon[data-v-66a556f8]{color:#fff;position:relative;z-index:0;margin-left:26px}.Button.Button--primary[data-v-66a556f8]{background-position:100%;background-image:linear-gradient(90deg,#00ffa3 0,#00e0ff 30%,#00e0ff);color:#000}.Button.Button--primary[data-v-66a556f8]:hover{background-color:#33e6ff;background-position:0}.Button.Button--primary:hover .Button__icon[data-v-66a556f8]{transform:rotate(-90deg)}.Button.Button--primary:hover .Button__icon[data-v-66a556f8]:before{background:#121212}.Button.Button--primary .Button__icon[data-v-66a556f8]{transition:inherit}.Button.Button--primary .Button__icon[data-v-66a556f8]:before{transition:inherit;content:"";position:absolute;width:40px;height:40px;left:50%;top:50%;transform:translate(-50%,-50%);z-index:-1;background:#000;border-radius:99px}',""]),t.exports=o},236:function(t,e,n){var content=n(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("3414edec",content,!0,{sourceMap:!1})},253:function(t,e,n){"use strict";n(236)},254:function(t,e,n){var o=n(44)(!1);o.push([t.i,".HeroModule[data-v-066ac61c]{padding:140px 0 120px}.HeroModule .HeroModule__title[data-v-066ac61c],.HeroModule .Tagline[data-v-066ac61c]{margin-bottom:16px}html.js .HeroModule .HeroModule__title[data-v-066ac61c]:not(.is-seen){visibility:hidden}.HeroModule .HeroModule__text[data-v-066ac61c]{color:#c9d8d8}html.js .HeroModule .HeroModule__text[data-v-066ac61c]:not(.is-seen){visibility:hidden}.HeroModule .HeroModule__text[data-v-066ac61c]>:first-child{margin-top:0}.HeroModule .HeroModule__text[data-v-066ac61c]>:last-child{margin-bottom:0}.HeroModule .Button[data-v-066ac61c]{margin-top:32px}html.js .HeroModule .Button[data-v-066ac61c]:not(.is-seen){visibility:hidden}",""]),t.exports=o},285:function(t,e,n){"use strict";n.r(e);var o=n(192),r=n(208),l=n(194),c=n(195),f={name:"HeroModule",mixins:[l.a],components:{Tagline:o.default,Button:r.default},methods:{getReveals:function(){var t=c.a.timeline();return[{targets:[this.$refs.title,this.$refs.text],onInViewport:function(e){t.from(e,{y:30,opacity:0},"-=0.35")}}]}}},d=(n(253),n(20)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"module HeroModule"},[n("div",{staticClass:"container"},[n("Tagline",[t._v("Jsme skupina fintechových firem")]),t._v(" "),n("h1",{ref:"title",staticClass:"HeroModule__title h2"},[t._v("Fér fintech")]),t._v(" "),n("div",{ref:"text",staticClass:"HeroModule__text"},[n("p",[t._v("... které si zakládají na férovém a partnerském přístupu. Naším hlavním cílem je kultivovat trh a obory, ve kterých podnikáme. Co nejvíce zjednodušovat život našich klientů, poskytovat jim poctivé služby a pomáhat jim vyhnout se špatným nabídkám.")])])],1)])}),[],!1,null,"066ac61c",null);e.default=component.exports;installComponents(component,{Tagline:n(192).default})}}]);