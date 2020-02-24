var CACHE_NAME="1582528160281",urlsToCache=["/"];self.addEventListener("install",function(e){e.waitUntil(caches.open(CACHE_NAME).then(function(e){return e.addAll(urlsToCache)}))}),self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(e!==CACHE_NAME)return caches.delete(e)}))}))}),self.addEventListener("fetch",function(n){n.respondWith(caches.match(n.request).then(function(e){if(e)return e;var t=n.request.clone();return fetch(t).then(function(e){if(!e||200!==e.status||"basic"!==e.type)return e;var t=e.clone();return caches.open(CACHE_NAME).then(function(e){e.put(n.request,t)}),e})}))});
/*!
  hey, [be]Lazy.js - v1.8.2 - 2016.10.25
  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
  (function(q,m){"function"===typeof define&&define.amd?define(m):"object"===typeof exports?module.exports=m():q.Blazy=m()})(this,function(){function q(b){var c=b._util;c.elements=E(b.options);c.count=c.elements.length;c.destroyed&&(c.destroyed=!1,b.options.container&&l(b.options.container,function(a){n(a,"scroll",c.validateT)}),n(window,"resize",c.saveViewportOffsetT),n(window,"resize",c.validateT),n(window,"scroll",c.validateT));m(b)}function m(b){for(var c=b._util,a=0;a<c.count;a++){var d=c.elements[a],e;a:{var g=d;e=b.options;var p=g.getBoundingClientRect();if(e.container&&y&&(g=g.closest(e.containerClass))){g=g.getBoundingClientRect();e=r(g,f)?r(p,{top:g.top-e.offset,right:g.right+e.offset,bottom:g.bottom+e.offset,left:g.left-e.offset}):!1;break a}e=r(p,f)}if(e||t(d,b.options.successClass))b.load(d),c.elements.splice(a,1),c.count--,a--}0===c.count&&b.destroy()}function r(b,c){return b.right>=c.left&&b.bottom>=c.top&&b.left<=c.right&&b.top<=c.bottom}function z(b,c,a){if(!t(b,a.successClass)&&(c||a.loadInvisible||0<b.offsetWidth&&0<b.offsetHeight))if(c=b.getAttribute(u)||b.getAttribute(a.src)){c=c.split(a.separator);var d=c[A&&1<c.length?1:0],e=b.getAttribute(a.srcset),g="img"===b.nodeName.toLowerCase(),p=(c=b.parentNode)&&"picture"===c.nodeName.toLowerCase();if(g||void 0===b.src){var h=new Image,w=function(){a.error&&a.error(b,"invalid");v(b,a.errorClass);k(h,"error",w);k(h,"load",f)},f=function(){g?p||B(b,d,e):b.style.backgroundImage='url("'+d+'")';x(b,a);k(h,"load",f);k(h,"error",w)};p&&(h=b,l(c.getElementsByTagName("source"),function(b){var c=a.srcset,e=b.getAttribute(c);e&&(b.setAttribute("srcset",e),b.removeAttribute(c))}));n(h,"error",w);n(h,"load",f);B(h,d,e)}else b.src=d,x(b,a)}else"video"===b.nodeName.toLowerCase()?(l(b.getElementsByTagName("source"),function(b){var c=a.src,e=b.getAttribute(c);e&&(b.setAttribute("src",e),b.removeAttribute(c))}),b.load(),x(b,a)):(a.error&&a.error(b,"missing"),v(b,a.errorClass))}function x(b,c){v(b,c.successClass);c.success&&c.success(b);b.removeAttribute(c.src);b.removeAttribute(c.srcset);l(c.breakpoints,function(a){b.removeAttribute(a.src)})}function B(b,c,a){a&&b.setAttribute("srcset",a);b.src=c}function t(b,c){return-1!==(" "+b.className+" ").indexOf(" "+c+" ")}function v(b,c){t(b,c)||(b.className+=" "+c)}function E(b){var c=[];b=b.root.querySelectorAll(b.selector);for(var a=b.length;a--;c.unshift(b[a]));return c}function C(b){f.bottom=(window.innerHeight||document.documentElement.clientHeight)+b;f.right=(window.innerWidth||document.documentElement.clientWidth)+b}function n(b,c,a){b.attachEvent?b.attachEvent&&b.attachEvent("on"+c,a):b.addEventListener(c,a,{capture:!1,passive:!0})}function k(b,c,a){b.detachEvent?b.detachEvent&&b.detachEvent("on"+c,a):b.removeEventListener(c,a,{capture:!1,passive:!0})}function l(b,c){if(b&&c)for(var a=b.length,d=0;d<a&&!1!==c(b[d],d);d++);}function D(b,c,a){var d=0;return function(){var e=+new Date;e-d<c||(d=e,b.apply(a,arguments))}}var u,f,A,y;return function(b){if(!document.querySelectorAll){var c=document.createStyleSheet();document.querySelectorAll=function(a,b,d,h,f){f=document.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(d=a.length;d--;){c.addRule(a[d],"k:v");for(h=f.length;h--;)f[h].currentStyle.k&&b.push(f[h]);c.removeRule(0)}return b}}var a=this,d=a._util={};d.elements=[];d.destroyed=!0;a.options=b||{};a.options.error=a.options.error||!1;a.options.offset=a.options.offset||100;a.options.root=a.options.root||document;a.options.success=a.options.success||!1;a.options.selector=a.options.selector||".b-lazy";a.options.separator=a.options.separator||"|";a.options.containerClass=a.options.container;a.options.container=a.options.containerClass?document.querySelectorAll(a.options.containerClass):!1;a.options.errorClass=a.options.errorClass||"b-error";a.options.breakpoints=a.options.breakpoints||!1;a.options.loadInvisible=a.options.loadInvisible||!1;a.options.successClass=a.options.successClass||"b-loaded";a.options.validateDelay=a.options.validateDelay||25;a.options.saveViewportOffsetDelay=a.options.saveViewportOffsetDelay||50;a.options.srcset=a.options.srcset||"data-srcset";a.options.src=u=a.options.src||"data-src";y=Element.prototype.closest;A=1<window.devicePixelRatio;f={};f.top=0-a.options.offset;f.left=0-a.options.offset;a.revalidate=function(){q(a)};a.load=function(a,b){var c=this.options;void 0===a.length?z(a,b,c):l(a,function(a){z(a,b,c)})};a.destroy=function(){var a=this._util;this.options.container&&l(this.options.container,function(b){k(b,"scroll",a.validateT)});k(window,"scroll",a.validateT);k(window,"resize",a.validateT);k(window,"resize",a.saveViewportOffsetT);a.count=0;a.elements.length=0;a.destroyed=!0};d.validateT=D(function(){m(a)},a.options.validateDelay,a);d.saveViewportOffsetT=D(function(){C(a.options.offset)},a.options.saveViewportOffsetDelay,a);C(a.options.offset);l(a.options.breakpoints,function(a){if(a.width>=window.screen.width)return u=a.src,!1});setTimeout(function(){q(a)})}});
/**!
 * lightgallery.js | 1.0.3 | August 8th 2018
 * http://sachinchoolur.github.io/lightgallery.js/
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Lightgallery=e()}}(function(){var e,t,s;return function(){function e(t,s,l){function i(r,d){if(!s[r]){if(!t[r]){var n="function"==typeof require&&require;if(!d&&n)return n(r,!0);if(o)return o(r,!0);var a=new Error("Cannot find module '"+r+"'");throw a.code="MODULE_NOT_FOUND",a}var u=s[r]={exports:{}};t[r][0].call(u.exports,function(e){return i(t[r][1][e]||e)},u,u.exports,e,t,s,l)}return s[r].exports}for(var o="function"==typeof require&&require,r=0;r<l.length;r++)i(l[r]);return i}return e}()({1:[function(t,s,l){!function(t,s){if("function"==typeof e&&e.amd)e(["exports"],s);else if(void 0!==l)s(l);else{var i={exports:{}};s(i.exports),t.lgUtils=i.exports}}(this,function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),window.getAttribute=function(e){return window[e]},window.setAttribute=function(e,t){window[e]=t},document.getAttribute=function(e){return document[e]},document.setAttribute=function(e,t){document[e]=t};var t={wrap:function e(t,s){if(t){var l=document.createElement("div");l.className=s,t.parentNode.insertBefore(l,t),t.parentNode.removeChild(t),l.appendChild(t)}},addClass:function e(t,s){t&&(t.classList?t.classList.add(s):t.className+=" "+s)},removeClass:function e(t,s){t&&(t.classList?t.classList.remove(s):t.className=t.className.replace(new RegExp("(^|\\b)"+s.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass:function e(t,s){return t.classList?t.classList.contains(s):new RegExp("(^| )"+s+"( |$)","gi").test(t.className)},setVendor:function e(t,s,l){t&&(t.style[s.charAt(0).toLowerCase()+s.slice(1)]=l,t.style["webkit"+s]=l,t.style["moz"+s]=l,t.style["ms"+s]=l,t.style["o"+s]=l)},trigger:function e(t,s){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(t){var i=new CustomEvent(s,{detail:l});t.dispatchEvent(i)}},Listener:{uid:0},on:function e(s,l,i){s&&l.split(" ").forEach(function(e){var l=s.getAttribute("lg-event-uid")||"";t.Listener.uid++,l+="&"+t.Listener.uid,s.setAttribute("lg-event-uid",l),t.Listener[e+t.Listener.uid]=i,s.addEventListener(e.split(".")[0],i,!1)})},off:function e(s,l){if(s){var i=s.getAttribute("lg-event-uid");if(i){i=i.split("&");for(var o=0;o<i.length;o++)if(i[o]){var r=l+i[o];if("."===r.substring(0,1))for(var d in t.Listener)t.Listener.hasOwnProperty(d)&&d.split(".").indexOf(r.split(".")[1])>-1&&(s.removeEventListener(d.split(".")[0],t.Listener[d]),s.setAttribute("lg-event-uid",s.getAttribute("lg-event-uid").replace("&"+i[o],"")),delete t.Listener[d]);else s.removeEventListener(r.split(".")[0],t.Listener[r]),s.setAttribute("lg-event-uid",s.getAttribute("lg-event-uid").replace("&"+i[o],"")),delete t.Listener[r]}}}},param:function e(t){return Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}};e.default=t})},{}],2:[function(t,s,l){!function(s,i){if("function"==typeof e&&e.amd)e(["./lg-utils"],i);else if(void 0!==l)i(t("./lg-utils"));else{var o={exports:{}};i(s.lgUtils),s.lightgallery=o.exports}}(this,function(e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(this.el=e,this.s=i({},o,t),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in document.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.items=[],this.s.dynamic?this.items=this.s.dynamicEl:"this"===this.s.selector?this.items.push(this.el):""!==this.s.selector?this.s.selectWithin?this.items=document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector):this.items=this.el.querySelectorAll(this.s.selector):this.items=this.el.children,this.___slide="",this.outer="",this.init(),this}var l=t(e),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e};!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var s=document.createEvent("CustomEvent");return s.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),s}if("function"==typeof window.CustomEvent)return!1;e.prototype=window.Event.prototype,window.CustomEvent=e}(),window.utils=l.default,window.lgData={uid:0},window.lgModules={};var o={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!1,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};s.prototype.init=function(){var e=this;e.s.preload>e.items.length&&(e.s.preload=e.items.length);var t=window.location.hash;if(t.indexOf("lg="+this.s.galleryId)>0&&(e.index=parseInt(t.split("&slide=")[1],10),l.default.addClass(document.body,"lg-from-hash"),l.default.hasClass(document.body,"lg-on")||(l.default.addClass(document.body,"lg-on"),setTimeout(function(){e.build(e.index)}))),e.s.dynamic)l.default.trigger(this.el,"onBeforeOpen"),e.index=e.s.index||0,l.default.hasClass(document.body,"lg-on")||(l.default.addClass(document.body,"lg-on"),setTimeout(function(){e.build(e.index)}));else for(var s=0;s<e.items.length;s++)!function(t){l.default.on(e.items[t],"click.lgcustom",function(s){s.preventDefault(),l.default.trigger(e.el,"onBeforeOpen"),e.index=e.s.index||t,l.default.hasClass(document.body,"lg-on")||(e.build(e.index),l.default.addClass(document.body,"lg-on"))})}(s)},s.prototype.build=function(e){var t=this;t.structure();for(var s in window.lgModules)t.modules[s]=new window.lgModules[s](t.el);t.slide(e,!1,!1),t.s.keyPress&&t.keyPress(),t.items.length>1&&(t.arrow(),setTimeout(function(){t.enableDrag(),t.enableSwipe()},50),t.s.mousewheel&&t.mousewheel()),t.counter(),t.closeGallery(),l.default.trigger(t.el,"onAfterOpen"),l.default.on(t.outer,"mousemove.lg click.lg touchstart.lg",function(){l.default.removeClass(t.outer,"lg-hide-items"),clearTimeout(t.hideBartimeout),t.hideBartimeout=setTimeout(function(){l.default.addClass(t.outer,"lg-hide-items")},t.s.hideBarsDelay)})},s.prototype.structure=function(){var e="",t="",s=0,i="",o,r=this;for(document.body.insertAdjacentHTML("beforeend",'<div class="lg-backdrop"></div>'),l.default.setVendor(document.querySelector(".lg-backdrop"),"TransitionDuration",this.s.backdropDuration+"ms"),s=0;s<this.items.length;s++)e+='<div class="lg-item"></div>';if(this.s.controls&&this.items.length>1&&(t='<div class="lg-actions"><div class="lg-prev lg-icon">'+this.s.prevHtml+'</div><div class="lg-next lg-icon">'+this.s.nextHtml+"</div></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(i='<div class="lg-sub-html"></div>'),o='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+e+'</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>'+t+i+"</div></div>",document.body.insertAdjacentHTML("beforeend",o),this.outer=document.querySelector(".lg-outer"),this.___slide=this.outer.querySelectorAll(".lg-item"),this.s.useLeft?(l.default.addClass(this.outer,"lg-use-left"),this.s.mode="lg-slide"):l.default.addClass(this.outer,"lg-use-css3"),r.setTop(),l.default.on(window,"resize.lg orientationchange.lg",function(){setTimeout(function(){r.setTop()},100)}),l.default.addClass(this.___slide[this.index],"lg-current"),this.doCss()?l.default.addClass(this.outer,"lg-css3"):(l.default.addClass(this.outer,"lg-css"),this.s.speed=0),l.default.addClass(this.outer,this.s.mode),this.s.enableDrag&&this.items.length>1&&l.default.addClass(this.outer,"lg-grab"),this.s.showAfterLoad&&l.default.addClass(this.outer,"lg-show-after-load"),this.doCss()){var d=this.outer.querySelector(".lg-inner");l.default.setVendor(d,"TransitionTimingFunction",this.s.cssEasing),l.default.setVendor(d,"TransitionDuration",this.s.speed+"ms")}setTimeout(function(){l.default.addClass(document.querySelector(".lg-backdrop"),"in")}),setTimeout(function(){l.default.addClass(r.outer,"lg-visible")},this.s.backdropDuration),this.s.download&&this.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend",'<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=document.documentElement.scrollTop||document.body.scrollTop},s.prototype.setTop=function(){if("100%"!==this.s.height){var e=window.innerHeight,t=(e-parseInt(this.s.height,10))/2,s=this.outer.querySelector(".lg");e>=parseInt(this.s.height,10)?s.style.top=t+"px":s.style.top="0px"}},s.prototype.doCss=function(){return!!function e(){var t=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],s=document.documentElement,l=0;for(l=0;l<t.length;l++)if(t[l]in s.style)return!0}()},s.prototype.isVideo=function(e,t){var s;if(s=this.s.dynamic?this.s.dynamicEl[t].html:this.items[t].getAttribute("data-html"),!e&&s)return{html5:!0};var l=e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),i=e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),o=e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),r=e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return l?{youtube:l}:i?{vimeo:i}:o?{dailymotion:o}:r?{vk:r}:void 0},s.prototype.counter=function(){this.s.counter&&this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML("beforeend",'<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.items.length+"</span></div>")},s.prototype.addHtml=function(e){var t=null,s;if(this.s.dynamic?t=this.s.dynamicEl[e].subHtml:(s=this.items[e],t=s.getAttribute("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!t&&(t=s.getAttribute("title"))&&s.querySelector("img")&&(t=s.querySelector("img").getAttribute("alt"))),void 0!==t&&null!==t){var i=t.substring(0,1);"."!==i&&"#"!==i||(t=this.s.subHtmlSelectorRelative&&!this.s.dynamic?s.querySelector(t).innerHTML:document.querySelector(t).innerHTML)}else t="";".lg-sub-html"===this.s.appendSubHtmlTo?this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML=t:this.___slide[e].insertAdjacentHTML("beforeend",t),void 0!==t&&null!==t&&(""===t?l.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo),"lg-empty-html"):l.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo),"lg-empty-html")),l.default.trigger(this.el,"onAfterAppendSubHtml",{index:e})},s.prototype.preload=function(e){var t=1,s=1;for(t=1;t<=this.s.preload&&!(t>=this.items.length-e);t++)this.loadContent(e+t,!1,0);for(s=1;s<=this.s.preload&&!(e-s<0);s++)this.loadContent(e-s,!1,0)},s.prototype.loadContent=function(e,t,s){var i=this,o=!1,r,d,n,a,u,c,g=function e(t){for(var s=[],l=[],i=0;i<t.length;i++){var o=t[i].split(" ");""===o[0]&&o.splice(0,1),l.push(o[0]),s.push(o[1])}for(var r=window.innerWidth,n=0;n<s.length;n++)if(parseInt(s[n],10)>r){d=l[n];break}};if(i.s.dynamic){if(i.s.dynamicEl[e].poster&&(o=!0,n=i.s.dynamicEl[e].poster),c=i.s.dynamicEl[e].html,d=i.s.dynamicEl[e].src,i.s.dynamicEl[e].responsive){g(i.s.dynamicEl[e].responsive.split(","))}a=i.s.dynamicEl[e].srcset,u=i.s.dynamicEl[e].sizes}else{if(i.items[e].getAttribute("data-poster")&&(o=!0,n=i.items[e].getAttribute("data-poster")),c=i.items[e].getAttribute("data-html"),d=i.items[e].getAttribute("href")||i.items[e].getAttribute("data-src"),i.items[e].getAttribute("data-responsive")){g(i.items[e].getAttribute("data-responsive").split(","))}a=i.items[e].getAttribute("data-srcset"),u=i.items[e].getAttribute("data-sizes")}var f=!1;i.s.dynamic?i.s.dynamicEl[e].iframe&&(f=!0):"true"===i.items[e].getAttribute("data-iframe")&&(f=!0);var h=i.isVideo(d,e);if(!l.default.hasClass(i.___slide[e],"lg-loaded")){if(f)i.___slide[e].insertAdjacentHTML("afterbegin",'<div class="lg-video-cont" style="max-width:'+i.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+d+'"  allowfullscreen="true"></iframe></div></div>');else if(o){var m="";m=h&&h.youtube?"lg-has-youtube":h&&h.vimeo?"lg-has-vimeo":"lg-has-html5",i.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-video-cont '+m+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+n+'" /></div></div>')}else h?(i.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-video-cont "><div class="lg-video"></div></div>'),l.default.trigger(i.el,"hasVideo",{index:e,src:d,html:c})):i.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+d+'" /></div>');if(l.default.trigger(i.el,"onAferAppendSlide",{index:e}),r=i.___slide[e].querySelector(".lg-object"),u&&r.setAttribute("sizes",u),a){r.setAttribute("srcset",a);try{picturefill({elements:[r[0]]})}catch(e){console.error("Make sure you have included Picturefill version 2")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&i.addHtml(e),l.default.addClass(i.___slide[e],"lg-loaded")}l.default.on(i.___slide[e].querySelector(".lg-object"),"load.lg error.lg",function(){var t=0;s&&!l.default.hasClass(document.body,"lg-from-hash")&&(t=s),setTimeout(function(){l.default.addClass(i.___slide[e],"lg-complete"),l.default.trigger(i.el,"onSlideItemLoad",{index:e,delay:s||0})},t)}),h&&h.html5&&!o&&l.default.addClass(i.___slide[e],"lg-complete"),!0===t&&(l.default.hasClass(i.___slide[e],"lg-complete")?i.preload(e):l.default.on(i.___slide[e].querySelector(".lg-object"),"load.lg error.lg",function(){i.preload(e)}))},s.prototype.slide=function(e,t,s){for(var i=0,o=0;o<this.___slide.length;o++)if(l.default.hasClass(this.___slide[o],"lg-current")){i=o;break}var r=this;if(!r.lGalleryOn||i!==e){var d=this.___slide.length,n=r.lGalleryOn?this.s.speed:0,a=!1,u=!1;if(!r.lgBusy){if(this.s.download){var c;c=r.s.dynamic?!1!==r.s.dynamicEl[e].downloadUrl&&(r.s.dynamicEl[e].downloadUrl||r.s.dynamicEl[e].src):"false"!==r.items[e].getAttribute("data-download-url")&&(r.items[e].getAttribute("data-download-url")||r.items[e].getAttribute("href")||r.items[e].getAttribute("data-src")),c?(document.getElementById("lg-download").setAttribute("href",c),l.default.removeClass(r.outer,"lg-hide-download")):l.default.addClass(r.outer,"lg-hide-download")}if(l.default.trigger(r.el,"onBeforeSlide",{prevIndex:i,index:e,fromTouch:t,fromThumb:s}),r.lgBusy=!0,clearTimeout(r.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){r.addHtml(e)},n),this.arrowDisable(e),t){var g=e-1,f=e+1;0===e&&i===d-1?(f=0,g=d-1):e===d-1&&0===i&&(f=0,g=d-1),l.default.removeClass(r.outer.querySelector(".lg-prev-slide"),"lg-prev-slide"),l.default.removeClass(r.outer.querySelector(".lg-current"),"lg-current"),l.default.removeClass(r.outer.querySelector(".lg-next-slide"),"lg-next-slide"),l.default.addClass(r.___slide[g],"lg-prev-slide"),l.default.addClass(r.___slide[f],"lg-next-slide"),l.default.addClass(r.___slide[e],"lg-current")}else{l.default.addClass(r.outer,"lg-no-trans");for(var h=0;h<this.___slide.length;h++)l.default.removeClass(this.___slide[h],"lg-prev-slide"),l.default.removeClass(this.___slide[h],"lg-next-slide");e<i?(u=!0,0!==e||i!==d-1||s||(u=!1,a=!0)):e>i&&(a=!0,e!==d-1||0!==i||s||(u=!0,a=!1)),u?(l.default.addClass(this.___slide[e],"lg-prev-slide"),l.default.addClass(this.___slide[i],"lg-next-slide")):a&&(l.default.addClass(this.___slide[e],"lg-next-slide"),l.default.addClass(this.___slide[i],"lg-prev-slide")),setTimeout(function(){l.default.removeClass(r.outer.querySelector(".lg-current"),"lg-current"),l.default.addClass(r.___slide[e],"lg-current"),l.default.removeClass(r.outer,"lg-no-trans")},50)}r.lGalleryOn?(setTimeout(function(){r.loadContent(e,!0,0)},this.s.speed+50),setTimeout(function(){r.lgBusy=!1,l.default.trigger(r.el,"onAfterSlide",{prevIndex:i,index:e,fromTouch:t,fromThumb:s})},this.s.speed)):(r.loadContent(e,!0,r.s.backdropDuration),r.lgBusy=!1,l.default.trigger(r.el,"onAfterSlide",{prevIndex:i,index:e,fromTouch:t,fromThumb:s})),r.lGalleryOn=!0,this.s.counter&&document.getElementById("lg-counter-current")&&(document.getElementById("lg-counter-current").innerHTML=e+1)}}},s.prototype.goToNextSlide=function(e){var t=this;t.lgBusy||(t.index+1<t.___slide.length?(t.index++,l.default.trigger(t.el,"onBeforeNextSlide",{index:t.index}),t.slide(t.index,e,!1)):t.s.loop?(t.index=0,l.default.trigger(t.el,"onBeforeNextSlide",{index:t.index}),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(l.default.addClass(t.outer,"lg-right-end"),setTimeout(function(){l.default.removeClass(t.outer,"lg-right-end")},400)))},s.prototype.goToPrevSlide=function(e){var t=this;t.lgBusy||(t.index>0?(t.index--,l.default.trigger(t.el,"onBeforePrevSlide",{index:t.index,fromTouch:e}),t.slide(t.index,e,!1)):t.s.loop?(t.index=t.items.length-1,l.default.trigger(t.el,"onBeforePrevSlide",{index:t.index,fromTouch:e}),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(l.default.addClass(t.outer,"lg-left-end"),setTimeout(function(){l.default.removeClass(t.outer,"lg-left-end")},400)))},s.prototype.keyPress=function(){var e=this;this.items.length>1&&l.default.on(window,"keyup.lg",function(t){e.items.length>1&&(37===t.keyCode&&(t.preventDefault(),e.goToPrevSlide()),39===t.keyCode&&(t.preventDefault(),e.goToNextSlide()))}),l.default.on(window,"keydown.lg",function(t){!0===e.s.escKey&&27===t.keyCode&&(t.preventDefault(),l.default.hasClass(e.outer,"lg-thumb-open")?l.default.removeClass(e.outer,"lg-thumb-open"):e.destroy())})},s.prototype.arrow=function(){var e=this;l.default.on(this.outer.querySelector(".lg-prev"),"click.lg",function(){e.goToPrevSlide()}),l.default.on(this.outer.querySelector(".lg-next"),"click.lg",function(){e.goToNextSlide()})},s.prototype.arrowDisable=function(e){if(!this.s.loop&&this.s.hideControlOnEnd){var t=this.outer.querySelector(".lg-next"),s=this.outer.querySelector(".lg-prev");e+1<this.___slide.length?(t.removeAttribute("disabled"),l.default.removeClass(t,"disabled")):(t.setAttribute("disabled","disabled"),l.default.addClass(t,"disabled")),e>0?(s.removeAttribute("disabled"),l.default.removeClass(s,"disabled")):(t.setAttribute("disabled","disabled"),l.default.addClass(t,"disabled"))}},s.prototype.setTranslate=function(e,t,s){this.s.useLeft?e.style.left=t:l.default.setVendor(e,"Transform","translate3d("+t+"px, "+s+"px, 0px)")},s.prototype.touchMove=function(e,t){var s=t-e;Math.abs(s)>15&&(l.default.addClass(this.outer,"lg-dragging"),this.setTranslate(this.___slide[this.index],s,0),this.setTranslate(document.querySelector(".lg-prev-slide"),-this.___slide[this.index].clientWidth+s,0),this.setTranslate(document.querySelector(".lg-next-slide"),this.___slide[this.index].clientWidth+s,0))},s.prototype.touchEnd=function(e){var t=this;"lg-slide"!==t.s.mode&&l.default.addClass(t.outer,"lg-slide");for(var s=0;s<this.___slide.length;s++)l.default.hasClass(this.___slide[s],"lg-current")||l.default.hasClass(this.___slide[s],"lg-prev-slide")||l.default.hasClass(this.___slide[s],"lg-next-slide")||(this.___slide[s].style.opacity="0");setTimeout(function(){l.default.removeClass(t.outer,"lg-dragging"),e<0&&Math.abs(e)>t.s.swipeThreshold?t.goToNextSlide(!0):e>0&&Math.abs(e)>t.s.swipeThreshold?t.goToPrevSlide(!0):Math.abs(e)<5&&l.default.trigger(t.el,"onSlideClick");for(var s=0;s<t.___slide.length;s++)t.___slide[s].removeAttribute("style")}),setTimeout(function(){l.default.hasClass(t.outer,"lg-dragging")||"lg-slide"===t.s.mode||l.default.removeClass(t.outer,"lg-slide")},t.s.speed+100)},s.prototype.enableSwipe=function(){var e=this,t=0,s=0,i=!1;if(e.s.enableSwipe&&e.isTouch&&e.doCss()){for(var o=0;o<e.___slide.length;o++)l.default.on(e.___slide[o],"touchstart.lg",function(s){l.default.hasClass(e.outer,"lg-zoomed")||e.lgBusy||(s.preventDefault(),e.manageSwipeClass(),t=s.targetTouches[0].pageX)});for(var r=0;r<e.___slide.length;r++)l.default.on(e.___slide[r],"touchmove.lg",function(o){l.default.hasClass(e.outer,"lg-zoomed")||(o.preventDefault(),s=o.targetTouches[0].pageX,e.touchMove(t,s),i=!0)});for(var d=0;d<e.___slide.length;d++)l.default.on(e.___slide[d],"touchend.lg",function(){l.default.hasClass(e.outer,"lg-zoomed")||(i?(i=!1,e.touchEnd(s-t)):l.default.trigger(e.el,"onSlideClick"))})}},s.prototype.enableDrag=function(){var e=this,t=0,s=0,i=!1,o=!1;if(e.s.enableDrag&&!e.isTouch&&e.doCss()){for(var r=0;r<e.___slide.length;r++)l.default.on(e.___slide[r],"mousedown.lg",function(s){l.default.hasClass(e.outer,"lg-zoomed")||(l.default.hasClass(s.target,"lg-object")||l.default.hasClass(s.target,"lg-video-play"))&&(s.preventDefault(),e.lgBusy||(e.manageSwipeClass(),t=s.pageX,i=!0,e.outer.scrollLeft+=1,e.outer.scrollLeft-=1,l.default.removeClass(e.outer,"lg-grab"),l.default.addClass(e.outer,"lg-grabbing"),l.default.trigger(e.el,"onDragstart")))});l.default.on(window,"mousemove.lg",function(r){i&&(o=!0,s=r.pageX,e.touchMove(t,s),l.default.trigger(e.el,"onDragmove"))}),l.default.on(window,"mouseup.lg",function(r){o?(o=!1,e.touchEnd(s-t),l.default.trigger(e.el,"onDragend")):(l.default.hasClass(r.target,"lg-object")||l.default.hasClass(r.target,"lg-video-play"))&&l.default.trigger(e.el,"onSlideClick"),i&&(i=!1,l.default.removeClass(e.outer,"lg-grabbing"),l.default.addClass(e.outer,"lg-grab"))})}},s.prototype.manageSwipeClass=function(){var e=this.index+1,t=this.index-1,s=this.___slide.length;this.s.loop&&(0===this.index?t=s-1:this.index===s-1&&(e=0));for(var i=0;i<this.___slide.length;i++)l.default.removeClass(this.___slide[i],"lg-next-slide"),l.default.removeClass(this.___slide[i],"lg-prev-slide");t>-1&&l.default.addClass(this.___slide[t],"lg-prev-slide"),l.default.addClass(this.___slide[e],"lg-next-slide")},s.prototype.mousewheel=function(){var e=this;l.default.on(e.outer,"mousewheel.lg",function(t){t.deltaY&&(t.deltaY>0?e.goToPrevSlide():e.goToNextSlide(),t.preventDefault())})},s.prototype.closeGallery=function(){var e=this,t=!1;l.default.on(this.outer.querySelector(".lg-close"),"click.lg",function(){e.destroy()}),e.s.closable&&(l.default.on(e.outer,"mousedown.lg",function(e){t=!!(l.default.hasClass(e.target,"lg-outer")||l.default.hasClass(e.target,"lg-item")||l.default.hasClass(e.target,"lg-img-wrap"))}),l.default.on(e.outer,"mouseup.lg",function(s){(l.default.hasClass(s.target,"lg-outer")||l.default.hasClass(s.target,"lg-item")||l.default.hasClass(s.target,"lg-img-wrap")&&t)&&(l.default.hasClass(e.outer,"lg-dragging")||e.destroy())}))},s.prototype.destroy=function(e){var t=this;if(e||l.default.trigger(t.el,"onBeforeClose"),document.body.scrollTop=t.prevScrollTop,document.documentElement.scrollTop=t.prevScrollTop,e){if(!t.s.dynamic)for(var s=0;s<this.items.length;s++)l.default.off(this.items[s],".lg"),l.default.off(this.items[s],".lgcustom");var i=t.el.getAttribute("lg-uid");delete window.lgData[i],t.el.removeAttribute("lg-uid")}l.default.off(this.el,".lgtm");for(var o in window.lgModules)t.modules[o]&&t.modules[o].destroy(e);this.lGalleryOn=!1,clearTimeout(t.hideBartimeout),this.hideBartimeout=!1,l.default.off(window,".lg"),l.default.removeClass(document.body,"lg-on"),l.default.removeClass(document.body,"lg-from-hash"),t.outer&&l.default.removeClass(t.outer,"lg-visible"),l.default.removeClass(document.querySelector(".lg-backdrop"),"in"),setTimeout(function(){try{t.outer&&t.outer.parentNode.removeChild(t.outer),document.querySelector(".lg-backdrop")&&document.querySelector(".lg-backdrop").parentNode.removeChild(document.querySelector(".lg-backdrop")),e||l.default.trigger(t.el,"onCloseAfter")}catch(e){}},t.s.backdropDuration+50)},window.lightGallery=function(e,t){if(e)try{if(e.getAttribute("lg-uid"))try{window.lgData[e.getAttribute("lg-uid")].init()}catch(e){console.error("lightGallery has not initiated properly")}else{var l="lg"+window.lgData.uid++;window.lgData[l]=new s(e,t),e.setAttribute("lg-uid",l)}}catch(e){console.error("lightGallery has not initiated properly")}}})},{"./lg-utils":1}]},{},[2])(2)});
/*
* @Author: xzhih
* @Date:   2018-11-04 23:25:09
* @Last Modified by:   xzhih
* @Last Modified time: 2018-12-04 04:43:06
* 在非 service workers 场景下
*/

