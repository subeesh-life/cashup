import{Q as tt,g as at,a as lt,h as ot}from"./QScrollObserver.281fb6fd.js";import{c as R,d as $e,h as he,b as it,e as Be}from"./render.ea8b3e08.js";import{i as Ae,L as A,r as E,c as h,w as g,E as J,h as L,M as ze,g as z,N as Se,o as He,O as K,P as T,J as M,I as ye,Q as rt,R as nt,S as ut,U as st,V as dt,A as U,W as re,K as Te,C as ne,D as me,B as ue,H as ct,z as ft}from"./index.31642d3a.js";import{v as vt,b as mt,u as ht,c as yt}from"./QBtn.fc58a174.js";var $t=R({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:a,emit:n}){const{proxy:{$q:s}}=z(),t=Ae(ze,A);if(t===A)return console.error("QHeader needs to be child of QLayout"),A;const l=E(parseInt(e.heightHint,10)),u=E(!0),d=h(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||s.platform.is.ios&&t.isContainer.value===!0),y=h(()=>{if(e.modelValue!==!0)return 0;if(d.value===!0)return u.value===!0?l.value:0;const r=l.value-t.scroll.value.position;return r>0?r:0}),f=h(()=>e.modelValue!==!0||d.value===!0&&u.value!==!0),i=h(()=>e.modelValue===!0&&f.value===!0&&e.reveal===!0),q=h(()=>"q-header q-layout__section--marginal "+(d.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(f.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=h(()=>{const r=t.rows.value.top,c={};return r[0]==="l"&&t.left.space===!0&&(c[s.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),r[2]==="r"&&t.right.space===!0&&(c[s.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),c});function m(r,c){t.update("header",r,c)}function v(r,c){r.value!==c&&(r.value=c)}function k({height:r}){v(l,r),m("size",r)}function C(r){i.value===!0&&v(u,!0),n("focusin",r)}g(()=>e.modelValue,r=>{m("space",r),v(u,!0),t.animate()}),g(y,r=>{m("offset",r)}),g(()=>e.reveal,r=>{r===!1&&v(u,e.modelValue)}),g(u,r=>{t.animate(),n("reveal",r)}),g(t.scroll,r=>{e.reveal===!0&&v(u,r.direction==="up"||r.position<=e.revealOffset||r.position-r.inflectionPoint<100)});const p={};return t.instances.header=p,e.modelValue===!0&&m("size",l.value),m("space",e.modelValue),m("offset",y.value),J(()=>{t.instances.header===p&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const r=$e(a.default,[]);return e.elevated===!0&&r.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(L(tt,{debounce:0,onResize:k})),L("header",{class:q.value,style:w.value,onFocusin:C},r)}}});const be={dark:{type:Boolean,default:null}};function pe(e,a){return h(()=>e.dark===null?a.dark.isActive:e.dark)}var At=R({name:"QList",props:{...be,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const n=z(),s=pe(e,n.proxy.$q),t=h(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(s.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>L(e.tag,{class:t.value},he(a.default))}});function bt(e,a,n){let s;function t(){s!==void 0&&(Se.remove(s),s=void 0)}return J(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){s={condition:()=>n.value===!0,handler:a},Se.add(s)}}}const pt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},wt=["beforeShow","show","beforeHide","hide"];function gt({showing:e,canShow:a,hideOnRouteChange:n,handleShow:s,handleHide:t,processOnMount:l}){const u=z(),{props:d,emit:y,proxy:f}=u;let i;function q(r){e.value===!0?v(r):w(r)}function w(r){if(d.disable===!0||r!==void 0&&r.qAnchorHandled===!0||a!==void 0&&a(r)!==!0)return;const c=d["onUpdate:modelValue"]!==void 0;c===!0&&(y("update:modelValue",!0),i=r,K(()=>{i===r&&(i=void 0)})),(d.modelValue===null||c===!1)&&m(r)}function m(r){e.value!==!0&&(e.value=!0,y("beforeShow",r),s!==void 0?s(r):y("show",r))}function v(r){if(d.disable===!0)return;const c=d["onUpdate:modelValue"]!==void 0;c===!0&&(y("update:modelValue",!1),i=r,K(()=>{i===r&&(i=void 0)})),(d.modelValue===null||c===!1)&&k(r)}function k(r){e.value!==!1&&(e.value=!1,y("beforeHide",r),t!==void 0?t(r):y("hide",r))}function C(r){d.disable===!0&&r===!0?d["onUpdate:modelValue"]!==void 0&&y("update:modelValue",!1):r===!0!==e.value&&(r===!0?m:k)(i)}g(()=>d.modelValue,C),n!==void 0&&vt(u)===!0&&g(()=>f.$route.fullPath,()=>{n.value===!0&&e.value===!0&&v()}),l===!0&&He(()=>{C(d.modelValue)});const p={show:w,hide:v,toggle:q};return Object.assign(f,p),p}let F=0,se,de,Q,ce=!1,Le,Ee,xe,O=null;function qt(e){Ct(e)&&ye(e)}function Ct(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const a=rt(e),n=e.shiftKey&&!e.deltaX,s=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=n||s?e.deltaY:e.deltaX;for(let l=0;l<a.length;l++){const u=a[l];if(ot(u,s))return s?t<0&&u.scrollTop===0?!0:t>0&&u.scrollTop+u.clientHeight===u.scrollHeight:t<0&&u.scrollLeft===0?!0:t>0&&u.scrollLeft+u.clientWidth===u.scrollWidth}return!0}function Ve(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function Y(e){ce!==!0&&(ce=!0,requestAnimationFrame(()=>{ce=!1;const{height:a}=e.target,{clientHeight:n,scrollTop:s}=document.scrollingElement;(Q===void 0||a!==window.innerHeight)&&(Q=n-a,document.scrollingElement.scrollTop=s),s>Q&&(document.scrollingElement.scrollTop-=Math.ceil((s-Q)/8))}))}function _e(e){const a=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:s,overflowX:t}=window.getComputedStyle(a);se=at(window),de=lt(window),Le=a.style.left,Ee=a.style.top,xe=window.location.href,a.style.left=`-${se}px`,a.style.top=`-${de}px`,t!=="hidden"&&(t==="scroll"||a.scrollWidth>window.innerWidth)&&a.classList.add("q-body--force-scrollbar-x"),s!=="hidden"&&(s==="scroll"||a.scrollHeight>window.innerHeight)&&a.classList.add("q-body--force-scrollbar-y"),a.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,T.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",Y,M.passiveCapture),window.visualViewport.addEventListener("scroll",Y,M.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ve,M.passiveCapture))}T.is.desktop===!0&&T.is.mac===!0&&window[`${e}EventListener`]("wheel",qt,M.notPassive),e==="remove"&&(T.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",Y,M.passiveCapture),window.visualViewport.removeEventListener("scroll",Y,M.passiveCapture)):window.removeEventListener("scroll",Ve,M.passiveCapture)),a.classList.remove("q-body--prevent-scroll"),a.classList.remove("q-body--force-scrollbar-x"),a.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,a.style.left=Le,a.style.top=Ee,window.location.href===xe&&window.scrollTo(se,de),Q=void 0)}function kt(e){let a="add";if(e===!0){if(F++,O!==null){clearTimeout(O),O=null;return}if(F>1)return}else{if(F===0||(F--,F>0))return;if(a="remove",T.is.ios===!0&&T.is.nativeMobile===!0){O!==null&&clearTimeout(O),O=setTimeout(()=>{_e(a),O=null},100);return}}_e(a)}function Bt(){let e;return{preventBodyScroll(a){a!==e&&(e!==void 0||a===!0)&&(e=a,kt(a))}}}function St(){let e=null;const a=z();function n(){e!==null&&(clearTimeout(e),e=null)}return nt(n),J(n),{removeTimeout:n,registerTimeout(s,t){n(),mt(a)===!1&&(e=setTimeout(s,t))}}}const we={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Tt=Object.keys(we);we.all=!0;function Me(e){const a={};for(const n of Tt)e[n]===!0&&(a[n]=!0);return Object.keys(a).length===0?we:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}const Lt=["INPUT","TEXTAREA"];function Oe(e,a){return a.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof a.handler=="function"&&Lt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(a.uid)===-1)}function Et(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ut.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function fe(e,a,n){const s=me(e);let t,l=s.left-a.event.x,u=s.top-a.event.y,d=Math.abs(l),y=Math.abs(u);const f=a.direction;f.horizontal===!0&&f.vertical!==!0?t=l<0?"left":"right":f.horizontal!==!0&&f.vertical===!0?t=u<0?"up":"down":f.up===!0&&u<0?(t="up",d>y&&(f.left===!0&&l<0?t="left":f.right===!0&&l>0&&(t="right"))):f.down===!0&&u>0?(t="down",d>y&&(f.left===!0&&l<0?t="left":f.right===!0&&l>0&&(t="right"))):f.left===!0&&l<0?(t="left",d<y&&(f.up===!0&&u<0?t="up":f.down===!0&&u>0&&(t="down"))):f.right===!0&&l>0&&(t="right",d<y&&(f.up===!0&&u<0?t="up":f.down===!0&&u>0&&(t="down")));let i=!1;if(t===void 0&&n===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};t=a.event.lastDir,i=!0,t==="left"||t==="right"?(s.left-=l,d=0,l=0):(s.top-=u,y=0,u=0)}return{synthetic:i,payload:{evt:e,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:s,direction:t,isFirst:a.event.isFirst,isFinal:n===!0,duration:Date.now()-a.event.time,distance:{x:d,y},offset:{x:l,y:u},delta:{x:s.left-a.event.lastX,y:s.top-a.event.lastY}}}}let xt=0;var ve=it({name:"touch-pan",beforeMount(e,{value:a,modifiers:n}){if(n.mouse!==!0&&T.has.touch!==!0)return;function s(l,u){n.mouse===!0&&u===!0?ye(l):(n.stop===!0&&ne(l),n.prevent===!0&&Te(l))}const t={uid:"qvtp_"+xt++,handler:a,modifiers:n,direction:Me(n),noop:st,mouseStart(l){Oe(l,t)&&dt(l)&&(U(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(Oe(l,t)){const u=l.target;U(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,u){if(T.is.firefox===!0&&re(e,!0),t.lastEvt=l,u===!0||n.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const f=l.type.indexOf("mouse")!==-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Te(f),l.cancelBubble===!0&&ne(f),Object.assign(f,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:f}}ne(l)}const{left:d,top:y}=me(l);t.event={x:d,y,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:d,lastY:y}},move(l){if(t.event===void 0)return;const u=me(l),d=u.left-t.event.x,y=u.top-t.event.y;if(d===0&&y===0)return;t.lastEvt=l;const f=t.event.mouse===!0,i=()=>{s(l,f);let m;n.preserveCursor!==!0&&n.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),f===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Et(),t.styleCleanup=v=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),f===!0){const k=()=>{document.body.classList.remove("no-pointer-events--children")};v!==void 0?setTimeout(()=>{k(),v()},50):k()}else v!==void 0&&v()}};if(t.event.detected===!0){t.event.isFirst!==!0&&s(l,t.event.mouse);const{payload:m,synthetic:v}=fe(l,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=v===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||f===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(l);return}const q=Math.abs(d),w=Math.abs(y);q!==w&&(t.direction.horizontal===!0&&q>w||t.direction.vertical===!0&&q<w||t.direction.up===!0&&q<w&&y<0||t.direction.down===!0&&q<w&&y>0||t.direction.left===!0&&q>w&&d<0||t.direction.right===!0&&q>w&&d>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,u){if(t.event!==void 0){if(ue(t,"temp"),T.is.firefox===!0&&re(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(fe(l===void 0?t.lastEvt:l,t).payload);const{payload:d}=fe(l===void 0?t.lastEvt:l,t,!0),y=()=>{t.handler(d)};t.styleCleanup!==void 0?t.styleCleanup(y):y()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const l=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";U(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}T.has.touch===!0&&U(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const n=e.__qtouchpan;n!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&n.end(),n.handler=a.value),n.direction=Me(a.modifiers))},beforeUnmount(e){const a=e.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),ue(a,"main"),ue(a,"temp"),T.is.firefox===!0&&re(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchpan)}});function j(e,a,n){return n<=a?a:Math.min(n,Math.max(a,e))}const Pe=150;var zt=R({name:"QDrawer",inheritAttrs:!1,props:{...pt,...be,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...wt,"onLayout","miniState"],setup(e,{slots:a,emit:n,attrs:s}){const t=z(),{proxy:{$q:l}}=t,u=pe(e,l),{preventBodyScroll:d}=Bt(),{registerTimeout:y,removeTimeout:f}=St(),i=Ae(ze,A);if(i===A)return console.error("QDrawer needs to be child of QLayout"),A;let q,w=null,m;const v=E(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),k=h(()=>e.mini===!0&&v.value!==!0),C=h(()=>k.value===!0?e.miniWidth:e.width),p=E(e.showIfAbove===!0&&v.value===!1?!0:e.modelValue===!0),r=h(()=>e.persistent!==!0&&(v.value===!0||Fe.value===!0));function c(o,b){if(De(),o!==!1&&i.animate(),S(0),v.value===!0){const B=i.instances[X.value];B!==void 0&&B.belowBreakpoint===!0&&B.hide(!1),V(1),i.isContainer.value!==!0&&d(!0)}else V(0),o!==!1&&le(!1);y(()=>{o!==!1&&le(!0),b!==!0&&n("show",o)},Pe)}function H(o,b){We(),o!==!1&&i.animate(),V(0),S(P.value*C.value),oe(),b!==!0?y(()=>{n("hide",o)},Pe):f()}const{show:G,hide:D}=gt({showing:p,hideOnRouteChange:r,handleShow:c,handleHide:H}),{addToHistory:De,removeFromHistory:We}=bt(p,D,r),I={belowBreakpoint:v,hide:D},x=h(()=>e.side==="right"),P=h(()=>(l.lang.rtl===!0?-1:1)*(x.value===!0?1:-1)),ge=E(0),$=E(!1),Z=E(!1),qe=E(C.value*P.value),X=h(()=>x.value===!0?"left":"right"),ee=h(()=>p.value===!0&&v.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:C.value:0),te=h(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(x.value?"R":"L")!==-1||l.platform.is.ios===!0&&i.isContainer.value===!0),W=h(()=>e.overlay===!1&&p.value===!0&&v.value===!1),Fe=h(()=>e.overlay===!0&&p.value===!0&&v.value===!1),Qe=h(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&$.value===!1?" hidden":"")),Re=h(()=>({backgroundColor:`rgba(0,0,0,${ge.value*.4})`})),Ce=h(()=>x.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),Ie=h(()=>x.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),Xe=h(()=>{const o={};return i.header.space===!0&&Ce.value===!1&&(te.value===!0?o.top=`${i.header.offset}px`:i.header.space===!0&&(o.top=`${i.header.size}px`)),i.footer.space===!0&&Ie.value===!1&&(te.value===!0?o.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(o.bottom=`${i.footer.size}px`)),o}),Ne=h(()=>{const o={width:`${C.value}px`,transform:`translateX(${qe.value}px)`};return v.value===!0?o:Object.assign(o,Xe.value)}),Ue=h(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),Ye=h(()=>`q-drawer q-drawer--${e.side}`+(Z.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+($.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(v.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${k.value===!0?"mini":"standard"}`+(te.value===!0||W.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Ce.value===!0?" q-drawer--top-padding":""))),je=h(()=>{const o=l.lang.rtl===!0?e.side:X.value;return[[ve,Ze,void 0,{[o]:!0,mouse:!0}]]}),Ke=h(()=>{const o=l.lang.rtl===!0?X.value:e.side;return[[ve,ke,void 0,{[o]:!0,mouse:!0}]]}),Je=h(()=>{const o=l.lang.rtl===!0?X.value:e.side;return[[ve,ke,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function ae(){et(v,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}g(v,o=>{o===!0?(q=p.value,p.value===!0&&D(!1)):e.overlay===!1&&e.behavior!=="mobile"&&q!==!1&&(p.value===!0?(S(0),V(0),oe()):G(!1))}),g(()=>e.side,(o,b)=>{i.instances[b]===I&&(i.instances[b]=void 0,i[b].space=!1,i[b].offset=0),i.instances[o]=I,i[o].size=C.value,i[o].space=W.value,i[o].offset=ee.value}),g(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&ae()}),g(()=>e.behavior+e.breakpoint,ae),g(i.isContainer,o=>{p.value===!0&&d(o!==!0),o===!0&&ae()}),g(i.scrollbarWidth,()=>{S(p.value===!0?0:void 0)}),g(ee,o=>{_("offset",o)}),g(W,o=>{n("onLayout",o),_("space",o)}),g(x,()=>{S()}),g(C,o=>{S(),ie(e.miniToOverlay,o)}),g(()=>e.miniToOverlay,o=>{ie(o,C.value)}),g(()=>l.lang.rtl,()=>{S()}),g(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Ge(),i.animate())}),g(k,o=>{n("miniState",o)});function S(o){o===void 0?K(()=>{o=p.value===!0?0:C.value,S(P.value*o)}):(i.isContainer.value===!0&&x.value===!0&&(v.value===!0||Math.abs(o)===C.value)&&(o+=P.value*i.scrollbarWidth.value),qe.value=o)}function V(o){ge.value=o}function le(o){const b=o===!0?"remove":i.isContainer.value!==!0?"add":"";b!==""&&document.body.classList[b]("q-body--drawer-toggle")}function Ge(){w!==null&&clearTimeout(w),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),Z.value=!0,w=setTimeout(()=>{w=null,Z.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ze(o){if(p.value!==!1)return;const b=C.value,B=j(o.distance.x,0,b);if(o.isFinal===!0){B>=Math.min(75,b)===!0?G():(i.animate(),V(0),S(P.value*b)),$.value=!1;return}S((l.lang.rtl===!0?x.value!==!0:x.value)?Math.max(b-B,0):Math.min(0,B-b)),V(j(B/b,0,1)),o.isFirst===!0&&($.value=!0)}function ke(o){if(p.value!==!0)return;const b=C.value,B=o.direction===e.side,N=(l.lang.rtl===!0?B!==!0:B)?j(o.distance.x,0,b):0;if(o.isFinal===!0){Math.abs(N)<Math.min(75,b)===!0?(i.animate(),V(1),S(0)):D(),$.value=!1;return}S(P.value*N),V(j(1-N/b,0,1)),o.isFirst===!0&&($.value=!0)}function oe(){d(!1),le(!0)}function _(o,b){i.update(e.side,o,b)}function et(o,b){o.value!==b&&(o.value=b)}function ie(o,b){_("size",o===!0?e.miniWidth:b)}return i.instances[e.side]=I,ie(e.miniToOverlay,C.value),_("space",W.value),_("offset",ee.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),He(()=>{n("onLayout",W.value),n("miniState",k.value),q=e.showIfAbove===!0;const o=()=>{(p.value===!0?c:H)(!1,!0)};if(i.totalWidth.value!==0){K(o);return}m=g(i.totalWidth,()=>{m(),m=void 0,p.value===!1&&e.showIfAbove===!0&&v.value===!1?G(!1):o()})}),J(()=>{m!==void 0&&m(),w!==null&&(clearTimeout(w),w=null),p.value===!0&&oe(),i.instances[e.side]===I&&(i.instances[e.side]=void 0,_("size",0),_("offset",0),_("space",!1))}),()=>{const o=[];v.value===!0&&(e.noSwipeOpen===!1&&o.push(ct(L("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),je.value)),o.push(Be("div",{ref:"backdrop",class:Qe.value,style:Re.value,"aria-hidden":"true",onClick:D},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>Je.value)));const b=k.value===!0&&a.mini!==void 0,B=[L("div",{...s,key:""+b,class:[Ue.value,s.class]},b===!0?a.mini():he(a.default))];return e.elevated===!0&&p.value===!0&&B.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(Be("aside",{ref:"content",class:Ye.value,style:Ne.value},B,"contentclose",e.noSwipeClose!==!0&&v.value===!0,()=>Ke.value)),L("div",{class:"q-drawer-container"},o)}}}),Ht=R({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const n=h(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>L("div",{class:n.value},he(a.default))}}),Dt=R({name:"QItem",props:{...be,...ht,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:a,emit:n}){const{proxy:{$q:s}}=z(),t=pe(e,s),{hasLink:l,linkAttrs:u,linkClass:d,linkTag:y,navigateOnClick:f}=yt(),i=E(null),q=E(null),w=h(()=>e.clickable===!0||l.value===!0||e.tag==="label"),m=h(()=>e.disable!==!0&&w.value===!0),v=h(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(l.value===!0&&e.active===null?d.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),k=h(()=>{if(e.insetLevel===void 0)return null;const c=s.lang.rtl===!0?"Right":"Left";return{["padding"+c]:16+e.insetLevel*56+"px"}});function C(c){m.value===!0&&(q.value!==null&&(c.qKeyEvent!==!0&&document.activeElement===i.value?q.value.focus():document.activeElement===q.value&&i.value.focus()),f(c))}function p(c){if(m.value===!0&&ft(c,[13,32])===!0){ye(c),c.qKeyEvent=!0;const H=new MouseEvent("click",c);H.qKeyEvent=!0,i.value.dispatchEvent(H)}n("keyup",c)}function r(){const c=$e(a.default,[]);return m.value===!0&&c.unshift(L("div",{class:"q-focus-helper",tabindex:-1,ref:q})),c}return()=>{const c={ref:i,class:v.value,style:k.value,role:"listitem",onClick:C,onKeyup:p};return m.value===!0?(c.tabindex=e.tabindex||"0",Object.assign(c,u.value)):w.value===!0&&(c["aria-disabled"]="true"),L(y.value,c,r())}}});export{Ht as Q,ve as T,Dt as a,$t as b,At as c,zt as d,be as e,pe as f,j as g,Et as h,pt as i,wt as j,gt as k,St as u};
