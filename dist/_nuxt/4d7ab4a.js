(window.webpackJsonp=window.webpackJsonp||[]).push([[14,17],{192:function(t,e,r){"use strict";r.r(e);var o={name:"Tagline",props:["as"],computed:{computedTag:function(){return this.as||"div"}}},n=(r(198),r(20)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.computedTag,{tag:"component",staticClass:"Tagline"},[t._t("default")],2)}),[],!1,null,"d1f6c19a",null);e.default=component.exports},193:function(t,e,r){var content=r(199);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("63faa848",content,!0,{sourceMap:!1})},194:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(63),r(216),r(11),r(35),r(217),r(218),r(219),r(220),r(221),r(222),r(223),r(224),r(225),r(226),r(227),r(228),r(229),r(46),r(47),r(34),r(12),r(232);var o={mounted:function(){var t=this,e=this.getReveals&&this.getReveals();if(e){var r=new Map;e.forEach((function(t){var e=t.targets,o=t.onInViewport;[].concat(e).forEach((function(t){var e,n;r.set(t,(e=function(t){o&&o(t)},(n=function t(){if(t.called)return t.value;t.called=!0;for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return t.value=e.apply(this,o)}).called=!1,n))}))})),this.observer=new IntersectionObserver((function(e){e.forEach((function(e){if(e.isIntersecting){var o=e.target;o.classList.add("is-seen"),r.get(o)(o),t.observer.unobserve(o)}}))}),{threshold:.25}),r.forEach((function(e,r){return t.observer.observe(r)})),this.$nextTick((function(){t.observer.takeRecords()}))}},computed:{baseProps:function(){return{typeName:this.$props.typeName,background:this.$props.background,spacing:this.$props.spacing}}}}},198:function(t,e,r){"use strict";r(193)},199:function(t,e,r){var o=r(44)(!1);o.push([t.i,".Tagline[data-v-d1f6c19a]{font-weight:700;font-size:1.25rem;line-height:1.6;text-transform:none;color:#00e0ff}",""]),t.exports=o},201:function(t,e,r){var content=r(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("37440a76",content,!0,{sourceMap:!1})},204:function(t,e,r){"use strict";r.r(e);r(211);var o={name:"AspectRatio",props:{aspectRatio:{type:Number,default:16/9}}},n=(r(230),r(20)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"AspectRatio"},[r("svg",{attrs:{viewBox:"0 0 "+t.aspectRatio+" 1"}}),t._v(" "),t._t("default")],2)}),[],!1,null,"6e40a645",null);e.default=component.exports},230:function(t,e,r){"use strict";r(201)},231:function(t,e,r){var o=r(44)(!1);o.push([t.i,".AspectRatio[data-v-6e40a645]{display:-ms-grid;display:grid;position:relative}.AspectRatio>*[data-v-6e40a645]{-ms-grid-row:1;-ms-grid-row-span:1;-ms-grid-column:1;-ms-grid-column-span:1;grid-area:1/1/2/2}.AspectRatio>svg[data-v-6e40a645]{width:auto;height:auto}.AspectRatio[data-v-6e40a645]>:not(svg){position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=o},244:function(t,e,r){var content=r(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("d6c20a42",content,!0,{sourceMap:!1})},273:function(t,e,r){t.exports=r.p+"img/fintree.62cdb1b.png"},274:function(t,e,r){t.exports=r.p+"img/Rozbité prasátko.758f00d.png"},275:function(t,e,r){t.exports=r.p+"img/lucia.44a78e5.png"},276:function(t,e,r){t.exports=r.p+"img/sedlacek.be6d4ff.png"},277:function(t,e,r){"use strict";r(244)},278:function(t,e,r){var o=r(44)(!1);o.push([t.i,".SupportersModule[data-v-70c557a1]{padding:120px 0}.SupportersModule .Tagline[data-v-70c557a1]{margin-bottom:40px}.SupportersModule__items[data-v-70c557a1]{display:flex;flex-flow:row wrap;align-items:center;justify-content:space-between;margin:-30px}.SupportersModule__item[data-v-70c557a1]{flex:1;flex-basis:100%;min-width:0;text-align:center;padding:30px;display:block}html.js .SupportersModule__item[data-v-70c557a1]:not(.is-seen){visibility:hidden}@media(min-width:576px){.SupportersModule__item[data-v-70c557a1]{flex-basis:50%}}@media(min-width:992px){.SupportersModule__item[data-v-70c557a1]{flex-basis:25%}}.SupportersModule__name[data-v-70c557a1]{font-weight:700;font-size:1.25rem;line-height:1.6}.SupportersModule__image[data-v-70c557a1]{width:100%;display:flex;flex-flow:row nowrap}.SupportersModule__image img[data-v-70c557a1]{max-height:80px;max-width:min(100%,245px);margin:0 auto}.SupportersModule__image+*[data-v-70c557a1]{margin-top:16px}",""]),t.exports=o},290:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"SupportersModule__image"},[e("img",{attrs:{src:r(273),alt:"Fintree"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"SupportersModule__image"},[e("img",{attrs:{src:r(274),alt:"Rozbité prasátko"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"SupportersModule__image"},[e("img",{attrs:{src:r(275),alt:"Lucia Tothova"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"SupportersModule__image"},[e("img",{attrs:{src:r(276),alt:"Lukáš Sedláček"}})])}],n=r(195),l=r(194),c=r(192),d=r(204),f={name:"SupportersModule",mixins:[l.a],components:{AspectRatio:d.default,Tagline:c.default},methods:{getReveals:function(){return[{targets:this.$refs.items,onInViewport:function(t){n.a.from(t,{opacity:0,y:30})}}]}}},m=(r(277),r(20)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"module SupportersModule"},[r("div",{staticClass:"container-large"},[r("Tagline",{attrs:{as:"h2"}},[t._v("Kdo nás podporuje?")]),t._v(" "),r("div",{staticClass:"SupportersModule__items"},[t._l(1,(function(i){return[r("a",{ref:"items",refInFor:!0,staticClass:"SupportersModule__item",attrs:{href:"https://fintree.cz/",target:"_blank"}},[t._m(0,!0)]),t._v(" "),r("a",{ref:"items",refInFor:!0,staticClass:"SupportersModule__item",attrs:{href:"https://rozbiteprasatko.cz/",target:"_blank"}},[t._m(1,!0)]),t._v(" "),r("a",{ref:"items",refInFor:!0,staticClass:"SupportersModule__item",attrs:{href:"https://twitter.com/littlelucy_lu",target:"_blank"}},[t._m(2,!0),t._v(" "),r("div",{staticClass:"SupportersModule__name"},[t._v("Lucia Tothova")]),t._v(" "),r("div",{staticClass:"SupportersModule__tag"},[t._v("@littlelucy_lu")])]),t._v(" "),r("a",{ref:"items",refInFor:!0,staticClass:"SupportersModule__item",attrs:{href:"https://elai.cz",target:"_blank"}},[t._m(3,!0),t._v(" "),r("div",{staticClass:"SupportersModule__name"},[t._v("Lukáš Sedláček")])])]}))],2)],1)])}),o,!1,null,"70c557a1",null);e.default=component.exports;installComponents(component,{Tagline:r(192).default})}}]);