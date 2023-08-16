import{p as m,g as Y,r as x,a3 as p,j as ee,A as k,a4 as D,B as te,l as N,a5 as ne,y as se,c as h,b as g,m as l,q as ae,E as F,n as re,S as q,s as C,a6 as ie,W as oe,_ as E,$ as le,O as ue,a7 as ce,N as P,a8 as z,a9 as M,aa as H,M as de,Z as ve,u as ge,w as me,ab as fe,v as he,ac as Se,ad as be}from"./index-89a09a2e.js";const B=m({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function V(e){const n=Y("useRender");n.render=e}function Oe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const s=x(),t=x();if(p){const r=new ResizeObserver(a=>{e==null||e(a,r),a.length&&(n==="content"?t.value=a[0].contentRect:t.value=a[0].target.getBoundingClientRect())});ee(()=>{r.disconnect()}),k(s,(a,i)=>{i&&(r.unobserve(D(i)),t.value=void 0),a&&r.observe(D(a))},{flush:"post"})}return{resizeRef:s,contentRect:te(t)}}const ye=m({tag:{type:String,default:"div"}},"tag"),_e=m({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),je=N(!1)({name:"VDefaultsProvider",props:_e(),setup(e,n){let{slots:s}=n;const{defaults:t,disabled:r,reset:a,root:i,scoped:c}=ne(e);return se(t,{reset:a,root:i,scoped:c,disabled:r}),()=>{var f;return(f=s.default)==null?void 0:f.call(s)}}});const Ce=m({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function ze(e){return{dimensionStyles:h(()=>({height:g(e.height),maxHeight:g(e.maxHeight),maxWidth:g(e.maxWidth),minHeight:g(e.minHeight),minWidth:g(e.minWidth),width:g(e.width)}))}}function Re(e){return{aspectStyles:h(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const U=m({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...B(),...Ce()},"VResponsive"),A=N()({name:"VResponsive",props:U(),setup(e,n){let{slots:s}=n;const{aspectStyles:t}=Re(e),{dimensionStyles:r}=ze(e);return V(()=>{var a;return l("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[r.value,e.style]},[l("div",{class:"v-responsive__sizer",style:t.value},null),(a=s.additional)==null?void 0:a.call(s),s.default&&l("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}}),Ie=m({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),I=(e,n)=>{let{slots:s}=n;const{transition:t,disabled:r,...a}=e,{component:i=re,...c}=typeof t=="object"?t:{};return ae(i,F(typeof t=="string"?{name:r?"":t}:c,a,{disabled:r}),s)};function ke(e,n){if(!q)return;const s=n.modifiers||{},t=n.value,{handler:r,options:a}=typeof t=="object"?t:{handler:t,options:{}},i=new IntersectionObserver(function(){var S;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const u=(S=e._observe)==null?void 0:S[n.instance.$.uid];if(!u)return;const v=c.some(y=>y.isIntersecting);r&&(!s.quiet||u.init)&&(!s.once||v||u.init)&&r(v,c,f),v&&s.once?L(e,n):u.init=!0},a);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:i},i.observe(e)}function L(e,n){var t;const s=(t=e._observe)==null?void 0:t[n.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const xe={mounted:ke,unmounted:L},Ne=xe,Pe=m({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...U(),...B(),...Ie()},"VImg"),De=N()({name:"VImg",directives:{intersect:Ne},props:Pe(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:s,slots:t}=n;const r=C(""),a=x(),i=C(e.eager?"loading":"idle"),c=C(),f=C(),u=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=h(()=>u.value.aspect||c.value/f.value||0);k(()=>e.src,()=>{S(i.value!=="idle")}),k(v,(o,d)=>{!o&&d&&a.value&&R(a.value)}),ie(()=>S());function S(o){if(!(e.eager&&o)&&!(q&&!o&&!e.eager)){if(i.value="loading",u.value.lazySrc){const d=new Image;d.src=u.value.lazySrc,R(d,null)}u.value.src&&oe(()=>{var d,b;if(s("loadstart",((d=a.value)==null?void 0:d.currentSrc)||u.value.src),(b=a.value)!=null&&b.complete){if(a.value.naturalWidth||_(),i.value==="error")return;v.value||R(a.value,null),y()}else v.value||R(a.value),$()})}}function y(){var o;$(),i.value="loaded",s("load",((o=a.value)==null?void 0:o.currentSrc)||u.value.src)}function _(){var o;i.value="error",s("error",((o=a.value)==null?void 0:o.currentSrc)||u.value.src)}function $(){const o=a.value;o&&(r.value=o.currentSrc||o.src)}let w=-1;function R(o){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const b=()=>{clearTimeout(w);const{naturalHeight:O,naturalWidth:j}=o;O||j?(c.value=j,f.value=O):!o.complete&&i.value==="loading"&&d!=null?w=window.setTimeout(b,d):(o.currentSrc.endsWith(".svg")||o.currentSrc.startsWith("data:image/svg+xml"))&&(c.value=1,f.value=1)};b()}const T=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),G=()=>{var b;if(!u.value.src||i.value==="idle")return null;const o=l("img",{class:["v-img__img",T.value],src:u.value.src,srcset:u.value.srcset,alt:e.alt,sizes:e.sizes,ref:a,onLoad:y,onError:_},null),d=(b=t.sources)==null?void 0:b.call(t);return l(I,{transition:e.transition,appear:!0},{default:()=>[E(d?l("picture",{class:"v-img__picture"},[d,o]):o,[[ce,i.value==="loaded"]])]})},J=()=>l(I,{transition:e.transition},{default:()=>[u.value.lazySrc&&i.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",T.value],src:u.value.lazySrc,alt:e.alt},null)]}),K=()=>t.placeholder?l(I,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!t.error)&&l("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,Q=()=>t.error?l(I,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&l("div",{class:"v-img__error"},[t.error()])]}):null,X=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,W=C(!1);{const o=k(v,d=>{d&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{W.value=!0})}),o())})}return V(()=>{const[o]=A.filterProps(e);return E(l(A,F({class:["v-img",{"v-img--booting":!W.value},e.class],style:[{width:g(e.width==="auto"?c.value:e.width)},e.style]},o,{aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>l(ue,null,[l(G,null,null),l(J,null,null),l(X,null,null),l(K,null,null),l(Q,null,null)]),default:t.default}),[[le("intersect"),{handler:S,options:e.options},null,{once:!0}]])}),{currentSrc:r,image:a,state:i,naturalWidth:c,naturalHeight:f}}}),Ee=m({border:[Boolean,Number,String]},"border");function He(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{borderClasses:h(()=>{const t=z(e)?e.value:e.border,r=[];if(t===!0||t==="")r.push(`${n}--border`);else if(typeof t=="string"||t===0)for(const a of String(t).split(" "))r.push(`border-${a}`);return r})}}function Z(e){return M(()=>{const n=[],s={};return e.value.background&&(H(e.value.background)?s.backgroundColor=e.value.background:n.push(`bg-${e.value.background}`)),e.value.text&&(H(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:s}})}function Be(e,n){const s=h(()=>({text:z(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:r}=Z(s);return{textColorClasses:t,textColorStyles:r}}function Ae(e,n){const s=h(()=>({background:z(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:r}=Z(s);return{backgroundColorClasses:t,backgroundColorStyles:r}}const Fe=m({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function qe(e){return{elevationClasses:h(()=>{const s=z(e)?e.value:e.elevation,t=[];return s==null||t.push(`elevation-${s}`),t})}}const Me=m({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ue(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{roundedClasses:h(()=>{const t=z(e)?e.value:e.rounded,r=[];if(t===!0||t==="")r.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const a of String(t).split(" "))r.push(`rounded-${a}`);return r})}}const Ve=["x-small","small","default","large","x-large"],$e=m({size:{type:[String,Number],default:"default"}},"size");function we(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return M(()=>{let s,t;return de(Ve,e.size)?s=`${n}--size-${e.size}`:e.size&&(t={width:g(e.size),height:g(e.size)}),{sizeClasses:s,sizeStyles:t}})}const Te=m({color:String,start:Boolean,end:Boolean,icon:ve,...B(),...$e(),...ye({tag:"i"}),...ge()},"VIcon"),Le=N()({name:"VIcon",props:Te(),setup(e,n){let{attrs:s,slots:t}=n;const r=x(),{themeClasses:a}=me(e),{iconData:i}=fe(h(()=>r.value||e.icon)),{sizeClasses:c}=we(e),{textColorClasses:f,textColorStyles:u}=Be(he(e,"color"));return V(()=>{var S,y;const v=(S=t.default)==null?void 0:S.call(t);return v&&(r.value=(y=Se(v).filter(_=>_.type===be&&_.children&&typeof _.children=="string")[0])==null?void 0:y.children),l(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",a.value,c.value,f.value,{"v-icon--clickable":!!s.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[c.value?void 0:{fontSize:g(e.size),height:g(e.size),width:g(e.size)},u.value,e.style],role:s.onClick?"button":void 0,"aria-hidden":!s.onClick},{default:()=>[v]})}),{}}});export{De as V,ye as a,V as b,Ee as c,Fe as d,Me as e,Ae as f,He as g,qe as h,Ue as i,je as j,Le as k,Z as l,B as m,$e as n,we as o,Be as p,Ce as q,ze as r,A as s,Oe as u};