// 保存搜索数据
var keepSearchData = function (siteRoot) {
    fetch(siteRoot + 'searchData.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(resData) {
        localStorage.setItem('searchData', JSON.stringify(resData));
    })
}

// 检查和获取搜索数据
var checkAndGetData = function (siteRoot) {
    fetch(siteRoot + 'searchVersion.txt?t=' + (+new Date()))
    .then(function(response) {
        return response.text();
    })
    .then(function(resVersion) {
        if (localStorage.getItem('searchVersion') !== resVersion) {
            localStorage.setItem('searchVersion', resVersion);
            keepSearchData(siteRoot)
        }
    })
}

// 监听搜索
var searchFunc = function(siteRoot) {
    checkAndGetData(siteRoot)
    var localSearchData = localStorage.getItem("searchData");
    var datas = JSON.parse(localSearchData);
    var input = document.getElementById("local-search-input");
    if (!input) return;
    var resultContent = document.getElementById("local-search-result");
    input.addEventListener("input", function() {
        if (typeof(localSearchData) !== 'string') {
            localSearchData = localStorage.getItem("searchData");
            datas = JSON.parse(localSearchData);
        }
        printRs(this, datas, resultContent)
    });
};

// 监听搜索(SW)
var searchFuncSW = function(siteRoot) {
    fetch(siteRoot + 'searchData.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(resData) {
        var localSearchData = JSON.stringify(resData);
        var datas = JSON.parse(localSearchData);
        var input = document.getElementById("local-search-input");
        if (!input) return;
        var resultContent = document.getElementById("local-search-result");
        input.addEventListener("input", function() {
            printRs(this, datas, resultContent)
        });
    });
};

