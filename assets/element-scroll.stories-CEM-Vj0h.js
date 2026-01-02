import{d as $e,h as Ie,s as Pe,v as Xe,u as Ye,o as qe,r as Ue}from"./vue.esm-bundler-C23JohzN.js";function Y(i){var t=typeof i;return i!=null&&(t=="object"||t=="function")}var Ge=typeof global=="object"&&global&&global.Object===Object&&global,Ke=typeof self=="object"&&self&&self.Object===Object&&self,Ne=Ge||Ke||Function("return this")(),G=function(){return Ne.Date.now()},Qe=/\s/;function Ze(i){for(var t=i.length;t--&&Qe.test(i.charAt(t)););return t}var Je=/^\s+/;function et(i){return i&&i.slice(0,Ze(i)+1).replace(Je,"")}var q=Ne.Symbol,Le=Object.prototype,tt=Le.hasOwnProperty,it=Le.toString,z=q?q.toStringTag:void 0;function rt(i){var t=tt.call(i,z),r=i[z];try{i[z]=void 0;var e=!0}catch{}var s=it.call(i);return e&&(t?i[z]=r:delete i[z]),s}var st=Object.prototype,nt=st.toString;function lt(i){return nt.call(i)}var ot="[object Null]",at="[object Undefined]",J=q?q.toStringTag:void 0;function dt(i){return i==null?i===void 0?at:ot:J&&J in Object(i)?rt(i):lt(i)}function ct(i){return i!=null&&typeof i=="object"}var pt="[object Symbol]";function ut(i){return typeof i=="symbol"||ct(i)&&dt(i)==pt}var ee=NaN,ht=/^[-+]0x[0-9a-f]+$/i,ft=/^0b[01]+$/i,mt=/^0o[0-7]+$/i,gt=parseInt;function te(i){if(typeof i=="number")return i;if(ut(i))return ee;if(Y(i)){var t=typeof i.valueOf=="function"?i.valueOf():i;i=Y(t)?t+"":t}if(typeof i!="string")return i===0?i:+i;i=et(i);var r=ft.test(i);return r||mt.test(i)?gt(i.slice(2),r?2:8):ht.test(i)?ee:+i}var vt="Expected a function",yt=Math.max,xt=Math.min;function X(i,t,r){var e,s,n,o,l,a,d=0,f=!1,p=!1,m=!0;if(typeof i!="function")throw new TypeError(vt);t=te(t)||0,Y(r)&&(f=!!r.leading,p="maxWait"in r,n=p?yt(te(r.maxWait)||0,t):n,m="trailing"in r?!!r.trailing:m);function u(c){var y=e,x=s;return e=s=void 0,d=c,o=i.apply(x,y),o}function O(c){return d=c,l=setTimeout(v,t),f?u(c):o}function E(c){var y=c-a,x=c-d,Z=t-y;return p?xt(Z,n-x):Z}function b(c){var y=c-a,x=c-d;return a===void 0||y>=t||y<0||p&&x>=n}function v(){var c=G();if(b(c))return S(c);l=setTimeout(v,E(c))}function S(c){return l=void 0,m&&e?u(c):(e=s=void 0,o)}function N(){l!==void 0&&clearTimeout(l),d=0,e=a=s=l=void 0}function U(){return l===void 0?o:S(G())}function W(){var c=G(),y=b(c);if(e=arguments,s=this,a=c,y){if(l===void 0)return O(a);if(p)return clearTimeout(l),l=setTimeout(v,t),u(a)}return l===void 0&&(l=setTimeout(v,t)),o}return W.cancel=N,W.flush=U,W}var bt="Expected a function";function Et(i,t,r){var e=!0,s=!0;if(typeof i!="function")throw new TypeError(bt);return Y(r)&&(e="leading"in r?!!r.leading:e,s="trailing"in r?!!r.trailing:s),X(i,t,{leading:e,maxWait:t,trailing:s})}var D=function(){return D=Object.assign||function(t){for(var r,e=1,s=arguments.length;e<s;e++){r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},D.apply(this,arguments)};function _e(i){return!i||!i.ownerDocument||!i.ownerDocument.defaultView?window:i.ownerDocument.defaultView}function Re(i){return!i||!i.ownerDocument?document:i.ownerDocument}var Fe=function(i){var t={},r=Array.prototype.reduce.call(i,function(e,s){var n=s.name.match(/data-simplebar-(.+)/);if(n){var o=n[1].replace(/\W+(.)/g,function(l,a){return a.toUpperCase()});switch(s.value){case"true":e[o]=!0;break;case"false":e[o]=!1;break;case void 0:e[o]=!0;break;default:e[o]=s.value}}return e},t);return r};function je(i,t){var r;i&&(r=i.classList).add.apply(r,t.split(" "))}function He(i,t){i&&t.split(" ").forEach(function(r){i.classList.remove(r)})}function Ve(i){return".".concat(i.split(" ").join("."))}var Q=!!(typeof window<"u"&&window.document&&window.document.createElement),St=Object.freeze({__proto__:null,addClasses:je,canUseDOM:Q,classNamesToQuery:Ve,getElementDocument:Re,getElementWindow:_e,getOptions:Fe,removeClasses:He}),B=null,ie=null;Q&&window.addEventListener("resize",function(){ie!==window.devicePixelRatio&&(ie=window.devicePixelRatio,B=null)});function re(){if(B===null){if(typeof document>"u")return B=0,B;var i=document.body,t=document.createElement("div");t.classList.add("simplebar-hide-scrollbar"),i.appendChild(t);var r=t.getBoundingClientRect().right;i.removeChild(t),B=r}return B}var C=_e,K=Re,Ct=Fe,k=je,w=He,h=Ve,M=function(){function i(t,r){r===void 0&&(r={});var e=this;if(this.removePreventClickId=null,this.minScrollbarWidth=20,this.stopScrollDelay=175,this.isScrolling=!1,this.isMouseEntering=!1,this.isDragging=!1,this.scrollXTicking=!1,this.scrollYTicking=!1,this.wrapperEl=null,this.contentWrapperEl=null,this.contentEl=null,this.offsetEl=null,this.maskEl=null,this.placeholderEl=null,this.heightAutoObserverWrapperEl=null,this.heightAutoObserverEl=null,this.rtlHelpers=null,this.scrollbarWidth=0,this.resizeObserver=null,this.mutationObserver=null,this.elStyles=null,this.isRtl=null,this.mouseX=0,this.mouseY=0,this.onMouseMove=function(){},this.onWindowResize=function(){},this.onStopScrolling=function(){},this.onMouseEntered=function(){},this.onScroll=function(){var s=C(e.el);e.scrollXTicking||(s.requestAnimationFrame(e.scrollX),e.scrollXTicking=!0),e.scrollYTicking||(s.requestAnimationFrame(e.scrollY),e.scrollYTicking=!0),e.isScrolling||(e.isScrolling=!0,k(e.el,e.classNames.scrolling)),e.showScrollbar("x"),e.showScrollbar("y"),e.onStopScrolling()},this.scrollX=function(){e.axis.x.isOverflowing&&e.positionScrollbar("x"),e.scrollXTicking=!1},this.scrollY=function(){e.axis.y.isOverflowing&&e.positionScrollbar("y"),e.scrollYTicking=!1},this._onStopScrolling=function(){w(e.el,e.classNames.scrolling),e.options.autoHide&&(e.hideScrollbar("x"),e.hideScrollbar("y")),e.isScrolling=!1},this.onMouseEnter=function(){e.isMouseEntering||(k(e.el,e.classNames.mouseEntered),e.showScrollbar("x"),e.showScrollbar("y"),e.isMouseEntering=!0),e.onMouseEntered()},this._onMouseEntered=function(){w(e.el,e.classNames.mouseEntered),e.options.autoHide&&(e.hideScrollbar("x"),e.hideScrollbar("y")),e.isMouseEntering=!1},this._onMouseMove=function(s){e.mouseX=s.clientX,e.mouseY=s.clientY,(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&e.onMouseMoveForAxis("x"),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&e.onMouseMoveForAxis("y")},this.onMouseLeave=function(){e.onMouseMove.cancel(),(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&e.onMouseLeaveForAxis("x"),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&e.onMouseLeaveForAxis("y"),e.mouseX=-1,e.mouseY=-1},this._onWindowResize=function(){e.scrollbarWidth=e.getScrollbarWidth(),e.hideNativeScrollbar()},this.onPointerEvent=function(s){if(!(!e.axis.x.track.el||!e.axis.y.track.el||!e.axis.x.scrollbar.el||!e.axis.y.scrollbar.el)){var n,o;e.axis.x.track.rect=e.axis.x.track.el.getBoundingClientRect(),e.axis.y.track.rect=e.axis.y.track.el.getBoundingClientRect(),(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&(n=e.isWithinBounds(e.axis.x.track.rect)),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&(o=e.isWithinBounds(e.axis.y.track.rect)),(n||o)&&(s.stopPropagation(),s.type==="pointerdown"&&s.pointerType!=="touch"&&(n&&(e.axis.x.scrollbar.rect=e.axis.x.scrollbar.el.getBoundingClientRect(),e.isWithinBounds(e.axis.x.scrollbar.rect)?e.onDragStart(s,"x"):e.onTrackClick(s,"x")),o&&(e.axis.y.scrollbar.rect=e.axis.y.scrollbar.el.getBoundingClientRect(),e.isWithinBounds(e.axis.y.scrollbar.rect)?e.onDragStart(s,"y"):e.onTrackClick(s,"y"))))}},this.drag=function(s){var n,o,l,a,d,f,p,m,u,O,E;if(!(!e.draggedAxis||!e.contentWrapperEl)){var b,v=e.axis[e.draggedAxis].track,S=(o=(n=v.rect)===null||n===void 0?void 0:n[e.axis[e.draggedAxis].sizeAttr])!==null&&o!==void 0?o:0,N=e.axis[e.draggedAxis].scrollbar,U=(a=(l=e.contentWrapperEl)===null||l===void 0?void 0:l[e.axis[e.draggedAxis].scrollSizeAttr])!==null&&a!==void 0?a:0,W=parseInt((f=(d=e.elStyles)===null||d===void 0?void 0:d[e.axis[e.draggedAxis].sizeAttr])!==null&&f!==void 0?f:"0px",10);s.preventDefault(),s.stopPropagation(),e.draggedAxis==="y"?b=s.pageY:b=s.pageX;var c=b-((m=(p=v.rect)===null||p===void 0?void 0:p[e.axis[e.draggedAxis].offsetAttr])!==null&&m!==void 0?m:0)-e.axis[e.draggedAxis].dragOffset;c=e.draggedAxis==="x"&&e.isRtl?((O=(u=v.rect)===null||u===void 0?void 0:u[e.axis[e.draggedAxis].sizeAttr])!==null&&O!==void 0?O:0)-N.size-c:c;var y=c/(S-N.size),x=y*(U-W);e.draggedAxis==="x"&&e.isRtl&&(x=!((E=i.getRtlHelpers())===null||E===void 0)&&E.isScrollingToNegative?-x:x),e.contentWrapperEl[e.axis[e.draggedAxis].scrollOffsetAttr]=x}},this.onEndDrag=function(s){e.isDragging=!1;var n=K(e.el),o=C(e.el);s.preventDefault(),s.stopPropagation(),w(e.el,e.classNames.dragging),e.onStopScrolling(),n.removeEventListener("mousemove",e.drag,!0),n.removeEventListener("mouseup",e.onEndDrag,!0),e.removePreventClickId=o.setTimeout(function(){n.removeEventListener("click",e.preventClick,!0),n.removeEventListener("dblclick",e.preventClick,!0),e.removePreventClickId=null})},this.preventClick=function(s){s.preventDefault(),s.stopPropagation()},this.el=t,this.options=D(D({},i.defaultOptions),r),this.classNames=D(D({},i.defaultOptions.classNames),r.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}}},typeof this.el!="object"||!this.el.nodeName)throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));this.onMouseMove=Et(this._onMouseMove,64),this.onWindowResize=X(this._onWindowResize,64,{leading:!0}),this.onStopScrolling=X(this._onStopScrolling,this.stopScrollDelay),this.onMouseEntered=X(this._onMouseEntered,this.stopScrollDelay),this.init()}return i.getRtlHelpers=function(){if(i.rtlHelpers)return i.rtlHelpers;var t=document.createElement("div");t.innerHTML='<div class="simplebar-dummy-scrollbar-size"><div></div></div>';var r=t.firstElementChild,e=r==null?void 0:r.firstElementChild;if(!e)return null;document.body.appendChild(r),r.scrollLeft=0;var s=i.getOffset(r),n=i.getOffset(e);r.scrollLeft=-999;var o=i.getOffset(e);return document.body.removeChild(r),i.rtlHelpers={isScrollOriginAtZero:s.left!==n.left,isScrollingToNegative:n.left!==o.left},i.rtlHelpers},i.prototype.getScrollbarWidth=function(){try{return this.contentWrapperEl&&getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display==="none"||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:re()}catch{return re()}},i.getOffset=function(t){var r=t.getBoundingClientRect(),e=K(t),s=C(t);return{top:r.top+(s.pageYOffset||e.documentElement.scrollTop),left:r.left+(s.pageXOffset||e.documentElement.scrollLeft)}},i.prototype.init=function(){Q&&(this.initDOM(),this.rtlHelpers=i.getRtlHelpers(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},i.prototype.initDOM=function(){var t,r;this.wrapperEl=this.el.querySelector(h(this.classNames.wrapper)),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(h(this.classNames.contentWrapper)),this.contentEl=this.options.contentNode||this.el.querySelector(h(this.classNames.contentEl)),this.offsetEl=this.el.querySelector(h(this.classNames.offset)),this.maskEl=this.el.querySelector(h(this.classNames.mask)),this.placeholderEl=this.findChild(this.wrapperEl,h(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(h(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(h(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.findChild(this.el,"".concat(h(this.classNames.track)).concat(h(this.classNames.horizontal))),this.axis.y.track.el=this.findChild(this.el,"".concat(h(this.classNames.track)).concat(h(this.classNames.vertical))),this.axis.x.scrollbar.el=((t=this.axis.x.track.el)===null||t===void 0?void 0:t.querySelector(h(this.classNames.scrollbar)))||null,this.axis.y.scrollbar.el=((r=this.axis.y.track.el)===null||r===void 0?void 0:r.querySelector(h(this.classNames.scrollbar)))||null,this.options.autoHide||(k(this.axis.x.scrollbar.el,this.classNames.visible),k(this.axis.y.scrollbar.el,this.classNames.visible))},i.prototype.initListeners=function(){var t=this,r,e=C(this.el);if(this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("pointerdown",this.onPointerEvent,!0),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),(r=this.contentWrapperEl)===null||r===void 0||r.addEventListener("scroll",this.onScroll),e.addEventListener("resize",this.onWindowResize),!!this.contentEl){if(window.ResizeObserver){var s=!1,n=e.ResizeObserver||ResizeObserver;this.resizeObserver=new n(function(){s&&e.requestAnimationFrame(function(){t.recalculate()})}),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),e.requestAnimationFrame(function(){s=!0})}this.mutationObserver=new e.MutationObserver(function(){e.requestAnimationFrame(function(){t.recalculate()})}),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}},i.prototype.recalculate=function(){if(!(!this.heightAutoObserverEl||!this.contentEl||!this.contentWrapperEl||!this.wrapperEl||!this.placeholderEl)){var t=C(this.el);this.elStyles=t.getComputedStyle(this.el),this.isRtl=this.elStyles.direction==="rtl";var r=this.contentEl.offsetWidth,e=this.heightAutoObserverEl.offsetHeight<=1,s=this.heightAutoObserverEl.offsetWidth<=1||r>0,n=this.contentWrapperEl.offsetWidth,o=this.elStyles.overflowX,l=this.elStyles.overflowY;this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft);var a=this.contentEl.scrollHeight,d=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=e?"auto":"100%",this.placeholderEl.style.width=s?"".concat(r||d,"px"):"auto",this.placeholderEl.style.height="".concat(a,"px");var f=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=r!==0&&d>r,this.axis.y.isOverflowing=a>f,this.axis.x.isOverflowing=o==="hidden"?!1:this.axis.x.isOverflowing,this.axis.y.isOverflowing=l==="hidden"?!1:this.axis.y.isOverflowing,this.axis.x.forceVisible=this.options.forceVisible==="x"||this.options.forceVisible===!0,this.axis.y.forceVisible=this.options.forceVisible==="y"||this.options.forceVisible===!0,this.hideNativeScrollbar();var p=this.axis.x.isOverflowing?this.scrollbarWidth:0,m=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&d>n-m,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&a>f-p,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el&&(this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px")),this.axis.y.scrollbar.el&&(this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px")),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},i.prototype.getScrollbarSize=function(t){var r,e;if(t===void 0&&(t="y"),!this.axis[t].isOverflowing||!this.contentEl)return 0;var s=this.contentEl[this.axis[t].scrollSizeAttr],n=(e=(r=this.axis[t].track.el)===null||r===void 0?void 0:r[this.axis[t].offsetSizeAttr])!==null&&e!==void 0?e:0,o=n/s,l;return l=Math.max(~~(o*n),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(l=Math.min(l,this.options.scrollbarMaxSize)),l},i.prototype.positionScrollbar=function(t){var r,e,s;t===void 0&&(t="y");var n=this.axis[t].scrollbar;if(!(!this.axis[t].isOverflowing||!this.contentWrapperEl||!n.el||!this.elStyles)){var o=this.contentWrapperEl[this.axis[t].scrollSizeAttr],l=((r=this.axis[t].track.el)===null||r===void 0?void 0:r[this.axis[t].offsetSizeAttr])||0,a=parseInt(this.elStyles[this.axis[t].sizeAttr],10),d=this.contentWrapperEl[this.axis[t].scrollOffsetAttr];d=t==="x"&&this.isRtl&&(!((e=i.getRtlHelpers())===null||e===void 0)&&e.isScrollOriginAtZero)?-d:d,t==="x"&&this.isRtl&&(d=!((s=i.getRtlHelpers())===null||s===void 0)&&s.isScrollingToNegative?d:-d);var f=d/(o-a),p=~~((l-n.size)*f);p=t==="x"&&this.isRtl?-p+(l-n.size):p,n.el.style.transform=t==="x"?"translate3d(".concat(p,"px, 0, 0)"):"translate3d(0, ".concat(p,"px, 0)")}},i.prototype.toggleTrackVisibility=function(t){t===void 0&&(t="y");var r=this.axis[t].track.el,e=this.axis[t].scrollbar.el;!r||!e||!this.contentWrapperEl||(this.axis[t].isOverflowing||this.axis[t].forceVisible?(r.style.visibility="visible",this.contentWrapperEl.style[this.axis[t].overflowAttr]="scroll",this.el.classList.add("".concat(this.classNames.scrollable,"-").concat(t))):(r.style.visibility="hidden",this.contentWrapperEl.style[this.axis[t].overflowAttr]="hidden",this.el.classList.remove("".concat(this.classNames.scrollable,"-").concat(t))),this.axis[t].isOverflowing?e.style.display="block":e.style.display="none")},i.prototype.showScrollbar=function(t){t===void 0&&(t="y"),this.axis[t].isOverflowing&&!this.axis[t].scrollbar.isVisible&&(k(this.axis[t].scrollbar.el,this.classNames.visible),this.axis[t].scrollbar.isVisible=!0)},i.prototype.hideScrollbar=function(t){t===void 0&&(t="y"),!this.isDragging&&this.axis[t].isOverflowing&&this.axis[t].scrollbar.isVisible&&(w(this.axis[t].scrollbar.el,this.classNames.visible),this.axis[t].scrollbar.isVisible=!1)},i.prototype.hideNativeScrollbar=function(){this.offsetEl&&(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px",this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px")},i.prototype.onMouseMoveForAxis=function(t){t===void 0&&(t="y");var r=this.axis[t];!r.track.el||!r.scrollbar.el||(r.track.rect=r.track.el.getBoundingClientRect(),r.scrollbar.rect=r.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(r.track.rect)?(this.showScrollbar(t),k(r.track.el,this.classNames.hover),this.isWithinBounds(r.scrollbar.rect)?k(r.scrollbar.el,this.classNames.hover):w(r.scrollbar.el,this.classNames.hover)):(w(r.track.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(t)))},i.prototype.onMouseLeaveForAxis=function(t){t===void 0&&(t="y"),w(this.axis[t].track.el,this.classNames.hover),w(this.axis[t].scrollbar.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(t)},i.prototype.onDragStart=function(t,r){var e;r===void 0&&(r="y"),this.isDragging=!0;var s=K(this.el),n=C(this.el),o=this.axis[r].scrollbar,l=r==="y"?t.pageY:t.pageX;this.axis[r].dragOffset=l-(((e=o.rect)===null||e===void 0?void 0:e[this.axis[r].offsetAttr])||0),this.draggedAxis=r,k(this.el,this.classNames.dragging),s.addEventListener("mousemove",this.drag,!0),s.addEventListener("mouseup",this.onEndDrag,!0),this.removePreventClickId===null?(s.addEventListener("click",this.preventClick,!0),s.addEventListener("dblclick",this.preventClick,!0)):(n.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},i.prototype.onTrackClick=function(t,r){var e=this,s,n,o,l;r===void 0&&(r="y");var a=this.axis[r];if(!(!this.options.clickOnTrack||!a.scrollbar.el||!this.contentWrapperEl)){t.preventDefault();var d=C(this.el);this.axis[r].scrollbar.rect=a.scrollbar.el.getBoundingClientRect();var f=this.axis[r].scrollbar,p=(n=(s=f.rect)===null||s===void 0?void 0:s[this.axis[r].offsetAttr])!==null&&n!==void 0?n:0,m=parseInt((l=(o=this.elStyles)===null||o===void 0?void 0:o[this.axis[r].sizeAttr])!==null&&l!==void 0?l:"0px",10),u=this.contentWrapperEl[this.axis[r].scrollOffsetAttr],O=r==="y"?this.mouseY-p:this.mouseX-p,E=O<0?-1:1,b=E===-1?u-m:u+m,v=40,S=function(){e.contentWrapperEl&&(E===-1?u>b&&(u-=v,e.contentWrapperEl[e.axis[r].scrollOffsetAttr]=u,d.requestAnimationFrame(S)):u<b&&(u+=v,e.contentWrapperEl[e.axis[r].scrollOffsetAttr]=u,d.requestAnimationFrame(S)))};S()}},i.prototype.getContentElement=function(){return this.contentEl},i.prototype.getScrollElement=function(){return this.contentWrapperEl},i.prototype.removeListeners=function(){var t=C(this.el);this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("pointerdown",this.onPointerEvent,!0),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),t.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.onMouseMove.cancel(),this.onWindowResize.cancel(),this.onStopScrolling.cancel(),this.onMouseEntered.cancel()},i.prototype.unMount=function(){this.removeListeners()},i.prototype.isWithinBounds=function(t){return this.mouseX>=t.left&&this.mouseX<=t.left+t.width&&this.mouseY>=t.top&&this.mouseY<=t.top+t.height},i.prototype.findChild=function(t,r){var e=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;return Array.prototype.filter.call(t.children,function(s){return e.call(s,r)})[0]},i.rtlHelpers=null,i.defaultOptions={forceVisible:!1,clickOnTrack:!0,scrollbarMinSize:25,scrollbarMaxSize:0,ariaLabel:"scrollable content",tabIndex:0,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging",scrolling:"simplebar-scrolling",scrollable:"simplebar-scrollable",mouseEntered:"simplebar-mouse-entered"},scrollableNode:null,contentNode:null,autoHide:!0},i.getOptions=Ct,i.helpers=St,i}(),A=function(){return A=Object.assign||function(t){for(var r,e=1,s=arguments.length;e<s;e++){r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},A.apply(this,arguments)},kt={beforeUnmount:"beforeUnmount"},T;function wt(i){var t,r=i.h,e=i.emit,s=i.slots,n=i.props,o=function(a){return e("scroll",a)},l=A(A({},M.defaultOptions.classNames),n.classNames);return r("div",A({ref:"element"},{"data-simplebar":"init"}),[r("div",{class:l.wrapper},[r("div",{class:l.heightAutoObserverWrapperEl},[r("div",{class:l.heightAutoObserverEl})]),r("div",{class:l.mask},[r("div",{class:l.offset},[r("div",A(A({},{onScroll:o,class:l.contentWrapper,tabIndex:n.tabIndex||M.defaultOptions.tabIndex,role:"region","aria-label":n.ariaLabel||M.defaultOptions.ariaLabel}),{ref:"scrollElement"}),[r("div",{class:l.contentEl,ref:"contentElement"},(t=s.default)===null||t===void 0?void 0:t.call(s))])])]),r("div",{class:l.placeholder})]),r("div",{class:"".concat(l.track," simplebar-horizontal")},[r("div",{class:l.scrollbar})]),r("div",{class:"".concat(l.track," simplebar-vertical")},[r("div",{class:l.scrollbar})])])}var Ot=$e((T={name:"simplebar-vue",props:{autoHide:{type:Boolean,default:void 0},classNames:Object,forceVisible:{type:[Boolean,String],validator:function(i){return typeof i=="boolean"||i==="x"||i==="y"},default:void 0},ariaLabel:String,tabIndex:Number,direction:{type:String,validator:function(i){return i==="ltr"||i==="rtl"}},timeout:Number,clickOnTrack:{type:Boolean,default:void 0},scrollbarMinSize:Number,scrollbarMaxSize:Number},emits:["scroll"],data:function(){return{}},mounted:function(){for(var i=M.getOptions(this.$refs.element.attributes),t=0,r=Object.entries(this.$props);t<r.length;t++){var e=r[t],s=e[0],n=e[1];n!=null&&typeof n!="function"&&(i[s]=n)}this.SimpleBar=new M(this.$refs.element,i),this.scrollElement=this.$refs.scrollElement,this.contentElement=this.$refs.contentElement}},T[kt.beforeUnmount]=function(){var i;(i=this.SimpleBar)===null||i===void 0||i.unMount(),this.SimpleBar=void 0},T.methods={recalculate:function(){var i;(i=this.SimpleBar)===null||i===void 0||i.recalculate()}},T.render=function(i){var t=this;return wt({h:typeof i=="function"?i:Ie,emit:function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return t.$emit.apply(t,r)},slots:this.$slots,props:this.$props})},T));const g={__name:"element-scroll",setup(i){return(t,r)=>(qe(),Pe(Ye(Ot),null,{default:Xe(()=>[Ue(t.$slots,"default")]),_:3}))}};g.__docgenInfo={exportName:"default",displayName:"element-scroll",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/kokimin/WorkSpace/npm-framework/src/components/display/ElementScroll/element-scroll.vue"]};const Bt={title:"Display/ElementScroll",component:g,tags:["autodocs"]},L={render:()=>({components:{ElementScroll:g},template:`
      <div style="height: 300px; border: 1px solid #ddd; border-radius: 4px;">
        <ElementScroll>
          <div style="padding: 20px;">
            <h3 style="margin: 0 0 16px 0;">스크롤 가능한 콘텐츠</h3>
            <p v-for="i in 20" :key="i" style="margin: 8px 0;">
              {{ i }}. 이것은 스크롤 가능한 콘텐츠입니다. 세로 스크롤이 필요한 긴 텍스트입니다.
            </p>
          </div>
        </ElementScroll>
      </div>
    `})},_={render:()=>({components:{ElementScroll:g},template:`
      <div style="height: 400px; border: 1px solid #ddd; border-radius: 4px;">
        <ElementScroll>
          <div style="padding: 20px;">
            <h2 style="margin: 0 0 20px 0;">매우 긴 콘텐츠</h2>
            <div v-for="section in 5" :key="section">
              <h3 style="margin: 20px 0 12px 0;">섹션 {{ section }}</h3>
              <p v-for="i in 10" :key="i" style="margin: 8px 0; line-height: 1.6;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </ElementScroll>
      </div>
    `})},R={render:()=>({components:{ElementScroll:g},template:`
      <div style="height: 300px; width: 500px; border: 1px solid #ddd; border-radius: 4px;">
        <ElementScroll>
          <div style="padding: 20px; min-width: 1000px;">
            <h3 style="margin: 0 0 16px 0;">가로 스크롤 콘텐츠</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="background: #f5f5f5;">
                  <th style="padding: 12px; border: 1px solid #ddd;">컬럼 1</th>
                  <th style="padding: 12px; border: 1px solid #ddd;">컬럼 2</th>
                  <th style="padding: 12px; border: 1px solid #ddd;">컬럼 3</th>
                  <th style="padding: 12px; border: 1px solid #ddd;">컬럼 4</th>
                  <th style="padding: 12px; border: 1px solid #ddd;">컬럼 5</th>
                  <th style="padding: 12px; border: 1px solid #ddd;">컬럼 6</th>
                  <th style="padding: 12px; border: 1px solid #ddd;">컬럼 7</th>
                  <th style="padding: 12px; border: 1px solid #ddd;">컬럼 8</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in 15" :key="i">
                  <td style="padding: 12px; border: 1px solid #ddd;">데이터 {{ i }}-1</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">데이터 {{ i }}-2</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">데이터 {{ i }}-3</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">데이터 {{ i }}-4</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">데이터 {{ i }}-5</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">데이터 {{ i }}-6</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">데이터 {{ i }}-7</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">데이터 {{ i }}-8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ElementScroll>
      </div>
    `})},F={render:()=>({components:{ElementScroll:g},template:`
      <div style="height: 400px; border: 1px solid #ddd; border-radius: 8px; background: #f5f5f5;">
        <ElementScroll>
          <div style="padding: 16px; display: flex; flex-direction: column; gap: 12px;">
            <div v-for="i in 20" :key="i" :style="{ alignSelf: i % 2 === 0 ? 'flex-start' : 'flex-end' }">
              <div :style="{
                padding: '12px 16px',
                borderRadius: '12px',
                maxWidth: '70%',
                background: i % 2 === 0 ? 'white' : '#1976d2',
                color: i % 2 === 0 ? '#000' : '#fff'
              }">
                <p style="margin: 0; font-size: 14px;">
                  {{ i % 2 === 0 ? '받은 메시지 ' + i : '보낸 메시지 ' + i }}
                </p>
                <p style="margin: 4px 0 0 0; font-size: 11px; opacity: 0.7;">
                  {{ new Date().toLocaleTimeString('ko-KR') }}
                </p>
              </div>
            </div>
          </div>
        </ElementScroll>
      </div>
    `})},j={render:()=>({components:{ElementScroll:g},template:`
      <div style="height: 300px; border: 1px solid #ddd; border-radius: 4px; background: #282c34;">
        <ElementScroll>
          <pre style="margin: 0; padding: 20px; color: #abb2bf; font-family: 'Courier New', monospace; font-size: 14px; line-height: 1.6;">
<span style="color: #c678dd;">function</span> <span style="color: #61afef;">fibonacci</span>(<span style="color: #e06c75;">n</span>) {
  <span style="color: #c678dd;">if</span> (<span style="color: #e06c75;">n</span> <= <span style="color: #d19a66;">1</span>) <span style="color: #c678dd;">return</span> <span style="color: #e06c75;">n</span>;
  <span style="color: #c678dd;">return</span> <span style="color: #61afef;">fibonacci</span>(<span style="color: #e06c75;">n</span> - <span style="color: #d19a66;">1</span>) + <span style="color: #61afef;">fibonacci</span>(<span style="color: #e06c75;">n</span> - <span style="color: #d19a66;">2</span>);
}

<span style="color: #c678dd;">const</span> <span style="color: #e06c75;">result</span> = <span style="color: #61afef;">fibonacci</span>(<span style="color: #d19a66;">10</span>);
<span style="color: #61afef;">console</span>.<span style="color: #61afef;">log</span>(<span style="color: #98c379;">'Result:'</span>, <span style="color: #e06c75;">result</span>);

<span style="color: #5c6370;">// 더 많은 코드...</span>
<span style="color: #c678dd;">for</span> (<span style="color: #c678dd;">let</span> <span style="color: #e06c75;">i</span> = <span style="color: #d19a66;">0</span>; <span style="color: #e06c75;">i</span> < <span style="color: #d19a66;">20</span>; <span style="color: #e06c75;">i</span>++) {
  <span style="color: #61afef;">console</span>.<span style="color: #61afef;">log</span>(<span style="color: #98c379;">\`Line \${</span><span style="color: #e06c75;">i</span><span style="color: #98c379;">}: Some code here\`</span>);
}

<span style="color: #c678dd;">class</span> <span style="color: #e5c07b;">Example</span> {
  <span style="color: #61afef;">constructor</span>(<span style="color: #e06c75;">name</span>) {
    <span style="color: #c678dd;">this</span>.<span style="color: #e06c75;">name</span> = <span style="color: #e06c75;">name</span>;
  }

  <span style="color: #61afef;">greet</span>() {
    <span style="color: #c678dd;">return</span> <span style="color: #98c379;">\`Hello, \${</span><span style="color: #c678dd;">this</span>.<span style="color: #e06c75;">name</span><span style="color: #98c379;">}\`</span>;
  }
}
          </pre>
        </ElementScroll>
      </div>
    `})},H={render:()=>({components:{ElementScroll:g},template:`
      <div style="width: 250px; height: 500px; border: 1px solid #ddd; border-radius: 4px; background: #2c3e50;">
        <ElementScroll>
          <div style="padding: 16px;">
            <div v-for="section in 8" :key="section" style="margin-bottom: 24px;">
              <h4 style="margin: 0 0 12px 0; color: #ecf0f1; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
                섹션 {{ section }}
              </h4>
              <div style="display: flex; flex-direction: column; gap: 4px;">
                <a
                  v-for="item in 5"
                  :key="item"
                  href="#"
                  style="padding: 10px 12px; color: #bdc3c7; text-decoration: none; border-radius: 4px; transition: background 0.2s;"
                  @mouseover="(e) => e.target.style.background = '#34495e'"
                  @mouseout="(e) => e.target.style.background = 'transparent'"
                >
                  메뉴 항목 {{ section }}-{{ item }}
                </a>
              </div>
            </div>
          </div>
        </ElementScroll>
      </div>
    `})},V={render:()=>({components:{ElementScroll:g},template:`
      <div style="height: 500px; border: 1px solid #ddd; border-radius: 4px; background: #f5f5f5;">
        <ElementScroll>
          <div style="padding: 20px; display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 16px;">
            <div
              v-for="i in 20"
              :key="i"
              style="padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"
            >
              <div style="width: 100%; height: 150px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 4px; margin-bottom: 12px;"></div>
              <h3 style="margin: 0 0 8px 0;">카드 제목 {{ i }}</h3>
              <p style="margin: 0; color: #666; font-size: 14px;">
                카드 설명 텍스트입니다. 이것은 샘플 콘텐츠입니다.
              </p>
            </div>
          </div>
        </ElementScroll>
      </div>
    `})},$={render:()=>({components:{ElementScroll:g},template:`
      <div style="height: 400px; border: 1px solid #ddd; border-radius: 4px;">
        <ElementScroll>
          <table style="width: 100%; border-collapse: collapse;">
            <thead style="position: sticky; top: 0; background: #f5f5f5; z-index: 1;">
              <tr>
                <th style="padding: 12px; border-bottom: 2px solid #ddd; text-align: left;">ID</th>
                <th style="padding: 12px; border-bottom: 2px solid #ddd; text-align: left;">이름</th>
                <th style="padding: 12px; border-bottom: 2px solid #ddd; text-align: left;">이메일</th>
                <th style="padding: 12px; border-bottom: 2px solid #ddd; text-align: left;">상태</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 50" :key="i" style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px;">{{ i }}</td>
                <td style="padding: 12px;">사용자 {{ i }}</td>
                <td style="padding: 12px;">user{{ i }}@example.com</td>
                <td style="padding: 12px;">
                  <span :style="{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    background: i % 2 === 0 ? '#e8f5e9' : '#fff3e0',
                    color: i % 2 === 0 ? '#2e7d32' : '#e65100'
                  }">
                    {{ i % 2 === 0 ? '활성' : '대기' }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </ElementScroll>
      </div>
    `})},I={render:()=>({components:{ElementScroll:g},template:`
      <div style="height: 500px; border: 1px solid #ddd; border-radius: 8px; background: white;">
        <ElementScroll>
          <div style="padding: 24px;">
            <h3 style="margin: 0 0 24px 0;">활동 타임라인</h3>
            <div style="position: relative; padding-left: 40px;">
              <div style="position: absolute; left: 15px; top: 0; bottom: 0; width: 2px; background: #e0e0e0;"></div>
              <div v-for="i in 15" :key="i" style="position: relative; margin-bottom: 32px;">
                <div style="position: absolute; left: -32px; width: 12px; height: 12px; border-radius: 50%; background: #1976d2; border: 3px solid white; box-shadow: 0 0 0 2px #1976d2;"></div>
                <div style="padding: 16px; background: #f5f5f5; border-radius: 8px;">
                  <p style="margin: 0 0 4px 0; font-weight: bold;">이벤트 {{ i }}</p>
                  <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">
                    이것은 타임라인 이벤트 설명입니다. 세부 정보가 여기에 표시됩니다.
                  </p>
                  <p style="margin: 0; font-size: 12px; color: #999;">
                    {{ new Date(Date.now() - i * 3600000).toLocaleString('ko-KR') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ElementScroll>
      </div>
    `})},P={render:()=>({components:{ElementScroll:g},template:`
      <div style="height: 600px; border: 1px solid #ddd; border-radius: 4px; background: #fafafa;">
        <ElementScroll>
          <div style="padding: 24px;">
            <h2 style="margin: 0 0 24px 0;">상품 갤러리</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px;">
              <div v-for="i in 30" :key="i" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div :style="{
                  width: '100%',
                  height: '200px',
                  background: \`linear-gradient(135deg, hsl(\${i * 12}, 70%, 60%) 0%, hsl(\${i * 12 + 30}, 70%, 70%) 100%)\`
                }"></div>
                <div style="padding: 16px;">
                  <h4 style="margin: 0 0 8px 0;">상품 {{ i }}</h4>
                  <p style="margin: 0 0 12px 0; color: #666; font-size: 14px;">
                    상품 설명 텍스트
                  </p>
                  <p style="margin: 0; font-size: 18px; font-weight: bold; color: #1976d2;">
                    {{ (i * 10000).toLocaleString() }}원
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ElementScroll>
      </div>
    `})};var se,ne,le;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementScroll
    },
    template: \`
      <div style="height: 300px; border: 1px solid #ddd; border-radius: 4px;">
        <ElementScroll>
          <div style="padding: 20px;">
            <h3 style="margin: 0 0 16px 0;">스크롤 가능한 콘텐츠</h3>
            <p v-for="i in 20" :key="i" style="margin: 8px 0;">
              {{ i }}. 이것은 스크롤 가능한 콘텐츠입니다. 세로 스크롤이 필요한 긴 텍스트입니다.
            </p>
          </div>
        </ElementScroll>
      </div>
    \`
  })
}`,...(le=(ne=L.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var oe,ae,de;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementScroll
    },
    template: \`
      <div style="height: 400px; border: 1px solid #ddd; border-radius: 4px;">
        <ElementScroll>
          <div style="padding: 20px;">
            <h2 style="margin: 0 0 20px 0;">매우 긴 콘텐츠</h2>
            <div v-for="section in 5" :key="section">
              <h3 style="margin: 20px 0 12px 0;">섹션 {{ section }}</h3>
              <p v-for="i in 10" :key="i" style="margin: 8px 0; line-height: 1.6;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </ElementScroll>
      </div>
    \`
  })
}`,...(de=(ae=_.parameters)==null?void 0:ae.docs)==null?void 0:de.source}}};var ce,pe,ue;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementScroll
    },
    template: \`
      <div style="height: 300px; width: 500px; border: 1px solid #ddd; border-radius: 4px;">
        <ElementScroll>
          <div style="padding: 20px; min-width: 1000px;">
            <h3 style="margin: 0 0 16px 0;">가로 스크롤 콘텐츠</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="background: #f5f5f5;">
                  <th style="padding: 12px; border: 1px solid #ddd;">컬럼 1</th>
                  <th style="padding: 12px; border: 1px solid #ddd;">컬럼 2</th>
                  <th style="padding: 12px; border: 1px solid #ddd;">컬럼 3</th>
                  <th style="padding: 12px; border: 1px solid #ddd;">컬럼 4</th>
                  <th style="padding: 12px; border: 1px solid #ddd;">컬럼 5</th>
                  <th style="padding: 12px; border: 1px solid #ddd;">컬럼 6</th>
                  <th style="padding: 12px; border: 1px solid #ddd;">컬럼 7</th>
                  <th style="padding: 12px; border: 1px solid #ddd;">컬럼 8</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in 15" :key="i">
                  <td style="padding: 12px; border: 1px solid #ddd;">데이터 {{ i }}-1</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">데이터 {{ i }}-2</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">데이터 {{ i }}-3</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">데이터 {{ i }}-4</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">데이터 {{ i }}-5</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">데이터 {{ i }}-6</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">데이터 {{ i }}-7</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">데이터 {{ i }}-8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ElementScroll>
      </div>
    \`
  })
}`,...(ue=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var he,fe,me;F.parameters={...F.parameters,docs:{...(he=F.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementScroll
    },
    template: \`
      <div style="height: 400px; border: 1px solid #ddd; border-radius: 8px; background: #f5f5f5;">
        <ElementScroll>
          <div style="padding: 16px; display: flex; flex-direction: column; gap: 12px;">
            <div v-for="i in 20" :key="i" :style="{ alignSelf: i % 2 === 0 ? 'flex-start' : 'flex-end' }">
              <div :style="{
                padding: '12px 16px',
                borderRadius: '12px',
                maxWidth: '70%',
                background: i % 2 === 0 ? 'white' : '#1976d2',
                color: i % 2 === 0 ? '#000' : '#fff'
              }">
                <p style="margin: 0; font-size: 14px;">
                  {{ i % 2 === 0 ? '받은 메시지 ' + i : '보낸 메시지 ' + i }}
                </p>
                <p style="margin: 4px 0 0 0; font-size: 11px; opacity: 0.7;">
                  {{ new Date().toLocaleTimeString('ko-KR') }}
                </p>
              </div>
            </div>
          </div>
        </ElementScroll>
      </div>
    \`
  })
}`,...(me=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:me.source}}};var ge,ve,ye;j.parameters={...j.parameters,docs:{...(ge=j.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementScroll
    },
    template: \`
      <div style="height: 300px; border: 1px solid #ddd; border-radius: 4px; background: #282c34;">
        <ElementScroll>
          <pre style="margin: 0; padding: 20px; color: #abb2bf; font-family: 'Courier New', monospace; font-size: 14px; line-height: 1.6;">
<span style="color: #c678dd;">function</span> <span style="color: #61afef;">fibonacci</span>(<span style="color: #e06c75;">n</span>) {
  <span style="color: #c678dd;">if</span> (<span style="color: #e06c75;">n</span> <= <span style="color: #d19a66;">1</span>) <span style="color: #c678dd;">return</span> <span style="color: #e06c75;">n</span>;
  <span style="color: #c678dd;">return</span> <span style="color: #61afef;">fibonacci</span>(<span style="color: #e06c75;">n</span> - <span style="color: #d19a66;">1</span>) + <span style="color: #61afef;">fibonacci</span>(<span style="color: #e06c75;">n</span> - <span style="color: #d19a66;">2</span>);
}

<span style="color: #c678dd;">const</span> <span style="color: #e06c75;">result</span> = <span style="color: #61afef;">fibonacci</span>(<span style="color: #d19a66;">10</span>);
<span style="color: #61afef;">console</span>.<span style="color: #61afef;">log</span>(<span style="color: #98c379;">'Result:'</span>, <span style="color: #e06c75;">result</span>);

<span style="color: #5c6370;">// 더 많은 코드...</span>
<span style="color: #c678dd;">for</span> (<span style="color: #c678dd;">let</span> <span style="color: #e06c75;">i</span> = <span style="color: #d19a66;">0</span>; <span style="color: #e06c75;">i</span> < <span style="color: #d19a66;">20</span>; <span style="color: #e06c75;">i</span>++) {
  <span style="color: #61afef;">console</span>.<span style="color: #61afef;">log</span>(<span style="color: #98c379;">\\\`Line \\\${</span><span style="color: #e06c75;">i</span><span style="color: #98c379;">}: Some code here\\\`</span>);
}

<span style="color: #c678dd;">class</span> <span style="color: #e5c07b;">Example</span> {
  <span style="color: #61afef;">constructor</span>(<span style="color: #e06c75;">name</span>) {
    <span style="color: #c678dd;">this</span>.<span style="color: #e06c75;">name</span> = <span style="color: #e06c75;">name</span>;
  }

  <span style="color: #61afef;">greet</span>() {
    <span style="color: #c678dd;">return</span> <span style="color: #98c379;">\\\`Hello, \\\${</span><span style="color: #c678dd;">this</span>.<span style="color: #e06c75;">name</span><span style="color: #98c379;">}\\\`</span>;
  }
}
          </pre>
        </ElementScroll>
      </div>
    \`
  })
}`,...(ye=(ve=j.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var xe,be,Ee;H.parameters={...H.parameters,docs:{...(xe=H.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementScroll
    },
    template: \`
      <div style="width: 250px; height: 500px; border: 1px solid #ddd; border-radius: 4px; background: #2c3e50;">
        <ElementScroll>
          <div style="padding: 16px;">
            <div v-for="section in 8" :key="section" style="margin-bottom: 24px;">
              <h4 style="margin: 0 0 12px 0; color: #ecf0f1; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
                섹션 {{ section }}
              </h4>
              <div style="display: flex; flex-direction: column; gap: 4px;">
                <a
                  v-for="item in 5"
                  :key="item"
                  href="#"
                  style="padding: 10px 12px; color: #bdc3c7; text-decoration: none; border-radius: 4px; transition: background 0.2s;"
                  @mouseover="(e) => e.target.style.background = '#34495e'"
                  @mouseout="(e) => e.target.style.background = 'transparent'"
                >
                  메뉴 항목 {{ section }}-{{ item }}
                </a>
              </div>
            </div>
          </div>
        </ElementScroll>
      </div>
    \`
  })
}`,...(Ee=(be=H.parameters)==null?void 0:be.docs)==null?void 0:Ee.source}}};var Se,Ce,ke;V.parameters={...V.parameters,docs:{...(Se=V.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementScroll
    },
    template: \`
      <div style="height: 500px; border: 1px solid #ddd; border-radius: 4px; background: #f5f5f5;">
        <ElementScroll>
          <div style="padding: 20px; display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 16px;">
            <div
              v-for="i in 20"
              :key="i"
              style="padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"
            >
              <div style="width: 100%; height: 150px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 4px; margin-bottom: 12px;"></div>
              <h3 style="margin: 0 0 8px 0;">카드 제목 {{ i }}</h3>
              <p style="margin: 0; color: #666; font-size: 14px;">
                카드 설명 텍스트입니다. 이것은 샘플 콘텐츠입니다.
              </p>
            </div>
          </div>
        </ElementScroll>
      </div>
    \`
  })
}`,...(ke=(Ce=V.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};var we,Oe,Ae;$.parameters={...$.parameters,docs:{...(we=$.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementScroll
    },
    template: \`
      <div style="height: 400px; border: 1px solid #ddd; border-radius: 4px;">
        <ElementScroll>
          <table style="width: 100%; border-collapse: collapse;">
            <thead style="position: sticky; top: 0; background: #f5f5f5; z-index: 1;">
              <tr>
                <th style="padding: 12px; border-bottom: 2px solid #ddd; text-align: left;">ID</th>
                <th style="padding: 12px; border-bottom: 2px solid #ddd; text-align: left;">이름</th>
                <th style="padding: 12px; border-bottom: 2px solid #ddd; text-align: left;">이메일</th>
                <th style="padding: 12px; border-bottom: 2px solid #ddd; text-align: left;">상태</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 50" :key="i" style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px;">{{ i }}</td>
                <td style="padding: 12px;">사용자 {{ i }}</td>
                <td style="padding: 12px;">user{{ i }}@example.com</td>
                <td style="padding: 12px;">
                  <span :style="{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    background: i % 2 === 0 ? '#e8f5e9' : '#fff3e0',
                    color: i % 2 === 0 ? '#2e7d32' : '#e65100'
                  }">
                    {{ i % 2 === 0 ? '활성' : '대기' }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </ElementScroll>
      </div>
    \`
  })
}`,...(Ae=(Oe=$.parameters)==null?void 0:Oe.docs)==null?void 0:Ae.source}}};var Be,De,We;I.parameters={...I.parameters,docs:{...(Be=I.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementScroll
    },
    template: \`
      <div style="height: 500px; border: 1px solid #ddd; border-radius: 8px; background: white;">
        <ElementScroll>
          <div style="padding: 24px;">
            <h3 style="margin: 0 0 24px 0;">활동 타임라인</h3>
            <div style="position: relative; padding-left: 40px;">
              <div style="position: absolute; left: 15px; top: 0; bottom: 0; width: 2px; background: #e0e0e0;"></div>
              <div v-for="i in 15" :key="i" style="position: relative; margin-bottom: 32px;">
                <div style="position: absolute; left: -32px; width: 12px; height: 12px; border-radius: 50%; background: #1976d2; border: 3px solid white; box-shadow: 0 0 0 2px #1976d2;"></div>
                <div style="padding: 16px; background: #f5f5f5; border-radius: 8px;">
                  <p style="margin: 0 0 4px 0; font-weight: bold;">이벤트 {{ i }}</p>
                  <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">
                    이것은 타임라인 이벤트 설명입니다. 세부 정보가 여기에 표시됩니다.
                  </p>
                  <p style="margin: 0; font-size: 12px; color: #999;">
                    {{ new Date(Date.now() - i * 3600000).toLocaleString('ko-KR') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ElementScroll>
      </div>
    \`
  })
}`,...(We=(De=I.parameters)==null?void 0:De.docs)==null?void 0:We.source}}};var ze,Te,Me;P.parameters={...P.parameters,docs:{...(ze=P.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementScroll
    },
    template: \`
      <div style="height: 600px; border: 1px solid #ddd; border-radius: 4px; background: #fafafa;">
        <ElementScroll>
          <div style="padding: 24px;">
            <h2 style="margin: 0 0 24px 0;">상품 갤러리</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px;">
              <div v-for="i in 30" :key="i" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div :style="{
                  width: '100%',
                  height: '200px',
                  background: \\\`linear-gradient(135deg, hsl(\\\${i * 12}, 70%, 60%) 0%, hsl(\\\${i * 12 + 30}, 70%, 70%) 100%)\\\`
                }"></div>
                <div style="padding: 16px;">
                  <h4 style="margin: 0 0 8px 0;">상품 {{ i }}</h4>
                  <p style="margin: 0 0 12px 0; color: #666; font-size: 14px;">
                    상품 설명 텍스트
                  </p>
                  <p style="margin: 0; font-size: 18px; font-weight: bold; color: #1976d2;">
                    {{ (i * 10000).toLocaleString() }}원
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ElementScroll>
      </div>
    \`
  })
}`,...(Me=(Te=P.parameters)==null?void 0:Te.docs)==null?void 0:Me.source}}};const Dt=["Default","LongContent","WideContent","ChatMessages","CodeBlock","SidebarMenu","CardList","DataTable","Timeline","ProductGallery"];export{V as CardList,F as ChatMessages,j as CodeBlock,$ as DataTable,L as Default,_ as LongContent,P as ProductGallery,H as SidebarMenu,I as Timeline,R as WideContent,Dt as __namedExportsOrder,Bt as default};
