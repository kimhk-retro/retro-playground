(()=>{var Sb=Object.create;var L0=Object.defineProperty;var Mb=Object.getOwnPropertyDescriptor;var bb=Object.getOwnPropertyNames;var Eb=Object.getPrototypeOf,Tb=Object.prototype.hasOwnProperty;var zi=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var Ab=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of bb(t))!Tb.call(e,s)&&s!==n&&L0(e,s,{get:()=>t[s],enumerable:!(i=Mb(t,s))||i.enumerable});return e};var mr=(e,t,n)=>(n=e!=null?Sb(Eb(e)):{},Ab(t||!e||!e.__esModule?L0(n,"default",{value:e,enumerable:!0}):n,e));var k0=zi(Pe=>{"use strict";function Sd(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Ic(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Fi(e){return e.length===0?null:e[0]}function Pc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Ic(o,n))l<s&&0>Ic(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Ic(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Ic(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Pe.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(I0=performance,Pe.unstable_now=function(){return I0.now()}):(vd=Date,O0=vd.now(),Pe.unstable_now=function(){return vd.now()-O0});var I0,vd,O0,ns=[],Fs=[],wb=1,ci=null,bn=3,Md=!1,ko=!1,Xo=!1,bd=!1,z0=typeof setTimeout=="function"?setTimeout:null,F0=typeof clearTimeout=="function"?clearTimeout:null,P0=typeof setImmediate<"u"?setImmediate:null;function Oc(e){for(var t=Fi(Fs);t!==null;){if(t.callback===null)Pc(Fs);else if(t.startTime<=e)Pc(Fs),t.sortIndex=t.expirationTime,Sd(ns,t);else break;t=Fi(Fs)}}function Ed(e){if(Xo=!1,Oc(e),!ko)if(Fi(ns)!==null)ko=!0,_r||(_r=!0,gr());else{var t=Fi(Fs);t!==null&&Td(Ed,t.startTime-e)}}var _r=!1,Wo=-1,V0=5,H0=-1;function G0(){return bd?!0:!(Pe.unstable_now()-H0<V0)}function xd(){if(bd=!1,_r){var e=Pe.unstable_now();H0=e;var t=!0;try{t:{ko=!1,Xo&&(Xo=!1,F0(Wo),Wo=-1),Md=!0;var n=bn;try{e:{for(Oc(e),ci=Fi(ns);ci!==null&&!(ci.expirationTime>e&&G0());){var i=ci.callback;if(typeof i=="function"){ci.callback=null,bn=ci.priorityLevel;var s=i(ci.expirationTime<=e);if(e=Pe.unstable_now(),typeof s=="function"){ci.callback=s,Oc(e),t=!0;break e}ci===Fi(ns)&&Pc(ns),Oc(e)}else Pc(ns);ci=Fi(ns)}if(ci!==null)t=!0;else{var a=Fi(Fs);a!==null&&Td(Ed,a.startTime-e),t=!1}}break t}finally{ci=null,bn=n,Md=!1}t=void 0}}finally{t?gr():_r=!1}}}var gr;typeof P0=="function"?gr=function(){P0(xd)}:typeof MessageChannel<"u"?(yd=new MessageChannel,B0=yd.port2,yd.port1.onmessage=xd,gr=function(){B0.postMessage(null)}):gr=function(){z0(xd,0)};var yd,B0;function Td(e,t){Wo=z0(function(){e(Pe.unstable_now())},t)}Pe.unstable_IdlePriority=5;Pe.unstable_ImmediatePriority=1;Pe.unstable_LowPriority=4;Pe.unstable_NormalPriority=3;Pe.unstable_Profiling=null;Pe.unstable_UserBlockingPriority=2;Pe.unstable_cancelCallback=function(e){e.callback=null};Pe.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V0=0<e?Math.floor(1e3/e):5};Pe.unstable_getCurrentPriorityLevel=function(){return bn};Pe.unstable_next=function(e){switch(bn){case 1:case 2:case 3:var t=3;break;default:t=bn}var n=bn;bn=t;try{return e()}finally{bn=n}};Pe.unstable_requestPaint=function(){bd=!0};Pe.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=bn;bn=e;try{return t()}finally{bn=n}};Pe.unstable_scheduleCallback=function(e,t,n){var i=Pe.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:wb++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Sd(Fs,e),Fi(ns)===null&&e===Fi(Fs)&&(Xo?(F0(Wo),Wo=-1):Xo=!0,Td(Ed,n-i))):(e.sortIndex=s,Sd(ns,e),ko||Md||(ko=!0,_r||(_r=!0,gr()))),e};Pe.unstable_shouldYield=G0;Pe.unstable_wrapCallback=function(e){var t=bn;return function(){var n=bn;bn=t;try{return e.apply(this,arguments)}finally{bn=n}}}});var W0=zi((l3,X0)=>{"use strict";X0.exports=k0()});var n_=zi(kt=>{"use strict";var Cd=Symbol.for("react.transitional.element"),Cb=Symbol.for("react.portal"),Rb=Symbol.for("react.fragment"),Db=Symbol.for("react.strict_mode"),Ub=Symbol.for("react.profiler"),Nb=Symbol.for("react.consumer"),Lb=Symbol.for("react.context"),Ib=Symbol.for("react.forward_ref"),Ob=Symbol.for("react.suspense"),Pb=Symbol.for("react.memo"),K0=Symbol.for("react.lazy"),Bb=Symbol.for("react.activity"),q0=Symbol.iterator;function zb(e){return e===null||typeof e!="object"?null:(e=q0&&e[q0]||e["@@iterator"],typeof e=="function"?e:null)}var Q0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j0=Object.assign,$0={};function xr(e,t,n){this.props=e,this.context=t,this.refs=$0,this.updater=n||Q0}xr.prototype.isReactComponent={};xr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function t_(){}t_.prototype=xr.prototype;function Rd(e,t,n){this.props=e,this.context=t,this.refs=$0,this.updater=n||Q0}var Dd=Rd.prototype=new t_;Dd.constructor=Rd;j0(Dd,xr.prototype);Dd.isPureReactComponent=!0;var Y0=Array.isArray;function wd(){}var De={H:null,A:null,T:null,S:null},e_=Object.prototype.hasOwnProperty;function Ud(e,t,n){var i=n.ref;return{$$typeof:Cd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function Fb(e,t){return Ud(e.type,t,e.props)}function Nd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cd}function Vb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Z0=/\/+/g;function Ad(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vb(""+e.key):t.toString(36)}function Hb(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(wd,wd):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function vr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Cd:case Cb:r=!0;break;case K0:return r=e._init,vr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Ad(e,0):i,Y0(s)?(n="",r!=null&&(n=r.replace(Z0,"$&/")+"/"),vr(s,t,n,"",function(c){return c})):s!=null&&(Nd(s)&&(s=Fb(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(Z0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(Y0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Ad(i,l),r+=vr(i,t,n,a,s);else if(l=zb(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Ad(i,l++),r+=vr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return vr(Hb(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Bc(e,t,n){if(e==null)return e;var i=[],s=0;return vr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function Gb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var J0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},kb={map:Bc,forEach:function(e,t,n){Bc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Bc(e,function(){t++}),t},toArray:function(e){return Bc(e,function(t){return t})||[]},only:function(e){if(!Nd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};kt.Activity=Bb;kt.Children=kb;kt.Component=xr;kt.Fragment=Rb;kt.Profiler=Ub;kt.PureComponent=Rd;kt.StrictMode=Db;kt.Suspense=Ob;kt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=De;kt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return De.H.useMemoCache(e)}};kt.cache=function(e){return function(){return e.apply(null,arguments)}};kt.cacheSignal=function(){return null};kt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=j0({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!e_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Ud(e.type,s,i)};kt.createContext=function(e){return e={$$typeof:Lb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Nb,_context:e},e};kt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)e_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Ud(e,a,s)};kt.createRef=function(){return{current:null}};kt.forwardRef=function(e){return{$$typeof:Ib,render:e}};kt.isValidElement=Nd;kt.lazy=function(e){return{$$typeof:K0,_payload:{_status:-1,_result:e},_init:Gb}};kt.memo=function(e,t){return{$$typeof:Pb,type:e,compare:t===void 0?null:t}};kt.startTransition=function(e){var t=De.T,n={};De.T=n;try{var i=e(),s=De.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(wd,J0)}catch(a){J0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),De.T=t}};kt.unstable_useCacheRefresh=function(){return De.H.useCacheRefresh()};kt.use=function(e){return De.H.use(e)};kt.useActionState=function(e,t,n){return De.H.useActionState(e,t,n)};kt.useCallback=function(e,t){return De.H.useCallback(e,t)};kt.useContext=function(e){return De.H.useContext(e)};kt.useDebugValue=function(){};kt.useDeferredValue=function(e,t){return De.H.useDeferredValue(e,t)};kt.useEffect=function(e,t){return De.H.useEffect(e,t)};kt.useEffectEvent=function(e){return De.H.useEffectEvent(e)};kt.useId=function(){return De.H.useId()};kt.useImperativeHandle=function(e,t,n){return De.H.useImperativeHandle(e,t,n)};kt.useInsertionEffect=function(e,t){return De.H.useInsertionEffect(e,t)};kt.useLayoutEffect=function(e,t){return De.H.useLayoutEffect(e,t)};kt.useMemo=function(e,t){return De.H.useMemo(e,t)};kt.useOptimistic=function(e,t){return De.H.useOptimistic(e,t)};kt.useReducer=function(e,t,n){return De.H.useReducer(e,t,n)};kt.useRef=function(e){return De.H.useRef(e)};kt.useState=function(e){return De.H.useState(e)};kt.useSyncExternalStore=function(e,t,n){return De.H.useSyncExternalStore(e,t,n)};kt.useTransition=function(){return De.H.useTransition()};kt.version="19.2.6"});var zc=zi((u3,i_)=>{"use strict";i_.exports=n_()});var a_=zi(Rn=>{"use strict";var Xb=zc();function s_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Vs(){}var Cn={d:{f:Vs,r:function(){throw Error(s_(522))},D:Vs,C:Vs,L:Vs,m:Vs,X:Vs,S:Vs,M:Vs},p:0,findDOMNode:null},Wb=Symbol.for("react.portal");function qb(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wb,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var qo=Xb.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Fc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Cn;Rn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(s_(299));return qb(e,t,null,n)};Rn.flushSync=function(e){var t=qo.T,n=Cn.p;try{if(qo.T=null,Cn.p=2,e)return e()}finally{qo.T=t,Cn.p=n,Cn.d.f()}};Rn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Cn.d.C(e,t))};Rn.prefetchDNS=function(e){typeof e=="string"&&Cn.d.D(e)};Rn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Fc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Cn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Cn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Rn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Fc(t.as,t.crossOrigin);Cn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Cn.d.M(e)};Rn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Fc(n,t.crossOrigin);Cn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Rn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Fc(t.as,t.crossOrigin);Cn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Cn.d.m(e)};Rn.requestFormReset=function(e){Cn.d.r(e)};Rn.unstable_batchedUpdates=function(e,t){return e(t)};Rn.useFormState=function(e,t,n){return qo.H.useFormState(e,t,n)};Rn.useFormStatus=function(){return qo.H.useHostTransitionStatus()};Rn.version="19.2.6"});var l_=zi((f3,o_)=>{"use strict";function r_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r_)}catch(e){console.error(e)}}r_(),o_.exports=a_()});var yS=zi(uh=>{"use strict";var an=W0(),Iv=zc(),Yb=l_();function j(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ov(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Nl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bv(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c_(e){if(Nl(e)!==e)throw Error(j(188))}function Zb(e){var t=e.alternate;if(!t){if(t=Nl(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return c_(s),e;if(a===i)return c_(s),t;a=a.sibling}throw Error(j(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(j(189))}}if(n.alternate!==i)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function zv(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=zv(e),t!==null)return t;e=e.sibling}return null}var Le=Object.assign,Jb=Symbol.for("react.element"),Vc=Symbol.for("react.transitional.element"),tl=Symbol.for("react.portal"),Tr=Symbol.for("react.fragment"),Fv=Symbol.for("react.strict_mode"),fp=Symbol.for("react.profiler"),Vv=Symbol.for("react.consumer"),us=Symbol.for("react.context"),om=Symbol.for("react.forward_ref"),dp=Symbol.for("react.suspense"),pp=Symbol.for("react.suspense_list"),lm=Symbol.for("react.memo"),Hs=Symbol.for("react.lazy"),mp=Symbol.for("react.activity"),Kb=Symbol.for("react.memo_cache_sentinel"),u_=Symbol.iterator;function Yo(e){return e===null||typeof e!="object"?null:(e=u_&&e[u_]||e["@@iterator"],typeof e=="function"?e:null)}var Qb=Symbol.for("react.client.reference");function gp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Qb?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tr:return"Fragment";case fp:return"Profiler";case Fv:return"StrictMode";case dp:return"Suspense";case pp:return"SuspenseList";case mp:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case tl:return"Portal";case us:return e.displayName||"Context";case Vv:return(e._context.displayName||"Context")+".Consumer";case om:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lm:return t=e.displayName||null,t!==null?t:gp(e.type)||"Memo";case Hs:t=e._payload,e=e._init;try{return gp(e(t))}catch{}}return null}var el=Array.isArray,Ft=Iv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe=Yb.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Pa={pending:!1,data:null,method:null,action:null},_p=[],Ar=-1;function Xi(e){return{current:e}}function un(e){0>Ar||(e.current=_p[Ar],_p[Ar]=null,Ar--)}function Ae(e,t){Ar++,_p[Ar]=e.current,e.current=t}var ki=Xi(null),vl=Xi(null),js=Xi(null),xu=Xi(null);function yu(e,t){switch(Ae(js,t),Ae(vl,e),Ae(ki,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?_v(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=_v(t),e=rS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}un(ki),Ae(ki,e)}function Xr(){un(ki),un(vl),un(js)}function vp(e){e.memoizedState!==null&&Ae(xu,e);var t=ki.current,n=rS(t,e.type);t!==n&&(Ae(vl,e),Ae(ki,n))}function Su(e){vl.current===e&&(un(ki),un(vl)),xu.current===e&&(un(xu),Rl._currentValue=Pa)}var Ld,h_;function Na(e){if(Ld===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ld=t&&t[1]||"",h_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ld+e+h_}var Id=!1;function Od(e,t){if(!e||Id)return"";Id=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(d){var u=d}Reflect.construct(e,[],p)}else{try{p.call()}catch(d){u=d}e.call(p.prototype)}}else{try{throw Error()}catch(d){u=d}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(d){if(d&&u&&typeof d.stack=="string")return[d.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{Id=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Na(n):""}function jb(e,t){switch(e.tag){case 26:case 27:case 5:return Na(e.type);case 16:return Na("Lazy");case 13:return e.child!==t&&t!==null?Na("Suspense Fallback"):Na("Suspense");case 19:return Na("SuspenseList");case 0:case 15:return Od(e.type,!1);case 11:return Od(e.type.render,!1);case 1:return Od(e.type,!0);case 31:return Na("Activity");default:return""}}function f_(e){try{var t="",n=null;do t+=jb(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var xp=Object.prototype.hasOwnProperty,cm=an.unstable_scheduleCallback,Pd=an.unstable_cancelCallback,$b=an.unstable_shouldYield,t1=an.unstable_requestPaint,Zn=an.unstable_now,e1=an.unstable_getCurrentPriorityLevel,Hv=an.unstable_ImmediatePriority,Gv=an.unstable_UserBlockingPriority,Mu=an.unstable_NormalPriority,n1=an.unstable_LowPriority,kv=an.unstable_IdlePriority,i1=an.log,s1=an.unstable_setDisableYieldValue,Ll=null,Jn=null;function Ys(e){if(typeof i1=="function"&&s1(e),Jn&&typeof Jn.setStrictMode=="function")try{Jn.setStrictMode(Ll,e)}catch{}}var Kn=Math.clz32?Math.clz32:o1,a1=Math.log,r1=Math.LN2;function o1(e){return e>>>=0,e===0?32:31-(a1(e)/r1|0)|0}var Hc=256,Gc=262144,kc=4194304;function La(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=La(i):(r&=o,r!==0?s=La(r):n||(n=o&~e,n!==0&&(s=La(n))))):(o=i&~a,o!==0?s=La(o):r!==0?s=La(r):n||(n=i&~e,n!==0&&(s=La(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Il(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function l1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xv(){var e=kc;return kc<<=1,(kc&62914560)===0&&(kc=4194304),e}function Bd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ol(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function c1(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-Kn(n),p=1<<f;o[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var d=u[f];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&Wv(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function Wv(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Kn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function qv(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Kn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Yv(e,t){var n=t&-t;return n=(n&42)!==0?1:um(n),(n&(e.suspendedLanes|t))!==0?0:n}function um(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function hm(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zv(){var e=fe.p;return e!==0?e:(e=window.event,e===void 0?32:_S(e.type))}function d_(e,t){var n=fe.p;try{return fe.p=e,t()}finally{fe.p=n}}var ha=Math.random().toString(36).slice(2),mn="__reactFiber$"+ha,Fn="__reactProps$"+ha,eo="__reactContainer$"+ha,yp="__reactEvents$"+ha,u1="__reactListeners$"+ha,h1="__reactHandles$"+ha,p_="__reactResources$"+ha,Pl="__reactMarker$"+ha;function fm(e){delete e[mn],delete e[Fn],delete e[yp],delete e[u1],delete e[h1]}function wr(e){var t=e[mn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[eo]||n[mn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Mv(e);e!==null;){if(n=e[mn])return n;e=Mv(e)}return t}e=n,n=e.parentNode}return null}function no(e){if(e=e[mn]||e[eo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function nl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(j(33))}function Br(e){var t=e[p_];return t||(t=e[p_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function cn(e){e[Pl]=!0}var Jv=new Set,Kv={};function qa(e,t){Wr(e,t),Wr(e+"Capture",t)}function Wr(e,t){for(Kv[e]=t,e=0;e<t.length;e++)Jv.add(t[e])}var f1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),m_={},g_={};function d1(e){return xp.call(g_,e)?!0:xp.call(m_,e)?!1:f1.test(e)?g_[e]=!0:(m_[e]=!0,!1)}function su(e,t,n){if(d1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Xc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function is(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function hi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function p1(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sp(e){if(!e._valueTracker){var t=Qv(e)?"checked":"value";e._valueTracker=p1(e,t,""+e[t])}}function jv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Qv(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function bu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var m1=/[\n"\\]/g;function pi(e){return e.replace(m1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Mp(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+hi(t)):e.value!==""+hi(t)&&(e.value=""+hi(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?bp(e,r,hi(t)):n!=null?bp(e,r,hi(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+hi(o):e.removeAttribute("name")}function $v(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Sp(e);return}n=n!=null?""+hi(n):"",t=t!=null?""+hi(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Sp(e)}function bp(e,t,n){t==="number"&&bu(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function zr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+hi(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function tx(e,t,n){if(t!=null&&(t=""+hi(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+hi(n):""}function ex(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(j(92));if(el(i)){if(1<i.length)throw Error(j(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=hi(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Sp(e)}function qr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var g1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function __(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||g1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function nx(e,t,n){if(t!=null&&typeof t!="object")throw Error(j(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&__(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&__(e,a,t[a])}function dm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),v1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function au(e){return v1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function hs(){}var Ep=null;function pm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cr=null,Fr=null;function v_(e){var t=no(e);if(t&&(e=t.stateNode)){var n=e[Fn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Mp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+pi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Fn]||null;if(!s)throw Error(j(90));Mp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&jv(i)}break t;case"textarea":tx(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&zr(e,!!n.multiple,t,!1)}}}var zd=!1;function ix(e,t,n){if(zd)return e(t,n);zd=!0;try{var i=e(t);return i}finally{if(zd=!1,(Cr!==null||Fr!==null)&&(rh(),Cr&&(t=Cr,e=Fr,Fr=Cr=null,v_(t),e)))for(t=0;t<e.length;t++)v_(e[t])}}function xl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Fn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var gs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tp=!1;if(gs)try{yr={},Object.defineProperty(yr,"passive",{get:function(){Tp=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{Tp=!1}var yr,Zs=null,mm=null,ru=null;function sx(){if(ru)return ru;var e,t=mm,n=t.length,i,s="value"in Zs?Zs.value:Zs.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return ru=s.slice(e,1<i?1-i:void 0)}function ou(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wc(){return!0}function x_(){return!1}function Vn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Wc:x_,this.isPropagationStopped=x_,this}return Le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wc)},persist:function(){},isPersistent:Wc}),t}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ju=Vn(Ya),Bl=Le({},Ya,{view:0,detail:0}),x1=Vn(Bl),Fd,Vd,Zo,Ku=Le({},Bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zo&&(Zo&&e.type==="mousemove"?(Fd=e.screenX-Zo.screenX,Vd=e.screenY-Zo.screenY):Vd=Fd=0,Zo=e),Fd)},movementY:function(e){return"movementY"in e?e.movementY:Vd}}),y_=Vn(Ku),y1=Le({},Ku,{dataTransfer:0}),S1=Vn(y1),M1=Le({},Bl,{relatedTarget:0}),Hd=Vn(M1),b1=Le({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),E1=Vn(b1),T1=Le({},Ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),A1=Vn(T1),w1=Le({},Ya,{data:0}),S_=Vn(w1),C1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=D1[e])?!!t[e]:!1}function gm(){return U1}var N1=Le({},Bl,{key:function(e){if(e.key){var t=C1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ou(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?R1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gm,charCode:function(e){return e.type==="keypress"?ou(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ou(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),L1=Vn(N1),I1=Le({},Ku,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),M_=Vn(I1),O1=Le({},Bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gm}),P1=Vn(O1),B1=Le({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),z1=Vn(B1),F1=Le({},Ku,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),V1=Vn(F1),H1=Le({},Ya,{newState:0,oldState:0}),G1=Vn(H1),k1=[9,13,27,32],_m=gs&&"CompositionEvent"in window,al=null;gs&&"documentMode"in document&&(al=document.documentMode);var X1=gs&&"TextEvent"in window&&!al,ax=gs&&(!_m||al&&8<al&&11>=al),b_=" ",E_=!1;function rx(e,t){switch(e){case"keyup":return k1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ox(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rr=!1;function W1(e,t){switch(e){case"compositionend":return ox(t);case"keypress":return t.which!==32?null:(E_=!0,b_);case"textInput":return e=t.data,e===b_&&E_?null:e;default:return null}}function q1(e,t){if(Rr)return e==="compositionend"||!_m&&rx(e,t)?(e=sx(),ru=mm=Zs=null,Rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ax&&t.locale!=="ko"?null:t.data;default:return null}}var Y1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function T_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Y1[e.type]:t==="textarea"}function lx(e,t,n,i){Cr?Fr?Fr.push(i):Fr=[i]:Cr=i,t=Hu(t,"onChange"),0<t.length&&(n=new Ju("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var rl=null,yl=null;function Z1(e){iS(e,0)}function Qu(e){var t=nl(e);if(jv(t))return e}function A_(e,t){if(e==="change")return t}var cx=!1;gs&&(gs?(Yc="oninput"in document,Yc||(Gd=document.createElement("div"),Gd.setAttribute("oninput","return;"),Yc=typeof Gd.oninput=="function"),qc=Yc):qc=!1,cx=qc&&(!document.documentMode||9<document.documentMode));var qc,Yc,Gd;function w_(){rl&&(rl.detachEvent("onpropertychange",ux),yl=rl=null)}function ux(e){if(e.propertyName==="value"&&Qu(yl)){var t=[];lx(t,yl,e,pm(e)),ix(Z1,t)}}function J1(e,t,n){e==="focusin"?(w_(),rl=t,yl=n,rl.attachEvent("onpropertychange",ux)):e==="focusout"&&w_()}function K1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qu(yl)}function Q1(e,t){if(e==="click")return Qu(t)}function j1(e,t){if(e==="input"||e==="change")return Qu(t)}function $1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jn=typeof Object.is=="function"?Object.is:$1;function Sl(e,t){if(jn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!xp.call(t,s)||!jn(e[s],t[s]))return!1}return!0}function C_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function R_(e,t){var n=C_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=C_(n)}}function hx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=bu(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bu(e.document)}return t}function vm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var tE=gs&&"documentMode"in document&&11>=document.documentMode,Dr=null,Ap=null,ol=null,wp=!1;function D_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wp||Dr==null||Dr!==bu(i)||(i=Dr,"selectionStart"in i&&vm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ol&&Sl(ol,i)||(ol=i,i=Hu(Ap,"onSelect"),0<i.length&&(t=new Ju("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Dr)))}function Ua(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ur={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionrun:Ua("Transition","TransitionRun"),transitionstart:Ua("Transition","TransitionStart"),transitioncancel:Ua("Transition","TransitionCancel"),transitionend:Ua("Transition","TransitionEnd")},kd={},dx={};gs&&(dx=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function Za(e){if(kd[e])return kd[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in dx)return kd[e]=t[n];return e}var px=Za("animationend"),mx=Za("animationiteration"),gx=Za("animationstart"),eE=Za("transitionrun"),nE=Za("transitionstart"),iE=Za("transitioncancel"),_x=Za("transitionend"),vx=new Map,Cp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cp.push("scrollEnd");function wi(e,t){vx.set(e,t),qa(t,[e])}var Eu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ui=[],Nr=0,xm=0;function ju(){for(var e=Nr,t=xm=Nr=0;t<e;){var n=ui[t];ui[t++]=null;var i=ui[t];ui[t++]=null;var s=ui[t];ui[t++]=null;var a=ui[t];if(ui[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&xx(n,s,a)}}function $u(e,t,n,i){ui[Nr++]=e,ui[Nr++]=t,ui[Nr++]=n,ui[Nr++]=i,xm|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function ym(e,t,n,i){return $u(e,t,n,i),Tu(e)}function Ja(e,t){return $u(e,null,null,t),Tu(e)}function xx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Kn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Tu(e){if(50<gl)throw gl=0,Jp=null,Error(j(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Lr={};function sE(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,t,n,i){return new sE(e,t,n,i)}function Sm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ds(e,t){var n=e.alternate;return n===null?(n=qn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yx(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function lu(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")Sm(e)&&(r=1);else if(typeof e=="string")r=oT(e,n,ki.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case mp:return e=qn(31,n,t,s),e.elementType=mp,e.lanes=a,e;case Tr:return Ba(n.children,s,a,t);case Fv:r=8,s|=24;break;case fp:return e=qn(12,n,t,s|2),e.elementType=fp,e.lanes=a,e;case dp:return e=qn(13,n,t,s),e.elementType=dp,e.lanes=a,e;case pp:return e=qn(19,n,t,s),e.elementType=pp,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case us:r=10;break t;case Vv:r=9;break t;case om:r=11;break t;case lm:r=14;break t;case Hs:r=16,i=null;break t}r=29,n=Error(j(130,e===null?"null":typeof e,"")),i=null}return t=qn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Ba(e,t,n,i){return e=qn(7,e,i,t),e.lanes=n,e}function Xd(e,t,n){return e=qn(6,e,null,t),e.lanes=n,e}function Sx(e){var t=qn(18,null,null,0);return t.stateNode=e,t}function Wd(e,t,n){return t=qn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var U_=new WeakMap;function mi(e,t){if(typeof e=="object"&&e!==null){var n=U_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:f_(t)},U_.set(e,t),t)}return{value:e,source:t,stack:f_(t)}}var Ir=[],Or=0,Au=null,Ml=0,fi=[],di=0,oa=null,Vi=1,Hi="";function ls(e,t){Ir[Or++]=Ml,Ir[Or++]=Au,Au=e,Ml=t}function Mx(e,t,n){fi[di++]=Vi,fi[di++]=Hi,fi[di++]=oa,oa=e;var i=Vi;e=Hi;var s=32-Kn(i)-1;i&=~(1<<s),n+=1;var a=32-Kn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Vi=1<<32-Kn(t)+s|n<<s|i,Hi=a+e}else Vi=1<<a|n<<s|i,Hi=e}function Mm(e){e.return!==null&&(ls(e,1),Mx(e,1,0))}function bm(e){for(;e===Au;)Au=Ir[--Or],Ir[Or]=null,Ml=Ir[--Or],Ir[Or]=null;for(;e===oa;)oa=fi[--di],fi[di]=null,Hi=fi[--di],fi[di]=null,Vi=fi[--di],fi[di]=null}function bx(e,t){fi[di++]=Vi,fi[di++]=Hi,fi[di++]=oa,Vi=t.id,Hi=t.overflow,oa=e}var gn=null,Ne=null,ae=!1,$s=null,gi=!1,Rp=Error(j(519));function la(e){var t=Error(j(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw bl(mi(t,e)),Rp}function N_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[mn]=e,t[Fn]=i,n){case"dialog":jt("cancel",t),jt("close",t);break;case"iframe":case"object":case"embed":jt("load",t);break;case"video":case"audio":for(n=0;n<wl.length;n++)jt(wl[n],t);break;case"source":jt("error",t);break;case"img":case"image":case"link":jt("error",t),jt("load",t);break;case"details":jt("toggle",t);break;case"input":jt("invalid",t),$v(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":jt("invalid",t);break;case"textarea":jt("invalid",t),ex(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||aS(t.textContent,n)?(i.popover!=null&&(jt("beforetoggle",t),jt("toggle",t)),i.onScroll!=null&&jt("scroll",t),i.onScrollEnd!=null&&jt("scrollend",t),i.onClick!=null&&(t.onclick=hs),t=!0):t=!1,t||la(e,!0)}function L_(e){for(gn=e.return;gn;)switch(gn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:gn=gn.return}}function Sr(e){if(e!==gn)return!1;if(!ae)return L_(e),ae=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||tm(e.type,e.memoizedProps)),n=!n),n&&Ne&&la(e),L_(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));Ne=Sv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));Ne=Sv(e)}else t===27?(t=Ne,fa(e.type)?(e=sm,sm=null,Ne=e):Ne=t):Ne=gn?vi(e.stateNode.nextSibling):null;return!0}function Ha(){Ne=gn=null,ae=!1}function qd(){var e=$s;return e!==null&&(Bn===null?Bn=e:Bn.push.apply(Bn,e),$s=null),e}function bl(e){$s===null?$s=[e]:$s.push(e)}var Dp=Xi(null),Ka=null,fs=null;function ks(e,t,n){Ae(Dp,t._currentValue),t._currentValue=n}function ps(e){e._currentValue=Dp.current,un(Dp)}function Up(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Np(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Up(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(j(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Up(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function io(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(j(387));if(r=r.memoizedProps,r!==null){var o=s.type;jn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===xu.current){if(r=s.alternate,r===null)throw Error(j(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Rl):e=[Rl])}s=s.return}e!==null&&Np(t,e,n,i),t.flags|=262144}function wu(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ga(e){Ka=e,fs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _n(e){return Ex(Ka,e)}function Zc(e,t){return Ka===null&&Ga(e),Ex(e,t)}function Ex(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},fs===null){if(e===null)throw Error(j(308));fs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else fs=fs.next=t;return n}var aE=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},rE=an.unstable_scheduleCallback,oE=an.unstable_NormalPriority,tn={$$typeof:us,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Em(){return{controller:new aE,data:new Map,refCount:0}}function zl(e){e.refCount--,e.refCount===0&&rE(oE,function(){e.controller.abort()})}var ll=null,Lp=0,Yr=0,Vr=null;function lE(e,t){if(ll===null){var n=ll=[];Lp=0,Yr=Jm(),Vr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Lp++,t.then(I_,I_),t}function I_(){if(--Lp===0&&ll!==null){Vr!==null&&(Vr.status="fulfilled");var e=ll;ll=null,Yr=0,Vr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function cE(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var O_=Ft.S;Ft.S=function(e,t){zy=Zn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&lE(e,t),O_!==null&&O_(e,t)};var za=Xi(null);function Tm(){var e=za.current;return e!==null?e:be.pooledCache}function cu(e,t){t===null?Ae(za,za.current):Ae(za,t.pool)}function Tx(){var e=Tm();return e===null?null:{parent:tn._currentValue,pool:e}}var so=Error(j(460)),Am=Error(j(474)),th=Error(j(542)),Cu={then:function(){}};function P_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ax(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(hs,hs),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,z_(e),e;default:if(typeof t.status=="string")t.then(hs,hs);else{if(e=be,e!==null&&100<e.shellSuspendCounter)throw Error(j(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,z_(e),e}throw Fa=t,so}}function Ia(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Fa=n,so):n}}var Fa=null;function B_(){if(Fa===null)throw Error(j(459));var e=Fa;return Fa=null,e}function z_(e){if(e===so||e===th)throw Error(j(483))}var Hr=null,El=0;function Jc(e){var t=El;return El+=1,Hr===null&&(Hr=[]),Ax(Hr,e,t)}function Jo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Kc(e,t){throw t.$$typeof===Jb?Error(j(525)):(e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function wx(e){function t(h,m){if(e){var S=h.deletions;S===null?(h.deletions=[m],h.flags|=16):S.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function i(h){for(var m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function s(h,m){return h=ds(h,m),h.index=0,h.sibling=null,h}function a(h,m,S){return h.index=S,e?(S=h.alternate,S!==null?(S=S.index,S<m?(h.flags|=67108866,m):S):(h.flags|=67108866,m)):(h.flags|=1048576,m)}function r(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function o(h,m,S,g){return m===null||m.tag!==6?(m=Xd(S,h.mode,g),m.return=h,m):(m=s(m,S),m.return=h,m)}function l(h,m,S,g){var A=S.type;return A===Tr?f(h,m,S.props.children,g,S.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Hs&&Ia(A)===m.type)?(m=s(m,S.props),Jo(m,S),m.return=h,m):(m=lu(S.type,S.key,S.props,null,h.mode,g),Jo(m,S),m.return=h,m)}function c(h,m,S,g){return m===null||m.tag!==4||m.stateNode.containerInfo!==S.containerInfo||m.stateNode.implementation!==S.implementation?(m=Wd(S,h.mode,g),m.return=h,m):(m=s(m,S.children||[]),m.return=h,m)}function f(h,m,S,g,A){return m===null||m.tag!==7?(m=Ba(S,h.mode,g,A),m.return=h,m):(m=s(m,S),m.return=h,m)}function p(h,m,S){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Xd(""+m,h.mode,S),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Vc:return S=lu(m.type,m.key,m.props,null,h.mode,S),Jo(S,m),S.return=h,S;case tl:return m=Wd(m,h.mode,S),m.return=h,m;case Hs:return m=Ia(m),p(h,m,S)}if(el(m)||Yo(m))return m=Ba(m,h.mode,S,null),m.return=h,m;if(typeof m.then=="function")return p(h,Jc(m),S);if(m.$$typeof===us)return p(h,Zc(h,m),S);Kc(h,m)}return null}function u(h,m,S,g){var A=m!==null?m.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return A!==null?null:o(h,m,""+S,g);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Vc:return S.key===A?l(h,m,S,g):null;case tl:return S.key===A?c(h,m,S,g):null;case Hs:return S=Ia(S),u(h,m,S,g)}if(el(S)||Yo(S))return A!==null?null:f(h,m,S,g,null);if(typeof S.then=="function")return u(h,m,Jc(S),g);if(S.$$typeof===us)return u(h,m,Zc(h,S),g);Kc(h,S)}return null}function d(h,m,S,g,A){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return h=h.get(S)||null,o(m,h,""+g,A);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Vc:return h=h.get(g.key===null?S:g.key)||null,l(m,h,g,A);case tl:return h=h.get(g.key===null?S:g.key)||null,c(m,h,g,A);case Hs:return g=Ia(g),d(h,m,S,g,A)}if(el(g)||Yo(g))return h=h.get(S)||null,f(m,h,g,A,null);if(typeof g.then=="function")return d(h,m,S,Jc(g),A);if(g.$$typeof===us)return d(h,m,S,Zc(m,g),A);Kc(m,g)}return null}function v(h,m,S,g){for(var A=null,E=null,w=m,y=m=0,T=null;w!==null&&y<S.length;y++){w.index>y?(T=w,w=null):T=w.sibling;var R=u(h,w,S[y],g);if(R===null){w===null&&(w=T);break}e&&w&&R.alternate===null&&t(h,w),m=a(R,m,y),E===null?A=R:E.sibling=R,E=R,w=T}if(y===S.length)return n(h,w),ae&&ls(h,y),A;if(w===null){for(;y<S.length;y++)w=p(h,S[y],g),w!==null&&(m=a(w,m,y),E===null?A=w:E.sibling=w,E=w);return ae&&ls(h,y),A}for(w=i(w);y<S.length;y++)T=d(w,h,y,S[y],g),T!==null&&(e&&T.alternate!==null&&w.delete(T.key===null?y:T.key),m=a(T,m,y),E===null?A=T:E.sibling=T,E=T);return e&&w.forEach(function(D){return t(h,D)}),ae&&ls(h,y),A}function M(h,m,S,g){if(S==null)throw Error(j(151));for(var A=null,E=null,w=m,y=m=0,T=null,R=S.next();w!==null&&!R.done;y++,R=S.next()){w.index>y?(T=w,w=null):T=w.sibling;var D=u(h,w,R.value,g);if(D===null){w===null&&(w=T);break}e&&w&&D.alternate===null&&t(h,w),m=a(D,m,y),E===null?A=D:E.sibling=D,E=D,w=T}if(R.done)return n(h,w),ae&&ls(h,y),A;if(w===null){for(;!R.done;y++,R=S.next())R=p(h,R.value,g),R!==null&&(m=a(R,m,y),E===null?A=R:E.sibling=R,E=R);return ae&&ls(h,y),A}for(w=i(w);!R.done;y++,R=S.next())R=d(w,h,y,R.value,g),R!==null&&(e&&R.alternate!==null&&w.delete(R.key===null?y:R.key),m=a(R,m,y),E===null?A=R:E.sibling=R,E=R);return e&&w.forEach(function(B){return t(h,B)}),ae&&ls(h,y),A}function _(h,m,S,g){if(typeof S=="object"&&S!==null&&S.type===Tr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Vc:t:{for(var A=S.key;m!==null;){if(m.key===A){if(A=S.type,A===Tr){if(m.tag===7){n(h,m.sibling),g=s(m,S.props.children),g.return=h,h=g;break t}}else if(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Hs&&Ia(A)===m.type){n(h,m.sibling),g=s(m,S.props),Jo(g,S),g.return=h,h=g;break t}n(h,m);break}else t(h,m);m=m.sibling}S.type===Tr?(g=Ba(S.props.children,h.mode,g,S.key),g.return=h,h=g):(g=lu(S.type,S.key,S.props,null,h.mode,g),Jo(g,S),g.return=h,h=g)}return r(h);case tl:t:{for(A=S.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===S.containerInfo&&m.stateNode.implementation===S.implementation){n(h,m.sibling),g=s(m,S.children||[]),g.return=h,h=g;break t}else{n(h,m);break}else t(h,m);m=m.sibling}g=Wd(S,h.mode,g),g.return=h,h=g}return r(h);case Hs:return S=Ia(S),_(h,m,S,g)}if(el(S))return v(h,m,S,g);if(Yo(S)){if(A=Yo(S),typeof A!="function")throw Error(j(150));return S=A.call(S),M(h,m,S,g)}if(typeof S.then=="function")return _(h,m,Jc(S),g);if(S.$$typeof===us)return _(h,m,Zc(h,S),g);Kc(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,m!==null&&m.tag===6?(n(h,m.sibling),g=s(m,S),g.return=h,h=g):(n(h,m),g=Xd(S,h.mode,g),g.return=h,h=g),r(h)):n(h,m)}return function(h,m,S,g){try{El=0;var A=_(h,m,S,g);return Hr=null,A}catch(w){if(w===so||w===th)throw w;var E=qn(29,w,null,h.mode);return E.lanes=g,E.return=h,E}}}var ka=wx(!0),Cx=wx(!1),Gs=!1;function wm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ip(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ta(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ea(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(he&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Tu(e),xx(e,null,n),t}return $u(e,i,t,n),Tu(e)}function cl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,qv(e,n)}}function Yd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Op=!1;function ul(){if(Op){var e=Vr;if(e!==null)throw e}}function hl(e,t,n,i){Op=!1;var s=e.updateQueue;Gs=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,f=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(te&u)===u:(i&u)===u){u!==0&&u===Yr&&(Op=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,M=o;u=t;var _=n;switch(M.tag){case 1:if(v=M.payload,typeof v=="function"){p=v.call(_,p,u);break t}p=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=M.payload,u=typeof v=="function"?v.call(_,p,u):v,u==null)break t;p=Le({},p,u);break t;case 2:Gs=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=d,l=p):f=f.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);f===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),ua|=r,e.lanes=r,e.memoizedState=p}}function Rx(e,t){if(typeof e!="function")throw Error(j(191,e));e.call(t)}function Dx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Rx(n[e],t)}var Zr=Xi(null),Ru=Xi(0);function F_(e,t){e=ys,Ae(Ru,e),Ae(Zr,t),ys=e|t.baseLanes}function Pp(){Ae(Ru,ys),Ae(Zr,Zr.current)}function Cm(){ys=Ru.current,un(Zr),un(Ru)}var $n=Xi(null),_i=null;function Xs(e){var t=e.alternate;Ae(Ye,Ye.current&1),Ae($n,e),_i===null&&(t===null||Zr.current!==null||t.memoizedState!==null)&&(_i=e)}function Bp(e){Ae(Ye,Ye.current),Ae($n,e),_i===null&&(_i=e)}function Ux(e){e.tag===22?(Ae(Ye,Ye.current),Ae($n,e),_i===null&&(_i=e)):Ws(e)}function Ws(){Ae(Ye,Ye.current),Ae($n,$n.current)}function Wn(e){un($n),_i===e&&(_i=null),un(Ye)}var Ye=Xi(0);function Du(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||nm(n)||im(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _s=0,qt=null,xe=null,je=null,Uu=!1,Gr=!1,Xa=!1,Nu=0,Tl=0,kr=null,uE=0;function Ge(){throw Error(j(321))}function Rm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jn(e[n],t[n]))return!1;return!0}function Dm(e,t,n,i,s,a){return _s=a,qt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ft.H=e===null||e.memoizedState===null?ly:Hm,Xa=!1,a=n(i,s),Xa=!1,Gr&&(a=Lx(t,n,i,s)),Nx(e),a}function Nx(e){Ft.H=Al;var t=xe!==null&&xe.next!==null;if(_s=0,je=xe=qt=null,Uu=!1,Tl=0,kr=null,t)throw Error(j(300));e===null||en||(e=e.dependencies,e!==null&&wu(e)&&(en=!0))}function Lx(e,t,n,i){qt=e;var s=0;do{if(Gr&&(kr=null),Tl=0,Gr=!1,25<=s)throw Error(j(301));if(s+=1,je=xe=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Ft.H=cy,a=t(n,i)}while(Gr);return a}function hE(){var e=Ft.H,t=e.useState()[0];return t=typeof t.then=="function"?Fl(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(qt.flags|=1024),t}function Um(){var e=Nu!==0;return Nu=0,e}function Nm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Lm(e){if(Uu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Uu=!1}_s=0,je=xe=qt=null,Gr=!1,Tl=Nu=0,kr=null}function Dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?qt.memoizedState=je=e:je=je.next=e,je}function Ze(){if(xe===null){var e=qt.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=je===null?qt.memoizedState:je.next;if(t!==null)je=t,xe=e;else{if(e===null)throw qt.alternate===null?Error(j(467)):Error(j(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},je===null?qt.memoizedState=je=e:je=je.next=e}return je}function eh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fl(e){var t=Tl;return Tl+=1,kr===null&&(kr=[]),e=Ax(kr,e,t),t=qt,(je===null?t.memoizedState:je.next)===null&&(t=t.alternate,Ft.H=t===null||t.memoizedState===null?ly:Hm),e}function nh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fl(e);if(e.$$typeof===us)return _n(e)}throw Error(j(438,String(e)))}function Im(e){var t=null,n=qt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=qt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=eh(),qt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Kb;return t.index++,n}function vs(e,t){return typeof t=="function"?t(e):t}function uu(e){var t=Ze();return Om(t,xe,e)}function Om(e,t,n){var i=e.queue;if(i===null)throw Error(j(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(te&p)===p:(_s&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Yr&&(f=!0);else if((_s&u)===u){c=c.next,u===Yr&&(f=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,qt.lanes|=u,ua|=u;p=c.action,Xa&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,qt.lanes|=p,ua|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!jn(a,e.memoizedState)&&(en=!0,f&&(n=Vr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Zd(e){var t=Ze(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);jn(a,t.memoizedState)||(en=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Ix(e,t,n){var i=qt,s=Ze(),a=ae;if(a){if(n===void 0)throw Error(j(407));n=n()}else n=t();var r=!jn((xe||s).memoizedState,n);if(r&&(s.memoizedState=n,en=!0),s=s.queue,Pm(Bx.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||je!==null&&je.memoizedState.tag&1){if(i.flags|=2048,Jr(9,{destroy:void 0},Px.bind(null,i,s,n,t),null),be===null)throw Error(j(349));a||(_s&127)!==0||Ox(i,t,n)}return n}function Ox(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=qt.updateQueue,t===null?(t=eh(),qt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Px(e,t,n,i){t.value=n,t.getSnapshot=i,zx(t)&&Fx(e)}function Bx(e,t,n){return n(function(){zx(t)&&Fx(e)})}function zx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jn(e,n)}catch{return!0}}function Fx(e){var t=Ja(e,2);t!==null&&zn(t,e,2)}function zp(e){var t=Dn();if(typeof e=="function"){var n=e;if(e=n(),Xa){Ys(!0);try{n()}finally{Ys(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:e},t}function Vx(e,t,n,i){return e.baseState=n,Om(e,xe,typeof i=="function"?i:vs)}function fE(e,t,n,i,s){if(sh(e))throw Error(j(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Ft.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,Hx(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Hx(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Ft.T,r={};Ft.T=r;try{var o=n(s,i),l=Ft.S;l!==null&&l(r,o),V_(e,t,o)}catch(c){Fp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Ft.T=a}}else try{a=n(s,i),V_(e,t,a)}catch(c){Fp(e,t,c)}}function V_(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){H_(e,t,i)},function(i){return Fp(e,t,i)}):H_(e,t,n)}function H_(e,t,n){t.status="fulfilled",t.value=n,Gx(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Hx(e,n)))}function Fp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Gx(t),t=t.next;while(t!==i)}e.action=null}function Gx(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function kx(e,t){return t}function G_(e,t){if(ae){var n=be.formState;if(n!==null){t:{var i=qt;if(ae){if(Ne){e:{for(var s=Ne,a=gi;s.nodeType!==8;){if(!a){s=null;break e}if(s=vi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Ne=vi(s.nextSibling),i=s.data==="F!";break t}}la(i)}i=!1}i&&(t=n[0])}}return n=Dn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kx,lastRenderedState:t},n.queue=i,n=ay.bind(null,qt,i),i.dispatch=n,i=zp(!1),a=Vm.bind(null,qt,!1,i.queue),i=Dn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=fE.bind(null,qt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function k_(e){var t=Ze();return Xx(t,xe,e)}function Xx(e,t,n){if(t=Om(e,t,kx)[0],e=uu(vs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Fl(t)}catch(r){throw r===so?th:r}else i=t;t=Ze();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(qt.flags|=2048,Jr(9,{destroy:void 0},dE.bind(null,s,n),null)),[i,a,e]}function dE(e,t){e.action=t}function X_(e){var t=Ze(),n=xe;if(n!==null)return Xx(t,n,e);Ze(),t=t.memoizedState,n=Ze();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Jr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=qt.updateQueue,t===null&&(t=eh(),qt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Wx(){return Ze().memoizedState}function hu(e,t,n,i){var s=Dn();qt.flags|=e,s.memoizedState=Jr(1|t,{destroy:void 0},n,i===void 0?null:i)}function ih(e,t,n,i){var s=Ze();i=i===void 0?null:i;var a=s.memoizedState.inst;xe!==null&&i!==null&&Rm(i,xe.memoizedState.deps)?s.memoizedState=Jr(t,a,n,i):(qt.flags|=e,s.memoizedState=Jr(1|t,a,n,i))}function W_(e,t){hu(8390656,8,e,t)}function Pm(e,t){ih(2048,8,e,t)}function pE(e){qt.flags|=4;var t=qt.updateQueue;if(t===null)t=eh(),qt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function qx(e){var t=Ze().memoizedState;return pE({ref:t,nextImpl:e}),function(){if((he&2)!==0)throw Error(j(440));return t.impl.apply(void 0,arguments)}}function Yx(e,t){return ih(4,2,e,t)}function Zx(e,t){return ih(4,4,e,t)}function Jx(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kx(e,t,n){n=n!=null?n.concat([e]):null,ih(4,4,Jx.bind(null,t,e),n)}function Bm(){}function Qx(e,t){var n=Ze();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Rm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function jx(e,t){var n=Ze();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Rm(t,i[1]))return i[0];if(i=e(),Xa){Ys(!0);try{e()}finally{Ys(!1)}}return n.memoizedState=[i,t],i}function zm(e,t,n){return n===void 0||(_s&1073741824)!==0&&(te&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Vy(),qt.lanes|=e,ua|=e,n)}function $x(e,t,n,i){return jn(n,t)?n:Zr.current!==null?(e=zm(e,n,i),jn(e,t)||(en=!0),e):(_s&42)===0||(_s&1073741824)!==0&&(te&261930)===0?(en=!0,e.memoizedState=n):(e=Vy(),qt.lanes|=e,ua|=e,t)}function ty(e,t,n,i,s){var a=fe.p;fe.p=a!==0&&8>a?a:8;var r=Ft.T,o={};Ft.T=o,Vm(e,!1,t,n);try{var l=s(),c=Ft.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=cE(l,i);fl(e,t,f,Qn(e))}else fl(e,t,i,Qn(e))}catch(p){fl(e,t,{then:function(){},status:"rejected",reason:p},Qn())}finally{fe.p=a,r!==null&&o.types!==null&&(r.types=o.types),Ft.T=r}}function mE(){}function Vp(e,t,n,i){if(e.tag!==5)throw Error(j(476));var s=ey(e).queue;ty(e,s,t,Pa,n===null?mE:function(){return ny(e),n(i)})}function ey(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Pa,baseState:Pa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:Pa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ny(e){var t=ey(e);t.next===null&&(t=e.alternate.memoizedState),fl(e,t.next.queue,{},Qn())}function Fm(){return _n(Rl)}function iy(){return Ze().memoizedState}function sy(){return Ze().memoizedState}function gE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Qn();e=ta(n);var i=ea(t,e,n);i!==null&&(zn(i,t,n),cl(i,t,n)),t={cache:Em()},e.payload=t;return}t=t.return}}function _E(e,t,n){var i=Qn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},sh(e)?ry(t,n):(n=ym(e,t,n,i),n!==null&&(zn(n,e,i),oy(n,t,i)))}function ay(e,t,n){var i=Qn();fl(e,t,n,i)}function fl(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(sh(e))ry(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,jn(o,r))return $u(e,t,s,0),be===null&&ju(),!1}catch{}if(n=ym(e,t,s,i),n!==null)return zn(n,e,i),oy(n,t,i),!0}return!1}function Vm(e,t,n,i){if(i={lane:2,revertLane:Jm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},sh(e)){if(t)throw Error(j(479))}else t=ym(e,n,i,2),t!==null&&zn(t,e,2)}function sh(e){var t=e.alternate;return e===qt||t!==null&&t===qt}function ry(e,t){Gr=Uu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function oy(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,qv(e,n)}}var Al={readContext:_n,use:nh,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge};Al.useEffectEvent=Ge;var ly={readContext:_n,use:nh,useCallback:function(e,t){return Dn().memoizedState=[e,t===void 0?null:t],e},useContext:_n,useEffect:W_,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,hu(4194308,4,Jx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hu(4194308,4,e,t)},useInsertionEffect:function(e,t){hu(4,2,e,t)},useMemo:function(e,t){var n=Dn();t=t===void 0?null:t;var i=e();if(Xa){Ys(!0);try{e()}finally{Ys(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Dn();if(n!==void 0){var s=n(t);if(Xa){Ys(!0);try{n(t)}finally{Ys(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=_E.bind(null,qt,e),[i.memoizedState,e]},useRef:function(e){var t=Dn();return e={current:e},t.memoizedState=e},useState:function(e){e=zp(e);var t=e.queue,n=ay.bind(null,qt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Bm,useDeferredValue:function(e,t){var n=Dn();return zm(n,e,t)},useTransition:function(){var e=zp(!1);return e=ty.bind(null,qt,e.queue,!0,!1),Dn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=qt,s=Dn();if(ae){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),be===null)throw Error(j(349));(te&127)!==0||Ox(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,W_(Bx.bind(null,i,a,e),[e]),i.flags|=2048,Jr(9,{destroy:void 0},Px.bind(null,i,a,n,t),null),n},useId:function(){var e=Dn(),t=be.identifierPrefix;if(ae){var n=Hi,i=Vi;n=(i&~(1<<32-Kn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Nu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=uE++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Fm,useFormState:G_,useActionState:G_,useOptimistic:function(e){var t=Dn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Vm.bind(null,qt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Im,useCacheRefresh:function(){return Dn().memoizedState=gE.bind(null,qt)},useEffectEvent:function(e){var t=Dn(),n={impl:e};return t.memoizedState=n,function(){if((he&2)!==0)throw Error(j(440));return n.impl.apply(void 0,arguments)}}},Hm={readContext:_n,use:nh,useCallback:Qx,useContext:_n,useEffect:Pm,useImperativeHandle:Kx,useInsertionEffect:Yx,useLayoutEffect:Zx,useMemo:jx,useReducer:uu,useRef:Wx,useState:function(){return uu(vs)},useDebugValue:Bm,useDeferredValue:function(e,t){var n=Ze();return $x(n,xe.memoizedState,e,t)},useTransition:function(){var e=uu(vs)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:Ix,useId:iy,useHostTransitionStatus:Fm,useFormState:k_,useActionState:k_,useOptimistic:function(e,t){var n=Ze();return Vx(n,xe,e,t)},useMemoCache:Im,useCacheRefresh:sy};Hm.useEffectEvent=qx;var cy={readContext:_n,use:nh,useCallback:Qx,useContext:_n,useEffect:Pm,useImperativeHandle:Kx,useInsertionEffect:Yx,useLayoutEffect:Zx,useMemo:jx,useReducer:Zd,useRef:Wx,useState:function(){return Zd(vs)},useDebugValue:Bm,useDeferredValue:function(e,t){var n=Ze();return xe===null?zm(n,e,t):$x(n,xe.memoizedState,e,t)},useTransition:function(){var e=Zd(vs)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:Ix,useId:iy,useHostTransitionStatus:Fm,useFormState:X_,useActionState:X_,useOptimistic:function(e,t){var n=Ze();return xe!==null?Vx(n,xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Im,useCacheRefresh:sy};cy.useEffectEvent=qx;function Jd(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Qn(),s=ta(i);s.payload=t,n!=null&&(s.callback=n),t=ea(e,s,i),t!==null&&(zn(t,e,i),cl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Qn(),s=ta(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ea(e,s,i),t!==null&&(zn(t,e,i),cl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qn(),i=ta(n);i.tag=2,t!=null&&(i.callback=t),t=ea(e,i,n),t!==null&&(zn(t,e,n),cl(t,e,n))}};function q_(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Sl(n,i)||!Sl(s,a):!0}function Y_(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Hp.enqueueReplaceState(t,t.state,null)}function Wa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Le({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function uy(e){Eu(e)}function hy(e){console.error(e)}function fy(e){Eu(e)}function Lu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Z_(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Gp(e,t,n){return n=ta(n),n.tag=3,n.payload={element:null},n.callback=function(){Lu(e,t)},n}function dy(e){return e=ta(e),e.tag=3,e}function py(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){Z_(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Z_(t,n,i),typeof s!="function"&&(na===null?na=new Set([this]):na.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function vE(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&io(t,n,s,!0),n=$n.current,n!==null){switch(n.tag){case 31:case 13:return _i===null?zu():n.alternate===null&&ke===0&&(ke=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Cu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),rp(e,i,s)),!1;case 22:return n.flags|=65536,i===Cu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),rp(e,i,s)),!1}throw Error(j(435,n.tag))}return rp(e,i,s),zu(),!1}if(ae)return t=$n.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Rp&&(e=Error(j(422),{cause:i}),bl(mi(e,n)))):(i!==Rp&&(t=Error(j(423),{cause:i}),bl(mi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=mi(i,n),s=Gp(e.stateNode,i,s),Yd(e,s),ke!==4&&(ke=2)),!1;var a=Error(j(520),{cause:i});if(a=mi(a,n),ml===null?ml=[a]:ml.push(a),ke!==4&&(ke=2),t===null)return!0;i=mi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Gp(n.stateNode,i,e),Yd(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(na===null||!na.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=dy(s),py(s,e,n,i),Yd(n,s),!1}n=n.return}while(n!==null);return!1}var Gm=Error(j(461)),en=!1;function pn(e,t,n,i){t.child=e===null?Cx(t,null,n,i):ka(t,e.child,n,i)}function J_(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ga(t),i=Dm(e,t,n,r,a,s),o=Um(),e!==null&&!en?(Nm(e,t,s),xs(e,t,s)):(ae&&o&&Mm(t),t.flags|=1,pn(e,t,i,s),t.child)}function K_(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Sm(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,my(e,t,a,i,s)):(e=lu(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!km(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Sl,n(r,i)&&e.ref===t.ref)return xs(e,t,s)}return t.flags|=1,e=ds(a,i),e.ref=t.ref,e.return=t,t.child=e}function my(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Sl(a,i)&&e.ref===t.ref)if(en=!1,t.pendingProps=i=a,km(e,s))(e.flags&131072)!==0&&(en=!0);else return t.lanes=e.lanes,xs(e,t,s)}return kp(e,t,n,i,s)}function gy(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return Q_(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&cu(t,a!==null?a.cachePool:null),a!==null?F_(t,a):Pp(),Ux(t);else return i=t.lanes=536870912,Q_(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(cu(t,a.cachePool),F_(t,a),Ws(t),t.memoizedState=null):(e!==null&&cu(t,null),Pp(),Ws(t));return pn(e,t,s,n),t.child}function il(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Q_(e,t,n,i,s){var a=Tm();return a=a===null?null:{parent:tn._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&cu(t,null),Pp(),Ux(t),e!==null&&io(e,t,i,!0),t.childLanes=s,null}function fu(e,t){return t=Iu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function j_(e,t,n){return ka(t,e.child,null,n),e=fu(t,t.pendingProps),e.flags|=2,Wn(t),t.memoizedState=null,e}function xE(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ae){if(i.mode==="hidden")return e=fu(t,i),t.lanes=536870912,il(null,e);if(Bp(t),(e=Ne)?(e=lS(e,gi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oa!==null?{id:Vi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},n=Sx(e),n.return=t,t.child=n,gn=t,Ne=null)):e=null,e===null)throw la(t);return t.lanes=536870912,null}return fu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(Bp(t),s)if(t.flags&256)t.flags&=-257,t=j_(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(j(558));else if(en||io(e,t,n,!1),s=(n&e.childLanes)!==0,en||s){if(i=be,i!==null&&(r=Yv(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Ja(e,r),zn(i,e,r),Gm;zu(),t=j_(e,t,n)}else e=a.treeContext,Ne=vi(r.nextSibling),gn=t,ae=!0,$s=null,gi=!1,e!==null&&bx(t,e),t=fu(t,i),t.flags|=4096;return t}return e=ds(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function du(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(j(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function kp(e,t,n,i,s){return Ga(t),n=Dm(e,t,n,i,void 0,s),i=Um(),e!==null&&!en?(Nm(e,t,s),xs(e,t,s)):(ae&&i&&Mm(t),t.flags|=1,pn(e,t,n,s),t.child)}function $_(e,t,n,i,s,a){return Ga(t),t.updateQueue=null,n=Lx(t,i,n,s),Nx(e),i=Um(),e!==null&&!en?(Nm(e,t,a),xs(e,t,a)):(ae&&i&&Mm(t),t.flags|=1,pn(e,t,n,a),t.child)}function tv(e,t,n,i,s){if(Ga(t),t.stateNode===null){var a=Lr,r=n.contextType;typeof r=="object"&&r!==null&&(a=_n(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Hp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},wm(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?_n(r):Lr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Jd(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Hp.enqueueReplaceState(a,a.state,null),hl(t,i,a,s),ul(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=Wa(n,o);a.props=l;var c=a.context,f=n.contextType;r=Lr,typeof f=="object"&&f!==null&&(r=_n(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&Y_(t,a,i,r),Gs=!1;var u=t.memoizedState;a.state=u,hl(t,i,a,s),ul(),c=t.memoizedState,o||u!==c||Gs?(typeof p=="function"&&(Jd(t,n,p,i),c=t.memoizedState),(l=Gs||q_(t,n,l,i,u,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Ip(e,t),r=t.memoizedProps,f=Wa(n,r),a.props=f,p=t.pendingProps,u=a.context,c=n.contextType,l=Lr,typeof c=="object"&&c!==null&&(l=_n(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&Y_(t,a,i,l),Gs=!1,u=t.memoizedState,a.state=u,hl(t,i,a,s),ul();var d=t.memoizedState;r!==p||u!==d||Gs||e!==null&&e.dependencies!==null&&wu(e.dependencies)?(typeof o=="function"&&(Jd(t,n,o,i),d=t.memoizedState),(f=Gs||q_(t,n,f,i,u,d,l)||e!==null&&e.dependencies!==null&&wu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,du(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=ka(t,e.child,null,s),t.child=ka(t,null,n,s)):pn(e,t,n,s),t.memoizedState=a.state,e=t.child):e=xs(e,t,s),e}function ev(e,t,n,i){return Ha(),t.flags|=256,pn(e,t,n,i),t.child}var Kd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qd(e){return{baseLanes:e,cachePool:Tx()}}function jd(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Yn),e}function _y(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ae){if(s?Xs(t):Ws(t),(e=Ne)?(e=lS(e,gi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oa!==null?{id:Vi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},n=Sx(e),n.return=t,t.child=n,gn=t,Ne=null)):e=null,e===null)throw la(t);return im(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(Ws(t),s=t.mode,o=Iu({mode:"hidden",children:o},s),i=Ba(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Qd(n),i.childLanes=jd(e,r,n),t.memoizedState=Kd,il(null,i)):(Xs(t),Xp(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(Xs(t),t.flags&=-257,t=$d(e,t,n)):t.memoizedState!==null?(Ws(t),t.child=e.child,t.flags|=128,t=null):(Ws(t),o=i.fallback,s=t.mode,i=Iu({mode:"visible",children:i.children},s),o=Ba(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,ka(t,e.child,null,n),i=t.child,i.memoizedState=Qd(n),i.childLanes=jd(e,r,n),t.memoizedState=Kd,t=il(null,i));else if(Xs(t),im(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(j(419)),i.stack="",i.digest=r,bl({value:i,source:null,stack:null}),t=$d(e,t,n)}else if(en||io(e,t,n,!1),r=(n&e.childLanes)!==0,en||r){if(r=be,r!==null&&(i=Yv(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Ja(e,i),zn(r,e,i),Gm;nm(o)||zu(),t=$d(e,t,n)}else nm(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ne=vi(o.nextSibling),gn=t,ae=!0,$s=null,gi=!1,e!==null&&bx(t,e),t=Xp(t,i.children),t.flags|=4096);return t}return s?(Ws(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=ds(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=ds(c,o):(o=Ba(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,il(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Qd(n):(s=o.cachePool,s!==null?(l=tn._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=Tx(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=jd(e,r,n),t.memoizedState=Kd,il(e.child,i)):(Xs(t),n=e.child,e=n.sibling,n=ds(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Xp(e,t){return t=Iu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Iu(e,t){return e=qn(22,e,null,t),e.lanes=0,e}function $d(e,t,n){return ka(t,e.child,null,n),e=Xp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Up(e.return,t,n)}function tp(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function vy(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=Ye.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Ae(Ye,r),pn(e,t,i,n),i=ae?Ml:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nv(e,n,t);else if(e.tag===19)nv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Du(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),tp(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Du(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}tp(t,!0,n,null,a,i);break;case"together":tp(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function xs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ua|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(io(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=ds(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ds(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function km(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&wu(e)))}function yE(e,t,n){switch(t.tag){case 3:yu(t,t.stateNode.containerInfo),ks(t,tn,e.memoizedState.cache),Ha();break;case 27:case 5:vp(t);break;case 4:yu(t,t.stateNode.containerInfo);break;case 10:ks(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Bp(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Xs(t),t.flags|=128,null):(n&t.child.childLanes)!==0?_y(e,t,n):(Xs(t),e=xs(e,t,n),e!==null?e.sibling:null);Xs(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(io(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return vy(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ae(Ye,Ye.current),i)break;return null;case 22:return t.lanes=0,gy(e,t,n,t.pendingProps);case 24:ks(t,tn,e.memoizedState.cache)}return xs(e,t,n)}function xy(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)en=!0;else{if(!km(e,n)&&(t.flags&128)===0)return en=!1,yE(e,t,n);en=(e.flags&131072)!==0}else en=!1,ae&&(t.flags&1048576)!==0&&Mx(t,Ml,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Ia(t.elementType),t.type=e,typeof e=="function")Sm(e)?(i=Wa(e,i),t.tag=1,t=tv(null,t,e,i,n)):(t.tag=0,t=kp(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===om){t.tag=11,t=J_(null,t,e,i,n);break t}else if(s===lm){t.tag=14,t=K_(null,t,e,i,n);break t}}throw t=gp(e)||e,Error(j(306,t,""))}}return t;case 0:return kp(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Wa(i,t.pendingProps),tv(e,t,i,s,n);case 3:t:{if(yu(t,t.stateNode.containerInfo),e===null)throw Error(j(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Ip(e,t),hl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,ks(t,tn,i),i!==a.cache&&Np(t,[tn],n,!0),ul(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=ev(e,t,i,n);break t}else if(i!==s){s=mi(Error(j(424)),t),bl(s),t=ev(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ne=vi(e.firstChild),gn=t,ae=!0,$s=null,gi=!0,n=Cx(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ha(),i===s){t=xs(e,t,n);break t}pn(e,t,i,n)}t=t.child}return t;case 26:return du(e,t),e===null?(n=Ev(t.type,null,t.pendingProps,null))?t.memoizedState=n:ae||(n=t.type,e=t.pendingProps,i=Gu(js.current).createElement(n),i[mn]=t,i[Fn]=e,vn(i,n,e),cn(i),t.stateNode=i):t.memoizedState=Ev(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return vp(t),e===null&&ae&&(i=t.stateNode=cS(t.type,t.pendingProps,js.current),gn=t,gi=!0,s=Ne,fa(t.type)?(sm=s,Ne=vi(i.firstChild)):Ne=s),pn(e,t,t.pendingProps.children,n),du(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ae&&((s=i=Ne)&&(i=ZE(i,t.type,t.pendingProps,gi),i!==null?(t.stateNode=i,gn=t,Ne=vi(i.firstChild),gi=!1,s=!0):s=!1),s||la(t)),vp(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,tm(s,a)?i=null:r!==null&&tm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Dm(e,t,hE,null,null,n),Rl._currentValue=s),du(e,t),pn(e,t,i,n),t.child;case 6:return e===null&&ae&&((e=n=Ne)&&(n=JE(n,t.pendingProps,gi),n!==null?(t.stateNode=n,gn=t,Ne=null,e=!0):e=!1),e||la(t)),null;case 13:return _y(e,t,n);case 4:return yu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ka(t,null,i,n):pn(e,t,i,n),t.child;case 11:return J_(e,t,t.type,t.pendingProps,n);case 7:return pn(e,t,t.pendingProps,n),t.child;case 8:return pn(e,t,t.pendingProps.children,n),t.child;case 12:return pn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ks(t,t.type,i.value),pn(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Ga(t),s=_n(s),i=i(s),t.flags|=1,pn(e,t,i,n),t.child;case 14:return K_(e,t,t.type,t.pendingProps,n);case 15:return my(e,t,t.type,t.pendingProps,n);case 19:return vy(e,t,n);case 31:return xE(e,t,n);case 22:return gy(e,t,n,t.pendingProps);case 24:return Ga(t),i=_n(tn),e===null?(s=Tm(),s===null&&(s=be,a=Em(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},wm(t),ks(t,tn,s)):((e.lanes&n)!==0&&(Ip(e,t),hl(t,null,null,n),ul()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),ks(t,tn,i)):(i=a.cache,ks(t,tn,i),i!==s.cache&&Np(t,[tn],n,!0))),pn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(j(156,t.tag))}function ss(e){e.flags|=4}function ep(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(ky())e.flags|=8192;else throw Fa=Cu,Am}else e.flags&=-16777217}function iv(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!fS(t))if(ky())e.flags|=8192;else throw Fa=Cu,Am}function Qc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Xv():536870912,e.lanes|=t,Kr|=t)}function Ko(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function SE(e,t,n){var i=t.pendingProps;switch(bm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ue(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ps(tn),Xr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Sr(t)?ss(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,qd())),Ue(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(ss(t),a!==null?(Ue(t),iv(t,a)):(Ue(t),ep(t,s,null,i,n))):a?a!==e.memoizedState?(ss(t),Ue(t),iv(t,a)):(Ue(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ss(t),Ue(t),ep(t,s,e,i,n)),null;case 27:if(Su(t),n=js.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ss(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return Ue(t),null}e=ki.current,Sr(t)?N_(t,e):(e=cS(s,i,n),t.stateNode=e,ss(t))}return Ue(t),null;case 5:if(Su(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ss(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return Ue(t),null}if(a=ki.current,Sr(t))N_(t,a);else{var r=Gu(js.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[mn]=t,a[Fn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(vn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&ss(t)}}return Ue(t),ep(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ss(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(j(166));if(e=js.current,Sr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=gn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[mn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||aS(e.nodeValue,n)),e||la(t,!0)}else e=Gu(e).createTextNode(i),e[mn]=t,t.stateNode=e}return Ue(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Sr(t),n!==null){if(e===null){if(!i)throw Error(j(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(557));e[mn]=t}else Ha(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),e=!1}else n=qd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Wn(t),t):(Wn(t),null);if((t.flags&128)!==0)throw Error(j(558))}return Ue(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Sr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(j(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[mn]=t}else Ha(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),s=!1}else s=qd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Wn(t),t):(Wn(t),null)}return Wn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Qc(t,t.updateQueue),Ue(t),null);case 4:return Xr(),e===null&&Km(t.stateNode.containerInfo),Ue(t),null;case 10:return ps(t.type),Ue(t),null;case 19:if(un(Ye),i=t.memoizedState,i===null)return Ue(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Ko(i,!1);else{if(ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Du(e),a!==null){for(t.flags|=128,Ko(i,!1),e=a.updateQueue,t.updateQueue=e,Qc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yx(n,e),n=n.sibling;return Ae(Ye,Ye.current&1|2),ae&&ls(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Zn()>Pu&&(t.flags|=128,s=!0,Ko(i,!1),t.lanes=4194304)}else{if(!s)if(e=Du(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Qc(t,e),Ko(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ae)return Ue(t),null}else 2*Zn()-i.renderingStartTime>Pu&&n!==536870912&&(t.flags|=128,s=!0,Ko(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Zn(),e.sibling=null,n=Ye.current,Ae(Ye,s?n&1|2:n&1),ae&&ls(t,i.treeForkCount),e):(Ue(t),null);case 22:case 23:return Wn(t),Cm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),n=t.updateQueue,n!==null&&Qc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&un(za),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ps(tn),Ue(t),null;case 25:return null;case 30:return null}throw Error(j(156,t.tag))}function ME(e,t){switch(bm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ps(tn),Xr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Su(t),null;case 31:if(t.memoizedState!==null){if(Wn(t),t.alternate===null)throw Error(j(340));Ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Wn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return un(Ye),null;case 4:return Xr(),null;case 10:return ps(t.type),null;case 22:case 23:return Wn(t),Cm(),e!==null&&un(za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ps(tn),null;case 25:return null;default:return null}}function yy(e,t){switch(bm(t),t.tag){case 3:ps(tn),Xr();break;case 26:case 27:case 5:Su(t);break;case 4:Xr();break;case 31:t.memoizedState!==null&&Wn(t);break;case 13:Wn(t);break;case 19:un(Ye);break;case 10:ps(t.type);break;case 22:case 23:Wn(t),Cm(),e!==null&&un(za);break;case 24:ps(tn)}}function Vl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){me(t,t.return,o)}}function ca(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){me(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){me(t,t.return,f)}}function Sy(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Dx(t,n)}catch(i){me(e,e.return,i)}}}function My(e,t,n){n.props=Wa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){me(e,t,i)}}function dl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){me(e,t,s)}}function Gi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){me(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){me(e,t,s)}else n.current=null}function by(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){me(e,e.return,s)}}function np(e,t,n){try{var i=e.stateNode;GE(i,e.type,n,t),i[Fn]=t}catch(s){me(e,e.return,s)}}function Ey(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&fa(e.type)||e.tag===4}function ip(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ey(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&fa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wp(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hs));else if(i!==4&&(i===27&&fa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Wp(e,t,n),e=e.sibling;e!==null;)Wp(e,t,n),e=e.sibling}function Ou(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&fa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ou(e,t,n),e=e.sibling;e!==null;)Ou(e,t,n),e=e.sibling}function Ty(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);vn(t,i,n),t[mn]=e,t[Fn]=n}catch(a){me(e,e.return,a)}}var cs=!1,$e=!1,sp=!1,sv=typeof WeakSet=="function"?WeakSet:Set,ln=null;function bE(e,t){if(e=e.containerInfo,jp=qu,e=fx(e),vm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,f=0,p=e,u=null;e:for(;;){for(var d;p!==n||s!==0&&p.nodeType!==3||(o=r+s),p!==a||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(d=p.firstChild)!==null;)u=p,p=d;for(;;){if(p===e)break e;if(u===n&&++c===s&&(o=r),u===a&&++f===i&&(l=r),(d=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=d}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($p={focusedElem:e,selectionRange:n},qu=!1,ln=t;ln!==null;)if(t=ln,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ln=e;else for(;ln!==null;){switch(t=ln,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var v=Wa(n.type,s);e=i.getSnapshotBeforeUpdate(v,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(M){me(n,n.return,M)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)em(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":em(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(j(163))}if(e=t.sibling,e!==null){e.return=t.return,ln=e;break}ln=t.return}}function Ay(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:rs(e,n),i&4&&Vl(5,n);break;case 1:if(rs(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){me(n,n.return,r)}else{var s=Wa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){me(n,n.return,r)}}i&64&&Sy(n),i&512&&dl(n,n.return);break;case 3:if(rs(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Dx(e,t)}catch(r){me(n,n.return,r)}}break;case 27:t===null&&i&4&&Ty(n);case 26:case 5:rs(e,n),t===null&&i&4&&by(n),i&512&&dl(n,n.return);break;case 12:rs(e,n);break;case 31:rs(e,n),i&4&&Ry(e,n);break;case 13:rs(e,n),i&4&&Dy(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=NE.bind(null,n),KE(e,n))));break;case 22:if(i=n.memoizedState!==null||cs,!i){t=t!==null&&t.memoizedState!==null||$e,s=cs;var a=$e;cs=i,($e=t)&&!a?os(e,n,(n.subtreeFlags&8772)!==0):rs(e,n),cs=s,$e=a}break;case 30:break;default:rs(e,n)}}function wy(e){var t=e.alternate;t!==null&&(e.alternate=null,wy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&fm(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,Pn=!1;function as(e,t,n){for(n=n.child;n!==null;)Cy(e,t,n),n=n.sibling}function Cy(e,t,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(Ll,n)}catch{}switch(n.tag){case 26:$e||Gi(n,t),as(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:$e||Gi(n,t);var i=Be,s=Pn;fa(n.type)&&(Be=n.stateNode,Pn=!1),as(e,t,n),_l(n.stateNode),Be=i,Pn=s;break;case 5:$e||Gi(n,t);case 6:if(i=Be,s=Pn,Be=null,as(e,t,n),Be=i,Pn=s,Be!==null)if(Pn)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(n.stateNode)}catch(a){me(n,t,a)}else try{Be.removeChild(n.stateNode)}catch(a){me(n,t,a)}break;case 18:Be!==null&&(Pn?(e=Be,xv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),to(e)):xv(Be,n.stateNode));break;case 4:i=Be,s=Pn,Be=n.stateNode.containerInfo,Pn=!0,as(e,t,n),Be=i,Pn=s;break;case 0:case 11:case 14:case 15:ca(2,n,t),$e||ca(4,n,t),as(e,t,n);break;case 1:$e||(Gi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&My(n,t,i)),as(e,t,n);break;case 21:as(e,t,n);break;case 22:$e=(i=$e)||n.memoizedState!==null,as(e,t,n),$e=i;break;default:as(e,t,n)}}function Ry(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{to(e)}catch(n){me(t,t.return,n)}}}function Dy(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{to(e)}catch(n){me(t,t.return,n)}}function EE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sv),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sv),t;default:throw Error(j(435,e.tag))}}function jc(e,t){var n=EE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=LE.bind(null,e,i);i.then(s,s)}})}function In(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(fa(o.type)){Be=o.stateNode,Pn=!1;break t}break;case 5:Be=o.stateNode,Pn=!1;break t;case 3:case 4:Be=o.stateNode.containerInfo,Pn=!0;break t}o=o.return}if(Be===null)throw Error(j(160));Cy(a,r,s),Be=null,Pn=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Uy(t,e),t=t.sibling}var Ai=null;function Uy(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:In(t,e),On(e),i&4&&(ca(3,e,e.return),Vl(3,e),ca(5,e,e.return));break;case 1:In(t,e),On(e),i&512&&($e||n===null||Gi(n,n.return)),i&64&&cs&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=Ai;if(In(t,e),On(e),i&512&&($e||n===null||Gi(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[Pl]||a[mn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),vn(a,i,n),a[mn]=e,cn(a),i=a;break t;case"link":var r=Av("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),vn(a,i,n),s.head.appendChild(a);break;case"meta":if(r=Av("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),vn(a,i,n),s.head.appendChild(a);break;default:throw Error(j(468,i))}a[mn]=e,cn(a),i=a}e.stateNode=i}else wv(s,e.type,e.stateNode);else e.stateNode=Tv(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?wv(s,e.type,e.stateNode):Tv(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&np(e,e.memoizedProps,n.memoizedProps)}break;case 27:In(t,e),On(e),i&512&&($e||n===null||Gi(n,n.return)),n!==null&&i&4&&np(e,e.memoizedProps,n.memoizedProps);break;case 5:if(In(t,e),On(e),i&512&&($e||n===null||Gi(n,n.return)),e.flags&32){s=e.stateNode;try{qr(s,"")}catch(v){me(e,e.return,v)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,np(e,s,n!==null?n.memoizedProps:s)),i&1024&&(sp=!0);break;case 6:if(In(t,e),On(e),i&4){if(e.stateNode===null)throw Error(j(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(v){me(e,e.return,v)}}break;case 3:if(gu=null,s=Ai,Ai=ku(t.containerInfo),In(t,e),Ai=s,On(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{to(t.containerInfo)}catch(v){me(e,e.return,v)}sp&&(sp=!1,Ny(e));break;case 4:i=Ai,Ai=ku(e.stateNode.containerInfo),In(t,e),On(e),Ai=i;break;case 12:In(t,e),On(e);break;case 31:In(t,e),On(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,jc(e,i)));break;case 13:In(t,e),On(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ah=Zn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,jc(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=cs,f=$e;if(cs=c||s,$e=f||l,In(t,e),$e=f,cs=c,On(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||cs||$e||Oa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(v){me(l,l.return,v)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(v){me(l,l.return,v)}}}else if(t.tag===18){if(n===null){l=t;try{var d=l.stateNode;s?yv(d,!0):yv(l.stateNode,!1)}catch(v){me(l,l.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,jc(e,n))));break;case 19:In(t,e),On(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,jc(e,i)));break;case 30:break;case 21:break;default:In(t,e),On(e)}}function On(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Ey(i)){n=i;break}i=i.return}if(n==null)throw Error(j(160));switch(n.tag){case 27:var s=n.stateNode,a=ip(e);Ou(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(qr(r,""),n.flags&=-33);var o=ip(e);Ou(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=ip(e);Wp(e,c,l);break;default:throw Error(j(161))}}catch(f){me(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ny(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ny(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function rs(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ay(e,t.alternate,t),t=t.sibling}function Oa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ca(4,t,t.return),Oa(t);break;case 1:Gi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&My(t,t.return,n),Oa(t);break;case 27:_l(t.stateNode);case 26:case 5:Gi(t,t.return),Oa(t);break;case 22:t.memoizedState===null&&Oa(t);break;case 30:Oa(t);break;default:Oa(t)}e=e.sibling}}function os(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:os(s,a,n),Vl(4,a);break;case 1:if(os(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){me(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)Rx(l[s],o)}catch(c){me(i,i.return,c)}}n&&r&64&&Sy(a),dl(a,a.return);break;case 27:Ty(a);case 26:case 5:os(s,a,n),n&&i===null&&r&4&&by(a),dl(a,a.return);break;case 12:os(s,a,n);break;case 31:os(s,a,n),n&&r&4&&Ry(s,a);break;case 13:os(s,a,n),n&&r&4&&Dy(s,a);break;case 22:a.memoizedState===null&&os(s,a,n),dl(a,a.return);break;case 30:break;default:os(s,a,n)}t=t.sibling}}function Xm(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&zl(n))}function Wm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zl(e))}function Ti(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ly(e,t,n,i),t=t.sibling}function Ly(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Ti(e,t,n,i),s&2048&&Vl(9,t);break;case 1:Ti(e,t,n,i);break;case 3:Ti(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zl(e)));break;case 12:if(s&2048){Ti(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){me(t,t.return,l)}}else Ti(e,t,n,i);break;case 31:Ti(e,t,n,i);break;case 13:Ti(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?Ti(e,t,n,i):pl(e,t):a._visibility&2?Ti(e,t,n,i):(a._visibility|=2,br(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Xm(r,t);break;case 24:Ti(e,t,n,i),s&2048&&Wm(t.alternate,t);break;default:Ti(e,t,n,i)}}function br(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:br(a,r,o,l,s),Vl(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?br(a,r,o,l,s):pl(a,r):(f._visibility|=2,br(a,r,o,l,s)),s&&c&2048&&Xm(r.alternate,r);break;case 24:br(a,r,o,l,s),s&&c&2048&&Wm(r.alternate,r);break;default:br(a,r,o,l,s)}t=t.sibling}}function pl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:pl(n,i),s&2048&&Xm(i.alternate,i);break;case 24:pl(n,i),s&2048&&Wm(i.alternate,i);break;default:pl(n,i)}t=t.sibling}}var sl=8192;function Mr(e,t,n){if(e.subtreeFlags&sl)for(e=e.child;e!==null;)Iy(e,t,n),e=e.sibling}function Iy(e,t,n){switch(e.tag){case 26:Mr(e,t,n),e.flags&sl&&e.memoizedState!==null&&lT(n,Ai,e.memoizedState,e.memoizedProps);break;case 5:Mr(e,t,n);break;case 3:case 4:var i=Ai;Ai=ku(e.stateNode.containerInfo),Mr(e,t,n),Ai=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=sl,sl=16777216,Mr(e,t,n),sl=i):Mr(e,t,n));break;default:Mr(e,t,n)}}function Oy(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Qo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ln=i,By(i,e)}Oy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Py(e),e=e.sibling}function Py(e){switch(e.tag){case 0:case 11:case 15:Qo(e),e.flags&2048&&ca(9,e,e.return);break;case 3:Qo(e);break;case 12:Qo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,pu(e)):Qo(e);break;default:Qo(e)}}function pu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ln=i,By(i,e)}Oy(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ca(8,t,t.return),pu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,pu(t));break;default:pu(t)}e=e.sibling}}function By(e,t){for(;ln!==null;){var n=ln;switch(n.tag){case 0:case 11:case 15:ca(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:zl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ln=i;else t:for(n=e;ln!==null;){i=ln;var s=i.sibling,a=i.return;if(wy(i),i===n){ln=null;break t}if(s!==null){s.return=a,ln=s;break t}ln=a}}}var TE={getCacheForType:function(e){var t=_n(tn),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return _n(tn).controller.signal}},AE=typeof WeakMap=="function"?WeakMap:Map,he=0,be=null,$t=null,te=0,pe=0,Xn=null,Js=!1,ao=!1,qm=!1,ys=0,ke=0,ua=0,Va=0,Ym=0,Yn=0,Kr=0,ml=null,Bn=null,qp=!1,ah=0,zy=0,Pu=1/0,Bu=null,na=null,sn=0,ia=null,Qr=null,ms=0,Yp=0,Zp=null,Fy=null,gl=0,Jp=null;function Qn(){return(he&2)!==0&&te!==0?te&-te:Ft.T!==null?Jm():Zv()}function Vy(){if(Yn===0)if((te&536870912)===0||ae){var e=Gc;Gc<<=1,(Gc&3932160)===0&&(Gc=262144),Yn=e}else Yn=536870912;return e=$n.current,e!==null&&(e.flags|=32),Yn}function zn(e,t,n){(e===be&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(jr(e,0),Ks(e,te,Yn,!1)),Ol(e,n),((he&2)===0||e!==be)&&(e===be&&((he&2)===0&&(Va|=n),ke===4&&Ks(e,te,Yn,!1)),Wi(e))}function Hy(e,t,n){if((he&6)!==0)throw Error(j(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Il(e,t),s=i?RE(e,t):ap(e,t,!0),a=i;do{if(s===0){ao&&!i&&Ks(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!wE(n)){s=ap(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=ml;var l=o.current.memoizedState.isDehydrated;if(l&&(jr(o,r).flags|=256),r=ap(o,r,!1),r!==2){if(qm&&!l){o.errorRecoveryDisabledLanes|=a,Va|=a,s=4;break t}a=Bn,Bn=s,a!==null&&(Bn===null?Bn=a:Bn.push.apply(Bn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){jr(e,0),Ks(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(j(345));case 4:if((t&4194048)!==t)break;case 6:Ks(i,t,Yn,!Js);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(j(329))}if((t&62914560)===t&&(s=ah+300-Zn(),10<s)){if(Ks(i,t,Yn,!Js),Zu(i,0,!0)!==0)break t;ms=t,i.timeoutHandle=oS(av.bind(null,i,n,Bn,Bu,qp,t,Yn,Va,Kr,Js,a,"Throttled",-0,0),s);break t}av(i,n,Bn,Bu,qp,t,Yn,Va,Kr,Js,a,null,-0,0)}}break}while(!0);Wi(e)}function av(e,t,n,i,s,a,r,o,l,c,f,p,u,d){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:hs},Iy(t,a,p);var v=(a&62914560)===a?ah-Zn():(a&4194048)===a?zy-Zn():0;if(v=cT(p,v),v!==null){ms=a,e.cancelPendingCommit=v(ov.bind(null,e,t,a,n,i,s,r,o,l,f,p,null,u,d)),Ks(e,a,r,!c);return}}ov(e,t,a,n,i,s,r,o,l)}function wE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!jn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ks(e,t,n,i){t&=~Ym,t&=~Va,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Kn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&Wv(e,n,t)}function rh(){return(he&6)===0?(Hl(0,!1),!1):!0}function Zm(){if($t!==null){if(pe===0)var e=$t.return;else e=$t,fs=Ka=null,Lm(e),Hr=null,El=0,e=$t;for(;e!==null;)yy(e.alternate,e),e=e.return;$t=null}}function jr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,WE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ms=0,Zm(),be=e,$t=n=ds(e.current,null),te=t,pe=0,Xn=null,Js=!1,ao=Il(e,t),qm=!1,Kr=Yn=Ym=Va=ua=ke=0,Bn=ml=null,qp=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Kn(i),a=1<<s;t|=e[s],i&=~a}return ys=t,ju(),n}function Gy(e,t){qt=null,Ft.H=Al,t===so||t===th?(t=B_(),pe=3):t===Am?(t=B_(),pe=4):pe=t===Gm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Xn=t,$t===null&&(ke=1,Lu(e,mi(t,e.current)))}function ky(){var e=$n.current;return e===null?!0:(te&4194048)===te?_i===null:(te&62914560)===te||(te&536870912)!==0?e===_i:!1}function Xy(){var e=Ft.H;return Ft.H=Al,e===null?Al:e}function Wy(){var e=Ft.A;return Ft.A=TE,e}function zu(){ke=4,Js||(te&4194048)!==te&&$n.current!==null||(ao=!0),(ua&134217727)===0&&(Va&134217727)===0||be===null||Ks(be,te,Yn,!1)}function ap(e,t,n){var i=he;he|=2;var s=Xy(),a=Wy();(be!==e||te!==t)&&(Bu=null,jr(e,t)),t=!1;var r=ke;t:do try{if(pe!==0&&$t!==null){var o=$t,l=Xn;switch(pe){case 8:Zm(),r=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(t=!0);var c=pe;if(pe=0,Xn=null,Pr(e,o,l,c),n&&ao){r=0;break t}break;default:c=pe,pe=0,Xn=null,Pr(e,o,l,c)}}CE(),r=ke;break}catch(f){Gy(e,f)}while(!0);return t&&e.shellSuspendCounter++,fs=Ka=null,he=i,Ft.H=s,Ft.A=a,$t===null&&(be=null,te=0,ju()),r}function CE(){for(;$t!==null;)qy($t)}function RE(e,t){var n=he;he|=2;var i=Xy(),s=Wy();be!==e||te!==t?(Bu=null,Pu=Zn()+500,jr(e,t)):ao=Il(e,t);t:do try{if(pe!==0&&$t!==null){t=$t;var a=Xn;e:switch(pe){case 1:pe=0,Xn=null,Pr(e,t,a,1);break;case 2:case 9:if(P_(a)){pe=0,Xn=null,rv(t);break}t=function(){pe!==2&&pe!==9||be!==e||(pe=7),Wi(e)},a.then(t,t);break t;case 3:pe=7;break t;case 4:pe=5;break t;case 7:P_(a)?(pe=0,Xn=null,rv(t)):(pe=0,Xn=null,Pr(e,t,a,7));break;case 5:var r=null;switch($t.tag){case 26:r=$t.memoizedState;case 5:case 27:var o=$t;if(r?fS(r):o.stateNode.complete){pe=0,Xn=null;var l=o.sibling;if(l!==null)$t=l;else{var c=o.return;c!==null?($t=c,oh(c)):$t=null}break e}}pe=0,Xn=null,Pr(e,t,a,5);break;case 6:pe=0,Xn=null,Pr(e,t,a,6);break;case 8:Zm(),ke=6;break t;default:throw Error(j(462))}}DE();break}catch(f){Gy(e,f)}while(!0);return fs=Ka=null,Ft.H=i,Ft.A=s,he=n,$t!==null?0:(be=null,te=0,ju(),ke)}function DE(){for(;$t!==null&&!$b();)qy($t)}function qy(e){var t=xy(e.alternate,e,ys);e.memoizedProps=e.pendingProps,t===null?oh(e):$t=t}function rv(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=$_(n,t,t.pendingProps,t.type,void 0,te);break;case 11:t=$_(n,t,t.pendingProps,t.type.render,t.ref,te);break;case 5:Lm(t);default:yy(n,t),t=$t=yx(t,ys),t=xy(n,t,ys)}e.memoizedProps=e.pendingProps,t===null?oh(e):$t=t}function Pr(e,t,n,i){fs=Ka=null,Lm(t),Hr=null,El=0;var s=t.return;try{if(vE(e,s,t,n,te)){ke=1,Lu(e,mi(n,e.current)),$t=null;return}}catch(a){if(s!==null)throw $t=s,a;ke=1,Lu(e,mi(n,e.current)),$t=null;return}t.flags&32768?(ae||i===1?e=!0:ao||(te&536870912)!==0?e=!1:(Js=e=!0,(i===2||i===9||i===3||i===6)&&(i=$n.current,i!==null&&i.tag===13&&(i.flags|=16384))),Yy(t,e)):oh(t)}function oh(e){var t=e;do{if((t.flags&32768)!==0){Yy(t,Js);return}e=t.return;var n=SE(t.alternate,t,ys);if(n!==null){$t=n;return}if(t=t.sibling,t!==null){$t=t;return}$t=t=e}while(t!==null);ke===0&&(ke=5)}function Yy(e,t){do{var n=ME(e.alternate,e);if(n!==null){n.flags&=32767,$t=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){$t=e;return}$t=e=n}while(e!==null);ke=6,$t=null}function ov(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do lh();while(sn!==0);if((he&6)!==0)throw Error(j(327));if(t!==null){if(t===e.current)throw Error(j(177));if(a=t.lanes|t.childLanes,a|=xm,c1(e,n,a,r,o,l),e===be&&($t=be=null,te=0),Qr=t,ia=e,ms=n,Yp=a,Zp=s,Fy=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,IE(Mu,function(){return jy(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ft.T,Ft.T=null,s=fe.p,fe.p=2,r=he,he|=4;try{bE(e,t,n)}finally{he=r,fe.p=s,Ft.T=i}}sn=1,Zy(),Jy(),Ky()}}function Zy(){if(sn===1){sn=0;var e=ia,t=Qr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Ft.T,Ft.T=null;var i=fe.p;fe.p=2;var s=he;he|=4;try{Uy(t,e);var a=$p,r=fx(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&hx(o.ownerDocument.documentElement,o)){if(l!==null&&vm(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),v=o.textContent.length,M=Math.min(l.start,v),_=l.end===void 0?M:Math.min(l.end,v);!d.extend&&M>_&&(r=_,_=M,M=r);var h=R_(o,M),m=R_(o,_);if(h&&m&&(d.rangeCount!==1||d.anchorNode!==h.node||d.anchorOffset!==h.offset||d.focusNode!==m.node||d.focusOffset!==m.offset)){var S=p.createRange();S.setStart(h.node,h.offset),d.removeAllRanges(),M>_?(d.addRange(S),d.extend(m.node,m.offset)):(S.setEnd(m.node,m.offset),d.addRange(S))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var g=p[o];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}qu=!!jp,$p=jp=null}finally{he=s,fe.p=i,Ft.T=n}}e.current=t,sn=2}}function Jy(){if(sn===2){sn=0;var e=ia,t=Qr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Ft.T,Ft.T=null;var i=fe.p;fe.p=2;var s=he;he|=4;try{Ay(e,t.alternate,t)}finally{he=s,fe.p=i,Ft.T=n}}sn=3}}function Ky(){if(sn===4||sn===3){sn=0,t1();var e=ia,t=Qr,n=ms,i=Fy;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?sn=5:(sn=0,Qr=ia=null,Qy(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(na=null),hm(n),t=t.stateNode,Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(Ll,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Ft.T,s=fe.p,fe.p=2,Ft.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{Ft.T=t,fe.p=s}}(ms&3)!==0&&lh(),Wi(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Jp?gl++:(gl=0,Jp=e):gl=0,Hl(0,!1)}}function Qy(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,zl(t)))}function lh(){return Zy(),Jy(),Ky(),jy()}function jy(){if(sn!==5)return!1;var e=ia,t=Yp;Yp=0;var n=hm(ms),i=Ft.T,s=fe.p;try{fe.p=32>n?32:n,Ft.T=null,n=Zp,Zp=null;var a=ia,r=ms;if(sn=0,Qr=ia=null,ms=0,(he&6)!==0)throw Error(j(331));var o=he;if(he|=4,Py(a.current),Ly(a,a.current,r,n),he=o,Hl(0,!1),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(Ll,a)}catch{}return!0}finally{fe.p=s,Ft.T=i,Qy(e,t)}}function lv(e,t,n){t=mi(n,t),t=Gp(e.stateNode,t,2),e=ea(e,t,2),e!==null&&(Ol(e,2),Wi(e))}function me(e,t,n){if(e.tag===3)lv(e,e,n);else for(;t!==null;){if(t.tag===3){lv(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(na===null||!na.has(i))){e=mi(n,e),n=dy(2),i=ea(t,n,2),i!==null&&(py(n,i,t,e),Ol(i,2),Wi(i));break}}t=t.return}}function rp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new AE;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(qm=!0,s.add(n),e=UE.bind(null,e,t,n),t.then(e,e))}function UE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,be===e&&(te&n)===n&&(ke===4||ke===3&&(te&62914560)===te&&300>Zn()-ah?(he&2)===0&&jr(e,0):Ym|=n,Kr===te&&(Kr=0)),Wi(e)}function $y(e,t){t===0&&(t=Xv()),e=Ja(e,t),e!==null&&(Ol(e,t),Wi(e))}function NE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$y(e,n)}function LE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(j(314))}i!==null&&i.delete(t),$y(e,n)}function IE(e,t){return cm(e,t)}var Fu=null,Er=null,Kp=!1,Vu=!1,op=!1,Qs=0;function Wi(e){e!==Er&&e.next===null&&(Er===null?Fu=Er=e:Er=Er.next=e),Vu=!0,Kp||(Kp=!0,PE())}function Hl(e,t){if(!op&&Vu){op=!0;do for(var n=!1,i=Fu;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Kn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,cv(i,a))}else a=te,a=Zu(i,i===be?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Il(i,a)||(n=!0,cv(i,a));i=i.next}while(n);op=!1}}function OE(){tS()}function tS(){Vu=Kp=!1;var e=0;Qs!==0&&XE()&&(e=Qs);for(var t=Zn(),n=null,i=Fu;i!==null;){var s=i.next,a=eS(i,t);a===0?(i.next=null,n===null?Fu=s:n.next=s,s===null&&(Er=n)):(n=i,(e!==0||(a&3)!==0)&&(Vu=!0)),i=s}sn!==0&&sn!==5||Hl(e,!1),Qs!==0&&(Qs=0)}function eS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Kn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=l1(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=be,n=te,n=Zu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Pd(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Il(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Pd(i),hm(n)){case 2:case 8:n=Gv;break;case 32:n=Mu;break;case 268435456:n=kv;break;default:n=Mu}return i=nS.bind(null,e),n=cm(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Pd(i),e.callbackPriority=2,e.callbackNode=null,2}function nS(e,t){if(sn!==0&&sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lh()&&e.callbackNode!==n)return null;var i=te;return i=Zu(e,e===be?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Hy(e,i,t),eS(e,Zn()),e.callbackNode!=null&&e.callbackNode===n?nS.bind(null,e):null)}function cv(e,t){if(lh())return null;Hy(e,t,!0)}function PE(){qE(function(){(he&6)!==0?cm(Hv,OE):tS()})}function Jm(){if(Qs===0){var e=Yr;e===0&&(e=Hc,Hc<<=1,(Hc&261888)===0&&(Hc=256)),Qs=e}return Qs}function uv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:au(""+e)}function hv(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function BE(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=uv((s[Fn]||null).action),r=i.submitter;r&&(t=(t=r[Fn]||null)?uv(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Ju("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Qs!==0){var l=r?hv(s,r):new FormData(s);Vp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?hv(s,r):new FormData(s),Vp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for($c=0;$c<Cp.length;$c++)tu=Cp[$c],fv=tu.toLowerCase(),dv=tu[0].toUpperCase()+tu.slice(1),wi(fv,"on"+dv);var tu,fv,dv,$c;wi(px,"onAnimationEnd");wi(mx,"onAnimationIteration");wi(gx,"onAnimationStart");wi("dblclick","onDoubleClick");wi("focusin","onFocus");wi("focusout","onBlur");wi(eE,"onTransitionRun");wi(nE,"onTransitionStart");wi(iE,"onTransitionCancel");wi(_x,"onTransitionEnd");Wr("onMouseEnter",["mouseout","mouseover"]);Wr("onMouseLeave",["mouseout","mouseover"]);Wr("onPointerEnter",["pointerout","pointerover"]);Wr("onPointerLeave",["pointerout","pointerover"]);qa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qa("onBeforeInput",["compositionend","keypress","textInput","paste"]);qa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wl));function iS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Eu(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Eu(f)}s.currentTarget=null,a=l}}}}function jt(e,t){var n=t[yp];n===void 0&&(n=t[yp]=new Set);var i=e+"__bubble";n.has(i)||(sS(t,e,2,!1),n.add(i))}function lp(e,t,n){var i=0;t&&(i|=4),sS(n,e,i,t)}var eu="_reactListening"+Math.random().toString(36).slice(2);function Km(e){if(!e[eu]){e[eu]=!0,Jv.forEach(function(n){n!=="selectionchange"&&(zE.has(n)||lp(n,!1,e),lp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[eu]||(t[eu]=!0,lp("selectionchange",!1,t))}}function sS(e,t,n,i){switch(_S(t)){case 2:var s=fT;break;case 8:s=dT;break;default:s=tg}n=s.bind(null,t,n,e),s=void 0,!Tp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function cp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=wr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}ix(function(){var c=a,f=pm(n),p=[];t:{var u=vx.get(e);if(u!==void 0){var d=Ju,v=e;switch(e){case"keypress":if(ou(n)===0)break t;case"keydown":case"keyup":d=L1;break;case"focusin":v="focus",d=Hd;break;case"focusout":v="blur",d=Hd;break;case"beforeblur":case"afterblur":d=Hd;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=y_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=S1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=P1;break;case px:case mx:case gx:d=E1;break;case _x:d=z1;break;case"scroll":case"scrollend":d=x1;break;case"wheel":d=V1;break;case"copy":case"cut":case"paste":d=A1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=M_;break;case"toggle":case"beforetoggle":d=G1}var M=(t&4)!==0,_=!M&&(e==="scroll"||e==="scrollend"),h=M?u!==null?u+"Capture":null:u;M=[];for(var m=c,S;m!==null;){var g=m;if(S=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||S===null||h===null||(g=xl(m,h),g!=null&&M.push(Cl(m,g,S))),_)break;m=m.return}0<M.length&&(u=new d(u,v,null,n,f),p.push({event:u,listeners:M}))}}if((t&7)===0){t:{if(u=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",u&&n!==Ep&&(v=n.relatedTarget||n.fromElement)&&(wr(v)||v[eo]))break t;if((d||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,d?(v=n.relatedTarget||n.toElement,d=c,v=v?wr(v):null,v!==null&&(_=Nl(v),M=v.tag,v!==_||M!==5&&M!==27&&M!==6)&&(v=null)):(d=null,v=c),d!==v)){if(M=y_,g="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(M=M_,g="onPointerLeave",h="onPointerEnter",m="pointer"),_=d==null?u:nl(d),S=v==null?u:nl(v),u=new M(g,m+"leave",d,n,f),u.target=_,u.relatedTarget=S,g=null,wr(f)===c&&(M=new M(h,m+"enter",v,n,f),M.target=S,M.relatedTarget=_,g=M),_=g,d&&v)e:{for(M=FE,h=d,m=v,S=0,g=h;g;g=M(g))S++;g=0;for(var A=m;A;A=M(A))g++;for(;0<S-g;)h=M(h),S--;for(;0<g-S;)m=M(m),g--;for(;S--;){if(h===m||m!==null&&h===m.alternate){M=h;break e}h=M(h),m=M(m)}M=null}else M=null;d!==null&&pv(p,u,d,M,!1),v!==null&&_!==null&&pv(p,_,v,M,!0)}}t:{if(u=c?nl(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var E=A_;else if(T_(u))if(cx)E=j1;else{E=K1;var w=J1}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&dm(c.elementType)&&(E=A_):E=Q1;if(E&&(E=E(e,c))){lx(p,E,n,f);break t}w&&w(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&bp(u,"number",u.value)}switch(w=c?nl(c):window,e){case"focusin":(T_(w)||w.contentEditable==="true")&&(Dr=w,Ap=c,ol=null);break;case"focusout":ol=Ap=Dr=null;break;case"mousedown":wp=!0;break;case"contextmenu":case"mouseup":case"dragend":wp=!1,D_(p,n,f);break;case"selectionchange":if(tE)break;case"keydown":case"keyup":D_(p,n,f)}var y;if(_m)t:{switch(e){case"compositionstart":var T="onCompositionStart";break t;case"compositionend":T="onCompositionEnd";break t;case"compositionupdate":T="onCompositionUpdate";break t}T=void 0}else Rr?rx(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(ax&&n.locale!=="ko"&&(Rr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Rr&&(y=sx()):(Zs=f,mm="value"in Zs?Zs.value:Zs.textContent,Rr=!0)),w=Hu(c,T),0<w.length&&(T=new S_(T,e,null,n,f),p.push({event:T,listeners:w}),y?T.data=y:(y=ox(n),y!==null&&(T.data=y)))),(y=X1?W1(e,n):q1(e,n))&&(T=Hu(c,"onBeforeInput"),0<T.length&&(w=new S_("onBeforeInput","beforeinput",null,n,f),p.push({event:w,listeners:T}),w.data=y)),BE(p,e,c,n,f)}iS(p,t)})}function Cl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hu(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=xl(e,n),s!=null&&i.unshift(Cl(e,s,a)),s=xl(e,t),s!=null&&i.push(Cl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function FE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pv(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=xl(n,a),c!=null&&r.unshift(Cl(n,c,l))):s||(c=xl(n,a),c!=null&&r.push(Cl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var VE=/\r\n?/g,HE=/\u0000|\uFFFD/g;function mv(e){return(typeof e=="string"?e:""+e).replace(VE,`
`).replace(HE,"")}function aS(e,t){return t=mv(t),mv(e)===t}function ve(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||qr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&qr(e,""+i);break;case"className":Xc(e,"class",i);break;case"tabIndex":Xc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Xc(e,n,i);break;case"style":nx(e,i,a);break;case"data":if(t!=="object"){Xc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=au(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&ve(e,t,"name",s.name,s,null),ve(e,t,"formEncType",s.formEncType,s,null),ve(e,t,"formMethod",s.formMethod,s,null),ve(e,t,"formTarget",s.formTarget,s,null)):(ve(e,t,"encType",s.encType,s,null),ve(e,t,"method",s.method,s,null),ve(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=au(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=hs);break;case"onScroll":i!=null&&jt("scroll",e);break;case"onScrollEnd":i!=null&&jt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(j(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=au(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":jt("beforetoggle",e),jt("toggle",e),su(e,"popover",i);break;case"xlinkActuate":is(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":is(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":is(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":is(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":is(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":is(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":is(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":is(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":is(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":su(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=_1.get(n)||n,su(e,n,i))}}function Qp(e,t,n,i,s,a){switch(n){case"style":nx(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(j(60));e.innerHTML=n}}break;case"children":typeof i=="string"?qr(e,i):(typeof i=="number"||typeof i=="bigint")&&qr(e,""+i);break;case"onScroll":i!=null&&jt("scroll",e);break;case"onScrollEnd":i!=null&&jt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=hs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Kv.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[Fn]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):su(e,n,i)}}}function vn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":jt("error",e),jt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:ve(e,t,a,r,n,null)}}s&&ve(e,t,"srcSet",n.srcSet,n,null),i&&ve(e,t,"src",n.src,n,null);return;case"input":jt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(j(137,t));break;default:ve(e,t,i,f,n,null)}}$v(e,a,o,l,c,r,s,!1);return;case"select":jt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ve(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?zr(e,!!i,t,!1):n!=null&&zr(e,!!i,n,!0);return;case"textarea":jt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(j(91));break;default:ve(e,t,r,o,n,null)}ex(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":ve(e,t,l,i,n,null));return;case"dialog":jt("beforetoggle",e),jt("toggle",e),jt("cancel",e),jt("close",e);break;case"iframe":case"object":jt("load",e);break;case"video":case"audio":for(i=0;i<wl.length;i++)jt(wl[i],e);break;case"image":jt("error",e),jt("load",e);break;case"details":jt("toggle",e);break;case"embed":case"source":case"link":jt("error",e),jt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:ve(e,t,c,i,n,null)}return;default:if(dm(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&Qp(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ve(e,t,o,i,n,null))}function GE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||ve(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":a=d;break;case"name":s=d;break;case"checked":c=d;break;case"defaultChecked":f=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(j(137,t));break;default:d!==p&&ve(e,t,u,d,i,p)}}Mp(e,r,o,l,c,f,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||ve(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":u=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&ve(e,t,s,a,i,l)}t=o,n=r,i=d,u!=null?zr(e,!!n,u,!1):!!i!=!!n&&(t!=null?zr(e,!!n,t,!0):zr(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ve(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":u=s;break;case"defaultValue":d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(j(91));break;default:s!==a&&ve(e,t,r,s,i,a)}tx(e,u,d);return;case"option":for(var v in n)u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v)&&(v==="selected"?e.selected=!1:ve(e,t,v,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?e.selected=u&&typeof u!="function"&&typeof u!="symbol":ve(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)u=n[M],n.hasOwnProperty(M)&&u!=null&&!i.hasOwnProperty(M)&&ve(e,t,M,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(j(137,t));break;default:ve(e,t,c,u,i,d)}return;default:if(dm(t)){for(var _ in n)u=n[_],n.hasOwnProperty(_)&&u!==void 0&&!i.hasOwnProperty(_)&&Qp(e,t,_,void 0,i,u);for(f in i)u=i[f],d=n[f],!i.hasOwnProperty(f)||u===d||u===void 0&&d===void 0||Qp(e,t,f,u,i,d);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&ve(e,t,h,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||ve(e,t,p,u,i,d)}function gv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&gv(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,p=l.initiatorType;f&&gv(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jp=null,$p=null;function Gu(e){return e.nodeType===9?e:e.ownerDocument}function _v(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function tm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var up=null;function XE(){var e=window.event;return e&&e.type==="popstate"?e===up?!1:(up=e,!0):(up=null,!1)}var oS=typeof setTimeout=="function"?setTimeout:void 0,WE=typeof clearTimeout=="function"?clearTimeout:void 0,vv=typeof Promise=="function"?Promise:void 0,qE=typeof queueMicrotask=="function"?queueMicrotask:typeof vv<"u"?function(e){return vv.resolve(null).then(e).catch(YE)}:oS;function YE(e){setTimeout(function(){throw e})}function fa(e){return e==="head"}function xv(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),to(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")_l(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,_l(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Pl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&_l(e.ownerDocument.body);n=s}while(n);to(t)}function yv(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function em(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":em(n),fm(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function ZE(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Pl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=vi(e.nextSibling),e===null)break}return null}function JE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=vi(e.nextSibling),e===null))return null;return e}function lS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=vi(e.nextSibling),e===null))return null;return e}function nm(e){return e.data==="$?"||e.data==="$~"}function im(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function KE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function vi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var sm=null;function Sv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return vi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Mv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function cS(e,t,n){switch(t=Gu(n),e){case"html":if(e=t.documentElement,!e)throw Error(j(452));return e;case"head":if(e=t.head,!e)throw Error(j(453));return e;case"body":if(e=t.body,!e)throw Error(j(454));return e;default:throw Error(j(451))}}function _l(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);fm(e)}var xi=new Map,bv=new Set;function ku(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ss=fe.d;fe.d={f:QE,r:jE,D:$E,C:tT,L:eT,m:nT,X:sT,S:iT,M:aT};function QE(){var e=Ss.f(),t=rh();return e||t}function jE(e){var t=no(e);t!==null&&t.tag===5&&t.type==="form"?ny(t):Ss.r(e)}var ro=typeof document>"u"?null:document;function uS(e,t,n){var i=ro;if(i&&typeof t=="string"&&t){var s=pi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),bv.has(s)||(bv.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),vn(t,"link",e),cn(t),i.head.appendChild(t)))}}function $E(e){Ss.D(e),uS("dns-prefetch",e,null)}function tT(e,t){Ss.C(e,t),uS("preconnect",e,t)}function eT(e,t,n){Ss.L(e,t,n);var i=ro;if(i&&e&&t){var s='link[rel="preload"][as="'+pi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+pi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+pi(n.imageSizes)+'"]')):s+='[href="'+pi(e)+'"]';var a=s;switch(t){case"style":a=$r(e);break;case"script":a=oo(e)}xi.has(a)||(e=Le({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),xi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Gl(a))||t==="script"&&i.querySelector(kl(a))||(t=i.createElement("link"),vn(t,"link",e),cn(t),i.head.appendChild(t)))}}function nT(e,t){Ss.m(e,t);var n=ro;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+pi(i)+'"][href="'+pi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=oo(e)}if(!xi.has(a)&&(e=Le({rel:"modulepreload",href:e},t),xi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(kl(a)))return}i=n.createElement("link"),vn(i,"link",e),cn(i),n.head.appendChild(i)}}}function iT(e,t,n){Ss.S(e,t,n);var i=ro;if(i&&e){var s=Br(i).hoistableStyles,a=$r(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Gl(a)))o.loading=5;else{e=Le({rel:"stylesheet",href:e,"data-precedence":t},n),(n=xi.get(a))&&Qm(e,n);var l=r=i.createElement("link");cn(l),vn(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,mu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function sT(e,t){Ss.X(e,t);var n=ro;if(n&&e){var i=Br(n).hoistableScripts,s=oo(e),a=i.get(s);a||(a=n.querySelector(kl(s)),a||(e=Le({src:e,async:!0},t),(t=xi.get(s))&&jm(e,t),a=n.createElement("script"),cn(a),vn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function aT(e,t){Ss.M(e,t);var n=ro;if(n&&e){var i=Br(n).hoistableScripts,s=oo(e),a=i.get(s);a||(a=n.querySelector(kl(s)),a||(e=Le({src:e,async:!0,type:"module"},t),(t=xi.get(s))&&jm(e,t),a=n.createElement("script"),cn(a),vn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Ev(e,t,n,i){var s=(s=js.current)?ku(s):null;if(!s)throw Error(j(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=$r(n.href),n=Br(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=$r(n.href);var a=Br(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Gl(e)))&&!a._p&&(r.instance=a,r.state.loading=5),xi.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},xi.set(e,n),a||rT(s,e,n,r.state))),t&&i===null)throw Error(j(528,""));return r}if(t&&i!==null)throw Error(j(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=oo(n),n=Br(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(j(444,e))}}function $r(e){return'href="'+pi(e)+'"'}function Gl(e){return'link[rel="stylesheet"]['+e+"]"}function hS(e){return Le({},e,{"data-precedence":e.precedence,precedence:null})}function rT(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),vn(t,"link",n),cn(t),e.head.appendChild(t))}function oo(e){return'[src="'+pi(e)+'"]'}function kl(e){return"script[async]"+e}function Tv(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+pi(n.href)+'"]');if(i)return t.instance=i,cn(i),i;var s=Le({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),cn(i),vn(i,"style",s),mu(i,n.precedence,e),t.instance=i;case"stylesheet":s=$r(n.href);var a=e.querySelector(Gl(s));if(a)return t.state.loading|=4,t.instance=a,cn(a),a;i=hS(n),(s=xi.get(s))&&Qm(i,s),a=(e.ownerDocument||e).createElement("link"),cn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),vn(a,"link",i),t.state.loading|=4,mu(a,n.precedence,e),t.instance=a;case"script":return a=oo(n.src),(s=e.querySelector(kl(a)))?(t.instance=s,cn(s),s):(i=n,(s=xi.get(a))&&(i=Le({},n),jm(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),cn(s),vn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(j(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,mu(i,n.precedence,e));return t.instance}function mu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Qm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function jm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var gu=null;function Av(e,t,n){if(gu===null){var i=new Map,s=gu=new Map;s.set(n,i)}else s=gu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Pl]||a[mn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function wv(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function oT(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function fS(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function lT(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=$r(i.href),a=t.querySelector(Gl(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Xu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,cn(a);return}a=t.ownerDocument||t,i=hS(i),(s=xi.get(s))&&Qm(i,s),a=a.createElement("link"),cn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),vn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Xu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var hp=0;function cT(e,t){return e.stylesheets&&e.count===0&&_u(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&_u(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&hp===0&&(hp=62500*kE());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_u(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>hp?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Xu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_u(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wu=null;function _u(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wu=new Map,t.forEach(uT,e),Wu=null,Xu.call(e))}function uT(e,t){if(!(t.state.loading&4)){var n=Wu.get(e);if(n)var i=n.get(null);else{n=new Map,Wu.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Xu.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Rl={$$typeof:us,Provider:null,Consumer:null,_currentValue:Pa,_currentValue2:Pa,_threadCount:0};function hT(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bd(0),this.hiddenUpdates=Bd(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function dS(e,t,n,i,s,a,r,o,l,c,f,p){return e=new hT(e,t,n,r,l,c,f,p,o),t=1,a===!0&&(t|=24),a=qn(3,null,null,t),e.current=a,a.stateNode=e,t=Em(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},wm(a),e}function pS(e){return e?(e=Lr,e):Lr}function mS(e,t,n,i,s,a){s=pS(s),i.context===null?i.context=s:i.pendingContext=s,i=ta(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=ea(e,i,t),n!==null&&(zn(n,e,t),cl(n,e,t))}function Cv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $m(e,t){Cv(e,t),(e=e.alternate)&&Cv(e,t)}function gS(e){if(e.tag===13||e.tag===31){var t=Ja(e,67108864);t!==null&&zn(t,e,67108864),$m(e,67108864)}}function Rv(e){if(e.tag===13||e.tag===31){var t=Qn();t=um(t);var n=Ja(e,t);n!==null&&zn(n,e,t),$m(e,t)}}var qu=!0;function fT(e,t,n,i){var s=Ft.T;Ft.T=null;var a=fe.p;try{fe.p=2,tg(e,t,n,i)}finally{fe.p=a,Ft.T=s}}function dT(e,t,n,i){var s=Ft.T;Ft.T=null;var a=fe.p;try{fe.p=8,tg(e,t,n,i)}finally{fe.p=a,Ft.T=s}}function tg(e,t,n,i){if(qu){var s=am(i);if(s===null)cp(e,t,i,Yu,n),Dv(e,i);else if(mT(s,e,t,n,i))i.stopPropagation();else if(Dv(e,i),t&4&&-1<pT.indexOf(e)){for(;s!==null;){var a=no(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=La(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Kn(r);o.entanglements[1]|=l,r&=~l}Wi(a),(he&6)===0&&(Pu=Zn()+500,Hl(0,!1))}}break;case 31:case 13:o=Ja(a,2),o!==null&&zn(o,a,2),rh(),$m(a,2)}if(a=am(i),a===null&&cp(e,t,i,Yu,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else cp(e,t,i,null,n)}}function am(e){return e=pm(e),eg(e)}var Yu=null;function eg(e){if(Yu=null,e=wr(e),e!==null){var t=Nl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Pv(t),e!==null)return e;e=null}else if(n===31){if(e=Bv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Yu=e,null}function _S(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(e1()){case Hv:return 2;case Gv:return 8;case Mu:case n1:return 32;case kv:return 268435456;default:return 32}default:return 32}}var rm=!1,sa=null,aa=null,ra=null,Dl=new Map,Ul=new Map,qs=[],pT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dv(e,t){switch(e){case"focusin":case"focusout":sa=null;break;case"dragenter":case"dragleave":aa=null;break;case"mouseover":case"mouseout":ra=null;break;case"pointerover":case"pointerout":Dl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ul.delete(t.pointerId)}}function jo(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=no(t),t!==null&&gS(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function mT(e,t,n,i,s){switch(t){case"focusin":return sa=jo(sa,e,t,n,i,s),!0;case"dragenter":return aa=jo(aa,e,t,n,i,s),!0;case"mouseover":return ra=jo(ra,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Dl.set(a,jo(Dl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Ul.set(a,jo(Ul.get(a)||null,e,t,n,i,s)),!0}return!1}function vS(e){var t=wr(e.target);if(t!==null){var n=Nl(t);if(n!==null){if(t=n.tag,t===13){if(t=Pv(n),t!==null){e.blockedOn=t,d_(e.priority,function(){Rv(n)});return}}else if(t===31){if(t=Bv(n),t!==null){e.blockedOn=t,d_(e.priority,function(){Rv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=am(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ep=i,n.target.dispatchEvent(i),Ep=null}else return t=no(n),t!==null&&gS(t),e.blockedOn=n,!1;t.shift()}return!0}function Uv(e,t,n){vu(e)&&n.delete(t)}function gT(){rm=!1,sa!==null&&vu(sa)&&(sa=null),aa!==null&&vu(aa)&&(aa=null),ra!==null&&vu(ra)&&(ra=null),Dl.forEach(Uv),Ul.forEach(Uv)}function nu(e,t){e.blockedOn===t&&(e.blockedOn=null,rm||(rm=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,gT)))}var iu=null;function Nv(e){iu!==e&&(iu=e,an.unstable_scheduleCallback(an.unstable_NormalPriority,function(){iu===e&&(iu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(eg(i||n)===null)continue;break}var a=no(n);a!==null&&(e.splice(t,3),t-=3,Vp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function to(e){function t(l){return nu(l,e)}sa!==null&&nu(sa,e),aa!==null&&nu(aa,e),ra!==null&&nu(ra,e),Dl.forEach(t),Ul.forEach(t);for(var n=0;n<qs.length;n++){var i=qs[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<qs.length&&(n=qs[0],n.blockedOn===null);)vS(n),n.blockedOn===null&&qs.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Fn]||null;if(typeof a=="function")r||Nv(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Fn]||null)o=r.formAction;else if(eg(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Nv(n)}}}function xS(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function ng(e){this._internalRoot=e}ch.prototype.render=ng.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));var n=t.current,i=Qn();mS(n,i,e,t,null,null)};ch.prototype.unmount=ng.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mS(e.current,2,null,e,null,null),rh(),t[eo]=null}};function ch(e){this._internalRoot=e}ch.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qs.length&&t!==0&&t<qs[n].priority;n++);qs.splice(n,0,e),n===0&&vS(e)}};var Lv=Iv.version;if(Lv!=="19.2.6")throw Error(j(527,Lv,"19.2.6"));fe.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Zb(t),e=e!==null?zv(e):null,e=e===null?null:e.stateNode,e};var _T={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:Ft,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&($o=__REACT_DEVTOOLS_GLOBAL_HOOK__,!$o.isDisabled&&$o.supportsFiber))try{Ll=$o.inject(_T),Jn=$o}catch{}var $o;uh.createRoot=function(e,t){if(!Ov(e))throw Error(j(299));var n=!1,i="",s=uy,a=hy,r=fy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=dS(e,1,!1,null,null,n,i,null,s,a,r,xS),e[eo]=t.current,Km(e),new ng(t)};uh.hydrateRoot=function(e,t,n){if(!Ov(e))throw Error(j(299));var i=!1,s="",a=uy,r=hy,o=fy,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=dS(e,1,!0,t,n??null,i,s,l,a,r,o,xS),t.context=pS(null),n=t.current,i=Qn(),i=um(i),s=ta(i),s.callback=null,ea(n,s,i),n=i,t.current.lanes=n,Ol(t,n),Wi(t),e[eo]=t.current,Km(e),new ch(t)};uh.version="19.2.6"});var bS=zi((p3,MS)=>{"use strict";function SS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(SS)}catch(e){console.error(e)}}SS(),MS.exports=yS()});var fb=zi(_d=>{"use strict";var e3=Symbol.for("react.transitional.element"),n3=Symbol.for("react.fragment");function hb(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:e3,type:e,key:i,ref:t!==void 0?t:null,props:n}}_d.Fragment=n3;_d.jsx=hb;_d.jsxs=hb});var Cc=zi((GN,db)=>{"use strict";db.exports=fb()});var pb=mr(bS());var Ei=mr(zc());var QS=0,zg=1,jS=2;var or=1,$S=2,Oo=3,Rs=0,Ln=1,Mi=2,Qi=0,ir=1,Fg=2,Vg=3,Hg=4,tM=5;var xa=100,eM=101,nM=102,iM=103,sM=104,aM=200,rM=201,oM=202,lM=203,Bh=204,zh=205,cM=206,uM=207,hM=208,fM=209,dM=210,pM=211,mM=212,gM=213,_M=214,Fh=0,Vh=1,Hh=2,sr=3,Gh=4,kh=5,Xh=6,Wh=7,Gg=0,vM=1,xM=2,Li=0,kg=1,Xg=2,Wg=3,qg=4,Yg=5,Zg=6,Jg=7;var Kg=300,Ta=301,lr=302,Mf=303,bf=304,_c=306,qh=1e3,Yi=1001,Yh=1002,dn=1003,yM=1004;var vc=1005;var yn=1006,Ef=1007;var Aa=1008;var Gn=1009,Qg=1010,jg=1011,Po=1012,Tf=1013,Ii=1014,Oi=1015,ji=1016,Af=1017,wf=1018,Bo=1020,$g=35902,t0=35899,e0=1021,n0=1022,bi=1023,Zi=1026,wa=1027,i0=1028,Cf=1029,Ca=1030,Rf=1031;var Df=1033,xc=33776,yc=33777,Sc=33778,Mc=33779,Uf=35840,Nf=35841,Lf=35842,If=35843,Of=36196,Pf=37492,Bf=37496,zf=37488,Ff=37489,bc=37490,Vf=37491,Hf=37808,Gf=37809,kf=37810,Xf=37811,Wf=37812,qf=37813,Yf=37814,Zf=37815,Jf=37816,Kf=37817,Qf=37818,jf=37819,$f=37820,td=37821,ed=36492,nd=36494,id=36495,sd=36283,ad=36284,Ec=36285,rd=36286;var Kl=2300,Zh=2301,Ph=2302,wg=2303,Cg=2400,Rg=2401,Dg=2402;var SM=3200;var od=0,MM=1,Is="",fn="srgb",Ql="srgb-linear",jl="linear",de="srgb";var er=7680;var Ug=519,bM=512,EM=513,TM=514,ld=515,AM=516,wM=517,cd=518,CM=519,Ng=35044;var s0="300 es",Ui=2e3,Eo=2001;function vT(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function xT(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function $l(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function RM(){let e=$l("canvas");return e.style.display="block",e}var ES={},To=null;function a0(...e){let t="THREE."+e.shift();To?To("log",t,...e):console.log(t,...e)}function DM(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Lt(...e){e=DM(e);let t="THREE."+e.shift();if(To)To("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Pt(...e){e=DM(e);let t="THREE."+e.shift();if(To)To("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function nr(...e){let t=e.join(" ");t in ES||(ES[t]=!0,Lt(...e))}function UM(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var NM={[Fh]:Vh,[Hh]:Xh,[Gh]:Wh,[sr]:kh,[Vh]:Fh,[Xh]:Hh,[Wh]:Gh,[kh]:sr},Ji=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],TS=1234567,Mo=Math.PI/180,Ao=180/Math.PI;function zo(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[e&255]+En[e>>8&255]+En[e>>16&255]+En[e>>24&255]+"-"+En[t&255]+En[t>>8&255]+"-"+En[t>>16&15|64]+En[t>>24&255]+"-"+En[n&63|128]+En[n>>8&255]+"-"+En[n>>16&255]+En[n>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function ne(e,t,n){return Math.max(t,Math.min(n,e))}function r0(e,t){return(e%t+t)%t}function yT(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function ST(e,t,n){return e!==t?(n-e)/(t-e):0}function Jl(e,t,n){return(1-n)*e+n*t}function MT(e,t,n,i){return Jl(e,t,1-Math.exp(-n*i))}function bT(e,t=1){return t-Math.abs(r0(e,t*2)-t)}function ET(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function TT(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function AT(e,t){return e+Math.floor(Math.random()*(t-e+1))}function wT(e,t){return e+Math.random()*(t-e)}function CT(e){return e*(.5-Math.random())}function RT(e){e!==void 0&&(TS=e);let t=TS+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function DT(e){return e*Mo}function UT(e){return e*Ao}function NT(e){return(e&e-1)===0&&e!==0}function LT(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function IT(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function OT(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),f=r((t+i)/2),p=a((t-i)/2),u=r((t-i)/2),d=a((i-t)/2),v=r((i-t)/2);switch(s){case"XYX":e.set(o*f,l*p,l*u,o*c);break;case"YZY":e.set(l*u,o*f,l*p,o*c);break;case"ZXZ":e.set(l*p,l*u,o*f,o*c);break;case"XZX":e.set(o*f,l*v,l*d,o*c);break;case"YXY":e.set(l*d,o*f,l*v,o*c);break;case"ZYZ":e.set(l*v,l*d,o*f,o*c);break;default:Lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function So(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Un(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var An={DEG2RAD:Mo,RAD2DEG:Ao,generateUUID:zo,clamp:ne,euclideanModulo:r0,mapLinear:yT,inverseLerp:ST,lerp:Jl,damp:MT,pingpong:bT,smoothstep:ET,smootherstep:TT,randInt:AT,randFloat:wT,randFloatSpread:CT,seededRandom:RT,degToRad:DT,radToDeg:UT,isPowerOfTwo:NT,ceilPowerOfTwo:LT,floorPowerOfTwo:IT,setQuaternionFromProperEuler:OT,normalize:Un,denormalize:So},h0=class h0{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ne(this.x,t.x,n.x),this.y=ne(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ne(this.x,t,n),this.y=ne(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};h0.prototype.isVector2=!0;var Yt=h0,Ki=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],p=i[s+3],u=a[r+0],d=a[r+1],v=a[r+2],M=a[r+3];if(p!==M||l!==u||c!==d||f!==v){let _=l*u+c*d+f*v+p*M;_<0&&(u=-u,d=-d,v=-v,M=-M,_=-_);let h=1-o;if(_<.9995){let m=Math.acos(_),S=Math.sin(m);h=Math.sin(h*m)/S,o=Math.sin(o*m)/S,l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+M*o}else{l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+M*o;let m=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=m,c*=m,f*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],p=a[r],u=a[r+1],d=a[r+2],v=a[r+3];return t[n]=o*v+f*p+l*d-c*u,t[n+1]=l*v+f*u+c*p-o*d,t[n+2]=c*v+f*d+o*u-l*p,t[n+3]=f*v-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),p=o(a/2),u=l(i/2),d=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"YXZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"ZXY":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"ZYX":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"YZX":this._x=u*f*p+c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p-u*d*v;break;case"XZY":this._x=u*f*p-c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p+u*d*v;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(f-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},f0=class f0{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(AS.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(AS.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*f,this.y=i+l*f+o*c-a*p,this.z=s+l*p+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ne(this.x,t.x,n.x),this.y=ne(this.y,t.y,n.y),this.z=ne(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ne(this.x,t,n),this.y=ne(this.y,t,n),this.z=ne(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ig.copy(this).projectOnVector(t),this.sub(ig)}reflect(t){return this.sub(ig.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};f0.prototype.isVector3=!0;var O=f0,ig=new O,AS=new Ki,d0=class d0{constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],d=i[5],v=i[8],M=s[0],_=s[3],h=s[6],m=s[1],S=s[4],g=s[7],A=s[2],E=s[5],w=s[8];return a[0]=r*M+o*m+l*A,a[3]=r*_+o*S+l*E,a[6]=r*h+o*g+l*w,a[1]=c*M+f*m+p*A,a[4]=c*_+f*S+p*E,a[7]=c*h+f*g+p*w,a[2]=u*M+d*m+v*A,a[5]=u*_+d*S+v*E,a[8]=u*h+d*g+v*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=f*r-o*c,u=o*l-f*a,d=c*a-r*l,v=n*p+i*u+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/v;return t[0]=p*M,t[1]=(s*c-f*i)*M,t[2]=(o*i-s*r)*M,t[3]=u*M,t[4]=(f*n-s*l)*M,t[5]=(s*a-o*n)*M,t[6]=d*M,t[7]=(i*l-c*n)*M,t[8]=(r*n-i*a)*M,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sg.makeScale(t,n)),this}rotate(t){return nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sg.makeRotation(-t)),this}translate(t,n){return nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};d0.prototype.isMatrix3=!0;var Ht=d0,sg=new Ht,wS=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),CS=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PT(){let e={enabled:!0,workingColorSpace:Ql,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===de&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===de&&(s.r=bo(s.r),s.g=bo(s.g),s.b=bo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Is?jl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return nr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return nr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Ql]:{primaries:t,whitePoint:i,transfer:jl,toXYZ:wS,fromXYZ:CS,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:t,whitePoint:i,transfer:de,toXYZ:wS,fromXYZ:CS,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),e}var ee=PT();function Cs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function bo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var lo,Jh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{lo===void 0&&(lo=$l("canvas")),lo.width=t.width,lo.height=t.height;let s=lo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=lo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=$l("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Cs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Cs(n[i]/255)*255):n[i]=Cs(n[i]);return{data:n,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},BT=0,wo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=zo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(ag(s[r].image)):a.push(ag(s[r]))}else a=ag(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function ag(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Jh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}var zT=0,rg=new O,Nn=class e extends Ji{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Yi,s=Yi,a=yn,r=Aa,o=bi,l=Gn,c=e.DEFAULT_ANISOTROPY,f=Is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zT++}),this.uuid=zo(),this.name="",this.source=new wo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rg).x}get height(){return this.source.getSize(rg).y}get depth(){return this.source.getSize(rg).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Lt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Lt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qh:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case Yh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qh:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case Yh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Kg;Nn.DEFAULT_ANISOTROPY=1;var p0=class p0{constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],p=l[8],u=l[1],d=l[5],v=l[9],M=l[2],_=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-M)<.01&&Math.abs(v-_)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+M)<.1&&Math.abs(v+_)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(c+1)/2,g=(d+1)/2,A=(h+1)/2,E=(f+u)/4,w=(p+M)/4,y=(v+_)/4;return S>g&&S>A?S<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(S),s=E/i,a=w/i):g>A?g<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(g),i=E/s,a=y/s):A<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(A),i=w/a,s=y/a),this.set(i,s,a,n),this}let m=Math.sqrt((_-v)*(_-v)+(p-M)*(p-M)+(u-f)*(u-f));return Math.abs(m)<.001&&(m=1),this.x=(_-v)/m,this.y=(p-M)/m,this.z=(u-f)/m,this.w=Math.acos((c+d+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ne(this.x,t.x,n.x),this.y=ne(this.y,t.y,n.y),this.z=ne(this.z,t.z,n.z),this.w=ne(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ne(this.x,t,n),this.y=ne(this.y,t,n),this.z=ne(this.z,t,n),this.w=ne(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};p0.prototype.isVector4=!0;var ze=p0,Kh=class extends Ji{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new ze(0,0,t,n),this.scissorTest=!1,this.viewport=new ze(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new Nn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new wo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends Kh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},tc=class extends Nn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qh=class extends Nn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sf=class Sf{constructor(t,n,i,s,a,r,o,l,c,f,p,u,d,v,M,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,p,u,d,v,M,_)}set(t,n,i,s,a,r,o,l,c,f,p,u,d,v,M,_){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=u,h[3]=d,h[7]=v,h[11]=M,h[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sf().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/co.setFromMatrixColumn(t,0).length(),a=1/co.setFromMatrixColumn(t,1).length(),r=1/co.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*f,d=r*p,v=o*f,M=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=d+v*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=v+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*f,d=l*p,v=c*f,M=c*p;n[0]=u+M*o,n[4]=v*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*f,n[9]=-o,n[2]=d*o-v,n[6]=M+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*f,d=l*p,v=c*f,M=c*p;n[0]=u-M*o,n[4]=-r*p,n[8]=v+d*o,n[1]=d+v*o,n[5]=r*f,n[9]=M-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*f,d=r*p,v=o*f,M=o*p;n[0]=l*f,n[4]=v*c-d,n[8]=u*c+M,n[1]=l*p,n[5]=M*c+u,n[9]=d*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,v=o*l,M=o*c;n[0]=l*f,n[4]=M-u*p,n[8]=v*p+d,n[1]=p,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=d*p+v,n[10]=u-M*p}else if(t.order==="XZY"){let u=r*l,d=r*c,v=o*l,M=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=u*p+M,n[5]=r*f,n[9]=d*p-v,n[2]=v*p-d,n[6]=o*f,n[10]=M*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(FT,t,VT)}lookAt(t,n,i){let s=this.elements;return ti.subVectors(t,n),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),da.crossVectors(i,ti),da.lengthSq()===0&&(Math.abs(i.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),da.crossVectors(i,ti)),da.normalize(),hh.crossVectors(ti,da),s[0]=da.x,s[4]=hh.x,s[8]=ti.x,s[1]=da.y,s[5]=hh.y,s[9]=ti.y,s[2]=da.z,s[6]=hh.z,s[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],d=i[13],v=i[2],M=i[6],_=i[10],h=i[14],m=i[3],S=i[7],g=i[11],A=i[15],E=s[0],w=s[4],y=s[8],T=s[12],R=s[1],D=s[5],B=s[9],Y=s[13],K=s[2],F=s[6],q=s[10],k=s[14],$=s[3],rt=s[7],mt=s[11],yt=s[15];return a[0]=r*E+o*R+l*K+c*$,a[4]=r*w+o*D+l*F+c*rt,a[8]=r*y+o*B+l*q+c*mt,a[12]=r*T+o*Y+l*k+c*yt,a[1]=f*E+p*R+u*K+d*$,a[5]=f*w+p*D+u*F+d*rt,a[9]=f*y+p*B+u*q+d*mt,a[13]=f*T+p*Y+u*k+d*yt,a[2]=v*E+M*R+_*K+h*$,a[6]=v*w+M*D+_*F+h*rt,a[10]=v*y+M*B+_*q+h*mt,a[14]=v*T+M*Y+_*k+h*yt,a[3]=m*E+S*R+g*K+A*$,a[7]=m*w+S*D+g*F+A*rt,a[11]=m*y+S*B+g*q+A*mt,a[15]=m*T+S*Y+g*k+A*yt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],p=t[6],u=t[10],d=t[14],v=t[3],M=t[7],_=t[11],h=t[15],m=l*d-c*u,S=o*d-c*p,g=o*u-l*p,A=r*d-c*f,E=r*u-l*f,w=r*p-o*f;return n*(M*m-_*S+h*g)-i*(v*m-_*A+h*E)+s*(v*S-M*A+h*w)-a*(v*g-M*E+_*w)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return n*(r*f-o*c)-i*(a*f-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=t[9],u=t[10],d=t[11],v=t[12],M=t[13],_=t[14],h=t[15],m=n*o-i*r,S=n*l-s*r,g=n*c-a*r,A=i*l-s*o,E=i*c-a*o,w=s*c-a*l,y=f*M-p*v,T=f*_-u*v,R=f*h-d*v,D=p*_-u*M,B=p*h-d*M,Y=u*h-d*_,K=m*Y-S*B+g*D+A*R-E*T+w*y;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/K;return t[0]=(o*Y-l*B+c*D)*F,t[1]=(s*B-i*Y-a*D)*F,t[2]=(M*w-_*E+h*A)*F,t[3]=(u*E-p*w-d*A)*F,t[4]=(l*R-r*Y-c*T)*F,t[5]=(n*Y-s*R+a*T)*F,t[6]=(_*g-v*w-h*S)*F,t[7]=(f*w-u*g+d*S)*F,t[8]=(r*B-o*R+c*y)*F,t[9]=(i*R-n*B-a*y)*F,t[10]=(v*E-M*g+h*m)*F,t[11]=(p*g-f*E-d*m)*F,t[12]=(o*T-r*D-l*y)*F,t[13]=(n*D-i*T+s*y)*F,t[14]=(M*S-v*A-_*m)*F,t[15]=(f*A-p*S+u*m)*F,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,p=o+o,u=a*c,d=a*f,v=a*p,M=r*f,_=r*p,h=o*p,m=l*c,S=l*f,g=l*p,A=i.x,E=i.y,w=i.z;return s[0]=(1-(M+h))*A,s[1]=(d+g)*A,s[2]=(v-S)*A,s[3]=0,s[4]=(d-g)*E,s[5]=(1-(u+h))*E,s[6]=(_+m)*E,s[7]=0,s[8]=(v+S)*w,s[9]=(_-m)*w,s[10]=(1-(u+M))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=co.set(s[0],s[1],s[2]).length(),o=co.set(s[4],s[5],s[6]).length(),l=co.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Ci.copy(this);let c=1/r,f=1/o,p=1/l;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=f,Ci.elements[5]*=f,Ci.elements[6]*=f,Ci.elements[8]*=p,Ci.elements[9]*=p,Ci.elements[10]*=p,n.setFromRotationMatrix(Ci),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=Ui,l=!1){let c=this.elements,f=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),v,M;if(l)v=a/(r-a),M=r*a/(r-a);else if(o===Ui)v=-(r+a)/(r-a),M=-2*r*a/(r-a);else if(o===Eo)v=-r/(r-a),M=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Ui,l=!1){let c=this.elements,f=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s),v,M;if(l)v=1/(r-a),M=r/(r-a);else if(o===Ui)v=-2/(r-a),M=-(r+a)/(r-a);else if(o===Eo)v=-1/(r-a),M=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};Sf.prototype.isMatrix4=!0;var Oe=Sf,co=new O,Ci=new Oe,FT=new O(0,0,0),VT=new O(1,1,1),da=new O,hh=new O,ti=new O,RS=new Oe,DS=new Ki,Ds=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],p=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ne(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ne(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return RS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(RS,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return DS.setFromEuler(this),this.setFromQuaternion(DS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ds.DEFAULT_ORDER="XYZ";var Co=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},HT=0,US=new O,uo=new Ki,Ms=new Oe,fh=new O,Xl=new O,GT=new O,kT=new Ki,NS=new O(1,0,0),LS=new O(0,1,0),IS=new O(0,0,1),OS={type:"added"},XT={type:"removed"},ho={type:"childadded",child:null},og={type:"childremoved",child:null},Sn=class e extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HT++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new O,n=new Ds,i=new Ki,s=new O(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Ht}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return uo.setFromAxisAngle(t,n),this.quaternion.multiply(uo),this}rotateOnWorldAxis(t,n){return uo.setFromAxisAngle(t,n),this.quaternion.premultiply(uo),this}rotateX(t){return this.rotateOnAxis(NS,t)}rotateY(t){return this.rotateOnAxis(LS,t)}rotateZ(t){return this.rotateOnAxis(IS,t)}translateOnAxis(t,n){return US.copy(t).applyQuaternion(this.quaternion),this.position.add(US.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(NS,t)}translateY(t){return this.translateOnAxis(LS,t)}translateZ(t){return this.translateOnAxis(IS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ms.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?fh.copy(t):fh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ms.lookAt(Xl,fh,this.up):Ms.lookAt(fh,Xl,this.up),this.quaternion.setFromRotationMatrix(Ms),s&&(Ms.extractRotation(s.matrixWorld),uo.setFromRotationMatrix(Ms),this.quaternion.premultiply(uo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(OS),ho.child=t,this.dispatchEvent(ho),ho.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(XT),og.child=t,this.dispatchEvent(og),og.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ms.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ms.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ms),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(OS),ho.child=t,this.dispatchEvent(ho),ho.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xl,t,GT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xl,kT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Sn.DEFAULT_UP=new O(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ni=class extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},WT={type:"move"},Ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let M of t.hand.values()){let _=n.getJointPose(M,i),h=this._getHandJoint(c,M);_!==null&&(h.matrix.fromArray(_.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=_.radius),h.visible=_!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),d=.02,v=.005;c.inputState.pinching&&u>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(WT)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Ni;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},LM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pa={h:0,s:0,l:0},dh={h:0,s:0,l:0};function lg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Zt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=ee.workingColorSpace){return this.r=t,this.g=n,this.b=i,ee.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=ee.workingColorSpace){if(t=r0(t,1),n=ne(n,0,1),i=ne(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=lg(r,a,t+1/3),this.g=lg(r,a,t),this.b=lg(r,a,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,n=fn){function i(a){a!==void 0&&parseFloat(a)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Lt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=fn){let i=LM[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}copyLinearToSRGB(t){return this.r=bo(t.r),this.g=bo(t.g),this.b=bo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return ee.workingToColorSpace(Tn.copy(this),t),Math.round(ne(Tn.r*255,0,255))*65536+Math.round(ne(Tn.g*255,0,255))*256+Math.round(ne(Tn.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ee.workingColorSpace){ee.workingToColorSpace(Tn.copy(this),n);let i=Tn.r,s=Tn.g,a=Tn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=f<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=ee.workingColorSpace){return ee.workingToColorSpace(Tn.copy(this),n),t.r=Tn.r,t.g=Tn.g,t.b=Tn.b,t}getStyle(t=fn){ee.workingToColorSpace(Tn.copy(this),t);let n=Tn.r,i=Tn.g,s=Tn.b;return t!==fn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(pa),this.setHSL(pa.h+t,pa.s+n,pa.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(pa),t.getHSL(dh);let i=Jl(pa.h,dh.h,n),s=Jl(pa.s,dh.s,n),a=Jl(pa.l,dh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new Zt;Zt.NAMES=LM;var ec=class e{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=n,this.far=i}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},nc=class extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ds,this.environmentIntensity=1,this.environmentRotation=new Ds,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},Ri=new O,bs=new O,cg=new O,Es=new O,fo=new O,po=new O,PS=new O,ug=new O,hg=new O,fg=new O,dg=new ze,pg=new ze,mg=new ze,ws=class e{constructor(t=new O,n=new O,i=new O){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Ri.subVectors(t,n),s.cross(Ri);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Ri.subVectors(s,n),bs.subVectors(i,n),cg.subVectors(t,n);let r=Ri.dot(Ri),o=Ri.dot(bs),l=Ri.dot(cg),c=bs.dot(bs),f=bs.dot(cg),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,d=(c*l-o*f)*u,v=(r*f-o*l)*u;return a.set(1-d-v,v,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Es)===null?!1:Es.x>=0&&Es.y>=0&&Es.x+Es.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Es)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Es.x),l.addScaledVector(r,Es.y),l.addScaledVector(o,Es.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return dg.setScalar(0),pg.setScalar(0),mg.setScalar(0),dg.fromBufferAttribute(t,n),pg.fromBufferAttribute(t,i),mg.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(dg,a.x),r.addScaledVector(pg,a.y),r.addScaledVector(mg,a.z),r}static isFrontFacing(t,n,i,s){return Ri.subVectors(i,n),bs.subVectors(t,n),Ri.cross(bs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),bs.subVectors(this.a,this.b),Ri.cross(bs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;fo.subVectors(s,i),po.subVectors(a,i),ug.subVectors(t,i);let l=fo.dot(ug),c=po.dot(ug);if(l<=0&&c<=0)return n.copy(i);hg.subVectors(t,s);let f=fo.dot(hg),p=po.dot(hg);if(f>=0&&p<=f)return n.copy(s);let u=l*p-f*c;if(u<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(fo,r);fg.subVectors(t,a);let d=fo.dot(fg),v=po.dot(fg);if(v>=0&&d<=v)return n.copy(a);let M=d*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(po,o);let _=f*v-d*p;if(_<=0&&p-f>=0&&d-v>=0)return PS.subVectors(a,s),o=(p-f)/(p-f+(d-v)),n.copy(s).addScaledVector(PS,o);let h=1/(_+M+u);return r=M*h,o=u*h,n.copy(i).addScaledVector(fo,r).addScaledVector(po,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ya=class{constructor(t=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Di.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Di.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Di.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Di):Di.fromBufferAttribute(a,r),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ph.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ph.copy(i.boundingBox)),ph.applyMatrix4(t.matrixWorld),this.union(ph)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wl),mh.subVectors(this.max,Wl),mo.subVectors(t.a,Wl),go.subVectors(t.b,Wl),_o.subVectors(t.c,Wl),ma.subVectors(go,mo),ga.subVectors(_o,go),Qa.subVectors(mo,_o);let n=[0,-ma.z,ma.y,0,-ga.z,ga.y,0,-Qa.z,Qa.y,ma.z,0,-ma.x,ga.z,0,-ga.x,Qa.z,0,-Qa.x,-ma.y,ma.x,0,-ga.y,ga.x,0,-Qa.y,Qa.x,0];return!gg(n,mo,go,_o,mh)||(n=[1,0,0,0,1,0,0,0,1],!gg(n,mo,go,_o,mh))?!1:(gh.crossVectors(ma,ga),n=[gh.x,gh.y,gh.z],gg(n,mo,go,_o,mh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ts),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ts=[new O,new O,new O,new O,new O,new O,new O,new O],Di=new O,ph=new ya,mo=new O,go=new O,_o=new O,ma=new O,ga=new O,Qa=new O,Wl=new O,mh=new O,gh=new O,ja=new O;function gg(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){ja.fromArray(e,a);let o=s.x*Math.abs(ja.x)+s.y*Math.abs(ja.y)+s.z*Math.abs(ja.z),l=t.dot(ja),c=n.dot(ja),f=i.dot(ja);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var nn=new O,_h=new Yt,qT=0,ni=class extends Ji{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Ng,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_h.fromBufferAttribute(this,n),_h.applyMatrix3(t),this.setXY(n,_h.x,_h.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix3(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=So(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Un(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=So(n,this.array)),n}setX(t,n){return this.normalized&&(n=Un(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=So(n,this.array)),n}setY(t,n){return this.normalized&&(n=Un(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=So(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Un(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=So(n,this.array)),n}setW(t,n){return this.normalized&&(n=Un(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Un(n,this.array),i=Un(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Un(n,this.array),i=Un(i,this.array),s=Un(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Un(n,this.array),i=Un(i,this.array),s=Un(s,this.array),a=Un(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ng&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var ic=class extends ni{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var sc=class extends ni{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Je=class extends ni{constructor(t,n,i){super(new Float32Array(t),n,i)}},YT=new ya,ql=new O,_g=new O,ar=class{constructor(t=new O,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):YT.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ql.subVectors(t,this.center);let n=ql.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(ql,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_g.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ql.copy(t.center).add(_g)),this.expandByPoint(ql.copy(t.center).sub(_g))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ZT=0,yi=new Oe,vg=new Sn,vo=new O,ei=new ya,Yl=new ya,hn=new O,Hn=class e extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vT(t)?sc:ic)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Ht().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,n,i){return yi.makeTranslation(t,n,i),this.applyMatrix4(yi),this}scale(t,n,i){return yi.makeScale(t,n,i),this.applyMatrix4(yi),this}lookAt(t){return vg.lookAt(t),vg.updateMatrix(),this.applyMatrix4(vg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Je(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ya);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];ei.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Yl.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(ei.min,Yl.min),ei.expandByPoint(hn),hn.addVectors(ei.max,Yl.max),ei.expandByPoint(hn)):(ei.expandByPoint(Yl.min),ei.expandByPoint(Yl.max))}ei.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)hn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(hn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)hn.fromBufferAttribute(o,c),l&&(vo.fromBufferAttribute(t,c),hn.add(vo)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new ni(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new O,l[y]=new O;let c=new O,f=new O,p=new O,u=new Yt,d=new Yt,v=new Yt,M=new O,_=new O;function h(y,T,R){c.fromBufferAttribute(i,y),f.fromBufferAttribute(i,T),p.fromBufferAttribute(i,R),u.fromBufferAttribute(a,y),d.fromBufferAttribute(a,T),v.fromBufferAttribute(a,R),f.sub(c),p.sub(c),d.sub(u),v.sub(u);let D=1/(d.x*v.y-v.x*d.y);isFinite(D)&&(M.copy(f).multiplyScalar(v.y).addScaledVector(p,-d.y).multiplyScalar(D),_.copy(p).multiplyScalar(d.x).addScaledVector(f,-v.x).multiplyScalar(D),o[y].add(M),o[T].add(M),o[R].add(M),l[y].add(_),l[T].add(_),l[R].add(_))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let y=0,T=m.length;y<T;++y){let R=m[y],D=R.start,B=R.count;for(let Y=D,K=D+B;Y<K;Y+=3)h(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}let S=new O,g=new O,A=new O,E=new O;function w(y){A.fromBufferAttribute(s,y),E.copy(A);let T=o[y];S.copy(T),S.sub(A.multiplyScalar(A.dot(T))).normalize(),g.crossVectors(E,T);let D=g.dot(l[y])<0?-1:1;r.setXYZW(y,S.x,S.y,S.z,D)}for(let y=0,T=m.length;y<T;++y){let R=m[y],D=R.start,B=R.count;for(let Y=D,K=D+B;Y<K;Y+=3)w(t.getX(Y+0)),w(t.getX(Y+1)),w(t.getX(Y+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ni(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new O,a=new O,r=new O,o=new O,l=new O,c=new O,f=new O,p=new O;if(t)for(let u=0,d=t.count;u<d;u+=3){let v=t.getX(u+0),M=t.getX(u+1),_=t.getX(u+2);s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,M),r.fromBufferAttribute(n,_),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,_),o.add(f),l.add(f),c.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)hn.fromBufferAttribute(t,n),hn.normalize(),t.setXYZ(n,hn.x,hn.y,hn.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f),d=0,v=0;for(let M=0,_=l.length;M<_;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*f;for(let h=0;h<f;h++)u[v++]=c[d++]}return new ni(u,f,p)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,p=c.length;f<p;f++){let u=c[f],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],p=a[c];for(let u=0,d=p.length;u<d;u++)f.push(p[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var JT=0,Us=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JT++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=ir,this.side=Rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=zh,this.blendEquation=xa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Lt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Lt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(i.blending=this.blending),this.side!==Rs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bh&&(i.blendSrc=this.blendSrc),this.blendDst!==zh&&(i.blendDst=this.blendDst),this.blendEquation!==xa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ug&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Yt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Yt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var As=new O,xg=new O,vh=new O,_a=new O,yg=new O,xh=new O,Sg=new O,Do=class{constructor(t=new O,n=new O(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,As)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=As.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(As.copy(this.origin).addScaledVector(this.direction,n),As.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){xg.copy(t).add(n).multiplyScalar(.5),vh.copy(n).sub(t).normalize(),_a.copy(this.origin).sub(xg);let a=t.distanceTo(n)*.5,r=-this.direction.dot(vh),o=_a.dot(this.direction),l=-_a.dot(vh),c=_a.lengthSq(),f=Math.abs(1-r*r),p,u,d,v;if(f>0)if(p=r*l-o,u=r*o-l,v=a*f,p>=0)if(u>=-v)if(u<=v){let M=1/f;p*=M,u*=M,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(xg).addScaledVector(vh,u),d}intersectSphere(t,n){As.subVectors(t.center,this.origin);let i=As.dot(this.direction),s=As.dot(As)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(a=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(a=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,As)!==null}intersectTriangle(t,n,i,s,a){yg.subVectors(n,t),xh.subVectors(i,t),Sg.crossVectors(yg,xh);let r=this.direction.dot(Sg),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;_a.subVectors(this.origin,t);let l=o*this.direction.dot(xh.crossVectors(_a,xh));if(l<0)return null;let c=o*this.direction.dot(yg.cross(_a));if(c<0||l+c>r)return null;let f=-o*_a.dot(Sg);return f<0?null:this.at(f/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ns=class extends Us{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ds,this.combine=Gg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},BS=new Oe,$a=new Do,yh=new ar,zS=new O,Sh=new O,Mh=new O,bh=new O,Mg=new O,Eh=new O,FS=new O,Th=new O,Xe=class extends Sn{constructor(t=new Hn,n=new Ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Eh.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],p=a[l];f!==0&&(Mg.fromBufferAttribute(p,t),r?Eh.addScaledVector(Mg,f):Eh.addScaledVector(Mg.sub(n),f))}n.add(Eh)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yh.copy(i.boundingSphere),yh.applyMatrix4(a),$a.copy(t.ray).recast(t.near),!(yh.containsPoint($a.origin)===!1&&($a.intersectSphere(yh,zS)===null||$a.origin.distanceToSquared(zS)>(t.far-t.near)**2))&&(BS.copy(a).invert(),$a.copy(t.ray).applyMatrix4(BS),!(i.boundingBox!==null&&$a.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,$a)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){let _=u[v],h=r[_.materialIndex],m=Math.max(_.start,d.start),S=Math.min(o.count,Math.min(_.start+_.count,d.start+d.count));for(let g=m,A=S;g<A;g+=3){let E=o.getX(g),w=o.getX(g+1),y=o.getX(g+2);s=Ah(this,h,t,i,c,f,p,E,w,y),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=_.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let _=v,h=M;_<h;_+=3){let m=o.getX(_),S=o.getX(_+1),g=o.getX(_+2);s=Ah(this,r,t,i,c,f,p,m,S,g),s&&(s.faceIndex=Math.floor(_/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){let _=u[v],h=r[_.materialIndex],m=Math.max(_.start,d.start),S=Math.min(l.count,Math.min(_.start+_.count,d.start+d.count));for(let g=m,A=S;g<A;g+=3){let E=g,w=g+1,y=g+2;s=Ah(this,h,t,i,c,f,p,E,w,y),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=_.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let _=v,h=M;_<h;_+=3){let m=_,S=_+1,g=_+2;s=Ah(this,r,t,i,c,f,p,m,S,g),s&&(s.faceIndex=Math.floor(_/3),n.push(s))}}}};function KT(e,t,n,i,s,a,r,o){let l;if(t.side===Ln?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Rs,o),l===null)return null;Th.copy(o),Th.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Th);return c<n.near||c>n.far?null:{distance:c,point:Th.clone(),object:e}}function Ah(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Sh),e.getVertexPosition(l,Mh),e.getVertexPosition(c,bh);let f=KT(e,t,n,i,Sh,Mh,bh,FS);if(f){let p=new O;ws.getBarycoord(FS,Sh,Mh,bh,p),s&&(f.uv=ws.getInterpolatedAttribute(s,o,l,c,p,new Yt)),a&&(f.uv1=ws.getInterpolatedAttribute(a,o,l,c,p,new Yt)),r&&(f.normal=ws.getInterpolatedAttribute(r,o,l,c,p,new O),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new O,materialIndex:0};ws.getNormal(Sh,Mh,bh,u.normal),f.face=u,f.barycoord=p}return f}var jh=class extends Nn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=dn,f=dn,p,u){super(null,r,o,l,c,f,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bg=new O,QT=new O,jT=new Ht,Si=class{constructor(t=new O(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=bg.subVectors(i,n).cross(QT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(bg),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||jT.getNormalMatrix(t),s=this.coplanarPoint(bg).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},tr=new ar,$T=new Yt(.5,.5),wh=new O,Uo=class{constructor(t=new Si,n=new Si,i=new Si,s=new Si,a=new Si,r=new Si){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ui,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],p=a[5],u=a[6],d=a[7],v=a[8],M=a[9],_=a[10],h=a[11],m=a[12],S=a[13],g=a[14],A=a[15];if(s[0].setComponents(c-r,d-f,h-v,A-m).normalize(),s[1].setComponents(c+r,d+f,h+v,A+m).normalize(),s[2].setComponents(c+o,d+p,h+M,A+S).normalize(),s[3].setComponents(c-o,d-p,h-M,A-S).normalize(),i)s[4].setComponents(l,u,_,g).normalize(),s[5].setComponents(c-l,d-u,h-_,A-g).normalize();else if(s[4].setComponents(c-l,d-u,h-_,A-g).normalize(),n===Ui)s[5].setComponents(c+l,d+u,h+_,A+g).normalize();else if(n===Eo)s[5].setComponents(l,u,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(t){tr.center.set(0,0,0);let n=$T.distanceTo(t.center);return tr.radius=.7071067811865476+n,tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(wh.x=s.normal.x>0?t.max.x:t.min.x,wh.y=s.normal.y>0?t.max.y:t.min.y,wh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var No=class extends Us{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},$h=new O,tf=new O,VS=new Oe,Zl=new Do,Ch=new ar,Eg=new O,HS=new O,ef=class extends Sn{constructor(t=new Hn,n=new No){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[0];for(let s=1,a=n.count;s<a;s++)$h.fromBufferAttribute(n,s-1),tf.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=$h.distanceTo(tf);t.setAttribute("lineDistance",new Je(i,1))}else Lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ch.copy(i.boundingSphere),Ch.applyMatrix4(s),Ch.radius+=a,t.ray.intersectsSphere(Ch)===!1)return;VS.copy(s).invert(),Zl.copy(t.ray).applyMatrix4(VS);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){let d=Math.max(0,r.start),v=Math.min(f.count,r.start+r.count);for(let M=d,_=v-1;M<_;M+=c){let h=f.getX(M),m=f.getX(M+1),S=Rh(this,t,Zl,l,h,m,M);S&&n.push(S)}if(this.isLineLoop){let M=f.getX(v-1),_=f.getX(d),h=Rh(this,t,Zl,l,M,_,v-1);h&&n.push(h)}}else{let d=Math.max(0,r.start),v=Math.min(u.count,r.start+r.count);for(let M=d,_=v-1;M<_;M+=c){let h=Rh(this,t,Zl,l,M,M+1,M);h&&n.push(h)}if(this.isLineLoop){let M=Rh(this,t,Zl,l,v-1,d,v-1);M&&n.push(M)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function Rh(e,t,n,i,s,a,r){let o=e.geometry.attributes.position;if($h.fromBufferAttribute(o,s),tf.fromBufferAttribute(o,a),n.distanceSqToSegment($h,tf,Eg,HS)>i)return;Eg.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Eg);if(!(c<t.near||c>t.far))return{distance:c,point:HS.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}var GS=new O,kS=new O,ac=class extends ef{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[];for(let s=0,a=n.count;s<a;s+=2)GS.fromBufferAttribute(n,s),kS.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+GS.distanceTo(kS);t.setAttribute("lineDistance",new Je(i,1))}else Lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var rc=class extends Nn{constructor(t=[],n=Ta,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},rr=class extends Nn{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ls=class extends Nn{constructor(t,n,i=Ii,s,a,r,o=dn,l=dn,c,f=Zi,p=1){if(f!==Zi&&f!==wa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},nf=class extends Ls{constructor(t,n=Ii,i=Ta,s,a,r=dn,o=dn,l,c=Zi){let f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},oc=class extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},si=class e extends Hn{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],p=[],u=0,d=0;v("z","y","x",-1,-1,i,n,t,r,a,0),v("z","y","x",1,-1,i,n,-t,r,a,1),v("x","z","y",1,1,t,i,n,s,r,2),v("x","z","y",1,-1,t,i,-n,s,r,3),v("x","y","z",1,-1,t,n,i,s,a,4),v("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(p,2));function v(M,_,h,m,S,g,A,E,w,y,T){let R=g/w,D=A/y,B=g/2,Y=A/2,K=E/2,F=w+1,q=y+1,k=0,$=0,rt=new O;for(let mt=0;mt<q;mt++){let yt=mt*D-Y;for(let gt=0;gt<F;gt++){let ie=gt*R-B;rt[M]=ie*m,rt[_]=yt*S,rt[h]=K,c.push(rt.x,rt.y,rt.z),rt[M]=0,rt[_]=0,rt[h]=E>0?1:-1,f.push(rt.x,rt.y,rt.z),p.push(gt/w),p.push(1-mt/y),k+=1}}for(let mt=0;mt<y;mt++)for(let yt=0;yt<w;yt++){let gt=u+yt+F*mt,ie=u+yt+F*(mt+1),we=u+(yt+1)+F*(mt+1),le=u+(yt+1)+F*mt;l.push(gt,ie,le),l.push(ie,we,le),$+=6}o.addGroup(d,$,T),d+=$,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var sf=class e extends Hn{constructor(t=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:s};let a=[],r=[];o(s),c(i),f(),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(a.slice(),3)),this.setAttribute("uv",new Je(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(m){let S=new O,g=new O,A=new O;for(let E=0;E<n.length;E+=3)d(n[E+0],S),d(n[E+1],g),d(n[E+2],A),l(S,g,A,m)}function l(m,S,g,A){let E=A+1,w=[];for(let y=0;y<=E;y++){w[y]=[];let T=m.clone().lerp(g,y/E),R=S.clone().lerp(g,y/E),D=E-y;for(let B=0;B<=D;B++)B===0&&y===E?w[y][B]=T:w[y][B]=T.clone().lerp(R,B/D)}for(let y=0;y<E;y++)for(let T=0;T<2*(E-y)-1;T++){let R=Math.floor(T/2);T%2===0?(u(w[y][R+1]),u(w[y+1][R]),u(w[y][R])):(u(w[y][R+1]),u(w[y+1][R+1]),u(w[y+1][R]))}}function c(m){let S=new O;for(let g=0;g<a.length;g+=3)S.x=a[g+0],S.y=a[g+1],S.z=a[g+2],S.normalize().multiplyScalar(m),a[g+0]=S.x,a[g+1]=S.y,a[g+2]=S.z}function f(){let m=new O;for(let S=0;S<a.length;S+=3){m.x=a[S+0],m.y=a[S+1],m.z=a[S+2];let g=_(m)/2/Math.PI+.5,A=h(m)/Math.PI+.5;r.push(g,1-A)}v(),p()}function p(){for(let m=0;m<r.length;m+=6){let S=r[m+0],g=r[m+2],A=r[m+4],E=Math.max(S,g,A),w=Math.min(S,g,A);E>.9&&w<.1&&(S<.2&&(r[m+0]+=1),g<.2&&(r[m+2]+=1),A<.2&&(r[m+4]+=1))}}function u(m){a.push(m.x,m.y,m.z)}function d(m,S){let g=m*3;S.x=t[g+0],S.y=t[g+1],S.z=t[g+2]}function v(){let m=new O,S=new O,g=new O,A=new O,E=new Yt,w=new Yt,y=new Yt;for(let T=0,R=0;T<a.length;T+=9,R+=6){m.set(a[T+0],a[T+1],a[T+2]),S.set(a[T+3],a[T+4],a[T+5]),g.set(a[T+6],a[T+7],a[T+8]),E.set(r[R+0],r[R+1]),w.set(r[R+2],r[R+3]),y.set(r[R+4],r[R+5]),A.copy(m).add(S).add(g).divideScalar(3);let D=_(A);M(E,R+0,m,D),M(w,R+2,S,D),M(y,R+4,g,D)}}function M(m,S,g,A){A<0&&m.x===1&&(r[S]=m.x-1),g.x===0&&g.z===0&&(r[S]=A/2/Math.PI+.5)}function _(m){return Math.atan2(m.z,-m.x)}function h(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},lc=class e extends sf{constructor(t=1,n=0){let i=(1+Math.sqrt(5))/2,s=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,t,n),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new e(t.radius,t.detail)}},Dh=new O,Uh=new O,Tg=new O,Nh=new ws,cc=class extends Hn{constructor(t=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:n},t!==null){let s=Math.pow(10,4),a=Math.cos(Mo*n),r=t.getIndex(),o=t.getAttribute("position"),l=r?r.count:o.count,c=[0,0,0],f=["a","b","c"],p=new Array(3),u={},d=[];for(let v=0;v<l;v+=3){r?(c[0]=r.getX(v),c[1]=r.getX(v+1),c[2]=r.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);let{a:M,b:_,c:h}=Nh;if(M.fromBufferAttribute(o,c[0]),_.fromBufferAttribute(o,c[1]),h.fromBufferAttribute(o,c[2]),Nh.getNormal(Tg),p[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,p[1]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,p[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let m=0;m<3;m++){let S=(m+1)%3,g=p[m],A=p[S],E=Nh[f[m]],w=Nh[f[S]],y=`${g}_${A}`,T=`${A}_${g}`;T in u&&u[T]?(Tg.dot(u[T].normal)<=a&&(d.push(E.x,E.y,E.z),d.push(w.x,w.y,w.z)),u[T]=null):y in u||(u[y]={index0:c[m],index1:c[S],normal:Tg.clone()})}}for(let v in u)if(u[v]){let{index0:M,index1:_}=u[v];Dh.fromBufferAttribute(o,M),Uh.fromBufferAttribute(o,_),d.push(Dh.x,Dh.y,Dh.z),d.push(Uh.x,Uh.y,Uh.z)}this.setAttribute("position",new Je(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Sa=class e extends Hn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,p=t/o,u=n/l,d=[],v=[],M=[],_=[];for(let h=0;h<f;h++){let m=h*u-r;for(let S=0;S<c;S++){let g=S*p-a;v.push(g,-m,0),M.push(0,0,1),_.push(S/o),_.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<o;m++){let S=m+c*h,g=m+c*(h+1),A=m+1+c*(h+1),E=m+1+c*h;d.push(S,g,E),d.push(g,A,E)}this.setIndex(d),this.setAttribute("position",new Je(v,3)),this.setAttribute("normal",new Je(M,3)),this.setAttribute("uv",new Je(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},uc=class e extends Hn{constructor(t=.5,n=1,i=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:a,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],f=[],p=t,u=(n-t)/s,d=new O,v=new Yt;for(let M=0;M<=s;M++){for(let _=0;_<=i;_++){let h=a+_/i*r;d.x=p*Math.cos(h),d.y=p*Math.sin(h),l.push(d.x,d.y,d.z),c.push(0,0,1),v.x=(d.x/n+1)/2,v.y=(d.y/n+1)/2,f.push(v.x,v.y)}p+=u}for(let M=0;M<s;M++){let _=M*(i+1);for(let h=0;h<i;h++){let m=h+_,S=m,g=m+i+1,A=m+i+2,E=m+1;o.push(S,g,E),o.push(g,A,E)}}this.setIndex(o),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function cr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(XS(s))s.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(XS(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function wn(e){let t={};for(let n=0;n<e.length;n++){let i=cr(e[n]);for(let s in i)t[s]=i[s]}return t}function XS(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function tA(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function o0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var IM={clone:cr,merge:wn},eA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ai=class extends Us{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eA,this.fragmentShader=nA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cr(t.uniforms),this.uniformsGroups=tA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Zt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Yt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ze().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Oe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},af=class extends ai{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ri=class extends Us{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ds,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var rf=class extends Us{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},of=class extends Us{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Lh(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}var Ma=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},lf=class extends Ma{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cg,endingEnd:Cg}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Rg:a=t,o=2*n-i;break;case Dg:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Rg:r=t,l=2*i-n;break;case Dg:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,v=(i-n)/(s-n),M=v*v,_=M*v,h=-u*_+2*u*M-u*v,m=(1+u)*_+(-1.5-2*u)*M+(-.5+u)*v+1,S=(-1-d)*_+(1.5+d)*M+.5*v,g=d*_-d*M;for(let A=0;A!==o;++A)a[A]=h*r[f+A]+m*r[c+A]+S*r[l+A]+g*r[p+A];return a}},cf=class extends Ma{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),p=1-f;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*f;return a}},uf=class extends Ma{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},hf=class extends Ma{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let v=(i-n)/(s-n),M=1-v;for(let _=0;_!==o;++_)a[_]=r[c+_]*M+r[l+_]*v;return a}let u=o*2,d=t-1;for(let v=0;v!==o;++v){let M=r[c+v],_=r[l+v],h=d*u+v*2,m=p[h],S=p[h+1],g=t*u+v*2,A=f[g],E=f[g+1],w=(i-n)/(s-n),y,T,R,D,B;for(let Y=0;Y<8;Y++){y=w*w,T=y*w,R=1-w,D=R*R,B=D*R;let F=B*n+3*D*w*m+3*R*y*A+T*s-i;if(Math.abs(F)<1e-10)break;let q=3*D*(m-n)+6*R*w*(A-m)+3*y*(s-A);if(Math.abs(q)<1e-10)break;w=w-F/q,w=Math.max(0,Math.min(1,w))}a[v]=B*M+3*D*w*S+3*R*y*E+T*_}return a}},oi=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Lh(n,this.TimeBufferType),this.values=Lh(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Lh(t.times,Array),values:Lh(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new uf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new cf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new lf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new hf(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Kl:n=this.InterpolantFactoryMethodDiscrete;break;case Zh:n=this.InterpolantFactoryMethodLinear;break;case Ph:n=this.InterpolantFactoryMethodSmooth;break;case wg:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Lt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kl;case this.InterpolantFactoryMethodLinear:return Zh;case this.InterpolantFactoryMethodSmooth:return Ph;case this.InterpolantFactoryMethodBezier:return wg}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Pt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Pt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&xT(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Pt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ph,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let v=0;v!==i;++v){let M=n[p+v];if(M!==n[u+v]||M!==n[d+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};oi.prototype.ValueTypeName="";oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=Zh;var ba=class extends oi{constructor(t,n,i){super(t,n,i)}};ba.prototype.ValueTypeName="bool";ba.prototype.ValueBufferType=Array;ba.prototype.DefaultInterpolation=Kl;ba.prototype.InterpolantFactoryMethodLinear=void 0;ba.prototype.InterpolantFactoryMethodSmooth=void 0;var ff=class extends oi{constructor(t,n,i,s){super(t,n,i,s)}};ff.prototype.ValueTypeName="color";var df=class extends oi{constructor(t,n,i,s){super(t,n,i,s)}};df.prototype.ValueTypeName="number";var pf=class extends Ma{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)Ki.slerpFlat(a,0,r,c-o,r,c,l);return a}},hc=class extends oi{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new pf(this.times,this.values,this.getValueSize(),t)}};hc.prototype.ValueTypeName="quaternion";hc.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends oi{constructor(t,n,i){super(t,n,i)}};Ea.prototype.ValueTypeName="string";Ea.prototype.ValueBufferType=Array;Ea.prototype.DefaultInterpolation=Kl;Ea.prototype.InterpolantFactoryMethodLinear=void 0;Ea.prototype.InterpolantFactoryMethodSmooth=void 0;var mf=class extends oi{constructor(t,n,i,s){super(t,n,i,s)}};mf.prototype.ValueTypeName="vector";var gf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){let p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],v=c[p+1];if(d.global&&(d.lastIndex=0),d.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},OM=new gf,_f=class{constructor(t){this.manager=t!==void 0?t:OM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};_f.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lo=class extends Sn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},fc=class extends Lo{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){let n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}},Ag=new Oe,WS=new O,qS=new O,vf=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uo,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;WS.setFromMatrixPosition(t.matrixWorld),n.position.copy(WS),qS.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(qS),n.updateMatrixWorld(),Ag.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ag,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Eo||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ag)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ih=new O,Oh=new Ki,qi=new O,dc=class extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ih,Oh,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ih,Oh,qi.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Ih,Oh,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ih,Oh,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},va=new O,YS=new Yt,ZS=new Yt,xn=class extends dc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Ao*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(va.x,va.y).multiplyScalar(-t/va.z),va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(va.x,va.y).multiplyScalar(-t/va.z)}getViewSize(t,n){return this.getViewBounds(t,YS,ZS),n.subVectors(ZS,YS)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Mo*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Lg=class extends vf{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0}},pc=class extends Lo{constructor(t,n,i=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Lg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}},Io=class extends dc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Ig=class extends vf{constructor(){super(new Io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},mc=class extends Lo{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new Ig}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var xo=-90,yo=1,xf=class extends Sn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(xo,yo,t,n);s.layers=this.layers,this.add(s);let a=new xn(xo,yo,t,n);a.layers=this.layers,this.add(a);let r=new xn(xo,yo,t,n);r.layers=this.layers,this.add(r);let o=new xn(xo,yo,t,n);o.layers=this.layers,this.add(o);let l=new xn(xo,yo,t,n);l.layers=this.layers,this.add(l);let c=new xn(xo,yo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(p,u,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},yf=class extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var l0="\\[\\]\\.:\\/",iA=new RegExp("["+l0+"]","g"),c0="[^"+l0+"]",sA="[^"+l0.replace("\\.","")+"]",aA=/((?:WC+[\/:])*)/.source.replace("WC",c0),rA=/(WCOD+)?/.source.replace("WCOD",sA),oA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",c0),lA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",c0),cA=new RegExp("^"+aA+rA+oA+lA+"$"),uA=["material","materials","bones","map"],Og=class{constructor(t,n,i){let s=i||Ie.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ie=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(iA,"")}static parseTrackName(t){let n=cA.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);uA.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Pt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=Og;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var m3=new Float32Array(1);var JS=new Oe,gc=class{constructor(t,n,i=0,s=1/0){this.ray=new Do(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new Co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Pt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return JS.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(JS),this}intersectObject(t,n=!0,i=[]){return Pg(t,this,i,n),i.sort(KS),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)Pg(t[s],this,i,n);return i.sort(KS),i}};function KS(e,t){return e.distance-t.distance}function Pg(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)Pg(a[r],t,n,!0)}}var m0=class m0{constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};m0.prototype.isMatrix2=!0;var Bg=m0;function u0(e,t,n,i){let s=hA(i);switch(n){case e0:return e*t;case i0:return e*t/s.components*s.byteLength;case Cf:return e*t/s.components*s.byteLength;case Ca:return e*t*2/s.components*s.byteLength;case Rf:return e*t*2/s.components*s.byteLength;case n0:return e*t*3/s.components*s.byteLength;case bi:return e*t*4/s.components*s.byteLength;case Df:return e*t*4/s.components*s.byteLength;case xc:case yc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Sc:case Mc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Nf:case If:return Math.max(e,16)*Math.max(t,8)/4;case Uf:case Lf:return Math.max(e,8)*Math.max(t,8)/2;case Of:case Pf:case zf:case Ff:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Bf:case bc:case Vf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Hf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Gf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case kf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Xf:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Wf:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case qf:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Yf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Zf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Jf:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Kf:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Qf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case jf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case $f:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case td:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ed:case nd:case id:return Math.ceil(e/4)*Math.ceil(t/4)*16;case sd:case ad:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ec:case rd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function hA(e){switch(e){case Gn:case Qg:return{byteLength:1,components:1};case Po:case jg:case ji:return{byteLength:2,components:1};case Af:case wf:return{byteLength:2,components:4};case Ii:case Tf:case Oi:return{byteLength:4,components:1};case $g:case t0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function sb(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function dA(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let f=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,f);else{p.sort((d,v)=>d.start-v.start);let u=0;for(let d=1;d<p.length;d++){let v=p[u],M=p[d];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++u,p[u]=M)}p.length=u+1;for(let d=0,v=p.length;d<v;d++){let M=p[d];e.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var pA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_A=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,bA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,CA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,RA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,DA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,IA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,OA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,PA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,BA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,VA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XA="gl_FragColor = linearToOutputTexel( gl_FragColor );",WA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,YA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ZA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,JA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,QA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$A=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ew=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,rw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ow=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gw=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_w=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ew=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Aw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ww=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Uw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ow=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Xw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ww=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Qw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$w=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,t2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,n2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,s2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,l2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,c2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,u2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,f2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,d2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,p2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,S2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,M2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,b2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,E2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,R2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,L2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,O2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,P2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,F2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,k2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:pA,alphahash_pars_fragment:mA,alphamap_fragment:gA,alphamap_pars_fragment:_A,alphatest_fragment:vA,alphatest_pars_fragment:xA,aomap_fragment:yA,aomap_pars_fragment:SA,batching_pars_vertex:MA,batching_vertex:bA,begin_vertex:EA,beginnormal_vertex:TA,bsdfs:AA,iridescence_fragment:wA,bumpmap_pars_fragment:CA,clipping_planes_fragment:RA,clipping_planes_pars_fragment:DA,clipping_planes_pars_vertex:UA,clipping_planes_vertex:NA,color_fragment:LA,color_pars_fragment:IA,color_pars_vertex:OA,color_vertex:PA,common:BA,cube_uv_reflection_fragment:zA,defaultnormal_vertex:FA,displacementmap_pars_vertex:VA,displacementmap_vertex:HA,emissivemap_fragment:GA,emissivemap_pars_fragment:kA,colorspace_fragment:XA,colorspace_pars_fragment:WA,envmap_fragment:qA,envmap_common_pars_fragment:YA,envmap_pars_fragment:ZA,envmap_pars_vertex:JA,envmap_physical_pars_fragment:rw,envmap_vertex:KA,fog_vertex:QA,fog_pars_vertex:jA,fog_fragment:$A,fog_pars_fragment:tw,gradientmap_pars_fragment:ew,lightmap_pars_fragment:nw,lights_lambert_fragment:iw,lights_lambert_pars_fragment:sw,lights_pars_begin:aw,lights_toon_fragment:ow,lights_toon_pars_fragment:lw,lights_phong_fragment:cw,lights_phong_pars_fragment:uw,lights_physical_fragment:hw,lights_physical_pars_fragment:fw,lights_fragment_begin:dw,lights_fragment_maps:pw,lights_fragment_end:mw,lightprobes_pars_fragment:gw,logdepthbuf_fragment:_w,logdepthbuf_pars_fragment:vw,logdepthbuf_pars_vertex:xw,logdepthbuf_vertex:yw,map_fragment:Sw,map_pars_fragment:Mw,map_particle_fragment:bw,map_particle_pars_fragment:Ew,metalnessmap_fragment:Tw,metalnessmap_pars_fragment:Aw,morphinstance_vertex:ww,morphcolor_vertex:Cw,morphnormal_vertex:Rw,morphtarget_pars_vertex:Dw,morphtarget_vertex:Uw,normal_fragment_begin:Nw,normal_fragment_maps:Lw,normal_pars_fragment:Iw,normal_pars_vertex:Ow,normal_vertex:Pw,normalmap_pars_fragment:Bw,clearcoat_normal_fragment_begin:zw,clearcoat_normal_fragment_maps:Fw,clearcoat_pars_fragment:Vw,iridescence_pars_fragment:Hw,opaque_fragment:Gw,packing:kw,premultiplied_alpha_fragment:Xw,project_vertex:Ww,dithering_fragment:qw,dithering_pars_fragment:Yw,roughnessmap_fragment:Zw,roughnessmap_pars_fragment:Jw,shadowmap_pars_fragment:Kw,shadowmap_pars_vertex:Qw,shadowmap_vertex:jw,shadowmask_pars_fragment:$w,skinbase_vertex:t2,skinning_pars_vertex:e2,skinning_vertex:n2,skinnormal_vertex:i2,specularmap_fragment:s2,specularmap_pars_fragment:a2,tonemapping_fragment:r2,tonemapping_pars_fragment:o2,transmission_fragment:l2,transmission_pars_fragment:c2,uv_pars_fragment:u2,uv_pars_vertex:h2,uv_vertex:f2,worldpos_vertex:d2,background_vert:p2,background_frag:m2,backgroundCube_vert:g2,backgroundCube_frag:_2,cube_vert:v2,cube_frag:x2,depth_vert:y2,depth_frag:S2,distance_vert:M2,distance_frag:b2,equirect_vert:E2,equirect_frag:T2,linedashed_vert:A2,linedashed_frag:w2,meshbasic_vert:C2,meshbasic_frag:R2,meshlambert_vert:D2,meshlambert_frag:U2,meshmatcap_vert:N2,meshmatcap_frag:L2,meshnormal_vert:I2,meshnormal_frag:O2,meshphong_vert:P2,meshphong_frag:B2,meshphysical_vert:z2,meshphysical_frag:F2,meshtoon_vert:V2,meshtoon_frag:H2,points_vert:G2,points_frag:k2,shadow_vert:X2,shadow_frag:W2,sprite_vert:q2,sprite_frag:Y2},vt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},ts={basic:{uniforms:wn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:wn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:wn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:wn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:wn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:wn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:wn([vt.points,vt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:wn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:wn([vt.common,vt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:wn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:wn([vt.sprite,vt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:wn([vt.common,vt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:wn([vt.lights,vt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};ts.physical={uniforms:wn([ts.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var ud={r:0,b:0,g:0},Z2=new Oe,ab=new Ht;ab.set(-1,0,0,0,1,0,0,0,1);function J2(e,t,n,i,s,a){let r=new Zt(0),o=s===!0?0:1,l,c,f=null,p=0,u=null;function d(m){let S=m.isScene===!0?m.background:null;if(S&&S.isTexture){let g=m.backgroundBlurriness>0;S=t.get(S,g)}return S}function v(m){let S=!1,g=d(m);g===null?_(r,o):g&&g.isColor&&(_(g,1),S=!0);let A=e.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(m,S){let g=d(S);g&&(g.isCubeTexture||g.mapping===_c)?(c===void 0&&(c=new Xe(new si(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:cr(ts.backgroundCube.uniforms),vertexShader:ts.backgroundCube.vertexShader,fragmentShader:ts.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Z2.makeRotationFromEuler(S.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ab),c.material.toneMapped=ee.getTransfer(g.colorSpace)!==de,(f!==g||p!==g.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,f=g,p=g.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new Xe(new Sa(2,2),new ai({name:"BackgroundMaterial",uniforms:cr(ts.background.uniforms),vertexShader:ts.background.vertexShader,fragmentShader:ts.background.fragmentShader,side:Rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ee.getTransfer(g.colorSpace)!==de,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||p!==g.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,f=g,p=g.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,S){m.getRGB(ud,o0(e)),n.buffers.color.setClear(ud.r,ud.g,ud.b,S,a)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,S=1){r.set(m),o=S,_(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,_(r,o)},render:v,addToRenderList:M,dispose:h}}function K2(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(D,B,Y,K,F){let q=!1,k=p(D,K,Y,B);a!==k&&(a=k,c(a.object)),q=d(D,K,Y,F),q&&v(D,K,Y,F),F!==null&&t.update(F,e.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,g(D,B,Y,K),F!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return e.createVertexArray()}function c(D){return e.bindVertexArray(D)}function f(D){return e.deleteVertexArray(D)}function p(D,B,Y,K){let F=K.wireframe===!0,q=i[B.id];q===void 0&&(q={},i[B.id]=q);let k=D.isInstancedMesh===!0?D.id:0,$=q[k];$===void 0&&($={},q[k]=$);let rt=$[Y.id];rt===void 0&&(rt={},$[Y.id]=rt);let mt=rt[F];return mt===void 0&&(mt=u(l()),rt[F]=mt),mt}function u(D){let B=[],Y=[],K=[];for(let F=0;F<n;F++)B[F]=0,Y[F]=0,K[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:K,object:D,attributes:{},index:null}}function d(D,B,Y,K){let F=a.attributes,q=B.attributes,k=0,$=Y.getAttributes();for(let rt in $)if($[rt].location>=0){let yt=F[rt],gt=q[rt];if(gt===void 0&&(rt==="instanceMatrix"&&D.instanceMatrix&&(gt=D.instanceMatrix),rt==="instanceColor"&&D.instanceColor&&(gt=D.instanceColor)),yt===void 0||yt.attribute!==gt||gt&&yt.data!==gt.data)return!0;k++}return a.attributesNum!==k||a.index!==K}function v(D,B,Y,K){let F={},q=B.attributes,k=0,$=Y.getAttributes();for(let rt in $)if($[rt].location>=0){let yt=q[rt];yt===void 0&&(rt==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),rt==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor));let gt={};gt.attribute=yt,yt&&yt.data&&(gt.data=yt.data),F[rt]=gt,k++}a.attributes=F,a.attributesNum=k,a.index=K}function M(){let D=a.newAttributes;for(let B=0,Y=D.length;B<Y;B++)D[B]=0}function _(D){h(D,0)}function h(D,B){let Y=a.newAttributes,K=a.enabledAttributes,F=a.attributeDivisors;Y[D]=1,K[D]===0&&(e.enableVertexAttribArray(D),K[D]=1),F[D]!==B&&(e.vertexAttribDivisor(D,B),F[D]=B)}function m(){let D=a.newAttributes,B=a.enabledAttributes;for(let Y=0,K=B.length;Y<K;Y++)B[Y]!==D[Y]&&(e.disableVertexAttribArray(Y),B[Y]=0)}function S(D,B,Y,K,F,q,k){k===!0?e.vertexAttribIPointer(D,B,Y,F,q):e.vertexAttribPointer(D,B,Y,K,F,q)}function g(D,B,Y,K){M();let F=K.attributes,q=Y.getAttributes(),k=B.defaultAttributeValues;for(let $ in q){let rt=q[$];if(rt.location>=0){let mt=F[$];if(mt===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(mt=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(mt=D.instanceColor)),mt!==void 0){let yt=mt.normalized,gt=mt.itemSize,ie=t.get(mt);if(ie===void 0)continue;let we=ie.buffer,le=ie.type,Q=ie.bytesPerElement,tt=le===e.INT||le===e.UNSIGNED_INT||mt.gpuType===Tf;if(mt.isInterleavedBufferAttribute){let et=mt.data,Ut=et.stride,It=mt.offset;if(et.isInstancedInterleavedBuffer){for(let Rt=0;Rt<rt.locationSize;Rt++)h(rt.location+Rt,et.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Rt=0;Rt<rt.locationSize;Rt++)_(rt.location+Rt);e.bindBuffer(e.ARRAY_BUFFER,we);for(let Rt=0;Rt<rt.locationSize;Rt++)S(rt.location+Rt,gt/rt.locationSize,le,yt,Ut*Q,(It+gt/rt.locationSize*Rt)*Q,tt)}else{if(mt.isInstancedBufferAttribute){for(let et=0;et<rt.locationSize;et++)h(rt.location+et,mt.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let et=0;et<rt.locationSize;et++)_(rt.location+et);e.bindBuffer(e.ARRAY_BUFFER,we);for(let et=0;et<rt.locationSize;et++)S(rt.location+et,gt/rt.locationSize,le,yt,gt*Q,gt/rt.locationSize*et*Q,tt)}}else if(k!==void 0){let yt=k[$];if(yt!==void 0)switch(yt.length){case 2:e.vertexAttrib2fv(rt.location,yt);break;case 3:e.vertexAttrib3fv(rt.location,yt);break;case 4:e.vertexAttrib4fv(rt.location,yt);break;default:e.vertexAttrib1fv(rt.location,yt)}}}}m()}function A(){T();for(let D in i){let B=i[D];for(let Y in B){let K=B[Y];for(let F in K){let q=K[F];for(let k in q)f(q[k].object),delete q[k];delete K[F]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;let B=i[D.id];for(let Y in B){let K=B[Y];for(let F in K){let q=K[F];for(let k in q)f(q[k].object),delete q[k];delete K[F]}}delete i[D.id]}function w(D){for(let B in i){let Y=i[B];for(let K in Y){let F=Y[K];if(F[D.id]===void 0)continue;let q=F[D.id];for(let k in q)f(q[k].object),delete q[k];delete F[D.id]}}}function y(D){for(let B in i){let Y=i[B],K=D.isInstancedMesh===!0?D.id:0,F=Y[K];if(F!==void 0){for(let q in F){let k=F[q];for(let $ in k)f(k[$].object),delete k[$];delete F[q]}delete Y[K],Object.keys(Y).length===0&&delete i[B]}}}function T(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:_,disableUnusedAttributes:m}}function Q2(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,f){f!==0&&(e.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function j2(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==bi&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let y=w===ji&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Gn&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Oi&&!y)}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(Lt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),g=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=e.getParameter(e.MAX_SAMPLES),E=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:_,maxAttributes:h,maxVertexUniforms:m,maxVaryings:S,maxFragmentUniforms:g,maxSamples:A,samples:E}}function $2(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Si,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=f(p,u,0)},this.setState=function(p,u,d){let v=p.clippingPlanes,M=p.clipIntersection,_=p.clipShadows,h=e.get(p);if(!s||v===null||v.length===0||a&&!_)a?f(null):c();else{let m=a?0:i,S=m*4,g=h.clippingState||null;l.value=g,g=f(v,u,S,d);for(let A=0;A!==S;++A)g[A]=n[A];h.clippingState=g,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(p,u,d,v){let M=p!==null?p.length:0,_=null;if(M!==0){if(_=l.value,v!==!0||_===null){let h=d+M*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(_===null||_.length<h)&&(_=new Float32Array(h));for(let S=0,g=d;S!==M;++S,g+=4)r.copy(p[S]).applyMatrix4(m,o),r.normal.toArray(_,g),_[g+3]=r.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,_}}var Ra=4,PM=[.125,.215,.35,.446,.526,.582],ur=20,tC=256,Tc=new Io,BM=new Zt,g0=null,_0=0,v0=0,x0=!1,eC=new O,fd=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=eC}=a;g0=this._renderer.getRenderTarget(),_0=this._renderer.getActiveCubeFace(),v0=this._renderer.getActiveMipmapLevel(),x0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=VM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=FM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(g0,_0,v0),this._renderer.xr.enabled=x0,t.scissorTest=!1,Fo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ta||t.mapping===lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),g0=this._renderer.getRenderTarget(),_0=this._renderer.getActiveCubeFace(),v0=this._renderer.getActiveMipmapLevel(),x0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:ji,format:bi,colorSpace:Ql,depthBuffer:!1},s=zM(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zM(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nC(a)),this._blurMaterial=sC(a,t,n),this._ggxMaterial=iC(a,t,n)}return s}_compileMaterial(t){let n=new Xe(new Hn,t);this._renderer.compile(n,Tc)}_sceneToCubeUV(t,n,i,s,a){let l=new xn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(BM),p.toneMapping=Li,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xe(new si,new Ns({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,_=M.material,h=!1,m=t.background;m?m.isColor&&(_.color.copy(m),t.background=null,h=!0):(_.color.copy(BM),h=!0);for(let S=0;S<6;S++){let g=S%3;g===0?(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+f[S],a.y,a.z)):g===1?(l.up.set(0,0,c[S]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+f[S],a.z)):(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+f[S]));let A=this._cubeSize;Fo(s,g*A,S>2?A:0,A,A),p.setRenderTarget(s),h&&p.render(M,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=m}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Ta||t.mapping===lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=VM()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=FM());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Fo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Tc)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),u=0+c*1.25,d=p*u,{_lodMax:v}=this,M=this._sizeLods[i],_=3*M*(i>v-Ra?i-v+Ra:0),h=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=v-n,Fo(a,_,h,3*M,2*M),s.setRenderTarget(a),s.render(o,Tc),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=v-i,Fo(t,_,h,3*M,2*M),s.setRenderTarget(t),s.render(o,Tc)}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");let f=3,p=this._lodMeshes[s];p.material=c;let u=c.uniforms,d=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*ur-1),M=a/v,_=isFinite(a)?1+Math.floor(f*M):ur;_>ur&&Lt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ur}`);let h=[],m=0;for(let w=0;w<ur;++w){let y=w/M,T=Math.exp(-y*y/2);h.push(T),w===0?m+=T:w<_&&(m+=2*T)}for(let w=0;w<h.length;w++)h[w]=h[w]/m;u.envMap.value=t.texture,u.samples.value=_,u.weights.value=h,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:S}=this;u.dTheta.value=v,u.mipInt.value=S-i;let g=this._sizeLods[s],A=3*g*(s>S-Ra?s-S+Ra:0),E=4*(this._cubeSize-g);Fo(n,A,E,3*g,2*g),l.setRenderTarget(n),l.render(p,Tc)}};function nC(e){let t=[],n=[],i=[],s=e,a=e-Ra+1+PM.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);t.push(o);let l=1/o;r>e-Ra?l=PM[r-e+Ra-1]:r===0&&(l=0),n.push(l);let c=1/(o-2),f=-c,p=1+c,u=[f,f,p,f,p,p,f,f,p,p,f,p],d=6,v=6,M=3,_=2,h=1,m=new Float32Array(M*v*d),S=new Float32Array(_*v*d),g=new Float32Array(h*v*d);for(let E=0;E<d;E++){let w=E%3*2/3-1,y=E>2?0:-1,T=[w,y,0,w+2/3,y,0,w+2/3,y+1,0,w,y,0,w+2/3,y+1,0,w,y+1,0];m.set(T,M*v*E),S.set(u,_*v*E);let R=[E,E,E,E,E,E];g.set(R,h*v*E)}let A=new Hn;A.setAttribute("position",new ni(m,M)),A.setAttribute("uv",new ni(S,_)),A.setAttribute("faceIndex",new ni(g,h)),i.push(new Xe(A,null)),s>Ra&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function zM(e,t,n){let i=new ii(e,t,n);return i.texture.mapping=_c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fo(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function iC(e,t,n){return new ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tC,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:md(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function sC(e,t,n){let i=new Float32Array(ur),s=new O(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function FM(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function VM(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function md(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var dd=class extends ii{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new rc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new si(5,5,5),a=new ai({name:"CubemapFromEquirect",uniforms:cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:Qi});a.uniforms.tEquirect.value=n;let r=new Xe(s,a),o=n.minFilter;return n.minFilter===Aa&&(n.minFilter=yn),new xf(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};function aC(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===Mf||d===bf)if(t.has(u)){let v=t.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let M=new dd(v.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let d=u.mapping,v=d===Mf||d===bf,M=d===Ta||d===lr;if(v||M){let _=n.get(u),h=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new fd(e)),_=v?i.fromEquirectangular(u,_):i.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,n.set(u,_),_.texture;if(_!==void 0)return _.texture;{let m=u.image;return v&&m&&m.height>0||M&&m&&l(m)?(i===null&&(i=new fd(e)),_=v?i.fromEquirectangular(u):i.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,n.set(u,_),u.addEventListener("dispose",f),_.texture):null}}}return u}function o(u,d){return d===Mf?u.mapping=Ta:d===bf&&(u.mapping=lr),u}function l(u){let d=0,v=6;for(let M=0;M<v;M++)u[M]!==void 0&&d++;return d===v}function c(u){let d=u.target;d.removeEventListener("dispose",c);let v=t.get(d);v!==void 0&&(t.delete(d),v.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let v=n.get(d);v!==void 0&&(n.delete(d),v.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function rC(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&nr("WebGLRenderer: "+i+" extension not supported."),s}}}function oC(e,t,n,i){let s={},a=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",r),delete s[u.id];let d=a.get(u);d&&(t.remove(d),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){let u=[],d=p.index,v=p.attributes.position,M=0;if(v===void 0)return;if(d!==null){let m=d.array;M=d.version;for(let S=0,g=m.length;S<g;S+=3){let A=m[S+0],E=m[S+1],w=m[S+2];u.push(A,E,E,w,w,A)}}else{let m=v.array;M=v.version;for(let S=0,g=m.length/3-1;S<g;S+=3){let A=S+0,E=S+1,w=S+2;u.push(A,E,E,w,w,A)}}let _=new(v.count>=65535?sc:ic)(u,1);_.version=M;let h=a.get(p);h&&t.remove(h),a.set(p,_)}function f(p){let u=a.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function lC(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,a,p*r,d),n.update(u,i,d))}function f(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let M=0;for(let _=0;_<d;_++)M+=u[_];n.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function cC(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Pt("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function uC(e,t,n){let i=new WeakMap,s=new ze;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==p){let T=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],S=0;d===!0&&(S=1),v===!0&&(S=2),M===!0&&(S=3);let g=o.attributes.position.count*S,A=1;g>t.maxTextureSize&&(A=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);let E=new Float32Array(g*A*4*p),w=new tc(E,g,A,p);w.type=Oi,w.needsUpdate=!0;let y=S*4;for(let R=0;R<p;R++){let D=_[R],B=h[R],Y=m[R],K=g*A*4*R;for(let F=0;F<D.count;F++){let q=F*y;d===!0&&(s.fromBufferAttribute(D,F),E[K+q+0]=s.x,E[K+q+1]=s.y,E[K+q+2]=s.z,E[K+q+3]=0),v===!0&&(s.fromBufferAttribute(B,F),E[K+q+4]=s.x,E[K+q+5]=s.y,E[K+q+6]=s.z,E[K+q+7]=0),M===!0&&(s.fromBufferAttribute(Y,F),E[K+q+8]=s.x,E[K+q+9]=s.y,E[K+q+10]=s.z,E[K+q+11]=Y.itemSize===4?s.w:1)}}u={count:p,texture:w,size:new Yt(g,A)},i.set(o,u),o.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function hC(e,t,n,i,s){let a=new WeakMap;function r(c){let f=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==f&&(t.update(u),a.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==f&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==f&&(d.update(),a.set(d,f))}return u}function o(){a=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:r,dispose:o}}var fC={[kg]:"LINEAR_TONE_MAPPING",[Xg]:"REINHARD_TONE_MAPPING",[Wg]:"CINEON_TONE_MAPPING",[qg]:"ACES_FILMIC_TONE_MAPPING",[Zg]:"AGX_TONE_MAPPING",[Jg]:"NEUTRAL_TONE_MAPPING",[Yg]:"CUSTOM_TONE_MAPPING"};function dC(e,t,n,i,s,a){let r=new ii(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,depthTexture:s?new Ls(t,n):void 0}),o=new ii(t,n,{type:ji,depthBuffer:!1,stencilBuffer:!1}),l=new Hn;l.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Je([0,2,0,0,2,0],2));let c=new af({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Xe(l,c),p=new Io(-1,1,1,-1,0,1),u=null,d=null,v=!1,M,_=null,h=[],m=!1;this.setSize=function(S,g){r.setSize(S,g),o.setSize(S,g);for(let A=0;A<h.length;A++){let E=h[A];E.setSize&&E.setSize(S,g)}},this.setEffects=function(S){h=S,m=h.length>0&&h[0].isRenderPass===!0;let g=r.width,A=r.height;for(let E=0;E<h.length;E++){let w=h[E];w.setSize&&w.setSize(g,A)}},this.begin=function(S,g){if(v||S.toneMapping===Li&&h.length===0)return!1;if(_=g,g!==null){let A=g.width,E=g.height;(r.width!==A||r.height!==E)&&this.setSize(A,E)}return m===!1&&S.setRenderTarget(r),M=S.toneMapping,S.toneMapping=Li,!0},this.hasRenderPass=function(){return m},this.end=function(S,g){S.toneMapping=M,v=!0;let A=r,E=o;for(let w=0;w<h.length;w++){let y=h[w];if(y.enabled!==!1&&(y.render(S,E,A,g),y.needsSwap!==!1)){let T=A;A=E,E=T}}if(u!==S.outputColorSpace||d!==S.toneMapping){u=S.outputColorSpace,d=S.toneMapping,c.defines={},ee.getTransfer(u)===de&&(c.defines.SRGB_TRANSFER="");let w=fC[d];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,S.setRenderTarget(_),S.render(f,p),_=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),c.dispose()}}var rb=new Nn,M0=new Ls(1,1),ob=new tc,lb=new Qh,cb=new rc,HM=[],GM=[],kM=new Float32Array(16),XM=new Float32Array(9),WM=new Float32Array(4);function Ho(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=HM[s];if(a===void 0&&(a=new Float32Array(s),HM[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function rn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function on(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function gd(e,t){let n=GM[t];n===void 0&&(n=new Int32Array(t),GM[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function pC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function mC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(rn(n,t))return;e.uniform2fv(this.addr,t),on(n,t)}}function gC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(rn(n,t))return;e.uniform3fv(this.addr,t),on(n,t)}}function _C(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(rn(n,t))return;e.uniform4fv(this.addr,t),on(n,t)}}function vC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(rn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),on(n,t)}else{if(rn(n,i))return;WM.set(i),e.uniformMatrix2fv(this.addr,!1,WM),on(n,i)}}function xC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(rn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),on(n,t)}else{if(rn(n,i))return;XM.set(i),e.uniformMatrix3fv(this.addr,!1,XM),on(n,i)}}function yC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(rn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),on(n,t)}else{if(rn(n,i))return;kM.set(i),e.uniformMatrix4fv(this.addr,!1,kM),on(n,i)}}function SC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function MC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(rn(n,t))return;e.uniform2iv(this.addr,t),on(n,t)}}function bC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(rn(n,t))return;e.uniform3iv(this.addr,t),on(n,t)}}function EC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(rn(n,t))return;e.uniform4iv(this.addr,t),on(n,t)}}function TC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function AC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(rn(n,t))return;e.uniform2uiv(this.addr,t),on(n,t)}}function wC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(rn(n,t))return;e.uniform3uiv(this.addr,t),on(n,t)}}function CC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(rn(n,t))return;e.uniform4uiv(this.addr,t),on(n,t)}}function RC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(M0.compareFunction=n.isReversedDepthBuffer()?cd:ld,a=M0):a=rb,n.setTexture2D(t||a,s)}function DC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||lb,s)}function UC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||cb,s)}function NC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||ob,s)}function LC(e){switch(e){case 5126:return pC;case 35664:return mC;case 35665:return gC;case 35666:return _C;case 35674:return vC;case 35675:return xC;case 35676:return yC;case 5124:case 35670:return SC;case 35667:case 35671:return MC;case 35668:case 35672:return bC;case 35669:case 35673:return EC;case 5125:return TC;case 36294:return AC;case 36295:return wC;case 36296:return CC;case 35678:case 36198:case 36298:case 36306:case 35682:return RC;case 35679:case 36299:case 36307:return DC;case 35680:case 36300:case 36308:case 36293:return UC;case 36289:case 36303:case 36311:case 36292:return NC}}function IC(e,t){e.uniform1fv(this.addr,t)}function OC(e,t){let n=Ho(t,this.size,2);e.uniform2fv(this.addr,n)}function PC(e,t){let n=Ho(t,this.size,3);e.uniform3fv(this.addr,n)}function BC(e,t){let n=Ho(t,this.size,4);e.uniform4fv(this.addr,n)}function zC(e,t){let n=Ho(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function FC(e,t){let n=Ho(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function VC(e,t){let n=Ho(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function HC(e,t){e.uniform1iv(this.addr,t)}function GC(e,t){e.uniform2iv(this.addr,t)}function kC(e,t){e.uniform3iv(this.addr,t)}function XC(e,t){e.uniform4iv(this.addr,t)}function WC(e,t){e.uniform1uiv(this.addr,t)}function qC(e,t){e.uniform2uiv(this.addr,t)}function YC(e,t){e.uniform3uiv(this.addr,t)}function ZC(e,t){e.uniform4uiv(this.addr,t)}function JC(e,t,n){let i=this.cache,s=t.length,a=gd(n,s);rn(i,a)||(e.uniform1iv(this.addr,a),on(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=M0:r=rb;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function KC(e,t,n){let i=this.cache,s=t.length,a=gd(n,s);rn(i,a)||(e.uniform1iv(this.addr,a),on(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||lb,a[r])}function QC(e,t,n){let i=this.cache,s=t.length,a=gd(n,s);rn(i,a)||(e.uniform1iv(this.addr,a),on(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||cb,a[r])}function jC(e,t,n){let i=this.cache,s=t.length,a=gd(n,s);rn(i,a)||(e.uniform1iv(this.addr,a),on(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||ob,a[r])}function $C(e){switch(e){case 5126:return IC;case 35664:return OC;case 35665:return PC;case 35666:return BC;case 35674:return zC;case 35675:return FC;case 35676:return VC;case 5124:case 35670:return HC;case 35667:case 35671:return GC;case 35668:case 35672:return kC;case 35669:case 35673:return XC;case 5125:return WC;case 36294:return qC;case 36295:return YC;case 36296:return ZC;case 35678:case 36198:case 36298:case 36306:case 35682:return JC;case 35679:case 36299:case 36307:return KC;case 35680:case 36300:case 36308:case 36293:return QC;case 36289:case 36303:case 36311:case 36292:return jC}}var b0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=LC(n.type)}},E0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=$C(n.type)}},T0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},y0=/(\w+)(\])?(\[|\.)?/g;function qM(e,t){e.seq.push(t),e.map[t.id]=t}function tR(e,t,n){let i=e.name,s=i.length;for(y0.lastIndex=0;;){let a=y0.exec(i),r=y0.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){qM(n,c===void 0?new b0(o,e,t):new E0(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new T0(o),qM(n,p)),n=p}}}var Vo=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);tR(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function YM(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var eR=37297,nR=0;function iR(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var ZM=new Ht;function sR(e){ee._getMatrix(ZM,ee.workingColorSpace,e);let t=`mat3( ${ZM.elements.map(n=>n.toFixed(4))} )`;switch(ee.getTransfer(e)){case jl:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function JM(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+iR(e.getShaderSource(t),o)}else return a}function aR(e,t){let n=sR(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var rR={[kg]:"Linear",[Xg]:"Reinhard",[Wg]:"Cineon",[qg]:"ACESFilmic",[Zg]:"AgX",[Jg]:"Neutral",[Yg]:"Custom"};function oR(e,t){let n=rR[t];return n===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var hd=new O;function lR(){ee.getLuminanceCoefficients(hd);let e=hd.x.toFixed(4),t=hd.y.toFixed(4),n=hd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cR(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wc).join(`
`)}function uR(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function hR(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function wc(e){return e!==""}function KM(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function QM(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var fR=/^[ \t]*#include +<([\w\d./]+)>/gm;function A0(e){return e.replace(fR,pR)}var dR=new Map;function pR(e,t){let n=Jt[t];if(n===void 0){let i=dR.get(t);if(i!==void 0)n=Jt[i],Lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return A0(n)}var mR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jM(e){return e.replace(mR,gR)}function gR(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function $M(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var _R={[or]:"SHADOWMAP_TYPE_PCF",[Oo]:"SHADOWMAP_TYPE_VSM"};function vR(e){return _R[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xR={[Ta]:"ENVMAP_TYPE_CUBE",[lr]:"ENVMAP_TYPE_CUBE",[_c]:"ENVMAP_TYPE_CUBE_UV"};function yR(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":xR[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var SR={[lr]:"ENVMAP_MODE_REFRACTION"};function MR(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":SR[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var bR={[Gg]:"ENVMAP_BLENDING_MULTIPLY",[vM]:"ENVMAP_BLENDING_MIX",[xM]:"ENVMAP_BLENDING_ADD"};function ER(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":bR[e.combine]||"ENVMAP_BLENDING_NONE"}function TR(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function AR(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=vR(n),c=yR(n),f=MR(n),p=ER(n),u=TR(n),d=cR(n),v=uR(a),M=s.createProgram(),_,h,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(wc).join(`
`),_.length>0&&(_+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(wc).join(`
`),h.length>0&&(h+=`
`)):(_=[$M(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wc).join(`
`),h=[$M(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Li?"#define TONE_MAPPING":"",n.toneMapping!==Li?Jt.tonemapping_pars_fragment:"",n.toneMapping!==Li?oR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,aR("linearToOutputTexel",n.outputColorSpace),lR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wc).join(`
`)),r=A0(r),r=KM(r,n),r=QM(r,n),o=A0(o),o=KM(o,n),o=QM(o,n),r=jM(r),o=jM(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,h=["#define varying in",n.glslVersion===s0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===s0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let S=m+_+r,g=m+h+o,A=YM(s,s.VERTEX_SHADER,S),E=YM(s,s.FRAGMENT_SHADER,g);s.attachShader(M,A),s.attachShader(M,E),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(D){if(e.debug.checkShaderErrors){let B=s.getProgramInfoLog(M)||"",Y=s.getShaderInfoLog(A)||"",K=s.getShaderInfoLog(E)||"",F=B.trim(),q=Y.trim(),k=K.trim(),$=!0,rt=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if($=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,M,A,E);else{let mt=JM(s,A,"vertex"),yt=JM(s,E,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+mt+`
`+yt)}else F!==""?Lt("WebGLProgram: Program Info Log:",F):(q===""||k==="")&&(rt=!1);rt&&(D.diagnostics={runnable:$,programLog:F,vertexShader:{log:q,prefix:_},fragmentShader:{log:k,prefix:h}})}s.deleteShader(A),s.deleteShader(E),y=new Vo(s,M),T=hR(s,M)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,eR)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nR++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=E,this}var wR=0,w0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new C0(t),n.set(t,i)),i}},C0=class{constructor(t){this.id=wR++,this.code=t,this.usedTimes=0}};function CR(e){return e===Ca||e===bc||e===Ec}function RR(e,t,n,i,s,a){let r=new Co,o=new w0,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function M(y,T,R,D,B,Y){let K=D.fog,F=B.geometry,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,$=t.get(y.envMap||q,k),rt=$&&$.mapping===_c?$.image.height:null,mt=d[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&Lt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let yt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,gt=yt!==void 0?yt.length:0,ie=0;F.morphAttributes.position!==void 0&&(ie=1),F.morphAttributes.normal!==void 0&&(ie=2),F.morphAttributes.color!==void 0&&(ie=3);let we,le,Q,tt;if(mt){let P=ts[mt];we=P.vertexShader,le=P.fragmentShader}else{we=y.vertexShader,le=y.fragmentShader;let P=o.getVertexShaderStage(y),it=o.getFragmentShaderStage(y);o.update(y,P,it),Q=P.id,tt=it.id}let et=e.getRenderTarget(),Ut=e.state.buffers.depth.getReversed(),It=B.isInstancedMesh===!0,Rt=B.isBatchedMesh===!0,Ee=!!y.map,Bt=!!y.matcap,se=!!$,Xt=!!y.aoMap,Vt=!!y.lightMap,ce=!!y.bumpMap&&y.wireframe===!1,Fe=!!y.normalMap,ye=!!y.displacementMap,ge=!!y.emissiveMap,Qt=!!y.metalnessMap,Ce=!!y.roughnessMap,U=y.anisotropy>0,re=y.clearcoat>0,oe=y.dispersion>0,C=y.iridescence>0,x=y.sheen>0,L=y.transmission>0,z=U&&!!y.anisotropyMap,X=re&&!!y.clearcoatMap,lt=re&&!!y.clearcoatNormalMap,ct=re&&!!y.clearcoatRoughnessMap,W=C&&!!y.iridescenceMap,J=C&&!!y.iridescenceThicknessMap,dt=x&&!!y.sheenColorMap,At=x&&!!y.sheenRoughnessMap,pt=!!y.specularMap,ht=!!y.specularColorMap,wt=!!y.specularIntensityMap,Nt=L&&!!y.transmissionMap,Gt=L&&!!y.thicknessMap,N=!!y.gradientMap,ut=!!y.alphaMap,Z=y.alphaTest>0,ft=!!y.alphaHash,_t=!!y.extensions,nt=Li;y.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(nt=e.toneMapping);let Et={shaderID:mt,shaderType:y.type,shaderName:y.name,vertexShader:we,fragmentShader:le,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:tt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Rt,batchingColor:Rt&&B._colorsTexture!==null,instancing:It,instancingColor:It&&B.instanceColor!==null,instancingMorph:It&&B.morphTexture!==null,outputColorSpace:et===null?e.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ee,matcap:Bt,envMap:se,envMapMode:se&&$.mapping,envMapCubeUVHeight:rt,aoMap:Xt,lightMap:Vt,bumpMap:ce,normalMap:Fe,displacementMap:ye,emissiveMap:ge,normalMapObjectSpace:Fe&&y.normalMapType===MM,normalMapTangentSpace:Fe&&y.normalMapType===od,packedNormalMap:Fe&&y.normalMapType===od&&CR(y.normalMap.format),metalnessMap:Qt,roughnessMap:Ce,anisotropy:U,anisotropyMap:z,clearcoat:re,clearcoatMap:X,clearcoatNormalMap:lt,clearcoatRoughnessMap:ct,dispersion:oe,iridescence:C,iridescenceMap:W,iridescenceThicknessMap:J,sheen:x,sheenColorMap:dt,sheenRoughnessMap:At,specularMap:pt,specularColorMap:ht,specularIntensityMap:wt,transmission:L,transmissionMap:Nt,thicknessMap:Gt,gradientMap:N,opaque:y.transparent===!1&&y.blending===ir&&y.alphaToCoverage===!1,alphaMap:ut,alphaTest:Z,alphaHash:ft,combine:y.combine,mapUv:Ee&&v(y.map.channel),aoMapUv:Xt&&v(y.aoMap.channel),lightMapUv:Vt&&v(y.lightMap.channel),bumpMapUv:ce&&v(y.bumpMap.channel),normalMapUv:Fe&&v(y.normalMap.channel),displacementMapUv:ye&&v(y.displacementMap.channel),emissiveMapUv:ge&&v(y.emissiveMap.channel),metalnessMapUv:Qt&&v(y.metalnessMap.channel),roughnessMapUv:Ce&&v(y.roughnessMap.channel),anisotropyMapUv:z&&v(y.anisotropyMap.channel),clearcoatMapUv:X&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:lt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:J&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:At&&v(y.sheenRoughnessMap.channel),specularMapUv:pt&&v(y.specularMap.channel),specularColorMapUv:ht&&v(y.specularColorMap.channel),specularIntensityMapUv:wt&&v(y.specularIntensityMap.channel),transmissionMapUv:Nt&&v(y.transmissionMap.channel),thicknessMapUv:Gt&&v(y.thicknessMap.channel),alphaMapUv:ut&&v(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Fe||U),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!F.attributes.uv&&(Ee||ut),fog:!!K,useFog:y.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&Fe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ut,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:ie,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:nt,decodeVideoTexture:Ee&&y.map.isVideoTexture===!0&&ee.getTransfer(y.map.colorSpace)===de,decodeVideoTextureEmissive:ge&&y.emissiveMap.isVideoTexture===!0&&ee.getTransfer(y.emissiveMap.colorSpace)===de,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mi,flipSided:y.side===Ln,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_t&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&y.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Et.vertexUv1s=l.has(1),Et.vertexUv2s=l.has(2),Et.vertexUv3s=l.has(3),l.clear(),Et}function _(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)T.push(R),T.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(h(T,y),m(T,y),T.push(e.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function h(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function m(y,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),y.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),T.hasPositionAttribute&&r.enable(23),y.push(r.mask)}function S(y){let T=d[y.type],R;if(T){let D=ts[T];R=IM.clone(D.uniforms)}else R=y.uniforms;return R}function g(y,T){let R=f.get(T);return R!==void 0?++R.usedTimes:(R=new AR(e,T,y,s),c.push(R),f.set(T,R)),R}function A(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),f.delete(y.cacheKey),y.destroy()}}function E(y){o.remove(y)}function w(){o.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:S,acquireProgram:g,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:w}}function DR(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function UR(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function tb(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function eb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,v,M,_,h){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:v,materialVariant:r(u),groupOrder:M,renderOrder:u.renderOrder,z:_,group:h},e[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=v,m.materialVariant=r(u),m.groupOrder=M,m.renderOrder=u.renderOrder,m.z=_,m.group=h),t++,m}function l(u,d,v,M,_,h){let m=o(u,d,v,M,_,h);v.transmission>0?i.push(m):v.transparent===!0?s.push(m):n.push(m)}function c(u,d,v,M,_,h){let m=o(u,d,v,M,_,h);v.transmission>0?i.unshift(m):v.transparent===!0?s.unshift(m):n.unshift(m)}function f(u,d,v){n.length>1&&n.sort(u||UR),i.length>1&&i.sort(d||tb),s.length>1&&s.sort(d||tb),v&&(n.reverse(),i.reverse(),s.reverse())}function p(){for(let u=t,d=e.length;u<d;u++){let v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:f}}function NR(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new eb,e.set(i,[r])):s>=a.length?(r=new eb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function LR(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new O,color:new Zt};break;case"SpotLight":n={position:new O,direction:new O,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":n={color:new Zt,position:new O,halfWidth:new O,halfHeight:new O};break}return e[t.id]=n,n}}}function IR(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var OR=0;function PR(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function BR(e){let t=new LR,n=IR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let s=new O,a=new Oe,r=new Oe;function o(c){let f=0,p=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,v=0,M=0,_=0,h=0,m=0,S=0,g=0,A=0,E=0,w=0;c.sort(PR);for(let T=0,R=c.length;T<R;T++){let D=c[T],B=D.color,Y=D.intensity,K=D.distance,F=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ca?F=D.shadow.map.texture:F=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=B.r*Y,p+=B.g*Y,u+=B.b*Y;else if(D.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],Y);w++}else if(D.isDirectionalLight){let q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let k=D.shadow,$=n.get(D);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,i.directionalShadow[d]=$,i.directionalShadowMap[d]=F,i.directionalShadowMatrix[d]=D.shadow.matrix,m++}i.directional[d]=q,d++}else if(D.isSpotLight){let q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(B).multiplyScalar(Y),q.distance=K,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[M]=q;let k=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,k.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[M]=k.matrix,D.castShadow){let $=n.get(D);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,i.spotShadow[M]=$,i.spotShadowMap[M]=F,g++}M++}else if(D.isRectAreaLight){let q=t.get(D);q.color.copy(B).multiplyScalar(Y),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[_]=q,_++}else if(D.isPointLight){let q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){let k=D.shadow,$=n.get(D);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,$.shadowCameraNear=k.camera.near,$.shadowCameraFar=k.camera.far,i.pointShadow[v]=$,i.pointShadowMap[v]=F,i.pointShadowMatrix[v]=D.shadow.matrix,S++}i.point[v]=q,v++}else if(D.isHemisphereLight){let q=t.get(D);q.skyColor.copy(D.color).multiplyScalar(Y),q.groundColor.copy(D.groundColor).multiplyScalar(Y),i.hemi[h]=q,h++}}_>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;let y=i.hash;(y.directionalLength!==d||y.pointLength!==v||y.spotLength!==M||y.rectAreaLength!==_||y.hemiLength!==h||y.numDirectionalShadows!==m||y.numPointShadows!==S||y.numSpotShadows!==g||y.numSpotMaps!==A||y.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=M,i.rectArea.length=_,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=g+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,y.directionalLength=d,y.pointLength=v,y.spotLength=M,y.rectAreaLength=_,y.hemiLength=h,y.numDirectionalShadows=m,y.numPointShadows=S,y.numSpotShadows=g,y.numSpotMaps=A,y.numLightProbes=w,i.version=OR++)}function l(c,f){let p=0,u=0,d=0,v=0,M=0,_=f.matrixWorldInverse;for(let h=0,m=c.length;h<m;h++){let S=c[h];if(S.isDirectionalLight){let g=i.directional[p];g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(_),p++}else if(S.isSpotLight){let g=i.spot[d];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(_),g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(_),d++}else if(S.isRectAreaLight){let g=i.rectArea[v];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(_),r.identity(),a.copy(S.matrixWorld),a.premultiply(_),r.extractRotation(a),g.halfWidth.set(S.width*.5,0,0),g.halfHeight.set(0,S.height*.5,0),g.halfWidth.applyMatrix4(r),g.halfHeight.applyMatrix4(r),v++}else if(S.isPointLight){let g=i.point[u];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(_),u++}else if(S.isHemisphereLight){let g=i.hemi[M];g.direction.setFromMatrixPosition(S.matrixWorld),g.direction.transformDirection(_),M++}}}return{setup:o,setupView:l,state:i}}function nb(e){let t=new BR(e),n=[],i=[],s=[];function a(u){p.camera=u,n.length=0,i.length=0,s.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(n)}function f(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:c,setupLightsView:f,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function zR(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new nb(e),t.set(s,[o])):a>=r.length?(o=new nb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var FR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,HR=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],GR=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],ib=new Oe,Ac=new O,S0=new O;function kR(e,t,n){let i=new Uo,s=new Yt,a=new Yt,r=new ze,o=new rf,l=new of,c={},f=n.maxTextureSize,p={[Rs]:Ln,[Ln]:Rs,[Mi]:Mi},u=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:FR,fragmentShader:VR}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let v=new Hn;v.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Xe(v,u),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=or;let h=this.type;this.render=function(E,w,y){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||E.length===0)return;this.type===$S&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=or);let T=e.getRenderTarget(),R=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),B=e.state;B.setBlending(Qi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let Y=h!==this.type;Y&&w.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(F=>F.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,F=E.length;K<F;K++){let q=E[K],k=q.shadow;if(k===void 0){Lt("WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let $=k.getFrameExtents();s.multiply($),a.copy(k.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/$.x),s.x=a.x*$.x,k.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/$.y),s.y=a.y*$.y,k.mapSize.y=a.y));let rt=e.state.buffers.depth.getReversed();if(k.camera._reversedDepth=rt,k.map===null||Y===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Oo){if(q.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ii(s.x,s.y,{format:Ca,type:ji,minFilter:yn,magFilter:yn,generateMipmaps:!1}),k.map.texture.name=q.name+".shadowMap",k.map.depthTexture=new Ls(s.x,s.y,Oi),k.map.depthTexture.name=q.name+".shadowMapDepth",k.map.depthTexture.format=Zi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=dn,k.map.depthTexture.magFilter=dn}else q.isPointLight?(k.map=new dd(s.x),k.map.depthTexture=new nf(s.x,Ii)):(k.map=new ii(s.x,s.y),k.map.depthTexture=new Ls(s.x,s.y,Ii)),k.map.depthTexture.name=q.name+".shadowMap",k.map.depthTexture.format=Zi,this.type===or?(k.map.depthTexture.compareFunction=rt?cd:ld,k.map.depthTexture.minFilter=yn,k.map.depthTexture.magFilter=yn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=dn,k.map.depthTexture.magFilter=dn);k.camera.updateProjectionMatrix()}let mt=k.map.isWebGLCubeRenderTarget?6:1;for(let yt=0;yt<mt;yt++){if(k.map.isWebGLCubeRenderTarget)e.setRenderTarget(k.map,yt),e.clear();else{yt===0&&(e.setRenderTarget(k.map),e.clear());let gt=k.getViewport(yt);r.set(a.x*gt.x,a.y*gt.y,a.x*gt.z,a.y*gt.w),B.viewport(r)}if(q.isPointLight){let gt=k.camera,ie=k.matrix,we=q.distance||gt.far;we!==gt.far&&(gt.far=we,gt.updateProjectionMatrix()),Ac.setFromMatrixPosition(q.matrixWorld),gt.position.copy(Ac),S0.copy(gt.position),S0.add(HR[yt]),gt.up.copy(GR[yt]),gt.lookAt(S0),gt.updateMatrixWorld(),ie.makeTranslation(-Ac.x,-Ac.y,-Ac.z),ib.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(ib,gt.coordinateSystem,gt.reversedDepth)}else k.updateMatrices(q);i=k.getFrustum(),g(w,y,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===Oo&&m(k,y),k.needsUpdate=!1}h=this.type,_.needsUpdate=!1,e.setRenderTarget(T,R,D)};function m(E,w){let y=t.update(M);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ii(s.x,s.y,{format:Ca,type:ji})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(w,null,y,u,M,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(w,null,y,d,M,null)}function S(E,w,y,T){let R=null,D=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)R=D;else if(R=y.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let B=R.uuid,Y=w.uuid,K=c[B];K===void 0&&(K={},c[B]=K);let F=K[Y];F===void 0&&(F=R.clone(),K[Y]=F,w.addEventListener("dispose",A)),R=F}if(R.visible=w.visible,R.wireframe=w.wireframe,T===Oo?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:p[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let B=e.properties.get(R);B.light=y}return R}function g(E,w,y,T,R){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Oo)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let Y=t.update(E),K=E.material;if(Array.isArray(K)){let F=Y.groups;for(let q=0,k=F.length;q<k;q++){let $=F[q],rt=K[$.materialIndex];if(rt&&rt.visible){let mt=S(E,rt,T,R);E.onBeforeShadow(e,E,w,y,Y,mt,$),e.renderBufferDirect(y,null,Y,mt,E,$),E.onAfterShadow(e,E,w,y,Y,mt,$)}}}else if(K.visible){let F=S(E,K,T,R);E.onBeforeShadow(e,E,w,y,Y,F,null),e.renderBufferDirect(y,null,Y,F,E,null),E.onAfterShadow(e,E,w,y,Y,F,null)}}let B=E.children;for(let Y=0,K=B.length;Y<K;Y++)g(B[Y],w,y,T,R)}function A(E){E.target.removeEventListener("dispose",A);for(let y in c){let T=c[y],R=E.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function XR(e,t){function n(){let N=!1,ut=new ze,Z=null,ft=new ze(0,0,0,0);return{setMask:function(_t){Z!==_t&&!N&&(e.colorMask(_t,_t,_t,_t),Z=_t)},setLocked:function(_t){N=_t},setClear:function(_t,nt,Et,P,it){it===!0&&(_t*=P,nt*=P,Et*=P),ut.set(_t,nt,Et,P),ft.equals(ut)===!1&&(e.clearColor(_t,nt,Et,P),ft.copy(ut))},reset:function(){N=!1,Z=null,ft.set(-1,0,0,0)}}}function i(){let N=!1,ut=!1,Z=null,ft=null,_t=null;return{setReversed:function(nt){if(ut!==nt){let Et=t.get("EXT_clip_control");nt?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),ut=nt;let P=_t;_t=null,this.setClear(P)}},getReversed:function(){return ut},setTest:function(nt){nt?et(e.DEPTH_TEST):Ut(e.DEPTH_TEST)},setMask:function(nt){Z!==nt&&!N&&(e.depthMask(nt),Z=nt)},setFunc:function(nt){if(ut&&(nt=NM[nt]),ft!==nt){switch(nt){case Fh:e.depthFunc(e.NEVER);break;case Vh:e.depthFunc(e.ALWAYS);break;case Hh:e.depthFunc(e.LESS);break;case sr:e.depthFunc(e.LEQUAL);break;case Gh:e.depthFunc(e.EQUAL);break;case kh:e.depthFunc(e.GEQUAL);break;case Xh:e.depthFunc(e.GREATER);break;case Wh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ft=nt}},setLocked:function(nt){N=nt},setClear:function(nt){_t!==nt&&(_t=nt,ut&&(nt=1-nt),e.clearDepth(nt))},reset:function(){N=!1,Z=null,ft=null,_t=null,ut=!1}}}function s(){let N=!1,ut=null,Z=null,ft=null,_t=null,nt=null,Et=null,P=null,it=null;return{setTest:function(ot){N||(ot?et(e.STENCIL_TEST):Ut(e.STENCIL_TEST))},setMask:function(ot){ut!==ot&&!N&&(e.stencilMask(ot),ut=ot)},setFunc:function(ot,zt,Ot){(Z!==ot||ft!==zt||_t!==Ot)&&(e.stencilFunc(ot,zt,Ot),Z=ot,ft=zt,_t=Ot)},setOp:function(ot,zt,Ot){(nt!==ot||Et!==zt||P!==Ot)&&(e.stencilOp(ot,zt,Ot),nt=ot,Et=zt,P=Ot)},setLocked:function(ot){N=ot},setClear:function(ot){it!==ot&&(e.clearStencil(ot),it=ot)},reset:function(){N=!1,ut=null,Z=null,ft=null,_t=null,nt=null,Et=null,P=null,it=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,f={},p={},u={},d=new WeakMap,v=[],M=null,_=!1,h=null,m=null,S=null,g=null,A=null,E=null,w=null,y=new Zt(0,0,0),T=0,R=!1,D=null,B=null,Y=null,K=null,F=null,q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,$=0,rt=e.getParameter(e.VERSION);rt.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(rt)[1]),k=$>=1):rt.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),k=$>=2);let mt=null,yt={},gt=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),we=new ze().fromArray(gt),le=new ze().fromArray(ie);function Q(N,ut,Z,ft){let _t=new Uint8Array(4),nt=e.createTexture();e.bindTexture(N,nt),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Et=0;Et<Z;Et++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(ut,0,e.RGBA,1,1,ft,0,e.RGBA,e.UNSIGNED_BYTE,_t):e.texImage2D(ut+Et,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,_t);return nt}let tt={};tt[e.TEXTURE_2D]=Q(e.TEXTURE_2D,e.TEXTURE_2D,1),tt[e.TEXTURE_CUBE_MAP]=Q(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[e.TEXTURE_2D_ARRAY]=Q(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),tt[e.TEXTURE_3D]=Q(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),et(e.DEPTH_TEST),r.setFunc(sr),ce(!1),Fe(zg),et(e.CULL_FACE),Xt(Qi);function et(N){f[N]!==!0&&(e.enable(N),f[N]=!0)}function Ut(N){f[N]!==!1&&(e.disable(N),f[N]=!1)}function It(N,ut){return u[N]!==ut?(e.bindFramebuffer(N,ut),u[N]=ut,N===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ut),N===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ut),!0):!1}function Rt(N,ut){let Z=v,ft=!1;if(N){Z=d.get(ut),Z===void 0&&(Z=[],d.set(ut,Z));let _t=N.textures;if(Z.length!==_t.length||Z[0]!==e.COLOR_ATTACHMENT0){for(let nt=0,Et=_t.length;nt<Et;nt++)Z[nt]=e.COLOR_ATTACHMENT0+nt;Z.length=_t.length,ft=!0}}else Z[0]!==e.BACK&&(Z[0]=e.BACK,ft=!0);ft&&e.drawBuffers(Z)}function Ee(N){return M!==N?(e.useProgram(N),M=N,!0):!1}let Bt={[xa]:e.FUNC_ADD,[eM]:e.FUNC_SUBTRACT,[nM]:e.FUNC_REVERSE_SUBTRACT};Bt[iM]=e.MIN,Bt[sM]=e.MAX;let se={[aM]:e.ZERO,[rM]:e.ONE,[oM]:e.SRC_COLOR,[Bh]:e.SRC_ALPHA,[dM]:e.SRC_ALPHA_SATURATE,[hM]:e.DST_COLOR,[cM]:e.DST_ALPHA,[lM]:e.ONE_MINUS_SRC_COLOR,[zh]:e.ONE_MINUS_SRC_ALPHA,[fM]:e.ONE_MINUS_DST_COLOR,[uM]:e.ONE_MINUS_DST_ALPHA,[pM]:e.CONSTANT_COLOR,[mM]:e.ONE_MINUS_CONSTANT_COLOR,[gM]:e.CONSTANT_ALPHA,[_M]:e.ONE_MINUS_CONSTANT_ALPHA};function Xt(N,ut,Z,ft,_t,nt,Et,P,it,ot){if(N===Qi){_===!0&&(Ut(e.BLEND),_=!1);return}if(_===!1&&(et(e.BLEND),_=!0),N!==tM){if(N!==h||ot!==R){if((m!==xa||A!==xa)&&(e.blendEquation(e.FUNC_ADD),m=xa,A=xa),ot)switch(N){case ir:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Fg:e.blendFunc(e.ONE,e.ONE);break;case Vg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Hg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Pt("WebGLState: Invalid blending: ",N);break}else switch(N){case ir:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Fg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Vg:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hg:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",N);break}S=null,g=null,E=null,w=null,y.set(0,0,0),T=0,h=N,R=ot}return}_t=_t||ut,nt=nt||Z,Et=Et||ft,(ut!==m||_t!==A)&&(e.blendEquationSeparate(Bt[ut],Bt[_t]),m=ut,A=_t),(Z!==S||ft!==g||nt!==E||Et!==w)&&(e.blendFuncSeparate(se[Z],se[ft],se[nt],se[Et]),S=Z,g=ft,E=nt,w=Et),(P.equals(y)===!1||it!==T)&&(e.blendColor(P.r,P.g,P.b,it),y.copy(P),T=it),h=N,R=!1}function Vt(N,ut){N.side===Mi?Ut(e.CULL_FACE):et(e.CULL_FACE);let Z=N.side===Ln;ut&&(Z=!Z),ce(Z),N.blending===ir&&N.transparent===!1?Xt(Qi):Xt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),a.setMask(N.colorWrite);let ft=N.stencilWrite;o.setTest(ft),ft&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ge(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?et(e.SAMPLE_ALPHA_TO_COVERAGE):Ut(e.SAMPLE_ALPHA_TO_COVERAGE)}function ce(N){D!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),D=N)}function Fe(N){N!==QS?(et(e.CULL_FACE),N!==B&&(N===zg?e.cullFace(e.BACK):N===jS?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ut(e.CULL_FACE),B=N}function ye(N){N!==Y&&(k&&e.lineWidth(N),Y=N)}function ge(N,ut,Z){N?(et(e.POLYGON_OFFSET_FILL),(K!==ut||F!==Z)&&(K=ut,F=Z,r.getReversed()&&(ut=-ut),e.polygonOffset(ut,Z))):Ut(e.POLYGON_OFFSET_FILL)}function Qt(N){N?et(e.SCISSOR_TEST):Ut(e.SCISSOR_TEST)}function Ce(N){N===void 0&&(N=e.TEXTURE0+q-1),mt!==N&&(e.activeTexture(N),mt=N)}function U(N,ut,Z){Z===void 0&&(mt===null?Z=e.TEXTURE0+q-1:Z=mt);let ft=yt[Z];ft===void 0&&(ft={type:void 0,texture:void 0},yt[Z]=ft),(ft.type!==N||ft.texture!==ut)&&(mt!==Z&&(e.activeTexture(Z),mt=Z),e.bindTexture(N,ut||tt[N]),ft.type=N,ft.texture=ut)}function re(){let N=yt[mt];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function oe(){try{e.compressedTexImage2D(...arguments)}catch(N){Pt("WebGLState:",N)}}function C(){try{e.compressedTexImage3D(...arguments)}catch(N){Pt("WebGLState:",N)}}function x(){try{e.texSubImage2D(...arguments)}catch(N){Pt("WebGLState:",N)}}function L(){try{e.texSubImage3D(...arguments)}catch(N){Pt("WebGLState:",N)}}function z(){try{e.compressedTexSubImage2D(...arguments)}catch(N){Pt("WebGLState:",N)}}function X(){try{e.compressedTexSubImage3D(...arguments)}catch(N){Pt("WebGLState:",N)}}function lt(){try{e.texStorage2D(...arguments)}catch(N){Pt("WebGLState:",N)}}function ct(){try{e.texStorage3D(...arguments)}catch(N){Pt("WebGLState:",N)}}function W(){try{e.texImage2D(...arguments)}catch(N){Pt("WebGLState:",N)}}function J(){try{e.texImage3D(...arguments)}catch(N){Pt("WebGLState:",N)}}function dt(N){return p[N]!==void 0?p[N]:e.getParameter(N)}function At(N,ut){p[N]!==ut&&(e.pixelStorei(N,ut),p[N]=ut)}function pt(N){we.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),we.copy(N))}function ht(N){le.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),le.copy(N))}function wt(N,ut){let Z=c.get(ut);Z===void 0&&(Z=new WeakMap,c.set(ut,Z));let ft=Z.get(N);ft===void 0&&(ft=e.getUniformBlockIndex(ut,N.name),Z.set(N,ft))}function Nt(N,ut){let ft=c.get(ut).get(N);l.get(ut)!==ft&&(e.uniformBlockBinding(ut,ft,N.__bindingPointIndex),l.set(ut,ft))}function Gt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},p={},mt=null,yt={},u={},d=new WeakMap,v=[],M=null,_=!1,h=null,m=null,S=null,g=null,A=null,E=null,w=null,y=new Zt(0,0,0),T=0,R=!1,D=null,B=null,Y=null,K=null,F=null,we.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:et,disable:Ut,bindFramebuffer:It,drawBuffers:Rt,useProgram:Ee,setBlending:Xt,setMaterial:Vt,setFlipSided:ce,setCullFace:Fe,setLineWidth:ye,setPolygonOffset:ge,setScissorTest:Qt,activeTexture:Ce,bindTexture:U,unbindTexture:re,compressedTexImage2D:oe,compressedTexImage3D:C,texImage2D:W,texImage3D:J,pixelStorei:At,getParameter:dt,updateUBOMapping:wt,uniformBlockBinding:Nt,texStorage2D:lt,texStorage3D:ct,texSubImage2D:x,texSubImage3D:L,compressedTexSubImage2D:z,compressedTexSubImage3D:X,scissor:pt,viewport:ht,reset:Gt}}function WR(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Yt,f=new WeakMap,p=new Set,u,d=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,x){return v?new OffscreenCanvas(C,x):$l("canvas")}function _(C,x,L){let z=1,X=oe(C);if((X.width>L||X.height>L)&&(z=L/Math.max(X.width,X.height)),z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let lt=Math.floor(z*X.width),ct=Math.floor(z*X.height);u===void 0&&(u=M(lt,ct));let W=x?M(lt,ct):u;return W.width=lt,W.height=ct,W.getContext("2d").drawImage(C,0,0,lt,ct),Lt("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+lt+"x"+ct+")."),W}else return"data"in C&&Lt("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),C;return C}function h(C){return C.generateMipmaps}function m(C){e.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function g(C,x,L,z,X,lt=!1){if(C!==null){if(e[C]!==void 0)return e[C];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ct;z&&(ct=t.get("EXT_texture_norm16"),ct||Lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=x;if(x===e.RED&&(L===e.FLOAT&&(W=e.R32F),L===e.HALF_FLOAT&&(W=e.R16F),L===e.UNSIGNED_BYTE&&(W=e.R8),L===e.UNSIGNED_SHORT&&ct&&(W=ct.R16_EXT),L===e.SHORT&&ct&&(W=ct.R16_SNORM_EXT)),x===e.RED_INTEGER&&(L===e.UNSIGNED_BYTE&&(W=e.R8UI),L===e.UNSIGNED_SHORT&&(W=e.R16UI),L===e.UNSIGNED_INT&&(W=e.R32UI),L===e.BYTE&&(W=e.R8I),L===e.SHORT&&(W=e.R16I),L===e.INT&&(W=e.R32I)),x===e.RG&&(L===e.FLOAT&&(W=e.RG32F),L===e.HALF_FLOAT&&(W=e.RG16F),L===e.UNSIGNED_BYTE&&(W=e.RG8),L===e.UNSIGNED_SHORT&&ct&&(W=ct.RG16_EXT),L===e.SHORT&&ct&&(W=ct.RG16_SNORM_EXT)),x===e.RG_INTEGER&&(L===e.UNSIGNED_BYTE&&(W=e.RG8UI),L===e.UNSIGNED_SHORT&&(W=e.RG16UI),L===e.UNSIGNED_INT&&(W=e.RG32UI),L===e.BYTE&&(W=e.RG8I),L===e.SHORT&&(W=e.RG16I),L===e.INT&&(W=e.RG32I)),x===e.RGB_INTEGER&&(L===e.UNSIGNED_BYTE&&(W=e.RGB8UI),L===e.UNSIGNED_SHORT&&(W=e.RGB16UI),L===e.UNSIGNED_INT&&(W=e.RGB32UI),L===e.BYTE&&(W=e.RGB8I),L===e.SHORT&&(W=e.RGB16I),L===e.INT&&(W=e.RGB32I)),x===e.RGBA_INTEGER&&(L===e.UNSIGNED_BYTE&&(W=e.RGBA8UI),L===e.UNSIGNED_SHORT&&(W=e.RGBA16UI),L===e.UNSIGNED_INT&&(W=e.RGBA32UI),L===e.BYTE&&(W=e.RGBA8I),L===e.SHORT&&(W=e.RGBA16I),L===e.INT&&(W=e.RGBA32I)),x===e.RGB&&(L===e.UNSIGNED_SHORT&&ct&&(W=ct.RGB16_EXT),L===e.SHORT&&ct&&(W=ct.RGB16_SNORM_EXT),L===e.UNSIGNED_INT_5_9_9_9_REV&&(W=e.RGB9_E5),L===e.UNSIGNED_INT_10F_11F_11F_REV&&(W=e.R11F_G11F_B10F)),x===e.RGBA){let J=lt?jl:ee.getTransfer(X);L===e.FLOAT&&(W=e.RGBA32F),L===e.HALF_FLOAT&&(W=e.RGBA16F),L===e.UNSIGNED_BYTE&&(W=J===de?e.SRGB8_ALPHA8:e.RGBA8),L===e.UNSIGNED_SHORT&&ct&&(W=ct.RGBA16_EXT),L===e.SHORT&&ct&&(W=ct.RGBA16_SNORM_EXT),L===e.UNSIGNED_SHORT_4_4_4_4&&(W=e.RGBA4),L===e.UNSIGNED_SHORT_5_5_5_1&&(W=e.RGB5_A1)}return(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function A(C,x){let L;return C?x===null||x===Ii||x===Bo?L=e.DEPTH24_STENCIL8:x===Oi?L=e.DEPTH32F_STENCIL8:x===Po&&(L=e.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ii||x===Bo?L=e.DEPTH_COMPONENT24:x===Oi?L=e.DEPTH_COMPONENT32F:x===Po&&(L=e.DEPTH_COMPONENT16),L}function E(C,x){return h(C)===!0||C.isFramebufferTexture&&C.minFilter!==dn&&C.minFilter!==yn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function w(C){let x=C.target;x.removeEventListener("dispose",w),T(x),x.isVideoTexture&&f.delete(x),x.isHTMLTexture&&p.delete(x)}function y(C){let x=C.target;x.removeEventListener("dispose",y),D(x)}function T(C){let x=i.get(C);if(x.__webglInit===void 0)return;let L=C.source,z=d.get(L);if(z){let X=z[x.__cacheKey];X.usedTimes--,X.usedTimes===0&&R(C),Object.keys(z).length===0&&d.delete(L)}i.remove(C)}function R(C){let x=i.get(C);e.deleteTexture(x.__webglTexture);let L=C.source,z=d.get(L);delete z[x.__cacheKey],r.memory.textures--}function D(C){let x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(x.__webglFramebuffer[z]))for(let X=0;X<x.__webglFramebuffer[z].length;X++)e.deleteFramebuffer(x.__webglFramebuffer[z][X]);else e.deleteFramebuffer(x.__webglFramebuffer[z]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[z])}else{if(Array.isArray(x.__webglFramebuffer))for(let z=0;z<x.__webglFramebuffer.length;z++)e.deleteFramebuffer(x.__webglFramebuffer[z]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let z=0;z<x.__webglColorRenderbuffer.length;z++)x.__webglColorRenderbuffer[z]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[z]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let L=C.textures;for(let z=0,X=L.length;z<X;z++){let lt=i.get(L[z]);lt.__webglTexture&&(e.deleteTexture(lt.__webglTexture),r.memory.textures--),i.remove(L[z])}i.remove(C)}let B=0;function Y(){B=0}function K(){return B}function F(C){B=C}function q(){let C=B;return C>=s.maxTextures&&Lt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),B+=1,C}function k(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function $(C,x){let L=i.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&L.__version!==C.version){let z=C.image;if(z===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(L,C,x);return}}else C.isExternalTexture&&(L.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,L.__webglTexture,e.TEXTURE0+x)}function rt(C,x){let L=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&L.__version!==C.version){Ut(L,C,x);return}else C.isExternalTexture&&(L.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,L.__webglTexture,e.TEXTURE0+x)}function mt(C,x){let L=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&L.__version!==C.version){Ut(L,C,x);return}n.bindTexture(e.TEXTURE_3D,L.__webglTexture,e.TEXTURE0+x)}function yt(C,x){let L=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&L.__version!==C.version){It(L,C,x);return}n.bindTexture(e.TEXTURE_CUBE_MAP,L.__webglTexture,e.TEXTURE0+x)}let gt={[qh]:e.REPEAT,[Yi]:e.CLAMP_TO_EDGE,[Yh]:e.MIRRORED_REPEAT},ie={[dn]:e.NEAREST,[yM]:e.NEAREST_MIPMAP_NEAREST,[vc]:e.NEAREST_MIPMAP_LINEAR,[yn]:e.LINEAR,[Ef]:e.LINEAR_MIPMAP_NEAREST,[Aa]:e.LINEAR_MIPMAP_LINEAR},we={[bM]:e.NEVER,[CM]:e.ALWAYS,[EM]:e.LESS,[ld]:e.LEQUAL,[TM]:e.EQUAL,[cd]:e.GEQUAL,[AM]:e.GREATER,[wM]:e.NOTEQUAL};function le(C,x){if(x.type===Oi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===yn||x.magFilter===Ef||x.magFilter===vc||x.magFilter===Aa||x.minFilter===yn||x.minFilter===Ef||x.minFilter===vc||x.minFilter===Aa)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,gt[x.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,gt[x.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,gt[x.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,ie[x.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,ie[x.minFilter]),x.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,we[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===dn||x.minFilter!==vc&&x.minFilter!==Aa||x.type===Oi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let L=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Q(C,x){let L=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",w));let z=x.source,X=d.get(z);X===void 0&&(X={},d.set(z,X));let lt=k(x);if(lt!==C.__cacheKey){X[lt]===void 0&&(X[lt]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,L=!0),X[lt].usedTimes++;let ct=X[C.__cacheKey];ct!==void 0&&(X[C.__cacheKey].usedTimes--,ct.usedTimes===0&&R(x)),C.__cacheKey=lt,C.__webglTexture=X[lt].texture}return L}function tt(C,x,L){return Math.floor(Math.floor(C/L)/x)}function et(C,x,L,z){let lt=C.updateRanges;if(lt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,L,z,x.data);else{lt.sort((At,pt)=>At.start-pt.start);let ct=0;for(let At=1;At<lt.length;At++){let pt=lt[ct],ht=lt[At],wt=pt.start+pt.count,Nt=tt(ht.start,x.width,4),Gt=tt(pt.start,x.width,4);ht.start<=wt+1&&Nt===Gt&&tt(ht.start+ht.count-1,x.width,4)===Nt?pt.count=Math.max(pt.count,ht.start+ht.count-pt.start):(++ct,lt[ct]=ht)}lt.length=ct+1;let W=n.getParameter(e.UNPACK_ROW_LENGTH),J=n.getParameter(e.UNPACK_SKIP_PIXELS),dt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let At=0,pt=lt.length;At<pt;At++){let ht=lt[At],wt=Math.floor(ht.start/4),Nt=Math.ceil(ht.count/4),Gt=wt%x.width,N=Math.floor(wt/x.width),ut=Nt,Z=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Gt),n.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,Gt,N,ut,Z,L,z,x.data)}C.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,W),n.pixelStorei(e.UNPACK_SKIP_PIXELS,J),n.pixelStorei(e.UNPACK_SKIP_ROWS,dt)}}function Ut(C,x,L){let z=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(z=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(z=e.TEXTURE_3D);let X=Q(C,x),lt=x.source;n.bindTexture(z,C.__webglTexture,e.TEXTURE0+L);let ct=i.get(lt);if(lt.version!==ct.__version||X===!0){if(n.activeTexture(e.TEXTURE0+L),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let Z=ee.getPrimaries(ee.workingColorSpace),ft=x.colorSpace===Is?null:ee.getPrimaries(x.colorSpace),_t=x.colorSpace===Is||Z===ft?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}n.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let J=_(x.image,!1,s.maxTextureSize);J=re(x,J);let dt=a.convert(x.format,x.colorSpace),At=a.convert(x.type),pt=g(x.internalFormat,dt,At,x.normalized,x.colorSpace,x.isVideoTexture);le(z,x);let ht,wt=x.mipmaps,Nt=x.isVideoTexture!==!0,Gt=ct.__version===void 0||X===!0,N=lt.dataReady,ut=E(x,J);if(x.isDepthTexture)pt=A(x.format===wa,x.type),Gt&&(Nt?n.texStorage2D(e.TEXTURE_2D,1,pt,J.width,J.height):n.texImage2D(e.TEXTURE_2D,0,pt,J.width,J.height,0,dt,At,null));else if(x.isDataTexture)if(wt.length>0){Nt&&Gt&&n.texStorage2D(e.TEXTURE_2D,ut,pt,wt[0].width,wt[0].height);for(let Z=0,ft=wt.length;Z<ft;Z++)ht=wt[Z],Nt?N&&n.texSubImage2D(e.TEXTURE_2D,Z,0,0,ht.width,ht.height,dt,At,ht.data):n.texImage2D(e.TEXTURE_2D,Z,pt,ht.width,ht.height,0,dt,At,ht.data);x.generateMipmaps=!1}else Nt?(Gt&&n.texStorage2D(e.TEXTURE_2D,ut,pt,J.width,J.height),N&&et(x,J,dt,At)):n.texImage2D(e.TEXTURE_2D,0,pt,J.width,J.height,0,dt,At,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Nt&&Gt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ut,pt,wt[0].width,wt[0].height,J.depth);for(let Z=0,ft=wt.length;Z<ft;Z++)if(ht=wt[Z],x.format!==bi)if(dt!==null)if(Nt){if(N)if(x.layerUpdates.size>0){let _t=u0(ht.width,ht.height,x.format,x.type);for(let nt of x.layerUpdates){let Et=ht.data.subarray(nt*_t/ht.data.BYTES_PER_ELEMENT,(nt+1)*_t/ht.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,nt,ht.width,ht.height,1,dt,Et)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,ht.width,ht.height,J.depth,dt,ht.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,pt,ht.width,ht.height,J.depth,0,ht.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?N&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,ht.width,ht.height,J.depth,dt,At,ht.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Z,pt,ht.width,ht.height,J.depth,0,dt,At,ht.data)}else{Nt&&Gt&&n.texStorage2D(e.TEXTURE_2D,ut,pt,wt[0].width,wt[0].height);for(let Z=0,ft=wt.length;Z<ft;Z++)ht=wt[Z],x.format!==bi?dt!==null?Nt?N&&n.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,ht.width,ht.height,dt,ht.data):n.compressedTexImage2D(e.TEXTURE_2D,Z,pt,ht.width,ht.height,0,ht.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?N&&n.texSubImage2D(e.TEXTURE_2D,Z,0,0,ht.width,ht.height,dt,At,ht.data):n.texImage2D(e.TEXTURE_2D,Z,pt,ht.width,ht.height,0,dt,At,ht.data)}else if(x.isDataArrayTexture)if(Nt){if(Gt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ut,pt,J.width,J.height,J.depth),N)if(x.layerUpdates.size>0){let Z=u0(J.width,J.height,x.format,x.type);for(let ft of x.layerUpdates){let _t=J.data.subarray(ft*Z/J.data.BYTES_PER_ELEMENT,(ft+1)*Z/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ft,J.width,J.height,1,dt,At,_t)}x.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,dt,At,J.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,pt,J.width,J.height,J.depth,0,dt,At,J.data);else if(x.isData3DTexture)Nt?(Gt&&n.texStorage3D(e.TEXTURE_3D,ut,pt,J.width,J.height,J.depth),N&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,dt,At,J.data)):n.texImage3D(e.TEXTURE_3D,0,pt,J.width,J.height,J.depth,0,dt,At,J.data);else if(x.isFramebufferTexture){if(Gt)if(Nt)n.texStorage2D(e.TEXTURE_2D,ut,pt,J.width,J.height);else{let Z=J.width,ft=J.height;for(let _t=0;_t<ut;_t++)n.texImage2D(e.TEXTURE_2D,_t,pt,Z,ft,0,dt,At,null),Z>>=1,ft>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){let Z=e.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),p.add(x),Z.onpaint=ft=>{let _t=ft.changedElements;for(let nt of p)_t.includes(nt.image)&&(nt.needsUpdate=!0)},Z.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,J);else{let _t=e.RGBA,nt=e.RGBA,Et=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,_t,nt,Et,J)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(wt.length>0){if(Nt&&Gt){let Z=oe(wt[0]);n.texStorage2D(e.TEXTURE_2D,ut,pt,Z.width,Z.height)}for(let Z=0,ft=wt.length;Z<ft;Z++)ht=wt[Z],Nt?N&&n.texSubImage2D(e.TEXTURE_2D,Z,0,0,dt,At,ht):n.texImage2D(e.TEXTURE_2D,Z,pt,dt,At,ht);x.generateMipmaps=!1}else if(Nt){if(Gt){let Z=oe(J);n.texStorage2D(e.TEXTURE_2D,ut,pt,Z.width,Z.height)}N&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,dt,At,J)}else n.texImage2D(e.TEXTURE_2D,0,pt,dt,At,J);h(x)&&m(z),ct.__version=lt.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function It(C,x,L){if(x.image.length!==6)return;let z=Q(C,x),X=x.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+L);let lt=i.get(X);if(X.version!==lt.__version||z===!0){n.activeTexture(e.TEXTURE0+L);let ct=ee.getPrimaries(ee.workingColorSpace),W=x.colorSpace===Is?null:ee.getPrimaries(x.colorSpace),J=x.colorSpace===Is||ct===W?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let dt=x.isCompressedTexture||x.image[0].isCompressedTexture,At=x.image[0]&&x.image[0].isDataTexture,pt=[];for(let nt=0;nt<6;nt++)!dt&&!At?pt[nt]=_(x.image[nt],!0,s.maxCubemapSize):pt[nt]=At?x.image[nt].image:x.image[nt],pt[nt]=re(x,pt[nt]);let ht=pt[0],wt=a.convert(x.format,x.colorSpace),Nt=a.convert(x.type),Gt=g(x.internalFormat,wt,Nt,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,ut=lt.__version===void 0||z===!0,Z=X.dataReady,ft=E(x,ht);le(e.TEXTURE_CUBE_MAP,x);let _t;if(dt){N&&ut&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ft,Gt,ht.width,ht.height);for(let nt=0;nt<6;nt++){_t=pt[nt].mipmaps;for(let Et=0;Et<_t.length;Et++){let P=_t[Et];x.format!==bi?wt!==null?N?Z&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,0,0,P.width,P.height,wt,P.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,Gt,P.width,P.height,0,P.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,0,0,P.width,P.height,wt,Nt,P.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,Gt,P.width,P.height,0,wt,Nt,P.data)}}}else{if(_t=x.mipmaps,N&&ut){_t.length>0&&ft++;let nt=oe(pt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ft,Gt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(At){N?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,pt[nt].width,pt[nt].height,wt,Nt,pt[nt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Gt,pt[nt].width,pt[nt].height,0,wt,Nt,pt[nt].data);for(let Et=0;Et<_t.length;Et++){let it=_t[Et].image[nt].image;N?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,0,0,it.width,it.height,wt,Nt,it.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,Gt,it.width,it.height,0,wt,Nt,it.data)}}else{N?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,wt,Nt,pt[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Gt,wt,Nt,pt[nt]);for(let Et=0;Et<_t.length;Et++){let P=_t[Et];N?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,0,0,wt,Nt,P.image[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,Gt,wt,Nt,P.image[nt])}}}h(x)&&m(e.TEXTURE_CUBE_MAP),lt.__version=X.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Rt(C,x,L,z,X,lt){let ct=a.convert(L.format,L.colorSpace),W=a.convert(L.type),J=g(L.internalFormat,ct,W,L.normalized,L.colorSpace),dt=i.get(x),At=i.get(L);if(At.__renderTarget=x,!dt.__hasExternalTextures){let pt=Math.max(1,x.width>>lt),ht=Math.max(1,x.height>>lt);X===e.TEXTURE_3D||X===e.TEXTURE_2D_ARRAY?n.texImage3D(X,lt,J,pt,ht,x.depth,0,ct,W,null):n.texImage2D(X,lt,J,pt,ht,0,ct,W,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),Ce(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,z,X,At.__webglTexture,0,Qt(x)):(X===e.TEXTURE_2D||X>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,z,X,At.__webglTexture,lt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(C,x,L){if(e.bindRenderbuffer(e.RENDERBUFFER,C),x.depthBuffer){let z=x.depthTexture,X=z&&z.isDepthTexture?z.type:null,lt=A(x.stencilBuffer,X),ct=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ce(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Qt(x),lt,x.width,x.height):L?e.renderbufferStorageMultisample(e.RENDERBUFFER,Qt(x),lt,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,lt,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ct,e.RENDERBUFFER,C)}else{let z=x.textures;for(let X=0;X<z.length;X++){let lt=z[X],ct=a.convert(lt.format,lt.colorSpace),W=a.convert(lt.type),J=g(lt.internalFormat,ct,W,lt.normalized,lt.colorSpace);Ce(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Qt(x),J,x.width,x.height):L?e.renderbufferStorageMultisample(e.RENDERBUFFER,Qt(x),J,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,J,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Bt(C,x,L){let z=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=i.get(x.depthTexture);if(X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),z){if(X.__webglInit===void 0&&(X.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),X.__webglTexture===void 0){X.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture),le(e.TEXTURE_CUBE_MAP,x.depthTexture);let dt=a.convert(x.depthTexture.format),At=a.convert(x.depthTexture.type),pt;x.depthTexture.format===Zi?pt=e.DEPTH_COMPONENT24:x.depthTexture.format===wa&&(pt=e.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,pt,x.width,x.height,0,dt,At,null)}}else $(x.depthTexture,0);let lt=X.__webglTexture,ct=Qt(x),W=z?e.TEXTURE_CUBE_MAP_POSITIVE_X+L:e.TEXTURE_2D,J=x.depthTexture.format===wa?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===Zi)Ce(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,W,lt,0,ct):e.framebufferTexture2D(e.FRAMEBUFFER,J,W,lt,0);else if(x.depthTexture.format===wa)Ce(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,W,lt,0,ct):e.framebufferTexture2D(e.FRAMEBUFFER,J,W,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(C){let x=i.get(C),L=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let z=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),z){let X=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,z.removeEventListener("dispose",X)};z.addEventListener("dispose",X),x.__depthDisposeCallback=X}x.__boundDepthTexture=z}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(L)for(let z=0;z<6;z++)Bt(x.__webglFramebuffer[z],C,z);else{let z=C.texture.mipmaps;z&&z.length>0?Bt(x.__webglFramebuffer[0],C,0):Bt(x.__webglFramebuffer,C,0)}else if(L){x.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[z]),x.__webglDepthbuffer[z]===void 0)x.__webglDepthbuffer[z]=e.createRenderbuffer(),Ee(x.__webglDepthbuffer[z],C,!1);else{let X=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=x.__webglDepthbuffer[z];e.bindRenderbuffer(e.RENDERBUFFER,lt),e.framebufferRenderbuffer(e.FRAMEBUFFER,X,e.RENDERBUFFER,lt)}}else{let z=C.texture.mipmaps;if(z&&z.length>0?n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Ee(x.__webglDepthbuffer,C,!1);else{let X=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,lt),e.framebufferRenderbuffer(e.FRAMEBUFFER,X,e.RENDERBUFFER,lt)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Xt(C,x,L){let z=i.get(C);x!==void 0&&Rt(z.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),L!==void 0&&se(C)}function Vt(C){let x=C.texture,L=i.get(C),z=i.get(x);C.addEventListener("dispose",y);let X=C.textures,lt=C.isWebGLCubeRenderTarget===!0,ct=X.length>1;if(ct||(z.__webglTexture===void 0&&(z.__webglTexture=e.createTexture()),z.__version=x.version,r.memory.textures++),lt){L.__webglFramebuffer=[];for(let W=0;W<6;W++)if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer[W]=[];for(let J=0;J<x.mipmaps.length;J++)L.__webglFramebuffer[W][J]=e.createFramebuffer()}else L.__webglFramebuffer[W]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer=[];for(let W=0;W<x.mipmaps.length;W++)L.__webglFramebuffer[W]=e.createFramebuffer()}else L.__webglFramebuffer=e.createFramebuffer();if(ct)for(let W=0,J=X.length;W<J;W++){let dt=i.get(X[W]);dt.__webglTexture===void 0&&(dt.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&Ce(C)===!1){L.__webglMultisampledFramebuffer=e.createFramebuffer(),L.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let W=0;W<X.length;W++){let J=X[W];L.__webglColorRenderbuffer[W]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,L.__webglColorRenderbuffer[W]);let dt=a.convert(J.format,J.colorSpace),At=a.convert(J.type),pt=g(J.internalFormat,dt,At,J.normalized,J.colorSpace,C.isXRRenderTarget===!0),ht=Qt(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,ht,pt,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+W,e.RENDERBUFFER,L.__webglColorRenderbuffer[W])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(L.__webglDepthRenderbuffer=e.createRenderbuffer(),Ee(L.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(lt){n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture),le(e.TEXTURE_CUBE_MAP,x);for(let W=0;W<6;W++)if(x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Rt(L.__webglFramebuffer[W][J],C,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,J);else Rt(L.__webglFramebuffer[W],C,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);h(x)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ct){for(let W=0,J=X.length;W<J;W++){let dt=X[W],At=i.get(dt),pt=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(pt,At.__webglTexture),le(pt,dt),Rt(L.__webglFramebuffer,C,dt,e.COLOR_ATTACHMENT0+W,pt,0),h(dt)&&m(pt)}n.unbindTexture()}else{let W=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(W=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(W,z.__webglTexture),le(W,x),x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Rt(L.__webglFramebuffer[J],C,x,e.COLOR_ATTACHMENT0,W,J);else Rt(L.__webglFramebuffer,C,x,e.COLOR_ATTACHMENT0,W,0);h(x)&&m(W),n.unbindTexture()}C.depthBuffer&&se(C)}function ce(C){let x=C.textures;for(let L=0,z=x.length;L<z;L++){let X=x[L];if(h(X)){let lt=S(C),ct=i.get(X).__webglTexture;n.bindTexture(lt,ct),m(lt),n.unbindTexture()}}}let Fe=[],ye=[];function ge(C){if(C.samples>0){if(Ce(C)===!1){let x=C.textures,L=C.width,z=C.height,X=e.COLOR_BUFFER_BIT,lt=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ct=i.get(C),W=x.length>1;if(W)for(let dt=0;dt<x.length;dt++)n.bindFramebuffer(e.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ct.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let J=C.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let dt=0;dt<x.length;dt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(X|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(X|=e.STENCIL_BUFFER_BIT)),W){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ct.__webglColorRenderbuffer[dt]);let At=i.get(x[dt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,At,0)}e.blitFramebuffer(0,0,L,z,0,0,L,z,X,e.NEAREST),l===!0&&(Fe.length=0,ye.length=0,Fe.push(e.COLOR_ATTACHMENT0+dt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Fe.push(lt),ye.push(lt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ye)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Fe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),W)for(let dt=0;dt<x.length;dt++){n.bindFramebuffer(e.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.RENDERBUFFER,ct.__webglColorRenderbuffer[dt]);let At=i.get(x[dt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ct.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.TEXTURE_2D,At,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let x=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function Qt(C){return Math.min(s.maxSamples,C.samples)}function Ce(C){let x=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(C){let x=r.render.frame;f.get(C)!==x&&(f.set(C,x),C.update())}function re(C,x){let L=C.colorSpace,z=C.format,X=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||L!==Ql&&L!==Is&&(ee.getTransfer(L)===de?(z!==bi||X!==Gn)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",L)),x}function oe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=Y,this.getTextureUnits=K,this.setTextureUnits=F,this.setTexture2D=$,this.setTexture2DArray=rt,this.setTexture3D=mt,this.setTextureCube=yt,this.rebindTextures=Xt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function qR(e,t){function n(i,s=Is){let a,r=ee.getTransfer(s);if(i===Gn)return e.UNSIGNED_BYTE;if(i===Af)return e.UNSIGNED_SHORT_4_4_4_4;if(i===wf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===$g)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===t0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qg)return e.BYTE;if(i===jg)return e.SHORT;if(i===Po)return e.UNSIGNED_SHORT;if(i===Tf)return e.INT;if(i===Ii)return e.UNSIGNED_INT;if(i===Oi)return e.FLOAT;if(i===ji)return e.HALF_FLOAT;if(i===e0)return e.ALPHA;if(i===n0)return e.RGB;if(i===bi)return e.RGBA;if(i===Zi)return e.DEPTH_COMPONENT;if(i===wa)return e.DEPTH_STENCIL;if(i===i0)return e.RED;if(i===Cf)return e.RED_INTEGER;if(i===Ca)return e.RG;if(i===Rf)return e.RG_INTEGER;if(i===Df)return e.RGBA_INTEGER;if(i===xc||i===yc||i===Sc||i===Mc)if(r===de)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===xc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===xc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uf||i===Nf||i===Lf||i===If)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Uf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===If)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Of||i===Pf||i===Bf||i===zf||i===Ff||i===bc||i===Vf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Of||i===Pf)return r===de?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Bf)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===zf)return a.COMPRESSED_R11_EAC;if(i===Ff)return a.COMPRESSED_SIGNED_R11_EAC;if(i===bc)return a.COMPRESSED_RG11_EAC;if(i===Vf)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Hf||i===Gf||i===kf||i===Xf||i===Wf||i===qf||i===Yf||i===Zf||i===Jf||i===Kf||i===Qf||i===jf||i===$f||i===td)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Hf)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gf)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kf)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xf)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wf)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qf)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yf)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zf)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jf)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kf)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qf)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jf)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$f)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===td)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ed||i===nd||i===id)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===ed)return r===de?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===id)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sd||i===ad||i===Ec||i===rd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===sd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ad)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ec)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var YR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,R0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new oc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new ai({vertexShader:YR,fragmentShader:ZR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xe(new Sa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},D0=class extends Ji{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,d=null,v=null,M=typeof XRWebGLBinding<"u",_=new R0,h={},m=n.getContextAttributes(),S=null,g=null,A=[],E=[],w=new Yt,y=null,T=new xn;T.viewport=new ze;let R=new xn;R.viewport=new ze;let D=[T,R],B=new yf,Y=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let tt=A[Q];return tt===void 0&&(tt=new Ro,A[Q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Q){let tt=A[Q];return tt===void 0&&(tt=new Ro,A[Q]=tt),tt.getGripSpace()},this.getHand=function(Q){let tt=A[Q];return tt===void 0&&(tt=new Ro,A[Q]=tt),tt.getHandSpace()};function F(Q){let tt=E.indexOf(Q.inputSource);if(tt===-1)return;let et=A[tt];et!==void 0&&(et.update(Q.inputSource,Q.frame,c||r),et.dispatchEvent({type:Q.type,data:Q.inputSource}))}function q(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",k);for(let Q=0;Q<A.length;Q++){let tt=E[Q];tt!==null&&(E[Q]=null,A[Q].disconnect(tt))}Y=null,K=null,_.reset();for(let Q in h)delete h[Q];t.setRenderTarget(S),d=null,u=null,p=null,s=null,g=null,le.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",q),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await n.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,Ut=null,It=null;m.depth&&(It=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,et=m.stencil?wa:Zi,Ut=m.stencil?Bo:Ii);let Rt={colorFormat:n.RGBA8,depthFormat:It,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(Rt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),g=new ii(u.textureWidth,u.textureHeight,{format:bi,type:Gn,depthTexture:new Ls(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,et),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),g=new ii(d.framebufferWidth,d.framebufferHeight,{format:bi,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),le.setContext(s),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(Q){for(let tt=0;tt<Q.removed.length;tt++){let et=Q.removed[tt],Ut=E.indexOf(et);Ut>=0&&(E[Ut]=null,A[Ut].disconnect(et))}for(let tt=0;tt<Q.added.length;tt++){let et=Q.added[tt],Ut=E.indexOf(et);if(Ut===-1){for(let Rt=0;Rt<A.length;Rt++)if(Rt>=E.length){E.push(et),Ut=Rt;break}else if(E[Rt]===null){E[Rt]=et,Ut=Rt;break}if(Ut===-1)break}let It=A[Ut];It&&It.connect(et)}}let $=new O,rt=new O;function mt(Q,tt,et){$.setFromMatrixPosition(tt.matrixWorld),rt.setFromMatrixPosition(et.matrixWorld);let Ut=$.distanceTo(rt),It=tt.projectionMatrix.elements,Rt=et.projectionMatrix.elements,Ee=It[14]/(It[10]-1),Bt=It[14]/(It[10]+1),se=(It[9]+1)/It[5],Xt=(It[9]-1)/It[5],Vt=(It[8]-1)/It[0],ce=(Rt[8]+1)/Rt[0],Fe=Ee*Vt,ye=Ee*ce,ge=Ut/(-Vt+ce),Qt=ge*-Vt;if(tt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Qt),Q.translateZ(ge),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),It[10]===-1)Q.projectionMatrix.copy(tt.projectionMatrix),Q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let Ce=Ee+ge,U=Bt+ge,re=Fe-Qt,oe=ye+(Ut-Qt),C=se*Bt/U*Ce,x=Xt*Bt/U*Ce;Q.projectionMatrix.makePerspective(re,oe,C,x,Ce,U),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function yt(Q,tt){tt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(tt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let tt=Q.near,et=Q.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(et=_.depthFar)),B.near=R.near=T.near=tt,B.far=R.far=T.far=et,(Y!==B.near||K!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),Y=B.near,K=B.far),B.layers.mask=Q.layers.mask|6,T.layers.mask=B.layers.mask&-5,R.layers.mask=B.layers.mask&-3;let Ut=Q.parent,It=B.cameras;yt(B,Ut);for(let Rt=0;Rt<It.length;Rt++)yt(It[Rt],Ut);It.length===2?mt(B,T,R):B.projectionMatrix.copy(T.projectionMatrix),gt(Q,B,Ut)};function gt(Q,tt,et){et===null?Q.matrix.copy(tt.matrixWorld):(Q.matrix.copy(et.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(tt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(tt.projectionMatrix),Q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ao*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(B)},this.getCameraTexture=function(Q){return h[Q]};let ie=null;function we(Q,tt){if(f=tt.getViewerPose(c||r),v=tt,f!==null){let et=f.views;d!==null&&(t.setRenderTargetFramebuffer(g,d.framebuffer),t.setRenderTarget(g));let Ut=!1;et.length!==B.cameras.length&&(B.cameras.length=0,Ut=!0);for(let Bt=0;Bt<et.length;Bt++){let se=et[Bt],Xt=null;if(d!==null)Xt=d.getViewport(se);else{let ce=p.getViewSubImage(u,se);Xt=ce.viewport,Bt===0&&(t.setRenderTargetTextures(g,ce.colorTexture,ce.depthStencilTexture),t.setRenderTarget(g))}let Vt=D[Bt];Vt===void 0&&(Vt=new xn,Vt.layers.enable(Bt),Vt.viewport=new ze,D[Bt]=Vt),Vt.matrix.fromArray(se.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(se.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Bt===0&&(B.matrix.copy(Vt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ut===!0&&B.cameras.push(Vt)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=i.getBinding();let Bt=p.getDepthInformation(et[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(Bt,s.renderState)}if(It&&It.includes("camera-access")&&M){t.state.unbindTexture(),p=i.getBinding();for(let Bt=0;Bt<et.length;Bt++){let se=et[Bt].camera;if(se){let Xt=h[se];Xt||(Xt=new oc,h[se]=Xt);let Vt=p.getCameraImage(se);Xt.sourceTexture=Vt}}}}for(let et=0;et<A.length;et++){let Ut=E[et],It=A[et];Ut!==null&&It!==void 0&&It.update(Ut,tt,c||r)}ie&&ie(Q,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),v=null}let le=new sb;le.setAnimationLoop(we),this.setAnimationLoop=function(Q){ie=Q},this.dispose=function(){}}},JR=new Oe,ub=new Ht;ub.set(-1,0,0,0,1,0,0,0,1);function KR(e,t){function n(_,h){_.matrixAutoUpdate===!0&&_.updateMatrix(),h.value.copy(_.matrix)}function i(_,h){h.color.getRGB(_.fogColor.value,o0(e)),h.isFog?(_.fogNear.value=h.near,_.fogFar.value=h.far):h.isFogExp2&&(_.fogDensity.value=h.density)}function s(_,h,m,S,g){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?a(_,h):h.isMeshLambertMaterial?(a(_,h),h.envMap&&(_.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(_,h),p(_,h)):h.isMeshPhongMaterial?(a(_,h),f(_,h),h.envMap&&(_.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(_,h),u(_,h),h.isMeshPhysicalMaterial&&d(_,h,g)):h.isMeshMatcapMaterial?(a(_,h),v(_,h)):h.isMeshDepthMaterial?a(_,h):h.isMeshDistanceMaterial?(a(_,h),M(_,h)):h.isMeshNormalMaterial?a(_,h):h.isLineBasicMaterial?(r(_,h),h.isLineDashedMaterial&&o(_,h)):h.isPointsMaterial?l(_,h,m,S):h.isSpriteMaterial?c(_,h):h.isShadowMaterial?(_.color.value.copy(h.color),_.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(_,h){_.opacity.value=h.opacity,h.color&&_.diffuse.value.copy(h.color),h.emissive&&_.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(_.map.value=h.map,n(h.map,_.mapTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,n(h.alphaMap,_.alphaMapTransform)),h.bumpMap&&(_.bumpMap.value=h.bumpMap,n(h.bumpMap,_.bumpMapTransform),_.bumpScale.value=h.bumpScale,h.side===Ln&&(_.bumpScale.value*=-1)),h.normalMap&&(_.normalMap.value=h.normalMap,n(h.normalMap,_.normalMapTransform),_.normalScale.value.copy(h.normalScale),h.side===Ln&&_.normalScale.value.negate()),h.displacementMap&&(_.displacementMap.value=h.displacementMap,n(h.displacementMap,_.displacementMapTransform),_.displacementScale.value=h.displacementScale,_.displacementBias.value=h.displacementBias),h.emissiveMap&&(_.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,_.emissiveMapTransform)),h.specularMap&&(_.specularMap.value=h.specularMap,n(h.specularMap,_.specularMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest);let m=t.get(h),S=m.envMap,g=m.envMapRotation;S&&(_.envMap.value=S,_.envMapRotation.value.setFromMatrix4(JR.makeRotationFromEuler(g)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(ub),_.reflectivity.value=h.reflectivity,_.ior.value=h.ior,_.refractionRatio.value=h.refractionRatio),h.lightMap&&(_.lightMap.value=h.lightMap,_.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,_.lightMapTransform)),h.aoMap&&(_.aoMap.value=h.aoMap,_.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,_.aoMapTransform))}function r(_,h){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,h.map&&(_.map.value=h.map,n(h.map,_.mapTransform))}function o(_,h){_.dashSize.value=h.dashSize,_.totalSize.value=h.dashSize+h.gapSize,_.scale.value=h.scale}function l(_,h,m,S){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,_.size.value=h.size*m,_.scale.value=S*.5,h.map&&(_.map.value=h.map,n(h.map,_.uvTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,n(h.alphaMap,_.alphaMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest)}function c(_,h){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,_.rotation.value=h.rotation,h.map&&(_.map.value=h.map,n(h.map,_.mapTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,n(h.alphaMap,_.alphaMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest)}function f(_,h){_.specular.value.copy(h.specular),_.shininess.value=Math.max(h.shininess,1e-4)}function p(_,h){h.gradientMap&&(_.gradientMap.value=h.gradientMap)}function u(_,h){_.metalness.value=h.metalness,h.metalnessMap&&(_.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,_.metalnessMapTransform)),_.roughness.value=h.roughness,h.roughnessMap&&(_.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,_.roughnessMapTransform)),h.envMap&&(_.envMapIntensity.value=h.envMapIntensity)}function d(_,h,m){_.ior.value=h.ior,h.sheen>0&&(_.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),_.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(_.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,_.sheenColorMapTransform)),h.sheenRoughnessMap&&(_.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,_.sheenRoughnessMapTransform))),h.clearcoat>0&&(_.clearcoat.value=h.clearcoat,_.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(_.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,_.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(_.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ln&&_.clearcoatNormalScale.value.negate())),h.dispersion>0&&(_.dispersion.value=h.dispersion),h.iridescence>0&&(_.iridescence.value=h.iridescence,_.iridescenceIOR.value=h.iridescenceIOR,_.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(_.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,_.iridescenceMapTransform)),h.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),h.transmission>0&&(_.transmission.value=h.transmission,_.transmissionSamplerMap.value=m.texture,_.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(_.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,_.transmissionMapTransform)),_.thickness.value=h.thickness,h.thicknessMap&&(_.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=h.attenuationDistance,_.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(_.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(_.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=h.specularIntensity,_.specularColor.value.copy(h.specularColor),h.specularColorMap&&(_.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,_.specularColorMapTransform)),h.specularIntensityMap&&(_.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,h){h.matcap&&(_.matcap.value=h.matcap)}function M(_,h){let m=t.get(h).light;_.referencePosition.value.setFromMatrixPosition(m.matrixWorld),_.nearDistance.value=m.shadow.camera.near,_.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function QR(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,A){let E=A.program;i.uniformBlockBinding(g,E)}function c(g,A){let E=s[g.id];E===void 0&&(_(g),E=f(g),s[g.id]=E,g.addEventListener("dispose",m));let w=A.program;i.updateUBOMapping(g,w);let y=t.render.frame;a[g.id]!==y&&(u(g),a[g.id]=y)}function f(g){let A=p();g.__bindingPointIndex=A;let E=e.createBuffer(),w=g.__size,y=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,w,y),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,A,E),E}function p(){for(let g=0;g<o;g++)if(r.indexOf(g)===-1)return r.push(g),g;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(g){let A=s[g.id],E=g.uniforms,w=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let y=0,T=E.length;y<T;y++){let R=E[y];if(Array.isArray(R))for(let D=0,B=R.length;D<B;D++)d(R[D],y,D,w);else d(R,y,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(g,A,E,w){if(M(g,A,E,w)===!0){let y=g.__offset,T=g.value;if(Array.isArray(T)){let R=0;for(let D=0;D<T.length;D++){let B=T[D],Y=h(B);v(B,g.__data,R),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(R+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(T,g.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,y,g.__data)}}function v(g,A,E){typeof g=="number"||typeof g=="boolean"?A[0]=g:g.isMatrix3?(A[0]=g.elements[0],A[1]=g.elements[1],A[2]=g.elements[2],A[3]=0,A[4]=g.elements[3],A[5]=g.elements[4],A[6]=g.elements[5],A[7]=0,A[8]=g.elements[6],A[9]=g.elements[7],A[10]=g.elements[8],A[11]=0):ArrayBuffer.isView(g)?A.set(new g.constructor(g.buffer,g.byteOffset,A.length)):g.toArray(A,E)}function M(g,A,E,w){let y=g.value,T=A+"_"+E;if(w[T]===void 0)return typeof y=="number"||typeof y=="boolean"?w[T]=y:ArrayBuffer.isView(y)?w[T]=y.slice():w[T]=y.clone(),!0;{let R=w[T];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return w[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function _(g){let A=g.uniforms,E=0,w=16;for(let T=0,R=A.length;T<R;T++){let D=Array.isArray(A[T])?A[T]:[A[T]];for(let B=0,Y=D.length;B<Y;B++){let K=D[B],F=Array.isArray(K.value)?K.value:[K.value];for(let q=0,k=F.length;q<k;q++){let $=F[q],rt=h($),mt=E%w,yt=mt%rt.boundary,gt=mt+yt;E+=yt,gt!==0&&w-gt<rt.storage&&(E+=w-gt),K.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=E,E+=rt.storage}}}let y=E%w;return y>0&&(E+=w-y),g.__size=E,g.__cache={},this}function h(g){let A={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(A.boundary=4,A.storage=4):g.isVector2?(A.boundary=8,A.storage=8):g.isVector3||g.isColor?(A.boundary=16,A.storage=12):g.isVector4?(A.boundary=16,A.storage=16):g.isMatrix3?(A.boundary=48,A.storage=48):g.isMatrix4?(A.boundary=64,A.storage=64):g.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(A.boundary=16,A.storage=g.byteLength):Lt("WebGLRenderer: Unsupported uniform value type.",g),A}function m(g){let A=g.target;A.removeEventListener("dispose",m);let E=r.indexOf(A.__bindingPointIndex);r.splice(E,1),e.deleteBuffer(s[A.id]),delete s[A.id],delete a[A.id]}function S(){for(let g in s)e.deleteBuffer(s[g]);r=[],s={},a={}}return{bind:l,update:c,dispose:S}}var jR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$i=null;function $R(){return $i===null&&($i=new jh(jR,16,16,Ca,ji),$i.name="DFG_LUT",$i.minFilter=yn,$i.magFilter=yn,$i.wrapS=Yi,$i.wrapT=Yi,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}var pd=class{constructor(t={}){let{canvas:n=RM(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Gn}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;let M=d,_=new Set([Df,Rf,Cf]),h=new Set([Gn,Ii,Po,Bo,Af,wf]),m=new Uint32Array(4),S=new Int32Array(4),g=new O,A=null,E=null,w=[],y=[],T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,B=null,Y=null,K=null,F=null;this._outputColorSpace=fn;let q=0,k=0,$=null,rt=-1,mt=null,yt=new ze,gt=new ze,ie=null,we=new Zt(0),le=0,Q=n.width,tt=n.height,et=1,Ut=null,It=null,Rt=new ze(0,0,Q,tt),Ee=new ze(0,0,Q,tt),Bt=!1,se=new Uo,Xt=!1,Vt=!1,ce=new Oe,Fe=new O,ye=new ze,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function Ce(){return $===null?et:1}let U=i;function re(b,I){return n.getContext(b,I)}try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"185"}`),n.addEventListener("webglcontextlost",it,!1),n.addEventListener("webglcontextrestored",ot,!1),n.addEventListener("webglcontextcreationerror",zt,!1),U===null){let I="webgl2";if(U=re(I,b),U===null)throw re(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Pt("WebGLRenderer: "+b.message),b}let oe,C,x,L,z,X,lt,ct,W,J,dt,At,pt,ht,wt,Nt,Gt,N,ut,Z,ft,_t,nt;function Et(){oe=new rC(U),oe.init(),ft=new qR(U,oe),C=new j2(U,oe,t,ft),x=new XR(U,oe),C.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),Y=U.createFramebuffer(),K=U.createFramebuffer(),F=U.createFramebuffer(),L=new cC(U),z=new DR,X=new WR(U,oe,x,z,C,ft,L),lt=new aC(R),ct=new dA(U),_t=new K2(U,ct),W=new oC(U,ct,L,_t),J=new hC(U,W,ct,_t,L),N=new uC(U,C,X),wt=new $2(z),dt=new RR(R,lt,oe,C,_t,wt),At=new KR(R,z),pt=new NR,ht=new zR(oe),Gt=new J2(R,lt,x,J,v,l),Nt=new kR(R,J,C),nt=new QR(U,L,C,x),ut=new Q2(U,oe,L),Z=new lC(U,oe,L),L.programs=dt.programs,R.capabilities=C,R.extensions=oe,R.properties=z,R.renderLists=pt,R.shadowMap=Nt,R.state=x,R.info=L}Et(),M!==Gn&&(T=new dC(M,n.width,n.height,o,s,a));let P=new D0(R,U);this.xr=P,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=oe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=oe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(b){b!==void 0&&(et=b,this.setSize(Q,tt,!1))},this.getSize=function(b){return b.set(Q,tt)},this.setSize=function(b,I,G=!0){if(P.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=b,tt=I,n.width=Math.floor(b*et),n.height=Math.floor(I*et),G===!0&&(n.style.width=b+"px",n.style.height=I+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(Q*et,tt*et).floor()},this.setDrawingBufferSize=function(b,I,G){Q=b,tt=I,et=G,n.width=Math.floor(b*G),n.height=Math.floor(I*G),this.setViewport(0,0,b,I)},this.setEffects=function(b){if(M===Gn){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let I=0;I<b.length;I++)if(b[I].isOutputPass===!0){Lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(yt)},this.getViewport=function(b){return b.copy(Rt)},this.setViewport=function(b,I,G,V){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,I,G,V),x.viewport(yt.copy(Rt).multiplyScalar(et).round())},this.getScissor=function(b){return b.copy(Ee)},this.setScissor=function(b,I,G,V){b.isVector4?Ee.set(b.x,b.y,b.z,b.w):Ee.set(b,I,G,V),x.scissor(gt.copy(Ee).multiplyScalar(et).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(b){x.setScissorTest(Bt=b)},this.setOpaqueSort=function(b){Ut=b},this.setTransparentSort=function(b){It=b},this.getClearColor=function(b){return b.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor(...arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha(...arguments)},this.clear=function(b=!0,I=!0,G=!0){let V=0;if(b){let H=!1;if($!==null){let St=$.texture.format;H=_.has(St)}if(H){let St=$.texture.type,bt=h.has(St),xt=Gt.getClearColor(),Tt=Gt.getClearAlpha(),Ct=xt.r,Wt=xt.g,Kt=xt.b;bt?(m[0]=Ct,m[1]=Wt,m[2]=Kt,m[3]=Tt,U.clearBufferuiv(U.COLOR,0,m)):(S[0]=Ct,S[1]=Wt,S[2]=Kt,S[3]=Tt,U.clearBufferiv(U.COLOR,0,S))}else V|=U.COLOR_BUFFER_BIT}I&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),B=b},this.dispose=function(){n.removeEventListener("webglcontextlost",it,!1),n.removeEventListener("webglcontextrestored",ot,!1),n.removeEventListener("webglcontextcreationerror",zt,!1),Gt.dispose(),pt.dispose(),ht.dispose(),z.dispose(),lt.dispose(),J.dispose(),_t.dispose(),nt.dispose(),dt.dispose(),P.dispose(),P.removeEventListener("sessionstart",Da),P.removeEventListener("sessionend",Rc),es.stop()};function it(b){b.preventDefault(),a0("WebGLRenderer: Context Lost."),D=!0}function ot(){a0("WebGLRenderer: Context Restored."),D=!1;let b=L.autoReset,I=Nt.enabled,G=Nt.autoUpdate,V=Nt.needsUpdate,H=Nt.type;Et(),L.autoReset=b,Nt.enabled=I,Nt.autoUpdate=G,Nt.needsUpdate=V,Nt.type=H}function zt(b){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ot(b){let I=b.target;I.removeEventListener("dispose",Ot),st(I)}function st(b){Ke(b),z.remove(b)}function Ke(b){let I=z.get(b).programs;I!==void 0&&(I.forEach(function(G){dt.releaseProgram(G)}),b.isShaderMaterial&&dt.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,G,V,H,St){I===null&&(I=ge);let bt=H.isMesh&&H.matrixWorld.determinantAffine()<0,xt=vb(b,I,G,V,H);x.setMaterial(V,bt);let Tt=G.index,Ct=1;if(V.wireframe===!0){if(Tt=W.getWireframeAttribute(G),Tt===void 0)return;Ct=2}let Wt=G.drawRange,Kt=G.attributes.position,Dt=Wt.start*Ct,_e=(Wt.start+Wt.count)*Ct;St!==null&&(Dt=Math.max(Dt,St.start*Ct),_e=Math.min(_e,(St.start+St.count)*Ct)),Tt!==null?(Dt=Math.max(Dt,0),_e=Math.min(_e,Tt.count)):Kt!=null&&(Dt=Math.max(Dt,0),_e=Math.min(_e,Kt.count));let We=_e-Dt;if(We<0||We===1/0)return;_t.setup(H,V,xt,G,Tt);let He,Se=ut;if(Tt!==null&&(He=ct.get(Tt),Se=Z,Se.setIndex(He)),H.isMesh)V.wireframe===!0?(x.setLineWidth(V.wireframeLinewidth*Ce()),Se.setMode(U.LINES)):Se.setMode(U.TRIANGLES);else if(H.isLine){let Mn=V.linewidth;Mn===void 0&&(Mn=1),x.setLineWidth(Mn*Ce()),H.isLineSegments?Se.setMode(U.LINES):H.isLineLoop?Se.setMode(U.LINE_LOOP):Se.setMode(U.LINE_STRIP)}else H.isPoints?Se.setMode(U.POINTS):H.isSprite&&Se.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Se.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Mn=H._multiDrawStarts,Mt=H._multiDrawCounts,kn=H._multiDrawCount,ue=Tt?ct.get(Tt).bytesPerElement:1,li=z.get(V).currentProgram.getUniforms();for(let Bi=0;Bi<kn;Bi++)li.setValue(U,"_gl_DrawID",Bi),Se.render(Mn[Bi]/ue,Mt[Bi])}else if(H.isInstancedMesh)Se.renderInstances(Dt,We,H.count);else if(G.isInstancedBufferGeometry){let Mn=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Mt=Math.min(G.instanceCount,Mn);Se.renderInstances(Dt,We,Mt)}else Se.render(Dt,We)};function Qe(b,I,G){b.transparent===!0&&b.side===Mi&&b.forceSinglePass===!1?(b.side=Ln,b.needsUpdate=!0,Os(b,I,G),b.side=Rs,b.needsUpdate=!0,Os(b,I,G),b.side=Mi):Os(b,I,G)}this.compile=function(b,I,G=null){G===null&&(G=b),E=ht.get(G),E.init(I),y.push(E),G.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),b!==G&&b.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights();let V=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let St=H.material;if(St)if(Array.isArray(St))for(let bt=0;bt<St.length;bt++){let xt=St[bt];Qe(xt,G,H),V.add(xt)}else Qe(St,G,H),V.add(St)}),E=y.pop(),V},this.compileAsync=function(b,I,G=null){let V=this.compile(b,I,G);return new Promise(H=>{function St(){if(V.forEach(function(bt){z.get(bt).currentProgram.isReady()&&V.delete(bt)}),V.size===0){H(b);return}setTimeout(St,10)}oe.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Ve=null;function Re(b){Ve&&Ve(b)}function Da(){es.stop()}function Rc(){es.start()}let es=new sb;es.setAnimationLoop(Re),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(b){Ve=b,P.setAnimationLoop(b),b===null?es.stop():es.start()},P.addEventListener("sessionstart",Da),P.addEventListener("sessionend",Rc),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(b,I);let G=P.enabled===!0&&P.isPresenting===!0,V=T!==null&&($===null||G)&&T.begin(R,$);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(P.cameraAutoUpdate===!0&&P.updateCamera(I),I=P.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,I,$),E=ht.get(b,y.length),E.init(I),E.state.textureUnits=X.getTextureUnits(),y.push(E),ce.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),se.setFromProjectionMatrix(ce,Ui,I.reversedDepth),Vt=this.localClippingEnabled,Xt=wt.init(this.clippingPlanes,Vt),A=pt.get(b,w.length),A.init(),w.push(A),P.enabled===!0&&P.isPresenting===!0){let bt=R.xr.getDepthSensingMesh();bt!==null&&Go(bt,I,-1/0,R.sortObjects)}Go(b,I,0,R.sortObjects),A.finish(),R.sortObjects===!0&&A.sort(Ut,It,I.reversedDepth),Qt=P.enabled===!1||P.isPresenting===!1||P.hasDepthSensing()===!1,Qt&&Gt.addToRenderList(A,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xt===!0&&wt.beginShadows();let H=E.state.shadowsArray;if(Nt.render(H,b,I),Xt===!0&&wt.endShadows(),(V&&T.hasRenderPass())===!1){let bt=A.opaque,xt=A.transmissive;if(E.setupLights(),I.isArrayCamera){let Tt=I.cameras;if(xt.length>0)for(let Ct=0,Wt=Tt.length;Ct<Wt;Ct++){let Kt=Tt[Ct];Uc(bt,xt,b,Kt)}Qt&&Gt.render(b);for(let Ct=0,Wt=Tt.length;Ct<Wt;Ct++){let Kt=Tt[Ct];Dc(A,b,Kt,Kt.viewport)}}else xt.length>0&&Uc(bt,xt,b,I),Qt&&Gt.render(b),Dc(A,b,I)}$!==null&&k===0&&(X.updateMultisampleRenderTarget($),X.updateRenderTargetMipmap($)),V&&T.end(R),b.isScene===!0&&b.onAfterRender(R,b,I),_t.resetDefaultState(),rt=-1,mt=null,y.pop(),y.length>0?(E=y[y.length-1],X.setTextureUnits(E.state.textureUnits),Xt===!0&&wt.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?A=w[w.length-1]:A=null,B!==null&&B.renderEnd()};function Go(b,I,G,V){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||se.intersectsSprite(b)){V&&ye.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ce);let bt=J.update(b),xt=b.material;xt.visible&&A.push(b,bt,xt,G,ye.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||se.intersectsObject(b))){let bt=J.update(b),xt=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ye.copy(b.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),ye.copy(bt.boundingSphere.center)),ye.applyMatrix4(b.matrixWorld).applyMatrix4(ce)),Array.isArray(xt)){let Tt=bt.groups;for(let Ct=0,Wt=Tt.length;Ct<Wt;Ct++){let Kt=Tt[Ct],Dt=xt[Kt.materialIndex];Dt&&Dt.visible&&A.push(b,bt,Dt,G,ye.z,Kt)}}else xt.visible&&A.push(b,bt,xt,G,ye.z,null)}}let St=b.children;for(let bt=0,xt=St.length;bt<xt;bt++)Go(St[bt],I,G,V)}function Dc(b,I,G,V){let{opaque:H,transmissive:St,transparent:bt}=b;E.setupLightsView(G),Xt===!0&&wt.setGlobalState(R.clippingPlanes,G),V&&x.viewport(yt.copy(V)),H.length>0&&hr(H,I,G),St.length>0&&hr(St,I,G),bt.length>0&&hr(bt,I,G),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Uc(b,I,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let Dt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new ii(1,1,{generateMipmaps:!0,type:Dt?ji:Gn,minFilter:Aa,samples:Math.max(4,C.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let St=E.state.transmissionRenderTarget[V.id],bt=V.viewport||yt;St.setSize(bt.z*R.transmissionResolutionScale,bt.w*R.transmissionResolutionScale);let xt=R.getRenderTarget(),Tt=R.getActiveCubeFace(),Ct=R.getActiveMipmapLevel();R.setRenderTarget(St),R.getClearColor(we),le=R.getClearAlpha(),le<1&&R.setClearColor(16777215,.5),R.clear(),Qt&&Gt.render(G);let Wt=R.toneMapping;R.toneMapping=Li;let Kt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),Xt===!0&&wt.setGlobalState(R.clippingPlanes,V),hr(b,G,V),X.updateMultisampleRenderTarget(St),X.updateRenderTargetMipmap(St),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let _e=0,We=I.length;_e<We;_e++){let He=I[_e],{object:Se,geometry:Mn,material:Mt,group:kn}=He;if(Mt.side===Mi&&Se.layers.test(V.layers)){let ue=Mt.side;Mt.side=Ln,Mt.needsUpdate=!0,fr(Se,G,V,Mn,Mt,kn),Mt.side=ue,Mt.needsUpdate=!0,Dt=!0}}Dt===!0&&(X.updateMultisampleRenderTarget(St),X.updateRenderTargetMipmap(St))}R.setRenderTarget(xt,Tt,Ct),R.setClearColor(we,le),Kt!==void 0&&(V.viewport=Kt),R.toneMapping=Wt}function hr(b,I,G){let V=I.isScene===!0?I.overrideMaterial:null;for(let H=0,St=b.length;H<St;H++){let bt=b[H],{object:xt,geometry:Tt,group:Ct}=bt,Wt=bt.material;Wt.allowOverride===!0&&V!==null&&(Wt=V),xt.layers.test(G.layers)&&fr(xt,I,G,Tt,Wt,Ct)}}function fr(b,I,G,V,H,St){b.onBeforeRender(R,I,G,V,H,St),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(R,I,G,V,b,St),H.transparent===!0&&H.side===Mi&&H.forceSinglePass===!1?(H.side=Ln,H.needsUpdate=!0,R.renderBufferDirect(G,I,V,H,b,St),H.side=Rs,H.needsUpdate=!0,R.renderBufferDirect(G,I,V,H,b,St),H.side=Mi):R.renderBufferDirect(G,I,V,H,b,St),b.onAfterRender(R,I,G,V,H,St)}function Os(b,I,G){I.isScene!==!0&&(I=ge);let V=z.get(b),H=E.state.lights,St=E.state.shadowsArray,bt=H.state.version,xt=dt.getParameters(b,H.state,St,I,G,E.state.lightProbeGridArray),Tt=dt.getProgramCacheKey(xt),Ct=V.programs;V.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?I.environment:null,V.fog=I.fog;let Wt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;V.envMap=lt.get(b.envMap||V.environment,Wt),V.envMapRotation=V.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,Ct===void 0&&(b.addEventListener("dispose",Ot),Ct=new Map,V.programs=Ct);let Kt=Ct.get(Tt);if(Kt!==void 0){if(V.currentProgram===Kt&&V.lightsStateVersion===bt)return Lc(b,xt),Kt}else xt.uniforms=dt.getUniforms(b),B!==null&&b.isNodeMaterial&&B.build(b,G,xt),b.onBeforeCompile(xt,R),Kt=dt.acquireProgram(xt,Tt),Ct.set(Tt,Kt),V.uniforms=xt.uniforms;let Dt=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Dt.clippingPlanes=wt.uniform),Lc(b,xt),V.needsLights=yb(b),V.lightsStateVersion=bt,V.needsLights&&(Dt.ambientLightColor.value=H.state.ambient,Dt.lightProbe.value=H.state.probe,Dt.directionalLights.value=H.state.directional,Dt.directionalLightShadows.value=H.state.directionalShadow,Dt.spotLights.value=H.state.spot,Dt.spotLightShadows.value=H.state.spotShadow,Dt.rectAreaLights.value=H.state.rectArea,Dt.ltc_1.value=H.state.rectAreaLTC1,Dt.ltc_2.value=H.state.rectAreaLTC2,Dt.pointLights.value=H.state.point,Dt.pointLightShadows.value=H.state.pointShadow,Dt.hemisphereLights.value=H.state.hemi,Dt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Dt.spotLightMatrix.value=H.state.spotLightMatrix,Dt.spotLightMap.value=H.state.spotLightMap,Dt.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=Kt,V.uniformsList=null,Kt}function Nc(b){if(b.uniformsList===null){let I=b.currentProgram.getUniforms();b.uniformsList=Vo.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function Lc(b,I){let G=z.get(b);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function _b(b,I){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;g.setFromMatrixPosition(I.matrixWorld);for(let G=0,V=b.length;G<V;G++){let H=b[G];if(H.texture!==null&&H.boundingBox.containsPoint(g))return H}return null}function vb(b,I,G,V,H){I.isScene!==!0&&(I=ge),X.resetTextureUnits();let St=I.fog,bt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?I.environment:null,xt=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ee.workingColorSpace,Tt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ct=lt.get(V.envMap||bt,Tt),Wt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Kt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Dt=!!G.morphAttributes.position,_e=!!G.morphAttributes.normal,We=!!G.morphAttributes.color,He=Li;V.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(He=R.toneMapping);let Se=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Mn=Se!==void 0?Se.length:0,Mt=z.get(V),kn=E.state.lights;if(Xt===!0&&(Vt===!0||b!==mt)){let Te=b===mt&&V.id===rt;wt.setState(V,b,Te)}let ue=!1;V.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==kn.state.version||Mt.outputColorSpace!==xt||H.isBatchedMesh&&Mt.batching===!1||!H.isBatchedMesh&&Mt.batching===!0||H.isBatchedMesh&&Mt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Mt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Mt.instancing===!1||!H.isInstancedMesh&&Mt.instancing===!0||H.isSkinnedMesh&&Mt.skinning===!1||!H.isSkinnedMesh&&Mt.skinning===!0||H.isInstancedMesh&&Mt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Mt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Mt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Mt.instancingMorph===!1&&H.morphTexture!==null||Mt.envMap!==Ct||V.fog===!0&&Mt.fog!==St||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==wt.numPlanes||Mt.numIntersection!==wt.numIntersection)||Mt.vertexAlphas!==Wt||Mt.vertexTangents!==Kt||Mt.morphTargets!==Dt||Mt.morphNormals!==_e||Mt.morphColors!==We||Mt.toneMapping!==He||Mt.morphTargetsCount!==Mn||!!Mt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ue=!0):(ue=!0,Mt.__version=V.version);let li=Mt.currentProgram;ue===!0&&(li=Os(V,I,H),B&&V.isNodeMaterial&&B.onUpdateProgram(V,li,Mt));let Bi=!1,Ps=!1,dr=!1,Me=li.getUniforms(),qe=Mt.uniforms;if(x.useProgram(li.program)&&(Bi=!0,Ps=!0,dr=!0),V.id!==rt&&(rt=V.id,Ps=!0),Mt.needsLights){let Te=_b(E.state.lightProbeGridArray,H);Mt.lightProbeGrid!==Te&&(Mt.lightProbeGrid=Te,Ps=!0)}if(Bi||mt!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Me.setValue(U,"projectionMatrix",b.projectionMatrix),Me.setValue(U,"viewMatrix",b.matrixWorldInverse);let zs=Me.map.cameraPosition;zs!==void 0&&zs.setValue(U,Fe.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&Me.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Me.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),mt!==b&&(mt=b,Ps=!0,dr=!0)}if(Mt.needsLights&&(kn.state.directionalShadowMap.length>0&&Me.setValue(U,"directionalShadowMap",kn.state.directionalShadowMap,X),kn.state.spotShadowMap.length>0&&Me.setValue(U,"spotShadowMap",kn.state.spotShadowMap,X),kn.state.pointShadowMap.length>0&&Me.setValue(U,"pointShadowMap",kn.state.pointShadowMap,X)),H.isSkinnedMesh){Me.setOptional(U,H,"bindMatrix"),Me.setOptional(U,H,"bindMatrixInverse");let Te=H.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),Me.setValue(U,"boneTexture",Te.boneTexture,X))}H.isBatchedMesh&&(Me.setOptional(U,H,"batchingTexture"),Me.setValue(U,"batchingTexture",H._matricesTexture,X),Me.setOptional(U,H,"batchingIdTexture"),Me.setValue(U,"batchingIdTexture",H._indirectTexture,X),Me.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&Me.setValue(U,"batchingColorTexture",H._colorsTexture,X));let Bs=G.morphAttributes;if((Bs.position!==void 0||Bs.normal!==void 0||Bs.color!==void 0)&&N.update(H,G,li),(Ps||Mt.receiveShadow!==H.receiveShadow)&&(Mt.receiveShadow=H.receiveShadow,Me.setValue(U,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&I.environment!==null&&(qe.envMapIntensity.value=I.environmentIntensity),qe.dfgLUT!==void 0&&(qe.dfgLUT.value=$R()),Ps){if(Me.setValue(U,"toneMappingExposure",R.toneMappingExposure),Mt.needsLights&&xb(qe,dr),St&&V.fog===!0&&At.refreshFogUniforms(qe,St),At.refreshMaterialUniforms(qe,V,et,tt,E.state.transmissionRenderTarget[b.id]),Mt.needsLights&&Mt.lightProbeGrid){let Te=Mt.lightProbeGrid;qe.probesSH.value=Te.texture,qe.probesMin.value.copy(Te.boundingBox.min),qe.probesMax.value.copy(Te.boundingBox.max),qe.probesResolution.value.copy(Te.resolution)}Vo.upload(U,Nc(Mt),qe,X)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Vo.upload(U,Nc(Mt),qe,X),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Me.setValue(U,"center",H.center),Me.setValue(U,"modelViewMatrix",H.modelViewMatrix),Me.setValue(U,"normalMatrix",H.normalMatrix),Me.setValue(U,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){let Te=V.uniformsGroups;for(let zs=0,pr=Te.length;zs<pr;zs++){let N0=Te[zs];nt.update(N0,li),nt.bind(N0,li)}}return li}function xb(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function yb(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(b,I,G){let V=z.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),z.get(b.texture).__webglTexture=I,z.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,I){let G=z.get(b);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,G=0){$=b,q=I,k=G;let V=null,H=!1,St=!1;if(b){let xt=z.get(b);if(xt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,xt.__webglFramebuffer),yt.copy(b.viewport),gt.copy(b.scissor),ie=b.scissorTest,x.viewport(yt),x.scissor(gt),x.setScissorTest(ie),rt=-1;return}else if(xt.__webglFramebuffer===void 0)X.setupRenderTarget(b);else if(xt.__hasExternalTextures)X.rebindTextures(b,z.get(b.texture).__webglTexture,z.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Wt=b.depthTexture;if(xt.__boundDepthTexture!==Wt){if(Wt!==null&&z.has(Wt)&&(b.width!==Wt.image.width||b.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(b)}}let Tt=b.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(St=!0);let Ct=z.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ct[I])?V=Ct[I][G]:V=Ct[I],H=!0):b.samples>0&&X.useMultisampledRTT(b)===!1?V=z.get(b).__webglMultisampledFramebuffer:Array.isArray(Ct)?V=Ct[G]:V=Ct,yt.copy(b.viewport),gt.copy(b.scissor),ie=b.scissorTest}else yt.copy(Rt).multiplyScalar(et).floor(),gt.copy(Ee).multiplyScalar(et).floor(),ie=Bt;if(G!==0&&(V=Y),x.bindFramebuffer(U.FRAMEBUFFER,V)&&x.drawBuffers(b,V),x.viewport(yt),x.scissor(gt),x.setScissorTest(ie),H){let xt=z.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,xt.__webglTexture,G)}else if(St){let xt=I;for(let Tt=0;Tt<b.textures.length;Tt++){let Ct=z.get(b.textures[Tt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Tt,Ct.__webglTexture,G,xt)}}else if(b!==null&&G!==0){let xt=z.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xt.__webglTexture,G)}rt=-1},this.readRenderTargetPixels=function(b,I,G,V,H,St,bt,xt=0){if(!(b&&b.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=z.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Tt=Tt[bt]),Tt){x.bindFramebuffer(U.FRAMEBUFFER,Tt);try{let Ct=b.textures[xt],Wt=Ct.format,Kt=Ct.type;if(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xt),!C.textureFormatReadable(Wt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Kt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-V&&G>=0&&G<=b.height-H&&U.readPixels(I,G,V,H,ft.convert(Wt),ft.convert(Kt),St)}finally{let Ct=$!==null?z.get($).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(b,I,G,V,H,St,bt,xt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=z.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Tt=Tt[bt]),Tt)if(I>=0&&I<=b.width-V&&G>=0&&G<=b.height-H){x.bindFramebuffer(U.FRAMEBUFFER,Tt);let Ct=b.textures[xt],Wt=Ct.format,Kt=Ct.type;if(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xt),!C.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Dt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Dt),U.bufferData(U.PIXEL_PACK_BUFFER,St.byteLength,U.STREAM_READ),U.readPixels(I,G,V,H,ft.convert(Wt),ft.convert(Kt),0);let _e=$!==null?z.get($).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,_e);let We=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await UM(U,We,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Dt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,St),U.deleteBuffer(Dt),U.deleteSync(We),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,I=null,G=0){let V=Math.pow(2,-G),H=Math.floor(b.image.width*V),St=Math.floor(b.image.height*V),bt=I!==null?I.x:0,xt=I!==null?I.y:0;X.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,bt,xt,H,St),x.unbindTexture()},this.copyTextureToTexture=function(b,I,G=null,V=null,H=0,St=0){let bt,xt,Tt,Ct,Wt,Kt,Dt,_e,We,He=b.isCompressedTexture?b.mipmaps[St]:b.image;if(G!==null)bt=G.max.x-G.min.x,xt=G.max.y-G.min.y,Tt=G.isBox3?G.max.z-G.min.z:1,Ct=G.min.x,Wt=G.min.y,Kt=G.isBox3?G.min.z:0;else{let qe=Math.pow(2,-H);bt=Math.floor(He.width*qe),xt=Math.floor(He.height*qe),b.isDataArrayTexture?Tt=He.depth:b.isData3DTexture?Tt=Math.floor(He.depth*qe):Tt=1,Ct=0,Wt=0,Kt=0}V!==null?(Dt=V.x,_e=V.y,We=V.z):(Dt=0,_e=0,We=0);let Se=ft.convert(I.format),Mn=ft.convert(I.type),Mt;I.isData3DTexture?(X.setTexture3D(I,0),Mt=U.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(X.setTexture2DArray(I,0),Mt=U.TEXTURE_2D_ARRAY):(X.setTexture2D(I,0),Mt=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);let kn=x.getParameter(U.UNPACK_ROW_LENGTH),ue=x.getParameter(U.UNPACK_IMAGE_HEIGHT),li=x.getParameter(U.UNPACK_SKIP_PIXELS),Bi=x.getParameter(U.UNPACK_SKIP_ROWS),Ps=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,He.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,He.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Ct),x.pixelStorei(U.UNPACK_SKIP_ROWS,Wt),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Kt);let dr=b.isDataArrayTexture||b.isData3DTexture,Me=I.isDataArrayTexture||I.isData3DTexture;if(b.isDepthTexture){let qe=z.get(b),Bs=z.get(I),Te=z.get(qe.__renderTarget),zs=z.get(Bs.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,Te.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,zs.__webglFramebuffer);for(let pr=0;pr<Tt;pr++)dr&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,z.get(b).__webglTexture,H,Kt+pr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,z.get(I).__webglTexture,St,We+pr)),U.blitFramebuffer(Ct,Wt,bt,xt,Dt,_e,bt,xt,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||z.has(b)){let qe=z.get(b),Bs=z.get(I);x.bindFramebuffer(U.READ_FRAMEBUFFER,K),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,F);for(let Te=0;Te<Tt;Te++)dr?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,qe.__webglTexture,H,Kt+Te):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,qe.__webglTexture,H),Me?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Bs.__webglTexture,St,We+Te):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Bs.__webglTexture,St),H!==0?U.blitFramebuffer(Ct,Wt,bt,xt,Dt,_e,bt,xt,U.COLOR_BUFFER_BIT,U.NEAREST):Me?U.copyTexSubImage3D(Mt,St,Dt,_e,We+Te,Ct,Wt,bt,xt):U.copyTexSubImage2D(Mt,St,Dt,_e,Ct,Wt,bt,xt);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Me?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Mt,St,Dt,_e,We,bt,xt,Tt,Se,Mn,He.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(Mt,St,Dt,_e,We,bt,xt,Tt,Se,He.data):U.texSubImage3D(Mt,St,Dt,_e,We,bt,xt,Tt,Se,Mn,He):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,St,Dt,_e,bt,xt,Se,Mn,He.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,St,Dt,_e,He.width,He.height,Se,He.data):U.texSubImage2D(U.TEXTURE_2D,St,Dt,_e,bt,xt,Se,Mn,He);x.pixelStorei(U.UNPACK_ROW_LENGTH,kn),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ue),x.pixelStorei(U.UNPACK_SKIP_PIXELS,li),x.pixelStorei(U.UNPACK_SKIP_ROWS,Bi),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Ps),St===0&&I.generateMipmaps&&U.generateMipmap(Mt),x.unbindTexture()},this.initRenderTarget=function(b){z.get(b).__webglFramebuffer===void 0&&X.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?X.setTextureCube(b,0):b.isData3DTexture?X.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?X.setTexture2DArray(b,0):X.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){q=0,k=0,$=null,x.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),n.unpackColorSpace=ee._getUnpackColorSpace()}};var at=mr(Cc()),Pi={news:{name:"\uC2E0\uBB38\uC9C0 \uB531\uC9C0",size:2.15,thickness:.12,hit:.95,mass:.86,accuracy:1.15,flatPower:1.09,standPower:.82,middleBoost:.01,preferredTilt:.18,flatVulnerability:.99,standVulnerability:1.03,backBias:.05,styleName:"\uB215\uD600\uCE58\uAE30"},note:{name:"\uACF5\uCC45 \uB531\uC9C0",size:1.95,thickness:.2,hit:1,mass:1,accuracy:1,flatPower:.98,standPower:.98,middleBoost:.06,preferredTilt:.5,flatVulnerability:1,standVulnerability:1,backBias:0,styleName:"\uBE44\uC2A4\uB4EC\uD788 \uCE58\uAE30"},cal:{name:"\uB2EC\uB825 \uB531\uC9C0",size:1.78,thickness:.31,hit:1.04,mass:1.38,accuracy:.82,flatPower:.82,standPower:1.1,middleBoost:.01,preferredTilt:.82,flatVulnerability:1.04,standVulnerability:.98,backBias:-.05,styleName:"\uC138\uC6CC\uCE58\uAE30"}},i3=.95,s3={easy:{error:.75,powerMin:.56,powerMax:.82,angleMistake:.28,edgeMin:.28,edgeSpan:.44},normal:{error:.42,powerMin:.7,powerMax:.91,angleMistake:.12,edgeMin:.42,edgeSpan:.3},hard:{error:.22,powerMin:.78,powerMax:.96,angleMistake:.05,edgeMin:.52,edgeSpan:.16}},a3={phase:"menu",turn:0,scores:[3,3],power:0,tilt:.46,message:"\uAC8C\uC784\uC744 \uC2DC\uC791\uD574 \uBCF4\uC138\uC694.",result:"",activeType:"note",targetFace:"front"};function U0(){let e=(0,Ei.useRef)(null),t=(0,Ei.useRef)(null),[n,i]=(0,Ei.useState)(a3),[s,a]=(0,Ei.useState)("ai"),[r,o]=(0,Ei.useState)("normal"),[l,c]=(0,Ei.useState)("note"),[f,p]=(0,Ei.useState)("cal"),[u,d]=(0,Ei.useState)(3);(0,Ei.useEffect)(()=>{let h=e.current;if(!h)return;let m=new nc;m.background=new Zt(1445642),m.fog=new ec(1445642,18,36);let S=new xn(42,1,.1,80);S.position.set(0,10.8,13.6),S.lookAt(0,0,-1.8);let g=new pd({antialias:!0,alpha:!1});g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.outputColorSpace=fn,g.shadowMap.enabled=!0,g.shadowMap.type=or,g.domElement.setAttribute("aria-label","\uB531\uC9C0\uCE58\uAE30 \uACBD\uAE30\uC7A5"),h.appendChild(g.domElement);let A=new fc(16771005,2758157,2.15);m.add(A);let E=new mc(16766106,4.2);E.position.set(-5,12,7),E.castShadow=!0,E.shadow.mapSize.set(2048,2048),E.shadow.camera.left=-12,E.shadow.camera.right=12,E.shadow.camera.top=12,E.shadow.camera.bottom=-12,m.add(E);let w=new pc(15152160,22,16,2);w.position.set(7,4,-7),m.add(w);function y(){let P=document.createElement("canvas");P.width=P.height=1024;let it=P.getContext("2d"),ot=it.createLinearGradient(0,0,1024,1024);ot.addColorStop(0,"#8f6d4e"),ot.addColorStop(.55,"#74543b"),ot.addColorStop(1,"#573a29"),it.fillStyle=ot,it.fillRect(0,0,1024,1024);for(let Ot=0;Ot<900;Ot++){let st=(Math.sin(Ot*91.73)*.5+.5)*1024,Ke=(Math.sin(Ot*47.21+1.7)*.5+.5)*1024,Qe=1+Ot*17%7;it.fillStyle=Ot%3?"rgba(34,18,10,.11)":"rgba(255,226,177,.07)",it.beginPath(),it.ellipse(st,Ke,Qe*1.7,Qe,Ot,0,Math.PI*2),it.fill()}let zt=new rr(P);return zt.colorSpace=fn,zt.anisotropy=g.capabilities.getMaxAnisotropy(),zt}let T=new Xe(new Sa(18,24),new ri({map:y(),roughness:1,metalness:0}));T.rotation.x=-Math.PI/2,T.position.z=-1.3,T.receiveShadow=!0,m.add(T);let R=new ri({color:10297624,roughness:.74}),D=new si(18.6,.48,.48),B=new si(.48,.48,24.6);[[0,.23,-13.3],[0,.23,10.7]].forEach(P=>{let it=new Xe(D,R);it.position.set(P[0],P[1],P[2]),it.castShadow=!0,m.add(it)}),[[-9.3,.23,-1.3],[9.3,.23,-1.3]].forEach(P=>{let it=new Xe(B,R);it.position.set(P[0],P[1],P[2]),it.castShadow=!0,m.add(it)});let Y=new Ns({color:16377021,transparent:!0,opacity:.5});[-9,8].forEach(P=>{let it=new Xe(new Sa(12,.045),Y);it.rotation.x=-Math.PI/2,it.position.set(0,.012,P),m.add(it)});let K=new Ni;for(let P=0;P<42;P++){let it=new Xe(new lc(.035+P%4*.012,0),new ri({color:P%2?5849135:10189402,roughness:1}));it.position.set(Math.sin(P*7.7)*8.4,.03,Math.sin(P*3.31+.8)*11-1.3),it.rotation.set(P,P*.4,P*.2),K.add(it)}m.add(K);let F=new Map;function q(P,it){let ot=`${P}-${it}`,zt=F.get(ot);if(zt)return zt;let Ot=document.createElement("canvas");Ot.width=Ot.height=512;let st=Ot.getContext("2d"),Ke=P===0?"#2f61d0":"#d7352c",Qe=P===0?"#17377e":"#82150f";st.fillStyle=Ke,st.fillRect(0,0,512,512);for(let Re=0;Re<4;Re++)st.save(),st.translate(256,256),st.rotate(Re*Math.PI/2),st.translate(-256,-256),st.fillStyle=Re%2?Ke:Qe,st.beginPath(),st.moveTo(0,0),st.lineTo(512,0),st.lineTo(256,256),st.closePath(),st.fill(),st.restore();if(st.strokeStyle="rgba(255,255,255,.42)",st.lineWidth=12,st.beginPath(),st.moveTo(0,0),st.lineTo(512,512),st.moveTo(512,0),st.lineTo(0,512),st.stroke(),it==="news"){st.globalAlpha=.32,st.fillStyle="#eee9dd",st.fillRect(90,82,332,348),st.strokeStyle="#333",st.lineWidth=5;for(let Re=120;Re<410;Re+=38)st.beginPath(),st.moveTo(116,Re),st.lineTo(396,Re),st.stroke()}else if(it==="note"){st.globalAlpha=.3,st.strokeStyle="#bce2ff",st.lineWidth=5;for(let Re=100;Re<430;Re+=42)st.beginPath(),st.moveTo(78,Re),st.lineTo(434,Re),st.stroke();st.strokeStyle="#ff9e91",st.beginPath(),st.moveTo(134,72),st.lineTo(134,440),st.stroke()}else st.globalAlpha=.9,st.fillStyle="#f4ecdc",st.fillRect(154,144,204,226),st.fillStyle="#b9241c",st.fillRect(154,144,204,52),st.fillStyle="#8b1a16",st.font="bold 112px sans-serif",st.textAlign="center",st.fillText("15",256,320);st.globalAlpha=1,st.strokeStyle="rgba(25,10,5,.8)",st.lineWidth=18,st.strokeRect(9,9,494,494);let Ve=new rr(Ot);return Ve.colorSpace=fn,Ve.anisotropy=g.capabilities.getMaxAnisotropy(),F.set(ot,Ve),Ve}function k(P,it){let ot=`back-${P}-${it}`,zt=F.get(ot);if(zt)return zt;let Ot=document.createElement("canvas");Ot.width=Ot.height=512;let st=Ot.getContext("2d"),Ke=P===0?"#274d9d":"#a42a22",Qe=it==="news"?"#d8ceb5":it==="note"?"#cdbd99":"#b7a078";st.fillStyle=Qe,st.fillRect(0,0,512,512),st.globalAlpha=.2,st.fillStyle=Ke;for(let Re=0;Re<4;Re++)st.save(),st.translate(256,256),st.rotate(Re*Math.PI/2),st.beginPath(),st.moveTo(0,0),st.lineTo(-256,-256),st.lineTo(256,-256),st.closePath(),st.fill(),st.restore();st.globalAlpha=.48,st.strokeStyle="#6e5b3e",st.lineWidth=it==="cal"?13:9,st.beginPath(),st.moveTo(18,18),st.lineTo(494,494),st.moveTo(494,18),st.lineTo(18,494),st.stroke(),st.globalAlpha=.7,st.fillStyle=Ke,st.save(),st.translate(256,256),st.rotate(Math.PI/4),st.fillRect(-48,-48,96,96),st.restore(),st.globalAlpha=1,st.strokeStyle="rgba(48,30,17,.78)",st.lineWidth=18,st.strokeRect(9,9,494,494);let Ve=new rr(Ot);return Ve.colorSpace=fn,Ve.anisotropy=g.capabilities.getMaxAnisotropy(),F.set(ot,Ve),Ve}function $(P,it){let ot=Pi[it],zt=new Ni,Ot=P===0?1521534:8525071,st=[new ri({color:Ot,roughness:.72}),new ri({color:Ot,roughness:.72}),new ri({map:q(P,it),roughness:.7}),new ri({map:k(P,it),roughness:.95}),new ri({color:Ot,roughness:.72}),new ri({color:Ot,roughness:.72})],Ke=new Xe(new si(ot.size,ot.thickness,ot.size),st);Ke.castShadow=!0,Ke.receiveShadow=!0,zt.add(Ke);let Qe=new ac(new cc(new si(ot.size*1.002,ot.thickness*1.02,ot.size*1.002)),new No({color:2757643,transparent:!0,opacity:.72}));return zt.add(Qe),zt.userData={team:P,type:it,face:"front"},zt}function rt(P){return Pi[P].thickness/2+.015}function mt(P,it,ot,zt){P.position.y=rt(it),P.rotation.set(ot==="back"?Math.PI:0,zt,0),P.userData.face=ot}function yt(P,it){let ot=it<.33?.25:it>.66?.45:.35,zt=An.clamp(ot+Pi[P].backBias,.18,.52);return Math.random()<zt?"back":"front"}let gt=new Ni,ie=new Xe(new uc(.22,.28,48),new Ns({color:16768082,transparent:!0,opacity:.95,side:Mi}));ie.rotation.x=-Math.PI/2,gt.add(ie);let we=new Ns({color:16768082}),le=new Xe(new si(.72,.025,.035),we),Q=new Xe(new si(.035,.025,.72),we);gt.add(le,Q),gt.position.y=.035,gt.visible=!1,m.add(gt);let tt=null,et=null,Ut="note",It="front",Rt="ai",Ee="normal",Bt=["note","cal"],se=[3,3],Xt=0,Vt="menu",ce="\uAC8C\uC784\uC744 \uC2DC\uC791\uD574 \uBCF4\uC138\uC694.",Fe="",ye=.46,ge=0,Qt=null,Ce=new O(0,0,-1.3),U=null,re=null,oe=0,C=0,x=0;function L(P=!1){let it=performance.now();!P&&it-C<45||(C=it,i({phase:Vt,turn:Xt,scores:[...se],power:ge,tilt:ye,message:ce,result:Fe,activeType:Bt[Xt],targetFace:It}))}function z(P){P&&m.remove(P)}function X(P,it,ot=new O(0,0,-1.3)){z(tt),Ut=it,It="front",tt=$(P,it),tt.position.copy(ot),mt(tt,it,It,(Math.random()-.5)*.55),m.add(tt)}function lt(){return Rt==="2p"||Xt===0}function ct(P){let ot=P%1550/1550*2;return ot<1?ot:2-ot}let W=new gc,J=new Yt,dt=new Si(new O(0,1,0),0);function At(P){let it=g.domElement.getBoundingClientRect();J.x=(P.clientX-it.left)/it.width*2-1,J.y=-((P.clientY-it.top)/it.height)*2+1,W.setFromCamera(J,S);let ot=new O;return W.ray.intersectPlane(dt,ot)?(ot.x=An.clamp(ot.x,-7.5,7.5),ot.z=An.clamp(ot.z,-10.5,8.5),ot):null}function pt(P){if(Vt!=="aim"||!lt()||!tt)return;let it=At(P);if(!it)return;let ot=Pi[Ut].size*1.65;if(Math.hypot(it.x-tt.position.x,it.z-tt.position.z)>ot){ce="\uC0C1\uB300 \uB531\uC9C0 \uC8FC\uBCC0\uC744 \uB20C\uB7EC \uD0C0\uC810\uC744 \uC815\uD558\uC138\uC694.",L(!0);return}P.preventDefault(),g.domElement.setPointerCapture?.(P.pointerId),Ce.copy(it),Ce.y=.03,gt.position.copy(Ce),gt.visible=!0,Qt={startTime:performance.now(),startY:P.clientY,pointerId:P.pointerId,initialTilt:ye},Vt="charge",ce="\uB204\uB978 \uCC44 \uC704\uB85C \uBC00\uBA74 \uC138\uC6CC\uCE58\uAE30, \uC544\uB798\uB85C \uB0B4\uB9AC\uBA74 \uB215\uD600\uCE58\uAE30\uC785\uB2C8\uB2E4.",L(!0)}function ht(P){!Qt||Qt.pointerId!==P.pointerId||(P.preventDefault(),ye=An.clamp(Qt.initialTilt+(Qt.startY-P.clientY)/180,0,1),ge=Math.max(.06,ct(performance.now()-Qt.startTime)),L())}function wt(P){!Qt||Qt.pointerId!==P.pointerId||(P.preventDefault(),ge=Math.max(.06,ct(performance.now()-Qt.startTime)),Qt=null,Nt(Xt,Ce.clone(),ge,ye))}g.domElement.addEventListener("pointerdown",pt),g.domElement.addEventListener("pointermove",ht),g.domElement.addEventListener("pointerup",wt),g.domElement.addEventListener("pointercancel",()=>{Qt=null,Vt="aim",ge=0,gt.visible=!1,ce="\uC870\uC900\uC744 \uCDE8\uC18C\uD588\uC2B5\uB2C8\uB2E4.",L(!0)}),g.domElement.addEventListener("contextmenu",P=>P.preventDefault());function Nt(P,it,ot,zt){if(!tt)return;Vt="throw",gt.visible=!1,et=$(P,Bt[P]);let Ot=new O(0,1.35,P===0?9.2:-11.4);et.position.copy(Ot),et.rotation.y=P===0?0:Math.PI,m.add(et);let st=rt(Bt[P]);U={start:Ot,end:new O(it.x,st,it.z),started:performance.now(),duration:620+zt*180,attacker:P,power:ot,tilt:zt},ce=`${P===0?"\uD50C\uB808\uC774\uC5B4 1":Rt==="ai"?"AI":"\uD50C\uB808\uC774\uC5B4 2"}\uC758 \uB0B4\uB824\uCE58\uAE30!`,L(!0)}function Gt(){if(!U||!tt||!et)return;let P=U,it=Pi[Ut],ot=Pi[Bt[P.attacker]],zt=tt.worldToLocal(P.end.clone()),Ot=it.size/2,st=An.clamp(Math.max(Math.abs(zt.x),Math.abs(zt.z))/Ot,0,1.35),Ke=Math.abs(zt.x)>Ot*1.38||Math.abs(zt.z)>Ot*1.38,Qe=An.smoothstep(P.tilt,.18,.82),Ve=An.clamp(1-Math.abs(P.tilt-.5)*2,0,1),Re=An.lerp(ot.flatPower,ot.standPower,Qe)+ot.middleBoost*Ve,Da=.7+st*.34,Rc=.48+st*.55,es=An.lerp(Da,Rc,Qe),Go=An.lerp(it.flatVulnerability,it.standVulnerability,Qe),Dc=.84+it.mass*.18,Uc=It==="back"?1.08:1,hr=.92+Math.random()*.16,fr=Ke?0:ot.hit*P.power*Re*es*Go*Uc*hr/Dc,Os=fr>=i3,Nc=Math.abs(zt.x)>Math.abs(zt.z)?"z":"x",Lc=new O(P.end.x-P.start.x,0,P.end.z-P.start.z).normalize();re={started:performance.now(),duration:Os?920:680,flipped:Os,axis:Nc,push:Lc.multiplyScalar(.55+P.power*.8),baseY:tt.position.y,baseRx:tt.rotation.x,baseRz:tt.rotation.z,landingFace:yt(Bt[P.attacker],P.tilt)},Vt="reaction",x=1,ce=Ke?"\uBE57\uB098\uAC14\uC2B5\uB2C8\uB2E4.":Os?`\uB4A4\uC9D1\uD798 \uC810\uC218 ${fr.toFixed(2)} \xB7 \uB118\uC5B4\uAC04\uB2E4!`:`\uB4A4\uC9D1\uD798 \uC810\uC218 ${fr.toFixed(2)} \xB7 \uC870\uAE08 \uBAA8\uC790\uB78D\uB2C8\uB2E4.`,U=null,L(!0)}function N(){if(!re||!tt)return;let P=Xt,it=1-P;if(re.flipped){if(se=[...se],se[it]--,se[P]++,z(tt),z(et),tt=null,et=null,se[it]<=0){Vt="ended",Fe=`${P===0?"\uD50C\uB808\uC774\uC5B4 1":Rt==="ai"?"AI":"\uD50C\uB808\uC774\uC5B4 2"} \uC2B9\uB9AC`,ce="\uC0C1\uB300 \uB531\uC9C0\uB97C \uBAA8\uB450 \uD68D\uB4DD\uD588\uC2B5\uB2C8\uB2E4.",L(!0),re=null;return}X(it,Bt[it]),ce="\uC131\uACF5! \uACF5\uACA9\uAD8C\uC744 \uC720\uC9C0\uD569\uB2C8\uB2E4."}else{let ot=et?et.position.clone():new O(0,0,-1.3);z(tt),tt=et,et=null,Ut=Bt[P],It=re.landingFace,tt&&(tt.position.set(ot.x,rt(Ut),ot.z),mt(tt,Ut,It,(Math.random()-.5)*.6)),Xt=it,ce=`\uC2E4\uD328. \uB358\uC9C4 \uB531\uC9C0\uAC00 ${It==="back"?"\uB4B7\uBA74":"\uC55E\uBA74"}\uC73C\uB85C \uB5A8\uC5B4\uC838 \uACF5\uACA9\uAD8C\uC774 \uB118\uC5B4\uAC11\uB2C8\uB2E4.`}re=null,ge=0,ut()}function ut(){let P=++oe;if(Rt==="ai"&&Xt===1){Vt="ai",ce="AI\uAC00 \uD0C0\uC810\uACFC \uAC01\uB3C4\uB97C \uACC4\uC0B0\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4...",L(!0);let it=Ee==="easy"?850:Ee==="normal"?1050:1250;window.setTimeout(()=>{if(P!==oe||Vt!=="ai"||!tt)return;let ot=Pi[Ut],zt=Pi[Bt[1]],Ot=s3[Ee],st=Ot.error/zt.accuracy,Ke=Math.floor(Math.random()*4),Qe=ot.size*(Ot.edgeMin+Math.random()*Ot.edgeSpan),Ve=tt.position.clone();Ke===0?Ve.x+=Qe:Ke===1?Ve.x-=Qe:Ke===2?Ve.z+=Qe:Ve.z-=Qe,Ve.x+=(Math.random()-.5)*st,Ve.z+=(Math.random()-.5)*st;let Re=zt.preferredTilt;Math.random()<Ot.angleMistake&&(Re=Math.random());let Da=Ot.powerMin+Math.random()*(Ot.powerMax-Ot.powerMin);ye=An.clamp(Re+(Math.random()-.5)*st*.35,0,1),ge=Da,Nt(1,Ve,Da,ye)},it)}else Vt="aim",ye=Pi[Bt[Xt]].preferredTilt,ce=`${Xt===0?"\uD50C\uB808\uC774\uC5B4 1":"\uD50C\uB808\uC774\uC5B4 2"} \uCC28\uB840 \xB7 \uC0C1\uB300 \uB531\uC9C0 \uC8FC\uBCC0\uC744 \uB204\uB974\uC138\uC694.`,L(!0)}t.current={start(P){oe++,Rt=P.mode,Ee=P.difficulty,Bt=[P.tile,P.opponentTile],se=[P.count,P.count],Xt=0,Fe="",ge=0,ye=Pi[Bt[0]].preferredTilt,Qt=null,U=null,re=null,z(tt),z(et),tt=null,et=null,X(1,Bt[1]),ut()},cancel(){Vt==="charge"&&(Qt=null,ge=0,gt.visible=!1,Vt="aim",ce="\uC870\uC900\uC744 \uCDE8\uC18C\uD588\uC2B5\uB2C8\uB2E4.",L(!0))}},X(1,"cal");let Z=0,ft=performance.now();function _t(P){let it=Math.min((P-ft)/1e3,.05);if(ft=P,Qt){ge=Math.max(.06,ct(performance.now()-Qt.startTime)),ie.rotation.z+=it*1.7;let ot=1+Math.sin(P*.008)*.12;gt.scale.setScalar(ot),L()}if(U&&et){let ot=An.clamp((P-U.started)/U.duration,0,1),zt=1-Math.pow(1-ot,3);et.position.lerpVectors(U.start,U.end,zt),et.position.y=An.lerp(U.start.y,U.end.y,zt)+Math.sin(Math.PI*ot)*(2.2+U.tilt*1.25),et.rotation.x=U.tilt*Math.PI*.44+ot*Math.PI*(1.4+U.power),et.rotation.z=ot*Math.PI*3.4*(U.attacker===0?1:-1),ot>=1&&Gt()}if(re&&tt){let ot=An.clamp((P-re.started)/re.duration,0,1),zt=1-Math.pow(1-ot,3),Ot=Math.sin(Math.PI*ot)*(re.flipped?1.55:.48);tt.position.y=re.baseY+Ot,tt.position.x+=re.push.x*it*(1-ot),tt.position.z+=re.push.z*it*(1-ot),re.axis==="x"?tt.rotation.x=re.baseRx+zt*Math.PI*(re.flipped?1:.3):tt.rotation.z=re.baseRz+zt*Math.PI*(re.flipped?1:.3),ot>=1&&N()}x>.001?(x*=Math.pow(.035,it),S.position.x=Math.sin(P*.07)*x*.16):S.position.x*=.9,S.lookAt(0,0,-1.8),g.render(m,S),Z=requestAnimationFrame(_t)}Z=requestAnimationFrame(_t);function nt(){let P=Math.max(320,h.clientWidth),it=Math.max(420,h.clientHeight);g.setSize(P,it,!1),S.aspect=P/it,S.updateProjectionMatrix()}let Et=new ResizeObserver(nt);return Et.observe(h),nt(),()=>{oe++,Et.disconnect(),cancelAnimationFrame(Z),g.dispose(),F.forEach(P=>P.dispose()),g.domElement.removeEventListener("pointerdown",pt),g.domElement.removeEventListener("pointermove",ht),g.domElement.removeEventListener("pointerup",wt),h.removeChild(g.domElement),t.current=null}},[]);let v=()=>t.current?.start({mode:s,difficulty:r,tile:l,opponentTile:f,count:u}),M=n.tilt<.33?"\uB215\uD600\uCE58\uAE30":n.tilt>.66?"\uC138\uC6CC\uCE58\uAE30":"\uBE44\uC2A4\uB4EC\uD788",_=Pi[n.activeType];return(0,at.jsxs)("main",{className:"page-shell",children:[(0,at.jsxs)("header",{className:"hero",children:[(0,at.jsxs)("div",{children:[(0,at.jsx)("span",{className:"eyebrow",children:"RETRO PLAYGROUND \xB7 WEB GAME"}),(0,at.jsx)("h1",{children:"\uB531\uC9C0\uCE58\uAE30"}),(0,at.jsx)("p",{children:"\uD0C0\uC810\uACFC \uD798, \uCE58\uB294 \uAC01\uB3C4\uB97C \uC870\uC808\uD574 \uC2E4\uC81C \uB450\uAED8\uC640 \uACF5\uC911 \uD68C\uC804\uC774 \uC0B4\uC544 \uC788\uB294 \uB531\uC9C0\uB97C \uB0B4\uB824\uCCD0 \uBCF4\uC138\uC694."})]}),(0,at.jsx)("div",{className:"prototype-badge",children:"ONLINE EDITION \xB7 \uC124\uCE58 \uC5C6\uC774 \uD50C\uB808\uC774"})]}),(0,at.jsxs)("section",{className:"game-layout",children:[(0,at.jsxs)("div",{className:"stage-card",children:[(0,at.jsx)("div",{ref:e,className:"three-stage"}),(0,at.jsxs)("div",{className:"score-strip","aria-live":"polite",children:[(0,at.jsxs)("div",{children:[(0,at.jsx)("small",{children:"\uD50C\uB808\uC774\uC5B4 1"}),(0,at.jsx)("strong",{children:n.scores[0]})]}),(0,at.jsx)("div",{className:"turn-chip",children:n.phase==="ended"?"\uACBD\uAE30 \uC885\uB8CC":n.phase==="menu"?"\uB300\uAE30 \uC911":`${n.turn===0?"\uD50C\uB808\uC774\uC5B4 1":s==="ai"?"AI":"\uD50C\uB808\uC774\uC5B4 2"} \uCC28\uB840`}),(0,at.jsxs)("div",{children:[(0,at.jsx)("small",{children:s==="ai"?"AI":"\uD50C\uB808\uC774\uC5B4 2"}),(0,at.jsx)("strong",{children:n.scores[1]})]})]}),n.phase==="menu"&&(0,at.jsx)("div",{className:"stage-overlay",children:(0,at.jsxs)("div",{className:"overlay-panel",children:[(0,at.jsx)("span",{children:"\uACE8\uBAA9 \uB531\uC9C0\uCE58\uAE30"}),(0,at.jsx)("h2",{children:"\uB531\uC9C0\uB97C \uC9C1\uC811 \uB0B4\uB824\uCCD0 \uBCF4\uC138\uC694"}),(0,at.jsx)("p",{children:"\uC0C1\uB300 \uB531\uC9C0 \uC8FC\uBCC0\uC744 \uB204\uB978 \uCC44 \uC704\xB7\uC544\uB798\uB85C \uC6C0\uC9C1\uC5EC \uAC01\uB3C4\uB97C \uC870\uC808\uD558\uACE0, \uD798 \uAC8C\uC774\uC9C0\uC758 \uC6D0\uD558\uB294 \uC9C0\uC810\uC5D0\uC11C \uC190\uC744 \uB5BC\uC138\uC694."}),(0,at.jsx)("button",{onClick:v,children:"\uAC8C\uC784 \uC2DC\uC791"})]})}),n.phase==="ended"&&(0,at.jsx)("div",{className:"stage-overlay",children:(0,at.jsxs)("div",{className:"overlay-panel result-panel",children:[(0,at.jsx)("span",{children:"FINAL RESULT"}),(0,at.jsx)("h2",{children:n.result}),(0,at.jsx)("p",{children:n.message}),(0,at.jsx)("button",{onClick:v,children:"\uB2E4\uC2DC \uD558\uAE30"})]})})]}),(0,at.jsxs)("aside",{className:"control-card",children:[(0,at.jsxs)("div",{className:"control-heading",children:[(0,at.jsxs)("div",{children:[(0,at.jsx)("span",{children:"GAME CONTROL"}),(0,at.jsx)("h2",{children:"\uAC8C\uC784 \uC870\uC791"})]}),(0,at.jsx)("i",{className:`phase-light ${n.phase}`})]}),(0,at.jsxs)("div",{className:"settings-grid",children:[(0,at.jsxs)("label",{children:["\uAC8C\uC784 \uBAA8\uB4DC",(0,at.jsxs)("select",{value:s,onChange:h=>a(h.target.value),children:[(0,at.jsx)("option",{value:"ai",children:"AI \uB300\uC804"}),(0,at.jsx)("option",{value:"2p",children:"\uB85C\uCEEC 2\uC778"})]})]}),(0,at.jsxs)("label",{children:["AI \uC2E4\uB825",(0,at.jsxs)("select",{value:r,onChange:h=>o(h.target.value),disabled:s==="2p",children:[(0,at.jsx)("option",{value:"easy",children:"\uC26C\uC6C0"}),(0,at.jsx)("option",{value:"normal",children:"\uBCF4\uD1B5"}),(0,at.jsx)("option",{value:"hard",children:"\uC5B4\uB824\uC6C0"})]})]}),(0,at.jsxs)("label",{children:["1P \uB531\uC9C0",(0,at.jsxs)("select",{value:l,onChange:h=>c(h.target.value),children:[(0,at.jsx)("option",{value:"news",children:"\uC2E0\uBB38\uC9C0"}),(0,at.jsx)("option",{value:"note",children:"\uACF5\uCC45"}),(0,at.jsx)("option",{value:"cal",children:"\uB2EC\uB825"})]})]}),(0,at.jsxs)("label",{children:[s==="ai"?"AI \uB531\uC9C0":"2P \uB531\uC9C0",(0,at.jsxs)("select",{value:f,onChange:h=>p(h.target.value),children:[(0,at.jsx)("option",{value:"news",children:"\uC2E0\uBB38\uC9C0"}),(0,at.jsx)("option",{value:"note",children:"\uACF5\uCC45"}),(0,at.jsx)("option",{value:"cal",children:"\uB2EC\uB825"})]})]}),(0,at.jsxs)("label",{className:"wide-setting",children:["\uC2DC\uC791 \uC7A5\uC218",(0,at.jsxs)("select",{value:u,onChange:h=>d(Number(h.target.value)),children:[(0,at.jsx)("option",{value:3,children:"3\uC7A5"}),(0,at.jsx)("option",{value:5,children:"5\uC7A5"}),(0,at.jsx)("option",{value:7,children:"7\uC7A5"})]})]})]}),(0,at.jsxs)("div",{className:"meter-block",children:[(0,at.jsxs)("div",{className:"meter-label",children:[(0,at.jsx)("span",{children:"\uD798"}),(0,at.jsxs)("strong",{children:[Math.round(n.power*100),"%"]})]}),(0,at.jsx)("div",{className:"power-track",children:(0,at.jsx)("i",{style:{width:`${n.power*100}%`}})})]}),(0,at.jsxs)("div",{className:"angle-control",children:[(0,at.jsxs)("div",{className:"angle-copy",children:[(0,at.jsx)("small",{children:"\uCE58\uB294 \uAC01\uB3C4"}),(0,at.jsx)("strong",{children:M}),(0,at.jsx)("span",{children:"\uC704\uB85C \uBC00\uBA74 \uC138\uC6B0\uACE0, \uC544\uB798\uB85C \uB0B4\uB9AC\uBA74 \uB215\uD799\uB2C8\uB2E4."})]}),(0,at.jsxs)("div",{className:"angle-visual",children:[(0,at.jsx)("b",{children:"\uC138\uC6CC"}),(0,at.jsx)("div",{className:"angle-track",children:(0,at.jsx)("i",{style:{bottom:`${n.tilt*100}%`}})}),(0,at.jsx)("b",{children:"\uB215\uD600"})]})]}),(0,at.jsxs)("div",{className:`technique-card ${n.targetFace}`,children:[(0,at.jsxs)("div",{children:[(0,at.jsx)("small",{children:"\uD604\uC7AC \uB531\uC9C0 \uCD94\uCC9C"}),(0,at.jsxs)("strong",{children:[_.name," \xB7 ",_.styleName]})]}),(0,at.jsxs)("span",{children:["\uBC14\uB2E5 \uB531\uC9C0 ",(0,at.jsx)("b",{children:n.targetFace==="back"?"\uB4B7\uBA74":"\uC55E\uBA74"}),n.targetFace==="back"&&(0,at.jsx)("em",{children:"\uB4A4\uC9D1\uAE30 +8%"})]})]}),(0,at.jsxs)("div",{className:"status-box",children:[(0,at.jsx)("span",{children:"\uD604\uC7AC \uC0C1\uD0DC"}),(0,at.jsx)("p",{children:n.message})]}),(0,at.jsxs)("div",{className:"button-row",children:[(0,at.jsx)("button",{className:"primary",onClick:v,children:n.phase==="menu"?"\uAC8C\uC784 \uC2DC\uC791":"\uCC98\uC74C\uBD80\uD130"}),(0,at.jsx)("button",{className:"secondary",onClick:()=>t.current?.cancel(),disabled:n.phase!=="charge",children:"\uC870\uC900 \uCDE8\uC18C"})]}),(0,at.jsxs)("div",{className:"test-notes",children:[(0,at.jsx)("strong",{children:"\uAC8C\uC784 \uD2B9\uC9D5"}),(0,at.jsxs)("ul",{children:[(0,at.jsx)("li",{children:"\uC2E4\uC81C \uB450\uAED8\uAC00 \uB2E4\uB978 3\uC885 \uB531\uC9C0"}),(0,at.jsx)("li",{children:"\uB531\uC9C0\uBCC4\uB85C \uB2E4\uB978 \uCD5C\uC801 \uD0C0\uBC95"}),(0,at.jsx)("li",{children:"\uD655\uB960\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9C0\uB294 \uC55E\xB7\uB4B7\uBA74"}),(0,at.jsx)("li",{children:"\uD0C0\uC810\xB7\uD798\xB7\uAC01\uB3C4 \uAE30\uBC18 \uB4A4\uC9D1\uD798 \uD310\uC815"})]})]})]})]})]})}var gb=mr(Cc()),mb=document.getElementById("ddakji-game-root");if(!mb)throw new Error("\uB531\uC9C0\uCE58\uAE30 \uAC8C\uC784\uC744 \uD45C\uC2DC\uD560 \uC601\uC5ED\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");(0,pb.createRoot)(mb).render((0,gb.jsx)(U0,{}));})();
/*! Bundled license information:

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
