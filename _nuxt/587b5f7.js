(window.webpackJsonp=window.webpackJsonp||[]).push([[9,13],{192:function(t,e,n){"use strict";n.r(e);var o={name:"Tagline"},r=(n(198),n(20)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"Tagline"},[t._t("default")],2)}),[],!1,null,"0a651852",null);e.default=component.exports},193:function(t,e,n){var content=n(199);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("49c0f269",content,!0,{sourceMap:!1})},195:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(63),n(213),n(11),n(35),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(46),n(48),n(34),n(12),n(234);var o={mounted:function(){var t=this,e=this.getReveals&&this.getReveals();if(e){var n=new Map;e.forEach((function(t){var e=t.targets,o=t.onInViewport;[].concat(e).forEach((function(t){var e,r;n.set(t,(e=function(t){o&&o(t)},(r=function t(){if(t.called)return t.value;t.called=!0;for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t.value=e.apply(this,o)}).called=!1,r))}))})),this.observer=new IntersectionObserver((function(e){e.forEach((function(e){if(e.isIntersecting){var o=e.target;o.classList.add("is-seen"),n.get(o)(o),t.observer.unobserve(o)}}))}),{threshold:.25}),n.forEach((function(e,n){return t.observer.observe(n)})),this.$nextTick((function(){t.observer.takeRecords()}))}},computed:{baseProps:function(){return{typeName:this.$props.typeName,background:this.$props.background,spacing:this.$props.spacing}}}}},196:function(t,e,n){var content=n(207);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("69fc9a24",content,!0,{sourceMap:!1})},198:function(t,e,n){"use strict";n(193)},199:function(t,e,n){var o=n(44)(!1);o.push([t.i,".Tagline[data-v-0a651852]{font-weight:700;font-size:1.25rem;line-height:1.6;color:#00e0ff}",""]),t.exports=o},200:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.default=t.exports,t.exports.__esModule=!0},201:function(t,e,n){var o=n(205);t.exports=function(source,t){if(null==source)return{};var e,i,n=o(source,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n},t.exports.default=t.exports,t.exports.__esModule=!0},203:function(t,e,n){"use strict";n.r(e);n(100);var o,r,l,c,f,d,v,h=n(204),y=n.n(h),x=n(194),m=n(23),_=function(){return"undefined"!=typeof window},w=function(){return o||_()&&(o=window.gsap)&&o.registerPlugin&&o},k=function(t){return"string"==typeof t},O=function(t){return"function"==typeof t},j=function(element,t){var e="x"===t?"Width":"Height",n="scroll"+e,o="client"+e;return element===l||element===c||element===f?Math.max(c[n],f[n])-(l["inner"+e]||c[o]||f[o]):element[n]-element["offset"+e]},M=function(t,e){var p="scroll"+("x"===e?"Left":"Top");return t===l&&(null!=t.pageXOffset?p="page"+e.toUpperCase()+"Offset":t=null!=c[p]?c:f),function(){return t[p]}},T=function(element,t){if(!(element=d(element)[0])||!element.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var rect=element.getBoundingClientRect(),e=!t||t===l||t===f,n=e?{top:c.clientTop-(l.pageYOffset||c.scrollTop||f.scrollTop||0),left:c.clientLeft-(l.pageXOffset||c.scrollLeft||f.scrollLeft||0)}:t.getBoundingClientRect(),o={x:rect.left-n.left,y:rect.top-n.top};return!e&&t&&(o.x+=M(t,"x")(),o.y+=M(t,"y")()),o},P=function(t,e,n,o,r){return isNaN(t)||"object"===Object(m.a)(t)?k(t)&&"="===t.charAt(1)?parseFloat(t.substr(2))*("-"===t.charAt(0)?-1:1)+o-r:"max"===t?j(e,n)-r:Math.min(j(e,n),T(t,e)[n]-r):parseFloat(t)-r},C=function(){o=w(),_()&&o&&document.body&&(l=window,f=document.body,c=document.documentElement,d=o.utils.toArray,o.config({autoKillThreshold:7}),v=o.config(),r=1)},H={version:"3.6.0",name:"scrollTo",rawVars:1,register:function(t){o=t,C()},init:function(t,e,n,o,c){r||C();var data=this;data.isWin=t===l,data.target=t,data.tween=n,e=function(t,e,n,o){if(O(t)&&(t=t(e,n,o)),"object"!==Object(m.a)(t))return k(t)&&"max"!==t&&"="!==t.charAt(1)?{x:t,y:t}:{y:t};if(t.nodeType)return{y:t,x:t};var p,r={};for(p in t)"onAutoKill"!==p&&(r[p]=O(t[p])?t[p](e,n,o):t[p]);return r}(e,o,t,c),data.vars=e,data.autoKill=!!e.autoKill,data.getX=M(t,"x"),data.getY=M(t,"y"),data.x=data.xPrev=data.getX(),data.y=data.yPrev=data.getY(),null!=e.x?(data.add(data,"x",data.x,P(e.x,t,"x",data.x,e.offsetX||0),o,c,Math.round),data._props.push("scrollTo_x")):data.skipX=1,null!=e.y?(data.add(data,"y",data.y,P(e.y,t,"y",data.y,e.offsetY||0),o,c,Math.round),data._props.push("scrollTo_y")):data.skipY=1},render:function(t,data){for(var e,n,o,r,c,f=data._pt,d=data.target,h=data.tween,y=data.autoKill,x=data.xPrev,m=data.yPrev,_=data.isWin;f;)f.r(t,f.d),f=f._next;e=_||!data.skipX?data.getX():x,o=(n=_||!data.skipY?data.getY():m)-m,r=e-x,c=v.autoKillThreshold,data.x<0&&(data.x=0),data.y<0&&(data.y=0),y&&(!data.skipX&&(r>c||r<-c)&&e<j(d,"x")&&(data.skipX=1),!data.skipY&&(o>c||o<-c)&&n<j(d,"y")&&(data.skipY=1),data.skipX&&data.skipY&&(h.kill(),data.vars.onAutoKill&&data.vars.onAutoKill.apply(h,data.vars.onAutoKillParams||[]))),_?l.scrollTo(data.skipX?e:data.x,data.skipY?n:data.y):(data.skipY||(d.scrollTop=data.y),data.skipX||(d.scrollLeft=data.x)),data.xPrev=data.x,data.yPrev=data.y},kill:function(t){var e="scrollTo"===t;(e||"scrollTo_x"===t)&&(this.skipX=1),(e||"scrollTo_y"===t)&&(this.skipY=1)}};H.max=j,H.getOffset=T,H.buildGetter=M,w()&&o.registerPlugin(H),x.a.registerPlugin(H);var B={name:"Button",components:{CaretDown:y.a},props:{href:{type:String,default:null},to:{type:[String,Object],default:null},linkFieldObject:{type:Object,default:null},target:{type:String,default:null},rel:{type:String,default:null},type:{type:String,default:null}},computed:{getTagName:function(){return this.to?"nuxt-link":this.href?"a":this.role&&"button"===this.role?"span":"button"},isScrollTo:function(){return this.href&&this.href.startsWith("#")}},methods:{handleClick:function(t){if(this.isScrollTo){t.preventDefault();var e=t.currentTarget.getAttribute("href");window.history.replaceState(null,null,e),x.a.to(window,{duration:.6,scrollTo:{y:e},ease:"power2.easeOut"})}}}},S=(n(206),n(20)),component=Object(S.a)(B,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.getTagName,t._b({tag:"component",staticClass:"Button",on:{click:t.handleClick}},"component",t.$props,!1),[n("span",[t._t("default")],2),t._v(" "),n("span",{staticClass:"Button__icon"},[n("CaretDown",{staticClass:"icon-caret_down"})],1)])}),[],!1,null,"2d69a324",null);e.default=component.exports},204:function(t,e,n){n(63);var o=n(200),r=n(201);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),c=e.children,f=void 0===c?[]:c,d=data.class,v=data.staticClass,style=data.style,h=data.staticStyle,y=data.attrs,x=void 0===y?{}:y,m=r(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){o(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[d,v],style:[style,h],attrs:Object.assign({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 8"},x)},m),f.concat([n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 8a1 1 0 01-.753-.341l-6-6A1 1 0 111.753.34L7 5.481l5.247-5.14a1 1 0 011.506 1.318l-6 6A1 1 0 017 8z",fill:"#fff"}})]))}}},205:function(t,e){t.exports=function(source,t){if(null==source)return{};var e,i,n={},o=Object.keys(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||(n[e]=source[e]);return n},t.exports.default=t.exports,t.exports.__esModule=!0},206:function(t,e,n){"use strict";n(196)},207:function(t,e,n){var o=n(44)(!1);o.push([t.i,'.Button[data-v-2d69a324]{font-weight:600;font-size:1rem;line-height:1.5;display:inline-flex;align-items:center;padding:16px 24px;border-radius:99px;background:#00e0ff;color:#000;text-transform:uppercase}.Button .Button__icon[data-v-2d69a324]{color:#fff;position:relative;z-index:0;margin-left:26px}.Button .Button__icon[data-v-2d69a324]:before{content:"";position:absolute;width:40px;height:40px;left:50%;top:50%;transform:translate(-50%,-50%);z-index:-1;background:#000;border-radius:99px}.Button.Button--plain[data-v-2d69a324]{background:transparent;color:#00e0ff}.Button.Button--plain .Button__icon[data-v-2d69a324]:before{display:none}',""]),t.exports=o},227:function(t,e,n){var content=n(243);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("33722502",content,!0,{sourceMap:!1})},242:function(t,e,n){"use strict";n(227)},243:function(t,e,n){var o=n(44)(!1);o.push([t.i,".HeroModule[data-v-c77c02ec]{padding:140px 0 160px}.HeroModule .HeroModule__title[data-v-c77c02ec],.HeroModule .Tagline[data-v-c77c02ec]{margin-bottom:16px}html.js .HeroModule .HeroModule__title[data-v-c77c02ec]:not(.is-seen){visibility:hidden}.HeroModule .HeroModule__text[data-v-c77c02ec]{color:#c9d8d8;margin-bottom:32px}html.js .HeroModule .HeroModule__text[data-v-c77c02ec]:not(.is-seen){visibility:hidden}.HeroModule .HeroModule__text[data-v-c77c02ec]>:first-child{margin-top:0}.HeroModule .HeroModule__text[data-v-c77c02ec]>:last-child{margin-bottom:0}html.js .HeroModule .Button[data-v-c77c02ec]:not(.is-seen){visibility:hidden}",""]),t.exports=o},262:function(t,e,n){"use strict";n.r(e);var o=n(192),r=n(203),l=n(195),c=n(194),f={name:"HeroModule",mixins:[l.a],components:{Tagline:o.default,Button:r.default},methods:{getReveals:function(){var t=c.a.timeline();return[{targets:[this.$refs.title,this.$refs.text],onInViewport:function(e){t.from(e,{y:30,opacity:0},"-=0.35")}}]}}},d=(n(242),n(20)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"module HeroModule"},[n("div",{staticClass:"container"},[n("Tagline",[t._v("Jsme skupina fintechových firem")]),t._v(" "),n("h1",{ref:"title",staticClass:"HeroModule__title h2"},[t._v("Fér fintech")]),t._v(" "),n("div",{ref:"text",staticClass:"HeroModule__text"},[n("p",[t._v("... které si zakládají na férovém a partnerském přístupu. Naším hlavním cílem je kultivovat trh a obory, ve kterých podnikáme. Co nejvíce zjednodušovat život našich klientů, poskytovat jim poctivé služby a pomáhat jim vyhnout se špatným nabídkám.")])])],1)])}),[],!1,null,"c77c02ec",null);e.default=component.exports;installComponents(component,{Tagline:n(192).default})}}]);