// 打印结果
var printRs = function (input, datas, resultContent) {
    var str = '<ul class="search-result-list">';
    var keywords = input.value.trim().toLowerCase().split(/[\s\-]+/);
    resultContent.innerHTML = "";
    if (input.value.trim().length <= 0) {
        return;
    }
    datas.forEach(function(data) {
        var isMatch = true;
        var content_index = [];
        if (!data.title || data.title.trim() === "") {
            data.title = "Untitled";
        }
        var data_title = data.title.trim().toLowerCase();
        var data_content = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
        var data_url = data.url;
        var index_title = -1;
        var index_content = -1;
        var first_occur = -1;
        if (data_content !== "") {
            keywords.forEach(function(keyword, i) {
                index_title = data_title.indexOf(keyword);
                index_content = data_content.indexOf(keyword);
                if (index_title < 0 && index_content < 0) {
                    isMatch = false;
                } else {
                    if (index_content < 0) {
                        index_content = 0;
                    }
                    if (i == 0) {
                        first_occur = index_content;
                    }
                }
            });
        } else {
            isMatch = false;
        }
        if (isMatch) {
            str += "<li><a href='" + data_url + "' class='search-result-title'>" + data_title + "</a>";
            var content = data.content.trim().replace(/<[^>]+>/g, "");
            if (first_occur >= 0) {
                var start = first_occur - 20;
                var end = first_occur + 80;
                if (start < 0) {
                    start = 0;
                }
                if (start == 0) {
                    end = 100;
                }
                if (end > content.length) {
                    end = content.length;
                }
                var match_content = content.substr(start, end);
                keywords.forEach(function(keyword) {
                    var regS = new RegExp(keyword, "gi");
                    match_content = match_content.replace(regS, '<em class="search-keyword">' + keyword + "</em>");
                });
                str += '<p class="search-result">' + match_content + "...</p>";
            }
            str += "</li>";
        }
    });
    str += "</ul>";
    resultContent.innerHTML = str;
}
/*
* @Author: xzhih
* @Date:   2018-11-04 23:25:09
* @Last Modified by:   xzhih
* @Last Modified time: 2018-12-04 04:46:50
*/
/*! smooth-scroll v15.1.0 | (c) 2018 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;--t>=0&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if("function"==typeof window.CustomEvent)return!1;e.prototype=window.Event.prototype,window.CustomEvent=e})(),(function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),a=Math.max(0,16-(o-e)),r=window.setTimeout((function(){t(o+a)}),a);return e=o+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){return"querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype},o=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},a=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)},r=function(t){return parseInt(e.getComputedStyle(t).height,10)},i=function(e){var t;try{t=decodeURIComponent(e)}catch(n){t=e}return t},u=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===a&&t>=48&&t<=57||1===a&&t>=48&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(a):"\\"+n.charAt(a)}var u;try{u=decodeURIComponent("#"+r)}catch(e){u="#"+r}return u},c=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},s=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},l=function(t,n,o,a){var r=0;if(t.offsetParent)do{r+=t.offsetTop,t=t.offsetParent}while(t);return r=Math.max(r-n-o,0),a&&(r=Math.min(r,s()-e.innerHeight)),r},m=function(e){return e?r(e)+e.offsetTop:0},d=function(e,t){var n=t.speedAsDuration?t.speed:Math.abs(e/1e3*t.speed);return t.durationMax&&n>t.durationMax?t.durationMax:t.durationMin&&n<t.durationMin?t.durationMin:n},f=function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||e.pageYOffset,history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}},h=function(e,t,n){t||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id)},p=function(t,n,o){0===t&&document.body.focus(),o||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},g=function(t,n,o,a){if(n.emitEvents&&"function"==typeof e.CustomEvent){var r=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:a}});document.dispatchEvent(r)}};return function(r,y){var v,w,E,S,b,A,O={};O.cancelScroll=function(e){cancelAnimationFrame(A),A=null,e||g("scrollCancel",v)},O.animateScroll=function(n,a,r){var i=o(v||t,r||{}),u="[object Number]"===Object.prototype.toString.call(n),f=u||!n.tagName?null:n;if(u||f){var y=e.pageYOffset;i.header&&!S&&(S=document.querySelector(i.header));var w,E,b,C=m(S),I=u?n:l(f,C,parseInt("function"==typeof i.offset?i.offset(n,a):i.offset,10),i.clip),q=I-y,M=s(),F=0,L=d(q,i),x=function(t,o){var r=e.pageYOffset;if(t==o||r==o||(y<o&&e.innerHeight+r)>=M)return O.cancelScroll(!0),p(n,o,u),g("scrollStop",i,n,a),w=null,A=null,!0},H=function(t){w||(w=t),F+=t-w,E=F/parseInt(L,10),E=E>1?1:E,b=y+q*c(i,E),e.scrollTo(0,Math.floor(b)),x(b,I)||(A=e.requestAnimationFrame(H),w=t)};0===e.pageYOffset&&e.scrollTo(0,0),h(n,u,i),g("scrollStart",i,n,a),O.cancelScroll(!0),e.requestAnimationFrame(H)}};var C=function(t){if(!a()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&"closest"in t.target&&(E=t.target.closest(r))&&"a"===E.tagName.toLowerCase()&&!t.target.closest(v.ignore)&&E.hostname===e.location.hostname&&E.pathname===e.location.pathname&&/#/.test(E.href)){var n=u(i(E.hash)),o=v.topOnEmptyHash&&"#"===n?document.documentElement:document.querySelector(n);o=o||"#top"!==n?o:document.documentElement,o&&(t.preventDefault(),f(v),O.animateScroll(o,E))}},I=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(v)){var t=history.state.anchor;t&&0!==t&&!(t=document.querySelector(u(i(history.state.anchor))))||O.animateScroll(t,null,{updateURL:!1})}};return O.destroy=function(){v&&(document.removeEventListener("click",C,!1),e.removeEventListener("popstate",I,!1),O.cancelScroll(),v=null,w=null,E=null,S=null,b=null,A=null)},O.init=function(a){if(!n())throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";O.destroy(),v=o(t,a||{}),S=v.header?document.querySelector(v.header):null,document.addEventListener("click",C,!1),v.updateURL&&v.popstate&&e.addEventListener("popstate",I,!1)},O.init(y),O}}));

// 锚点滚动
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    easing: 'easeInOutCubic',
    speedAsDuration: true,
    clip: true,
    updateURL: true,
    popstate: true,
    ignore: '.subscribe-button, .search-overlay-close'
})

// 阅读页面顶部进度条
var postProgressBar = function () {
    var progressBar = document.querySelector('progress')
    var header = document.querySelector('.floating-header')
    var title = document.querySelector('.post-full-title')
    var lastScrollY = window.scrollY
    var lastWindowHeight = window.innerHeight
    var ticking = false
    function onScroll() {
        lastScrollY = window.scrollY
        requestTick()
    }
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(update)
        }
        ticking = true
    }
    function update() {
        var rect = title.getBoundingClientRect()
        var trigger = rect.top + window.scrollY
        var triggerOffset = title.offsetHeight + 35
        var lastDocumentHeight = document.body.offsetHeight
        var progressMax = lastDocumentHeight - lastWindowHeight

        if (lastScrollY >= trigger + triggerOffset) {
            header.classList.add('floating-active')
        } else {
            header.classList.remove('floating-active')
        }
        progressBar.setAttribute('max', progressMax)
        progressBar.setAttribute('value', lastScrollY)
        ticking = false
    }
    window.addEventListener('scroll', onScroll, {passive: true})
    update()
}
postProgressBar()

// Toc
var tocBar = document.querySelector('.toc-bar ')
var tocOpen = document.querySelector('.toc-open')
var tocClose = document.querySelector('.toc-close')
var tocSwitch = document.querySelector('.toc-switch')
var tocMain = document.querySelector('.toc-main')
var tocWidth = window.getComputedStyle(tocMain).width.replace("px","")

if (window.screen.width >= '768' ) {
    tocBar.style.right = -tocWidth + 'px'
}

tocSwitch.addEventListener('click', function(){
    if (tocOpen.classList.contains('hide')) {
        if (window.screen.width >= '768' ) {
            tocBar.style.right = -tocWidth + 'px'
        } else {
            // 隐藏 toc
            tocBar.style.top = '100%'
        }
        tocClose.classList.add('hide')
        tocOpen.classList.remove('hide')
    } else {
        if (window.screen.width >= '768' ) {
            tocBar.style.right = 0
        } else {
            // 显示 toc
            tocBar.style.top = 0
        }
        tocOpen.classList.add('hide')
        tocClose.classList.remove('hide')
    }
});

// 移动设备下，点击关闭书签
var tocItem = document.querySelectorAll('.toc-link')
tocItem.forEach(function(toc) {
    toc.addEventListener('click', function(){
        if (window.screen.width < '768' ) {
            tocBar.style.top = '100%'
            tocClose.classList.add('hide')
            tocOpen.classList.remove('hide')
        }
    })
});
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if("function"==typeof window.CustomEvent)return;e.prototype=window.Event.prototype,window.CustomEvent=e}(),function(){for(var r=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),o=Math.max(0,16-(n-r)),i=window.setTimeout(function(){e(n+o)},o);return r=n+o,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),function(e,t){"function"==typeof define&&define.amd?define([],function(){return t(e)}):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)}("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,function(L){"use strict";var I={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},M=function(){var n={};return Array.prototype.forEach.call(arguments,function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}}),n},r=function(t){var n;try{n=decodeURIComponent(t)}catch(e){n=t}return n},a=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,i=-1,r="",a=n.charCodeAt(0);++i<o;){if(0===(t=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=1<=t&&t<=31||127==t||0===i&&48<=t&&t<=57||1===i&&48<=t&&t<=57&&45===a?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(i):"\\"+n.charAt(i)}var c;try{c=decodeURIComponent("#"+r)}catch(e){c="#"+r}return c},F=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},x=function(e){return e?(t=e,parseInt(L.getComputedStyle(t).height,10)+e.offsetTop):0;var t},H=function(e,t,n,o){if(t.emitEvents&&"function"==typeof L.CustomEvent){var i=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(i)}};return function(o,e){var A,i,C,O,q={cancelScroll:function(e){cancelAnimationFrame(O),O=null,e||H("scrollCancel",A)}};q.animateScroll=function(a,c,e){var t,n,o,i,r,s=M(A||I,e||{}),u="[object Number]"===Object.prototype.toString.call(a),l=u||!a.tagName?null:a;if(u||l){var d=L.pageYOffset;s.header&&!C&&(C=document.querySelector(s.header));var m,f,h,p=x(C),w=u?a:function(e,t,n,o){var i=0;if(e.offsetParent)for(;i+=e.offsetTop,e=e.offsetParent;);return i=Math.max(i-t-n,0),o&&(i=Math.min(i,F()-L.innerHeight)),i}(l,p,parseInt("function"==typeof s.offset?s.offset(a,c):s.offset,10),s.clip),g=w-d,y=F(),v=0,S=(o=g,r=(i=s).speedAsDuration?i.speed:Math.abs(o/1e3*i.speed),i.durationMax&&r>i.durationMax?i.durationMax:i.durationMin&&r<i.durationMin?i.durationMin:r),b=function(e,t){var n,o,i,r=L.pageYOffset;if(e==t||r==t||(d<t&&L.innerHeight+r)>=y)return q.cancelScroll(!0),o=t,i=u,0===(n=a)&&document.body.focus(),i||(n.focus(),document.activeElement!==n&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),L.scrollTo(0,o)),H("scrollStop",s,a,c),!(O=m=null)},E=function(e){var t,n,o;m||(m=e),f=(v+=e-m)/parseInt(S,10),h=d+g*(n=f=1<f?1:f,"easeInQuad"===(t=s).easing&&(o=n*n),"easeOutQuad"===t.easing&&(o=n*(2-n)),"easeInOutQuad"===t.easing&&(o=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===t.easing&&(o=n*n*n),"easeOutCubic"===t.easing&&(o=--n*n*n+1),"easeInOutCubic"===t.easing&&(o=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t.easing&&(o=n*n*n*n),"easeOutQuart"===t.easing&&(o=1- --n*n*n*n),"easeInOutQuart"===t.easing&&(o=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t.easing&&(o=n*n*n*n*n),"easeOutQuint"===t.easing&&(o=1+--n*n*n*n*n),"easeInOutQuint"===t.easing&&(o=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),t.customEasing&&(o=t.customEasing(n)),o||n),L.scrollTo(0,Math.floor(h)),b(h,w)||(O=L.requestAnimationFrame(E),m=e)};0===L.pageYOffset&&L.scrollTo(0,0),t=a,n=s,u||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:t.id},document.title,t===document.documentElement?"#top":"#"+t.id),H("scrollStart",s,a,c),q.cancelScroll(!0),L.requestAnimationFrame(E)}};var t=function(e){if(!("matchMedia"in L&&L.matchMedia("(prefers-reduced-motion)").matches)&&0===e.button&&!e.metaKey&&!e.ctrlKey&&"closest"in e.target&&(i=e.target.closest(o))&&"a"===i.tagName.toLowerCase()&&!e.target.closest(A.ignore)&&i.hostname===L.location.hostname&&i.pathname===L.location.pathname&&/#/.test(i.href)){var t=a(r(i.hash)),n=A.topOnEmptyHash&&"#"===t?document.documentElement:document.querySelector(t);(n=n||"#top"!==t?n:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=L.location.hash;t=t||L.pageYOffset,history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||L.pageYOffset},document.title,t||L.location.href)}}(A),q.animateScroll(n,i))}},n=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(A)){var t=history.state.anchor;t&&0!==t&&!(t=document.querySelector(a(r(history.state.anchor))))||q.animateScroll(t,null,{updateURL:!1})}};return q.destroy=function(){A&&(document.removeEventListener("click",t,!1),L.removeEventListener("popstate",n,!1),q.cancelScroll(),O=C=i=A=null)},q.init=function(e){if(!("querySelector"in document&&"addEventListener"in L&&"requestAnimationFrame"in L&&"closest"in L.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";q.destroy(),A=M(I,e||{}),C=A.header?document.querySelector(A.header):null,document.addEventListener("click",t,!1),A.updateURL&&A.popstate&&L.addEventListener("popstate",n,!1)},q.init(e),q}});var scroll=new SmoothScroll('a[href*="#"]',{speed:1e3,easing:"easeInOutCubic",speedAsDuration:!0,clip:!0,updateURL:!0,popstate:!0,ignore:".subscribe-button, .search-overlay-close"}),postProgressBar=function(){var o=document.querySelector("progress"),i=document.querySelector(".floating-header"),r=document.querySelector(".post-full-title"),a=window.scrollY,c=window.innerHeight,s=!1;function e(){var e=r.getBoundingClientRect().top+window.scrollY,t=r.offsetHeight+35,n=document.body.offsetHeight-c;e+t<=a?i.classList.add("floating-active"):i.classList.remove("floating-active"),o.setAttribute("max",n),o.setAttribute("value",a),s=!1}window.addEventListener("scroll",function(){a=window.scrollY,s||requestAnimationFrame(e),s=!0},{passive:!0}),e()};postProgressBar();var tocBar=document.querySelector(".toc-bar "),tocOpen=document.querySelector(".toc-open"),tocClose=document.querySelector(".toc-close"),tocSwitch=document.querySelector(".toc-switch"),tocMain=document.querySelector(".toc-main"),tocWidth=window.getComputedStyle(tocMain).width.replace("px","");"768"<=window.screen.width&&(tocBar.style.right=-tocWidth+"px"),tocSwitch.addEventListener("click",function(){tocOpen.classList.contains("hide")?("768"<=window.screen.width?tocBar.style.right=-tocWidth+"px":tocBar.style.top="100%",tocClose.classList.add("hide"),tocOpen.classList.remove("hide")):("768"<=window.screen.width?tocBar.style.right=0:tocBar.style.top=0,tocOpen.classList.add("hide"),tocClose.classList.remove("hide"))});var tocItem=document.querySelectorAll(".toc-link");tocItem.forEach(function(e){e.addEventListener("click",function(){window.screen.width<"768"&&(tocBar.style.top="100%",tocClose.classList.add("hide"),tocOpen.classList.remove("hide"))})});

var CACHE_NAME = "'+(+new Date())+'";
var urlsToCache = ["'+r+'"];

// 缓存
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache) {
			return cache.addAll(urlsToCache);
		})
		);
});

// 缓存更新
self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName) {
					if (cacheName !== CACHE_NAME) {
						return caches.delete(cacheName);
					}
				})
				);
		})
		);
});

// 捕获请求并返回缓存数据
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

/*!
 * Viewer.js v1.3.3
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-04-06T14:06:28.301Z
 */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(t=t||self).Viewer=i()}(this,function(){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s={backdrop:!0,button:!0,navbar:!0,title:!0,toolbar:!0,className:"",container:"body",filter:null,fullscreen:!0,initialViewIndex:0,inline:!1,interval:5e3,keyboard:!0,loading:!0,loop:!0,minWidth:200,minHeight:100,movable:!0,zoomable:!0,rotatable:!0,scalable:!0,toggleOnDblclick:!0,tooltip:!0,transition:!0,zIndex:2015,zIndexInline:0,zoomRatio:.1,minZoomRatio:.01,maxZoomRatio:100,url:"src",ready:null,show:null,shown:null,hide:null,hidden:null,view:null,viewed:null,zoom:null,zoomed:null},o="undefined"!=typeof window,a=o?window:{},r=o&&"ontouchstart"in a.document.documentElement,t=o&&"PointerEvent"in a,p="viewer",h="move",l="switch",c="zoom",m="".concat(p,"-active"),w="".concat(p,"-close"),b="".concat(p,"-fade"),y="".concat(p,"-fixed"),x="".concat(p,"-fullscreen"),u="".concat(p,"-fullscreen-exit"),k="".concat(p,"-hide"),e="".concat(p,"-hide-md-down"),d="".concat(p,"-hide-sm-down"),f="".concat(p,"-hide-xs-down"),g="".concat(p,"-in"),z="".concat(p,"-invisible"),v="".concat(p,"-loading"),D="".concat(p,"-move"),T="".concat(p,"-open"),E="".concat(p,"-show"),I="".concat(p,"-transition"),S="click",C="dblclick",L="dragstart",N="hidden",M="hide",R="keydown",Y="load",X=t?"pointerdown":r?"touchstart":"mousedown",q=t?"pointermove":r?"touchmove":"mousemove",F=t?"pointerup pointercancel":r?"touchend touchcancel":"mouseup",O="ready",W="resize",A="show",P="shown",H="transitionend",j="view",V="viewed",B="wheel",K="".concat(p,"Action"),U=/\s\s*/,Z=["zoom-in","zoom-out","one-to-one","reset","prev","play","next","rotate-left","rotate-right","flip-horizontal","flip-vertical"];function $(t){return"string"==typeof t}var _=Number.isNaN||a.isNaN;function G(t){return"number"==typeof t&&!_(t)}function J(t){return void 0===t}function Q(t){return"object"===i(t)&&null!==t}var tt=Object.prototype.hasOwnProperty;function it(t){if(!Q(t))return!1;try{var i=t.constructor,e=i.prototype;return i&&e&&tt.call(e,"isPrototypeOf")}catch(t){return!1}}function et(t){return"function"==typeof t}function nt(i,e){if(i&&et(e))if(Array.isArray(i)||G(i.length)){var t,n=i.length;for(t=0;t<n&&!1!==e.call(i,i[t],t,i);t+=1);}else Q(i)&&Object.keys(i).forEach(function(t){e.call(i,i[t],t,i)});return i}var st=Object.assign||function(e){for(var t=arguments.length,i=new Array(1<t?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return Q(e)&&0<i.length&&i.forEach(function(i){Q(i)&&Object.keys(i).forEach(function(t){e[t]=i[t]})}),e},ot=/^(?:width|height|left|top|marginLeft|marginTop)$/;function at(t,i){var e=t.style;nt(i,function(t,i){ot.test(i)&&G(t)&&(t+="px"),e[i]=t})}function rt(t,i){return t.classList?t.classList.contains(i):-1<t.className.indexOf(i)}function ht(t,i){if(i)if(G(t.length))nt(t,function(t){ht(t,i)});else if(t.classList)t.classList.add(i);else{var e=t.className.trim();e?e.indexOf(i)<0&&(t.className="".concat(e," ").concat(i)):t.className=i}}function lt(t,i){i&&(G(t.length)?nt(t,function(t){lt(t,i)}):t.classList?t.classList.remove(i):0<=t.className.indexOf(i)&&(t.className=t.className.replace(i,"")))}function ct(t,i,e){i&&(G(t.length)?nt(t,function(t){ct(t,i,e)}):e?ht(t,i):lt(t,i))}var ut=/([a-z\d])([A-Z])/g;function dt(t){return t.replace(ut,"$1-$2").toLowerCase()}function mt(t,i){return Q(t[i])?t[i]:t.dataset?t.dataset[i]:t.getAttribute("data-".concat(dt(i)))}function ft(t,i,e){Q(e)?t[i]=e:t.dataset?t.dataset[i]=e:t.setAttribute("data-".concat(dt(i)),e)}var gt=function(){var t=!1;if(o){var i=!1,e=function(){},n=Object.defineProperty({},"once",{get:function(){return t=!0,i},set:function(t){i=t}});a.addEventListener("test",e,n),a.removeEventListener("test",e,n)}return t}();function vt(e,t,n){var s=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=n;t.trim().split(U).forEach(function(t){if(!gt){var i=e.listeners;i&&i[t]&&i[t][n]&&(o=i[t][n],delete i[t][n],0===Object.keys(i[t]).length&&delete i[t],0===Object.keys(i).length&&delete e.listeners)}e.removeEventListener(t,o,s)})}function pt(o,t,a){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},h=a;t.trim().split(U).forEach(function(n){if(r.once&&!gt){var t=o.listeners,s=void 0===t?{}:t;h=function(){delete s[n][a],o.removeEventListener(n,h,r);for(var t=arguments.length,i=new Array(t),e=0;e<t;e++)i[e]=arguments[e];a.apply(o,i)},s[n]||(s[n]={}),s[n][a]&&o.removeEventListener(n,s[n][a],r),s[n][a]=h,o.listeners=s}o.addEventListener(n,h,r)})}function wt(t,i,e){var n;return et(Event)&&et(CustomEvent)?n=new CustomEvent(i,{detail:e,bubbles:!0,cancelable:!0}):(n=document.createEvent("CustomEvent")).initCustomEvent(i,!0,!0,e),t.dispatchEvent(n)}function bt(t){var i=t.rotate,e=t.scaleX,n=t.scaleY,s=t.translateX,o=t.translateY,a=[];G(s)&&0!==s&&a.push("translateX(".concat(s,"px)")),G(o)&&0!==o&&a.push("translateY(".concat(o,"px)")),G(i)&&0!==i&&a.push("rotate(".concat(i,"deg)")),G(e)&&1!==e&&a.push("scaleX(".concat(e,")")),G(n)&&1!==n&&a.push("scaleY(".concat(n,")"));var r=a.length?a.join(" "):"none";return{WebkitTransform:r,msTransform:r,transform:r}}var yt=a.navigator&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(a.navigator.userAgent);function xt(t,i){var e=document.createElement("img");if(t.naturalWidth&&!yt)return i(t.naturalWidth,t.naturalHeight),e;var n=document.body||document.documentElement;return e.onload=function(){i(e.width,e.height),yt||n.removeChild(e)},e.src=t.src,yt||(e.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",n.appendChild(e)),e}function kt(t){switch(t){case 2:return f;case 3:return d;case 4:return e;default:return""}}function zt(t,i){var e=t.pageX,n=t.pageY,s={endX:e,endY:n};return i?s:st({timeStamp:Date.now(),startX:e,startY:n},s)}var Dt={render:function(){this.initContainer(),this.initViewer(),this.initList(),this.renderViewer()},initContainer:function(){this.containerData={width:window.innerWidth,height:window.innerHeight}},initViewer:function(){var t,i=this.options,e=this.parent;i.inline&&(t={width:Math.max(e.offsetWidth,i.minWidth),height:Math.max(e.offsetHeight,i.minHeight)},this.parentData=t),!this.fulled&&t||(t=this.containerData),this.viewerData=st({},t)},renderViewer:function(){this.options.inline&&!this.fulled&&at(this.viewer,this.viewerData)},initList:function(){var o=this,t=this.element,a=this.options,i=this.list,r=[];nt(this.images,function(t,i){var e=t.src,n=t.alt||function(t){return $(t)?t.replace(/^.*\//,"").replace(/[?&#].*$/,""):""}(e),s=a.url;$(s)?s=t.getAttribute(s):et(s)&&(s=s.call(o,t)),(e||s)&&r.push("<li><img"+' src="'.concat(e||s,'"')+' role="button" data-viewer-action="view"'+' data-index="'.concat(i,'"')+' data-original-url="'.concat(s||e,'"')+' alt="'.concat(n,'"')+"></li>")}),i.innerHTML=r.join(""),this.items=i.getElementsByTagName("li"),nt(this.items,function(i){var t=i.firstElementChild;ft(t,"filled",!0),a.loading&&ht(i,v),pt(t,Y,function(t){a.loading&&lt(i,v),o.loadImage(t)},{once:!0})}),a.transition&&pt(t,V,function(){ht(i,I)},{once:!0})},renderList:function(t){var i=t||this.index,e=this.items[i].offsetWidth||30,n=e+1;at(this.list,st({width:n*this.length},bt({translateX:(this.viewerData.width-e)/2-n*i})))},resetList:function(){var t=this.list;t.innerHTML="",lt(t,I),at(t,bt({translateX:0}))},initImage:function(r){var t,h=this,l=this.options,i=this.image,e=this.viewerData,n=this.footer.offsetHeight,c=e.width,u=Math.max(e.height-n,n),d=this.imageData||{};this.imageInitializing={abort:function(){t.onload=null}},t=xt(i,function(t,i){var e=t/i,n=c,s=u;h.imageInitializing=!1,c<u*e?s=c/e:n=u*e;var o={naturalWidth:t,naturalHeight:i,aspectRatio:e,ratio:(n=Math.min(.9*n,t))/t,width:n,height:s=Math.min(.9*s,i),left:(c-n)/2,top:(u-s)/2},a=st({},o);l.rotatable&&(o.rotate=d.rotate||0,a.rotate=0),l.scalable&&(o.scaleX=d.scaleX||1,o.scaleY=d.scaleY||1,a.scaleX=1,a.scaleY=1),h.imageData=o,h.initialImageData=a,r&&r()})},renderImage:function(t){var i=this,e=this.image,n=this.imageData;if(at(e,st({width:n.width,height:n.height,marginLeft:n.left,marginTop:n.top},bt(n))),t)if((this.viewing||this.zooming)&&this.options.transition){var s=function(){i.imageRendering=!1,t()};this.imageRendering={abort:function(){vt(e,H,s)}},pt(e,H,s,{once:!0})}else t()},resetImage:function(){if(this.viewing||this.viewed){var t=this.image;this.viewing&&this.viewing.abort(),t.parentNode.removeChild(t),this.image=null}}},Tt={bind:function(){var t=this.options,i=this.viewer,e=this.canvas,n=this.element.ownerDocument;pt(i,S,this.onClick=this.click.bind(this)),pt(i,B,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),pt(i,L,this.onDragStart=this.dragstart.bind(this)),pt(e,X,this.onPointerDown=this.pointerdown.bind(this)),pt(n,q,this.onPointerMove=this.pointermove.bind(this)),pt(n,F,this.onPointerUp=this.pointerup.bind(this)),pt(n,R,this.onKeyDown=this.keydown.bind(this)),pt(window,W,this.onResize=this.resize.bind(this)),t.toggleOnDblclick&&pt(e,C,this.onDblclick=this.dblclick.bind(this))},unbind:function(){var t=this.options,i=this.viewer,e=this.canvas,n=this.element.ownerDocument;vt(i,S,this.onClick),vt(i,B,this.onWheel,{passive:!1,capture:!0}),vt(i,L,this.onDragStart),vt(e,X,this.onPointerDown),vt(n,q,this.onPointerMove),vt(n,F,this.onPointerUp),vt(n,R,this.onKeyDown),vt(window,W,this.onResize),t.toggleOnDblclick&&vt(e,C,this.onDblclick)}},Et={click:function(t){var i=t.target,e=this.options,n=this.imageData,s=mt(i,K);switch(r&&t.isTrusted&&i===this.canvas&&clearTimeout(this.clickCanvasTimeout),s){case"mix":this.played?this.stop():e.inline?this.fulled?this.exit():this.full():this.hide();break;case"hide":this.hide();break;case"view":this.view(mt(i,"index"));break;case"zoom-in":this.zoom(.1,!0);break;case"zoom-out":this.zoom(-.1,!0);break;case"one-to-one":this.toggle();break;case"reset":this.reset();break;case"prev":this.prev(e.loop);break;case"play":this.play(e.fullscreen);break;case"next":this.next(e.loop);break;case"rotate-left":this.rotate(-90);break;case"rotate-right":this.rotate(90);break;case"flip-horizontal":this.scaleX(-n.scaleX||-1);break;case"flip-vertical":this.scaleY(-n.scaleY||-1);break;default:this.played&&this.stop()}},dblclick:function(t){t.preventDefault(),this.viewed&&t.target===this.image&&(r&&t.isTrusted&&clearTimeout(this.doubleClickImageTimeout),this.toggle())},load:function(){var t=this;this.timeout&&(clearTimeout(this.timeout),this.timeout=!1);var i=this.element,e=this.options,n=this.image,s=this.index,o=this.viewerData;lt(n,z),e.loading&&lt(this.canvas,v),n.style.cssText="height:0;"+"margin-left:".concat(o.width/2,"px;")+"margin-top:".concat(o.height/2,"px;")+"max-width:none!important;position:absolute;width:0;",this.initImage(function(){ct(n,D,e.movable),ct(n,I,e.transition),t.renderImage(function(){t.viewed=!0,t.viewing=!1,et(e.viewed)&&pt(i,V,e.viewed,{once:!0}),wt(i,V,{originalImage:t.images[s],index:s,image:n})})})},loadImage:function(t){var o=t.target,i=o.parentNode,a=i.offsetWidth||30,r=i.offsetHeight||50,h=!!mt(o,"filled");xt(o,function(t,i){var e=t/i,n=a,s=r;a<r*e?h?n=r*e:s=a/e:h?s=a/e:n=r*e,at(o,st({width:n,height:s},bt({translateX:(a-n)/2,translateY:(r-s)/2})))})},keydown:function(t){var i=this.options;if(this.fulled&&i.keyboard)switch(t.keyCode||t.which||t.charCode){case 27:this.played?this.stop():i.inline?this.fulled&&this.exit():this.hide();break;case 32:this.played&&this.stop();break;case 37:this.prev(i.loop);break;case 38:t.preventDefault(),this.zoom(i.zoomRatio,!0);break;case 39:this.next(i.loop);break;case 40:t.preventDefault(),this.zoom(-i.zoomRatio,!0);break;case 48:case 49:t.ctrlKey&&(t.preventDefault(),this.toggle())}},dragstart:function(t){"img"===t.target.tagName.toLowerCase()&&t.preventDefault()},pointerdown:function(t){var i=this.options,e=this.pointers,n=t.buttons,s=t.button;if(!(!this.viewed||this.showing||this.viewing||this.hiding||G(n)&&1!==n||G(s)&&0!==s||t.ctrlKey)){t.preventDefault(),t.changedTouches?nt(t.changedTouches,function(t){e[t.identifier]=zt(t)}):e[t.pointerId||0]=zt(t);var o=!!i.movable&&h;1<Object.keys(e).length?o=c:"touch"!==t.pointerType&&"touchstart"!==t.type||!this.isSwitchable()||(o=l),!i.transition||o!==h&&o!==c||lt(this.image,I),this.action=o}},pointermove:function(t){var i=this.pointers,e=this.action;this.viewed&&e&&(t.preventDefault(),t.changedTouches?nt(t.changedTouches,function(t){st(i[t.identifier]||{},zt(t,!0))}):st(i[t.pointerId||0]||{},zt(t,!0)),this.change(t))},pointerup:function(t){var i,e=this,n=this.options,s=this.action,o=this.pointers;t.changedTouches?nt(t.changedTouches,function(t){i=o[t.identifier],delete o[t.identifier]}):(i=o[t.pointerId||0],delete o[t.pointerId||0]),s&&(t.preventDefault(),!n.transition||s!==h&&s!==c||ht(this.image,I),this.action=!1,r&&s!==c&&i&&Date.now()-i.timeStamp<500&&(clearTimeout(this.clickCanvasTimeout),clearTimeout(this.doubleClickImageTimeout),n.toggleOnDblclick&&this.viewed&&t.target===this.image?this.imageClicked?(this.imageClicked=!1,this.doubleClickImageTimeout=setTimeout(function(){wt(e.image,C)},50)):(this.imageClicked=!0,this.doubleClickImageTimeout=setTimeout(function(){e.imageClicked=!1},500)):(this.imageClicked=!1,n.backdrop&&"static"!==n.backdrop&&t.target===this.canvas&&(this.clickCanvasTimeout=setTimeout(function(){wt(e.canvas,S)},50)))))},resize:function(){var i=this;if(this.isShown&&!this.hiding&&(this.initContainer(),this.initViewer(),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){i.renderImage()}),this.played)){if(this.options.fullscreen&&this.fulled&&!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement))return void this.stop();nt(this.player.getElementsByTagName("img"),function(t){pt(t,Y,i.loadImage.bind(i),{once:!0}),wt(t,Y)})}},wheel:function(t){var i=this;if(this.viewed&&(t.preventDefault(),!this.wheeling)){this.wheeling=!0,setTimeout(function(){i.wheeling=!1},50);var e=Number(this.options.zoomRatio)||.1,n=1;t.deltaY?n=0<t.deltaY?1:-1:t.wheelDelta?n=-t.wheelDelta/120:t.detail&&(n=0<t.detail?1:-1),this.zoom(-n*e,!0,t)}}},It={show:function(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0],i=this.element,e=this.options;if(e.inline||this.showing||this.isShown||this.showing)return this;if(!this.ready)return this.build(),this.ready&&this.show(t),this;if(et(e.show)&&pt(i,A,e.show,{once:!0}),!1===wt(i,A)||!this.ready)return this;this.hiding&&this.transitioning.abort(),this.showing=!0,this.open();var n=this.viewer;if(lt(n,k),e.transition&&!t){var s=this.shown.bind(this);this.transitioning={abort:function(){vt(n,H,s),lt(n,g)}},ht(n,I),n.offsetWidth,pt(n,H,s,{once:!0}),ht(n,g)}else ht(n,g),this.shown();return this},hide:function(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0],i=this.element,e=this.options;if(e.inline||this.hiding||!this.isShown&&!this.showing)return this;if(et(e.hide)&&pt(i,M,e.hide,{once:!0}),!1===wt(i,M))return this;this.showing&&this.transitioning.abort(),this.hiding=!0,this.played?this.stop():this.viewing&&this.viewing.abort();var n=this.viewer;if(e.transition&&!t){var s=this.hidden.bind(this),o=function(){pt(n,H,s,{once:!0}),lt(n,g)};this.transitioning={abort:function(){this.viewed?vt(this.image,H,o):vt(n,H,s)}},this.viewed&&rt(this.image,I)?(pt(this.image,H,o,{once:!0}),this.zoomTo(0,!1,!1,!0)):o()}else lt(n,g),this.hidden();return this},view:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.options.initialViewIndex;if(t=Number(t)||0,!this.isShown)return this.index=t,this.show();if(this.hiding||this.played||t<0||t>=this.length||this.viewed&&t===this.index)return this;this.viewing&&this.viewing.abort();var i=this.element,n=this.options,s=this.title,o=this.canvas,a=this.items[t],r=a.querySelector("img"),h=mt(r,"originalUrl"),l=r.getAttribute("alt"),c=document.createElement("img");if(c.src=h,c.alt=l,et(n.view)&&pt(i,j,n.view,{once:!0}),!1===wt(i,j,{originalImage:this.images[t],index:t,image:c})||!this.isShown||this.hiding||this.played)return this;this.image=c,lt(this.items[this.index],m),ht(a,m),this.viewed=!1,this.index=t,this.imageData={},ht(c,z),n.loading&&ht(o,v),o.innerHTML="",o.appendChild(c),this.renderList(),s.innerHTML="";var u,d=function(){var t=e.imageData,i=Array.isArray(n.title)?n.title[1]:n.title;s.innerHTML=et(i)?i.call(e,c,t):"".concat(l," (").concat(t.naturalWidth," × ").concat(t.naturalHeight,")")};return pt(i,V,d,{once:!0}),this.viewing={abort:function(){vt(i,V,d),c.complete?this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort():(c.src="",vt(c,Y,u),this.timeout&&clearTimeout(this.timeout))}},c.complete?this.load():(pt(c,Y,u=this.load.bind(this),{once:!0}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){lt(c,z),e.timeout=!1},1e3)),this},prev:function(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0],i=this.index-1;return i<0&&(i=t?this.length-1:0),this.view(i),this},next:function(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0],i=this.length-1,e=this.index+1;return i<e&&(e=t?0:i),this.view(e),this},move:function(t,i){var e=this.imageData;return this.moveTo(J(t)?t:e.left+Number(t),J(i)?i:e.top+Number(i)),this},moveTo:function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t,e=this.imageData;if(t=Number(t),i=Number(i),this.viewed&&!this.played&&this.options.movable){var n=!1;G(t)&&(e.left=t,n=!0),G(i)&&(e.top=i,n=!0),n&&this.renderImage()}return this},zoom:function(t){var i=1<arguments.length&&void 0!==arguments[1]&&arguments[1],e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,n=this.imageData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(n.width*t/n.naturalWidth,i,e),this},zoomTo:function(t){var i=this,e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,s=3<arguments.length&&void 0!==arguments[3]&&arguments[3],o=this.element,a=this.options,r=this.pointers,h=this.imageData,l=h.width,c=h.height,u=h.left,d=h.top,m=h.naturalWidth,f=h.naturalHeight;if(G(t=Math.max(0,t))&&this.viewed&&!this.played&&(s||a.zoomable)){if(!s){var g=Math.max(.01,a.minZoomRatio),v=Math.min(100,a.maxZoomRatio);t=Math.min(Math.max(t,g),v)}n&&.95<t&&t<1.05&&(t=1);var p=m*t,w=f*t,b=p-l,y=w-c,x=l/m;if(et(a.zoom)&&pt(o,"zoom",a.zoom,{once:!0}),!1===wt(o,"zoom",{ratio:t,oldRatio:x,originalEvent:n}))return this;if(this.zooming=!0,n){var k=function(t){var i=t.getBoundingClientRect();return{left:i.left+(window.pageXOffset-document.documentElement.clientLeft),top:i.top+(window.pageYOffset-document.documentElement.clientTop)}}(this.viewer),z=r&&Object.keys(r).length?function(t){var n=0,s=0,o=0;return nt(t,function(t){var i=t.startX,e=t.startY;n+=i,s+=e,o+=1}),{pageX:n/=o,pageY:s/=o}}(r):{pageX:n.pageX,pageY:n.pageY};h.left-=b*((z.pageX-k.left-u)/l),h.top-=y*((z.pageY-k.top-d)/c)}else h.left-=b/2,h.top-=y/2;h.width=p,h.height=w,h.ratio=t,this.renderImage(function(){i.zooming=!1,et(a.zoomed)&&pt(o,"zoomed",a.zoomed,{once:!0}),wt(o,"zoomed",{ratio:t,oldRatio:x,originalEvent:n})}),e&&this.tooltip()}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t)),this},rotateTo:function(t){var i=this.imageData;return G(t=Number(t))&&this.viewed&&!this.played&&this.options.rotatable&&(i.rotate=t,this.renderImage()),this},scaleX:function(t){return this.scale(t,this.imageData.scaleY),this},scaleY:function(t){return this.scale(this.imageData.scaleX,t),this},scale:function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t,e=this.imageData;if(t=Number(t),i=Number(i),this.viewed&&!this.played&&this.options.scalable){var n=!1;G(t)&&(e.scaleX=t,n=!0),G(i)&&(e.scaleY=i,n=!0),n&&this.renderImage()}return this},play:function(){var i=this,t=0<arguments.length&&void 0!==arguments[0]&&arguments[0];if(!this.isShown||this.played)return this;var s=this.options,o=this.player,a=this.loadImage.bind(this),r=[],h=0,l=0;if(this.played=!0,this.onLoadWhenPlay=a,t&&this.requestFullscreen(),ht(o,E),nt(this.items,function(t,i){var e=t.querySelector("img"),n=document.createElement("img");n.src=mt(e,"originalUrl"),n.alt=e.getAttribute("alt"),h+=1,ht(n,b),ct(n,I,s.transition),rt(t,m)&&(ht(n,g),l=i),r.push(n),pt(n,Y,a,{once:!0}),o.appendChild(n)}),G(s.interval)&&0<s.interval){var e=function t(){i.playing=setTimeout(function(){lt(r[l],g),ht(r[l=(l+=1)<h?l:0],g),t()},s.interval)};1<h&&e()}return this},stop:function(){var i=this;if(!this.played)return this;var t=this.player;return this.played=!1,clearTimeout(this.playing),nt(t.getElementsByTagName("img"),function(t){vt(t,Y,i.onLoadWhenPlay)}),lt(t,E),t.innerHTML="",this.exitFullscreen(),this},full:function(){var t=this,i=this.options,e=this.viewer,n=this.image,s=this.list;return!this.isShown||this.played||this.fulled||!i.inline||(this.fulled=!0,this.open(),ht(this.button,u),i.transition&&(lt(s,I),this.viewed&&lt(n,I)),ht(e,y),e.setAttribute("style",""),at(e,{zIndex:i.zIndex}),this.initContainer(),this.viewerData=st({},this.containerData),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage(function(){i.transition&&setTimeout(function(){ht(n,I),ht(s,I)},0)})})),this},exit:function(){var t=this,i=this.options,e=this.viewer,n=this.image,s=this.list;return this.isShown&&!this.played&&this.fulled&&i.inline&&(this.fulled=!1,this.close(),lt(this.button,u),i.transition&&(lt(s,I),this.viewed&&lt(n,I)),lt(e,y),at(e,{zIndex:i.zIndexInline}),this.viewerData=st({},this.parentData),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage(function(){i.transition&&setTimeout(function(){ht(n,I),ht(s,I)},0)})})),this},tooltip:function(){var t=this,i=this.options,e=this.tooltipBox,n=this.imageData;return this.viewed&&!this.played&&i.tooltip&&(e.textContent="".concat(Math.round(100*n.ratio),"%"),this.tooltipping?clearTimeout(this.tooltipping):i.transition?(this.fading&&wt(e,H),ht(e,E),ht(e,b),ht(e,I),e.offsetWidth,ht(e,g)):ht(e,E),this.tooltipping=setTimeout(function(){i.transition?(pt(e,H,function(){lt(e,E),lt(e,b),lt(e,I),t.fading=!1},{once:!0}),lt(e,g),t.fading=!0):lt(e,E),t.tooltipping=!1},1e3)),this},toggle:function(){return 1===this.imageData.ratio?this.zoomTo(this.initialImageData.ratio,!0):this.zoomTo(1,!0),this},reset:function(){return this.viewed&&!this.played&&(this.imageData=st({},this.initialImageData),this.renderImage()),this},update:function(){var t=this.element,i=this.options,e=this.isImg;if(e&&!t.parentNode)return this.destroy();var s=[];if(nt(e?[t]:t.querySelectorAll("img"),function(t){i.filter?i.filter(t)&&s.push(t):s.push(t)}),!s.length)return this;if(this.images=s,this.length=s.length,this.ready){var o=[];if(nt(this.items,function(t,i){var e=t.querySelector("img"),n=s[i];n?n.src!==e.src&&o.push(i):o.push(i)}),at(this.list,{width:"auto"}),this.initList(),this.isShown)if(this.length){if(this.viewed){var n=o.indexOf(this.index);0<=n?(this.viewed=!1,this.view(Math.max(this.index-(n+1),0))):ht(this.items[this.index],m)}}else this.image=null,this.viewed=!1,this.index=0,this.imageData={},this.canvas.innerHTML="",this.title.innerHTML=""}else this.build();return this},destroy:function(){var t=this.element,i=this.options;return t[p]&&(this.destroyed=!0,this.ready?(this.played&&this.stop(),i.inline?(this.fulled&&this.exit(),this.unbind()):this.isShown?(this.viewing&&(this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort()),this.hiding&&this.transitioning.abort(),this.hidden()):this.showing&&(this.transitioning.abort(),this.hidden()),this.ready=!1,this.viewer.parentNode.removeChild(this.viewer)):i.inline&&(this.delaying?this.delaying.abort():this.initializing&&this.initializing.abort()),i.inline||vt(t,S,this.onStart),t[p]=void 0),this}},St={open:function(){var t=this.body;ht(t,T),t.style.paddingRight="".concat(this.scrollbarWidth+(parseFloat(this.initialBodyPaddingRight)||0),"px")},close:function(){var t=this.body;lt(t,T),t.style.paddingRight=this.initialBodyPaddingRight},shown:function(){var t=this.element,i=this.options;this.fulled=!0,this.isShown=!0,this.render(),this.bind(),this.showing=!1,et(i.shown)&&pt(t,P,i.shown,{once:!0}),!1!==wt(t,P)&&this.ready&&this.isShown&&!this.hiding&&this.view(this.index)},hidden:function(){var t=this.element,i=this.options;this.fulled=!1,this.viewed=!1,this.isShown=!1,this.close(),this.unbind(),ht(this.viewer,k),this.resetList(),this.resetImage(),this.hiding=!1,this.destroyed||(et(i.hidden)&&pt(t,N,i.hidden,{once:!0}),wt(t,N))},requestFullscreen:function(){var t=this.element.ownerDocument;if(this.fulled&&!(t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement||t.msFullscreenElement)){var i=t.documentElement;i.requestFullscreen?i.requestFullscreen():i.webkitRequestFullscreen?i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):i.mozRequestFullScreen?i.mozRequestFullScreen():i.msRequestFullscreen&&i.msRequestFullscreen()}},exitFullscreen:function(){var t=this.element.ownerDocument;this.fulled&&(t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement||t.msFullscreenElement)&&(t.exitFullscreen?t.exitFullscreen():t.webkitExitFullscreen?t.webkitExitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.msExitFullscreen&&t.msExitFullscreen())},change:function(t){var i=this.options,e=this.pointers,n=e[Object.keys(e)[0]],s=n.endX-n.startX,o=n.endY-n.startY;switch(this.action){case h:this.move(s,o);break;case c:this.zoom(function(t){var i=st({},t),h=[];return nt(t,function(r,t){delete i[t],nt(i,function(t){var i=Math.abs(r.startX-t.startX),e=Math.abs(r.startY-t.startY),n=Math.abs(r.endX-t.endX),s=Math.abs(r.endY-t.endY),o=Math.sqrt(i*i+e*e),a=(Math.sqrt(n*n+s*s)-o)/o;h.push(a)})}),h.sort(function(t,i){return Math.abs(t)<Math.abs(i)}),h[0]}(e),!1,t);break;case l:this.action="switched";var a=Math.abs(s);1<a&&a>Math.abs(o)&&(this.pointers={},1<s?this.prev(i.loop):s<-1&&this.next(i.loop))}nt(e,function(t){t.startX=t.endX,t.startY=t.endY})},isSwitchable:function(){var t=this.imageData,i=this.viewerData;return 1<this.length&&0<=t.left&&0<=t.top&&t.width<=i.width&&t.height<=i.height}},Ct=a.Viewer,Lt=function(){function e(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),!t||1!==t.nodeType)throw new Error("The first argument is required and must be an element.");this.element=t,this.options=st({},s,it(i)&&i),this.action=!1,this.fading=!1,this.fulled=!1,this.hiding=!1,this.imageClicked=!1,this.imageData={},this.index=this.options.initialViewIndex,this.isImg=!1,this.isShown=!1,this.length=0,this.played=!1,this.playing=!1,this.pointers={},this.ready=!1,this.showing=!1,this.timeout=!1,this.tooltipping=!1,this.viewed=!1,this.viewing=!1,this.wheeling=!1,this.zooming=!1,this.init()}return function(t,i,e){i&&n(t.prototype,i),e&&n(t,e)}(e,[{key:"init",value:function(){var e=this,t=this.element,n=this.options;if(!t[p]){t[p]=this;var i="img"===t.tagName.toLowerCase(),s=[];nt(i?[t]:t.querySelectorAll("img"),function(t){et(n.filter)?n.filter.call(e,t)&&s.push(t):s.push(t)}),this.isImg=i,this.length=s.length,this.images=s;var o=t.ownerDocument,a=o.body||o.documentElement;if(this.body=a,this.scrollbarWidth=window.innerWidth-o.documentElement.clientWidth,this.initialBodyPaddingRight=window.getComputedStyle(a).paddingRight,J(document.createElement(p).style.transition)&&(n.transition=!1),n.inline){var r=0,h=function(){var t;(r+=1)===e.length&&(e.initializing=!1,e.delaying={abort:function(){clearTimeout(t)}},t=setTimeout(function(){e.delaying=!1,e.build()},0))};this.initializing={abort:function(){nt(s,function(t){t.complete||vt(t,Y,h)})}},nt(s,function(t){t.complete?h():pt(t,Y,h,{once:!0})})}else pt(t,S,this.onStart=function(t){var i=t.target;"img"!==i.tagName.toLowerCase()||et(n.filter)&&!n.filter.call(e,i)||e.view(e.images.indexOf(i))})}}},{key:"build",value:function(){if(!this.ready){var t=this.element,h=this.options,i=t.parentNode,e=document.createElement("div");e.innerHTML='<div class="viewer-container" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list"></ul></div></div><div class="viewer-tooltip"></div><div role="button" class="viewer-button" data-viewer-action="mix"></div><div class="viewer-player"></div></div>';var n=e.querySelector(".".concat(p,"-container")),s=n.querySelector(".".concat(p,"-title")),o=n.querySelector(".".concat(p,"-toolbar")),a=n.querySelector(".".concat(p,"-navbar")),r=n.querySelector(".".concat(p,"-button")),l=n.querySelector(".".concat(p,"-canvas"));if(this.parent=i,this.viewer=n,this.title=s,this.toolbar=o,this.navbar=a,this.button=r,this.canvas=l,this.footer=n.querySelector(".".concat(p,"-footer")),this.tooltipBox=n.querySelector(".".concat(p,"-tooltip")),this.player=n.querySelector(".".concat(p,"-player")),this.list=n.querySelector(".".concat(p,"-list")),ht(s,h.title?kt(Array.isArray(h.title)?h.title[0]:h.title):k),ht(a,h.navbar?kt(h.navbar):k),ct(r,k,!h.button),h.backdrop&&(ht(n,"".concat(p,"-backdrop")),h.inline||"static"===h.backdrop||ft(l,K,"hide")),$(h.className)&&h.className&&h.className.split(U).forEach(function(t){ht(n,t)}),h.toolbar){var c=document.createElement("ul"),u=it(h.toolbar),d=Z.slice(0,3),m=Z.slice(7,9),f=Z.slice(9);u||ht(o,kt(h.toolbar)),nt(u?h.toolbar:Z,function(t,i){var e=u&&it(t),n=u?dt(i):t,s=e&&!J(t.show)?t.show:t;if(s&&(h.zoomable||-1===d.indexOf(n))&&(h.rotatable||-1===m.indexOf(n))&&(h.scalable||-1===f.indexOf(n))){var o=e&&!J(t.size)?t.size:t,a=e&&!J(t.click)?t.click:t,r=document.createElement("li");r.setAttribute("role","button"),ht(r,"".concat(p,"-").concat(n)),et(a)||ft(r,K,n),G(s)&&ht(r,kt(s)),-1!==["small","large"].indexOf(o)?ht(r,"".concat(p,"-").concat(o)):"play"===n&&ht(r,"".concat(p,"-large")),et(a)&&pt(r,S,a),c.appendChild(r)}}),o.appendChild(c)}else ht(o,k);if(!h.rotatable){var g=o.querySelectorAll('li[class*="rotate"]');ht(g,z),nt(g,function(t){o.appendChild(t)})}if(h.inline)ht(r,x),at(n,{zIndex:h.zIndexInline}),"static"===window.getComputedStyle(i).position&&at(i,{position:"relative"}),i.insertBefore(n,t.nextSibling);else{ht(r,w),ht(n,y),ht(n,b),ht(n,k),at(n,{zIndex:h.zIndex});var v=h.container;$(v)&&(v=t.ownerDocument.querySelector(v)),v||(v=this.body),v.appendChild(n)}h.inline&&(this.render(),this.bind(),this.isShown=!0),this.ready=!0,et(h.ready)&&pt(t,O,h.ready,{once:!0}),!1!==wt(t,O)?this.ready&&h.inline&&this.view(this.index):this.ready=!1}}}],[{key:"noConflict",value:function(){return window.Viewer=Ct,e}},{key:"setDefaults",value:function(t){st(s,it(t)&&t)}}]),e}();return st(Lt.prototype,Dt,Tt,Et,It,St),Lt});
/*!
  hey, [be]Lazy.js - v1.8.2 - 2016.10.25
  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
  (function(q,m){"function"===typeof define&&define.amd?define(m):"object"===typeof exports?module.exports=m():q.Blazy=m()})(this,function(){function q(b){var c=b._util;c.elements=E(b.options);c.count=c.elements.length;c.destroyed&&(c.destroyed=!1,b.options.container&&l(b.options.container,function(a){n(a,"scroll",c.validateT)}),n(window,"resize",c.saveViewportOffsetT),n(window,"resize",c.validateT),n(window,"scroll",c.validateT));m(b)}function m(b){for(var c=b._util,a=0;a<c.count;a++){var d=c.elements[a],e;a:{var g=d;e=b.options;var p=g.getBoundingClientRect();if(e.container&&y&&(g=g.closest(e.containerClass))){g=g.getBoundingClientRect();e=r(g,f)?r(p,{top:g.top-e.offset,right:g.right+e.offset,bottom:g.bottom+e.offset,left:g.left-e.offset}):!1;break a}e=r(p,f)}if(e||t(d,b.options.successClass))b.load(d),c.elements.splice(a,1),c.count--,a--}0===c.count&&b.destroy()}function r(b,c){return b.right>=c.left&&b.bottom>=c.top&&b.left<=c.right&&b.top<=c.bottom}function z(b,c,a){if(!t(b,a.successClass)&&(c||a.loadInvisible||0<b.offsetWidth&&0<b.offsetHeight))if(c=b.getAttribute(u)||b.getAttribute(a.src)){c=c.split(a.separator);var d=c[A&&1<c.length?1:0],e=b.getAttribute(a.srcset),g="img"===b.nodeName.toLowerCase(),p=(c=b.parentNode)&&"picture"===c.nodeName.toLowerCase();if(g||void 0===b.src){var h=new Image,w=function(){a.error&&a.error(b,"invalid");v(b,a.errorClass);k(h,"error",w);k(h,"load",f)},f=function(){g?p||B(b,d,e):b.style.backgroundImage='url("'+d+'")';x(b,a);k(h,"load",f);k(h,"error",w)};p&&(h=b,l(c.getElementsByTagName("source"),function(b){var c=a.srcset,e=b.getAttribute(c);e&&(b.setAttribute("srcset",e),b.removeAttribute(c))}));n(h,"error",w);n(h,"load",f);B(h,d,e)}else b.src=d,x(b,a)}else"video"===b.nodeName.toLowerCase()?(l(b.getElementsByTagName("source"),function(b){var c=a.src,e=b.getAttribute(c);e&&(b.setAttribute("src",e),b.removeAttribute(c))}),b.load(),x(b,a)):(a.error&&a.error(b,"missing"),v(b,a.errorClass))}function x(b,c){v(b,c.successClass);c.success&&c.success(b);b.removeAttribute(c.src);b.removeAttribute(c.srcset);l(c.breakpoints,function(a){b.removeAttribute(a.src)})}function B(b,c,a){a&&b.setAttribute("srcset",a);b.src=c}function t(b,c){return-1!==(" "+b.className+" ").indexOf(" "+c+" ")}function v(b,c){t(b,c)||(b.className+=" "+c)}function E(b){var c=[];b=b.root.querySelectorAll(b.selector);for(var a=b.length;a--;c.unshift(b[a]));return c}function C(b){f.bottom=(window.innerHeight||document.documentElement.clientHeight)+b;f.right=(window.innerWidth||document.documentElement.clientWidth)+b}function n(b,c,a){b.attachEvent?b.attachEvent&&b.attachEvent("on"+c,a):b.addEventListener(c,a,{capture:!1,passive:!0})}function k(b,c,a){b.detachEvent?b.detachEvent&&b.detachEvent("on"+c,a):b.removeEventListener(c,a,{capture:!1,passive:!0})}function l(b,c){if(b&&c)for(var a=b.length,d=0;d<a&&!1!==c(b[d],d);d++);}function D(b,c,a){var d=0;return function(){var e=+new Date;e-d<c||(d=e,b.apply(a,arguments))}}var u,f,A,y;return function(b){if(!document.querySelectorAll){var c=document.createStyleSheet();document.querySelectorAll=function(a,b,d,h,f){f=document.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(d=a.length;d--;){c.addRule(a[d],"k:v");for(h=f.length;h--;)f[h].currentStyle.k&&b.push(f[h]);c.removeRule(0)}return b}}var a=this,d=a._util={};d.elements=[];d.destroyed=!0;a.options=b||{};a.options.error=a.options.error||!1;a.options.offset=a.options.offset||100;a.options.root=a.options.root||document;a.options.success=a.options.success||!1;a.options.selector=a.options.selector||".b-lazy";a.options.separator=a.options.separator||"|";a.options.containerClass=a.options.container;a.options.container=a.options.containerClass?document.querySelectorAll(a.options.containerClass):!1;a.options.errorClass=a.options.errorClass||"b-error";a.options.breakpoints=a.options.breakpoints||!1;a.options.loadInvisible=a.options.loadInvisible||!1;a.options.successClass=a.options.successClass||"b-loaded";a.options.validateDelay=a.options.validateDelay||25;a.options.saveViewportOffsetDelay=a.options.saveViewportOffsetDelay||50;a.options.srcset=a.options.srcset||"data-srcset";a.options.src=u=a.options.src||"data-src";y=Element.prototype.closest;A=1<window.devicePixelRatio;f={};f.top=0-a.options.offset;f.left=0-a.options.offset;a.revalidate=function(){q(a)};a.load=function(a,b){var c=this.options;void 0===a.length?z(a,b,c):l(a,function(a){z(a,b,c)})};a.destroy=function(){var a=this._util;this.options.container&&l(this.options.container,function(b){k(b,"scroll",a.validateT)});k(window,"scroll",a.validateT);k(window,"resize",a.validateT);k(window,"resize",a.saveViewportOffsetT);a.count=0;a.elements.length=0;a.destroyed=!0};d.validateT=D(function(){m(a)},a.options.validateDelay,a);d.saveViewportOffsetT=D(function(){C(a.options.offset)},a.options.saveViewportOffsetDelay,a);C(a.options.offset);l(a.options.breakpoints,function(a){if(a.width>=window.screen.width)return u=a.src,!1});setTimeout(function(){q(a)})}});

// 保存搜索数据
var keepSearchData = function (siteRoot) {
    fetch(siteRoot + 'searchData.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(resData) {
        localStorage.setItem('searchData', JSON.stringify(resData));
    })
}

// 检查和获取搜索数据
var checkAndGetData = function (siteRoot) {
    fetch(siteRoot + 'searchVersion.txt?t=' + (+new Date()))
    .then(function(response) {
        return response.text();
    })
    .then(function(resVersion) {
        if (localStorage.getItem('searchVersion') !== resVersion) {
            localStorage.setItem('searchVersion', resVersion);
            keepSearchData(siteRoot)
        }
    })
}

// 监听搜索
var searchFunc = function(siteRoot) {
    checkAndGetData(siteRoot)
    var localSearchData = localStorage.getItem("searchData");
    var datas = JSON.parse(localSearchData);
    var input = document.getElementById("local-search-input");
    if (!input) return;
    var resultContent = document.getElementById("local-search-result");
    input.addEventListener("input", function() {
        if (typeof(localSearchData) !== 'string') {
            localSearchData = localStorage.getItem("searchData");
            datas = JSON.parse(localSearchData);
        }
        printRs(this, datas, resultContent)
    });
};

// 监听搜索(SW)
var searchFuncSW = function(siteRoot) {
    fetch(siteRoot + 'searchData.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(resData) {
        var localSearchData = JSON.stringify(resData);
        var datas = JSON.parse(localSearchData);
        var input = document.getElementById("local-search-input");
        if (!input) return;
        var resultContent = document.getElementById("local-search-result");
        input.addEventListener("input", function() {
            printRs(this, datas, resultContent)
        });
    });
};

// 打印结果
var printRs = function (input, datas, resultContent) {
    var str = '<ul class="search-result-list">';
    var keywords = input.value.trim().toLowerCase().split(/[\s\-]+/);
    resultContent.innerHTML = "";
    if (input.value.trim().length <= 0) {
        return;
    }
    datas.forEach(function(data) {
        var isMatch = true;
        var content_index = [];
        if (!data.title || data.title.trim() === "") {
            data.title = "Untitled";
        }
        var data_title = data.title.trim().toLowerCase();
        var data_content = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
        var data_url = data.url;
        var index_title = -1;
        var index_content = -1;
        var first_occur = -1;
        if (data_content !== "") {
            keywords.forEach(function(keyword, i) {
                index_title = data_title.indexOf(keyword);
                index_content = data_content.indexOf(keyword);
                if (index_title < 0 && index_content < 0) {
                    isMatch = false;
                } else {
                    if (index_content < 0) {
                        index_content = 0;
                    }
                    if (i == 0) {
                        first_occur = index_content;
                    }
                }
            });
        } else {
            isMatch = false;
        }
        if (isMatch) {
            str += "<li><a href='" + data_url + "' class='search-result-title'>" + data_title + "</a>";
            var content = data.content.trim().replace(/<[^>]+>/g, "");
            if (first_occur >= 0) {
                var start = first_occur - 20;
                var end = first_occur + 80;
                if (start < 0) {
                    start = 0;
                }
                if (start == 0) {
                    end = 100;
                }
                if (end > content.length) {
                    end = content.length;
                }
                var match_content = content.substr(start, end);
                keywords.forEach(function(keyword) {
                    var regS = new RegExp(keyword, "gi");
                    match_content = match_content.replace(regS, '<em class="search-keyword">' + keyword + "</em>");
                });
                str += '<p class="search-result">' + match_content + "...</p>";
            }
            str += "</li>";
        }
    });
    str += "</ul>";
    resultContent.innerHTML = str;
}
!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.Blazy=e()}(this,function(){function n(t){var e=t._util;e.elements=function(t){for(var e=[],o=(t=t.root.querySelectorAll(t.selector)).length;o--;e.unshift(t[o]));return e}(t.options),e.count=e.elements.length,e.destroyed&&(e.destroyed=!1,t.options.container&&m(t.options.container,function(t){h(t,"scroll",e.validateT)}),h(window,"resize",e.saveViewportOffsetT),h(window,"resize",e.validateT),h(window,"scroll",e.validateT)),s(t)}function s(t){for(var e=t._util,o=0;o<e.count;o++){var n,s=e.elements[o],r=s;n=t.options;var i=r.getBoundingClientRect();n.container&&b&&(r=r.closest(n.containerClass))?n=!!a(r=r.getBoundingClientRect(),w)&&a(i,{top:r.top-n.offset,right:r.right+n.offset,bottom:r.bottom+n.offset,left:r.left-n.offset}):n=a(i,w),(n||p(s,t.options.successClass))&&(t.load(s),e.elements.splice(o,1),e.count--,o--)}0===e.count&&t.destroy()}function a(t,e){return t.right>=e.left&&t.bottom>=e.top&&t.left<=e.right&&t.top<=e.bottom}function i(t,e,n){if(!p(t,n.successClass)&&(e||n.loadInvisible||0<t.offsetWidth&&0<t.offsetHeight))if(e=t.getAttribute(g)||t.getAttribute(n.src)){var o=(e=e.split(n.separator))[y&&1<e.length?1:0],s=t.getAttribute(n.srcset),r="img"===t.nodeName.toLowerCase(),i=(e=t.parentNode)&&"picture"===e.nodeName.toLowerCase();if(r||void 0===t.src){var a=new Image,c=function(){n.error&&n.error(t,"invalid"),d(t,n.errorClass),v(a,"error",c),v(a,"load",l)},l=function(){r?i||f(t,o,s):t.style.backgroundImage='url("'+o+'")',u(t,n),v(a,"load",l),v(a,"error",c)};i&&(a=t,m(e.getElementsByTagName("source"),function(t){var e=n.srcset,o=t.getAttribute(e);o&&(t.setAttribute("srcset",o),t.removeAttribute(e))})),h(a,"error",c),h(a,"load",l),f(a,o,s)}else t.src=o,u(t,n)}else"video"===t.nodeName.toLowerCase()?(m(t.getElementsByTagName("source"),function(t){var e=n.src,o=t.getAttribute(e);o&&(t.setAttribute("src",o),t.removeAttribute(e))}),t.load(),u(t,n)):(n.error&&n.error(t,"missing"),d(t,n.errorClass))}function u(e,t){d(e,t.successClass),t.success&&t.success(e),e.removeAttribute(t.src),e.removeAttribute(t.srcset),m(t.breakpoints,function(t){e.removeAttribute(t.src)})}function f(t,e,o){o&&t.setAttribute("srcset",o),t.src=e}function p(t,e){return-1!==(" "+t.className+" ").indexOf(" "+e+" ")}function d(t,e){p(t,e)||(t.className+=" "+e)}function c(t){w.bottom=(window.innerHeight||document.documentElement.clientHeight)+t,w.right=(window.innerWidth||document.documentElement.clientWidth)+t}function h(t,e,o){t.attachEvent?t.attachEvent&&t.attachEvent("on"+e,o):t.addEventListener(e,o,{capture:!1,passive:!0})}function v(t,e,o){t.detachEvent?t.detachEvent&&t.detachEvent("on"+e,o):t.removeEventListener(e,o,{capture:!1,passive:!0})}function m(t,e){if(t&&e)for(var o=t.length,n=0;n<o&&!1!==e(t[n],n);n++);}function l(e,o,n){var s=0;return function(){var t=+new Date;t-s<o||(s=t,e.apply(n,arguments))}}var g,w,y,b;return function(t){if(!document.querySelectorAll){var r=document.createStyleSheet();document.querySelectorAll=function(t,e,o,n,s){for(s=document.all,e=[],o=(t=t.replace(/\[for\b/gi,"[htmlFor").split(",")).length;o--;){for(r.addRule(t[o],"k:v"),n=s.length;n--;)s[n].currentStyle.k&&e.push(s[n]);r.removeRule(0)}return e}}var e=this,o=e._util={};o.elements=[],o.destroyed=!0,e.options=t||{},e.options.error=e.options.error||!1,e.options.offset=e.options.offset||100,e.options.root=e.options.root||document,e.options.success=e.options.success||!1,e.options.selector=e.options.selector||".b-lazy",e.options.separator=e.options.separator||"|",e.options.containerClass=e.options.container,e.options.container=!!e.options.containerClass&&document.querySelectorAll(e.options.containerClass),e.options.errorClass=e.options.errorClass||"b-error",e.options.breakpoints=e.options.breakpoints||!1,e.options.loadInvisible=e.options.loadInvisible||!1,e.options.successClass=e.options.successClass||"b-loaded",e.options.validateDelay=e.options.validateDelay||25,e.options.saveViewportOffsetDelay=e.options.saveViewportOffsetDelay||50,e.options.srcset=e.options.srcset||"data-srcset",e.options.src=g=e.options.src||"data-src",b=Element.prototype.closest,y=1<window.devicePixelRatio,(w={}).top=0-e.options.offset,w.left=0-e.options.offset,e.revalidate=function(){n(e)},e.load=function(t,e){var o=this.options;void 0===t.length?i(t,e,o):m(t,function(t){i(t,e,o)})},e.destroy=function(){var e=this._util;this.options.container&&m(this.options.container,function(t){v(t,"scroll",e.validateT)}),v(window,"scroll",e.validateT),v(window,"resize",e.validateT),v(window,"resize",e.saveViewportOffsetT),e.count=0,e.elements.length=0,e.destroyed=!0},o.validateT=l(function(){s(e)},e.options.validateDelay,e),o.saveViewportOffsetT=l(function(){c(e.options.offset)},e.options.saveViewportOffsetDelay,e),c(e.options.offset),m(e.options.breakpoints,function(t){if(t.width>=window.screen.width)return g=t.src,!1}),setTimeout(function(){n(e)})}});var keepSearchData=function(t){fetch(t+"searchData.json").then(function(t){return t.json()}).then(function(t){localStorage.setItem("searchData",JSON.stringify(t))})},checkAndGetData=function(e){fetch(e+"searchVersion.txt?t="+ +new Date).then(function(t){return t.text()}).then(function(t){localStorage.getItem("searchVersion")!==t&&(localStorage.setItem("searchVersion",t),keepSearchData(e))})},searchFunc=function(t){checkAndGetData(t);var e=localStorage.getItem("searchData"),o=JSON.parse(e),n=document.getElementById("local-search-input");if(n){var s=document.getElementById("local-search-result");n.addEventListener("input",function(){"string"!=typeof e&&(e=localStorage.getItem("searchData"),o=JSON.parse(e)),printRs(this,o,s)})}},searchFuncSW=function(t){fetch(t+"searchData.json").then(function(t){return t.json()}).then(function(t){var e=JSON.stringify(t),o=JSON.parse(e),n=document.getElementById("local-search-input");if(n){var s=document.getElementById("local-search-result");n.addEventListener("input",function(){printRs(this,o,s)})}})},printRs=function(t,e,o){var p='<ul class="search-result-list">',d=t.value.trim().toLowerCase().split(/[\s\-]+/);o.innerHTML="",t.value.trim().length<=0||(e.forEach(function(t){var o=!0;t.title&&""!==t.title.trim()||(t.title="Untitled");var n=t.title.trim().toLowerCase(),s=t.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),e=t.url,r=-1,i=-1,a=-1;if(""!==s?d.forEach(function(t,e){r=n.indexOf(t),i=s.indexOf(t),r<0&&i<0?o=!1:(i<0&&(i=0),0==e&&(a=i))}):o=!1,o){p+="<li><a href='"+e+"' class='search-result-title'>"+n+"</a>";var c=t.content.trim().replace(/<[^>]+>/g,"");if(0<=a){var l=a-20,u=a+80;l<0&&(l=0),0==l&&(u=100),u>c.length&&(u=c.length);var f=c.substr(l,u);d.forEach(function(t){var e=new RegExp(t,"gi");f=f.replace(e,'<em class="search-keyword">'+t+"</em>")}),p+='<p class="search-result">'+f+"...</p>"}p+="</li>"}}),p+="</ul>",o.innerHTML=p)};
/*!
  hey, [be]Lazy.js - v1.8.2 - 2016.10.25
  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
  (function(q,m){"function"===typeof define&&define.amd?define(m):"object"===typeof exports?module.exports=m():q.Blazy=m()})(this,function(){function q(b){var c=b._util;c.elements=E(b.options);c.count=c.elements.length;c.destroyed&&(c.destroyed=!1,b.options.container&&l(b.options.container,function(a){n(a,"scroll",c.validateT)}),n(window,"resize",c.saveViewportOffsetT),n(window,"resize",c.validateT),n(window,"scroll",c.validateT));m(b)}function m(b){for(var c=b._util,a=0;a<c.count;a++){var d=c.elements[a],e;a:{var g=d;e=b.options;var p=g.getBoundingClientRect();if(e.container&&y&&(g=g.closest(e.containerClass))){g=g.getBoundingClientRect();e=r(g,f)?r(p,{top:g.top-e.offset,right:g.right+e.offset,bottom:g.bottom+e.offset,left:g.left-e.offset}):!1;break a}e=r(p,f)}if(e||t(d,b.options.successClass))b.load(d),c.elements.splice(a,1),c.count--,a--}0===c.count&&b.destroy()}function r(b,c){return b.right>=c.left&&b.bottom>=c.top&&b.left<=c.right&&b.top<=c.bottom}function z(b,c,a){if(!t(b,a.successClass)&&(c||a.loadInvisible||0<b.offsetWidth&&0<b.offsetHeight))if(c=b.getAttribute(u)||b.getAttribute(a.src)){c=c.split(a.separator);var d=c[A&&1<c.length?1:0],e=b.getAttribute(a.srcset),g="img"===b.nodeName.toLowerCase(),p=(c=b.parentNode)&&"picture"===c.nodeName.toLowerCase();if(g||void 0===b.src){var h=new Image,w=function(){a.error&&a.error(b,"invalid");v(b,a.errorClass);k(h,"error",w);k(h,"load",f)},f=function(){g?p||B(b,d,e):b.style.backgroundImage='url("'+d+'")';x(b,a);k(h,"load",f);k(h,"error",w)};p&&(h=b,l(c.getElementsByTagName("source"),function(b){var c=a.srcset,e=b.getAttribute(c);e&&(b.setAttribute("srcset",e),b.removeAttribute(c))}));n(h,"error",w);n(h,"load",f);B(h,d,e)}else b.src=d,x(b,a)}else"video"===b.nodeName.toLowerCase()?(l(b.getElementsByTagName("source"),function(b){var c=a.src,e=b.getAttribute(c);e&&(b.setAttribute("src",e),b.removeAttribute(c))}),b.load(),x(b,a)):(a.error&&a.error(b,"missing"),v(b,a.errorClass))}function x(b,c){v(b,c.successClass);c.success&&c.success(b);b.removeAttribute(c.src);b.removeAttribute(c.srcset);l(c.breakpoints,function(a){b.removeAttribute(a.src)})}function B(b,c,a){a&&b.setAttribute("srcset",a);b.src=c}function t(b,c){return-1!==(" "+b.className+" ").indexOf(" "+c+" ")}function v(b,c){t(b,c)||(b.className+=" "+c)}function E(b){var c=[];b=b.root.querySelectorAll(b.selector);for(var a=b.length;a--;c.unshift(b[a]));return c}function C(b){f.bottom=(window.innerHeight||document.documentElement.clientHeight)+b;f.right=(window.innerWidth||document.documentElement.clientWidth)+b}function n(b,c,a){b.attachEvent?b.attachEvent&&b.attachEvent("on"+c,a):b.addEventListener(c,a,{capture:!1,passive:!0})}function k(b,c,a){b.detachEvent?b.detachEvent&&b.detachEvent("on"+c,a):b.removeEventListener(c,a,{capture:!1,passive:!0})}function l(b,c){if(b&&c)for(var a=b.length,d=0;d<a&&!1!==c(b[d],d);d++);}function D(b,c,a){var d=0;return function(){var e=+new Date;e-d<c||(d=e,b.apply(a,arguments))}}var u,f,A,y;return function(b){if(!document.querySelectorAll){var c=document.createStyleSheet();document.querySelectorAll=function(a,b,d,h,f){f=document.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(d=a.length;d--;){c.addRule(a[d],"k:v");for(h=f.length;h--;)f[h].currentStyle.k&&b.push(f[h]);c.removeRule(0)}return b}}var a=this,d=a._util={};d.elements=[];d.destroyed=!0;a.options=b||{};a.options.error=a.options.error||!1;a.options.offset=a.options.offset||100;a.options.root=a.options.root||document;a.options.success=a.options.success||!1;a.options.selector=a.options.selector||".b-lazy";a.options.separator=a.options.separator||"|";a.options.containerClass=a.options.container;a.options.container=a.options.containerClass?document.querySelectorAll(a.options.containerClass):!1;a.options.errorClass=a.options.errorClass||"b-error";a.options.breakpoints=a.options.breakpoints||!1;a.options.loadInvisible=a.options.loadInvisible||!1;a.options.successClass=a.options.successClass||"b-loaded";a.options.validateDelay=a.options.validateDelay||25;a.options.saveViewportOffsetDelay=a.options.saveViewportOffsetDelay||50;a.options.srcset=a.options.srcset||"data-srcset";a.options.src=u=a.options.src||"data-src";y=Element.prototype.closest;A=1<window.devicePixelRatio;f={};f.top=0-a.options.offset;f.left=0-a.options.offset;a.revalidate=function(){q(a)};a.load=function(a,b){var c=this.options;void 0===a.length?z(a,b,c):l(a,function(a){z(a,b,c)})};a.destroy=function(){var a=this._util;this.options.container&&l(this.options.container,function(b){k(b,"scroll",a.validateT)});k(window,"scroll",a.validateT);k(window,"resize",a.validateT);k(window,"resize",a.saveViewportOffsetT);a.count=0;a.elements.length=0;a.destroyed=!0};d.validateT=D(function(){m(a)},a.options.validateDelay,a);d.saveViewportOffsetT=D(function(){C(a.options.offset)},a.options.saveViewportOffsetDelay,a);C(a.options.offset);l(a.options.breakpoints,function(a){if(a.width>=window.screen.width)return u=a.src,!1});setTimeout(function(){q(a)})}});

/*! smooth-scroll v15.1.0 | (c) 2018 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;--t>=0&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if("function"==typeof window.CustomEvent)return!1;e.prototype=window.Event.prototype,window.CustomEvent=e})(),(function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),a=Math.max(0,16-(o-e)),r=window.setTimeout((function(){t(o+a)}),a);return e=o+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){return"querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype},o=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},a=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)},r=function(t){return parseInt(e.getComputedStyle(t).height,10)},i=function(e){var t;try{t=decodeURIComponent(e)}catch(n){t=e}return t},u=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===a&&t>=48&&t<=57||1===a&&t>=48&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(a):"\\"+n.charAt(a)}var u;try{u=decodeURIComponent("#"+r)}catch(e){u="#"+r}return u},c=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},s=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},l=function(t,n,o,a){var r=0;if(t.offsetParent)do{r+=t.offsetTop,t=t.offsetParent}while(t);return r=Math.max(r-n-o,0),a&&(r=Math.min(r,s()-e.innerHeight)),r},m=function(e){return e?r(e)+e.offsetTop:0},d=function(e,t){var n=t.speedAsDuration?t.speed:Math.abs(e/1e3*t.speed);return t.durationMax&&n>t.durationMax?t.durationMax:t.durationMin&&n<t.durationMin?t.durationMin:n},f=function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||e.pageYOffset,history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}},h=function(e,t,n){t||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id)},p=function(t,n,o){0===t&&document.body.focus(),o||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},g=function(t,n,o,a){if(n.emitEvents&&"function"==typeof e.CustomEvent){var r=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:a}});document.dispatchEvent(r)}};return function(r,y){var v,w,E,S,b,A,O={};O.cancelScroll=function(e){cancelAnimationFrame(A),A=null,e||g("scrollCancel",v)},O.animateScroll=function(n,a,r){var i=o(v||t,r||{}),u="[object Number]"===Object.prototype.toString.call(n),f=u||!n.tagName?null:n;if(u||f){var y=e.pageYOffset;i.header&&!S&&(S=document.querySelector(i.header));var w,E,b,C=m(S),I=u?n:l(f,C,parseInt("function"==typeof i.offset?i.offset(n,a):i.offset,10),i.clip),q=I-y,M=s(),F=0,L=d(q,i),x=function(t,o){var r=e.pageYOffset;if(t==o||r==o||(y<o&&e.innerHeight+r)>=M)return O.cancelScroll(!0),p(n,o,u),g("scrollStop",i,n,a),w=null,A=null,!0},H=function(t){w||(w=t),F+=t-w,E=F/parseInt(L,10),E=E>1?1:E,b=y+q*c(i,E),e.scrollTo(0,Math.floor(b)),x(b,I)||(A=e.requestAnimationFrame(H),w=t)};0===e.pageYOffset&&e.scrollTo(0,0),h(n,u,i),g("scrollStart",i,n,a),O.cancelScroll(!0),e.requestAnimationFrame(H)}};var C=function(t){if(!a()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&"closest"in t.target&&(E=t.target.closest(r))&&"a"===E.tagName.toLowerCase()&&!t.target.closest(v.ignore)&&E.hostname===e.location.hostname&&E.pathname===e.location.pathname&&/#/.test(E.href)){var n=u(i(E.hash)),o=v.topOnEmptyHash&&"#"===n?document.documentElement:document.querySelector(n);o=o||"#top"!==n?o:document.documentElement,o&&(t.preventDefault(),f(v),O.animateScroll(o,E))}},I=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(v)){var t=history.state.anchor;t&&0!==t&&!(t=document.querySelector(u(i(history.state.anchor))))||O.animateScroll(t,null,{updateURL:!1})}};return O.destroy=function(){v&&(document.removeEventListener("click",C,!1),e.removeEventListener("popstate",I,!1),O.cancelScroll(),v=null,w=null,E=null,S=null,b=null,A=null)},O.init=function(a){if(!n())throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";O.destroy(),v=o(t,a||{}),S=v.header?document.querySelector(v.header):null,document.addEventListener("click",C,!1),v.updateURL&&v.popstate&&e.addEventListener("popstate",I,!1)},O.init(y),O}}));

// 锚点滚动
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    easing: 'easeInOutCubic',
    speedAsDuration: true,
    clip: true,
    updateURL: true,
    popstate: true,
    ignore: '.subscribe-button, .search-overlay-close'
})

// 阅读页面顶部进度条
var postProgressBar = function () {
    var progressBar = document.querySelector('progress')
    var header = document.querySelector('.floating-header')
    var title = document.querySelector('.post-full-title')
    var lastScrollY = window.scrollY
    var lastWindowHeight = window.innerHeight
    var ticking = false
    function onScroll() {
        lastScrollY = window.scrollY
        requestTick()
    }
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(update)
        }
        ticking = true
    }
    function update() {
        var rect = title.getBoundingClientRect()
        var trigger = rect.top + window.scrollY
        var triggerOffset = title.offsetHeight + 35
        var lastDocumentHeight = document.body.offsetHeight
        var progressMax = lastDocumentHeight - lastWindowHeight

        if (lastScrollY >= trigger + triggerOffset) {
            header.classList.add('floating-active')
        } else {
            header.classList.remove('floating-active')
        }
        progressBar.setAttribute('max', progressMax)
        progressBar.setAttribute('value', lastScrollY)
        ticking = false
    }
    window.addEventListener('scroll', onScroll, {passive: true})
    update()
}
postProgressBar()

// Toc
var tocBar = document.querySelector('.toc-bar ')
var tocOpen = document.querySelector('.toc-open')
var tocClose = document.querySelector('.toc-close')
var tocSwitch = document.querySelector('.toc-switch')
var tocMain = document.querySelector('.toc-main')
var tocWidth = window.getComputedStyle(tocMain).width.replace("px","")

if (window.screen.width >= '768' ) {
    tocBar.style.right = -tocWidth + 'px'
}

tocSwitch.addEventListener('click', function(){
    if (tocOpen.classList.contains('hide')) {
        if (window.screen.width >= '768' ) {
            tocBar.style.right = -tocWidth + 'px'
        } else {
            // 隐藏 toc
            tocBar.style.top = '100%'
        }
        tocClose.classList.add('hide')
        tocOpen.classList.remove('hide')
    } else {
        if (window.screen.width >= '768' ) {
            tocBar.style.right = 0
        } else {
            // 显示 toc
            tocBar.style.top = 0
        }
        tocOpen.classList.add('hide')
        tocClose.classList.remove('hide')
    }
});

// 移动设备下，点击关闭书签
var tocItem = document.querySelectorAll('.toc-link')
tocItem.forEach(function(toc) {
    toc.addEventListener('click', function(){
        if (window.screen.width < '768' ) {
            tocBar.style.top = '100%'
            tocClose.classList.add('hide')
            tocOpen.classList.remove('hide')
        }
    })
});

// 保存搜索数据
var keepSearchData = function (siteRoot) {
    fetch(siteRoot + 'searchData.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(resData) {
        localStorage.setItem('searchData', JSON.stringify(resData));
    })
}

// 检查和获取搜索数据
var checkAndGetData = function (siteRoot) {
    fetch(siteRoot + 'searchVersion.txt?t=' + (+new Date()))
    .then(function(response) {
        return response.text();
    })
    .then(function(resVersion) {
        if (localStorage.getItem('searchVersion') !== resVersion) {
            localStorage.setItem('searchVersion', resVersion);
            keepSearchData(siteRoot)
        }
    })
}

// 监听搜索
var searchFunc = function(siteRoot) {
    checkAndGetData(siteRoot)
    var localSearchData = localStorage.getItem("searchData");
    var datas = JSON.parse(localSearchData);
    var input = document.getElementById("local-search-input");
    if (!input) return;
    var resultContent = document.getElementById("local-search-result");
    input.addEventListener("input", function() {
        if (typeof(localSearchData) !== 'string') {
            localSearchData = localStorage.getItem("searchData");
            datas = JSON.parse(localSearchData);
        }
        printRs(this, datas, resultContent)
    });
};

// 监听搜索(SW)
var searchFuncSW = function(siteRoot) {
    fetch(siteRoot + 'searchData.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(resData) {
        var localSearchData = JSON.stringify(resData);
        var datas = JSON.parse(localSearchData);
        var input = document.getElementById("local-search-input");
        if (!input) return;
        var resultContent = document.getElementById("local-search-result");
        input.addEventListener("input", function() {
            printRs(this, datas, resultContent)
        });
    });
};

// 打印结果
var printRs = function (input, datas, resultContent) {
    var str = '<ul class="search-result-list">';
    var keywords = input.value.trim().toLowerCase().split(/[\s\-]+/);
    resultContent.innerHTML = "";
    if (input.value.trim().length <= 0) {
        return;
    }
    datas.forEach(function(data) {
        var isMatch = true;
        var content_index = [];
        if (!data.title || data.title.trim() === "") {
            data.title = "Untitled";
        }
        var data_title = data.title.trim().toLowerCase();
        var data_content = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
        var data_url = data.url;
        var index_title = -1;
        var index_content = -1;
        var first_occur = -1;
        if (data_content !== "") {
            keywords.forEach(function(keyword, i) {
                index_title = data_title.indexOf(keyword);
                index_content = data_content.indexOf(keyword);
                if (index_title < 0 && index_content < 0) {
                    isMatch = false;
                } else {
                    if (index_content < 0) {
                        index_content = 0;
                    }
                    if (i == 0) {
                        first_occur = index_content;
                    }
                }
            });
        } else {
            isMatch = false;
        }
        if (isMatch) {
            str += "<li><a href='" + data_url + "' class='search-result-title'>" + data_title + "</a>";
            var content = data.content.trim().replace(/<[^>]+>/g, "");
            if (first_occur >= 0) {
                var start = first_occur - 20;
                var end = first_occur + 80;
                if (start < 0) {
                    start = 0;
                }
                if (start == 0) {
                    end = 100;
                }
                if (end > content.length) {
                    end = content.length;
                }
                var match_content = content.substr(start, end);
                keywords.forEach(function(keyword) {
                    var regS = new RegExp(keyword, "gi");
                    match_content = match_content.replace(regS, '<em class="search-keyword">' + keyword + "</em>");
                });
                str += '<p class="search-result">' + match_content + "...</p>";
            }
            str += "</li>";
        }
    });
    str += "</ul>";
    resultContent.innerHTML = str;
}
!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.Blazy=e()}(this,function(){function n(t){var e=t._util;e.elements=function(t){for(var e=[],o=(t=t.root.querySelectorAll(t.selector)).length;o--;e.unshift(t[o]));return e}(t.options),e.count=e.elements.length,e.destroyed&&(e.destroyed=!1,t.options.container&&v(t.options.container,function(t){p(t,"scroll",e.validateT)}),p(window,"resize",e.saveViewportOffsetT),p(window,"resize",e.validateT),p(window,"scroll",e.validateT)),r(t)}function r(t){for(var e=t._util,o=0;o<e.count;o++){var n,r=e.elements[o],i=r;n=t.options;var s=i.getBoundingClientRect();n.container&&b&&(i=i.closest(n.containerClass))?n=!!a(i=i.getBoundingClientRect(),w)&&a(s,{top:i.top-n.offset,right:i.right+n.offset,bottom:i.bottom+n.offset,left:i.left-n.offset}):n=a(s,w),(n||f(r,t.options.successClass))&&(t.load(r),e.elements.splice(o,1),e.count--,o--)}0===e.count&&t.destroy()}function a(t,e){return t.right>=e.left&&t.bottom>=e.top&&t.left<=e.right&&t.top<=e.bottom}function s(t,e,n){if(!f(t,n.successClass)&&(e||n.loadInvisible||0<t.offsetWidth&&0<t.offsetHeight))if(e=t.getAttribute(g)||t.getAttribute(n.src)){var o=(e=e.split(n.separator))[y&&1<e.length?1:0],r=t.getAttribute(n.srcset),i="img"===t.nodeName.toLowerCase(),s=(e=t.parentNode)&&"picture"===e.nodeName.toLowerCase();if(i||void 0===t.src){var a=new Image,c=function(){n.error&&n.error(t,"invalid"),m(t,n.errorClass),h(a,"error",c),h(a,"load",l)},l=function(){i?s||d(t,o,r):t.style.backgroundImage='url("'+o+'")',u(t,n),h(a,"load",l),h(a,"error",c)};s&&(a=t,v(e.getElementsByTagName("source"),function(t){var e=n.srcset,o=t.getAttribute(e);o&&(t.setAttribute("srcset",o),t.removeAttribute(e))})),p(a,"error",c),p(a,"load",l),d(a,o,r)}else t.src=o,u(t,n)}else"video"===t.nodeName.toLowerCase()?(v(t.getElementsByTagName("source"),function(t){var e=n.src,o=t.getAttribute(e);o&&(t.setAttribute("src",o),t.removeAttribute(e))}),t.load(),u(t,n)):(n.error&&n.error(t,"missing"),m(t,n.errorClass))}function u(e,t){m(e,t.successClass),t.success&&t.success(e),e.removeAttribute(t.src),e.removeAttribute(t.srcset),v(t.breakpoints,function(t){e.removeAttribute(t.src)})}function d(t,e,o){o&&t.setAttribute("srcset",o),t.src=e}function f(t,e){return-1!==(" "+t.className+" ").indexOf(" "+e+" ")}function m(t,e){f(t,e)||(t.className+=" "+e)}function c(t){w.bottom=(window.innerHeight||document.documentElement.clientHeight)+t,w.right=(window.innerWidth||document.documentElement.clientWidth)+t}function p(t,e,o){t.attachEvent?t.attachEvent&&t.attachEvent("on"+e,o):t.addEventListener(e,o,{capture:!1,passive:!0})}function h(t,e,o){t.detachEvent?t.detachEvent&&t.detachEvent("on"+e,o):t.removeEventListener(e,o,{capture:!1,passive:!0})}function v(t,e){if(t&&e)for(var o=t.length,n=0;n<o&&!1!==e(t[n],n);n++);}function l(e,o,n){var r=0;return function(){var t=+new Date;t-r<o||(r=t,e.apply(n,arguments))}}var g,w,y,b;return function(t){if(!document.querySelectorAll){var i=document.createStyleSheet();document.querySelectorAll=function(t,e,o,n,r){for(r=document.all,e=[],o=(t=t.replace(/\[for\b/gi,"[htmlFor").split(",")).length;o--;){for(i.addRule(t[o],"k:v"),n=r.length;n--;)r[n].currentStyle.k&&e.push(r[n]);i.removeRule(0)}return e}}var e=this,o=e._util={};o.elements=[],o.destroyed=!0,e.options=t||{},e.options.error=e.options.error||!1,e.options.offset=e.options.offset||100,e.options.root=e.options.root||document,e.options.success=e.options.success||!1,e.options.selector=e.options.selector||".b-lazy",e.options.separator=e.options.separator||"|",e.options.containerClass=e.options.container,e.options.container=!!e.options.containerClass&&document.querySelectorAll(e.options.containerClass),e.options.errorClass=e.options.errorClass||"b-error",e.options.breakpoints=e.options.breakpoints||!1,e.options.loadInvisible=e.options.loadInvisible||!1,e.options.successClass=e.options.successClass||"b-loaded",e.options.validateDelay=e.options.validateDelay||25,e.options.saveViewportOffsetDelay=e.options.saveViewportOffsetDelay||50,e.options.srcset=e.options.srcset||"data-srcset",e.options.src=g=e.options.src||"data-src",b=Element.prototype.closest,y=1<window.devicePixelRatio,(w={}).top=0-e.options.offset,w.left=0-e.options.offset,e.revalidate=function(){n(e)},e.load=function(t,e){var o=this.options;void 0===t.length?s(t,e,o):v(t,function(t){s(t,e,o)})},e.destroy=function(){var e=this._util;this.options.container&&v(this.options.container,function(t){h(t,"scroll",e.validateT)}),h(window,"scroll",e.validateT),h(window,"resize",e.validateT),h(window,"resize",e.saveViewportOffsetT),e.count=0,e.elements.length=0,e.destroyed=!0},o.validateT=l(function(){r(e)},e.options.validateDelay,e),o.saveViewportOffsetT=l(function(){c(e.options.offset)},e.options.saveViewportOffsetDelay,e),c(e.options.offset),v(e.options.breakpoints,function(t){if(t.width>=window.screen.width)return g=t.src,!1}),setTimeout(function(){n(e)})}}),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e,o=(this.document||this.ownerDocument).querySelectorAll(t),n=this;do{for(e=o.length;0<=--e&&o.item(e)!==n;);}while(e<0&&(n=n.parentElement));return n}),function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),o}if("function"==typeof window.CustomEvent)return;t.prototype=window.Event.prototype,window.CustomEvent=t}(),function(){for(var i=0,t=["ms","moz","webkit","o"],e=0;e<t.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[t[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[e]+"CancelAnimationFrame"]||window[t[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var o=(new Date).getTime(),n=Math.max(0,16-(o-i)),r=window.setTimeout(function(){t(o+n)},n);return i=o+n,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),function(t,e){"function"==typeof define&&define.amd?define([],function(){return e(t)}):"object"==typeof exports?module.exports=e(t):t.SmoothScroll=e(t)}("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,function(I){"use strict";var q={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},T=function(){var o={};return Array.prototype.forEach.call(arguments,function(t){for(var e in t){if(!t.hasOwnProperty(e))return;o[e]=t[e]}}),o},i=function(e){var o;try{o=decodeURIComponent(e)}catch(t){o=e}return o},s=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,o=String(t),n=o.length,r=-1,i="",s=o.charCodeAt(0);++r<n;){if(0===(e=o.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=e&&e<=31||127==e||0===r&&48<=e&&e<=57||1===r&&48<=e&&e<=57&&45===s?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?o.charAt(r):"\\"+o.charAt(r)}var a;try{a=decodeURIComponent("#"+i)}catch(t){a="#"+i}return a},x=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},D=function(t){return t?(e=t,parseInt(I.getComputedStyle(e).height,10)+t.offsetTop):0;var e},M=function(t,e,o,n){if(e.emitEvents&&"function"==typeof I.CustomEvent){var r=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:n}});document.dispatchEvent(r)}};return function(n,t){var A,r,C,O,L={cancelScroll:function(t){cancelAnimationFrame(O),O=null,t||M("scrollCancel",A)}};L.animateScroll=function(s,a,t){var e,o,n,r,i,c=T(A||q,t||{}),l="[object Number]"===Object.prototype.toString.call(s),u=l||!s.tagName?null:s;if(l||u){var d=I.pageYOffset;c.header&&!C&&(C=document.querySelector(c.header));var f,m,p,h=D(C),v=l?s:function(t,e,o,n){var r=0;if(t.offsetParent)for(;r+=t.offsetTop,t=t.offsetParent;);return r=Math.max(r-e-o,0),n&&(r=Math.min(r,x()-I.innerHeight)),r}(u,h,parseInt("function"==typeof c.offset?c.offset(s,a):c.offset,10),c.clip),g=v-d,w=x(),y=0,b=(n=g,i=(r=c).speedAsDuration?r.speed:Math.abs(n/1e3*r.speed),r.durationMax&&i>r.durationMax?r.durationMax:r.durationMin&&i<r.durationMin?r.durationMin:i),S=function(t,e){var o,n,r,i=I.pageYOffset;if(t==e||i==e||(d<e&&I.innerHeight+i)>=w)return L.cancelScroll(!0),n=e,r=l,0===(o=s)&&document.body.focus(),r||(o.focus(),document.activeElement!==o&&(o.setAttribute("tabindex","-1"),o.focus(),o.style.outline="none"),I.scrollTo(0,n)),M("scrollStop",c,s,a),!(O=f=null)},E=function(t){var e,o,n;f||(f=t),m=(y+=t-f)/parseInt(b,10),p=d+g*(o=m=1<m?1:m,"easeInQuad"===(e=c).easing&&(n=o*o),"easeOutQuad"===e.easing&&(n=o*(2-o)),"easeInOutQuad"===e.easing&&(n=o<.5?2*o*o:(4-2*o)*o-1),"easeInCubic"===e.easing&&(n=o*o*o),"easeOutCubic"===e.easing&&(n=--o*o*o+1),"easeInOutCubic"===e.easing&&(n=o<.5?4*o*o*o:(o-1)*(2*o-2)*(2*o-2)+1),"easeInQuart"===e.easing&&(n=o*o*o*o),"easeOutQuart"===e.easing&&(n=1- --o*o*o*o),"easeInOutQuart"===e.easing&&(n=o<.5?8*o*o*o*o:1-8*--o*o*o*o),"easeInQuint"===e.easing&&(n=o*o*o*o*o),"easeOutQuint"===e.easing&&(n=1+--o*o*o*o*o),"easeInOutQuint"===e.easing&&(n=o<.5?16*o*o*o*o*o:1+16*--o*o*o*o*o),e.customEasing&&(n=e.customEasing(o)),n||o),I.scrollTo(0,Math.floor(p)),S(p,v)||(O=I.requestAnimationFrame(E),f=t)};0===I.pageYOffset&&I.scrollTo(0,0),e=s,o=c,l||history.pushState&&o.updateURL&&history.pushState({smoothScroll:JSON.stringify(o),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id),M("scrollStart",c,s,a),L.cancelScroll(!0),I.requestAnimationFrame(E)}};var e=function(t){if(!("matchMedia"in I&&I.matchMedia("(prefers-reduced-motion)").matches)&&0===t.button&&!t.metaKey&&!t.ctrlKey&&"closest"in t.target&&(r=t.target.closest(n))&&"a"===r.tagName.toLowerCase()&&!t.target.closest(A.ignore)&&r.hostname===I.location.hostname&&r.pathname===I.location.pathname&&/#/.test(r.href)){var e=s(i(r.hash)),o=A.topOnEmptyHash&&"#"===e?document.documentElement:document.querySelector(e);(o=o||"#top"!==e?o:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var e=I.location.hash;e=e||I.pageYOffset,history.replaceState({smoothScroll:JSON.stringify(t),anchor:e||I.pageYOffset},document.title,e||I.location.href)}}(A),L.animateScroll(o,r))}},o=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(A)){var e=history.state.anchor;e&&0!==e&&!(e=document.querySelector(s(i(history.state.anchor))))||L.animateScroll(e,null,{updateURL:!1})}};return L.destroy=function(){A&&(document.removeEventListener("click",e,!1),I.removeEventListener("popstate",o,!1),L.cancelScroll(),O=C=r=A=null)},L.init=function(t){if(!("querySelector"in document&&"addEventListener"in I&&"requestAnimationFrame"in I&&"closest"in I.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";L.destroy(),A=T(q,t||{}),C=A.header?document.querySelector(A.header):null,document.addEventListener("click",e,!1),A.updateURL&&A.popstate&&I.addEventListener("popstate",o,!1)},L.init(t),L}});var scroll=new SmoothScroll('a[href*="#"]',{speed:1e3,easing:"easeInOutCubic",speedAsDuration:!0,clip:!0,updateURL:!0,popstate:!0,ignore:".subscribe-button, .search-overlay-close"}),postProgressBar=function(){var n=document.querySelector("progress"),r=document.querySelector(".floating-header"),i=document.querySelector(".post-full-title"),s=window.scrollY,a=window.innerHeight,c=!1;function t(){var t=i.getBoundingClientRect().top+window.scrollY,e=i.offsetHeight+35,o=document.body.offsetHeight-a;t+e<=s?r.classList.add("floating-active"):r.classList.remove("floating-active"),n.setAttribute("max",o),n.setAttribute("value",s),c=!1}window.addEventListener("scroll",function(){s=window.scrollY,c||requestAnimationFrame(t),c=!0},{passive:!0}),t()};postProgressBar();var tocBar=document.querySelector(".toc-bar "),tocOpen=document.querySelector(".toc-open"),tocClose=document.querySelector(".toc-close"),tocSwitch=document.querySelector(".toc-switch"),tocMain=document.querySelector(".toc-main"),tocWidth=window.getComputedStyle(tocMain).width.replace("px","");"768"<=window.screen.width&&(tocBar.style.right=-tocWidth+"px"),tocSwitch.addEventListener("click",function(){tocOpen.classList.contains("hide")?("768"<=window.screen.width?tocBar.style.right=-tocWidth+"px":tocBar.style.top="100%",tocClose.classList.add("hide"),tocOpen.classList.remove("hide")):("768"<=window.screen.width?tocBar.style.right=0:tocBar.style.top=0,tocOpen.classList.add("hide"),tocClose.classList.remove("hide"))});var tocItem=document.querySelectorAll(".toc-link");tocItem.forEach(function(t){t.addEventListener("click",function(){window.screen.width<"768"&&(tocBar.style.top="100%",tocClose.classList.add("hide"),tocOpen.classList.remove("hide"))})});var keepSearchData=function(t){fetch(t+"searchData.json").then(function(t){return t.json()}).then(function(t){localStorage.setItem("searchData",JSON.stringify(t))})},checkAndGetData=function(e){fetch(e+"searchVersion.txt?t="+ +new Date).then(function(t){return t.text()}).then(function(t){localStorage.getItem("searchVersion")!==t&&(localStorage.setItem("searchVersion",t),keepSearchData(e))})},searchFunc=function(t){checkAndGetData(t);var e=localStorage.getItem("searchData"),o=JSON.parse(e),n=document.getElementById("local-search-input");if(n){var r=document.getElementById("local-search-result");n.addEventListener("input",function(){"string"!=typeof e&&(e=localStorage.getItem("searchData"),o=JSON.parse(e)),printRs(this,o,r)})}},searchFuncSW=function(t){fetch(t+"searchData.json").then(function(t){return t.json()}).then(function(t){var e=JSON.stringify(t),o=JSON.parse(e),n=document.getElementById("local-search-input");if(n){var r=document.getElementById("local-search-result");n.addEventListener("input",function(){printRs(this,o,r)})}})},printRs=function(t,e,o){var f='<ul class="search-result-list">',m=t.value.trim().toLowerCase().split(/[\s\-]+/);o.innerHTML="",t.value.trim().length<=0||(e.forEach(function(t){var o=!0;t.title&&""!==t.title.trim()||(t.title="Untitled");var n=t.title.trim().toLowerCase(),r=t.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),e=t.url,i=-1,s=-1,a=-1;if(""!==r?m.forEach(function(t,e){i=n.indexOf(t),s=r.indexOf(t),i<0&&s<0?o=!1:(s<0&&(s=0),0==e&&(a=s))}):o=!1,o){f+="<li><a href='"+e+"' class='search-result-title'>"+n+"</a>";var c=t.content.trim().replace(/<[^>]+>/g,"");if(0<=a){var l=a-20,u=a+80;l<0&&(l=0),0==l&&(u=100),u>c.length&&(u=c.length);var d=c.substr(l,u);m.forEach(function(t){var e=new RegExp(t,"gi");d=d.replace(e,'<em class="search-keyword">'+t+"</em>")}),f+='<p class="search-result">'+d+"...</p>"}f+="</li>"}}),f+="</ul>",o.innerHTML=f)};
/*!
  hey, [be]Lazy.js - v1.8.2 - 2016.10.25
  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
  (function(q,m){"function"===typeof define&&define.amd?define(m):"object"===typeof exports?module.exports=m():q.Blazy=m()})(this,function(){function q(b){var c=b._util;c.elements=E(b.options);c.count=c.elements.length;c.destroyed&&(c.destroyed=!1,b.options.container&&l(b.options.container,function(a){n(a,"scroll",c.validateT)}),n(window,"resize",c.saveViewportOffsetT),n(window,"resize",c.validateT),n(window,"scroll",c.validateT));m(b)}function m(b){for(var c=b._util,a=0;a<c.count;a++){var d=c.elements[a],e;a:{var g=d;e=b.options;var p=g.getBoundingClientRect();if(e.container&&y&&(g=g.closest(e.containerClass))){g=g.getBoundingClientRect();e=r(g,f)?r(p,{top:g.top-e.offset,right:g.right+e.offset,bottom:g.bottom+e.offset,left:g.left-e.offset}):!1;break a}e=r(p,f)}if(e||t(d,b.options.successClass))b.load(d),c.elements.splice(a,1),c.count--,a--}0===c.count&&b.destroy()}function r(b,c){return b.right>=c.left&&b.bottom>=c.top&&b.left<=c.right&&b.top<=c.bottom}function z(b,c,a){if(!t(b,a.successClass)&&(c||a.loadInvisible||0<b.offsetWidth&&0<b.offsetHeight))if(c=b.getAttribute(u)||b.getAttribute(a.src)){c=c.split(a.separator);var d=c[A&&1<c.length?1:0],e=b.getAttribute(a.srcset),g="img"===b.nodeName.toLowerCase(),p=(c=b.parentNode)&&"picture"===c.nodeName.toLowerCase();if(g||void 0===b.src){var h=new Image,w=function(){a.error&&a.error(b,"invalid");v(b,a.errorClass);k(h,"error",w);k(h,"load",f)},f=function(){g?p||B(b,d,e):b.style.backgroundImage='url("'+d+'")';x(b,a);k(h,"load",f);k(h,"error",w)};p&&(h=b,l(c.getElementsByTagName("source"),function(b){var c=a.srcset,e=b.getAttribute(c);e&&(b.setAttribute("srcset",e),b.removeAttribute(c))}));n(h,"error",w);n(h,"load",f);B(h,d,e)}else b.src=d,x(b,a)}else"video"===b.nodeName.toLowerCase()?(l(b.getElementsByTagName("source"),function(b){var c=a.src,e=b.getAttribute(c);e&&(b.setAttribute("src",e),b.removeAttribute(c))}),b.load(),x(b,a)):(a.error&&a.error(b,"missing"),v(b,a.errorClass))}function x(b,c){v(b,c.successClass);c.success&&c.success(b);b.removeAttribute(c.src);b.removeAttribute(c.srcset);l(c.breakpoints,function(a){b.removeAttribute(a.src)})}function B(b,c,a){a&&b.setAttribute("srcset",a);b.src=c}function t(b,c){return-1!==(" "+b.className+" ").indexOf(" "+c+" ")}function v(b,c){t(b,c)||(b.className+=" "+c)}function E(b){var c=[];b=b.root.querySelectorAll(b.selector);for(var a=b.length;a--;c.unshift(b[a]));return c}function C(b){f.bottom=(window.innerHeight||document.documentElement.clientHeight)+b;f.right=(window.innerWidth||document.documentElement.clientWidth)+b}function n(b,c,a){b.attachEvent?b.attachEvent&&b.attachEvent("on"+c,a):b.addEventListener(c,a,{capture:!1,passive:!0})}function k(b,c,a){b.detachEvent?b.detachEvent&&b.detachEvent("on"+c,a):b.removeEventListener(c,a,{capture:!1,passive:!0})}function l(b,c){if(b&&c)for(var a=b.length,d=0;d<a&&!1!==c(b[d],d);d++);}function D(b,c,a){var d=0;return function(){var e=+new Date;e-d<c||(d=e,b.apply(a,arguments))}}var u,f,A,y;return function(b){if(!document.querySelectorAll){var c=document.createStyleSheet();document.querySelectorAll=function(a,b,d,h,f){f=document.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(d=a.length;d--;){c.addRule(a[d],"k:v");for(h=f.length;h--;)f[h].currentStyle.k&&b.push(f[h]);c.removeRule(0)}return b}}var a=this,d=a._util={};d.elements=[];d.destroyed=!0;a.options=b||{};a.options.error=a.options.error||!1;a.options.offset=a.options.offset||100;a.options.root=a.options.root||document;a.options.success=a.options.success||!1;a.options.selector=a.options.selector||".b-lazy";a.options.separator=a.options.separator||"|";a.options.containerClass=a.options.container;a.options.container=a.options.containerClass?document.querySelectorAll(a.options.containerClass):!1;a.options.errorClass=a.options.errorClass||"b-error";a.options.breakpoints=a.options.breakpoints||!1;a.options.loadInvisible=a.options.loadInvisible||!1;a.options.successClass=a.options.successClass||"b-loaded";a.options.validateDelay=a.options.validateDelay||25;a.options.saveViewportOffsetDelay=a.options.saveViewportOffsetDelay||50;a.options.srcset=a.options.srcset||"data-srcset";a.options.src=u=a.options.src||"data-src";y=Element.prototype.closest;A=1<window.devicePixelRatio;f={};f.top=0-a.options.offset;f.left=0-a.options.offset;a.revalidate=function(){q(a)};a.load=function(a,b){var c=this.options;void 0===a.length?z(a,b,c):l(a,function(a){z(a,b,c)})};a.destroy=function(){var a=this._util;this.options.container&&l(this.options.container,function(b){k(b,"scroll",a.validateT)});k(window,"scroll",a.validateT);k(window,"resize",a.validateT);k(window,"resize",a.saveViewportOffsetT);a.count=0;a.elements.length=0;a.destroyed=!0};d.validateT=D(function(){m(a)},a.options.validateDelay,a);d.saveViewportOffsetT=D(function(){C(a.options.offset)},a.options.saveViewportOffsetDelay,a);C(a.options.offset);l(a.options.breakpoints,function(a){if(a.width>=window.screen.width)return u=a.src,!1});setTimeout(function(){q(a)})}});

/*! smooth-scroll v15.1.0 | (c) 2018 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;--t>=0&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if("function"==typeof window.CustomEvent)return!1;e.prototype=window.Event.prototype,window.CustomEvent=e})(),(function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),a=Math.max(0,16-(o-e)),r=window.setTimeout((function(){t(o+a)}),a);return e=o+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){return"querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype},o=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},a=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)},r=function(t){return parseInt(e.getComputedStyle(t).height,10)},i=function(e){var t;try{t=decodeURIComponent(e)}catch(n){t=e}return t},u=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===a&&t>=48&&t<=57||1===a&&t>=48&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(a):"\\"+n.charAt(a)}var u;try{u=decodeURIComponent("#"+r)}catch(e){u="#"+r}return u},c=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},s=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},l=function(t,n,o,a){var r=0;if(t.offsetParent)do{r+=t.offsetTop,t=t.offsetParent}while(t);return r=Math.max(r-n-o,0),a&&(r=Math.min(r,s()-e.innerHeight)),r},m=function(e){return e?r(e)+e.offsetTop:0},d=function(e,t){var n=t.speedAsDuration?t.speed:Math.abs(e/1e3*t.speed);return t.durationMax&&n>t.durationMax?t.durationMax:t.durationMin&&n<t.durationMin?t.durationMin:n},f=function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||e.pageYOffset,history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}},h=function(e,t,n){t||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id)},p=function(t,n,o){0===t&&document.body.focus(),o||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},g=function(t,n,o,a){if(n.emitEvents&&"function"==typeof e.CustomEvent){var r=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:a}});document.dispatchEvent(r)}};return function(r,y){var v,w,E,S,b,A,O={};O.cancelScroll=function(e){cancelAnimationFrame(A),A=null,e||g("scrollCancel",v)},O.animateScroll=function(n,a,r){var i=o(v||t,r||{}),u="[object Number]"===Object.prototype.toString.call(n),f=u||!n.tagName?null:n;if(u||f){var y=e.pageYOffset;i.header&&!S&&(S=document.querySelector(i.header));var w,E,b,C=m(S),I=u?n:l(f,C,parseInt("function"==typeof i.offset?i.offset(n,a):i.offset,10),i.clip),q=I-y,M=s(),F=0,L=d(q,i),x=function(t,o){var r=e.pageYOffset;if(t==o||r==o||(y<o&&e.innerHeight+r)>=M)return O.cancelScroll(!0),p(n,o,u),g("scrollStop",i,n,a),w=null,A=null,!0},H=function(t){w||(w=t),F+=t-w,E=F/parseInt(L,10),E=E>1?1:E,b=y+q*c(i,E),e.scrollTo(0,Math.floor(b)),x(b,I)||(A=e.requestAnimationFrame(H),w=t)};0===e.pageYOffset&&e.scrollTo(0,0),h(n,u,i),g("scrollStart",i,n,a),O.cancelScroll(!0),e.requestAnimationFrame(H)}};var C=function(t){if(!a()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&"closest"in t.target&&(E=t.target.closest(r))&&"a"===E.tagName.toLowerCase()&&!t.target.closest(v.ignore)&&E.hostname===e.location.hostname&&E.pathname===e.location.pathname&&/#/.test(E.href)){var n=u(i(E.hash)),o=v.topOnEmptyHash&&"#"===n?document.documentElement:document.querySelector(n);o=o||"#top"!==n?o:document.documentElement,o&&(t.preventDefault(),f(v),O.animateScroll(o,E))}},I=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(v)){var t=history.state.anchor;t&&0!==t&&!(t=document.querySelector(u(i(history.state.anchor))))||O.animateScroll(t,null,{updateURL:!1})}};return O.destroy=function(){v&&(document.removeEventListener("click",C,!1),e.removeEventListener("popstate",I,!1),O.cancelScroll(),v=null,w=null,E=null,S=null,b=null,A=null)},O.init=function(a){if(!n())throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";O.destroy(),v=o(t,a||{}),S=v.header?document.querySelector(v.header):null,document.addEventListener("click",C,!1),v.updateURL&&v.popstate&&e.addEventListener("popstate",I,!1)},O.init(y),O}}));

// 锚点滚动
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    easing: 'easeInOutCubic',
    speedAsDuration: true,
    clip: true,
    updateURL: true,
    popstate: true,
    ignore: '.subscribe-button, .search-overlay-close'
})

// 阅读页面顶部进度条
var postProgressBar = function () {
    var progressBar = document.querySelector('progress')
    var header = document.querySelector('.floating-header')
    var title = document.querySelector('.post-full-title')
    var lastScrollY = window.scrollY
    var lastWindowHeight = window.innerHeight
    var ticking = false
    function onScroll() {
        lastScrollY = window.scrollY
        requestTick()
    }
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(update)
        }
        ticking = true
    }
    function update() {
        var rect = title.getBoundingClientRect()
        var trigger = rect.top + window.scrollY
        var triggerOffset = title.offsetHeight + 35
        var lastDocumentHeight = document.body.offsetHeight
        var progressMax = lastDocumentHeight - lastWindowHeight

        if (lastScrollY >= trigger + triggerOffset) {
            header.classList.add('floating-active')
        } else {
            header.classList.remove('floating-active')
        }
        progressBar.setAttribute('max', progressMax)
        progressBar.setAttribute('value', lastScrollY)
        ticking = false
    }
    window.addEventListener('scroll', onScroll, {passive: true})
    update()
}
postProgressBar()

// Toc
var tocBar = document.querySelector('.toc-bar ')
var tocOpen = document.querySelector('.toc-open')
var tocClose = document.querySelector('.toc-close')
var tocSwitch = document.querySelector('.toc-switch')
var tocMain = document.querySelector('.toc-main')
var tocWidth = window.getComputedStyle(tocMain).width.replace("px","")

if (window.screen.width >= '768' ) {
    tocBar.style.right = -tocWidth + 'px'
}

tocSwitch.addEventListener('click', function(){
    if (tocOpen.classList.contains('hide')) {
        if (window.screen.width >= '768' ) {
            tocBar.style.right = -tocWidth + 'px'
        } else {
            // 隐藏 toc
            tocBar.style.top = '100%'
        }
        tocClose.classList.add('hide')
        tocOpen.classList.remove('hide')
    } else {
        if (window.screen.width >= '768' ) {
            tocBar.style.right = 0
        } else {
            // 显示 toc
            tocBar.style.top = 0
        }
        tocOpen.classList.add('hide')
        tocClose.classList.remove('hide')
    }
});

// 移动设备下，点击关闭书签
var tocItem = document.querySelectorAll('.toc-link')
tocItem.forEach(function(toc) {
    toc.addEventListener('click', function(){
        if (window.screen.width < '768' ) {
            tocBar.style.top = '100%'
            tocClose.classList.add('hide')
            tocOpen.classList.remove('hide')
        }
    })
});
!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.Blazy=e()}(this,function(){function n(t){var e=t._util;e.elements=function(t){for(var e=[],o=(t=t.root.querySelectorAll(t.selector)).length;o--;e.unshift(t[o]));return e}(t.options),e.count=e.elements.length,e.destroyed&&(e.destroyed=!1,t.options.container&&v(t.options.container,function(t){p(t,"scroll",e.validateT)}),p(window,"resize",e.saveViewportOffsetT),p(window,"resize",e.validateT),p(window,"scroll",e.validateT)),i(t)}function i(t){for(var e=t._util,o=0;o<e.count;o++){var n,i=e.elements[o],r=i;n=t.options;var s=r.getBoundingClientRect();n.container&&b&&(r=r.closest(n.containerClass))?n=!!a(r=r.getBoundingClientRect(),g)&&a(s,{top:r.top-n.offset,right:r.right+n.offset,bottom:r.bottom+n.offset,left:r.left-n.offset}):n=a(s,g),(n||f(i,t.options.successClass))&&(t.load(i),e.elements.splice(o,1),e.count--,o--)}0===e.count&&t.destroy()}function a(t,e){return t.right>=e.left&&t.bottom>=e.top&&t.left<=e.right&&t.top<=e.bottom}function s(t,e,n){if(!f(t,n.successClass)&&(e||n.loadInvisible||0<t.offsetWidth&&0<t.offsetHeight))if(e=t.getAttribute(w)||t.getAttribute(n.src)){var o=(e=e.split(n.separator))[y&&1<e.length?1:0],i=t.getAttribute(n.srcset),r="img"===t.nodeName.toLowerCase(),s=(e=t.parentNode)&&"picture"===e.nodeName.toLowerCase();if(r||void 0===t.src){var a=new Image,c=function(){n.error&&n.error(t,"invalid"),m(t,n.errorClass),h(a,"error",c),h(a,"load",l)},l=function(){r?s||d(t,o,i):t.style.backgroundImage='url("'+o+'")',u(t,n),h(a,"load",l),h(a,"error",c)};s&&(a=t,v(e.getElementsByTagName("source"),function(t){var e=n.srcset,o=t.getAttribute(e);o&&(t.setAttribute("srcset",o),t.removeAttribute(e))})),p(a,"error",c),p(a,"load",l),d(a,o,i)}else t.src=o,u(t,n)}else"video"===t.nodeName.toLowerCase()?(v(t.getElementsByTagName("source"),function(t){var e=n.src,o=t.getAttribute(e);o&&(t.setAttribute("src",o),t.removeAttribute(e))}),t.load(),u(t,n)):(n.error&&n.error(t,"missing"),m(t,n.errorClass))}function u(e,t){m(e,t.successClass),t.success&&t.success(e),e.removeAttribute(t.src),e.removeAttribute(t.srcset),v(t.breakpoints,function(t){e.removeAttribute(t.src)})}function d(t,e,o){o&&t.setAttribute("srcset",o),t.src=e}function f(t,e){return-1!==(" "+t.className+" ").indexOf(" "+e+" ")}function m(t,e){f(t,e)||(t.className+=" "+e)}function c(t){g.bottom=(window.innerHeight||document.documentElement.clientHeight)+t,g.right=(window.innerWidth||document.documentElement.clientWidth)+t}function p(t,e,o){t.attachEvent?t.attachEvent&&t.attachEvent("on"+e,o):t.addEventListener(e,o,{capture:!1,passive:!0})}function h(t,e,o){t.detachEvent?t.detachEvent&&t.detachEvent("on"+e,o):t.removeEventListener(e,o,{capture:!1,passive:!0})}function v(t,e){if(t&&e)for(var o=t.length,n=0;n<o&&!1!==e(t[n],n);n++);}function l(e,o,n){var i=0;return function(){var t=+new Date;t-i<o||(i=t,e.apply(n,arguments))}}var w,g,y,b;return function(t){if(!document.querySelectorAll){var r=document.createStyleSheet();document.querySelectorAll=function(t,e,o,n,i){for(i=document.all,e=[],o=(t=t.replace(/\[for\b/gi,"[htmlFor").split(",")).length;o--;){for(r.addRule(t[o],"k:v"),n=i.length;n--;)i[n].currentStyle.k&&e.push(i[n]);r.removeRule(0)}return e}}var e=this,o=e._util={};o.elements=[],o.destroyed=!0,e.options=t||{},e.options.error=e.options.error||!1,e.options.offset=e.options.offset||100,e.options.root=e.options.root||document,e.options.success=e.options.success||!1,e.options.selector=e.options.selector||".b-lazy",e.options.separator=e.options.separator||"|",e.options.containerClass=e.options.container,e.options.container=!!e.options.containerClass&&document.querySelectorAll(e.options.containerClass),e.options.errorClass=e.options.errorClass||"b-error",e.options.breakpoints=e.options.breakpoints||!1,e.options.loadInvisible=e.options.loadInvisible||!1,e.options.successClass=e.options.successClass||"b-loaded",e.options.validateDelay=e.options.validateDelay||25,e.options.saveViewportOffsetDelay=e.options.saveViewportOffsetDelay||50,e.options.srcset=e.options.srcset||"data-srcset",e.options.src=w=e.options.src||"data-src",b=Element.prototype.closest,y=1<window.devicePixelRatio,(g={}).top=0-e.options.offset,g.left=0-e.options.offset,e.revalidate=function(){n(e)},e.load=function(t,e){var o=this.options;void 0===t.length?s(t,e,o):v(t,function(t){s(t,e,o)})},e.destroy=function(){var e=this._util;this.options.container&&v(this.options.container,function(t){h(t,"scroll",e.validateT)}),h(window,"scroll",e.validateT),h(window,"resize",e.validateT),h(window,"resize",e.saveViewportOffsetT),e.count=0,e.elements.length=0,e.destroyed=!0},o.validateT=l(function(){i(e)},e.options.validateDelay,e),o.saveViewportOffsetT=l(function(){c(e.options.offset)},e.options.saveViewportOffsetDelay,e),c(e.options.offset),v(e.options.breakpoints,function(t){if(t.width>=window.screen.width)return w=t.src,!1}),setTimeout(function(){n(e)})}}),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e,o=(this.document||this.ownerDocument).querySelectorAll(t),n=this;do{for(e=o.length;0<=--e&&o.item(e)!==n;);}while(e<0&&(n=n.parentElement));return n}),function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),o}if("function"==typeof window.CustomEvent)return;t.prototype=window.Event.prototype,window.CustomEvent=t}(),function(){for(var r=0,t=["ms","moz","webkit","o"],e=0;e<t.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[t[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[e]+"CancelAnimationFrame"]||window[t[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var o=(new Date).getTime(),n=Math.max(0,16-(o-r)),i=window.setTimeout(function(){t(o+n)},n);return r=o+n,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),function(t,e){"function"==typeof define&&define.amd?define([],function(){return e(t)}):"object"==typeof exports?module.exports=e(t):t.SmoothScroll=e(t)}("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,function(L){"use strict";var I={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},T=function(){var o={};return Array.prototype.forEach.call(arguments,function(t){for(var e in t){if(!t.hasOwnProperty(e))return;o[e]=t[e]}}),o},r=function(e){var o;try{o=decodeURIComponent(e)}catch(t){o=e}return o},s=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,o=String(t),n=o.length,i=-1,r="",s=o.charCodeAt(0);++i<n;){if(0===(e=o.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=1<=e&&e<=31||127==e||0===i&&48<=e&&e<=57||1===i&&48<=e&&e<=57&&45===s?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?o.charAt(i):"\\"+o.charAt(i)}var a;try{a=decodeURIComponent("#"+r)}catch(t){a="#"+r}return a},x=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},M=function(t){return t?(e=t,parseInt(L.getComputedStyle(e).height,10)+t.offsetTop):0;var e},F=function(t,e,o,n){if(e.emitEvents&&"function"==typeof L.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:n}});document.dispatchEvent(i)}};return function(n,t){var A,i,C,O,q={cancelScroll:function(t){cancelAnimationFrame(O),O=null,t||F("scrollCancel",A)}};q.animateScroll=function(s,a,t){var e,o,n,i,r,c=T(A||I,t||{}),l="[object Number]"===Object.prototype.toString.call(s),u=l||!s.tagName?null:s;if(l||u){var d=L.pageYOffset;c.header&&!C&&(C=document.querySelector(c.header));var f,m,p,h=M(C),v=l?s:function(t,e,o,n){var i=0;if(t.offsetParent)for(;i+=t.offsetTop,t=t.offsetParent;);return i=Math.max(i-e-o,0),n&&(i=Math.min(i,x()-L.innerHeight)),i}(u,h,parseInt("function"==typeof c.offset?c.offset(s,a):c.offset,10),c.clip),w=v-d,g=x(),y=0,b=(n=w,r=(i=c).speedAsDuration?i.speed:Math.abs(n/1e3*i.speed),i.durationMax&&r>i.durationMax?i.durationMax:i.durationMin&&r<i.durationMin?i.durationMin:r),S=function(t,e){var o,n,i,r=L.pageYOffset;if(t==e||r==e||(d<e&&L.innerHeight+r)>=g)return q.cancelScroll(!0),n=e,i=l,0===(o=s)&&document.body.focus(),i||(o.focus(),document.activeElement!==o&&(o.setAttribute("tabindex","-1"),o.focus(),o.style.outline="none"),L.scrollTo(0,n)),F("scrollStop",c,s,a),!(O=f=null)},E=function(t){var e,o,n;f||(f=t),m=(y+=t-f)/parseInt(b,10),p=d+w*(o=m=1<m?1:m,"easeInQuad"===(e=c).easing&&(n=o*o),"easeOutQuad"===e.easing&&(n=o*(2-o)),"easeInOutQuad"===e.easing&&(n=o<.5?2*o*o:(4-2*o)*o-1),"easeInCubic"===e.easing&&(n=o*o*o),"easeOutCubic"===e.easing&&(n=--o*o*o+1),"easeInOutCubic"===e.easing&&(n=o<.5?4*o*o*o:(o-1)*(2*o-2)*(2*o-2)+1),"easeInQuart"===e.easing&&(n=o*o*o*o),"easeOutQuart"===e.easing&&(n=1- --o*o*o*o),"easeInOutQuart"===e.easing&&(n=o<.5?8*o*o*o*o:1-8*--o*o*o*o),"easeInQuint"===e.easing&&(n=o*o*o*o*o),"easeOutQuint"===e.easing&&(n=1+--o*o*o*o*o),"easeInOutQuint"===e.easing&&(n=o<.5?16*o*o*o*o*o:1+16*--o*o*o*o*o),e.customEasing&&(n=e.customEasing(o)),n||o),L.scrollTo(0,Math.floor(p)),S(p,v)||(O=L.requestAnimationFrame(E),f=t)};0===L.pageYOffset&&L.scrollTo(0,0),e=s,o=c,l||history.pushState&&o.updateURL&&history.pushState({smoothScroll:JSON.stringify(o),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id),F("scrollStart",c,s,a),q.cancelScroll(!0),L.requestAnimationFrame(E)}};var e=function(t){if(!("matchMedia"in L&&L.matchMedia("(prefers-reduced-motion)").matches)&&0===t.button&&!t.metaKey&&!t.ctrlKey&&"closest"in t.target&&(i=t.target.closest(n))&&"a"===i.tagName.toLowerCase()&&!t.target.closest(A.ignore)&&i.hostname===L.location.hostname&&i.pathname===L.location.pathname&&/#/.test(i.href)){var e=s(r(i.hash)),o=A.topOnEmptyHash&&"#"===e?document.documentElement:document.querySelector(e);(o=o||"#top"!==e?o:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var e=L.location.hash;e=e||L.pageYOffset,history.replaceState({smoothScroll:JSON.stringify(t),anchor:e||L.pageYOffset},document.title,e||L.location.href)}}(A),q.animateScroll(o,i))}},o=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(A)){var e=history.state.anchor;e&&0!==e&&!(e=document.querySelector(s(r(history.state.anchor))))||q.animateScroll(e,null,{updateURL:!1})}};return q.destroy=function(){A&&(document.removeEventListener("click",e,!1),L.removeEventListener("popstate",o,!1),q.cancelScroll(),O=C=i=A=null)},q.init=function(t){if(!("querySelector"in document&&"addEventListener"in L&&"requestAnimationFrame"in L&&"closest"in L.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";q.destroy(),A=T(I,t||{}),C=A.header?document.querySelector(A.header):null,document.addEventListener("click",e,!1),A.updateURL&&A.popstate&&L.addEventListener("popstate",o,!1)},q.init(t),q}});var scroll=new SmoothScroll('a[href*="#"]',{speed:1e3,easing:"easeInOutCubic",speedAsDuration:!0,clip:!0,updateURL:!0,popstate:!0,ignore:".subscribe-button, .search-overlay-close"}),postProgressBar=function(){var n=document.querySelector("progress"),i=document.querySelector(".floating-header"),r=document.querySelector(".post-full-title"),s=window.scrollY,a=window.innerHeight,c=!1;function t(){var t=r.getBoundingClientRect().top+window.scrollY,e=r.offsetHeight+35,o=document.body.offsetHeight-a;t+e<=s?i.classList.add("floating-active"):i.classList.remove("floating-active"),n.setAttribute("max",o),n.setAttribute("value",s),c=!1}window.addEventListener("scroll",function(){s=window.scrollY,c||requestAnimationFrame(t),c=!0},{passive:!0}),t()};postProgressBar();var tocBar=document.querySelector(".toc-bar "),tocOpen=document.querySelector(".toc-open"),tocClose=document.querySelector(".toc-close"),tocSwitch=document.querySelector(".toc-switch"),tocMain=document.querySelector(".toc-main"),tocWidth=window.getComputedStyle(tocMain).width.replace("px","");"768"<=window.screen.width&&(tocBar.style.right=-tocWidth+"px"),tocSwitch.addEventListener("click",function(){tocOpen.classList.contains("hide")?("768"<=window.screen.width?tocBar.style.right=-tocWidth+"px":tocBar.style.top="100%",tocClose.classList.add("hide"),tocOpen.classList.remove("hide")):("768"<=window.screen.width?tocBar.style.right=0:tocBar.style.top=0,tocOpen.classList.add("hide"),tocClose.classList.remove("hide"))});var tocItem=document.querySelectorAll(".toc-link");tocItem.forEach(function(t){t.addEventListener("click",function(){window.screen.width<"768"&&(tocBar.style.top="100%",tocClose.classList.add("hide"),tocOpen.classList.remove("hide"))})});
/*! smooth-scroll v15.1.0 | (c) 2018 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;--t>=0&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if("function"==typeof window.CustomEvent)return!1;e.prototype=window.Event.prototype,window.CustomEvent=e})(),(function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),a=Math.max(0,16-(o-e)),r=window.setTimeout((function(){t(o+a)}),a);return e=o+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){return"querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype},o=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},a=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)},r=function(t){return parseInt(e.getComputedStyle(t).height,10)},i=function(e){var t;try{t=decodeURIComponent(e)}catch(n){t=e}return t},u=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===a&&t>=48&&t<=57||1===a&&t>=48&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(a):"\\"+n.charAt(a)}var u;try{u=decodeURIComponent("#"+r)}catch(e){u="#"+r}return u},c=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},s=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},l=function(t,n,o,a){var r=0;if(t.offsetParent)do{r+=t.offsetTop,t=t.offsetParent}while(t);return r=Math.max(r-n-o,0),a&&(r=Math.min(r,s()-e.innerHeight)),r},m=function(e){return e?r(e)+e.offsetTop:0},d=function(e,t){var n=t.speedAsDuration?t.speed:Math.abs(e/1e3*t.speed);return t.durationMax&&n>t.durationMax?t.durationMax:t.durationMin&&n<t.durationMin?t.durationMin:n},f=function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||e.pageYOffset,history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}},h=function(e,t,n){t||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id)},p=function(t,n,o){0===t&&document.body.focus(),o||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},g=function(t,n,o,a){if(n.emitEvents&&"function"==typeof e.CustomEvent){var r=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:a}});document.dispatchEvent(r)}};return function(r,y){var v,w,E,S,b,A,O={};O.cancelScroll=function(e){cancelAnimationFrame(A),A=null,e||g("scrollCancel",v)},O.animateScroll=function(n,a,r){var i=o(v||t,r||{}),u="[object Number]"===Object.prototype.toString.call(n),f=u||!n.tagName?null:n;if(u||f){var y=e.pageYOffset;i.header&&!S&&(S=document.querySelector(i.header));var w,E,b,C=m(S),I=u?n:l(f,C,parseInt("function"==typeof i.offset?i.offset(n,a):i.offset,10),i.clip),q=I-y,M=s(),F=0,L=d(q,i),x=function(t,o){var r=e.pageYOffset;if(t==o||r==o||(y<o&&e.innerHeight+r)>=M)return O.cancelScroll(!0),p(n,o,u),g("scrollStop",i,n,a),w=null,A=null,!0},H=function(t){w||(w=t),F+=t-w,E=F/parseInt(L,10),E=E>1?1:E,b=y+q*c(i,E),e.scrollTo(0,Math.floor(b)),x(b,I)||(A=e.requestAnimationFrame(H),w=t)};0===e.pageYOffset&&e.scrollTo(0,0),h(n,u,i),g("scrollStart",i,n,a),O.cancelScroll(!0),e.requestAnimationFrame(H)}};var C=function(t){if(!a()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&"closest"in t.target&&(E=t.target.closest(r))&&"a"===E.tagName.toLowerCase()&&!t.target.closest(v.ignore)&&E.hostname===e.location.hostname&&E.pathname===e.location.pathname&&/#/.test(E.href)){var n=u(i(E.hash)),o=v.topOnEmptyHash&&"#"===n?document.documentElement:document.querySelector(n);o=o||"#top"!==n?o:document.documentElement,o&&(t.preventDefault(),f(v),O.animateScroll(o,E))}},I=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(v)){var t=history.state.anchor;t&&0!==t&&!(t=document.querySelector(u(i(history.state.anchor))))||O.animateScroll(t,null,{updateURL:!1})}};return O.destroy=function(){v&&(document.removeEventListener("click",C,!1),e.removeEventListener("popstate",I,!1),O.cancelScroll(),v=null,w=null,E=null,S=null,b=null,A=null)},O.init=function(a){if(!n())throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";O.destroy(),v=o(t,a||{}),S=v.header?document.querySelector(v.header):null,document.addEventListener("click",C,!1),v.updateURL&&v.popstate&&e.addEventListener("popstate",I,!1)},O.init(y),O}}));

// 锚点滚动
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    easing: 'easeInOutCubic',
    speedAsDuration: true,
    clip: true,
    updateURL: true,
    popstate: true,
    ignore: '.subscribe-button, .search-overlay-close'
})

// 阅读页面顶部进度条
var postProgressBar = function () {
    var progressBar = document.querySelector('progress')
    var header = document.querySelector('.floating-header')
    var title = document.querySelector('.post-full-title')
    var lastScrollY = window.scrollY
    var lastWindowHeight = window.innerHeight
    var ticking = false
    function onScroll() {
        lastScrollY = window.scrollY
        requestTick()
    }
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(update)
        }
        ticking = true
    }
    function update() {
        var rect = title.getBoundingClientRect()
        var trigger = rect.top + window.scrollY
        var triggerOffset = title.offsetHeight + 35
        var lastDocumentHeight = document.body.offsetHeight
        var progressMax = lastDocumentHeight - lastWindowHeight

        if (lastScrollY >= trigger + triggerOffset) {
            header.classList.add('floating-active')
        } else {
            header.classList.remove('floating-active')
        }
        progressBar.setAttribute('max', progressMax)
        progressBar.setAttribute('value', lastScrollY)
        ticking = false
    }
    window.addEventListener('scroll', onScroll, {passive: true})
    update()
}
postProgressBar()

// Toc
var tocBar = document.querySelector('.toc-bar ')
var tocOpen = document.querySelector('.toc-open')
var tocClose = document.querySelector('.toc-close')
var tocSwitch = document.querySelector('.toc-switch')
var tocMain = document.querySelector('.toc-main')
var tocWidth = window.getComputedStyle(tocMain).width.replace("px","")

if (window.screen.width >= '768' ) {
    tocBar.style.right = -tocWidth + 'px'
}

tocSwitch.addEventListener('click', function(){
    if (tocOpen.classList.contains('hide')) {
        if (window.screen.width >= '768' ) {
            tocBar.style.right = -tocWidth + 'px'
        } else {
            // 隐藏 toc
            tocBar.style.top = '100%'
        }
        tocClose.classList.add('hide')
        tocOpen.classList.remove('hide')
    } else {
        if (window.screen.width >= '768' ) {
            tocBar.style.right = 0
        } else {
            // 显示 toc
            tocBar.style.top = 0
        }
        tocOpen.classList.add('hide')
        tocClose.classList.remove('hide')
    }
});

// 移动设备下，点击关闭书签
var tocItem = document.querySelectorAll('.toc-link')
tocItem.forEach(function(toc) {
    toc.addEventListener('click', function(){
        if (window.screen.width < '768' ) {
            tocBar.style.top = '100%'
            tocClose.classList.add('hide')
            tocOpen.classList.remove('hide')
        }
    })
});

/*
* @Author: xzhih
* @Date:   2018-11-04 23:25:09
* @Last Modified by:   xzhih
* @Last Modified time: 2018-12-04 05:37:55
* 在非 service workers 场景下
*/

// 保存搜索数据
var keepSearchData = function (siteRoot) {
    fetch(siteRoot + 'searchData.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(resData) {
        localStorage.setItem('searchData', JSON.stringify(resData));
    })
}

// 检查和获取搜索数据
var checkAndGetData = function (siteRoot) {
    fetch(siteRoot + 'searchVersion.txt?t=' + (+new Date()))
    .then(function(response) {
        return response.text();
    })
    .then(function(resVersion) {
        if (localStorage.getItem('searchVersion') !== resVersion) {
            localStorage.setItem('searchVersion', resVersion);
            keepSearchData(siteRoot)
        }
    })
}

// 监听搜索
var searchFunc = function(siteRoot) {
    checkAndGetData(siteRoot)
    var localSearchData = localStorage.getItem("searchData");
    var datas = JSON.parse(localSearchData);
    var input = document.getElementById("local-search-input");
    if (!input) return;
    var resultContent = document.getElementById("local-search-result");
    input.addEventListener("input", function() {
        if (typeof(localSearchData) !== 'string') {
            localSearchData = localStorage.getItem("searchData");
            datas = JSON.parse(localSearchData);
        }
        printRs(this, datas, resultContent)
    });
};

// 监听搜索(SW)
var searchFuncSW = function(siteRoot) {
    fetch(siteRoot + 'searchData.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(resData) {
        var localSearchData = JSON.stringify(resData);
        var datas = JSON.parse(localSearchData);
        var input = document.getElementById("local-search-input");
        if (!input) return;
        var resultContent = document.getElementById("local-search-result");
        input.addEventListener("input", function() {
            printRs(this, datas, resultContent)
        });
    });
};

// 打印结果
var printRs = function (input, datas, resultContent) {
    var str = '<ul class="search-result-list">';
    var keywords = input.value.trim().toLowerCase().split(/[\s\-]+/);
    resultContent.innerHTML = "";
    if (input.value.trim().length <= 0) {
        return;
    }
    datas.forEach(function(data) {
        var isMatch = true;
        var content_index = [];
        if (!data.title || data.title.trim() === "") {
            data.title = "Untitled";
        }
        var data_title = data.title.trim().toLowerCase();
        var data_content = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
        var data_url = data.url;
        var index_title = -1;
        var index_content = -1;
        var first_occur = -1;
        if (data_content !== "") {
            keywords.forEach(function(keyword, i) {
                index_title = data_title.indexOf(keyword);
                index_content = data_content.indexOf(keyword);
                if (index_title < 0 && index_content < 0) {
                    isMatch = false;
                } else {
                    if (index_content < 0) {
                        index_content = 0;
                    }
                    if (i == 0) {
                        first_occur = index_content;
                    }
                }
            });
        } else {
            isMatch = false;
        }
        if (isMatch) {
            str += "<li><a href='" + data_url + "' class='search-result-title'>" + data_title + "</a>";
            var content = data.content.trim().replace(/<[^>]+>/g, "");
            if (first_occur >= 0) {
                var start = first_occur - 20;
                var end = first_occur + 80;
                if (start < 0) {
                    start = 0;
                }
                if (start == 0) {
                    end = 100;
                }
                if (end > content.length) {
                    end = content.length;
                }
                var match_content = content.substr(start, end);
                keywords.forEach(function(keyword) {
                    var regS = new RegExp(keyword, "gi");
                    match_content = match_content.replace(regS, '<em class="search-keyword">' + keyword + "</em>");
                });
                str += '<p class="search-result">' + match_content + "...</p>";
            }
            str += "</li>";
        }
    });
    str += "</ul>";
    resultContent.innerHTML = str;
}
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if("function"==typeof window.CustomEvent)return;e.prototype=window.Event.prototype,window.CustomEvent=e}(),function(){for(var a=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),o=Math.max(0,16-(n-a)),r=window.setTimeout(function(){e(n+o)},o);return a=n+o,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),function(e,t){"function"==typeof define&&define.amd?define([],function(){return t(e)}):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)}("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,function(I){"use strict";var q={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},M=function(){var n={};return Array.prototype.forEach.call(arguments,function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}}),n},a=function(t){var n;try{n=decodeURIComponent(t)}catch(e){n=t}return n},i=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,r=-1,a="",i=n.charCodeAt(0);++r<o;){if(0===(t=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=1<=t&&t<=31||127==t||0===r&&48<=t&&t<=57||1===r&&48<=t&&t<=57&&45===i?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(r):"\\"+n.charAt(r)}var c;try{c=decodeURIComponent("#"+a)}catch(e){c="#"+a}return c},x=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},F=function(e){return e?(t=e,parseInt(I.getComputedStyle(t).height,10)+e.offsetTop):0;var t},D=function(e,t,n,o){if(t.emitEvents&&"function"==typeof I.CustomEvent){var r=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(r)}};return function(o,e){var O,r,A,L,C={cancelScroll:function(e){cancelAnimationFrame(L),L=null,e||D("scrollCancel",O)}};C.animateScroll=function(i,c,e){var t,n,o,r,a,s=M(O||q,e||{}),l="[object Number]"===Object.prototype.toString.call(i),u=l||!i.tagName?null:i;if(l||u){var d=I.pageYOffset;s.header&&!A&&(A=document.querySelector(s.header));var m,h,f,p=F(A),g=l?i:function(e,t,n,o){var r=0;if(e.offsetParent)for(;r+=e.offsetTop,e=e.offsetParent;);return r=Math.max(r-t-n,0),o&&(r=Math.min(r,x()-I.innerHeight)),r}(u,p,parseInt("function"==typeof s.offset?s.offset(i,c):s.offset,10),s.clip),w=g-d,v=x(),y=0,S=(o=w,a=(r=s).speedAsDuration?r.speed:Math.abs(o/1e3*r.speed),r.durationMax&&a>r.durationMax?r.durationMax:r.durationMin&&a<r.durationMin?r.durationMin:a),E=function(e,t){var n,o,r,a=I.pageYOffset;if(e==t||a==t||(d<t&&I.innerHeight+a)>=v)return C.cancelScroll(!0),o=t,r=l,0===(n=i)&&document.body.focus(),r||(n.focus(),document.activeElement!==n&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),I.scrollTo(0,o)),D("scrollStop",s,i,c),!(L=m=null)},b=function(e){var t,n,o;m||(m=e),h=(y+=e-m)/parseInt(S,10),f=d+w*(n=h=1<h?1:h,"easeInQuad"===(t=s).easing&&(o=n*n),"easeOutQuad"===t.easing&&(o=n*(2-n)),"easeInOutQuad"===t.easing&&(o=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===t.easing&&(o=n*n*n),"easeOutCubic"===t.easing&&(o=--n*n*n+1),"easeInOutCubic"===t.easing&&(o=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t.easing&&(o=n*n*n*n),"easeOutQuart"===t.easing&&(o=1- --n*n*n*n),"easeInOutQuart"===t.easing&&(o=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t.easing&&(o=n*n*n*n*n),"easeOutQuint"===t.easing&&(o=1+--n*n*n*n*n),"easeInOutQuint"===t.easing&&(o=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),t.customEasing&&(o=t.customEasing(n)),o||n),I.scrollTo(0,Math.floor(f)),E(f,g)||(L=I.requestAnimationFrame(b),m=e)};0===I.pageYOffset&&I.scrollTo(0,0),t=i,n=s,l||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:t.id},document.title,t===document.documentElement?"#top":"#"+t.id),D("scrollStart",s,i,c),C.cancelScroll(!0),I.requestAnimationFrame(b)}};var t=function(e){if(!("matchMedia"in I&&I.matchMedia("(prefers-reduced-motion)").matches)&&0===e.button&&!e.metaKey&&!e.ctrlKey&&"closest"in e.target&&(r=e.target.closest(o))&&"a"===r.tagName.toLowerCase()&&!e.target.closest(O.ignore)&&r.hostname===I.location.hostname&&r.pathname===I.location.pathname&&/#/.test(r.href)){var t=i(a(r.hash)),n=O.topOnEmptyHash&&"#"===t?document.documentElement:document.querySelector(t);(n=n||"#top"!==t?n:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=I.location.hash;t=t||I.pageYOffset,history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||I.pageYOffset},document.title,t||I.location.href)}}(O),C.animateScroll(n,r))}},n=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(O)){var t=history.state.anchor;t&&0!==t&&!(t=document.querySelector(i(a(history.state.anchor))))||C.animateScroll(t,null,{updateURL:!1})}};return C.destroy=function(){O&&(document.removeEventListener("click",t,!1),I.removeEventListener("popstate",n,!1),C.cancelScroll(),L=A=r=O=null)},C.init=function(e){if(!("querySelector"in document&&"addEventListener"in I&&"requestAnimationFrame"in I&&"closest"in I.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";C.destroy(),O=M(q,e||{}),A=O.header?document.querySelector(O.header):null,document.addEventListener("click",t,!1),O.updateURL&&O.popstate&&I.addEventListener("popstate",n,!1)},C.init(e),C}});var scroll=new SmoothScroll('a[href*="#"]',{speed:1e3,easing:"easeInOutCubic",speedAsDuration:!0,clip:!0,updateURL:!0,popstate:!0,ignore:".subscribe-button, .search-overlay-close"}),postProgressBar=function(){var o=document.querySelector("progress"),r=document.querySelector(".floating-header"),a=document.querySelector(".post-full-title"),i=window.scrollY,c=window.innerHeight,s=!1;function e(){var e=a.getBoundingClientRect().top+window.scrollY,t=a.offsetHeight+35,n=document.body.offsetHeight-c;e+t<=i?r.classList.add("floating-active"):r.classList.remove("floating-active"),o.setAttribute("max",n),o.setAttribute("value",i),s=!1}window.addEventListener("scroll",function(){i=window.scrollY,s||requestAnimationFrame(e),s=!0},{passive:!0}),e()};postProgressBar();var tocBar=document.querySelector(".toc-bar "),tocOpen=document.querySelector(".toc-open"),tocClose=document.querySelector(".toc-close"),tocSwitch=document.querySelector(".toc-switch"),tocMain=document.querySelector(".toc-main"),tocWidth=window.getComputedStyle(tocMain).width.replace("px","");"768"<=window.screen.width&&(tocBar.style.right=-tocWidth+"px"),tocSwitch.addEventListener("click",function(){tocOpen.classList.contains("hide")?("768"<=window.screen.width?tocBar.style.right=-tocWidth+"px":tocBar.style.top="100%",tocClose.classList.add("hide"),tocOpen.classList.remove("hide")):("768"<=window.screen.width?tocBar.style.right=0:tocBar.style.top=0,tocOpen.classList.add("hide"),tocClose.classList.remove("hide"))});var tocItem=document.querySelectorAll(".toc-link");tocItem.forEach(function(e){e.addEventListener("click",function(){window.screen.width<"768"&&(tocBar.style.top="100%",tocClose.classList.add("hide"),tocOpen.classList.remove("hide"))})});var keepSearchData=function(e){fetch(e+"searchData.json").then(function(e){return e.json()}).then(function(e){localStorage.setItem("searchData",JSON.stringify(e))})},checkAndGetData=function(t){fetch(t+"searchVersion.txt?t="+ +new Date).then(function(e){return e.text()}).then(function(e){localStorage.getItem("searchVersion")!==e&&(localStorage.setItem("searchVersion",e),keepSearchData(t))})},searchFunc=function(e){checkAndGetData(e);var t=localStorage.getItem("searchData"),n=JSON.parse(t),o=document.getElementById("local-search-input");if(o){var r=document.getElementById("local-search-result");o.addEventListener("input",function(){"string"!=typeof t&&(t=localStorage.getItem("searchData"),n=JSON.parse(t)),printRs(this,n,r)})}},searchFuncSW=function(e){fetch(e+"searchData.json").then(function(e){return e.json()}).then(function(e){var t=JSON.stringify(e),n=JSON.parse(t),o=document.getElementById("local-search-input");if(o){var r=document.getElementById("local-search-result");o.addEventListener("input",function(){printRs(this,n,r)})}})},printRs=function(e,t,n){var m='<ul class="search-result-list">',h=e.value.trim().toLowerCase().split(/[\s\-]+/);n.innerHTML="",e.value.trim().length<=0||(t.forEach(function(e){var n=!0;e.title&&""!==e.title.trim()||(e.title="Untitled");var o=e.title.trim().toLowerCase(),r=e.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),t=e.url,a=-1,i=-1,c=-1;if(""!==r?h.forEach(function(e,t){a=o.indexOf(e),i=r.indexOf(e),a<0&&i<0?n=!1:(i<0&&(i=0),0==t&&(c=i))}):n=!1,n){m+="<li><a href='"+t+"' class='search-result-title'>"+o+"</a>";var s=e.content.trim().replace(/<[^>]+>/g,"");if(0<=c){var l=c-20,u=c+80;l<0&&(l=0),0==l&&(u=100),u>s.length&&(u=s.length);var d=s.substr(l,u);h.forEach(function(e){var t=new RegExp(e,"gi");d=d.replace(t,'<em class="search-keyword">'+e+"</em>")}),m+='<p class="search-result">'+d+"...</p>"}m+="</li>"}}),m+="</ul>",n.innerHTML=m)};