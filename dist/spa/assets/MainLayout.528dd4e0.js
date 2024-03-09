import{u as rt,a as nt,Q as ut,b as st}from"./QBtn.7f80d1c4.js";import{c as $,h as F,a as dt,b as Se,d as ct}from"./render.c6b73402.js";import{c as d,h as T,g as ge,k as He,H as xe,l as B,m as Q,n as qe,p as vt,q as ft,t as mt,u as K,v as ne,x as Me,y as ue,z as pe,A as se,i as ht,B as de,r as x,w as g,o as pt,C as Pe,D as bt,E as yt,G as wt,d as Ie,I as G,J as be,K as _,f as C,L as gt,M as J,N as ye,O as qt,P as kt,Q as Ct,R as _t,F as Lt,S as Bt}from"./index.73003918.js";import{u as ke,a as Ce,c as Tt,b as Et,d as St,e as xt,f as Mt,Q as Pt}from"./selection.fbbb3f46.js";import{g as Qt,a as Dt,h as $t}from"./scroll.c639aa9d.js";import{Q as Ot,a as At}from"./QLayout.11e38081.js";import"./dom.33108966.js";var Ft=$({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:a}){const i=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>T("div",{class:i.value},F(a.default))}}),Vt=$({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:a}){const i=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>T("div",{class:i.value,role:"toolbar"},F(a.default))}}),we=$({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:a}){const i=d(()=>parseInt(e.lines,10)),u=d(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(i.value===1?" ellipsis":"")),t=d(()=>e.lines!==void 0&&i.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":i.value}:null);return()=>T("div",{style:t.value,class:u.value},F(a.default))}}),Wt=$({name:"QList",props:{...ke,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const i=ge(),u=Ce(e,i.proxy.$q),t=d(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(u.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>T(e.tag,{class:t.value},F(a.default))}});function zt(e,a,i){let u;function t(){u!==void 0&&(xe.remove(u),u=void 0)}return He(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){u={condition:()=>i.value===!0,handler:a},xe.add(u)}}}let H=0,ce,ve,I,fe=!1,Qe,De,$e,D=null;function Ht(e){It(e)&&qe(e)}function It(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const a=vt(e),i=e.shiftKey&&!e.deltaX,u=!i&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=i||u?e.deltaY:e.deltaX;for(let l=0;l<a.length;l++){const n=a[l];if($t(n,u))return u?t<0&&n.scrollTop===0?!0:t>0&&n.scrollTop+n.clientHeight===n.scrollHeight:t<0&&n.scrollLeft===0?!0:t>0&&n.scrollLeft+n.clientWidth===n.scrollWidth}return!0}function Oe(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function j(e){fe!==!0&&(fe=!0,requestAnimationFrame(()=>{fe=!1;const{height:a}=e.target,{clientHeight:i,scrollTop:u}=document.scrollingElement;(I===void 0||a!==window.innerHeight)&&(I=i-a,document.scrollingElement.scrollTop=u),u>I&&(document.scrollingElement.scrollTop-=Math.ceil((u-I)/8))}))}function Ae(e){const a=document.body,i=window.visualViewport!==void 0;if(e==="add"){const{overflowY:u,overflowX:t}=window.getComputedStyle(a);ce=Qt(window),ve=Dt(window),Qe=a.style.left,De=a.style.top,$e=window.location.href,a.style.left=`-${ce}px`,a.style.top=`-${ve}px`,t!=="hidden"&&(t==="scroll"||a.scrollWidth>window.innerWidth)&&a.classList.add("q-body--force-scrollbar-x"),u!=="hidden"&&(u==="scroll"||a.scrollHeight>window.innerHeight)&&a.classList.add("q-body--force-scrollbar-y"),a.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,B.is.ios===!0&&(i===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",j,Q.passiveCapture),window.visualViewport.addEventListener("scroll",j,Q.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Oe,Q.passiveCapture))}B.is.desktop===!0&&B.is.mac===!0&&window[`${e}EventListener`]("wheel",Ht,Q.notPassive),e==="remove"&&(B.is.ios===!0&&(i===!0?(window.visualViewport.removeEventListener("resize",j,Q.passiveCapture),window.visualViewport.removeEventListener("scroll",j,Q.passiveCapture)):window.removeEventListener("scroll",Oe,Q.passiveCapture)),a.classList.remove("q-body--prevent-scroll"),a.classList.remove("q-body--force-scrollbar-x"),a.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,a.style.left=Qe,a.style.top=De,window.location.href===$e&&window.scrollTo(ce,ve),I=void 0)}function Nt(e){let a="add";if(e===!0){if(H++,D!==null){clearTimeout(D),D=null;return}if(H>1)return}else{if(H===0||(H--,H>0))return;if(a="remove",B.is.ios===!0&&B.is.nativeMobile===!0){D!==null&&clearTimeout(D),D=setTimeout(()=>{Ae(a),D=null},100);return}}Ae(a)}function Xt(){let e;return{preventBodyScroll(a){a!==e&&(e!==void 0||a===!0)&&(e=a,Nt(a))}}}const _e={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Yt=Object.keys(_e);_e.all=!0;function Fe(e){const a={};for(const i of Yt)e[i]===!0&&(a[i]=!0);return Object.keys(a).length===0?_e:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}const Rt=["INPUT","TEXTAREA"];function Ve(e,a){return a.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof a.handler=="function"&&Rt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(a.uid)===-1)}function me(e,a,i){const u=pe(e);let t,l=u.left-a.event.x,n=u.top-a.event.y,v=Math.abs(l),h=Math.abs(n);const c=a.direction;c.horizontal===!0&&c.vertical!==!0?t=l<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=n<0?"up":"down":c.up===!0&&n<0?(t="up",v>h&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.down===!0&&n>0?(t="down",v>h&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.left===!0&&l<0?(t="left",v<h&&(c.up===!0&&n<0?t="up":c.down===!0&&n>0&&(t="down"))):c.right===!0&&l>0&&(t="right",v<h&&(c.up===!0&&n<0?t="up":c.down===!0&&n>0&&(t="down")));let r=!1;if(t===void 0&&i===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};t=a.event.lastDir,r=!0,t==="left"||t==="right"?(u.left-=l,v=0,l=0):(u.top-=n,h=0,n=0)}return{synthetic:r,payload:{evt:e,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:u,direction:t,isFirst:a.event.isFirst,isFinal:i===!0,duration:Date.now()-a.event.time,distance:{x:v,y:h},offset:{x:l,y:n},delta:{x:u.left-a.event.lastX,y:u.top-a.event.lastY}}}}let Kt=0;var he=dt({name:"touch-pan",beforeMount(e,{value:a,modifiers:i}){if(i.mouse!==!0&&B.has.touch!==!0)return;function u(l,n){i.mouse===!0&&n===!0?qe(l):(i.stop===!0&&ue(l),i.prevent===!0&&Me(l))}const t={uid:"qvtp_"+Kt++,handler:a,modifiers:i,direction:Fe(i),noop:ft,mouseStart(l){Ve(l,t)&&mt(l)&&(K(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(Ve(l,t)){const n=l.target;K(t,"temp",[[n,"touchmove","move","notPassiveCapture"],[n,"touchcancel","end","passiveCapture"],[n,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,n){if(B.is.firefox===!0&&ne(e,!0),t.lastEvt=l,n===!0||i.stop===!0){if(t.direction.all!==!0&&(n!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=l.type.indexOf("mouse")!==-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Me(c),l.cancelBubble===!0&&ue(c),Object.assign(c,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:c}}ue(l)}const{left:v,top:h}=pe(l);t.event={x:v,y:h,time:Date.now(),mouse:n===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:h}},move(l){if(t.event===void 0)return;const n=pe(l),v=n.left-t.event.x,h=n.top-t.event.y;if(v===0&&h===0)return;t.lastEvt=l;const c=t.event.mouse===!0,r=()=>{u(l,c);let p;i.preserveCursor!==!0&&i.preservecursor!==!0&&(p=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Tt(),t.styleCleanup=f=>{if(t.styleCleanup=void 0,p!==void 0&&(document.documentElement.style.cursor=p),document.body.classList.remove("non-selectable"),c===!0){const E=()=>{document.body.classList.remove("no-pointer-events--children")};f!==void 0?setTimeout(()=>{E(),f()},50):E()}else f!==void 0&&f()}};if(t.event.detected===!0){t.event.isFirst!==!0&&u(l,t.event.mouse);const{payload:p,synthetic:f}=me(l,t,!1);p!==void 0&&(t.handler(p)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=p.position.left,t.event.lastY=p.position.top,t.event.lastDir=f===!0?void 0:p.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(l);return}const w=Math.abs(v),y=Math.abs(h);w!==y&&(t.direction.horizontal===!0&&w>y||t.direction.vertical===!0&&w<y||t.direction.up===!0&&w<y&&h<0||t.direction.down===!0&&w<y&&h>0||t.direction.left===!0&&w>y&&v<0||t.direction.right===!0&&w>y&&v>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,n){if(t.event!==void 0){if(se(t,"temp"),B.is.firefox===!0&&ne(e,!1),n===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(me(l===void 0?t.lastEvt:l,t).payload);const{payload:v}=me(l===void 0?t.lastEvt:l,t,!0),h=()=>{t.handler(v)};t.styleCleanup!==void 0?t.styleCleanup(h):h()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,i.mouse===!0){const l=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";K(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}B.has.touch===!0&&K(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const i=e.__qtouchpan;i!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&i.end(),i.handler=a.value),i.direction=Fe(a.modifiers))},beforeUnmount(e){const a=e.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),se(a,"main"),se(a,"temp"),B.is.firefox===!0&&ne(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchpan)}});function U(e,a,i){return i<=a?a:Math.min(i,Math.max(a,e))}const We=150;var jt=$({name:"QDrawer",inheritAttrs:!1,props:{...Et,...ke,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...St,"onLayout","miniState"],setup(e,{slots:a,emit:i,attrs:u}){const t=ge(),{proxy:{$q:l}}=t,n=Ce(e,l),{preventBodyScroll:v}=Xt(),{registerTimeout:h,removeTimeout:c}=xt(),r=ht(yt,de);if(r===de)return console.error("QDrawer needs to be child of QLayout"),de;let w,y=null,p;const f=x(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),E=d(()=>e.mini===!0&&f.value!==!0),q=d(()=>E.value===!0?e.miniWidth:e.width),m=x(e.showIfAbove===!0&&f.value===!1?!0:e.modelValue===!0),N=d(()=>e.persistent!==!0&&(f.value===!0||Ye.value===!0));function b(o,s){if(Ne(),o!==!1&&r.animate(),L(0),f.value===!0){const k=r.instances[Y.value];k!==void 0&&k.belowBreakpoint===!0&&k.hide(!1),M(1),r.isContainer.value!==!0&&v(!0)}else M(0),o!==!1&&le(!1);h(()=>{o!==!1&&le(!0),s!==!0&&i("show",o)},We)}function V(o,s){Xe(),o!==!1&&r.animate(),M(0),L(O.value*q.value),ie(),s!==!0?h(()=>{i("hide",o)},We):c()}const{show:Z,hide:W}=Mt({showing:m,hideOnRouteChange:N,handleShow:b,handleHide:V}),{addToHistory:Ne,removeFromHistory:Xe}=zt(m,W,N),X={belowBreakpoint:f,hide:W},S=d(()=>e.side==="right"),O=d(()=>(l.lang.rtl===!0?-1:1)*(S.value===!0?1:-1)),Le=x(0),A=x(!1),ee=x(!1),Be=x(q.value*O.value),Y=d(()=>S.value===!0?"left":"right"),te=d(()=>m.value===!0&&f.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:q.value:0),ae=d(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(S.value?"R":"L")!==-1||l.platform.is.ios===!0&&r.isContainer.value===!0),z=d(()=>e.overlay===!1&&m.value===!0&&f.value===!1),Ye=d(()=>e.overlay===!0&&m.value===!0&&f.value===!1),Re=d(()=>"fullscreen q-drawer__backdrop"+(m.value===!1&&A.value===!1?" hidden":"")),Ke=d(()=>({backgroundColor:`rgba(0,0,0,${Le.value*.4})`})),Te=d(()=>S.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),je=d(()=>S.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),Ue=d(()=>{const o={};return r.header.space===!0&&Te.value===!1&&(ae.value===!0?o.top=`${r.header.offset}px`:r.header.space===!0&&(o.top=`${r.header.size}px`)),r.footer.space===!0&&je.value===!1&&(ae.value===!0?o.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(o.bottom=`${r.footer.size}px`)),o}),Ge=d(()=>{const o={width:`${q.value}px`,transform:`translateX(${Be.value}px)`};return f.value===!0?o:Object.assign(o,Ue.value)}),Je=d(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),Ze=d(()=>`q-drawer q-drawer--${e.side}`+(ee.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(n.value===!0?" q-drawer--dark q-dark":"")+(A.value===!0?" no-transition":m.value===!0?"":" q-layout--prevent-focus")+(f.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${E.value===!0?"mini":"standard"}`+(ae.value===!0||z.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Te.value===!0?" q-drawer--top-padding":""))),et=d(()=>{const o=l.lang.rtl===!0?e.side:Y.value;return[[he,lt,void 0,{[o]:!0,mouse:!0}]]}),tt=d(()=>{const o=l.lang.rtl===!0?Y.value:e.side;return[[he,Ee,void 0,{[o]:!0,mouse:!0}]]}),at=d(()=>{const o=l.lang.rtl===!0?Y.value:e.side;return[[he,Ee,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function oe(){it(f,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}g(f,o=>{o===!0?(w=m.value,m.value===!0&&W(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(m.value===!0?(L(0),M(0),ie()):Z(!1))}),g(()=>e.side,(o,s)=>{r.instances[s]===X&&(r.instances[s]=void 0,r[s].space=!1,r[s].offset=0),r.instances[o]=X,r[o].size=q.value,r[o].space=z.value,r[o].offset=te.value}),g(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&oe()}),g(()=>e.behavior+e.breakpoint,oe),g(r.isContainer,o=>{m.value===!0&&v(o!==!0),o===!0&&oe()}),g(r.scrollbarWidth,()=>{L(m.value===!0?0:void 0)}),g(te,o=>{P("offset",o)}),g(z,o=>{i("onLayout",o),P("space",o)}),g(S,()=>{L()}),g(q,o=>{L(),re(e.miniToOverlay,o)}),g(()=>e.miniToOverlay,o=>{re(o,q.value)}),g(()=>l.lang.rtl,()=>{L()}),g(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(ot(),r.animate())}),g(E,o=>{i("miniState",o)});function L(o){o===void 0?Pe(()=>{o=m.value===!0?0:q.value,L(O.value*o)}):(r.isContainer.value===!0&&S.value===!0&&(f.value===!0||Math.abs(o)===q.value)&&(o+=O.value*r.scrollbarWidth.value),Be.value=o)}function M(o){Le.value=o}function le(o){const s=o===!0?"remove":r.isContainer.value!==!0?"add":"";s!==""&&document.body.classList[s]("q-body--drawer-toggle")}function ot(){y!==null&&clearTimeout(y),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ee.value=!0,y=setTimeout(()=>{y=null,ee.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function lt(o){if(m.value!==!1)return;const s=q.value,k=U(o.distance.x,0,s);if(o.isFinal===!0){k>=Math.min(75,s)===!0?Z():(r.animate(),M(0),L(O.value*s)),A.value=!1;return}L((l.lang.rtl===!0?S.value!==!0:S.value)?Math.max(s-k,0):Math.min(0,k-s)),M(U(k/s,0,1)),o.isFirst===!0&&(A.value=!0)}function Ee(o){if(m.value!==!0)return;const s=q.value,k=o.direction===e.side,R=(l.lang.rtl===!0?k!==!0:k)?U(o.distance.x,0,s):0;if(o.isFinal===!0){Math.abs(R)<Math.min(75,s)===!0?(r.animate(),M(1),L(0)):W(),A.value=!1;return}L(O.value*R),M(U(1-R/s,0,1)),o.isFirst===!0&&(A.value=!0)}function ie(){v(!1),le(!0)}function P(o,s){r.update(e.side,o,s)}function it(o,s){o.value!==s&&(o.value=s)}function re(o,s){P("size",o===!0?e.miniWidth:s)}return r.instances[e.side]=X,re(e.miniToOverlay,q.value),P("space",z.value),P("offset",te.value),e.showIfAbove===!0&&e.modelValue!==!0&&m.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),pt(()=>{i("onLayout",z.value),i("miniState",E.value),w=e.showIfAbove===!0;const o=()=>{(m.value===!0?b:V)(!1,!0)};if(r.totalWidth.value!==0){Pe(o);return}p=g(r.totalWidth,()=>{p(),p=void 0,m.value===!1&&e.showIfAbove===!0&&f.value===!1?Z(!1):o()})}),He(()=>{p!==void 0&&p(),y!==null&&(clearTimeout(y),y=null),m.value===!0&&ie(),r.instances[e.side]===X&&(r.instances[e.side]=void 0,P("size",0),P("offset",0),P("space",!1))}),()=>{const o=[];f.value===!0&&(e.noSwipeOpen===!1&&o.push(bt(T("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),et.value)),o.push(Se("div",{ref:"backdrop",class:Re.value,style:Ke.value,"aria-hidden":"true",onClick:W},void 0,"backdrop",e.noSwipeBackdrop!==!0&&m.value===!0,()=>at.value)));const s=E.value===!0&&a.mini!==void 0,k=[T("div",{...u,key:""+s,class:[Je.value,u.class]},s===!0?a.mini():F(a.default))];return e.elevated===!0&&m.value===!0&&k.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(Se("aside",{ref:"content",class:Ze.value,style:Ge.value},k,"contentclose",e.noSwipeClose!==!0&&f.value===!0,()=>tt.value)),T("div",{class:"q-drawer-container"},o)}}}),ze=$({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const i=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>T("div",{class:i.value},F(a.default))}}),Ut=$({name:"QItem",props:{...ke,...rt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:a,emit:i}){const{proxy:{$q:u}}=ge(),t=Ce(e,u),{hasLink:l,linkAttrs:n,linkClass:v,linkTag:h,navigateOnClick:c}=nt(),r=x(null),w=x(null),y=d(()=>e.clickable===!0||l.value===!0||e.tag==="label"),p=d(()=>e.disable!==!0&&y.value===!0),f=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(l.value===!0&&e.active===null?v.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(p.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),E=d(()=>{if(e.insetLevel===void 0)return null;const b=u.lang.rtl===!0?"Right":"Left";return{["padding"+b]:16+e.insetLevel*56+"px"}});function q(b){p.value===!0&&(w.value!==null&&(b.qKeyEvent!==!0&&document.activeElement===r.value?w.value.focus():document.activeElement===w.value&&r.value.focus()),c(b))}function m(b){if(p.value===!0&&wt(b,[13,32])===!0){qe(b),b.qKeyEvent=!0;const V=new MouseEvent("click",b);V.qKeyEvent=!0,r.value.dispatchEvent(V)}i("keyup",b)}function N(){const b=ct(a.default,[]);return p.value===!0&&b.unshift(T("div",{class:"q-focus-helper",tabindex:-1,ref:w})),b}return()=>{const b={ref:r,class:f.value,style:E.value,role:"listitem",onClick:q,onKeyup:m};return p.value===!0?(b.tabindex=e.tabindex||"0",Object.assign(b,n.value)):y.value===!0&&(b["aria-disabled"]="true"),T(h.value,b,N())}}});const Gt=Ie({__name:"EssentialLink",props:{title:{},caption:{default:""},link:{default:"#"},icon:{default:""}},setup(e){return(a,i)=>(G(),be(Ut,{clickable:"",tag:"a",target:"_blank",href:a.link},{default:_(()=>[a.icon?(G(),be(ze,{key:0,avatar:""},{default:_(()=>[C(ut,{name:a.icon},null,8,["name"])]),_:1})):gt("",!0),C(ze,null,{default:_(()=>[C(we,null,{default:_(()=>[J(ye(a.title),1)]),_:1}),C(we,{caption:""},{default:_(()=>[J(ye(a.caption),1)]),_:1})]),_:1})]),_:1},8,["href"]))}}),ra=Ie({__name:"MainLayout",setup(e){const a=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],i=x(!1);function u(){i.value=!i.value}return(t,l)=>{const n=qt("router-view");return G(),be(At,{view:"lHh Lpr lFf"},{default:_(()=>[C(Pt,{elevated:""},{default:_(()=>[C(Vt,null,{default:_(()=>[C(st,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:u}),C(Ft,null,{default:_(()=>[J(" Quasar App ")]),_:1}),kt("div",null,"Quasar v"+ye(t.$q.version),1)]),_:1})]),_:1}),C(jt,{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=v=>i.value=v),"show-if-above":"",bordered:""},{default:_(()=>[C(Wt,null,{default:_(()=>[C(we,{header:""},{default:_(()=>[J(" Essential Links ")]),_:1}),(G(),Ct(Lt,null,_t(a,v=>C(Gt,Bt({key:v.title},v),null,16)),64))]),_:1})]),_:1},8,["modelValue"]),C(Ot,null,{default:_(()=>[C(n)]),_:1})]),_:1})}}});export{ra as default};
