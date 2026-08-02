(()=>{var Sb=Object.create;var L0=Object.defineProperty;var Mb=Object.getOwnPropertyDescriptor;var bb=Object.getOwnPropertyNames;var Eb=Object.getPrototypeOf,Tb=Object.prototype.hasOwnProperty;var Ui=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var Ab=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of bb(t))!Tb.call(e,s)&&s!==n&&L0(e,s,{get:()=>t[s],enumerable:!(i=Mb(t,s))||i.enumerable});return e};var rr=(e,t,n)=>(n=e!=null?Sb(Eb(e)):{},Ab(t||!e||!e.__esModule?L0(n,"default",{value:e,enumerable:!0}):n,e));var k0=Ui(Ue=>{"use strict";function md(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Ec(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Ni(e){return e.length===0?null:e[0]}function Ac(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Ec(o,n))l<s&&0>Ec(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Ec(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Ec(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ue.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(I0=performance,Ue.unstable_now=function(){return I0.now()}):(fd=Date,O0=fd.now(),Ue.unstable_now=function(){return fd.now()-O0});var I0,fd,O0,Ji=[],Us=[],wb=1,ii=null,_n=3,gd=!1,Io=!1,Oo=!1,_d=!1,z0=typeof setTimeout=="function"?setTimeout:null,F0=typeof clearTimeout=="function"?clearTimeout:null,P0=typeof setImmediate<"u"?setImmediate:null;function Tc(e){for(var t=Ni(Us);t!==null;){if(t.callback===null)Ac(Us);else if(t.startTime<=e)Ac(Us),t.sortIndex=t.expirationTime,md(Ji,t);else break;t=Ni(Us)}}function vd(e){if(Oo=!1,Tc(e),!Io)if(Ni(Ji)!==null)Io=!0,lr||(lr=!0,or());else{var t=Ni(Us);t!==null&&xd(vd,t.startTime-e)}}var lr=!1,Po=-1,V0=5,H0=-1;function G0(){return _d?!0:!(Ue.unstable_now()-H0<V0)}function dd(){if(_d=!1,lr){var e=Ue.unstable_now();H0=e;var t=!0;try{t:{Io=!1,Oo&&(Oo=!1,F0(Po),Po=-1),gd=!0;var n=_n;try{e:{for(Tc(e),ii=Ni(Ji);ii!==null&&!(ii.expirationTime>e&&G0());){var i=ii.callback;if(typeof i=="function"){ii.callback=null,_n=ii.priorityLevel;var s=i(ii.expirationTime<=e);if(e=Ue.unstable_now(),typeof s=="function"){ii.callback=s,Tc(e),t=!0;break e}ii===Ni(Ji)&&Ac(Ji),Tc(e)}else Ac(Ji);ii=Ni(Ji)}if(ii!==null)t=!0;else{var a=Ni(Us);a!==null&&xd(vd,a.startTime-e),t=!1}}break t}finally{ii=null,_n=n,gd=!1}t=void 0}}finally{t?or():lr=!1}}}var or;typeof P0=="function"?or=function(){P0(dd)}:typeof MessageChannel<"u"?(pd=new MessageChannel,B0=pd.port2,pd.port1.onmessage=dd,or=function(){B0.postMessage(null)}):or=function(){z0(dd,0)};var pd,B0;function xd(e,t){Po=z0(function(){e(Ue.unstable_now())},t)}Ue.unstable_IdlePriority=5;Ue.unstable_ImmediatePriority=1;Ue.unstable_LowPriority=4;Ue.unstable_NormalPriority=3;Ue.unstable_Profiling=null;Ue.unstable_UserBlockingPriority=2;Ue.unstable_cancelCallback=function(e){e.callback=null};Ue.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V0=0<e?Math.floor(1e3/e):5};Ue.unstable_getCurrentPriorityLevel=function(){return _n};Ue.unstable_next=function(e){switch(_n){case 1:case 2:case 3:var t=3;break;default:t=_n}var n=_n;_n=t;try{return e()}finally{_n=n}};Ue.unstable_requestPaint=function(){_d=!0};Ue.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=_n;_n=e;try{return t()}finally{_n=n}};Ue.unstable_scheduleCallback=function(e,t,n){var i=Ue.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:wb++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,md(Us,e),Ni(Ji)===null&&e===Ni(Us)&&(Oo?(F0(Po),Po=-1):Oo=!0,xd(vd,n-i))):(e.sortIndex=s,md(Ji,e),Io||gd||(Io=!0,lr||(lr=!0,or()))),e};Ue.unstable_shouldYield=G0;Ue.unstable_wrapCallback=function(e){var t=_n;return function(){var n=_n;_n=t;try{return e.apply(this,arguments)}finally{_n=n}}}});var W0=Ui((r3,X0)=>{"use strict";X0.exports=k0()});var n_=Ui(Ft=>{"use strict";var Md=Symbol.for("react.transitional.element"),Cb=Symbol.for("react.portal"),Rb=Symbol.for("react.fragment"),Db=Symbol.for("react.strict_mode"),Ub=Symbol.for("react.profiler"),Nb=Symbol.for("react.consumer"),Lb=Symbol.for("react.context"),Ib=Symbol.for("react.forward_ref"),Ob=Symbol.for("react.suspense"),Pb=Symbol.for("react.memo"),K0=Symbol.for("react.lazy"),Bb=Symbol.for("react.activity"),q0=Symbol.iterator;function zb(e){return e===null||typeof e!="object"?null:(e=q0&&e[q0]||e["@@iterator"],typeof e=="function"?e:null)}var Q0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j0=Object.assign,$0={};function ur(e,t,n){this.props=e,this.context=t,this.refs=$0,this.updater=n||Q0}ur.prototype.isReactComponent={};ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function t_(){}t_.prototype=ur.prototype;function bd(e,t,n){this.props=e,this.context=t,this.refs=$0,this.updater=n||Q0}var Ed=bd.prototype=new t_;Ed.constructor=bd;j0(Ed,ur.prototype);Ed.isPureReactComponent=!0;var Y0=Array.isArray;function Sd(){}var Te={H:null,A:null,T:null,S:null},e_=Object.prototype.hasOwnProperty;function Td(e,t,n){var i=n.ref;return{$$typeof:Md,type:e,key:t,ref:i!==void 0?i:null,props:n}}function Fb(e,t){return Td(e.type,t,e.props)}function Ad(e){return typeof e=="object"&&e!==null&&e.$$typeof===Md}function Vb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Z0=/\/+/g;function yd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vb(""+e.key):t.toString(36)}function Hb(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Sd,Sd):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function cr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Md:case Cb:r=!0;break;case K0:return r=e._init,cr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+yd(e,0):i,Y0(s)?(n="",r!=null&&(n=r.replace(Z0,"$&/")+"/"),cr(s,t,n,"",function(c){return c})):s!=null&&(Ad(s)&&(s=Fb(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(Z0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(Y0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+yd(i,l),r+=cr(i,t,n,a,s);else if(l=zb(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+yd(i,l++),r+=cr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return cr(Hb(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function wc(e,t,n){if(e==null)return e;var i=[],s=0;return cr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function Gb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var J0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},kb={map:wc,forEach:function(e,t,n){wc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wc(e,function(){t++}),t},toArray:function(e){return wc(e,function(t){return t})||[]},only:function(e){if(!Ad(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ft.Activity=Bb;Ft.Children=kb;Ft.Component=ur;Ft.Fragment=Rb;Ft.Profiler=Ub;Ft.PureComponent=bd;Ft.StrictMode=Db;Ft.Suspense=Ob;Ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Te;Ft.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Te.H.useMemoCache(e)}};Ft.cache=function(e){return function(){return e.apply(null,arguments)}};Ft.cacheSignal=function(){return null};Ft.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=j0({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!e_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Td(e.type,s,i)};Ft.createContext=function(e){return e={$$typeof:Lb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Nb,_context:e},e};Ft.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)e_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Td(e,a,s)};Ft.createRef=function(){return{current:null}};Ft.forwardRef=function(e){return{$$typeof:Ib,render:e}};Ft.isValidElement=Ad;Ft.lazy=function(e){return{$$typeof:K0,_payload:{_status:-1,_result:e},_init:Gb}};Ft.memo=function(e,t){return{$$typeof:Pb,type:e,compare:t===void 0?null:t}};Ft.startTransition=function(e){var t=Te.T,n={};Te.T=n;try{var i=e(),s=Te.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Sd,J0)}catch(a){J0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Te.T=t}};Ft.unstable_useCacheRefresh=function(){return Te.H.useCacheRefresh()};Ft.use=function(e){return Te.H.use(e)};Ft.useActionState=function(e,t,n){return Te.H.useActionState(e,t,n)};Ft.useCallback=function(e,t){return Te.H.useCallback(e,t)};Ft.useContext=function(e){return Te.H.useContext(e)};Ft.useDebugValue=function(){};Ft.useDeferredValue=function(e,t){return Te.H.useDeferredValue(e,t)};Ft.useEffect=function(e,t){return Te.H.useEffect(e,t)};Ft.useEffectEvent=function(e){return Te.H.useEffectEvent(e)};Ft.useId=function(){return Te.H.useId()};Ft.useImperativeHandle=function(e,t,n){return Te.H.useImperativeHandle(e,t,n)};Ft.useInsertionEffect=function(e,t){return Te.H.useInsertionEffect(e,t)};Ft.useLayoutEffect=function(e,t){return Te.H.useLayoutEffect(e,t)};Ft.useMemo=function(e,t){return Te.H.useMemo(e,t)};Ft.useOptimistic=function(e,t){return Te.H.useOptimistic(e,t)};Ft.useReducer=function(e,t,n){return Te.H.useReducer(e,t,n)};Ft.useRef=function(e){return Te.H.useRef(e)};Ft.useState=function(e){return Te.H.useState(e)};Ft.useSyncExternalStore=function(e,t,n){return Te.H.useSyncExternalStore(e,t,n)};Ft.useTransition=function(){return Te.H.useTransition()};Ft.version="19.2.6"});var Cc=Ui((l3,i_)=>{"use strict";i_.exports=n_()});var a_=Ui(Mn=>{"use strict";var Xb=Cc();function s_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ns(){}var Sn={d:{f:Ns,r:function(){throw Error(s_(522))},D:Ns,C:Ns,L:Ns,m:Ns,X:Ns,S:Ns,M:Ns},p:0,findDOMNode:null},Wb=Symbol.for("react.portal");function qb(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wb,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Bo=Xb.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Rc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Sn;Mn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(s_(299));return qb(e,t,null,n)};Mn.flushSync=function(e){var t=Bo.T,n=Sn.p;try{if(Bo.T=null,Sn.p=2,e)return e()}finally{Bo.T=t,Sn.p=n,Sn.d.f()}};Mn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Sn.d.C(e,t))};Mn.prefetchDNS=function(e){typeof e=="string"&&Sn.d.D(e)};Mn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Rc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Sn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Sn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Mn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Rc(t.as,t.crossOrigin);Sn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Sn.d.M(e)};Mn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Rc(n,t.crossOrigin);Sn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Mn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Rc(t.as,t.crossOrigin);Sn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Sn.d.m(e)};Mn.requestFormReset=function(e){Sn.d.r(e)};Mn.unstable_batchedUpdates=function(e,t){return e(t)};Mn.useFormState=function(e,t,n){return Bo.H.useFormState(e,t,n)};Mn.useFormStatus=function(){return Bo.H.useHostTransitionStatus()};Mn.version="19.2.6"});var l_=Ui((u3,o_)=>{"use strict";function r_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r_)}catch(e){console.error(e)}}r_(),o_.exports=a_()});var yS=Ui(th=>{"use strict";var Qe=W0(),Iv=Cc(),Yb=l_();function et(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ov(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bv(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c_(e){if(bl(e)!==e)throw Error(et(188))}function Zb(e){var t=e.alternate;if(!t){if(t=bl(e),t===null)throw Error(et(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return c_(s),e;if(a===i)return c_(s),t;a=a.sibling}throw Error(et(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(et(189))}}if(n.alternate!==i)throw Error(et(190))}if(n.tag!==3)throw Error(et(188));return n.stateNode.current===n?e:t}function zv(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=zv(e),t!==null)return t;e=e.sibling}return null}var Ce=Object.assign,Jb=Symbol.for("react.element"),Dc=Symbol.for("react.transitional.element"),Wo=Symbol.for("react.portal"),gr=Symbol.for("react.fragment"),Fv=Symbol.for("react.strict_mode"),rp=Symbol.for("react.profiler"),Vv=Symbol.for("react.consumer"),is=Symbol.for("react.context"),em=Symbol.for("react.forward_ref"),op=Symbol.for("react.suspense"),lp=Symbol.for("react.suspense_list"),nm=Symbol.for("react.memo"),Ls=Symbol.for("react.lazy"),cp=Symbol.for("react.activity"),Kb=Symbol.for("react.memo_cache_sentinel"),u_=Symbol.iterator;function zo(e){return e===null||typeof e!="object"?null:(e=u_&&e[u_]||e["@@iterator"],typeof e=="function"?e:null)}var Qb=Symbol.for("react.client.reference");function up(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Qb?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gr:return"Fragment";case rp:return"Profiler";case Fv:return"StrictMode";case op:return"Suspense";case lp:return"SuspenseList";case cp:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Wo:return"Portal";case is:return e.displayName||"Context";case Vv:return(e._context.displayName||"Context")+".Consumer";case em:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nm:return t=e.displayName||null,t!==null?t:up(e.type)||"Memo";case Ls:t=e._payload,e=e._init;try{return up(e(t))}catch{}}return null}var qo=Array.isArray,It=Iv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=Yb.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ra={pending:!1,data:null,method:null,action:null},hp=[],_r=-1;function Bi(e){return{current:e}}function sn(e){0>_r||(e.current=hp[_r],hp[_r]=null,_r--)}function be(e,t){_r++,hp[_r]=e.current,e.current=t}var Pi=Bi(null),cl=Bi(null),Xs=Bi(null),cu=Bi(null);function uu(e,t){switch(be(Xs,t),be(cl,e),be(Pi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?_v(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=_v(t),e=rS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}sn(Pi),be(Pi,e)}function Or(){sn(Pi),sn(cl),sn(Xs)}function fp(e){e.memoizedState!==null&&be(cu,e);var t=Pi.current,n=rS(t,e.type);t!==n&&(be(cl,e),be(Pi,n))}function hu(e){cl.current===e&&(sn(Pi),sn(cl)),cu.current===e&&(sn(cu),yl._currentValue=Ra)}var wd,h_;function Ta(e){if(wd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wd=t&&t[1]||"",h_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wd+e+h_}var Cd=!1;function Rd(e,t){if(!e||Cd)return"";Cd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(d){var u=d}Reflect.construct(e,[],p)}else{try{p.call()}catch(d){u=d}e.call(p.prototype)}}else{try{throw Error()}catch(d){u=d}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(d){if(d&&u&&typeof d.stack=="string")return[d.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{Cd=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ta(n):""}function jb(e,t){switch(e.tag){case 26:case 27:case 5:return Ta(e.type);case 16:return Ta("Lazy");case 13:return e.child!==t&&t!==null?Ta("Suspense Fallback"):Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return Rd(e.type,!1);case 11:return Rd(e.type.render,!1);case 1:return Rd(e.type,!0);case 31:return Ta("Activity");default:return""}}function f_(e){try{var t="",n=null;do t+=jb(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var dp=Object.prototype.hasOwnProperty,im=Qe.unstable_scheduleCallback,Dd=Qe.unstable_cancelCallback,$b=Qe.unstable_shouldYield,t1=Qe.unstable_requestPaint,Hn=Qe.unstable_now,e1=Qe.unstable_getCurrentPriorityLevel,Hv=Qe.unstable_ImmediatePriority,Gv=Qe.unstable_UserBlockingPriority,fu=Qe.unstable_NormalPriority,n1=Qe.unstable_LowPriority,kv=Qe.unstable_IdlePriority,i1=Qe.log,s1=Qe.unstable_setDisableYieldValue,El=null,Gn=null;function Fs(e){if(typeof i1=="function"&&s1(e),Gn&&typeof Gn.setStrictMode=="function")try{Gn.setStrictMode(El,e)}catch{}}var kn=Math.clz32?Math.clz32:o1,a1=Math.log,r1=Math.LN2;function o1(e){return e>>>=0,e===0?32:31-(a1(e)/r1|0)|0}var Uc=256,Nc=262144,Lc=4194304;function Aa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function zu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Aa(i):(r&=o,r!==0?s=Aa(r):n||(n=o&~e,n!==0&&(s=Aa(n))))):(o=i&~a,o!==0?s=Aa(o):r!==0?s=Aa(r):n||(n=i&~e,n!==0&&(s=Aa(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Tl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function l1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xv(){var e=Lc;return Lc<<=1,(Lc&62914560)===0&&(Lc=4194304),e}function Ud(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Al(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function c1(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-kn(n),p=1<<f;o[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var d=u[f];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&Wv(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function Wv(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-kn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function qv(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-kn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Yv(e,t){var n=t&-t;return n=(n&42)!==0?1:sm(n),(n&(e.suspendedLanes|t))!==0?0:n}function sm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function am(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zv(){var e=ce.p;return e!==0?e:(e=window.event,e===void 0?32:_S(e.type))}function d_(e,t){var n=ce.p;try{return ce.p=e,t()}finally{ce.p=n}}var ia=Math.random().toString(36).slice(2),ln="__reactFiber$"+ia,Nn="__reactProps$"+ia,qr="__reactContainer$"+ia,pp="__reactEvents$"+ia,u1="__reactListeners$"+ia,h1="__reactHandles$"+ia,p_="__reactResources$"+ia,wl="__reactMarker$"+ia;function rm(e){delete e[ln],delete e[Nn],delete e[pp],delete e[u1],delete e[h1]}function vr(e){var t=e[ln];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qr]||n[ln]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Mv(e);e!==null;){if(n=e[ln])return n;e=Mv(e)}return t}e=n,n=e.parentNode}return null}function Yr(e){if(e=e[ln]||e[qr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Yo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(et(33))}function Cr(e){var t=e[p_];return t||(t=e[p_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nn(e){e[wl]=!0}var Jv=new Set,Kv={};function Fa(e,t){Pr(e,t),Pr(e+"Capture",t)}function Pr(e,t){for(Kv[e]=t,e=0;e<t.length;e++)Jv.add(t[e])}var f1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),m_={},g_={};function d1(e){return dp.call(g_,e)?!0:dp.call(m_,e)?!1:f1.test(e)?g_[e]=!0:(m_[e]=!0,!1)}function Zc(e,t,n){if(d1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ic(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ki(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function ai(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function p1(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mp(e){if(!e._valueTracker){var t=Qv(e)?"checked":"value";e._valueTracker=p1(e,t,""+e[t])}}function jv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Qv(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function du(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var m1=/[\n"\\]/g;function li(e){return e.replace(m1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function gp(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ai(t)):e.value!==""+ai(t)&&(e.value=""+ai(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?_p(e,r,ai(t)):n!=null?_p(e,r,ai(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ai(o):e.removeAttribute("name")}function $v(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){mp(e);return}n=n!=null?""+ai(n):"",t=t!=null?""+ai(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),mp(e)}function _p(e,t,n){t==="number"&&du(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Rr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ai(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function tx(e,t,n){if(t!=null&&(t=""+ai(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ai(n):""}function ex(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(et(92));if(qo(i)){if(1<i.length)throw Error(et(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ai(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),mp(e)}function Br(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var g1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function __(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||g1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function nx(e,t,n){if(t!=null&&typeof t!="object")throw Error(et(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&__(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&__(e,a,t[a])}function om(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),v1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jc(e){return v1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ss(){}var vp=null;function lm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xr=null,Dr=null;function v_(e){var t=Yr(e);if(t&&(e=t.stateNode)){var n=e[Nn]||null;t:switch(e=t.stateNode,t.type){case"input":if(gp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+li(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Nn]||null;if(!s)throw Error(et(90));gp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&jv(i)}break t;case"textarea":tx(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Rr(e,!!n.multiple,t,!1)}}}var Nd=!1;function ix(e,t,n){if(Nd)return e(t,n);Nd=!0;try{var i=e(t);return i}finally{if(Nd=!1,(xr!==null||Dr!==null)&&(Ku(),xr&&(t=xr,e=Dr,Dr=xr=null,v_(t),e)))for(t=0;t<e.length;t++)v_(e[t])}}function ul(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Nn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(et(231,t,typeof n));return n}var cs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xp=!1;if(cs)try{hr={},Object.defineProperty(hr,"passive",{get:function(){xp=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{xp=!1}var hr,Vs=null,cm=null,Kc=null;function sx(){if(Kc)return Kc;var e,t=cm,n=t.length,i,s="value"in Vs?Vs.value:Vs.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Kc=s.slice(e,1<i?1-i:void 0)}function Qc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oc(){return!0}function x_(){return!1}function Ln(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Oc:x_,this.isPropagationStopped=x_,this}return Ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oc)},persist:function(){},isPersistent:Oc}),t}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fu=Ln(Va),Cl=Ce({},Va,{view:0,detail:0}),x1=Ln(Cl),Ld,Id,Fo,Vu=Ce({},Cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:um,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fo&&(Fo&&e.type==="mousemove"?(Ld=e.screenX-Fo.screenX,Id=e.screenY-Fo.screenY):Id=Ld=0,Fo=e),Ld)},movementY:function(e){return"movementY"in e?e.movementY:Id}}),y_=Ln(Vu),y1=Ce({},Vu,{dataTransfer:0}),S1=Ln(y1),M1=Ce({},Cl,{relatedTarget:0}),Od=Ln(M1),b1=Ce({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),E1=Ln(b1),T1=Ce({},Va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),A1=Ln(T1),w1=Ce({},Va,{data:0}),S_=Ln(w1),C1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=D1[e])?!!t[e]:!1}function um(){return U1}var N1=Ce({},Cl,{key:function(e){if(e.key){var t=C1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?R1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:um,charCode:function(e){return e.type==="keypress"?Qc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),L1=Ln(N1),I1=Ce({},Vu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),M_=Ln(I1),O1=Ce({},Cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:um}),P1=Ln(O1),B1=Ce({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),z1=Ln(B1),F1=Ce({},Vu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),V1=Ln(F1),H1=Ce({},Va,{newState:0,oldState:0}),G1=Ln(H1),k1=[9,13,27,32],hm=cs&&"CompositionEvent"in window,Ko=null;cs&&"documentMode"in document&&(Ko=document.documentMode);var X1=cs&&"TextEvent"in window&&!Ko,ax=cs&&(!hm||Ko&&8<Ko&&11>=Ko),b_=" ",E_=!1;function rx(e,t){switch(e){case"keyup":return k1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ox(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function W1(e,t){switch(e){case"compositionend":return ox(t);case"keypress":return t.which!==32?null:(E_=!0,b_);case"textInput":return e=t.data,e===b_&&E_?null:e;default:return null}}function q1(e,t){if(yr)return e==="compositionend"||!hm&&rx(e,t)?(e=sx(),Kc=cm=Vs=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ax&&t.locale!=="ko"?null:t.data;default:return null}}var Y1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function T_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Y1[e.type]:t==="textarea"}function lx(e,t,n,i){xr?Dr?Dr.push(i):Dr=[i]:xr=i,t=Uu(t,"onChange"),0<t.length&&(n=new Fu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Qo=null,hl=null;function Z1(e){iS(e,0)}function Hu(e){var t=Yo(e);if(jv(t))return e}function A_(e,t){if(e==="change")return t}var cx=!1;cs&&(cs?(Bc="oninput"in document,Bc||(Pd=document.createElement("div"),Pd.setAttribute("oninput","return;"),Bc=typeof Pd.oninput=="function"),Pc=Bc):Pc=!1,cx=Pc&&(!document.documentMode||9<document.documentMode));var Pc,Bc,Pd;function w_(){Qo&&(Qo.detachEvent("onpropertychange",ux),hl=Qo=null)}function ux(e){if(e.propertyName==="value"&&Hu(hl)){var t=[];lx(t,hl,e,lm(e)),ix(Z1,t)}}function J1(e,t,n){e==="focusin"?(w_(),Qo=t,hl=n,Qo.attachEvent("onpropertychange",ux)):e==="focusout"&&w_()}function K1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hu(hl)}function Q1(e,t){if(e==="click")return Hu(t)}function j1(e,t){if(e==="input"||e==="change")return Hu(t)}function $1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wn=typeof Object.is=="function"?Object.is:$1;function fl(e,t){if(Wn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!dp.call(t,s)||!Wn(e[s],t[s]))return!1}return!0}function C_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function R_(e,t){var n=C_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=C_(n)}}function hx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=du(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=du(e.document)}return t}function fm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var tE=cs&&"documentMode"in document&&11>=document.documentMode,Sr=null,yp=null,jo=null,Sp=!1;function D_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sp||Sr==null||Sr!==du(i)||(i=Sr,"selectionStart"in i&&fm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),jo&&fl(jo,i)||(jo=i,i=Uu(yp,"onSelect"),0<i.length&&(t=new Fu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Sr)))}function Ea(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mr={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionrun:Ea("Transition","TransitionRun"),transitionstart:Ea("Transition","TransitionStart"),transitioncancel:Ea("Transition","TransitionCancel"),transitionend:Ea("Transition","TransitionEnd")},Bd={},dx={};cs&&(dx=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function Ha(e){if(Bd[e])return Bd[e];if(!Mr[e])return e;var t=Mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in dx)return Bd[e]=t[n];return e}var px=Ha("animationend"),mx=Ha("animationiteration"),gx=Ha("animationstart"),eE=Ha("transitionrun"),nE=Ha("transitionstart"),iE=Ha("transitioncancel"),_x=Ha("transitionend"),vx=new Map,Mp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mp.push("scrollEnd");function Si(e,t){vx.set(e,t),Fa(t,[e])}var pu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},si=[],br=0,dm=0;function Gu(){for(var e=br,t=dm=br=0;t<e;){var n=si[t];si[t++]=null;var i=si[t];si[t++]=null;var s=si[t];si[t++]=null;var a=si[t];if(si[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&xx(n,s,a)}}function ku(e,t,n,i){si[br++]=e,si[br++]=t,si[br++]=n,si[br++]=i,dm|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function pm(e,t,n,i){return ku(e,t,n,i),mu(e)}function Ga(e,t){return ku(e,null,null,t),mu(e)}function xx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-kn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function mu(e){if(50<ol)throw ol=0,kp=null,Error(et(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Er={};function sE(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(e,t,n,i){return new sE(e,t,n,i)}function mm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rs(e,t){var n=e.alternate;return n===null?(n=Fn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yx(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function jc(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")mm(e)&&(r=1);else if(typeof e=="string")r=oT(e,n,Pi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case cp:return e=Fn(31,n,t,s),e.elementType=cp,e.lanes=a,e;case gr:return Da(n.children,s,a,t);case Fv:r=8,s|=24;break;case rp:return e=Fn(12,n,t,s|2),e.elementType=rp,e.lanes=a,e;case op:return e=Fn(13,n,t,s),e.elementType=op,e.lanes=a,e;case lp:return e=Fn(19,n,t,s),e.elementType=lp,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case is:r=10;break t;case Vv:r=9;break t;case em:r=11;break t;case nm:r=14;break t;case Ls:r=16,i=null;break t}r=29,n=Error(et(130,e===null?"null":typeof e,"")),i=null}return t=Fn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Da(e,t,n,i){return e=Fn(7,e,i,t),e.lanes=n,e}function zd(e,t,n){return e=Fn(6,e,null,t),e.lanes=n,e}function Sx(e){var t=Fn(18,null,null,0);return t.stateNode=e,t}function Fd(e,t,n){return t=Fn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var U_=new WeakMap;function ci(e,t){if(typeof e=="object"&&e!==null){var n=U_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:f_(t)},U_.set(e,t),t)}return{value:e,source:t,stack:f_(t)}}var Tr=[],Ar=0,gu=null,dl=0,ri=[],oi=0,$s=null,Li=1,Ii="";function es(e,t){Tr[Ar++]=dl,Tr[Ar++]=gu,gu=e,dl=t}function Mx(e,t,n){ri[oi++]=Li,ri[oi++]=Ii,ri[oi++]=$s,$s=e;var i=Li;e=Ii;var s=32-kn(i)-1;i&=~(1<<s),n+=1;var a=32-kn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Li=1<<32-kn(t)+s|n<<s|i,Ii=a+e}else Li=1<<a|n<<s|i,Ii=e}function gm(e){e.return!==null&&(es(e,1),Mx(e,1,0))}function _m(e){for(;e===gu;)gu=Tr[--Ar],Tr[Ar]=null,dl=Tr[--Ar],Tr[Ar]=null;for(;e===$s;)$s=ri[--oi],ri[oi]=null,Ii=ri[--oi],ri[oi]=null,Li=ri[--oi],ri[oi]=null}function bx(e,t){ri[oi++]=Li,ri[oi++]=Ii,ri[oi++]=$s,Li=t.id,Ii=t.overflow,$s=e}var cn=null,we=null,ie=!1,Ws=null,ui=!1,bp=Error(et(519));function ta(e){var t=Error(et(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw pl(ci(t,e)),bp}function N_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[ln]=e,t[Nn]=i,n){case"dialog":Kt("cancel",t),Kt("close",t);break;case"iframe":case"object":case"embed":Kt("load",t);break;case"video":case"audio":for(n=0;n<vl.length;n++)Kt(vl[n],t);break;case"source":Kt("error",t);break;case"img":case"image":case"link":Kt("error",t),Kt("load",t);break;case"details":Kt("toggle",t);break;case"input":Kt("invalid",t),$v(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Kt("invalid",t);break;case"textarea":Kt("invalid",t),ex(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||aS(t.textContent,n)?(i.popover!=null&&(Kt("beforetoggle",t),Kt("toggle",t)),i.onScroll!=null&&Kt("scroll",t),i.onScrollEnd!=null&&Kt("scrollend",t),i.onClick!=null&&(t.onclick=ss),t=!0):t=!1,t||ta(e,!0)}function L_(e){for(cn=e.return;cn;)switch(cn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:cn=cn.return}}function fr(e){if(e!==cn)return!1;if(!ie)return L_(e),ie=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Zp(e.type,e.memoizedProps)),n=!n),n&&we&&ta(e),L_(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(317));we=Sv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(317));we=Sv(e)}else t===27?(t=we,sa(e.type)?(e=jp,jp=null,we=e):we=t):we=cn?fi(e.stateNode.nextSibling):null;return!0}function Ia(){we=cn=null,ie=!1}function Vd(){var e=Ws;return e!==null&&(Dn===null?Dn=e:Dn.push.apply(Dn,e),Ws=null),e}function pl(e){Ws===null?Ws=[e]:Ws.push(e)}var Ep=Bi(null),ka=null,as=null;function Os(e,t,n){be(Ep,t._currentValue),t._currentValue=n}function os(e){e._currentValue=Ep.current,sn(Ep)}function Tp(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Ap(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Tp(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(et(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Tp(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Zr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(et(387));if(r=r.memoizedProps,r!==null){var o=s.type;Wn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===cu.current){if(r=s.alternate,r===null)throw Error(et(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(yl):e=[yl])}s=s.return}e!==null&&Ap(t,e,n,i),t.flags|=262144}function _u(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Oa(e){ka=e,as=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function un(e){return Ex(ka,e)}function zc(e,t){return ka===null&&Oa(e),Ex(e,t)}function Ex(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},as===null){if(e===null)throw Error(et(308));as=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else as=as.next=t;return n}var aE=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},rE=Qe.unstable_scheduleCallback,oE=Qe.unstable_NormalPriority,Ye={$$typeof:is,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vm(){return{controller:new aE,data:new Map,refCount:0}}function Rl(e){e.refCount--,e.refCount===0&&rE(oE,function(){e.controller.abort()})}var $o=null,wp=0,zr=0,Ur=null;function lE(e,t){if($o===null){var n=$o=[];wp=0,zr=km(),Ur={status:"pending",value:void 0,then:function(i){n.push(i)}}}return wp++,t.then(I_,I_),t}function I_(){if(--wp===0&&$o!==null){Ur!==null&&(Ur.status="fulfilled");var e=$o;$o=null,zr=0,Ur=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function cE(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var O_=It.S;It.S=function(e,t){zy=Hn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&lE(e,t),O_!==null&&O_(e,t)};var Ua=Bi(null);function xm(){var e=Ua.current;return e!==null?e:Se.pooledCache}function $c(e,t){t===null?be(Ua,Ua.current):be(Ua,t.pool)}function Tx(){var e=xm();return e===null?null:{parent:Ye._currentValue,pool:e}}var Jr=Error(et(460)),ym=Error(et(474)),Xu=Error(et(542)),vu={then:function(){}};function P_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ax(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ss,ss),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,z_(e),e;default:if(typeof t.status=="string")t.then(ss,ss);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(et(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,z_(e),e}throw Na=t,Jr}}function wa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Na=n,Jr):n}}var Na=null;function B_(){if(Na===null)throw Error(et(459));var e=Na;return Na=null,e}function z_(e){if(e===Jr||e===Xu)throw Error(et(483))}var Nr=null,ml=0;function Fc(e){var t=ml;return ml+=1,Nr===null&&(Nr=[]),Ax(Nr,e,t)}function Vo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Vc(e,t){throw t.$$typeof===Jb?Error(et(525)):(e=Object.prototype.toString.call(t),Error(et(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function wx(e){function t(h,m){if(e){var S=h.deletions;S===null?(h.deletions=[m],h.flags|=16):S.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function i(h){for(var m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function s(h,m){return h=rs(h,m),h.index=0,h.sibling=null,h}function a(h,m,S){return h.index=S,e?(S=h.alternate,S!==null?(S=S.index,S<m?(h.flags|=67108866,m):S):(h.flags|=67108866,m)):(h.flags|=1048576,m)}function r(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function o(h,m,S,v){return m===null||m.tag!==6?(m=zd(S,h.mode,v),m.return=h,m):(m=s(m,S),m.return=h,m)}function l(h,m,S,v){var E=S.type;return E===gr?f(h,m,S.props.children,v,S.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ls&&wa(E)===m.type)?(m=s(m,S.props),Vo(m,S),m.return=h,m):(m=jc(S.type,S.key,S.props,null,h.mode,v),Vo(m,S),m.return=h,m)}function c(h,m,S,v){return m===null||m.tag!==4||m.stateNode.containerInfo!==S.containerInfo||m.stateNode.implementation!==S.implementation?(m=Fd(S,h.mode,v),m.return=h,m):(m=s(m,S.children||[]),m.return=h,m)}function f(h,m,S,v,E){return m===null||m.tag!==7?(m=Da(S,h.mode,v,E),m.return=h,m):(m=s(m,S),m.return=h,m)}function p(h,m,S){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=zd(""+m,h.mode,S),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Dc:return S=jc(m.type,m.key,m.props,null,h.mode,S),Vo(S,m),S.return=h,S;case Wo:return m=Fd(m,h.mode,S),m.return=h,m;case Ls:return m=wa(m),p(h,m,S)}if(qo(m)||zo(m))return m=Da(m,h.mode,S,null),m.return=h,m;if(typeof m.then=="function")return p(h,Fc(m),S);if(m.$$typeof===is)return p(h,zc(h,m),S);Vc(h,m)}return null}function u(h,m,S,v){var E=m!==null?m.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return E!==null?null:o(h,m,""+S,v);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Dc:return S.key===E?l(h,m,S,v):null;case Wo:return S.key===E?c(h,m,S,v):null;case Ls:return S=wa(S),u(h,m,S,v)}if(qo(S)||zo(S))return E!==null?null:f(h,m,S,v,null);if(typeof S.then=="function")return u(h,m,Fc(S),v);if(S.$$typeof===is)return u(h,m,zc(h,S),v);Vc(h,S)}return null}function d(h,m,S,v,E){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return h=h.get(S)||null,o(m,h,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Dc:return h=h.get(v.key===null?S:v.key)||null,l(m,h,v,E);case Wo:return h=h.get(v.key===null?S:v.key)||null,c(m,h,v,E);case Ls:return v=wa(v),d(h,m,S,v,E)}if(qo(v)||zo(v))return h=h.get(S)||null,f(m,h,v,E,null);if(typeof v.then=="function")return d(h,m,S,Fc(v),E);if(v.$$typeof===is)return d(h,m,S,zc(m,v),E);Vc(m,v)}return null}function _(h,m,S,v){for(var E=null,A=null,w=m,x=m=0,T=null;w!==null&&x<S.length;x++){w.index>x?(T=w,w=null):T=w.sibling;var R=u(h,w,S[x],v);if(R===null){w===null&&(w=T);break}e&&w&&R.alternate===null&&t(h,w),m=a(R,m,x),A===null?E=R:A.sibling=R,A=R,w=T}if(x===S.length)return n(h,w),ie&&es(h,x),E;if(w===null){for(;x<S.length;x++)w=p(h,S[x],v),w!==null&&(m=a(w,m,x),A===null?E=w:A.sibling=w,A=w);return ie&&es(h,x),E}for(w=i(w);x<S.length;x++)T=d(w,h,x,S[x],v),T!==null&&(e&&T.alternate!==null&&w.delete(T.key===null?x:T.key),m=a(T,m,x),A===null?E=T:A.sibling=T,A=T);return e&&w.forEach(function(D){return t(h,D)}),ie&&es(h,x),E}function M(h,m,S,v){if(S==null)throw Error(et(151));for(var E=null,A=null,w=m,x=m=0,T=null,R=S.next();w!==null&&!R.done;x++,R=S.next()){w.index>x?(T=w,w=null):T=w.sibling;var D=u(h,w,R.value,v);if(D===null){w===null&&(w=T);break}e&&w&&D.alternate===null&&t(h,w),m=a(D,m,x),A===null?E=D:A.sibling=D,A=D,w=T}if(R.done)return n(h,w),ie&&es(h,x),E;if(w===null){for(;!R.done;x++,R=S.next())R=p(h,R.value,v),R!==null&&(m=a(R,m,x),A===null?E=R:A.sibling=R,A=R);return ie&&es(h,x),E}for(w=i(w);!R.done;x++,R=S.next())R=d(w,h,x,R.value,v),R!==null&&(e&&R.alternate!==null&&w.delete(R.key===null?x:R.key),m=a(R,m,x),A===null?E=R:A.sibling=R,A=R);return e&&w.forEach(function(z){return t(h,z)}),ie&&es(h,x),E}function g(h,m,S,v){if(typeof S=="object"&&S!==null&&S.type===gr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Dc:t:{for(var E=S.key;m!==null;){if(m.key===E){if(E=S.type,E===gr){if(m.tag===7){n(h,m.sibling),v=s(m,S.props.children),v.return=h,h=v;break t}}else if(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ls&&wa(E)===m.type){n(h,m.sibling),v=s(m,S.props),Vo(v,S),v.return=h,h=v;break t}n(h,m);break}else t(h,m);m=m.sibling}S.type===gr?(v=Da(S.props.children,h.mode,v,S.key),v.return=h,h=v):(v=jc(S.type,S.key,S.props,null,h.mode,v),Vo(v,S),v.return=h,h=v)}return r(h);case Wo:t:{for(E=S.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===S.containerInfo&&m.stateNode.implementation===S.implementation){n(h,m.sibling),v=s(m,S.children||[]),v.return=h,h=v;break t}else{n(h,m);break}else t(h,m);m=m.sibling}v=Fd(S,h.mode,v),v.return=h,h=v}return r(h);case Ls:return S=wa(S),g(h,m,S,v)}if(qo(S))return _(h,m,S,v);if(zo(S)){if(E=zo(S),typeof E!="function")throw Error(et(150));return S=E.call(S),M(h,m,S,v)}if(typeof S.then=="function")return g(h,m,Fc(S),v);if(S.$$typeof===is)return g(h,m,zc(h,S),v);Vc(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,m!==null&&m.tag===6?(n(h,m.sibling),v=s(m,S),v.return=h,h=v):(n(h,m),v=zd(S,h.mode,v),v.return=h,h=v),r(h)):n(h,m)}return function(h,m,S,v){try{ml=0;var E=g(h,m,S,v);return Nr=null,E}catch(w){if(w===Jr||w===Xu)throw w;var A=Fn(29,w,null,h.mode);return A.lanes=v,A.return=h,A}}}var Pa=wx(!0),Cx=wx(!1),Is=!1;function Sm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ys(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(le&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=mu(e),xx(e,null,n),t}return ku(e,i,t,n),mu(e)}function tl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,qv(e,n)}}function Hd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Rp=!1;function el(){if(Rp){var e=Ur;if(e!==null)throw e}}function nl(e,t,n,i){Rp=!1;var s=e.updateQueue;Is=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,f=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(te&u)===u:(i&u)===u){u!==0&&u===zr&&(Rp=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,M=o;u=t;var g=n;switch(M.tag){case 1:if(_=M.payload,typeof _=="function"){p=_.call(g,p,u);break t}p=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=M.payload,u=typeof _=="function"?_.call(g,p,u):_,u==null)break t;p=Ce({},p,u);break t;case 2:Is=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=d,l=p):f=f.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);f===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),na|=r,e.lanes=r,e.memoizedState=p}}function Rx(e,t){if(typeof e!="function")throw Error(et(191,e));e.call(t)}function Dx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Rx(n[e],t)}var Fr=Bi(null),xu=Bi(0);function F_(e,t){e=ds,be(xu,e),be(Fr,t),ds=e|t.baseLanes}function Dp(){be(xu,ds),be(Fr,Fr.current)}function Mm(){ds=xu.current,sn(Fr),sn(xu)}var qn=Bi(null),hi=null;function Ps(e){var t=e.alternate;be(He,He.current&1),be(qn,e),hi===null&&(t===null||Fr.current!==null||t.memoizedState!==null)&&(hi=e)}function Up(e){be(He,He.current),be(qn,e),hi===null&&(hi=e)}function Ux(e){e.tag===22?(be(He,He.current),be(qn,e),hi===null&&(hi=e)):Bs(e)}function Bs(){be(He,He.current),be(qn,qn.current)}function zn(e){sn(qn),hi===e&&(hi=null),sn(He)}var He=Bi(0);function yu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Kp(n)||Qp(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var us=0,Ht=null,ge=null,We=null,Su=!1,Lr=!1,Ba=!1,Mu=0,gl=0,Ir=null,uE=0;function Pe(){throw Error(et(321))}function bm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wn(e[n],t[n]))return!1;return!0}function Em(e,t,n,i,s,a){return us=a,Ht=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,It.H=e===null||e.memoizedState===null?ly:Om,Ba=!1,a=n(i,s),Ba=!1,Lr&&(a=Lx(t,n,i,s)),Nx(e),a}function Nx(e){It.H=_l;var t=ge!==null&&ge.next!==null;if(us=0,We=ge=Ht=null,Su=!1,gl=0,Ir=null,t)throw Error(et(300));e===null||Ze||(e=e.dependencies,e!==null&&_u(e)&&(Ze=!0))}function Lx(e,t,n,i){Ht=e;var s=0;do{if(Lr&&(Ir=null),gl=0,Lr=!1,25<=s)throw Error(et(301));if(s+=1,We=ge=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}It.H=cy,a=t(n,i)}while(Lr);return a}function hE(){var e=It.H,t=e.useState()[0];return t=typeof t.then=="function"?Dl(t):t,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&(Ht.flags|=1024),t}function Tm(){var e=Mu!==0;return Mu=0,e}function Am(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function wm(e){if(Su){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Su=!1}us=0,We=ge=Ht=null,Lr=!1,gl=Mu=0,Ir=null}function bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ht.memoizedState=We=e:We=We.next=e,We}function Ge(){if(ge===null){var e=Ht.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=We===null?Ht.memoizedState:We.next;if(t!==null)We=t,ge=e;else{if(e===null)throw Ht.alternate===null?Error(et(467)):Error(et(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},We===null?Ht.memoizedState=We=e:We=We.next=e}return We}function Wu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dl(e){var t=gl;return gl+=1,Ir===null&&(Ir=[]),e=Ax(Ir,e,t),t=Ht,(We===null?t.memoizedState:We.next)===null&&(t=t.alternate,It.H=t===null||t.memoizedState===null?ly:Om),e}function qu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Dl(e);if(e.$$typeof===is)return un(e)}throw Error(et(438,String(e)))}function Cm(e){var t=null,n=Ht.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Ht.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Wu(),Ht.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Kb;return t.index++,n}function hs(e,t){return typeof t=="function"?t(e):t}function tu(e){var t=Ge();return Rm(t,ge,e)}function Rm(e,t,n){var i=e.queue;if(i===null)throw Error(et(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(te&p)===p:(us&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===zr&&(f=!0);else if((us&u)===u){c=c.next,u===zr&&(f=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,Ht.lanes|=u,na|=u;p=c.action,Ba&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,Ht.lanes|=p,na|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Wn(a,e.memoizedState)&&(Ze=!0,f&&(n=Ur,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Gd(e){var t=Ge(),n=t.queue;if(n===null)throw Error(et(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Wn(a,t.memoizedState)||(Ze=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Ix(e,t,n){var i=Ht,s=Ge(),a=ie;if(a){if(n===void 0)throw Error(et(407));n=n()}else n=t();var r=!Wn((ge||s).memoizedState,n);if(r&&(s.memoizedState=n,Ze=!0),s=s.queue,Dm(Bx.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||We!==null&&We.memoizedState.tag&1){if(i.flags|=2048,Vr(9,{destroy:void 0},Px.bind(null,i,s,n,t),null),Se===null)throw Error(et(349));a||(us&127)!==0||Ox(i,t,n)}return n}function Ox(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ht.updateQueue,t===null?(t=Wu(),Ht.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Px(e,t,n,i){t.value=n,t.getSnapshot=i,zx(t)&&Fx(e)}function Bx(e,t,n){return n(function(){zx(t)&&Fx(e)})}function zx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wn(e,n)}catch{return!0}}function Fx(e){var t=Ga(e,2);t!==null&&Un(t,e,2)}function Np(e){var t=bn();if(typeof e=="function"){var n=e;if(e=n(),Ba){Fs(!0);try{n()}finally{Fs(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:e},t}function Vx(e,t,n,i){return e.baseState=n,Rm(e,ge,typeof i=="function"?i:hs)}function fE(e,t,n,i,s){if(Zu(e))throw Error(et(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};It.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,Hx(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Hx(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=It.T,r={};It.T=r;try{var o=n(s,i),l=It.S;l!==null&&l(r,o),V_(e,t,o)}catch(c){Lp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),It.T=a}}else try{a=n(s,i),V_(e,t,a)}catch(c){Lp(e,t,c)}}function V_(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){H_(e,t,i)},function(i){return Lp(e,t,i)}):H_(e,t,n)}function H_(e,t,n){t.status="fulfilled",t.value=n,Gx(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Hx(e,n)))}function Lp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Gx(t),t=t.next;while(t!==i)}e.action=null}function Gx(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function kx(e,t){return t}function G_(e,t){if(ie){var n=Se.formState;if(n!==null){t:{var i=Ht;if(ie){if(we){e:{for(var s=we,a=ui;s.nodeType!==8;){if(!a){s=null;break e}if(s=fi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){we=fi(s.nextSibling),i=s.data==="F!";break t}}ta(i)}i=!1}i&&(t=n[0])}}return n=bn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kx,lastRenderedState:t},n.queue=i,n=ay.bind(null,Ht,i),i.dispatch=n,i=Np(!1),a=Im.bind(null,Ht,!1,i.queue),i=bn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=fE.bind(null,Ht,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function k_(e){var t=Ge();return Xx(t,ge,e)}function Xx(e,t,n){if(t=Rm(e,t,kx)[0],e=tu(hs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Dl(t)}catch(r){throw r===Jr?Xu:r}else i=t;t=Ge();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Ht.flags|=2048,Vr(9,{destroy:void 0},dE.bind(null,s,n),null)),[i,a,e]}function dE(e,t){e.action=t}function X_(e){var t=Ge(),n=ge;if(n!==null)return Xx(t,n,e);Ge(),t=t.memoizedState,n=Ge();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Vr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Ht.updateQueue,t===null&&(t=Wu(),Ht.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Wx(){return Ge().memoizedState}function eu(e,t,n,i){var s=bn();Ht.flags|=e,s.memoizedState=Vr(1|t,{destroy:void 0},n,i===void 0?null:i)}function Yu(e,t,n,i){var s=Ge();i=i===void 0?null:i;var a=s.memoizedState.inst;ge!==null&&i!==null&&bm(i,ge.memoizedState.deps)?s.memoizedState=Vr(t,a,n,i):(Ht.flags|=e,s.memoizedState=Vr(1|t,a,n,i))}function W_(e,t){eu(8390656,8,e,t)}function Dm(e,t){Yu(2048,8,e,t)}function pE(e){Ht.flags|=4;var t=Ht.updateQueue;if(t===null)t=Wu(),Ht.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function qx(e){var t=Ge().memoizedState;return pE({ref:t,nextImpl:e}),function(){if((le&2)!==0)throw Error(et(440));return t.impl.apply(void 0,arguments)}}function Yx(e,t){return Yu(4,2,e,t)}function Zx(e,t){return Yu(4,4,e,t)}function Jx(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kx(e,t,n){n=n!=null?n.concat([e]):null,Yu(4,4,Jx.bind(null,t,e),n)}function Um(){}function Qx(e,t){var n=Ge();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&bm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function jx(e,t){var n=Ge();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&bm(t,i[1]))return i[0];if(i=e(),Ba){Fs(!0);try{e()}finally{Fs(!1)}}return n.memoizedState=[i,t],i}function Nm(e,t,n){return n===void 0||(us&1073741824)!==0&&(te&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Vy(),Ht.lanes|=e,na|=e,n)}function $x(e,t,n,i){return Wn(n,t)?n:Fr.current!==null?(e=Nm(e,n,i),Wn(e,t)||(Ze=!0),e):(us&42)===0||(us&1073741824)!==0&&(te&261930)===0?(Ze=!0,e.memoizedState=n):(e=Vy(),Ht.lanes|=e,na|=e,t)}function ty(e,t,n,i,s){var a=ce.p;ce.p=a!==0&&8>a?a:8;var r=It.T,o={};It.T=o,Im(e,!1,t,n);try{var l=s(),c=It.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=cE(l,i);il(e,t,f,Xn(e))}else il(e,t,i,Xn(e))}catch(p){il(e,t,{then:function(){},status:"rejected",reason:p},Xn())}finally{ce.p=a,r!==null&&o.types!==null&&(r.types=o.types),It.T=r}}function mE(){}function Ip(e,t,n,i){if(e.tag!==5)throw Error(et(476));var s=ey(e).queue;ty(e,s,t,Ra,n===null?mE:function(){return ny(e),n(i)})}function ey(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ra,baseState:Ra,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:Ra},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ny(e){var t=ey(e);t.next===null&&(t=e.alternate.memoizedState),il(e,t.next.queue,{},Xn())}function Lm(){return un(yl)}function iy(){return Ge().memoizedState}function sy(){return Ge().memoizedState}function gE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Xn();e=qs(n);var i=Ys(t,e,n);i!==null&&(Un(i,t,n),tl(i,t,n)),t={cache:vm()},e.payload=t;return}t=t.return}}function _E(e,t,n){var i=Xn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Zu(e)?ry(t,n):(n=pm(e,t,n,i),n!==null&&(Un(n,e,i),oy(n,t,i)))}function ay(e,t,n){var i=Xn();il(e,t,n,i)}function il(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zu(e))ry(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Wn(o,r))return ku(e,t,s,0),Se===null&&Gu(),!1}catch{}if(n=pm(e,t,s,i),n!==null)return Un(n,e,i),oy(n,t,i),!0}return!1}function Im(e,t,n,i){if(i={lane:2,revertLane:km(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Zu(e)){if(t)throw Error(et(479))}else t=pm(e,n,i,2),t!==null&&Un(t,e,2)}function Zu(e){var t=e.alternate;return e===Ht||t!==null&&t===Ht}function ry(e,t){Lr=Su=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function oy(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,qv(e,n)}}var _l={readContext:un,use:qu,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useLayoutEffect:Pe,useInsertionEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useSyncExternalStore:Pe,useId:Pe,useHostTransitionStatus:Pe,useFormState:Pe,useActionState:Pe,useOptimistic:Pe,useMemoCache:Pe,useCacheRefresh:Pe};_l.useEffectEvent=Pe;var ly={readContext:un,use:qu,useCallback:function(e,t){return bn().memoizedState=[e,t===void 0?null:t],e},useContext:un,useEffect:W_,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,eu(4194308,4,Jx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return eu(4194308,4,e,t)},useInsertionEffect:function(e,t){eu(4,2,e,t)},useMemo:function(e,t){var n=bn();t=t===void 0?null:t;var i=e();if(Ba){Fs(!0);try{e()}finally{Fs(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=bn();if(n!==void 0){var s=n(t);if(Ba){Fs(!0);try{n(t)}finally{Fs(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=_E.bind(null,Ht,e),[i.memoizedState,e]},useRef:function(e){var t=bn();return e={current:e},t.memoizedState=e},useState:function(e){e=Np(e);var t=e.queue,n=ay.bind(null,Ht,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Um,useDeferredValue:function(e,t){var n=bn();return Nm(n,e,t)},useTransition:function(){var e=Np(!1);return e=ty.bind(null,Ht,e.queue,!0,!1),bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Ht,s=bn();if(ie){if(n===void 0)throw Error(et(407));n=n()}else{if(n=t(),Se===null)throw Error(et(349));(te&127)!==0||Ox(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,W_(Bx.bind(null,i,a,e),[e]),i.flags|=2048,Vr(9,{destroy:void 0},Px.bind(null,i,a,n,t),null),n},useId:function(){var e=bn(),t=Se.identifierPrefix;if(ie){var n=Ii,i=Li;n=(i&~(1<<32-kn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Mu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=uE++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Lm,useFormState:G_,useActionState:G_,useOptimistic:function(e){var t=bn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Im.bind(null,Ht,!0,n),n.dispatch=t,[e,t]},useMemoCache:Cm,useCacheRefresh:function(){return bn().memoizedState=gE.bind(null,Ht)},useEffectEvent:function(e){var t=bn(),n={impl:e};return t.memoizedState=n,function(){if((le&2)!==0)throw Error(et(440));return n.impl.apply(void 0,arguments)}}},Om={readContext:un,use:qu,useCallback:Qx,useContext:un,useEffect:Dm,useImperativeHandle:Kx,useInsertionEffect:Yx,useLayoutEffect:Zx,useMemo:jx,useReducer:tu,useRef:Wx,useState:function(){return tu(hs)},useDebugValue:Um,useDeferredValue:function(e,t){var n=Ge();return $x(n,ge.memoizedState,e,t)},useTransition:function(){var e=tu(hs)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Dl(e),t]},useSyncExternalStore:Ix,useId:iy,useHostTransitionStatus:Lm,useFormState:k_,useActionState:k_,useOptimistic:function(e,t){var n=Ge();return Vx(n,ge,e,t)},useMemoCache:Cm,useCacheRefresh:sy};Om.useEffectEvent=qx;var cy={readContext:un,use:qu,useCallback:Qx,useContext:un,useEffect:Dm,useImperativeHandle:Kx,useInsertionEffect:Yx,useLayoutEffect:Zx,useMemo:jx,useReducer:Gd,useRef:Wx,useState:function(){return Gd(hs)},useDebugValue:Um,useDeferredValue:function(e,t){var n=Ge();return ge===null?Nm(n,e,t):$x(n,ge.memoizedState,e,t)},useTransition:function(){var e=Gd(hs)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Dl(e),t]},useSyncExternalStore:Ix,useId:iy,useHostTransitionStatus:Lm,useFormState:X_,useActionState:X_,useOptimistic:function(e,t){var n=Ge();return ge!==null?Vx(n,ge,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Cm,useCacheRefresh:sy};cy.useEffectEvent=qx;function kd(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Op={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Xn(),s=qs(i);s.payload=t,n!=null&&(s.callback=n),t=Ys(e,s,i),t!==null&&(Un(t,e,i),tl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Xn(),s=qs(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ys(e,s,i),t!==null&&(Un(t,e,i),tl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xn(),i=qs(n);i.tag=2,t!=null&&(i.callback=t),t=Ys(e,i,n),t!==null&&(Un(t,e,n),tl(t,e,n))}};function q_(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!fl(n,i)||!fl(s,a):!0}function Y_(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Op.enqueueReplaceState(t,t.state,null)}function za(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ce({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function uy(e){pu(e)}function hy(e){console.error(e)}function fy(e){pu(e)}function bu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Z_(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Pp(e,t,n){return n=qs(n),n.tag=3,n.payload={element:null},n.callback=function(){bu(e,t)},n}function dy(e){return e=qs(e),e.tag=3,e}function py(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){Z_(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Z_(t,n,i),typeof s!="function"&&(Zs===null?Zs=new Set([this]):Zs.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function vE(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Zr(t,n,s,!0),n=qn.current,n!==null){switch(n.tag){case 31:case 13:return hi===null?Cu():n.alternate===null&&Be===0&&(Be=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===vu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),tp(e,i,s)),!1;case 22:return n.flags|=65536,i===vu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),tp(e,i,s)),!1}throw Error(et(435,n.tag))}return tp(e,i,s),Cu(),!1}if(ie)return t=qn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==bp&&(e=Error(et(422),{cause:i}),pl(ci(e,n)))):(i!==bp&&(t=Error(et(423),{cause:i}),pl(ci(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=ci(i,n),s=Pp(e.stateNode,i,s),Hd(e,s),Be!==4&&(Be=2)),!1;var a=Error(et(520),{cause:i});if(a=ci(a,n),rl===null?rl=[a]:rl.push(a),Be!==4&&(Be=2),t===null)return!0;i=ci(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Pp(n.stateNode,i,e),Hd(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Zs===null||!Zs.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=dy(s),py(s,e,n,i),Hd(n,s),!1}n=n.return}while(n!==null);return!1}var Pm=Error(et(461)),Ze=!1;function on(e,t,n,i){t.child=e===null?Cx(t,null,n,i):Pa(t,e.child,n,i)}function J_(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Oa(t),i=Em(e,t,n,r,a,s),o=Tm(),e!==null&&!Ze?(Am(e,t,s),fs(e,t,s)):(ie&&o&&gm(t),t.flags|=1,on(e,t,i,s),t.child)}function K_(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!mm(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,my(e,t,a,i,s)):(e=jc(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Bm(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:fl,n(r,i)&&e.ref===t.ref)return fs(e,t,s)}return t.flags|=1,e=rs(a,i),e.ref=t.ref,e.return=t,t.child=e}function my(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(fl(a,i)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=i=a,Bm(e,s))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,fs(e,t,s)}return Bp(e,t,n,i,s)}function gy(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return Q_(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&$c(t,a!==null?a.cachePool:null),a!==null?F_(t,a):Dp(),Ux(t);else return i=t.lanes=536870912,Q_(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?($c(t,a.cachePool),F_(t,a),Bs(t),t.memoizedState=null):(e!==null&&$c(t,null),Dp(),Bs(t));return on(e,t,s,n),t.child}function Zo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Q_(e,t,n,i,s){var a=xm();return a=a===null?null:{parent:Ye._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&$c(t,null),Dp(),Ux(t),e!==null&&Zr(e,t,i,!0),t.childLanes=s,null}function nu(e,t){return t=Eu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function j_(e,t,n){return Pa(t,e.child,null,n),e=nu(t,t.pendingProps),e.flags|=2,zn(t),t.memoizedState=null,e}function xE(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ie){if(i.mode==="hidden")return e=nu(t,i),t.lanes=536870912,Zo(null,e);if(Up(t),(e=we)?(e=lS(e,ui),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$s!==null?{id:Li,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},n=Sx(e),n.return=t,t.child=n,cn=t,we=null)):e=null,e===null)throw ta(t);return t.lanes=536870912,null}return nu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(Up(t),s)if(t.flags&256)t.flags&=-257,t=j_(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(et(558));else if(Ze||Zr(e,t,n,!1),s=(n&e.childLanes)!==0,Ze||s){if(i=Se,i!==null&&(r=Yv(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Ga(e,r),Un(i,e,r),Pm;Cu(),t=j_(e,t,n)}else e=a.treeContext,we=fi(r.nextSibling),cn=t,ie=!0,Ws=null,ui=!1,e!==null&&bx(t,e),t=nu(t,i),t.flags|=4096;return t}return e=rs(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function iu(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(et(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Bp(e,t,n,i,s){return Oa(t),n=Em(e,t,n,i,void 0,s),i=Tm(),e!==null&&!Ze?(Am(e,t,s),fs(e,t,s)):(ie&&i&&gm(t),t.flags|=1,on(e,t,n,s),t.child)}function $_(e,t,n,i,s,a){return Oa(t),t.updateQueue=null,n=Lx(t,i,n,s),Nx(e),i=Tm(),e!==null&&!Ze?(Am(e,t,a),fs(e,t,a)):(ie&&i&&gm(t),t.flags|=1,on(e,t,n,a),t.child)}function tv(e,t,n,i,s){if(Oa(t),t.stateNode===null){var a=Er,r=n.contextType;typeof r=="object"&&r!==null&&(a=un(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Op,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Sm(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?un(r):Er,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(kd(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Op.enqueueReplaceState(a,a.state,null),nl(t,i,a,s),el(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=za(n,o);a.props=l;var c=a.context,f=n.contextType;r=Er,typeof f=="object"&&f!==null&&(r=un(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&Y_(t,a,i,r),Is=!1;var u=t.memoizedState;a.state=u,nl(t,i,a,s),el(),c=t.memoizedState,o||u!==c||Is?(typeof p=="function"&&(kd(t,n,p,i),c=t.memoizedState),(l=Is||q_(t,n,l,i,u,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Cp(e,t),r=t.memoizedProps,f=za(n,r),a.props=f,p=t.pendingProps,u=a.context,c=n.contextType,l=Er,typeof c=="object"&&c!==null&&(l=un(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&Y_(t,a,i,l),Is=!1,u=t.memoizedState,a.state=u,nl(t,i,a,s),el();var d=t.memoizedState;r!==p||u!==d||Is||e!==null&&e.dependencies!==null&&_u(e.dependencies)?(typeof o=="function"&&(kd(t,n,o,i),d=t.memoizedState),(f=Is||q_(t,n,f,i,u,d,l)||e!==null&&e.dependencies!==null&&_u(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,iu(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=Pa(t,e.child,null,s),t.child=Pa(t,null,n,s)):on(e,t,n,s),t.memoizedState=a.state,e=t.child):e=fs(e,t,s),e}function ev(e,t,n,i){return Ia(),t.flags|=256,on(e,t,n,i),t.child}var Xd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wd(e){return{baseLanes:e,cachePool:Tx()}}function qd(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Vn),e}function _y(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ie){if(s?Ps(t):Bs(t),(e=we)?(e=lS(e,ui),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$s!==null?{id:Li,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},n=Sx(e),n.return=t,t.child=n,cn=t,we=null)):e=null,e===null)throw ta(t);return Qp(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(Bs(t),s=t.mode,o=Eu({mode:"hidden",children:o},s),i=Da(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Wd(n),i.childLanes=qd(e,r,n),t.memoizedState=Xd,Zo(null,i)):(Ps(t),zp(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(Ps(t),t.flags&=-257,t=Yd(e,t,n)):t.memoizedState!==null?(Bs(t),t.child=e.child,t.flags|=128,t=null):(Bs(t),o=i.fallback,s=t.mode,i=Eu({mode:"visible",children:i.children},s),o=Da(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,Pa(t,e.child,null,n),i=t.child,i.memoizedState=Wd(n),i.childLanes=qd(e,r,n),t.memoizedState=Xd,t=Zo(null,i));else if(Ps(t),Qp(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(et(419)),i.stack="",i.digest=r,pl({value:i,source:null,stack:null}),t=Yd(e,t,n)}else if(Ze||Zr(e,t,n,!1),r=(n&e.childLanes)!==0,Ze||r){if(r=Se,r!==null&&(i=Yv(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Ga(e,i),Un(r,e,i),Pm;Kp(o)||Cu(),t=Yd(e,t,n)}else Kp(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,we=fi(o.nextSibling),cn=t,ie=!0,Ws=null,ui=!1,e!==null&&bx(t,e),t=zp(t,i.children),t.flags|=4096);return t}return s?(Bs(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=rs(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=rs(c,o):(o=Da(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Zo(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Wd(n):(s=o.cachePool,s!==null?(l=Ye._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=Tx(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=qd(e,r,n),t.memoizedState=Xd,Zo(e.child,i)):(Ps(t),n=e.child,e=n.sibling,n=rs(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function zp(e,t){return t=Eu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Eu(e,t){return e=Fn(22,e,null,t),e.lanes=0,e}function Yd(e,t,n){return Pa(t,e.child,null,n),e=zp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Tp(e.return,t,n)}function Zd(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function vy(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=He.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,be(He,r),on(e,t,i,n),i=ie?dl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nv(e,n,t);else if(e.tag===19)nv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&yu(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Zd(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&yu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Zd(t,!0,n,null,a,i);break;case"together":Zd(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function fs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),na|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Zr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(et(153));if(t.child!==null){for(e=t.child,n=rs(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rs(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bm(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&_u(e)))}function yE(e,t,n){switch(t.tag){case 3:uu(t,t.stateNode.containerInfo),Os(t,Ye,e.memoizedState.cache),Ia();break;case 27:case 5:fp(t);break;case 4:uu(t,t.stateNode.containerInfo);break;case 10:Os(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Up(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ps(t),t.flags|=128,null):(n&t.child.childLanes)!==0?_y(e,t,n):(Ps(t),e=fs(e,t,n),e!==null?e.sibling:null);Ps(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Zr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return vy(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),be(He,He.current),i)break;return null;case 22:return t.lanes=0,gy(e,t,n,t.pendingProps);case 24:Os(t,Ye,e.memoizedState.cache)}return fs(e,t,n)}function xy(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!Bm(e,n)&&(t.flags&128)===0)return Ze=!1,yE(e,t,n);Ze=(e.flags&131072)!==0}else Ze=!1,ie&&(t.flags&1048576)!==0&&Mx(t,dl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=wa(t.elementType),t.type=e,typeof e=="function")mm(e)?(i=za(e,i),t.tag=1,t=tv(null,t,e,i,n)):(t.tag=0,t=Bp(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===em){t.tag=11,t=J_(null,t,e,i,n);break t}else if(s===nm){t.tag=14,t=K_(null,t,e,i,n);break t}}throw t=up(e)||e,Error(et(306,t,""))}}return t;case 0:return Bp(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=za(i,t.pendingProps),tv(e,t,i,s,n);case 3:t:{if(uu(t,t.stateNode.containerInfo),e===null)throw Error(et(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Cp(e,t),nl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Os(t,Ye,i),i!==a.cache&&Ap(t,[Ye],n,!0),el(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=ev(e,t,i,n);break t}else if(i!==s){s=ci(Error(et(424)),t),pl(s),t=ev(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,we=fi(e.firstChild),cn=t,ie=!0,Ws=null,ui=!0,n=Cx(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ia(),i===s){t=fs(e,t,n);break t}on(e,t,i,n)}t=t.child}return t;case 26:return iu(e,t),e===null?(n=Ev(t.type,null,t.pendingProps,null))?t.memoizedState=n:ie||(n=t.type,e=t.pendingProps,i=Nu(Xs.current).createElement(n),i[ln]=t,i[Nn]=e,hn(i,n,e),nn(i),t.stateNode=i):t.memoizedState=Ev(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fp(t),e===null&&ie&&(i=t.stateNode=cS(t.type,t.pendingProps,Xs.current),cn=t,ui=!0,s=we,sa(t.type)?(jp=s,we=fi(i.firstChild)):we=s),on(e,t,t.pendingProps.children,n),iu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ie&&((s=i=we)&&(i=ZE(i,t.type,t.pendingProps,ui),i!==null?(t.stateNode=i,cn=t,we=fi(i.firstChild),ui=!1,s=!0):s=!1),s||ta(t)),fp(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Zp(s,a)?i=null:r!==null&&Zp(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Em(e,t,hE,null,null,n),yl._currentValue=s),iu(e,t),on(e,t,i,n),t.child;case 6:return e===null&&ie&&((e=n=we)&&(n=JE(n,t.pendingProps,ui),n!==null?(t.stateNode=n,cn=t,we=null,e=!0):e=!1),e||ta(t)),null;case 13:return _y(e,t,n);case 4:return uu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Pa(t,null,i,n):on(e,t,i,n),t.child;case 11:return J_(e,t,t.type,t.pendingProps,n);case 7:return on(e,t,t.pendingProps,n),t.child;case 8:return on(e,t,t.pendingProps.children,n),t.child;case 12:return on(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Os(t,t.type,i.value),on(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Oa(t),s=un(s),i=i(s),t.flags|=1,on(e,t,i,n),t.child;case 14:return K_(e,t,t.type,t.pendingProps,n);case 15:return my(e,t,t.type,t.pendingProps,n);case 19:return vy(e,t,n);case 31:return xE(e,t,n);case 22:return gy(e,t,n,t.pendingProps);case 24:return Oa(t),i=un(Ye),e===null?(s=xm(),s===null&&(s=Se,a=vm(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Sm(t),Os(t,Ye,s)):((e.lanes&n)!==0&&(Cp(e,t),nl(t,null,null,n),el()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Os(t,Ye,i)):(i=a.cache,Os(t,Ye,i),i!==s.cache&&Ap(t,[Ye],n,!0))),on(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(et(156,t.tag))}function Qi(e){e.flags|=4}function Jd(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(ky())e.flags|=8192;else throw Na=vu,ym}else e.flags&=-16777217}function iv(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!fS(t))if(ky())e.flags|=8192;else throw Na=vu,ym}function Hc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Xv():536870912,e.lanes|=t,Hr|=t)}function Ho(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function SE(e,t,n){var i=t.pendingProps;switch(_m(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ae(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),os(Ye),Or(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(fr(t)?Qi(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Vd())),Ae(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Qi(t),a!==null?(Ae(t),iv(t,a)):(Ae(t),Jd(t,s,null,i,n))):a?a!==e.memoizedState?(Qi(t),Ae(t),iv(t,a)):(Ae(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Qi(t),Ae(t),Jd(t,s,e,i,n)),null;case 27:if(hu(t),n=Xs.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Qi(t);else{if(!i){if(t.stateNode===null)throw Error(et(166));return Ae(t),null}e=Pi.current,fr(t)?N_(t,e):(e=cS(s,i,n),t.stateNode=e,Qi(t))}return Ae(t),null;case 5:if(hu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Qi(t);else{if(!i){if(t.stateNode===null)throw Error(et(166));return Ae(t),null}if(a=Pi.current,fr(t))N_(t,a);else{var r=Nu(Xs.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[ln]=t,a[Nn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(hn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Qi(t)}}return Ae(t),Jd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Qi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(et(166));if(e=Xs.current,fr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=cn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[ln]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||aS(e.nodeValue,n)),e||ta(t,!0)}else e=Nu(e).createTextNode(i),e[ln]=t,t.stateNode=e}return Ae(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=fr(t),n!==null){if(e===null){if(!i)throw Error(et(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(557));e[ln]=t}else Ia(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),e=!1}else n=Vd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(zn(t),t):(zn(t),null);if((t.flags&128)!==0)throw Error(et(558))}return Ae(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=fr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(et(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(et(317));s[ln]=t}else Ia(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),s=!1}else s=Vd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(zn(t),t):(zn(t),null)}return zn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Hc(t,t.updateQueue),Ae(t),null);case 4:return Or(),e===null&&Xm(t.stateNode.containerInfo),Ae(t),null;case 10:return os(t.type),Ae(t),null;case 19:if(sn(He),i=t.memoizedState,i===null)return Ae(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Ho(i,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=yu(e),a!==null){for(t.flags|=128,Ho(i,!1),e=a.updateQueue,t.updateQueue=e,Hc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yx(n,e),n=n.sibling;return be(He,He.current&1|2),ie&&es(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Hn()>Au&&(t.flags|=128,s=!0,Ho(i,!1),t.lanes=4194304)}else{if(!s)if(e=yu(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Hc(t,e),Ho(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ie)return Ae(t),null}else 2*Hn()-i.renderingStartTime>Au&&n!==536870912&&(t.flags|=128,s=!0,Ho(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Hn(),e.sibling=null,n=He.current,be(He,s?n&1|2:n&1),ie&&es(t,i.treeForkCount),e):(Ae(t),null);case 22:case 23:return zn(t),Mm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),n=t.updateQueue,n!==null&&Hc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&sn(Ua),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),os(Ye),Ae(t),null;case 25:return null;case 30:return null}throw Error(et(156,t.tag))}function ME(e,t){switch(_m(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return os(Ye),Or(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return hu(t),null;case 31:if(t.memoizedState!==null){if(zn(t),t.alternate===null)throw Error(et(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(et(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return sn(He),null;case 4:return Or(),null;case 10:return os(t.type),null;case 22:case 23:return zn(t),Mm(),e!==null&&sn(Ua),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return os(Ye),null;case 25:return null;default:return null}}function yy(e,t){switch(_m(t),t.tag){case 3:os(Ye),Or();break;case 26:case 27:case 5:hu(t);break;case 4:Or();break;case 31:t.memoizedState!==null&&zn(t);break;case 13:zn(t);break;case 19:sn(He);break;case 10:os(t.type);break;case 22:case 23:zn(t),Mm(),e!==null&&sn(Ua);break;case 24:os(Ye)}}function Ul(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){de(t,t.return,o)}}function ea(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){de(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){de(t,t.return,f)}}function Sy(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Dx(t,n)}catch(i){de(e,e.return,i)}}}function My(e,t,n){n.props=za(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){de(e,t,i)}}function sl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){de(e,t,s)}}function Oi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){de(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){de(e,t,s)}else n.current=null}function by(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){de(e,e.return,s)}}function Kd(e,t,n){try{var i=e.stateNode;GE(i,e.type,n,t),i[Nn]=t}catch(s){de(e,e.return,s)}}function Ey(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&sa(e.type)||e.tag===4}function Qd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ey(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&sa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fp(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ss));else if(i!==4&&(i===27&&sa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Fp(e,t,n),e=e.sibling;e!==null;)Fp(e,t,n),e=e.sibling}function Tu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&sa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Tu(e,t,n),e=e.sibling;e!==null;)Tu(e,t,n),e=e.sibling}function Ty(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);hn(t,i,n),t[ln]=e,t[Nn]=n}catch(a){de(e,e.return,a)}}var ns=!1,qe=!1,jd=!1,sv=typeof WeakSet=="function"?WeakSet:Set,en=null;function bE(e,t){if(e=e.containerInfo,qp=Pu,e=fx(e),fm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,f=0,p=e,u=null;e:for(;;){for(var d;p!==n||s!==0&&p.nodeType!==3||(o=r+s),p!==a||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(d=p.firstChild)!==null;)u=p,p=d;for(;;){if(p===e)break e;if(u===n&&++c===s&&(o=r),u===a&&++f===i&&(l=r),(d=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=d}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yp={focusedElem:e,selectionRange:n},Pu=!1,en=t;en!==null;)if(t=en,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,en=e;else for(;en!==null;){switch(t=en,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var _=za(n.type,s);e=i.getSnapshotBeforeUpdate(_,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(M){de(n,n.return,M)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Jp(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jp(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(et(163))}if(e=t.sibling,e!==null){e.return=t.return,en=e;break}en=t.return}}function Ay(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:$i(e,n),i&4&&Ul(5,n);break;case 1:if($i(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){de(n,n.return,r)}else{var s=za(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){de(n,n.return,r)}}i&64&&Sy(n),i&512&&sl(n,n.return);break;case 3:if($i(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Dx(e,t)}catch(r){de(n,n.return,r)}}break;case 27:t===null&&i&4&&Ty(n);case 26:case 5:$i(e,n),t===null&&i&4&&by(n),i&512&&sl(n,n.return);break;case 12:$i(e,n);break;case 31:$i(e,n),i&4&&Ry(e,n);break;case 13:$i(e,n),i&4&&Dy(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=NE.bind(null,n),KE(e,n))));break;case 22:if(i=n.memoizedState!==null||ns,!i){t=t!==null&&t.memoizedState!==null||qe,s=ns;var a=qe;ns=i,(qe=t)&&!a?ts(e,n,(n.subtreeFlags&8772)!==0):$i(e,n),ns=s,qe=a}break;case 30:break;default:$i(e,n)}}function wy(e){var t=e.alternate;t!==null&&(e.alternate=null,wy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&rm(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,Rn=!1;function ji(e,t,n){for(n=n.child;n!==null;)Cy(e,t,n),n=n.sibling}function Cy(e,t,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(El,n)}catch{}switch(n.tag){case 26:qe||Oi(n,t),ji(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qe||Oi(n,t);var i=Ne,s=Rn;sa(n.type)&&(Ne=n.stateNode,Rn=!1),ji(e,t,n),ll(n.stateNode),Ne=i,Rn=s;break;case 5:qe||Oi(n,t);case 6:if(i=Ne,s=Rn,Ne=null,ji(e,t,n),Ne=i,Rn=s,Ne!==null)if(Rn)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(n.stateNode)}catch(a){de(n,t,a)}else try{Ne.removeChild(n.stateNode)}catch(a){de(n,t,a)}break;case 18:Ne!==null&&(Rn?(e=Ne,xv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Wr(e)):xv(Ne,n.stateNode));break;case 4:i=Ne,s=Rn,Ne=n.stateNode.containerInfo,Rn=!0,ji(e,t,n),Ne=i,Rn=s;break;case 0:case 11:case 14:case 15:ea(2,n,t),qe||ea(4,n,t),ji(e,t,n);break;case 1:qe||(Oi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&My(n,t,i)),ji(e,t,n);break;case 21:ji(e,t,n);break;case 22:qe=(i=qe)||n.memoizedState!==null,ji(e,t,n),qe=i;break;default:ji(e,t,n)}}function Ry(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Wr(e)}catch(n){de(t,t.return,n)}}}function Dy(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wr(e)}catch(n){de(t,t.return,n)}}function EE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sv),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sv),t;default:throw Error(et(435,e.tag))}}function Gc(e,t){var n=EE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=LE.bind(null,e,i);i.then(s,s)}})}function wn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(sa(o.type)){Ne=o.stateNode,Rn=!1;break t}break;case 5:Ne=o.stateNode,Rn=!1;break t;case 3:case 4:Ne=o.stateNode.containerInfo,Rn=!0;break t}o=o.return}if(Ne===null)throw Error(et(160));Cy(a,r,s),Ne=null,Rn=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Uy(t,e),t=t.sibling}var yi=null;function Uy(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:wn(t,e),Cn(e),i&4&&(ea(3,e,e.return),Ul(3,e),ea(5,e,e.return));break;case 1:wn(t,e),Cn(e),i&512&&(qe||n===null||Oi(n,n.return)),i&64&&ns&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=yi;if(wn(t,e),Cn(e),i&512&&(qe||n===null||Oi(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[wl]||a[ln]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),hn(a,i,n),a[ln]=e,nn(a),i=a;break t;case"link":var r=Av("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),hn(a,i,n),s.head.appendChild(a);break;case"meta":if(r=Av("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),hn(a,i,n),s.head.appendChild(a);break;default:throw Error(et(468,i))}a[ln]=e,nn(a),i=a}e.stateNode=i}else wv(s,e.type,e.stateNode);else e.stateNode=Tv(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?wv(s,e.type,e.stateNode):Tv(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Kd(e,e.memoizedProps,n.memoizedProps)}break;case 27:wn(t,e),Cn(e),i&512&&(qe||n===null||Oi(n,n.return)),n!==null&&i&4&&Kd(e,e.memoizedProps,n.memoizedProps);break;case 5:if(wn(t,e),Cn(e),i&512&&(qe||n===null||Oi(n,n.return)),e.flags&32){s=e.stateNode;try{Br(s,"")}catch(_){de(e,e.return,_)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Kd(e,s,n!==null?n.memoizedProps:s)),i&1024&&(jd=!0);break;case 6:if(wn(t,e),Cn(e),i&4){if(e.stateNode===null)throw Error(et(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(_){de(e,e.return,_)}}break;case 3:if(ru=null,s=yi,yi=Lu(t.containerInfo),wn(t,e),yi=s,Cn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Wr(t.containerInfo)}catch(_){de(e,e.return,_)}jd&&(jd=!1,Ny(e));break;case 4:i=yi,yi=Lu(e.stateNode.containerInfo),wn(t,e),Cn(e),yi=i;break;case 12:wn(t,e),Cn(e);break;case 31:wn(t,e),Cn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Gc(e,i)));break;case 13:wn(t,e),Cn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ju=Hn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Gc(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=ns,f=qe;if(ns=c||s,qe=f||l,wn(t,e),qe=f,ns=c,Cn(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||ns||qe||Ca(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(_){de(l,l.return,_)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(_){de(l,l.return,_)}}}else if(t.tag===18){if(n===null){l=t;try{var d=l.stateNode;s?yv(d,!0):yv(l.stateNode,!1)}catch(_){de(l,l.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Gc(e,n))));break;case 19:wn(t,e),Cn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Gc(e,i)));break;case 30:break;case 21:break;default:wn(t,e),Cn(e)}}function Cn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Ey(i)){n=i;break}i=i.return}if(n==null)throw Error(et(160));switch(n.tag){case 27:var s=n.stateNode,a=Qd(e);Tu(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(Br(r,""),n.flags&=-33);var o=Qd(e);Tu(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Qd(e);Fp(e,c,l);break;default:throw Error(et(161))}}catch(f){de(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ny(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ny(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $i(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ay(e,t.alternate,t),t=t.sibling}function Ca(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ea(4,t,t.return),Ca(t);break;case 1:Oi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&My(t,t.return,n),Ca(t);break;case 27:ll(t.stateNode);case 26:case 5:Oi(t,t.return),Ca(t);break;case 22:t.memoizedState===null&&Ca(t);break;case 30:Ca(t);break;default:Ca(t)}e=e.sibling}}function ts(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:ts(s,a,n),Ul(4,a);break;case 1:if(ts(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){de(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)Rx(l[s],o)}catch(c){de(i,i.return,c)}}n&&r&64&&Sy(a),sl(a,a.return);break;case 27:Ty(a);case 26:case 5:ts(s,a,n),n&&i===null&&r&4&&by(a),sl(a,a.return);break;case 12:ts(s,a,n);break;case 31:ts(s,a,n),n&&r&4&&Ry(s,a);break;case 13:ts(s,a,n),n&&r&4&&Dy(s,a);break;case 22:a.memoizedState===null&&ts(s,a,n),sl(a,a.return);break;case 30:break;default:ts(s,a,n)}t=t.sibling}}function zm(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Rl(n))}function Fm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Rl(e))}function xi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ly(e,t,n,i),t=t.sibling}function Ly(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:xi(e,t,n,i),s&2048&&Ul(9,t);break;case 1:xi(e,t,n,i);break;case 3:xi(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Rl(e)));break;case 12:if(s&2048){xi(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){de(t,t.return,l)}}else xi(e,t,n,i);break;case 31:xi(e,t,n,i);break;case 13:xi(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?xi(e,t,n,i):al(e,t):a._visibility&2?xi(e,t,n,i):(a._visibility|=2,pr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&zm(r,t);break;case 24:xi(e,t,n,i),s&2048&&Fm(t.alternate,t);break;default:xi(e,t,n,i)}}function pr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:pr(a,r,o,l,s),Ul(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?pr(a,r,o,l,s):al(a,r):(f._visibility|=2,pr(a,r,o,l,s)),s&&c&2048&&zm(r.alternate,r);break;case 24:pr(a,r,o,l,s),s&&c&2048&&Fm(r.alternate,r);break;default:pr(a,r,o,l,s)}t=t.sibling}}function al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:al(n,i),s&2048&&zm(i.alternate,i);break;case 24:al(n,i),s&2048&&Fm(i.alternate,i);break;default:al(n,i)}t=t.sibling}}var Jo=8192;function dr(e,t,n){if(e.subtreeFlags&Jo)for(e=e.child;e!==null;)Iy(e,t,n),e=e.sibling}function Iy(e,t,n){switch(e.tag){case 26:dr(e,t,n),e.flags&Jo&&e.memoizedState!==null&&lT(n,yi,e.memoizedState,e.memoizedProps);break;case 5:dr(e,t,n);break;case 3:case 4:var i=yi;yi=Lu(e.stateNode.containerInfo),dr(e,t,n),yi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Jo,Jo=16777216,dr(e,t,n),Jo=i):dr(e,t,n));break;default:dr(e,t,n)}}function Oy(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Go(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];en=i,By(i,e)}Oy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Py(e),e=e.sibling}function Py(e){switch(e.tag){case 0:case 11:case 15:Go(e),e.flags&2048&&ea(9,e,e.return);break;case 3:Go(e);break;case 12:Go(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,su(e)):Go(e);break;default:Go(e)}}function su(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];en=i,By(i,e)}Oy(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ea(8,t,t.return),su(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,su(t));break;default:su(t)}e=e.sibling}}function By(e,t){for(;en!==null;){var n=en;switch(n.tag){case 0:case 11:case 15:ea(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Rl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,en=i;else t:for(n=e;en!==null;){i=en;var s=i.sibling,a=i.return;if(wy(i),i===n){en=null;break t}if(s!==null){s.return=a,en=s;break t}en=a}}}var TE={getCacheForType:function(e){var t=un(Ye),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return un(Ye).controller.signal}},AE=typeof WeakMap=="function"?WeakMap:Map,le=0,Se=null,Qt=null,te=0,fe=0,Bn=null,Hs=!1,Kr=!1,Vm=!1,ds=0,Be=0,na=0,La=0,Hm=0,Vn=0,Hr=0,rl=null,Dn=null,Vp=!1,Ju=0,zy=0,Au=1/0,wu=null,Zs=null,Ke=0,Js=null,Gr=null,ls=0,Hp=0,Gp=null,Fy=null,ol=0,kp=null;function Xn(){return(le&2)!==0&&te!==0?te&-te:It.T!==null?km():Zv()}function Vy(){if(Vn===0)if((te&536870912)===0||ie){var e=Nc;Nc<<=1,(Nc&3932160)===0&&(Nc=262144),Vn=e}else Vn=536870912;return e=qn.current,e!==null&&(e.flags|=32),Vn}function Un(e,t,n){(e===Se&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(kr(e,0),Gs(e,te,Vn,!1)),Al(e,n),((le&2)===0||e!==Se)&&(e===Se&&((le&2)===0&&(La|=n),Be===4&&Gs(e,te,Vn,!1)),zi(e))}function Hy(e,t,n){if((le&6)!==0)throw Error(et(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Tl(e,t),s=i?RE(e,t):$d(e,t,!0),a=i;do{if(s===0){Kr&&!i&&Gs(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!wE(n)){s=$d(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=rl;var l=o.current.memoizedState.isDehydrated;if(l&&(kr(o,r).flags|=256),r=$d(o,r,!1),r!==2){if(Vm&&!l){o.errorRecoveryDisabledLanes|=a,La|=a,s=4;break t}a=Dn,Dn=s,a!==null&&(Dn===null?Dn=a:Dn.push.apply(Dn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){kr(e,0),Gs(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(et(345));case 4:if((t&4194048)!==t)break;case 6:Gs(i,t,Vn,!Hs);break t;case 2:Dn=null;break;case 3:case 5:break;default:throw Error(et(329))}if((t&62914560)===t&&(s=Ju+300-Hn(),10<s)){if(Gs(i,t,Vn,!Hs),zu(i,0,!0)!==0)break t;ls=t,i.timeoutHandle=oS(av.bind(null,i,n,Dn,wu,Vp,t,Vn,La,Hr,Hs,a,"Throttled",-0,0),s);break t}av(i,n,Dn,wu,Vp,t,Vn,La,Hr,Hs,a,null,-0,0)}}break}while(!0);zi(e)}function av(e,t,n,i,s,a,r,o,l,c,f,p,u,d){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ss},Iy(t,a,p);var _=(a&62914560)===a?Ju-Hn():(a&4194048)===a?zy-Hn():0;if(_=cT(p,_),_!==null){ls=a,e.cancelPendingCommit=_(ov.bind(null,e,t,a,n,i,s,r,o,l,f,p,null,u,d)),Gs(e,a,r,!c);return}}ov(e,t,a,n,i,s,r,o,l)}function wE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Wn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gs(e,t,n,i){t&=~Hm,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-kn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&Wv(e,n,t)}function Ku(){return(le&6)===0?(Nl(0,!1),!1):!0}function Gm(){if(Qt!==null){if(fe===0)var e=Qt.return;else e=Qt,as=ka=null,wm(e),Nr=null,ml=0,e=Qt;for(;e!==null;)yy(e.alternate,e),e=e.return;Qt=null}}function kr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,WE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ls=0,Gm(),Se=e,Qt=n=rs(e.current,null),te=t,fe=0,Bn=null,Hs=!1,Kr=Tl(e,t),Vm=!1,Hr=Vn=Hm=La=na=Be=0,Dn=rl=null,Vp=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-kn(i),a=1<<s;t|=e[s],i&=~a}return ds=t,Gu(),n}function Gy(e,t){Ht=null,It.H=_l,t===Jr||t===Xu?(t=B_(),fe=3):t===ym?(t=B_(),fe=4):fe=t===Pm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Bn=t,Qt===null&&(Be=1,bu(e,ci(t,e.current)))}function ky(){var e=qn.current;return e===null?!0:(te&4194048)===te?hi===null:(te&62914560)===te||(te&536870912)!==0?e===hi:!1}function Xy(){var e=It.H;return It.H=_l,e===null?_l:e}function Wy(){var e=It.A;return It.A=TE,e}function Cu(){Be=4,Hs||(te&4194048)!==te&&qn.current!==null||(Kr=!0),(na&134217727)===0&&(La&134217727)===0||Se===null||Gs(Se,te,Vn,!1)}function $d(e,t,n){var i=le;le|=2;var s=Xy(),a=Wy();(Se!==e||te!==t)&&(wu=null,kr(e,t)),t=!1;var r=Be;t:do try{if(fe!==0&&Qt!==null){var o=Qt,l=Bn;switch(fe){case 8:Gm(),r=6;break t;case 3:case 2:case 9:case 6:qn.current===null&&(t=!0);var c=fe;if(fe=0,Bn=null,wr(e,o,l,c),n&&Kr){r=0;break t}break;default:c=fe,fe=0,Bn=null,wr(e,o,l,c)}}CE(),r=Be;break}catch(f){Gy(e,f)}while(!0);return t&&e.shellSuspendCounter++,as=ka=null,le=i,It.H=s,It.A=a,Qt===null&&(Se=null,te=0,Gu()),r}function CE(){for(;Qt!==null;)qy(Qt)}function RE(e,t){var n=le;le|=2;var i=Xy(),s=Wy();Se!==e||te!==t?(wu=null,Au=Hn()+500,kr(e,t)):Kr=Tl(e,t);t:do try{if(fe!==0&&Qt!==null){t=Qt;var a=Bn;e:switch(fe){case 1:fe=0,Bn=null,wr(e,t,a,1);break;case 2:case 9:if(P_(a)){fe=0,Bn=null,rv(t);break}t=function(){fe!==2&&fe!==9||Se!==e||(fe=7),zi(e)},a.then(t,t);break t;case 3:fe=7;break t;case 4:fe=5;break t;case 7:P_(a)?(fe=0,Bn=null,rv(t)):(fe=0,Bn=null,wr(e,t,a,7));break;case 5:var r=null;switch(Qt.tag){case 26:r=Qt.memoizedState;case 5:case 27:var o=Qt;if(r?fS(r):o.stateNode.complete){fe=0,Bn=null;var l=o.sibling;if(l!==null)Qt=l;else{var c=o.return;c!==null?(Qt=c,Qu(c)):Qt=null}break e}}fe=0,Bn=null,wr(e,t,a,5);break;case 6:fe=0,Bn=null,wr(e,t,a,6);break;case 8:Gm(),Be=6;break t;default:throw Error(et(462))}}DE();break}catch(f){Gy(e,f)}while(!0);return as=ka=null,It.H=i,It.A=s,le=n,Qt!==null?0:(Se=null,te=0,Gu(),Be)}function DE(){for(;Qt!==null&&!$b();)qy(Qt)}function qy(e){var t=xy(e.alternate,e,ds);e.memoizedProps=e.pendingProps,t===null?Qu(e):Qt=t}function rv(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=$_(n,t,t.pendingProps,t.type,void 0,te);break;case 11:t=$_(n,t,t.pendingProps,t.type.render,t.ref,te);break;case 5:wm(t);default:yy(n,t),t=Qt=yx(t,ds),t=xy(n,t,ds)}e.memoizedProps=e.pendingProps,t===null?Qu(e):Qt=t}function wr(e,t,n,i){as=ka=null,wm(t),Nr=null,ml=0;var s=t.return;try{if(vE(e,s,t,n,te)){Be=1,bu(e,ci(n,e.current)),Qt=null;return}}catch(a){if(s!==null)throw Qt=s,a;Be=1,bu(e,ci(n,e.current)),Qt=null;return}t.flags&32768?(ie||i===1?e=!0:Kr||(te&536870912)!==0?e=!1:(Hs=e=!0,(i===2||i===9||i===3||i===6)&&(i=qn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Yy(t,e)):Qu(t)}function Qu(e){var t=e;do{if((t.flags&32768)!==0){Yy(t,Hs);return}e=t.return;var n=SE(t.alternate,t,ds);if(n!==null){Qt=n;return}if(t=t.sibling,t!==null){Qt=t;return}Qt=t=e}while(t!==null);Be===0&&(Be=5)}function Yy(e,t){do{var n=ME(e.alternate,e);if(n!==null){n.flags&=32767,Qt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Qt=e;return}Qt=e=n}while(e!==null);Be=6,Qt=null}function ov(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do ju();while(Ke!==0);if((le&6)!==0)throw Error(et(327));if(t!==null){if(t===e.current)throw Error(et(177));if(a=t.lanes|t.childLanes,a|=dm,c1(e,n,a,r,o,l),e===Se&&(Qt=Se=null,te=0),Gr=t,Js=e,ls=n,Hp=a,Gp=s,Fy=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,IE(fu,function(){return jy(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=It.T,It.T=null,s=ce.p,ce.p=2,r=le,le|=4;try{bE(e,t,n)}finally{le=r,ce.p=s,It.T=i}}Ke=1,Zy(),Jy(),Ky()}}function Zy(){if(Ke===1){Ke=0;var e=Js,t=Gr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=It.T,It.T=null;var i=ce.p;ce.p=2;var s=le;le|=4;try{Uy(t,e);var a=Yp,r=fx(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&hx(o.ownerDocument.documentElement,o)){if(l!==null&&fm(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),_=o.textContent.length,M=Math.min(l.start,_),g=l.end===void 0?M:Math.min(l.end,_);!d.extend&&M>g&&(r=g,g=M,M=r);var h=R_(o,M),m=R_(o,g);if(h&&m&&(d.rangeCount!==1||d.anchorNode!==h.node||d.anchorOffset!==h.offset||d.focusNode!==m.node||d.focusOffset!==m.offset)){var S=p.createRange();S.setStart(h.node,h.offset),d.removeAllRanges(),M>g?(d.addRange(S),d.extend(m.node,m.offset)):(S.setEnd(m.node,m.offset),d.addRange(S))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var v=p[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Pu=!!qp,Yp=qp=null}finally{le=s,ce.p=i,It.T=n}}e.current=t,Ke=2}}function Jy(){if(Ke===2){Ke=0;var e=Js,t=Gr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=It.T,It.T=null;var i=ce.p;ce.p=2;var s=le;le|=4;try{Ay(e,t.alternate,t)}finally{le=s,ce.p=i,It.T=n}}Ke=3}}function Ky(){if(Ke===4||Ke===3){Ke=0,t1();var e=Js,t=Gr,n=ls,i=Fy;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ke=5:(Ke=0,Gr=Js=null,Qy(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Zs=null),am(n),t=t.stateNode,Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(El,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=It.T,s=ce.p,ce.p=2,It.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{It.T=t,ce.p=s}}(ls&3)!==0&&ju(),zi(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===kp?ol++:(ol=0,kp=e):ol=0,Nl(0,!1)}}function Qy(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Rl(t)))}function ju(){return Zy(),Jy(),Ky(),jy()}function jy(){if(Ke!==5)return!1;var e=Js,t=Hp;Hp=0;var n=am(ls),i=It.T,s=ce.p;try{ce.p=32>n?32:n,It.T=null,n=Gp,Gp=null;var a=Js,r=ls;if(Ke=0,Gr=Js=null,ls=0,(le&6)!==0)throw Error(et(331));var o=le;if(le|=4,Py(a.current),Ly(a,a.current,r,n),le=o,Nl(0,!1),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(El,a)}catch{}return!0}finally{ce.p=s,It.T=i,Qy(e,t)}}function lv(e,t,n){t=ci(n,t),t=Pp(e.stateNode,t,2),e=Ys(e,t,2),e!==null&&(Al(e,2),zi(e))}function de(e,t,n){if(e.tag===3)lv(e,e,n);else for(;t!==null;){if(t.tag===3){lv(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zs===null||!Zs.has(i))){e=ci(n,e),n=dy(2),i=Ys(t,n,2),i!==null&&(py(n,i,t,e),Al(i,2),zi(i));break}}t=t.return}}function tp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new AE;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Vm=!0,s.add(n),e=UE.bind(null,e,t,n),t.then(e,e))}function UE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Se===e&&(te&n)===n&&(Be===4||Be===3&&(te&62914560)===te&&300>Hn()-Ju?(le&2)===0&&kr(e,0):Hm|=n,Hr===te&&(Hr=0)),zi(e)}function $y(e,t){t===0&&(t=Xv()),e=Ga(e,t),e!==null&&(Al(e,t),zi(e))}function NE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$y(e,n)}function LE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(et(314))}i!==null&&i.delete(t),$y(e,n)}function IE(e,t){return im(e,t)}var Ru=null,mr=null,Xp=!1,Du=!1,ep=!1,ks=0;function zi(e){e!==mr&&e.next===null&&(mr===null?Ru=mr=e:mr=mr.next=e),Du=!0,Xp||(Xp=!0,PE())}function Nl(e,t){if(!ep&&Du){ep=!0;do for(var n=!1,i=Ru;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-kn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,cv(i,a))}else a=te,a=zu(i,i===Se?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Tl(i,a)||(n=!0,cv(i,a));i=i.next}while(n);ep=!1}}function OE(){tS()}function tS(){Du=Xp=!1;var e=0;ks!==0&&XE()&&(e=ks);for(var t=Hn(),n=null,i=Ru;i!==null;){var s=i.next,a=eS(i,t);a===0?(i.next=null,n===null?Ru=s:n.next=s,s===null&&(mr=n)):(n=i,(e!==0||(a&3)!==0)&&(Du=!0)),i=s}Ke!==0&&Ke!==5||Nl(e,!1),ks!==0&&(ks=0)}function eS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-kn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=l1(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=Se,n=te,n=zu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Dd(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Tl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Dd(i),am(n)){case 2:case 8:n=Gv;break;case 32:n=fu;break;case 268435456:n=kv;break;default:n=fu}return i=nS.bind(null,e),n=im(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Dd(i),e.callbackPriority=2,e.callbackNode=null,2}function nS(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ju()&&e.callbackNode!==n)return null;var i=te;return i=zu(e,e===Se?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Hy(e,i,t),eS(e,Hn()),e.callbackNode!=null&&e.callbackNode===n?nS.bind(null,e):null)}function cv(e,t){if(ju())return null;Hy(e,t,!0)}function PE(){qE(function(){(le&6)!==0?im(Hv,OE):tS()})}function km(){if(ks===0){var e=zr;e===0&&(e=Uc,Uc<<=1,(Uc&261888)===0&&(Uc=256)),ks=e}return ks}function uv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jc(""+e)}function hv(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function BE(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=uv((s[Nn]||null).action),r=i.submitter;r&&(t=(t=r[Nn]||null)?uv(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Fu("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ks!==0){var l=r?hv(s,r):new FormData(s);Ip(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?hv(s,r):new FormData(s),Ip(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(kc=0;kc<Mp.length;kc++)Xc=Mp[kc],fv=Xc.toLowerCase(),dv=Xc[0].toUpperCase()+Xc.slice(1),Si(fv,"on"+dv);var Xc,fv,dv,kc;Si(px,"onAnimationEnd");Si(mx,"onAnimationIteration");Si(gx,"onAnimationStart");Si("dblclick","onDoubleClick");Si("focusin","onFocus");Si("focusout","onBlur");Si(eE,"onTransitionRun");Si(nE,"onTransitionStart");Si(iE,"onTransitionCancel");Si(_x,"onTransitionEnd");Pr("onMouseEnter",["mouseout","mouseover"]);Pr("onMouseLeave",["mouseout","mouseover"]);Pr("onPointerEnter",["pointerout","pointerover"]);Pr("onPointerLeave",["pointerout","pointerover"]);Fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vl));function iS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){pu(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){pu(f)}s.currentTarget=null,a=l}}}}function Kt(e,t){var n=t[pp];n===void 0&&(n=t[pp]=new Set);var i=e+"__bubble";n.has(i)||(sS(t,e,2,!1),n.add(i))}function np(e,t,n){var i=0;t&&(i|=4),sS(n,e,i,t)}var Wc="_reactListening"+Math.random().toString(36).slice(2);function Xm(e){if(!e[Wc]){e[Wc]=!0,Jv.forEach(function(n){n!=="selectionchange"&&(zE.has(n)||np(n,!1,e),np(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wc]||(t[Wc]=!0,np("selectionchange",!1,t))}}function sS(e,t,n,i){switch(_S(t)){case 2:var s=fT;break;case 8:s=dT;break;default:s=Zm}n=s.bind(null,t,n,e),s=void 0,!xp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function ip(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=vr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}ix(function(){var c=a,f=lm(n),p=[];t:{var u=vx.get(e);if(u!==void 0){var d=Fu,_=e;switch(e){case"keypress":if(Qc(n)===0)break t;case"keydown":case"keyup":d=L1;break;case"focusin":_="focus",d=Od;break;case"focusout":_="blur",d=Od;break;case"beforeblur":case"afterblur":d=Od;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=y_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=S1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=P1;break;case px:case mx:case gx:d=E1;break;case _x:d=z1;break;case"scroll":case"scrollend":d=x1;break;case"wheel":d=V1;break;case"copy":case"cut":case"paste":d=A1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=M_;break;case"toggle":case"beforetoggle":d=G1}var M=(t&4)!==0,g=!M&&(e==="scroll"||e==="scrollend"),h=M?u!==null?u+"Capture":null:u;M=[];for(var m=c,S;m!==null;){var v=m;if(S=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||S===null||h===null||(v=ul(m,h),v!=null&&M.push(xl(m,v,S))),g)break;m=m.return}0<M.length&&(u=new d(u,_,null,n,f),p.push({event:u,listeners:M}))}}if((t&7)===0){t:{if(u=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",u&&n!==vp&&(_=n.relatedTarget||n.fromElement)&&(vr(_)||_[qr]))break t;if((d||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,d?(_=n.relatedTarget||n.toElement,d=c,_=_?vr(_):null,_!==null&&(g=bl(_),M=_.tag,_!==g||M!==5&&M!==27&&M!==6)&&(_=null)):(d=null,_=c),d!==_)){if(M=y_,v="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(M=M_,v="onPointerLeave",h="onPointerEnter",m="pointer"),g=d==null?u:Yo(d),S=_==null?u:Yo(_),u=new M(v,m+"leave",d,n,f),u.target=g,u.relatedTarget=S,v=null,vr(f)===c&&(M=new M(h,m+"enter",_,n,f),M.target=S,M.relatedTarget=g,v=M),g=v,d&&_)e:{for(M=FE,h=d,m=_,S=0,v=h;v;v=M(v))S++;v=0;for(var E=m;E;E=M(E))v++;for(;0<S-v;)h=M(h),S--;for(;0<v-S;)m=M(m),v--;for(;S--;){if(h===m||m!==null&&h===m.alternate){M=h;break e}h=M(h),m=M(m)}M=null}else M=null;d!==null&&pv(p,u,d,M,!1),_!==null&&g!==null&&pv(p,g,_,M,!0)}}t:{if(u=c?Yo(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var A=A_;else if(T_(u))if(cx)A=j1;else{A=K1;var w=J1}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&om(c.elementType)&&(A=A_):A=Q1;if(A&&(A=A(e,c))){lx(p,A,n,f);break t}w&&w(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&_p(u,"number",u.value)}switch(w=c?Yo(c):window,e){case"focusin":(T_(w)||w.contentEditable==="true")&&(Sr=w,yp=c,jo=null);break;case"focusout":jo=yp=Sr=null;break;case"mousedown":Sp=!0;break;case"contextmenu":case"mouseup":case"dragend":Sp=!1,D_(p,n,f);break;case"selectionchange":if(tE)break;case"keydown":case"keyup":D_(p,n,f)}var x;if(hm)t:{switch(e){case"compositionstart":var T="onCompositionStart";break t;case"compositionend":T="onCompositionEnd";break t;case"compositionupdate":T="onCompositionUpdate";break t}T=void 0}else yr?rx(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(ax&&n.locale!=="ko"&&(yr||T!=="onCompositionStart"?T==="onCompositionEnd"&&yr&&(x=sx()):(Vs=f,cm="value"in Vs?Vs.value:Vs.textContent,yr=!0)),w=Uu(c,T),0<w.length&&(T=new S_(T,e,null,n,f),p.push({event:T,listeners:w}),x?T.data=x:(x=ox(n),x!==null&&(T.data=x)))),(x=X1?W1(e,n):q1(e,n))&&(T=Uu(c,"onBeforeInput"),0<T.length&&(w=new S_("onBeforeInput","beforeinput",null,n,f),p.push({event:w,listeners:T}),w.data=x)),BE(p,e,c,n,f)}iS(p,t)})}function xl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Uu(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=ul(e,n),s!=null&&i.unshift(xl(e,s,a)),s=ul(e,t),s!=null&&i.push(xl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function FE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pv(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=ul(n,a),c!=null&&r.unshift(xl(n,c,l))):s||(c=ul(n,a),c!=null&&r.push(xl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var VE=/\r\n?/g,HE=/\u0000|\uFFFD/g;function mv(e){return(typeof e=="string"?e:""+e).replace(VE,`
`).replace(HE,"")}function aS(e,t){return t=mv(t),mv(e)===t}function me(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Br(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Br(e,""+i);break;case"className":Ic(e,"class",i);break;case"tabIndex":Ic(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ic(e,n,i);break;case"style":nx(e,i,a);break;case"data":if(t!=="object"){Ic(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Jc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&me(e,t,"name",s.name,s,null),me(e,t,"formEncType",s.formEncType,s,null),me(e,t,"formMethod",s.formMethod,s,null),me(e,t,"formTarget",s.formTarget,s,null)):(me(e,t,"encType",s.encType,s,null),me(e,t,"method",s.method,s,null),me(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Jc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ss);break;case"onScroll":i!=null&&Kt("scroll",e);break;case"onScrollEnd":i!=null&&Kt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(et(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(et(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Jc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Kt("beforetoggle",e),Kt("toggle",e),Zc(e,"popover",i);break;case"xlinkActuate":Ki(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ki(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ki(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ki(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ki(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ki(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ki(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ki(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ki(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Zc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=_1.get(n)||n,Zc(e,n,i))}}function Wp(e,t,n,i,s,a){switch(n){case"style":nx(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(et(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(et(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Br(e,i):(typeof i=="number"||typeof i=="bigint")&&Br(e,""+i);break;case"onScroll":i!=null&&Kt("scroll",e);break;case"onScrollEnd":i!=null&&Kt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ss);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Kv.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[Nn]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Zc(e,n,i)}}}function hn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Kt("error",e),Kt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(et(137,t));default:me(e,t,a,r,n,null)}}s&&me(e,t,"srcSet",n.srcSet,n,null),i&&me(e,t,"src",n.src,n,null);return;case"input":Kt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(et(137,t));break;default:me(e,t,i,f,n,null)}}$v(e,a,o,l,c,r,s,!1);return;case"select":Kt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:me(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Rr(e,!!i,t,!1):n!=null&&Rr(e,!!i,n,!0);return;case"textarea":Kt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(et(91));break;default:me(e,t,r,o,n,null)}ex(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":me(e,t,l,i,n,null));return;case"dialog":Kt("beforetoggle",e),Kt("toggle",e),Kt("cancel",e),Kt("close",e);break;case"iframe":case"object":Kt("load",e);break;case"video":case"audio":for(i=0;i<vl.length;i++)Kt(vl[i],e);break;case"image":Kt("error",e),Kt("load",e);break;case"details":Kt("toggle",e);break;case"embed":case"source":case"link":Kt("error",e),Kt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(et(137,t));default:me(e,t,c,i,n,null)}return;default:if(om(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&Wp(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&me(e,t,o,i,n,null))}function GE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||me(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":a=d;break;case"name":s=d;break;case"checked":c=d;break;case"defaultChecked":f=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(et(137,t));break;default:d!==p&&me(e,t,u,d,i,p)}}gp(e,r,o,l,c,f,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||me(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":u=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&me(e,t,s,a,i,l)}t=o,n=r,i=d,u!=null?Rr(e,!!n,u,!1):!!i!=!!n&&(t!=null?Rr(e,!!n,t,!0):Rr(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:me(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":u=s;break;case"defaultValue":d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(et(91));break;default:s!==a&&me(e,t,r,s,i,a)}tx(e,u,d);return;case"option":for(var _ in n)u=n[_],n.hasOwnProperty(_)&&u!=null&&!i.hasOwnProperty(_)&&(_==="selected"?e.selected=!1:me(e,t,_,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?e.selected=u&&typeof u!="function"&&typeof u!="symbol":me(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)u=n[M],n.hasOwnProperty(M)&&u!=null&&!i.hasOwnProperty(M)&&me(e,t,M,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(et(137,t));break;default:me(e,t,c,u,i,d)}return;default:if(om(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&Wp(e,t,g,void 0,i,u);for(f in i)u=i[f],d=n[f],!i.hasOwnProperty(f)||u===d||u===void 0&&d===void 0||Wp(e,t,f,u,i,d);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&me(e,t,h,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||me(e,t,p,u,i,d)}function gv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&gv(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,p=l.initiatorType;f&&gv(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var qp=null,Yp=null;function Nu(e){return e.nodeType===9?e:e.ownerDocument}function _v(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Zp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sp=null;function XE(){var e=window.event;return e&&e.type==="popstate"?e===sp?!1:(sp=e,!0):(sp=null,!1)}var oS=typeof setTimeout=="function"?setTimeout:void 0,WE=typeof clearTimeout=="function"?clearTimeout:void 0,vv=typeof Promise=="function"?Promise:void 0,qE=typeof queueMicrotask=="function"?queueMicrotask:typeof vv<"u"?function(e){return vv.resolve(null).then(e).catch(YE)}:oS;function YE(e){setTimeout(function(){throw e})}function sa(e){return e==="head"}function xv(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Wr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")ll(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ll(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[wl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&ll(e.ownerDocument.body);n=s}while(n);Wr(t)}function yv(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Jp(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Jp(n),rm(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function ZE(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function JE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fi(e.nextSibling),e===null))return null;return e}function lS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=fi(e.nextSibling),e===null))return null;return e}function Kp(e){return e.data==="$?"||e.data==="$~"}function Qp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function KE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function fi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var jp=null;function Sv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return fi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Mv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function cS(e,t,n){switch(t=Nu(n),e){case"html":if(e=t.documentElement,!e)throw Error(et(452));return e;case"head":if(e=t.head,!e)throw Error(et(453));return e;case"body":if(e=t.body,!e)throw Error(et(454));return e;default:throw Error(et(451))}}function ll(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);rm(e)}var di=new Map,bv=new Set;function Lu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ps=ce.d;ce.d={f:QE,r:jE,D:$E,C:tT,L:eT,m:nT,X:sT,S:iT,M:aT};function QE(){var e=ps.f(),t=Ku();return e||t}function jE(e){var t=Yr(e);t!==null&&t.tag===5&&t.type==="form"?ny(t):ps.r(e)}var Qr=typeof document>"u"?null:document;function uS(e,t,n){var i=Qr;if(i&&typeof t=="string"&&t){var s=li(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),bv.has(s)||(bv.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),hn(t,"link",e),nn(t),i.head.appendChild(t)))}}function $E(e){ps.D(e),uS("dns-prefetch",e,null)}function tT(e,t){ps.C(e,t),uS("preconnect",e,t)}function eT(e,t,n){ps.L(e,t,n);var i=Qr;if(i&&e&&t){var s='link[rel="preload"][as="'+li(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+li(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+li(n.imageSizes)+'"]')):s+='[href="'+li(e)+'"]';var a=s;switch(t){case"style":a=Xr(e);break;case"script":a=jr(e)}di.has(a)||(e=Ce({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),di.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Ll(a))||t==="script"&&i.querySelector(Il(a))||(t=i.createElement("link"),hn(t,"link",e),nn(t),i.head.appendChild(t)))}}function nT(e,t){ps.m(e,t);var n=Qr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+li(i)+'"][href="'+li(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=jr(e)}if(!di.has(a)&&(e=Ce({rel:"modulepreload",href:e},t),di.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Il(a)))return}i=n.createElement("link"),hn(i,"link",e),nn(i),n.head.appendChild(i)}}}function iT(e,t,n){ps.S(e,t,n);var i=Qr;if(i&&e){var s=Cr(i).hoistableStyles,a=Xr(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Ll(a)))o.loading=5;else{e=Ce({rel:"stylesheet",href:e,"data-precedence":t},n),(n=di.get(a))&&Wm(e,n);var l=r=i.createElement("link");nn(l),hn(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,au(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function sT(e,t){ps.X(e,t);var n=Qr;if(n&&e){var i=Cr(n).hoistableScripts,s=jr(e),a=i.get(s);a||(a=n.querySelector(Il(s)),a||(e=Ce({src:e,async:!0},t),(t=di.get(s))&&qm(e,t),a=n.createElement("script"),nn(a),hn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function aT(e,t){ps.M(e,t);var n=Qr;if(n&&e){var i=Cr(n).hoistableScripts,s=jr(e),a=i.get(s);a||(a=n.querySelector(Il(s)),a||(e=Ce({src:e,async:!0,type:"module"},t),(t=di.get(s))&&qm(e,t),a=n.createElement("script"),nn(a),hn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Ev(e,t,n,i){var s=(s=Xs.current)?Lu(s):null;if(!s)throw Error(et(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Xr(n.href),n=Cr(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Xr(n.href);var a=Cr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Ll(e)))&&!a._p&&(r.instance=a,r.state.loading=5),di.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},di.set(e,n),a||rT(s,e,n,r.state))),t&&i===null)throw Error(et(528,""));return r}if(t&&i!==null)throw Error(et(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=jr(n),n=Cr(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(et(444,e))}}function Xr(e){return'href="'+li(e)+'"'}function Ll(e){return'link[rel="stylesheet"]['+e+"]"}function hS(e){return Ce({},e,{"data-precedence":e.precedence,precedence:null})}function rT(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),hn(t,"link",n),nn(t),e.head.appendChild(t))}function jr(e){return'[src="'+li(e)+'"]'}function Il(e){return"script[async]"+e}function Tv(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+li(n.href)+'"]');if(i)return t.instance=i,nn(i),i;var s=Ce({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),nn(i),hn(i,"style",s),au(i,n.precedence,e),t.instance=i;case"stylesheet":s=Xr(n.href);var a=e.querySelector(Ll(s));if(a)return t.state.loading|=4,t.instance=a,nn(a),a;i=hS(n),(s=di.get(s))&&Wm(i,s),a=(e.ownerDocument||e).createElement("link"),nn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),hn(a,"link",i),t.state.loading|=4,au(a,n.precedence,e),t.instance=a;case"script":return a=jr(n.src),(s=e.querySelector(Il(a)))?(t.instance=s,nn(s),s):(i=n,(s=di.get(a))&&(i=Ce({},n),qm(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),nn(s),hn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(et(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,au(i,n.precedence,e));return t.instance}function au(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Wm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function qm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ru=null;function Av(e,t,n){if(ru===null){var i=new Map,s=ru=new Map;s.set(n,i)}else s=ru,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[wl]||a[ln]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function wv(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function oT(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function fS(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function lT(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Xr(i.href),a=t.querySelector(Ll(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Iu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,nn(a);return}a=t.ownerDocument||t,i=hS(i),(s=di.get(s))&&Wm(i,s),a=a.createElement("link"),nn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),hn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Iu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var ap=0;function cT(e,t){return e.stylesheets&&e.count===0&&ou(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&ou(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&ap===0&&(ap=62500*kE());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ou(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>ap?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Iu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ou(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ou=null;function ou(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ou=new Map,t.forEach(uT,e),Ou=null,Iu.call(e))}function uT(e,t){if(!(t.state.loading&4)){var n=Ou.get(e);if(n)var i=n.get(null);else{n=new Map,Ou.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Iu.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var yl={$$typeof:is,Provider:null,Consumer:null,_currentValue:Ra,_currentValue2:Ra,_threadCount:0};function hT(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ud(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ud(0),this.hiddenUpdates=Ud(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function dS(e,t,n,i,s,a,r,o,l,c,f,p){return e=new hT(e,t,n,r,l,c,f,p,o),t=1,a===!0&&(t|=24),a=Fn(3,null,null,t),e.current=a,a.stateNode=e,t=vm(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Sm(a),e}function pS(e){return e?(e=Er,e):Er}function mS(e,t,n,i,s,a){s=pS(s),i.context===null?i.context=s:i.pendingContext=s,i=qs(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Ys(e,i,t),n!==null&&(Un(n,e,t),tl(n,e,t))}function Cv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ym(e,t){Cv(e,t),(e=e.alternate)&&Cv(e,t)}function gS(e){if(e.tag===13||e.tag===31){var t=Ga(e,67108864);t!==null&&Un(t,e,67108864),Ym(e,67108864)}}function Rv(e){if(e.tag===13||e.tag===31){var t=Xn();t=sm(t);var n=Ga(e,t);n!==null&&Un(n,e,t),Ym(e,t)}}var Pu=!0;function fT(e,t,n,i){var s=It.T;It.T=null;var a=ce.p;try{ce.p=2,Zm(e,t,n,i)}finally{ce.p=a,It.T=s}}function dT(e,t,n,i){var s=It.T;It.T=null;var a=ce.p;try{ce.p=8,Zm(e,t,n,i)}finally{ce.p=a,It.T=s}}function Zm(e,t,n,i){if(Pu){var s=$p(i);if(s===null)ip(e,t,i,Bu,n),Dv(e,i);else if(mT(s,e,t,n,i))i.stopPropagation();else if(Dv(e,i),t&4&&-1<pT.indexOf(e)){for(;s!==null;){var a=Yr(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Aa(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-kn(r);o.entanglements[1]|=l,r&=~l}zi(a),(le&6)===0&&(Au=Hn()+500,Nl(0,!1))}}break;case 31:case 13:o=Ga(a,2),o!==null&&Un(o,a,2),Ku(),Ym(a,2)}if(a=$p(i),a===null&&ip(e,t,i,Bu,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else ip(e,t,i,null,n)}}function $p(e){return e=lm(e),Jm(e)}var Bu=null;function Jm(e){if(Bu=null,e=vr(e),e!==null){var t=bl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Pv(t),e!==null)return e;e=null}else if(n===31){if(e=Bv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Bu=e,null}function _S(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(e1()){case Hv:return 2;case Gv:return 8;case fu:case n1:return 32;case kv:return 268435456;default:return 32}default:return 32}}var tm=!1,Ks=null,Qs=null,js=null,Sl=new Map,Ml=new Map,zs=[],pT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dv(e,t){switch(e){case"focusin":case"focusout":Ks=null;break;case"dragenter":case"dragleave":Qs=null;break;case"mouseover":case"mouseout":js=null;break;case"pointerover":case"pointerout":Sl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(t.pointerId)}}function ko(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Yr(t),t!==null&&gS(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function mT(e,t,n,i,s){switch(t){case"focusin":return Ks=ko(Ks,e,t,n,i,s),!0;case"dragenter":return Qs=ko(Qs,e,t,n,i,s),!0;case"mouseover":return js=ko(js,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Sl.set(a,ko(Sl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Ml.set(a,ko(Ml.get(a)||null,e,t,n,i,s)),!0}return!1}function vS(e){var t=vr(e.target);if(t!==null){var n=bl(t);if(n!==null){if(t=n.tag,t===13){if(t=Pv(n),t!==null){e.blockedOn=t,d_(e.priority,function(){Rv(n)});return}}else if(t===31){if(t=Bv(n),t!==null){e.blockedOn=t,d_(e.priority,function(){Rv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$p(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);vp=i,n.target.dispatchEvent(i),vp=null}else return t=Yr(n),t!==null&&gS(t),e.blockedOn=n,!1;t.shift()}return!0}function Uv(e,t,n){lu(e)&&n.delete(t)}function gT(){tm=!1,Ks!==null&&lu(Ks)&&(Ks=null),Qs!==null&&lu(Qs)&&(Qs=null),js!==null&&lu(js)&&(js=null),Sl.forEach(Uv),Ml.forEach(Uv)}function qc(e,t){e.blockedOn===t&&(e.blockedOn=null,tm||(tm=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,gT)))}var Yc=null;function Nv(e){Yc!==e&&(Yc=e,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,function(){Yc===e&&(Yc=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Jm(i||n)===null)continue;break}var a=Yr(n);a!==null&&(e.splice(t,3),t-=3,Ip(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Wr(e){function t(l){return qc(l,e)}Ks!==null&&qc(Ks,e),Qs!==null&&qc(Qs,e),js!==null&&qc(js,e),Sl.forEach(t),Ml.forEach(t);for(var n=0;n<zs.length;n++){var i=zs[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<zs.length&&(n=zs[0],n.blockedOn===null);)vS(n),n.blockedOn===null&&zs.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Nn]||null;if(typeof a=="function")r||Nv(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Nn]||null)o=r.formAction;else if(Jm(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Nv(n)}}}function xS(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Km(e){this._internalRoot=e}$u.prototype.render=Km.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(et(409));var n=t.current,i=Xn();mS(n,i,e,t,null,null)};$u.prototype.unmount=Km.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mS(e.current,2,null,e,null,null),Ku(),t[qr]=null}};function $u(e){this._internalRoot=e}$u.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zs.length&&t!==0&&t<zs[n].priority;n++);zs.splice(n,0,e),n===0&&vS(e)}};var Lv=Iv.version;if(Lv!=="19.2.6")throw Error(et(527,Lv,"19.2.6"));ce.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(et(188)):(e=Object.keys(e).join(","),Error(et(268,e)));return e=Zb(t),e=e!==null?zv(e):null,e=e===null?null:e.stateNode,e};var _T={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:It,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Xo.isDisabled&&Xo.supportsFiber))try{El=Xo.inject(_T),Gn=Xo}catch{}var Xo;th.createRoot=function(e,t){if(!Ov(e))throw Error(et(299));var n=!1,i="",s=uy,a=hy,r=fy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=dS(e,1,!1,null,null,n,i,null,s,a,r,xS),e[qr]=t.current,Xm(e),new Km(t)};th.hydrateRoot=function(e,t,n){if(!Ov(e))throw Error(et(299));var i=!1,s="",a=uy,r=hy,o=fy,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=dS(e,1,!0,t,n??null,i,s,l,a,r,o,xS),t.context=pS(null),n=t.current,i=Xn(),i=sm(i),s=qs(i),s.callback=null,Ys(n,s,i),n=i,t.current.lanes=n,Al(t,n),zi(t),e[qr]=t.current,Xm(e),new $u(t)};th.version="19.2.6"});var bS=Ui((f3,MS)=>{"use strict";function SS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(SS)}catch(e){console.error(e)}}SS(),MS.exports=yS()});var fb=Ui(od=>{"use strict";var e3=Symbol.for("react.transitional.element"),n3=Symbol.for("react.fragment");function hb(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:e3,type:e,key:i,ref:t!==void 0?t:null,props:n}}od.Fragment=n3;od.jsx=hb;od.jsxs=hb});var xc=Ui((VN,db)=>{"use strict";db.exports=fb()});var pb=rr(bS());var vi=rr(Cc());var QS=0,Ng=1,jS=2;var $a=1,$S=2,wo=3,Ms=0,An=1,gi=2,Xi=0,Ka=1,Lg=2,Ig=3,Og=4,tM=5;var ha=100,eM=101,nM=102,iM=103,sM=104,aM=200,rM=201,oM=202,lM=203,wh=204,Ch=205,cM=206,uM=207,hM=208,fM=209,dM=210,pM=211,mM=212,gM=213,_M=214,Rh=0,Dh=1,Uh=2,Qa=3,Nh=4,Lh=5,Ih=6,Oh=7,Pg=0,vM=1,xM=2,wi=0,Bg=1,zg=2,Fg=3,Vg=4,Hg=5,Gg=6,kg=7;var Xg=300,_a=301,tr=302,ff=303,df=304,lc=306,Ph=1e3,Vi=1001,Bh=1002,rn=1003,yM=1004;var cc=1005;var pn=1006,pf=1007;var va=1008;var On=1009,Wg=1010,qg=1011,Co=1012,mf=1013,Ci=1014,Ri=1015,Wi=1016,gf=1017,_f=1018,Ro=1020,Yg=35902,Zg=35899,Jg=1021,Kg=1022,_i=1023,Hi=1026,xa=1027,Qg=1028,vf=1029,ya=1030,xf=1031;var yf=1033,uc=33776,hc=33777,fc=33778,dc=33779,Sf=35840,Mf=35841,bf=35842,Ef=35843,Tf=36196,Af=37492,wf=37496,Cf=37488,Rf=37489,pc=37490,Df=37491,Uf=37808,Nf=37809,Lf=37810,If=37811,Of=37812,Pf=37813,Bf=37814,zf=37815,Ff=37816,Vf=37817,Hf=37818,Gf=37819,kf=37820,Xf=37821,Wf=36492,qf=36494,Yf=36495,Zf=36283,Jf=36284,mc=36285,Kf=36286;var Hl=2300,zh=2301,Ah=2302,Sg=2303,Mg=2400,bg=2401,Eg=2402;var SM=3200;var Qf=0,MM=1,ws="",fn="srgb",Gl="srgb-linear",kl="linear",he="srgb";var Za=7680;var Tg=519,bM=512,EM=513,TM=514,jf=515,AM=516,wM=517,$f=518,CM=519,Ag=35044;var jg="300 es",Ti=2e3,mo=2001;function vT(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function xT(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Xl(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function RM(){let e=Xl("canvas");return e.style.display="block",e}var ES={},go=null;function $g(...e){let t="THREE."+e.shift();go?go("log",t,...e):console.log(t,...e)}function DM(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ut(...e){e=DM(e);let t="THREE."+e.shift();if(go)go("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Lt(...e){e=DM(e);let t="THREE."+e.shift();if(go)go("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ja(...e){let t=e.join(" ");t in ES||(ES[t]=!0,Ut(...e))}function UM(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var NM={[Rh]:Dh,[Uh]:Ih,[Nh]:Oh,[Qa]:Lh,[Dh]:Rh,[Ih]:Uh,[Oh]:Nh,[Lh]:Qa},Gi=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],TS=1234567,fo=Math.PI/180,_o=180/Math.PI;function Do(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[e&255]+vn[e>>8&255]+vn[e>>16&255]+vn[e>>24&255]+"-"+vn[t&255]+vn[t>>8&255]+"-"+vn[t>>16&15|64]+vn[t>>24&255]+"-"+vn[n&63|128]+vn[n>>8&255]+"-"+vn[n>>16&255]+vn[n>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function ne(e,t,n){return Math.max(t,Math.min(n,e))}function t0(e,t){return(e%t+t)%t}function yT(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function ST(e,t,n){return e!==t?(n-e)/(t-e):0}function Vl(e,t,n){return(1-n)*e+n*t}function MT(e,t,n,i){return Vl(e,t,1-Math.exp(-n*i))}function bT(e,t=1){return t-Math.abs(t0(e,t*2)-t)}function ET(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function TT(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function AT(e,t){return e+Math.floor(Math.random()*(t-e+1))}function wT(e,t){return e+Math.random()*(t-e)}function CT(e){return e*(.5-Math.random())}function RT(e){e!==void 0&&(TS=e);let t=TS+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function DT(e){return e*fo}function UT(e){return e*_o}function NT(e){return(e&e-1)===0&&e!==0}function LT(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function IT(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function OT(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),f=r((t+i)/2),p=a((t-i)/2),u=r((t-i)/2),d=a((i-t)/2),_=r((i-t)/2);switch(s){case"XYX":e.set(o*f,l*p,l*u,o*c);break;case"YZY":e.set(l*u,o*f,l*p,o*c);break;case"ZXZ":e.set(l*p,l*u,o*f,o*c);break;case"XZX":e.set(o*f,l*_,l*d,o*c);break;case"YXY":e.set(l*d,o*f,l*_,o*c);break;case"ZYZ":e.set(l*_,l*d,o*f,o*c);break;default:Ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ho(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function En(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var qi={DEG2RAD:fo,RAD2DEG:_o,generateUUID:Do,clamp:ne,euclideanModulo:t0,mapLinear:yT,inverseLerp:ST,lerp:Vl,damp:MT,pingpong:bT,smoothstep:ET,smootherstep:TT,randInt:AT,randFloat:wT,randFloatSpread:CT,seededRandom:RT,degToRad:DT,radToDeg:UT,isPowerOfTwo:NT,ceilPowerOfTwo:LT,floorPowerOfTwo:IT,setQuaternionFromProperEuler:OT,normalize:En,denormalize:ho},a0=class a0{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ne(this.x,t.x,n.x),this.y=ne(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ne(this.x,t,n),this.y=ne(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};a0.prototype.isVector2=!0;var Gt=a0,ki=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],p=i[s+3],u=a[r+0],d=a[r+1],_=a[r+2],M=a[r+3];if(p!==M||l!==u||c!==d||f!==_){let g=l*u+c*d+f*_+p*M;g<0&&(u=-u,d=-d,_=-_,M=-M,g=-g);let h=1-o;if(g<.9995){let m=Math.acos(g),S=Math.sin(m);h=Math.sin(h*m)/S,o=Math.sin(o*m)/S,l=l*h+u*o,c=c*h+d*o,f=f*h+_*o,p=p*h+M*o}else{l=l*h+u*o,c=c*h+d*o,f=f*h+_*o,p=p*h+M*o;let m=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=m,c*=m,f*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],p=a[r],u=a[r+1],d=a[r+2],_=a[r+3];return t[n]=o*_+f*p+l*d-c*u,t[n+1]=l*_+f*u+c*p-o*d,t[n+2]=c*_+f*d+o*u-l*p,t[n+3]=f*_-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),p=o(a/2),u=l(i/2),d=l(s/2),_=l(a/2);switch(r){case"XYZ":this._x=u*f*p+c*d*_,this._y=c*d*p-u*f*_,this._z=c*f*_+u*d*p,this._w=c*f*p-u*d*_;break;case"YXZ":this._x=u*f*p+c*d*_,this._y=c*d*p-u*f*_,this._z=c*f*_-u*d*p,this._w=c*f*p+u*d*_;break;case"ZXY":this._x=u*f*p-c*d*_,this._y=c*d*p+u*f*_,this._z=c*f*_+u*d*p,this._w=c*f*p-u*d*_;break;case"ZYX":this._x=u*f*p-c*d*_,this._y=c*d*p+u*f*_,this._z=c*f*_-u*d*p,this._w=c*f*p+u*d*_;break;case"YZX":this._x=u*f*p+c*d*_,this._y=c*d*p+u*f*_,this._z=c*f*_-u*d*p,this._w=c*f*p-u*d*_;break;case"XZY":this._x=u*f*p-c*d*_,this._y=c*d*p-u*f*_,this._z=c*f*_+u*d*p,this._w=c*f*p+u*d*_;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(f-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},r0=class r0{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(AS.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(AS.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*f,this.y=i+l*f+o*c-a*p,this.z=s+l*p+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ne(this.x,t.x,n.x),this.y=ne(this.y,t.y,n.y),this.z=ne(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ne(this.x,t,n),this.y=ne(this.y,t,n),this.z=ne(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Qm.copy(this).projectOnVector(t),this.sub(Qm)}reflect(t){return this.sub(Qm.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};r0.prototype.isVector3=!0;var P=r0,Qm=new P,AS=new ki,o0=class o0{constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],d=i[5],_=i[8],M=s[0],g=s[3],h=s[6],m=s[1],S=s[4],v=s[7],E=s[2],A=s[5],w=s[8];return a[0]=r*M+o*m+l*E,a[3]=r*g+o*S+l*A,a[6]=r*h+o*v+l*w,a[1]=c*M+f*m+p*E,a[4]=c*g+f*S+p*A,a[7]=c*h+f*v+p*w,a[2]=u*M+d*m+_*E,a[5]=u*g+d*S+_*A,a[8]=u*h+d*v+_*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=f*r-o*c,u=o*l-f*a,d=c*a-r*l,_=n*p+i*u+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return t[0]=p*M,t[1]=(s*c-f*i)*M,t[2]=(o*i-s*r)*M,t[3]=u*M,t[4]=(f*n-s*l)*M,t[5]=(s*a-o*n)*M,t[6]=d*M,t[7]=(i*l-c*n)*M,t[8]=(r*n-i*a)*M,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return Ja("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jm.makeScale(t,n)),this}rotate(t){return Ja("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jm.makeRotation(-t)),this}translate(t,n){return Ja("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jm.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};o0.prototype.isMatrix3=!0;var Bt=o0,jm=new Bt,wS=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),CS=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PT(){let e={enabled:!0,workingColorSpace:Gl,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===he&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===he&&(s.r=po(s.r),s.g=po(s.g),s.b=po(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ws?kl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Ja("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Ja("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Gl]:{primaries:t,whitePoint:i,transfer:kl,toXYZ:wS,fromXYZ:CS,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:t,whitePoint:i,transfer:he,toXYZ:wS,fromXYZ:CS,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),e}var ee=PT();function Ss(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function po(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var $r,Fh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{$r===void 0&&($r=Xl("canvas")),$r.width=t.width,$r.height=t.height;let s=$r.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=$r}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Xl("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Ss(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ss(n[i]/255)*255):n[i]=Ss(n[i]);return{data:n,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},BT=0,vo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=Do(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push($m(s[r].image)):a.push($m(s[r]))}else a=$m(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function $m(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Fh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}var zT=0,tg=new P,Tn=class e extends Gi{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Vi,s=Vi,a=pn,r=va,o=_i,l=On,c=e.DEFAULT_ANISOTROPY,f=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zT++}),this.uuid=Do(),this.name="",this.source=new vo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tg).x}get height(){return this.source.getSize(tg).y}get depth(){return this.source.getSize(tg).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Ut(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ut(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ph:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case Bh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ph:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case Bh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Xg;Tn.DEFAULT_ANISOTROPY=1;var l0=class l0{constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],p=l[8],u=l[1],d=l[5],_=l[9],M=l[2],g=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+M)<.1&&Math.abs(_+g)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(c+1)/2,v=(d+1)/2,E=(h+1)/2,A=(f+u)/4,w=(p+M)/4,x=(_+g)/4;return S>v&&S>E?S<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(S),s=A/i,a=w/i):v>E?v<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),i=A/s,a=x/s):E<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),i=w/a,s=x/a),this.set(i,s,a,n),this}let m=Math.sqrt((g-_)*(g-_)+(p-M)*(p-M)+(u-f)*(u-f));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(p-M)/m,this.z=(u-f)/m,this.w=Math.acos((c+d+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ne(this.x,t.x,n.x),this.y=ne(this.y,t.y,n.y),this.z=ne(this.z,t.z,n.z),this.w=ne(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ne(this.x,t,n),this.y=ne(this.y,t,n),this.z=ne(this.z,t,n),this.w=ne(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};l0.prototype.isVector4=!0;var Le=l0,Vh=class extends Gi{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Le(0,0,t,n),this.scissorTest=!1,this.viewport=new Le(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new Tn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new vo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends Vh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Wl=class extends Tn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hh=class extends Tn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hf=class hf{constructor(t,n,i,s,a,r,o,l,c,f,p,u,d,_,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,p,u,d,_,M,g)}set(t,n,i,s,a,r,o,l,c,f,p,u,d,_,M,g){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=u,h[3]=d,h[7]=_,h[11]=M,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hf().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/to.setFromMatrixColumn(t,0).length(),a=1/to.setFromMatrixColumn(t,1).length(),r=1/to.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*f,d=r*p,_=o*f,M=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=d+_*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=_+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*f,d=l*p,_=c*f,M=c*p;n[0]=u+M*o,n[4]=_*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*f,n[9]=-o,n[2]=d*o-_,n[6]=M+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*f,d=l*p,_=c*f,M=c*p;n[0]=u-M*o,n[4]=-r*p,n[8]=_+d*o,n[1]=d+_*o,n[5]=r*f,n[9]=M-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*f,d=r*p,_=o*f,M=o*p;n[0]=l*f,n[4]=_*c-d,n[8]=u*c+M,n[1]=l*p,n[5]=M*c+u,n[9]=d*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,_=o*l,M=o*c;n[0]=l*f,n[4]=M-u*p,n[8]=_*p+d,n[1]=p,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=d*p+_,n[10]=u-M*p}else if(t.order==="XZY"){let u=r*l,d=r*c,_=o*l,M=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=u*p+M,n[5]=r*f,n[9]=d*p-_,n[2]=_*p-d,n[6]=o*f,n[10]=M*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(FT,t,VT)}lookAt(t,n,i){let s=this.elements;return Yn.subVectors(t,n),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),aa.crossVectors(i,Yn),aa.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),aa.crossVectors(i,Yn)),aa.normalize(),eh.crossVectors(Yn,aa),s[0]=aa.x,s[4]=eh.x,s[8]=Yn.x,s[1]=aa.y,s[5]=eh.y,s[9]=Yn.y,s[2]=aa.z,s[6]=eh.z,s[10]=Yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],d=i[13],_=i[2],M=i[6],g=i[10],h=i[14],m=i[3],S=i[7],v=i[11],E=i[15],A=s[0],w=s[4],x=s[8],T=s[12],R=s[1],D=s[5],z=s[9],Q=s[13],$=s[2],H=s[6],J=s[10],k=s[14],nt=s[3],rt=s[7],mt=s[11],vt=s[15];return a[0]=r*A+o*R+l*$+c*nt,a[4]=r*w+o*D+l*H+c*rt,a[8]=r*x+o*z+l*J+c*mt,a[12]=r*T+o*Q+l*k+c*vt,a[1]=f*A+p*R+u*$+d*nt,a[5]=f*w+p*D+u*H+d*rt,a[9]=f*x+p*z+u*J+d*mt,a[13]=f*T+p*Q+u*k+d*vt,a[2]=_*A+M*R+g*$+h*nt,a[6]=_*w+M*D+g*H+h*rt,a[10]=_*x+M*z+g*J+h*mt,a[14]=_*T+M*Q+g*k+h*vt,a[3]=m*A+S*R+v*$+E*nt,a[7]=m*w+S*D+v*H+E*rt,a[11]=m*x+S*z+v*J+E*mt,a[15]=m*T+S*Q+v*k+E*vt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],p=t[6],u=t[10],d=t[14],_=t[3],M=t[7],g=t[11],h=t[15],m=l*d-c*u,S=o*d-c*p,v=o*u-l*p,E=r*d-c*f,A=r*u-l*f,w=r*p-o*f;return n*(M*m-g*S+h*v)-i*(_*m-g*E+h*A)+s*(_*S-M*E+h*w)-a*(_*v-M*A+g*w)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return n*(r*f-o*c)-i*(a*f-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=t[9],u=t[10],d=t[11],_=t[12],M=t[13],g=t[14],h=t[15],m=n*o-i*r,S=n*l-s*r,v=n*c-a*r,E=i*l-s*o,A=i*c-a*o,w=s*c-a*l,x=f*M-p*_,T=f*g-u*_,R=f*h-d*_,D=p*g-u*M,z=p*h-d*M,Q=u*h-d*g,$=m*Q-S*z+v*D+E*R-A*T+w*x;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/$;return t[0]=(o*Q-l*z+c*D)*H,t[1]=(s*z-i*Q-a*D)*H,t[2]=(M*w-g*A+h*E)*H,t[3]=(u*A-p*w-d*E)*H,t[4]=(l*R-r*Q-c*T)*H,t[5]=(n*Q-s*R+a*T)*H,t[6]=(g*v-_*w-h*S)*H,t[7]=(f*w-u*v+d*S)*H,t[8]=(r*z-o*R+c*x)*H,t[9]=(i*R-n*z-a*x)*H,t[10]=(_*A-M*v+h*m)*H,t[11]=(p*v-f*A-d*m)*H,t[12]=(o*T-r*D-l*x)*H,t[13]=(n*D-i*T+s*x)*H,t[14]=(M*S-_*E-g*m)*H,t[15]=(f*E-p*S+u*m)*H,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,p=o+o,u=a*c,d=a*f,_=a*p,M=r*f,g=r*p,h=o*p,m=l*c,S=l*f,v=l*p,E=i.x,A=i.y,w=i.z;return s[0]=(1-(M+h))*E,s[1]=(d+v)*E,s[2]=(_-S)*E,s[3]=0,s[4]=(d-v)*A,s[5]=(1-(u+h))*A,s[6]=(g+m)*A,s[7]=0,s[8]=(_+S)*w,s[9]=(g-m)*w,s[10]=(1-(u+M))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=to.set(s[0],s[1],s[2]).length(),o=to.set(s[4],s[5],s[6]).length(),l=to.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Mi.copy(this);let c=1/r,f=1/o,p=1/l;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=f,Mi.elements[5]*=f,Mi.elements[6]*=f,Mi.elements[8]*=p,Mi.elements[9]*=p,Mi.elements[10]*=p,n.setFromRotationMatrix(Mi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=Ti,l=!1){let c=this.elements,f=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),_,M;if(l)_=a/(r-a),M=r*a/(r-a);else if(o===Ti)_=-(r+a)/(r-a),M=-2*r*a/(r-a);else if(o===mo)_=-r/(r-a),M=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Ti,l=!1){let c=this.elements,f=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s),_,M;if(l)_=1/(r-a),M=r/(r-a);else if(o===Ti)_=-2/(r-a),M=-(r+a)/(r-a);else if(o===mo)_=-1/(r-a),M=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};hf.prototype.isMatrix4=!0;var De=hf,to=new P,Mi=new De,FT=new P(0,0,0),VT=new P(1,1,1),aa=new P,eh=new P,Yn=new P,RS=new De,DS=new ki,bs=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],p=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ne(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ne(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return RS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(RS,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return DS.setFromEuler(this),this.setFromQuaternion(DS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bs.DEFAULT_ORDER="XYZ";var xo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},HT=0,US=new P,eo=new ki,ms=new De,nh=new P,Ol=new P,GT=new P,kT=new ki,NS=new P(1,0,0),LS=new P(0,1,0),IS=new P(0,0,1),OS={type:"added"},XT={type:"removed"},no={type:"childadded",child:null},eg={type:"childremoved",child:null},mn=class e extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HT++}),this.uuid=Do(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new P,n=new bs,i=new ki,s=new P(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new Bt}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return eo.setFromAxisAngle(t,n),this.quaternion.multiply(eo),this}rotateOnWorldAxis(t,n){return eo.setFromAxisAngle(t,n),this.quaternion.premultiply(eo),this}rotateX(t){return this.rotateOnAxis(NS,t)}rotateY(t){return this.rotateOnAxis(LS,t)}rotateZ(t){return this.rotateOnAxis(IS,t)}translateOnAxis(t,n){return US.copy(t).applyQuaternion(this.quaternion),this.position.add(US.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(NS,t)}translateY(t){return this.translateOnAxis(LS,t)}translateZ(t){return this.translateOnAxis(IS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ms.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?nh.copy(t):nh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ms.lookAt(Ol,nh,this.up):ms.lookAt(nh,Ol,this.up),this.quaternion.setFromRotationMatrix(ms),s&&(ms.extractRotation(s.matrixWorld),eo.setFromRotationMatrix(ms),this.quaternion.premultiply(eo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Lt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(OS),no.child=t,this.dispatchEvent(no),no.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(XT),eg.child=t,this.dispatchEvent(eg),eg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ms.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ms.multiply(t.parent.matrixWorld)),t.applyMatrix4(ms),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(OS),no.child=t,this.dispatchEvent(no),no.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ol,t,GT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ol,kT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};mn.DEFAULT_UP=new P(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ai=class extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},WT={type:"move"},yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let M of t.hand.values()){let g=n.getJointPose(M,i),h=this._getHandJoint(c,M);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),d=.02,_=.005;c.inputState.pinching&&u>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(WT)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Ai;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},LM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ra={h:0,s:0,l:0},ih={h:0,s:0,l:0};function ng(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var kt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=ee.workingColorSpace){return this.r=t,this.g=n,this.b=i,ee.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=ee.workingColorSpace){if(t=t0(t,1),n=ne(n,0,1),i=ne(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=ng(r,a,t+1/3),this.g=ng(r,a,t),this.b=ng(r,a,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,n=fn){function i(a){a!==void 0&&parseFloat(a)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=fn){let i=LM[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}copyLinearToSRGB(t){return this.r=po(t.r),this.g=po(t.g),this.b=po(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return ee.workingToColorSpace(xn.copy(this),t),Math.round(ne(xn.r*255,0,255))*65536+Math.round(ne(xn.g*255,0,255))*256+Math.round(ne(xn.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ee.workingColorSpace){ee.workingToColorSpace(xn.copy(this),n);let i=xn.r,s=xn.g,a=xn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=f<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=ee.workingColorSpace){return ee.workingToColorSpace(xn.copy(this),n),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=fn){ee.workingToColorSpace(xn.copy(this),t);let n=xn.r,i=xn.g,s=xn.b;return t!==fn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(ra),this.setHSL(ra.h+t,ra.s+n,ra.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ra),t.getHSL(ih);let i=Vl(ra.h,ih.h,n),s=Vl(ra.s,ih.s,n),a=Vl(ra.l,ih.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new kt;kt.NAMES=LM;var ql=class e{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=n,this.far=i}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Yl=class extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bs,this.environmentIntensity=1,this.environmentRotation=new bs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},bi=new P,gs=new P,ig=new P,_s=new P,io=new P,so=new P,PS=new P,sg=new P,ag=new P,rg=new P,og=new Le,lg=new Le,cg=new Le,ys=class e{constructor(t=new P,n=new P,i=new P){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),bi.subVectors(t,n),s.cross(bi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){bi.subVectors(s,n),gs.subVectors(i,n),ig.subVectors(t,n);let r=bi.dot(bi),o=bi.dot(gs),l=bi.dot(ig),c=gs.dot(gs),f=gs.dot(ig),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,d=(c*l-o*f)*u,_=(r*f-o*l)*u;return a.set(1-d-_,_,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,_s)===null?!1:_s.x>=0&&_s.y>=0&&_s.x+_s.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,_s)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,_s.x),l.addScaledVector(r,_s.y),l.addScaledVector(o,_s.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return og.setScalar(0),lg.setScalar(0),cg.setScalar(0),og.fromBufferAttribute(t,n),lg.fromBufferAttribute(t,i),cg.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(og,a.x),r.addScaledVector(lg,a.y),r.addScaledVector(cg,a.z),r}static isFrontFacing(t,n,i,s){return bi.subVectors(i,n),gs.subVectors(t,n),bi.cross(gs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),gs.subVectors(this.a,this.b),bi.cross(gs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;io.subVectors(s,i),so.subVectors(a,i),sg.subVectors(t,i);let l=io.dot(sg),c=so.dot(sg);if(l<=0&&c<=0)return n.copy(i);ag.subVectors(t,s);let f=io.dot(ag),p=so.dot(ag);if(f>=0&&p<=f)return n.copy(s);let u=l*p-f*c;if(u<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(io,r);rg.subVectors(t,a);let d=io.dot(rg),_=so.dot(rg);if(_>=0&&d<=_)return n.copy(a);let M=d*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(so,o);let g=f*_-d*p;if(g<=0&&p-f>=0&&d-_>=0)return PS.subVectors(a,s),o=(p-f)/(p-f+(d-_)),n.copy(s).addScaledVector(PS,o);let h=1/(g+M+u);return r=M*h,o=u*h,n.copy(i).addScaledVector(io,r).addScaledVector(so,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},fa=class{constructor(t=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Ei.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Ei.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Ei.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ei):Ei.fromBufferAttribute(a,r),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sh.copy(i.boundingBox)),sh.applyMatrix4(t.matrixWorld),this.union(sh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pl),ah.subVectors(this.max,Pl),ao.subVectors(t.a,Pl),ro.subVectors(t.b,Pl),oo.subVectors(t.c,Pl),oa.subVectors(ro,ao),la.subVectors(oo,ro),Xa.subVectors(ao,oo);let n=[0,-oa.z,oa.y,0,-la.z,la.y,0,-Xa.z,Xa.y,oa.z,0,-oa.x,la.z,0,-la.x,Xa.z,0,-Xa.x,-oa.y,oa.x,0,-la.y,la.x,0,-Xa.y,Xa.x,0];return!ug(n,ao,ro,oo,ah)||(n=[1,0,0,0,1,0,0,0,1],!ug(n,ao,ro,oo,ah))?!1:(rh.crossVectors(oa,la),n=[rh.x,rh.y,rh.z],ug(n,ao,ro,oo,ah))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vs=[new P,new P,new P,new P,new P,new P,new P,new P],Ei=new P,sh=new fa,ao=new P,ro=new P,oo=new P,oa=new P,la=new P,Xa=new P,Pl=new P,ah=new P,rh=new P,Wa=new P;function ug(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Wa.fromArray(e,a);let o=s.x*Math.abs(Wa.x)+s.y*Math.abs(Wa.y)+s.z*Math.abs(Wa.z),l=t.dot(Wa),c=n.dot(Wa),f=i.dot(Wa);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var Je=new P,oh=new Gt,qT=0,Jn=class extends Gi{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Ag,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)oh.fromBufferAttribute(this,n),oh.applyMatrix3(t),this.setXY(n,oh.x,oh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Je.fromBufferAttribute(this,n),Je.applyMatrix3(t),this.setXYZ(n,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Je.fromBufferAttribute(this,n),Je.applyMatrix4(t),this.setXYZ(n,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Je.fromBufferAttribute(this,n),Je.applyNormalMatrix(t),this.setXYZ(n,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Je.fromBufferAttribute(this,n),Je.transformDirection(t),this.setXYZ(n,Je.x,Je.y,Je.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=ho(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=En(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ho(n,this.array)),n}setX(t,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ho(n,this.array)),n}setY(t,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ho(n,this.array)),n}setZ(t,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ho(n,this.array)),n}setW(t,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),s=En(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),s=En(s,this.array),a=En(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ag&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var Zl=class extends Jn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Jl=class extends Jn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var ke=class extends Jn{constructor(t,n,i){super(new Float32Array(t),n,i)}},YT=new fa,Bl=new P,hg=new P,ja=class{constructor(t=new P,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):YT.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bl.subVectors(t,this.center);let n=Bl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Bl,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hg.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bl.copy(t.center).add(hg)),this.expandByPoint(Bl.copy(t.center).sub(hg))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ZT=0,pi=new De,fg=new mn,lo=new P,Zn=new fa,zl=new fa,an=new P,In=class e extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=Do(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vT(t)?Jl:Zl)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Bt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,n,i){return pi.makeTranslation(t,n,i),this.applyMatrix4(pi),this}scale(t,n,i){return pi.makeScale(t,n,i),this.applyMatrix4(pi),this}lookAt(t){return fg.lookAt(t),fg.updateMatrix(),this.applyMatrix4(fg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ke(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fa);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Zn.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ja);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];zl.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(Zn.min,zl.min),Zn.expandByPoint(an),an.addVectors(Zn.max,zl.max),Zn.expandByPoint(an)):(Zn.expandByPoint(zl.min),Zn.expandByPoint(zl.max))}Zn.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)an.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(an));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)an.fromBufferAttribute(o,c),l&&(lo.fromBufferAttribute(t,c),an.add(lo)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Jn(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new P,l[x]=new P;let c=new P,f=new P,p=new P,u=new Gt,d=new Gt,_=new Gt,M=new P,g=new P;function h(x,T,R){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,T),p.fromBufferAttribute(i,R),u.fromBufferAttribute(a,x),d.fromBufferAttribute(a,T),_.fromBufferAttribute(a,R),f.sub(c),p.sub(c),d.sub(u),_.sub(u);let D=1/(d.x*_.y-_.x*d.y);isFinite(D)&&(M.copy(f).multiplyScalar(_.y).addScaledVector(p,-d.y).multiplyScalar(D),g.copy(p).multiplyScalar(d.x).addScaledVector(f,-_.x).multiplyScalar(D),o[x].add(M),o[T].add(M),o[R].add(M),l[x].add(g),l[T].add(g),l[R].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let x=0,T=m.length;x<T;++x){let R=m[x],D=R.start,z=R.count;for(let Q=D,$=D+z;Q<$;Q+=3)h(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}let S=new P,v=new P,E=new P,A=new P;function w(x){E.fromBufferAttribute(s,x),A.copy(E);let T=o[x];S.copy(T),S.sub(E.multiplyScalar(E.dot(T))).normalize(),v.crossVectors(A,T);let D=v.dot(l[x])<0?-1:1;r.setXYZW(x,S.x,S.y,S.z,D)}for(let x=0,T=m.length;x<T;++x){let R=m[x],D=R.start,z=R.count;for(let Q=D,$=D+z;Q<$;Q+=3)w(t.getX(Q+0)),w(t.getX(Q+1)),w(t.getX(Q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new P,a=new P,r=new P,o=new P,l=new P,c=new P,f=new P,p=new P;if(t)for(let u=0,d=t.count;u<d;u+=3){let _=t.getX(u+0),M=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,M),r.fromBufferAttribute(n,g),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)an.fromBufferAttribute(t,n),an.normalize(),t.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f),d=0,_=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*f;for(let h=0;h<f;h++)u[_++]=c[d++]}return new Jn(u,f,p)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,p=c.length;f<p;f++){let u=c[f],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],p=a[c];for(let u=0,d=p.length;u<d;u++)f.push(p[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var JT=0,Es=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JT++}),this.uuid=Do(),this.name="",this.type="Material",this.blending=Ka,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wh,this.blendDst=Ch,this.blendEquation=ha,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Za,this.stencilZFail=Za,this.stencilZPass=Za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Ut(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ut(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ka&&(i.blending=this.blending),this.side!==Ms&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wh&&(i.blendSrc=this.blendSrc),this.blendDst!==Ch&&(i.blendDst=this.blendDst),this.blendEquation!==ha&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Za&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Za&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Za&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Gt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var xs=new P,dg=new P,lh=new P,ca=new P,pg=new P,ch=new P,mg=new P,So=class{constructor(t=new P,n=new P(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=xs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(xs.copy(this.origin).addScaledVector(this.direction,n),xs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){dg.copy(t).add(n).multiplyScalar(.5),lh.copy(n).sub(t).normalize(),ca.copy(this.origin).sub(dg);let a=t.distanceTo(n)*.5,r=-this.direction.dot(lh),o=ca.dot(this.direction),l=-ca.dot(lh),c=ca.lengthSq(),f=Math.abs(1-r*r),p,u,d,_;if(f>0)if(p=r*l-o,u=r*o-l,_=a*f,p>=0)if(u>=-_)if(u<=_){let M=1/f;p*=M,u*=M,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-_?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=_?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(dg).addScaledVector(lh,u),d}intersectSphere(t,n){xs.subVectors(t.center,this.origin);let i=xs.dot(this.direction),s=xs.dot(xs)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(a=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(a=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,xs)!==null}intersectTriangle(t,n,i,s,a){pg.subVectors(n,t),ch.subVectors(i,t),mg.crossVectors(pg,ch);let r=this.direction.dot(mg),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ca.subVectors(this.origin,t);let l=o*this.direction.dot(ch.crossVectors(ca,ch));if(l<0)return null;let c=o*this.direction.dot(pg.cross(ca));if(c<0||l+c>r)return null;let f=-o*ca.dot(mg);return f<0?null:this.at(f/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ts=class extends Es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bs,this.combine=Pg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},BS=new De,qa=new So,uh=new ja,zS=new P,hh=new P,fh=new P,dh=new P,gg=new P,ph=new P,FS=new P,mh=new P,ze=class extends mn{constructor(t=new In,n=new Ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){ph.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],p=a[l];f!==0&&(gg.fromBufferAttribute(p,t),r?ph.addScaledVector(gg,f):ph.addScaledVector(gg.sub(n),f))}n.add(ph)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uh.copy(i.boundingSphere),uh.applyMatrix4(a),qa.copy(t.ray).recast(t.near),!(uh.containsPoint(qa.origin)===!1&&(qa.intersectSphere(uh,zS)===null||qa.origin.distanceToSquared(zS)>(t.far-t.near)**2))&&(BS.copy(a).invert(),qa.copy(t.ray).applyMatrix4(BS),!(i.boundingBox!==null&&qa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,qa)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,M=u.length;_<M;_++){let g=u[_],h=r[g.materialIndex],m=Math.max(g.start,d.start),S=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let v=m,E=S;v<E;v+=3){let A=o.getX(v),w=o.getX(v+1),x=o.getX(v+2);s=gh(this,h,t,i,c,f,p,A,w,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let _=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let g=_,h=M;g<h;g+=3){let m=o.getX(g),S=o.getX(g+1),v=o.getX(g+2);s=gh(this,r,t,i,c,f,p,m,S,v),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,M=u.length;_<M;_++){let g=u[_],h=r[g.materialIndex],m=Math.max(g.start,d.start),S=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=m,E=S;v<E;v+=3){let A=v,w=v+1,x=v+2;s=gh(this,h,t,i,c,f,p,A,w,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let _=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let g=_,h=M;g<h;g+=3){let m=g,S=g+1,v=g+2;s=gh(this,r,t,i,c,f,p,m,S,v),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};function KT(e,t,n,i,s,a,r,o){let l;if(t.side===An?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Ms,o),l===null)return null;mh.copy(o),mh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(mh);return c<n.near||c>n.far?null:{distance:c,point:mh.clone(),object:e}}function gh(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,hh),e.getVertexPosition(l,fh),e.getVertexPosition(c,dh);let f=KT(e,t,n,i,hh,fh,dh,FS);if(f){let p=new P;ys.getBarycoord(FS,hh,fh,dh,p),s&&(f.uv=ys.getInterpolatedAttribute(s,o,l,c,p,new Gt)),a&&(f.uv1=ys.getInterpolatedAttribute(a,o,l,c,p,new Gt)),r&&(f.normal=ys.getInterpolatedAttribute(r,o,l,c,p,new P),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};ys.getNormal(hh,fh,dh,u.normal),f.face=u,f.barycoord=p}return f}var Gh=class extends Tn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=rn,f=rn,p,u){super(null,r,o,l,c,f,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _g=new P,QT=new P,jT=new Bt,mi=class{constructor(t=new P(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=_g.subVectors(i,n).cross(QT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(_g),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||jT.getNormalMatrix(t),s=this.coplanarPoint(_g).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ya=new ja,$T=new Gt(.5,.5),_h=new P,Mo=class{constructor(t=new mi,n=new mi,i=new mi,s=new mi,a=new mi,r=new mi){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ti,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],p=a[5],u=a[6],d=a[7],_=a[8],M=a[9],g=a[10],h=a[11],m=a[12],S=a[13],v=a[14],E=a[15];if(s[0].setComponents(c-r,d-f,h-_,E-m).normalize(),s[1].setComponents(c+r,d+f,h+_,E+m).normalize(),s[2].setComponents(c+o,d+p,h+M,E+S).normalize(),s[3].setComponents(c-o,d-p,h-M,E-S).normalize(),i)s[4].setComponents(l,u,g,v).normalize(),s[5].setComponents(c-l,d-u,h-g,E-v).normalize();else if(s[4].setComponents(c-l,d-u,h-g,E-v).normalize(),n===Ti)s[5].setComponents(c+l,d+u,h+g,E+v).normalize();else if(n===mo)s[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ya.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ya)}intersectsSprite(t){Ya.center.set(0,0,0);let n=$T.distanceTo(t.center);return Ya.radius=.7071067811865476+n,Ya.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ya)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(_h.x=s.normal.x>0?t.max.x:t.min.x,_h.y=s.normal.y>0?t.max.y:t.min.y,_h.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_h)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bo=class extends Es{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},kh=new P,Xh=new P,VS=new De,Fl=new So,vh=new ja,vg=new P,HS=new P,Wh=class extends mn{constructor(t=new In,n=new bo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[0];for(let s=1,a=n.count;s<a;s++)kh.fromBufferAttribute(n,s-1),Xh.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=kh.distanceTo(Xh);t.setAttribute("lineDistance",new ke(i,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vh.copy(i.boundingSphere),vh.applyMatrix4(s),vh.radius+=a,t.ray.intersectsSphere(vh)===!1)return;VS.copy(s).invert(),Fl.copy(t.ray).applyMatrix4(VS);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){let d=Math.max(0,r.start),_=Math.min(f.count,r.start+r.count);for(let M=d,g=_-1;M<g;M+=c){let h=f.getX(M),m=f.getX(M+1),S=xh(this,t,Fl,l,h,m,M);S&&n.push(S)}if(this.isLineLoop){let M=f.getX(_-1),g=f.getX(d),h=xh(this,t,Fl,l,M,g,_-1);h&&n.push(h)}}else{let d=Math.max(0,r.start),_=Math.min(u.count,r.start+r.count);for(let M=d,g=_-1;M<g;M+=c){let h=xh(this,t,Fl,l,M,M+1,M);h&&n.push(h)}if(this.isLineLoop){let M=xh(this,t,Fl,l,_-1,d,_-1);M&&n.push(M)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function xh(e,t,n,i,s,a,r){let o=e.geometry.attributes.position;if(kh.fromBufferAttribute(o,s),Xh.fromBufferAttribute(o,a),n.distanceSqToSegment(kh,Xh,vg,HS)>i)return;vg.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(vg);if(!(c<t.near||c>t.far))return{distance:c,point:HS.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}var GS=new P,kS=new P,Kl=class extends Wh{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[];for(let s=0,a=n.count;s<a;s+=2)GS.fromBufferAttribute(n,s),kS.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+GS.distanceTo(kS);t.setAttribute("lineDistance",new ke(i,1))}else Ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ql=class extends Tn{constructor(t=[],n=_a,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Eo=class extends Tn{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var As=class extends Tn{constructor(t,n,i=Ci,s,a,r,o=rn,l=rn,c,f=Hi,p=1){if(f!==Hi&&f!==xa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},qh=class extends As{constructor(t,n=Ci,i=_a,s,a,r=rn,o=rn,l,c=Hi){let f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},jl=class extends Tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Qn=class e extends In{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],p=[],u=0,d=0;_("z","y","x",-1,-1,i,n,t,r,a,0),_("z","y","x",1,-1,i,n,-t,r,a,1),_("x","z","y",1,1,t,i,n,s,r,2),_("x","z","y",1,-1,t,i,-n,s,r,3),_("x","y","z",1,-1,t,n,i,s,a,4),_("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(f,3)),this.setAttribute("uv",new ke(p,2));function _(M,g,h,m,S,v,E,A,w,x,T){let R=v/w,D=E/x,z=v/2,Q=E/2,$=A/2,H=w+1,J=x+1,k=0,nt=0,rt=new P;for(let mt=0;mt<J;mt++){let vt=mt*D-Q;for(let at=0;at<H;at++){let Nt=at*R-z;rt[M]=Nt*m,rt[g]=vt*S,rt[h]=$,c.push(rt.x,rt.y,rt.z),rt[M]=0,rt[g]=0,rt[h]=A>0?1:-1,f.push(rt.x,rt.y,rt.z),p.push(at/w),p.push(1-mt/x),k+=1}}for(let mt=0;mt<x;mt++)for(let vt=0;vt<w;vt++){let at=u+vt+H*mt,Nt=u+vt+H*(mt+1),ue=u+(vt+1)+H*(mt+1),Jt=u+(vt+1)+H*mt;l.push(at,Nt,Jt),l.push(Nt,ue,Jt),nt+=6}o.addGroup(d,nt,T),d+=nt,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Yh=class e extends In{constructor(t=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:s};let a=[],r=[];o(s),c(i),f(),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(a.slice(),3)),this.setAttribute("uv",new ke(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(m){let S=new P,v=new P,E=new P;for(let A=0;A<n.length;A+=3)d(n[A+0],S),d(n[A+1],v),d(n[A+2],E),l(S,v,E,m)}function l(m,S,v,E){let A=E+1,w=[];for(let x=0;x<=A;x++){w[x]=[];let T=m.clone().lerp(v,x/A),R=S.clone().lerp(v,x/A),D=A-x;for(let z=0;z<=D;z++)z===0&&x===A?w[x][z]=T:w[x][z]=T.clone().lerp(R,z/D)}for(let x=0;x<A;x++)for(let T=0;T<2*(A-x)-1;T++){let R=Math.floor(T/2);T%2===0?(u(w[x][R+1]),u(w[x+1][R]),u(w[x][R])):(u(w[x][R+1]),u(w[x+1][R+1]),u(w[x+1][R]))}}function c(m){let S=new P;for(let v=0;v<a.length;v+=3)S.x=a[v+0],S.y=a[v+1],S.z=a[v+2],S.normalize().multiplyScalar(m),a[v+0]=S.x,a[v+1]=S.y,a[v+2]=S.z}function f(){let m=new P;for(let S=0;S<a.length;S+=3){m.x=a[S+0],m.y=a[S+1],m.z=a[S+2];let v=g(m)/2/Math.PI+.5,E=h(m)/Math.PI+.5;r.push(v,1-E)}_(),p()}function p(){for(let m=0;m<r.length;m+=6){let S=r[m+0],v=r[m+2],E=r[m+4],A=Math.max(S,v,E),w=Math.min(S,v,E);A>.9&&w<.1&&(S<.2&&(r[m+0]+=1),v<.2&&(r[m+2]+=1),E<.2&&(r[m+4]+=1))}}function u(m){a.push(m.x,m.y,m.z)}function d(m,S){let v=m*3;S.x=t[v+0],S.y=t[v+1],S.z=t[v+2]}function _(){let m=new P,S=new P,v=new P,E=new P,A=new Gt,w=new Gt,x=new Gt;for(let T=0,R=0;T<a.length;T+=9,R+=6){m.set(a[T+0],a[T+1],a[T+2]),S.set(a[T+3],a[T+4],a[T+5]),v.set(a[T+6],a[T+7],a[T+8]),A.set(r[R+0],r[R+1]),w.set(r[R+2],r[R+3]),x.set(r[R+4],r[R+5]),E.copy(m).add(S).add(v).divideScalar(3);let D=g(E);M(A,R+0,m,D),M(w,R+2,S,D),M(x,R+4,v,D)}}function M(m,S,v,E){E<0&&m.x===1&&(r[S]=m.x-1),v.x===0&&v.z===0&&(r[S]=E/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function h(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},$l=class e extends Yh{constructor(t=1,n=0){let i=(1+Math.sqrt(5))/2,s=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,t,n),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new e(t.radius,t.detail)}},yh=new P,Sh=new P,xg=new P,Mh=new ys,tc=class extends In{constructor(t=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:n},t!==null){let s=Math.pow(10,4),a=Math.cos(fo*n),r=t.getIndex(),o=t.getAttribute("position"),l=r?r.count:o.count,c=[0,0,0],f=["a","b","c"],p=new Array(3),u={},d=[];for(let _=0;_<l;_+=3){r?(c[0]=r.getX(_),c[1]=r.getX(_+1),c[2]=r.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);let{a:M,b:g,c:h}=Mh;if(M.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),h.fromBufferAttribute(o,c[2]),Mh.getNormal(xg),p[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,p[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,p[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let m=0;m<3;m++){let S=(m+1)%3,v=p[m],E=p[S],A=Mh[f[m]],w=Mh[f[S]],x=`${v}_${E}`,T=`${E}_${v}`;T in u&&u[T]?(xg.dot(u[T].normal)<=a&&(d.push(A.x,A.y,A.z),d.push(w.x,w.y,w.z)),u[T]=null):x in u||(u[x]={index0:c[m],index1:c[S],normal:xg.clone()})}}for(let _ in u)if(u[_]){let{index0:M,index1:g}=u[_];yh.fromBufferAttribute(o,M),Sh.fromBufferAttribute(o,g),d.push(yh.x,yh.y,yh.z),d.push(Sh.x,Sh.y,Sh.z)}this.setAttribute("position",new ke(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var da=class e extends In{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,p=t/o,u=n/l,d=[],_=[],M=[],g=[];for(let h=0;h<f;h++){let m=h*u-r;for(let S=0;S<c;S++){let v=S*p-a;_.push(v,-m,0),M.push(0,0,1),g.push(S/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<o;m++){let S=m+c*h,v=m+c*(h+1),E=m+1+c*(h+1),A=m+1+c*h;d.push(S,v,A),d.push(v,E,A)}this.setIndex(d),this.setAttribute("position",new ke(_,3)),this.setAttribute("normal",new ke(M,3)),this.setAttribute("uv",new ke(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ec=class e extends In{constructor(t=.5,n=1,i=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:a,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],f=[],p=t,u=(n-t)/s,d=new P,_=new Gt;for(let M=0;M<=s;M++){for(let g=0;g<=i;g++){let h=a+g/i*r;d.x=p*Math.cos(h),d.y=p*Math.sin(h),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/n+1)/2,_.y=(d.y/n+1)/2,f.push(_.x,_.y)}p+=u}for(let M=0;M<s;M++){let g=M*(i+1);for(let h=0;h<i;h++){let m=h+g,S=m,v=m+i+1,E=m+i+2,A=m+1;o.push(S,v,A),o.push(v,E,A)}}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function er(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(XS(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(XS(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function yn(e){let t={};for(let n=0;n<e.length;n++){let i=er(e[n]);for(let s in i)t[s]=i[s]}return t}function XS(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function tA(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function e0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var IM={clone:er,merge:yn},eA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends Es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eA,this.fragmentShader=nA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=tA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new kt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Gt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Le().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Bt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new De().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Zh=class extends jn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$n=class extends Es{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qf,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Jh=class extends Es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Kh=class extends Es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function bh(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}var pa=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qh=class extends pa{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mg,endingEnd:Mg}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case bg:a=t,o=2*n-i;break;case Eg:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case bg:r=t,l=2*i-n;break;case Eg:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,_=(i-n)/(s-n),M=_*_,g=M*_,h=-u*g+2*u*M-u*_,m=(1+u)*g+(-1.5-2*u)*M+(-.5+u)*_+1,S=(-1-d)*g+(1.5+d)*M+.5*_,v=d*g-d*M;for(let E=0;E!==o;++E)a[E]=h*r[f+E]+m*r[c+E]+S*r[l+E]+v*r[p+E];return a}},jh=class extends pa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),p=1-f;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*f;return a}},$h=class extends pa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},tf=class extends pa{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let _=(i-n)/(s-n),M=1-_;for(let g=0;g!==o;++g)a[g]=r[c+g]*M+r[l+g]*_;return a}let u=o*2,d=t-1;for(let _=0;_!==o;++_){let M=r[c+_],g=r[l+_],h=d*u+_*2,m=p[h],S=p[h+1],v=t*u+_*2,E=f[v],A=f[v+1],w=(i-n)/(s-n),x,T,R,D,z;for(let Q=0;Q<8;Q++){x=w*w,T=x*w,R=1-w,D=R*R,z=D*R;let H=z*n+3*D*w*m+3*R*x*E+T*s-i;if(Math.abs(H)<1e-10)break;let J=3*D*(m-n)+6*R*w*(E-m)+3*x*(s-E);if(Math.abs(J)<1e-10)break;w=w-H/J,w=Math.max(0,Math.min(1,w))}a[_]=z*M+3*D*w*S+3*R*x*A+T*g}return a}},ti=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=bh(n,this.TimeBufferType),this.values=bh(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:bh(t.times,Array),values:bh(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new $h(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new tf(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Hl:n=this.InterpolantFactoryMethodDiscrete;break;case zh:n=this.InterpolantFactoryMethodLinear;break;case Ah:n=this.InterpolantFactoryMethodSmooth;break;case Sg:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ut("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hl;case this.InterpolantFactoryMethodLinear:return zh;case this.InterpolantFactoryMethodSmooth:return Ah;case this.InterpolantFactoryMethodBezier:return Sg}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Lt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Lt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Lt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Lt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&xT(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Lt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ah,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let _=0;_!==i;++_){let M=n[p+_];if(M!==n[u+_]||M!==n[d+_]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};ti.prototype.ValueTypeName="";ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=zh;var ma=class extends ti{constructor(t,n,i){super(t,n,i)}};ma.prototype.ValueTypeName="bool";ma.prototype.ValueBufferType=Array;ma.prototype.DefaultInterpolation=Hl;ma.prototype.InterpolantFactoryMethodLinear=void 0;ma.prototype.InterpolantFactoryMethodSmooth=void 0;var ef=class extends ti{constructor(t,n,i,s){super(t,n,i,s)}};ef.prototype.ValueTypeName="color";var nf=class extends ti{constructor(t,n,i,s){super(t,n,i,s)}};nf.prototype.ValueTypeName="number";var sf=class extends pa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)ki.slerpFlat(a,0,r,c-o,r,c,l);return a}},nc=class extends ti{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new sf(this.times,this.values,this.getValueSize(),t)}};nc.prototype.ValueTypeName="quaternion";nc.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends ti{constructor(t,n,i){super(t,n,i)}};ga.prototype.ValueTypeName="string";ga.prototype.ValueBufferType=Array;ga.prototype.DefaultInterpolation=Hl;ga.prototype.InterpolantFactoryMethodLinear=void 0;ga.prototype.InterpolantFactoryMethodSmooth=void 0;var af=class extends ti{constructor(t,n,i,s){super(t,n,i,s)}};af.prototype.ValueTypeName="vector";var rf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){let p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],_=c[p+1];if(d.global&&(d.lastIndex=0),d.test(f))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},OM=new rf,of=class{constructor(t){this.manager=t!==void 0?t:OM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};of.DEFAULT_MATERIAL_NAME="__DEFAULT";var To=class extends mn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},ic=class extends To{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){let n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}},yg=new De,WS=new P,qS=new P,lf=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;WS.setFromMatrixPosition(t.matrixWorld),n.position.copy(WS),qS.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(qS),n.updateMatrixWorld(),yg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yg,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===mo||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yg)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Eh=new P,Th=new ki,Fi=new P,sc=class extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Eh,Th,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Eh,Th,Fi.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Eh,Th,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Eh,Th,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ua=new P,YS=new Gt,ZS=new Gt,dn=class extends sc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=_o*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ua.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ua.x,ua.y).multiplyScalar(-t/ua.z),ua.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ua.x,ua.y).multiplyScalar(-t/ua.z)}getViewSize(t,n){return this.getViewBounds(t,YS,ZS),n.subVectors(ZS,YS)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(fo*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var wg=class extends lf{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0}},ac=class extends To{constructor(t,n,i=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new wg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}},Ao=class extends sc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Cg=class extends lf{constructor(){super(new Ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rc=class extends To{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new Cg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var co=-90,uo=1,cf=class extends mn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(co,uo,t,n);s.layers=this.layers,this.add(s);let a=new dn(co,uo,t,n);a.layers=this.layers,this.add(a);let r=new dn(co,uo,t,n);r.layers=this.layers,this.add(r);let o=new dn(co,uo,t,n);o.layers=this.layers,this.add(o);let l=new dn(co,uo,t,n);l.layers=this.layers,this.add(l);let c=new dn(co,uo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(p,u,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},uf=class extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var n0="\\[\\]\\.:\\/",iA=new RegExp("["+n0+"]","g"),i0="[^"+n0+"]",sA="[^"+n0.replace("\\.","")+"]",aA=/((?:WC+[\/:])*)/.source.replace("WC",i0),rA=/(WCOD+)?/.source.replace("WCOD",sA),oA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",i0),lA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",i0),cA=new RegExp("^"+aA+rA+oA+lA+"$"),uA=["material","materials","bones","map"],Rg=class{constructor(t,n,i){let s=i||Re.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Re=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(iA,"")}static parseTrackName(t){let n=cA.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);uA.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Lt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=Rg;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d3=new Float32Array(1);var JS=new De,oc=class{constructor(t,n,i=0,s=1/0){this.ray=new So(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Lt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return JS.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(JS),this}intersectObject(t,n=!0,i=[]){return Dg(t,this,i,n),i.sort(KS),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)Dg(t[s],this,i,n);return i.sort(KS),i}};function KS(e,t){return e.distance-t.distance}function Dg(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)Dg(a[r],t,n,!0)}}var c0=class c0{constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};c0.prototype.isMatrix2=!0;var Ug=c0;function s0(e,t,n,i){let s=hA(i);switch(n){case Jg:return e*t;case Qg:return e*t/s.components*s.byteLength;case vf:return e*t/s.components*s.byteLength;case ya:return e*t*2/s.components*s.byteLength;case xf:return e*t*2/s.components*s.byteLength;case Kg:return e*t*3/s.components*s.byteLength;case _i:return e*t*4/s.components*s.byteLength;case yf:return e*t*4/s.components*s.byteLength;case uc:case hc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fc:case dc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Mf:case Ef:return Math.max(e,16)*Math.max(t,8)/4;case Sf:case bf:return Math.max(e,8)*Math.max(t,8)/2;case Tf:case Af:case Cf:case Rf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case wf:case pc:case Df:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Uf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Nf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Lf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case If:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Of:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Pf:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Bf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case zf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ff:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Vf:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Hf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Gf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case kf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Xf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Wf:case qf:case Yf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Zf:case Jf:return Math.ceil(e/4)*Math.ceil(t/4)*8;case mc:case Kf:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function hA(e){switch(e){case On:case Wg:return{byteLength:1,components:1};case Co:case qg:case Wi:return{byteLength:2,components:1};case gf:case _f:return{byteLength:2,components:4};case Ci:case mf:case Ri:return{byteLength:4,components:1};case Yg:case Zg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function sb(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function dA(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let f=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,f);else{p.sort((d,_)=>d.start-_.start);let u=0;for(let d=1;d<p.length;d++){let _=p[u],M=p[d];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,p[u]=M)}p.length=u+1;for(let d=0,_=p.length;d<_;d++){let M=p[d];e.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var pA=`#ifdef USE_ALPHAHASH
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
}`,Xt={alphahash_fragment:pA,alphahash_pars_fragment:mA,alphamap_fragment:gA,alphamap_pars_fragment:_A,alphatest_fragment:vA,alphatest_pars_fragment:xA,aomap_fragment:yA,aomap_pars_fragment:SA,batching_pars_vertex:MA,batching_vertex:bA,begin_vertex:EA,beginnormal_vertex:TA,bsdfs:AA,iridescence_fragment:wA,bumpmap_pars_fragment:CA,clipping_planes_fragment:RA,clipping_planes_pars_fragment:DA,clipping_planes_pars_vertex:UA,clipping_planes_vertex:NA,color_fragment:LA,color_pars_fragment:IA,color_pars_vertex:OA,color_vertex:PA,common:BA,cube_uv_reflection_fragment:zA,defaultnormal_vertex:FA,displacementmap_pars_vertex:VA,displacementmap_vertex:HA,emissivemap_fragment:GA,emissivemap_pars_fragment:kA,colorspace_fragment:XA,colorspace_pars_fragment:WA,envmap_fragment:qA,envmap_common_pars_fragment:YA,envmap_pars_fragment:ZA,envmap_pars_vertex:JA,envmap_physical_pars_fragment:rw,envmap_vertex:KA,fog_vertex:QA,fog_pars_vertex:jA,fog_fragment:$A,fog_pars_fragment:tw,gradientmap_pars_fragment:ew,lightmap_pars_fragment:nw,lights_lambert_fragment:iw,lights_lambert_pars_fragment:sw,lights_pars_begin:aw,lights_toon_fragment:ow,lights_toon_pars_fragment:lw,lights_phong_fragment:cw,lights_phong_pars_fragment:uw,lights_physical_fragment:hw,lights_physical_pars_fragment:fw,lights_fragment_begin:dw,lights_fragment_maps:pw,lights_fragment_end:mw,lightprobes_pars_fragment:gw,logdepthbuf_fragment:_w,logdepthbuf_pars_fragment:vw,logdepthbuf_pars_vertex:xw,logdepthbuf_vertex:yw,map_fragment:Sw,map_pars_fragment:Mw,map_particle_fragment:bw,map_particle_pars_fragment:Ew,metalnessmap_fragment:Tw,metalnessmap_pars_fragment:Aw,morphinstance_vertex:ww,morphcolor_vertex:Cw,morphnormal_vertex:Rw,morphtarget_pars_vertex:Dw,morphtarget_vertex:Uw,normal_fragment_begin:Nw,normal_fragment_maps:Lw,normal_pars_fragment:Iw,normal_pars_vertex:Ow,normal_vertex:Pw,normalmap_pars_fragment:Bw,clearcoat_normal_fragment_begin:zw,clearcoat_normal_fragment_maps:Fw,clearcoat_pars_fragment:Vw,iridescence_pars_fragment:Hw,opaque_fragment:Gw,packing:kw,premultiplied_alpha_fragment:Xw,project_vertex:Ww,dithering_fragment:qw,dithering_pars_fragment:Yw,roughnessmap_fragment:Zw,roughnessmap_pars_fragment:Jw,shadowmap_pars_fragment:Kw,shadowmap_pars_vertex:Qw,shadowmap_vertex:jw,shadowmask_pars_fragment:$w,skinbase_vertex:t2,skinning_pars_vertex:e2,skinning_vertex:n2,skinnormal_vertex:i2,specularmap_fragment:s2,specularmap_pars_fragment:a2,tonemapping_fragment:r2,tonemapping_pars_fragment:o2,transmission_fragment:l2,transmission_pars_fragment:c2,uv_pars_fragment:u2,uv_pars_vertex:h2,uv_vertex:f2,worldpos_vertex:d2,background_vert:p2,background_frag:m2,backgroundCube_vert:g2,backgroundCube_frag:_2,cube_vert:v2,cube_frag:x2,depth_vert:y2,depth_frag:S2,distance_vert:M2,distance_frag:b2,equirect_vert:E2,equirect_frag:T2,linedashed_vert:A2,linedashed_frag:w2,meshbasic_vert:C2,meshbasic_frag:R2,meshlambert_vert:D2,meshlambert_frag:U2,meshmatcap_vert:N2,meshmatcap_frag:L2,meshnormal_vert:I2,meshnormal_frag:O2,meshphong_vert:P2,meshphong_frag:B2,meshphysical_vert:z2,meshphysical_frag:F2,meshtoon_vert:V2,meshtoon_frag:H2,points_vert:G2,points_frag:k2,shadow_vert:X2,shadow_frag:W2,sprite_vert:q2,sprite_frag:Y2},gt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Zi={basic:{uniforms:yn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:yn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:yn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:yn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:yn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:yn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:yn([gt.points,gt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:yn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:yn([gt.common,gt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:yn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:yn([gt.sprite,gt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:yn([gt.common,gt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:yn([gt.lights,gt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Zi.physical={uniforms:yn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var td={r:0,b:0,g:0},Z2=new De,ab=new Bt;ab.set(-1,0,0,0,1,0,0,0,1);function J2(e,t,n,i,s,a){let r=new kt(0),o=s===!0?0:1,l,c,f=null,p=0,u=null;function d(m){let S=m.isScene===!0?m.background:null;if(S&&S.isTexture){let v=m.backgroundBlurriness>0;S=t.get(S,v)}return S}function _(m){let S=!1,v=d(m);v===null?g(r,o):v&&v.isColor&&(g(v,1),S=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(m,S){let v=d(S);v&&(v.isCubeTexture||v.mapping===lc)?(c===void 0&&(c=new ze(new Qn(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:er(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Z2.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ab),c.material.toneMapped=ee.getTransfer(v.colorSpace)!==he,(f!==v||p!==v.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,f=v,p=v.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ze(new da(2,2),new jn({name:"BackgroundMaterial",uniforms:er(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ee.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||p!==v.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,f=v,p=v.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,S){m.getRGB(td,e0(e)),n.buffers.color.setClear(td.r,td.g,td.b,S,a)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,S=1){r.set(m),o=S,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:_,addToRenderList:M,dispose:h}}function K2(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(D,z,Q,$,H){let J=!1,k=p(D,$,Q,z);a!==k&&(a=k,c(a.object)),J=d(D,$,Q,H),J&&_(D,$,Q,H),H!==null&&t.update(H,e.ELEMENT_ARRAY_BUFFER),(J||r)&&(r=!1,v(D,z,Q,$),H!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return e.createVertexArray()}function c(D){return e.bindVertexArray(D)}function f(D){return e.deleteVertexArray(D)}function p(D,z,Q,$){let H=$.wireframe===!0,J=i[z.id];J===void 0&&(J={},i[z.id]=J);let k=D.isInstancedMesh===!0?D.id:0,nt=J[k];nt===void 0&&(nt={},J[k]=nt);let rt=nt[Q.id];rt===void 0&&(rt={},nt[Q.id]=rt);let mt=rt[H];return mt===void 0&&(mt=u(l()),rt[H]=mt),mt}function u(D){let z=[],Q=[],$=[];for(let H=0;H<n;H++)z[H]=0,Q[H]=0,$[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Q,attributeDivisors:$,object:D,attributes:{},index:null}}function d(D,z,Q,$){let H=a.attributes,J=z.attributes,k=0,nt=Q.getAttributes();for(let rt in nt)if(nt[rt].location>=0){let vt=H[rt],at=J[rt];if(at===void 0&&(rt==="instanceMatrix"&&D.instanceMatrix&&(at=D.instanceMatrix),rt==="instanceColor"&&D.instanceColor&&(at=D.instanceColor)),vt===void 0||vt.attribute!==at||at&&vt.data!==at.data)return!0;k++}return a.attributesNum!==k||a.index!==$}function _(D,z,Q,$){let H={},J=z.attributes,k=0,nt=Q.getAttributes();for(let rt in nt)if(nt[rt].location>=0){let vt=J[rt];vt===void 0&&(rt==="instanceMatrix"&&D.instanceMatrix&&(vt=D.instanceMatrix),rt==="instanceColor"&&D.instanceColor&&(vt=D.instanceColor));let at={};at.attribute=vt,vt&&vt.data&&(at.data=vt.data),H[rt]=at,k++}a.attributes=H,a.attributesNum=k,a.index=$}function M(){let D=a.newAttributes;for(let z=0,Q=D.length;z<Q;z++)D[z]=0}function g(D){h(D,0)}function h(D,z){let Q=a.newAttributes,$=a.enabledAttributes,H=a.attributeDivisors;Q[D]=1,$[D]===0&&(e.enableVertexAttribArray(D),$[D]=1),H[D]!==z&&(e.vertexAttribDivisor(D,z),H[D]=z)}function m(){let D=a.newAttributes,z=a.enabledAttributes;for(let Q=0,$=z.length;Q<$;Q++)z[Q]!==D[Q]&&(e.disableVertexAttribArray(Q),z[Q]=0)}function S(D,z,Q,$,H,J,k){k===!0?e.vertexAttribIPointer(D,z,Q,H,J):e.vertexAttribPointer(D,z,Q,$,H,J)}function v(D,z,Q,$){M();let H=$.attributes,J=Q.getAttributes(),k=z.defaultAttributeValues;for(let nt in J){let rt=J[nt];if(rt.location>=0){let mt=H[nt];if(mt===void 0&&(nt==="instanceMatrix"&&D.instanceMatrix&&(mt=D.instanceMatrix),nt==="instanceColor"&&D.instanceColor&&(mt=D.instanceColor)),mt!==void 0){let vt=mt.normalized,at=mt.itemSize,Nt=t.get(mt);if(Nt===void 0)continue;let ue=Nt.buffer,Jt=Nt.type,j=Nt.bytesPerElement,ct=Jt===e.INT||Jt===e.UNSIGNED_INT||mt.gpuType===mf;if(mt.isInterleavedBufferAttribute){let st=mt.data,Ct=st.stride,Rt=mt.offset;if(st.isInstancedInterleavedBuffer){for(let Mt=0;Mt<rt.locationSize;Mt++)h(rt.location+Mt,st.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Mt=0;Mt<rt.locationSize;Mt++)g(rt.location+Mt);e.bindBuffer(e.ARRAY_BUFFER,ue);for(let Mt=0;Mt<rt.locationSize;Mt++)S(rt.location+Mt,at/rt.locationSize,Jt,vt,Ct*j,(Rt+at/rt.locationSize*Mt)*j,ct)}else{if(mt.isInstancedBufferAttribute){for(let st=0;st<rt.locationSize;st++)h(rt.location+st,mt.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let st=0;st<rt.locationSize;st++)g(rt.location+st);e.bindBuffer(e.ARRAY_BUFFER,ue);for(let st=0;st<rt.locationSize;st++)S(rt.location+st,at/rt.locationSize,Jt,vt,at*j,at/rt.locationSize*st*j,ct)}}else if(k!==void 0){let vt=k[nt];if(vt!==void 0)switch(vt.length){case 2:e.vertexAttrib2fv(rt.location,vt);break;case 3:e.vertexAttrib3fv(rt.location,vt);break;case 4:e.vertexAttrib4fv(rt.location,vt);break;default:e.vertexAttrib1fv(rt.location,vt)}}}}m()}function E(){T();for(let D in i){let z=i[D];for(let Q in z){let $=z[Q];for(let H in $){let J=$[H];for(let k in J)f(J[k].object),delete J[k];delete $[H]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;let z=i[D.id];for(let Q in z){let $=z[Q];for(let H in $){let J=$[H];for(let k in J)f(J[k].object),delete J[k];delete $[H]}}delete i[D.id]}function w(D){for(let z in i){let Q=i[z];for(let $ in Q){let H=Q[$];if(H[D.id]===void 0)continue;let J=H[D.id];for(let k in J)f(J[k].object),delete J[k];delete H[D.id]}}}function x(D){for(let z in i){let Q=i[z],$=D.isInstancedMesh===!0?D.id:0,H=Q[$];if(H!==void 0){for(let J in H){let k=H[J];for(let nt in k)f(k[nt].object),delete k[nt];delete H[J]}delete Q[$],Object.keys(Q).length===0&&delete i[z]}}}function T(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:g,disableUnusedAttributes:m}}function Q2(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,f){f!==0&&(e.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function j2(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==_i&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let x=w===Wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==On&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ri&&!x)}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(Ut("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:m,maxVaryings:S,maxFragmentUniforms:v,maxSamples:E,samples:A}}function $2(e){let t=this,n=null,i=0,s=!1,a=!1,r=new mi,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=f(p,u,0)},this.setState=function(p,u,d){let _=p.clippingPlanes,M=p.clipIntersection,g=p.clipShadows,h=e.get(p);if(!s||_===null||_.length===0||a&&!g)a?f(null):c();else{let m=a?0:i,S=m*4,v=h.clippingState||null;l.value=v,v=f(_,u,S,d);for(let E=0;E!==S;++E)v[E]=n[E];h.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(p,u,d,_){let M=p!==null?p.length:0,g=null;if(M!==0){if(g=l.value,_!==!0||g===null){let h=d+M*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<h)&&(g=new Float32Array(h));for(let S=0,v=d;S!==M;++S,v+=4)r.copy(p[S]).applyMatrix4(m,o),r.normal.toArray(g,v),g[v+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}var Sa=4,PM=[.125,.215,.35,.446,.526,.582],nr=20,tC=256,gc=new Ao,BM=new kt,u0=null,h0=0,f0=0,d0=!1,eC=new P,nd=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=eC}=a;u0=this._renderer.getRenderTarget(),h0=this._renderer.getActiveCubeFace(),f0=this._renderer.getActiveMipmapLevel(),d0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=VM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=FM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(u0,h0,f0),this._renderer.xr.enabled=d0,t.scissorTest=!1,Uo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===_a||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),u0=this._renderer.getRenderTarget(),h0=this._renderer.getActiveCubeFace(),f0=this._renderer.getActiveMipmapLevel(),d0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Wi,format:_i,colorSpace:Gl,depthBuffer:!1},s=zM(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zM(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nC(a)),this._blurMaterial=sC(a,t,n),this._ggxMaterial=iC(a,t,n)}return s}_compileMaterial(t){let n=new ze(new In,t);this._renderer.compile(n,gc)}_sceneToCubeUV(t,n,i,s,a){let l=new dn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(BM),p.toneMapping=wi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new Qn,new Ts({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,g=M.material,h=!1,m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,h=!0):(g.color.copy(BM),h=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+f[S],a.y,a.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+f[S],a.z)):(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+f[S]));let E=this._cubeSize;Uo(s,v*E,S>2?E:0,E,E),p.setRenderTarget(s),h&&p.render(M,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=m}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===_a||t.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=VM()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=FM());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Uo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,gc)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),u=0+c*1.25,d=p*u,{_lodMax:_}=this,M=this._sizeLods[i],g=3*M*(i>_-Sa?i-_+Sa:0),h=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=_-n,Uo(a,g,h,3*M,2*M),s.setRenderTarget(a),s.render(o,gc),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=_-i,Uo(t,g,h,3*M,2*M),s.setRenderTarget(t),s.render(o,gc)}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");let f=3,p=this._lodMeshes[s];p.material=c;let u=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*nr-1),M=a/_,g=isFinite(a)?1+Math.floor(f*M):nr;g>nr&&Ut(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${nr}`);let h=[],m=0;for(let w=0;w<nr;++w){let x=w/M,T=Math.exp(-x*x/2);h.push(T),w===0?m+=T:w<g&&(m+=2*T)}for(let w=0;w<h.length;w++)h[w]=h[w]/m;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=h,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:S}=this;u.dTheta.value=_,u.mipInt.value=S-i;let v=this._sizeLods[s],E=3*v*(s>S-Sa?s-S+Sa:0),A=4*(this._cubeSize-v);Uo(n,E,A,3*v,2*v),l.setRenderTarget(n),l.render(p,gc)}};function nC(e){let t=[],n=[],i=[],s=e,a=e-Sa+1+PM.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);t.push(o);let l=1/o;r>e-Sa?l=PM[r-e+Sa-1]:r===0&&(l=0),n.push(l);let c=1/(o-2),f=-c,p=1+c,u=[f,f,p,f,p,p,f,f,p,p,f,p],d=6,_=6,M=3,g=2,h=1,m=new Float32Array(M*_*d),S=new Float32Array(g*_*d),v=new Float32Array(h*_*d);for(let A=0;A<d;A++){let w=A%3*2/3-1,x=A>2?0:-1,T=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];m.set(T,M*_*A),S.set(u,g*_*A);let R=[A,A,A,A,A,A];v.set(R,h*_*A)}let E=new In;E.setAttribute("position",new Jn(m,M)),E.setAttribute("uv",new Jn(S,g)),E.setAttribute("faceIndex",new Jn(v,h)),i.push(new ze(E,null)),s>Sa&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function zM(e,t,n){let i=new Kn(e,t,n);return i.texture.mapping=lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uo(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function iC(e,t,n){return new jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tC,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ad(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function sC(e,t,n){let i=new Float32Array(nr),s=new P(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ad(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function FM(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ad(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function VM(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function ad(){return`

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
	`}var id=class extends Kn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ql(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qn(5,5,5),a=new jn({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:Xi});a.uniforms.tEquirect.value=n;let r=new ze(s,a),o=n.minFilter;return n.minFilter===va&&(n.minFilter=pn),new cf(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};function aC(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===ff||d===df)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let M=new id(_.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let d=u.mapping,_=d===ff||d===df,M=d===_a||d===tr;if(_||M){let g=n.get(u),h=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new nd(e)),g=_?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let m=u.image;return _&&m&&m.height>0||M&&m&&l(m)?(i===null&&(i=new nd(e)),g=_?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function o(u,d){return d===ff?u.mapping=_a:d===df&&(u.mapping=tr),u}function l(u){let d=0,_=6;for(let M=0;M<_;M++)u[M]!==void 0&&d++;return d===_}function c(u){let d=u.target;d.removeEventListener("dispose",c);let _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let _=n.get(d);_!==void 0&&(n.delete(d),_.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function rC(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Ja("WebGLRenderer: "+i+" extension not supported."),s}}}function oC(e,t,n,i){let s={},a=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",r),delete s[u.id];let d=a.get(u);d&&(t.remove(d),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){let u=[],d=p.index,_=p.attributes.position,M=0;if(_===void 0)return;if(d!==null){let m=d.array;M=d.version;for(let S=0,v=m.length;S<v;S+=3){let E=m[S+0],A=m[S+1],w=m[S+2];u.push(E,A,A,w,w,E)}}else{let m=_.array;M=_.version;for(let S=0,v=m.length/3-1;S<v;S+=3){let E=S+0,A=S+1,w=S+2;u.push(E,A,A,w,w,E)}}let g=new(_.count>=65535?Jl:Zl)(u,1);g.version=M;let h=a.get(p);h&&t.remove(h),a.set(p,g)}function f(p){let u=a.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function lC(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,a,p*r,d),n.update(u,i,d))}function f(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let M=0;for(let g=0;g<d;g++)M+=u[g];n.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function cC(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Lt("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function uC(e,t,n){let i=new WeakMap,s=new Le;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==p){let T=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],S=0;d===!0&&(S=1),_===!0&&(S=2),M===!0&&(S=3);let v=o.attributes.position.count*S,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*E*4*p),w=new Wl(A,v,E,p);w.type=Ri,w.needsUpdate=!0;let x=S*4;for(let R=0;R<p;R++){let D=g[R],z=h[R],Q=m[R],$=v*E*4*R;for(let H=0;H<D.count;H++){let J=H*x;d===!0&&(s.fromBufferAttribute(D,H),A[$+J+0]=s.x,A[$+J+1]=s.y,A[$+J+2]=s.z,A[$+J+3]=0),_===!0&&(s.fromBufferAttribute(z,H),A[$+J+4]=s.x,A[$+J+5]=s.y,A[$+J+6]=s.z,A[$+J+7]=0),M===!0&&(s.fromBufferAttribute(Q,H),A[$+J+8]=s.x,A[$+J+9]=s.y,A[$+J+10]=s.z,A[$+J+11]=Q.itemSize===4?s.w:1)}}u={count:p,texture:w,size:new Gt(v,E)},i.set(o,u),o.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function hC(e,t,n,i,s){let a=new WeakMap;function r(c){let f=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==f&&(t.update(u),a.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==f&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==f&&(d.update(),a.set(d,f))}return u}function o(){a=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:r,dispose:o}}var fC={[Bg]:"LINEAR_TONE_MAPPING",[zg]:"REINHARD_TONE_MAPPING",[Fg]:"CINEON_TONE_MAPPING",[Vg]:"ACES_FILMIC_TONE_MAPPING",[Gg]:"AGX_TONE_MAPPING",[kg]:"NEUTRAL_TONE_MAPPING",[Hg]:"CUSTOM_TONE_MAPPING"};function dC(e,t,n,i,s,a){let r=new Kn(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,depthTexture:s?new As(t,n):void 0}),o=new Kn(t,n,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),l=new In;l.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ke([0,2,0,0,2,0],2));let c=new Zh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ze(l,c),p=new Ao(-1,1,1,-1,0,1),u=null,d=null,_=!1,M,g=null,h=[],m=!1;this.setSize=function(S,v){r.setSize(S,v),o.setSize(S,v);for(let E=0;E<h.length;E++){let A=h[E];A.setSize&&A.setSize(S,v)}},this.setEffects=function(S){h=S,m=h.length>0&&h[0].isRenderPass===!0;let v=r.width,E=r.height;for(let A=0;A<h.length;A++){let w=h[A];w.setSize&&w.setSize(v,E)}},this.begin=function(S,v){if(_||S.toneMapping===wi&&h.length===0)return!1;if(g=v,v!==null){let E=v.width,A=v.height;(r.width!==E||r.height!==A)&&this.setSize(E,A)}return m===!1&&S.setRenderTarget(r),M=S.toneMapping,S.toneMapping=wi,!0},this.hasRenderPass=function(){return m},this.end=function(S,v){S.toneMapping=M,_=!0;let E=r,A=o;for(let w=0;w<h.length;w++){let x=h[w];if(x.enabled!==!1&&(x.render(S,A,E,v),x.needsSwap!==!1)){let T=E;E=A,A=T}}if(u!==S.outputColorSpace||d!==S.toneMapping){u=S.outputColorSpace,d=S.toneMapping,c.defines={},ee.getTransfer(u)===he&&(c.defines.SRGB_TRANSFER="");let w=fC[d];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(g),S.render(f,p),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),c.dispose()}}var rb=new Tn,g0=new As(1,1),ob=new Wl,lb=new Hh,cb=new Ql,HM=[],GM=[],kM=new Float32Array(16),XM=new Float32Array(9),WM=new Float32Array(4);function Lo(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=HM[s];if(a===void 0&&(a=new Float32Array(s),HM[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function je(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function $e(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function rd(e,t){let n=GM[t];n===void 0&&(n=new Int32Array(t),GM[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function pC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function mC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2fv(this.addr,t),$e(n,t)}}function gC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(je(n,t))return;e.uniform3fv(this.addr,t),$e(n,t)}}function _C(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4fv(this.addr,t),$e(n,t)}}function vC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),$e(n,t)}else{if(je(n,i))return;WM.set(i),e.uniformMatrix2fv(this.addr,!1,WM),$e(n,i)}}function xC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),$e(n,t)}else{if(je(n,i))return;XM.set(i),e.uniformMatrix3fv(this.addr,!1,XM),$e(n,i)}}function yC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),$e(n,t)}else{if(je(n,i))return;kM.set(i),e.uniformMatrix4fv(this.addr,!1,kM),$e(n,i)}}function SC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function MC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2iv(this.addr,t),$e(n,t)}}function bC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3iv(this.addr,t),$e(n,t)}}function EC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4iv(this.addr,t),$e(n,t)}}function TC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function AC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2uiv(this.addr,t),$e(n,t)}}function wC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3uiv(this.addr,t),$e(n,t)}}function CC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4uiv(this.addr,t),$e(n,t)}}function RC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(g0.compareFunction=n.isReversedDepthBuffer()?$f:jf,a=g0):a=rb,n.setTexture2D(t||a,s)}function DC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||lb,s)}function UC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||cb,s)}function NC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||ob,s)}function LC(e){switch(e){case 5126:return pC;case 35664:return mC;case 35665:return gC;case 35666:return _C;case 35674:return vC;case 35675:return xC;case 35676:return yC;case 5124:case 35670:return SC;case 35667:case 35671:return MC;case 35668:case 35672:return bC;case 35669:case 35673:return EC;case 5125:return TC;case 36294:return AC;case 36295:return wC;case 36296:return CC;case 35678:case 36198:case 36298:case 36306:case 35682:return RC;case 35679:case 36299:case 36307:return DC;case 35680:case 36300:case 36308:case 36293:return UC;case 36289:case 36303:case 36311:case 36292:return NC}}function IC(e,t){e.uniform1fv(this.addr,t)}function OC(e,t){let n=Lo(t,this.size,2);e.uniform2fv(this.addr,n)}function PC(e,t){let n=Lo(t,this.size,3);e.uniform3fv(this.addr,n)}function BC(e,t){let n=Lo(t,this.size,4);e.uniform4fv(this.addr,n)}function zC(e,t){let n=Lo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function FC(e,t){let n=Lo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function VC(e,t){let n=Lo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function HC(e,t){e.uniform1iv(this.addr,t)}function GC(e,t){e.uniform2iv(this.addr,t)}function kC(e,t){e.uniform3iv(this.addr,t)}function XC(e,t){e.uniform4iv(this.addr,t)}function WC(e,t){e.uniform1uiv(this.addr,t)}function qC(e,t){e.uniform2uiv(this.addr,t)}function YC(e,t){e.uniform3uiv(this.addr,t)}function ZC(e,t){e.uniform4uiv(this.addr,t)}function JC(e,t,n){let i=this.cache,s=t.length,a=rd(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=g0:r=rb;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function KC(e,t,n){let i=this.cache,s=t.length,a=rd(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||lb,a[r])}function QC(e,t,n){let i=this.cache,s=t.length,a=rd(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||cb,a[r])}function jC(e,t,n){let i=this.cache,s=t.length,a=rd(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||ob,a[r])}function $C(e){switch(e){case 5126:return IC;case 35664:return OC;case 35665:return PC;case 35666:return BC;case 35674:return zC;case 35675:return FC;case 35676:return VC;case 5124:case 35670:return HC;case 35667:case 35671:return GC;case 35668:case 35672:return kC;case 35669:case 35673:return XC;case 5125:return WC;case 36294:return qC;case 36295:return YC;case 36296:return ZC;case 35678:case 36198:case 36298:case 36306:case 35682:return JC;case 35679:case 36299:case 36307:return KC;case 35680:case 36300:case 36308:case 36293:return QC;case 36289:case 36303:case 36311:case 36292:return jC}}var _0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=LC(n.type)}},v0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=$C(n.type)}},x0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},p0=/(\w+)(\])?(\[|\.)?/g;function qM(e,t){e.seq.push(t),e.map[t.id]=t}function tR(e,t,n){let i=e.name,s=i.length;for(p0.lastIndex=0;;){let a=p0.exec(i),r=p0.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){qM(n,c===void 0?new _0(o,e,t):new v0(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new x0(o),qM(n,p)),n=p}}}var No=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);tR(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function YM(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var eR=37297,nR=0;function iR(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var ZM=new Bt;function sR(e){ee._getMatrix(ZM,ee.workingColorSpace,e);let t=`mat3( ${ZM.elements.map(n=>n.toFixed(4))} )`;switch(ee.getTransfer(e)){case kl:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function JM(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+iR(e.getShaderSource(t),o)}else return a}function aR(e,t){let n=sR(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var rR={[Bg]:"Linear",[zg]:"Reinhard",[Fg]:"Cineon",[Vg]:"ACESFilmic",[Gg]:"AgX",[kg]:"Neutral",[Hg]:"Custom"};function oR(e,t){let n=rR[t];return n===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var ed=new P;function lR(){ee.getLuminanceCoefficients(ed);let e=ed.x.toFixed(4),t=ed.y.toFixed(4),n=ed.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cR(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vc).join(`
`)}function uR(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function hR(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function vc(e){return e!==""}function KM(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function QM(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var fR=/^[ \t]*#include +<([\w\d./]+)>/gm;function y0(e){return e.replace(fR,pR)}var dR=new Map;function pR(e,t){let n=Xt[t];if(n===void 0){let i=dR.get(t);if(i!==void 0)n=Xt[i],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return y0(n)}var mR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jM(e){return e.replace(mR,gR)}function gR(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function $M(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var _R={[$a]:"SHADOWMAP_TYPE_PCF",[wo]:"SHADOWMAP_TYPE_VSM"};function vR(e){return _R[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xR={[_a]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[lc]:"ENVMAP_TYPE_CUBE_UV"};function yR(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":xR[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var SR={[tr]:"ENVMAP_MODE_REFRACTION"};function MR(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":SR[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var bR={[Pg]:"ENVMAP_BLENDING_MULTIPLY",[vM]:"ENVMAP_BLENDING_MIX",[xM]:"ENVMAP_BLENDING_ADD"};function ER(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":bR[e.combine]||"ENVMAP_BLENDING_NONE"}function TR(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function AR(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=vR(n),c=yR(n),f=MR(n),p=ER(n),u=TR(n),d=cR(n),_=uR(a),M=s.createProgram(),g,h,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(vc).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(vc).join(`
`),h.length>0&&(h+=`
`)):(g=[$M(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vc).join(`
`),h=[$M(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wi?"#define TONE_MAPPING":"",n.toneMapping!==wi?Xt.tonemapping_pars_fragment:"",n.toneMapping!==wi?oR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,aR("linearToOutputTexel",n.outputColorSpace),lR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vc).join(`
`)),r=y0(r),r=KM(r,n),r=QM(r,n),o=y0(o),o=KM(o,n),o=QM(o,n),r=jM(r),o=jM(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===jg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let S=m+g+r,v=m+h+o,E=YM(s,s.VERTEX_SHADER,S),A=YM(s,s.FRAGMENT_SHADER,v);s.attachShader(M,E),s.attachShader(M,A),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(D){if(e.debug.checkShaderErrors){let z=s.getProgramInfoLog(M)||"",Q=s.getShaderInfoLog(E)||"",$=s.getShaderInfoLog(A)||"",H=z.trim(),J=Q.trim(),k=$.trim(),nt=!0,rt=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(nt=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,M,E,A);else{let mt=JM(s,E,"vertex"),vt=JM(s,A,"fragment");Lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+mt+`
`+vt)}else H!==""?Ut("WebGLProgram: Program Info Log:",H):(J===""||k==="")&&(rt=!1);rt&&(D.diagnostics={runnable:nt,programLog:H,vertexShader:{log:J,prefix:g},fragmentShader:{log:k,prefix:h}})}s.deleteShader(E),s.deleteShader(A),x=new No(s,M),T=hR(s,M)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,eR)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nR++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=A,this}var wR=0,S0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new M0(t),n.set(t,i)),i}},M0=class{constructor(t){this.id=wR++,this.code=t,this.usedTimes=0}};function CR(e){return e===ya||e===pc||e===mc}function RR(e,t,n,i,s,a){let r=new xo,o=new S0,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,T,R,D,z,Q){let $=D.fog,H=z.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,nt=t.get(x.envMap||J,k),rt=nt&&nt.mapping===lc?nt.image.height:null,mt=d[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Ut("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let vt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,at=vt!==void 0?vt.length:0,Nt=0;H.morphAttributes.position!==void 0&&(Nt=1),H.morphAttributes.normal!==void 0&&(Nt=2),H.morphAttributes.color!==void 0&&(Nt=3);let ue,Jt,j,ct;if(mt){let ut=Zi[mt];ue=ut.vertexShader,Jt=ut.fragmentShader}else{ue=x.vertexShader,Jt=x.fragmentShader;let ut=o.getVertexShaderStage(x),se=o.getFragmentShaderStage(x);o.update(x,ut,se),j=ut.id,ct=se.id}let st=e.getRenderTarget(),Ct=e.state.buffers.depth.getReversed(),Rt=z.isInstancedMesh===!0,Mt=z.isBatchedMesh===!0,Ee=!!x.map,zt=!!x.matcap,qt=!!nt,Ot=!!x.aoMap,Yt=!!x.lightMap,jt=!!x.bumpMap&&x.wireframe===!1,Zt=!!x.normalMap,Ie=!!x.displacementMap,Xe=!!x.emissiveMap,_e=!!x.metalnessMap,re=!!x.roughnessMap,N=x.anisotropy>0,tn=x.clearcoat>0,oe=x.dispersion>0,C=x.iridescence>0,y=x.sheen>0,B=x.transmission>0,G=N&&!!x.anisotropyMap,Y=tn&&!!x.clearcoatMap,lt=tn&&!!x.clearcoatNormalMap,ht=tn&&!!x.clearcoatRoughnessMap,Z=C&&!!x.iridescenceMap,tt=C&&!!x.iridescenceThicknessMap,dt=y&&!!x.sheenColorMap,Et=y&&!!x.sheenRoughnessMap,pt=!!x.specularMap,ft=!!x.specularColorMap,Tt=!!x.specularIntensityMap,Dt=B&&!!x.transmissionMap,Pt=B&&!!x.thicknessMap,U=!!x.gradientMap,I=!!x.alphaMap,L=x.alphaTest>0,q=!!x.alphaHash,it=!!x.extensions,W=wi;x.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(W=e.toneMapping);let K={shaderID:mt,shaderType:x.type,shaderName:x.name,vertexShader:ue,fragmentShader:Jt,defines:x.defines,customVertexShaderID:j,customFragmentShaderID:ct,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Mt,batchingColor:Mt&&z._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&z.instanceColor!==null,instancingMorph:Rt&&z.morphTexture!==null,outputColorSpace:st===null?e.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ee,matcap:zt,envMap:qt,envMapMode:qt&&nt.mapping,envMapCubeUVHeight:rt,aoMap:Ot,lightMap:Yt,bumpMap:jt,normalMap:Zt,displacementMap:Ie,emissiveMap:Xe,normalMapObjectSpace:Zt&&x.normalMapType===MM,normalMapTangentSpace:Zt&&x.normalMapType===Qf,packedNormalMap:Zt&&x.normalMapType===Qf&&CR(x.normalMap.format),metalnessMap:_e,roughnessMap:re,anisotropy:N,anisotropyMap:G,clearcoat:tn,clearcoatMap:Y,clearcoatNormalMap:lt,clearcoatRoughnessMap:ht,dispersion:oe,iridescence:C,iridescenceMap:Z,iridescenceThicknessMap:tt,sheen:y,sheenColorMap:dt,sheenRoughnessMap:Et,specularMap:pt,specularColorMap:ft,specularIntensityMap:Tt,transmission:B,transmissionMap:Dt,thicknessMap:Pt,gradientMap:U,opaque:x.transparent===!1&&x.blending===Ka&&x.alphaToCoverage===!1,alphaMap:I,alphaTest:L,alphaHash:q,combine:x.combine,mapUv:Ee&&_(x.map.channel),aoMapUv:Ot&&_(x.aoMap.channel),lightMapUv:Yt&&_(x.lightMap.channel),bumpMapUv:jt&&_(x.bumpMap.channel),normalMapUv:Zt&&_(x.normalMap.channel),displacementMapUv:Ie&&_(x.displacementMap.channel),emissiveMapUv:Xe&&_(x.emissiveMap.channel),metalnessMapUv:_e&&_(x.metalnessMap.channel),roughnessMapUv:re&&_(x.roughnessMap.channel),anisotropyMapUv:G&&_(x.anisotropyMap.channel),clearcoatMapUv:Y&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:lt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(x.sheenRoughnessMap.channel),specularMapUv:pt&&_(x.specularMap.channel),specularColorMapUv:ft&&_(x.specularColorMap.channel),specularIntensityMapUv:Tt&&_(x.specularIntensityMap.channel),transmissionMapUv:Dt&&_(x.transmissionMap.channel),thicknessMapUv:Pt&&_(x.thicknessMap.channel),alphaMapUv:I&&_(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Zt||N),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(Ee||I),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&Zt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ct,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Nt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:W,decodeVideoTexture:Ee&&x.map.isVideoTexture===!0&&ee.getTransfer(x.map.colorSpace)===he,decodeVideoTextureEmissive:Xe&&x.emissiveMap.isVideoTexture===!0&&ee.getTransfer(x.emissiveMap.colorSpace)===he,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gi,flipSided:x.side===An,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return K.vertexUv1s=l.has(1),K.vertexUv2s=l.has(2),K.vertexUv3s=l.has(3),l.clear(),K}function g(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(h(T,x),m(T,x),T.push(e.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function h(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function m(x,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),T.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function S(x){let T=d[x.type],R;if(T){let D=Zi[T];R=IM.clone(D.uniforms)}else R=x.uniforms;return R}function v(x,T){let R=f.get(T);return R!==void 0?++R.usedTimes:(R=new AR(e,T,x,s),c.push(R),f.set(T,R)),R}function E(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function w(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:S,acquireProgram:v,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:w}}function DR(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function UR(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function tb(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function eb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,_,M,g,h){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:_,materialVariant:r(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:h},e[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=_,m.materialVariant=r(u),m.groupOrder=M,m.renderOrder=u.renderOrder,m.z=g,m.group=h),t++,m}function l(u,d,_,M,g,h){let m=o(u,d,_,M,g,h);_.transmission>0?i.push(m):_.transparent===!0?s.push(m):n.push(m)}function c(u,d,_,M,g,h){let m=o(u,d,_,M,g,h);_.transmission>0?i.unshift(m):_.transparent===!0?s.unshift(m):n.unshift(m)}function f(u,d,_){n.length>1&&n.sort(u||UR),i.length>1&&i.sort(d||tb),s.length>1&&s.sort(d||tb),_&&(n.reverse(),i.reverse(),s.reverse())}function p(){for(let u=t,d=e.length;u<d;u++){let _=e[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:f}}function NR(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new eb,e.set(i,[r])):s>=a.length?(r=new eb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function LR(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new P,color:new kt};break;case"SpotLight":n={position:new P,direction:new P,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new kt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":n={color:new kt,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=n,n}}}function IR(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var OR=0;function PR(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function BR(e){let t=new LR,n=IR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,a=new De,r=new De;function o(c){let f=0,p=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,_=0,M=0,g=0,h=0,m=0,S=0,v=0,E=0,A=0,w=0;c.sort(PR);for(let T=0,R=c.length;T<R;T++){let D=c[T],z=D.color,Q=D.intensity,$=D.distance,H=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ya?H=D.shadow.map.texture:H=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=z.r*Q,p+=z.g*Q,u+=z.b*Q;else if(D.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(D.sh.coefficients[J],Q);w++}else if(D.isDirectionalLight){let J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let k=D.shadow,nt=n.get(D);nt.shadowIntensity=k.intensity,nt.shadowBias=k.bias,nt.shadowNormalBias=k.normalBias,nt.shadowRadius=k.radius,nt.shadowMapSize=k.mapSize,i.directionalShadow[d]=nt,i.directionalShadowMap[d]=H,i.directionalShadowMatrix[d]=D.shadow.matrix,m++}i.directional[d]=J,d++}else if(D.isSpotLight){let J=t.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(z).multiplyScalar(Q),J.distance=$,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,i.spot[M]=J;let k=D.shadow;if(D.map&&(i.spotLightMap[E]=D.map,E++,k.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[M]=k.matrix,D.castShadow){let nt=n.get(D);nt.shadowIntensity=k.intensity,nt.shadowBias=k.bias,nt.shadowNormalBias=k.normalBias,nt.shadowRadius=k.radius,nt.shadowMapSize=k.mapSize,i.spotShadow[M]=nt,i.spotShadowMap[M]=H,v++}M++}else if(D.isRectAreaLight){let J=t.get(D);J.color.copy(z).multiplyScalar(Q),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=J,g++}else if(D.isPointLight){let J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),J.distance=D.distance,J.decay=D.decay,D.castShadow){let k=D.shadow,nt=n.get(D);nt.shadowIntensity=k.intensity,nt.shadowBias=k.bias,nt.shadowNormalBias=k.normalBias,nt.shadowRadius=k.radius,nt.shadowMapSize=k.mapSize,nt.shadowCameraNear=k.camera.near,nt.shadowCameraFar=k.camera.far,i.pointShadow[_]=nt,i.pointShadowMap[_]=H,i.pointShadowMatrix[_]=D.shadow.matrix,S++}i.point[_]=J,_++}else if(D.isHemisphereLight){let J=t.get(D);J.skyColor.copy(D.color).multiplyScalar(Q),J.groundColor.copy(D.groundColor).multiplyScalar(Q),i.hemi[h]=J,h++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;let x=i.hash;(x.directionalLength!==d||x.pointLength!==_||x.spotLength!==M||x.rectAreaLength!==g||x.hemiLength!==h||x.numDirectionalShadows!==m||x.numPointShadows!==S||x.numSpotShadows!==v||x.numSpotMaps!==E||x.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=M,i.rectArea.length=g,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=v+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,x.directionalLength=d,x.pointLength=_,x.spotLength=M,x.rectAreaLength=g,x.hemiLength=h,x.numDirectionalShadows=m,x.numPointShadows=S,x.numSpotShadows=v,x.numSpotMaps=E,x.numLightProbes=w,i.version=OR++)}function l(c,f){let p=0,u=0,d=0,_=0,M=0,g=f.matrixWorldInverse;for(let h=0,m=c.length;h<m;h++){let S=c[h];if(S.isDirectionalLight){let v=i.directional[p];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),p++}else if(S.isSpotLight){let v=i.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(S.isRectAreaLight){let v=i.rectArea[_];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),r.identity(),a.copy(S.matrixWorld),a.premultiply(g),r.extractRotation(a),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),_++}else if(S.isPointLight){let v=i.point[u];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),u++}else if(S.isHemisphereLight){let v=i.hemi[M];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(g),M++}}}return{setup:o,setupView:l,state:i}}function nb(e){let t=new BR(e),n=[],i=[],s=[];function a(u){p.camera=u,n.length=0,i.length=0,s.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(n)}function f(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:c,setupLightsView:f,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function zR(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new nb(e),t.set(s,[o])):a>=r.length?(o=new nb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var FR=`void main() {
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
}`,HR=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],GR=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],ib=new De,_c=new P,m0=new P;function kR(e,t,n){let i=new Mo,s=new Gt,a=new Gt,r=new Le,o=new Jh,l=new Kh,c={},f=n.maxTextureSize,p={[Ms]:An,[An]:Ms,[gi]:gi},u=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:FR,fragmentShader:VR}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let _=new In;_.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ze(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$a;let h=this.type;this.render=function(A,w,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===$S&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=$a);let T=e.getRenderTarget(),R=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),z=e.state;z.setBlending(Xi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let Q=h!==this.type;Q&&w.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(H=>H.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,H=A.length;$<H;$++){let J=A[$],k=J.shadow;if(k===void 0){Ut("WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let nt=k.getFrameExtents();s.multiply(nt),a.copy(k.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/nt.x),s.x=a.x*nt.x,k.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/nt.y),s.y=a.y*nt.y,k.mapSize.y=a.y));let rt=e.state.buffers.depth.getReversed();if(k.camera._reversedDepth=rt,k.map===null||Q===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===wo){if(J.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Kn(s.x,s.y,{format:ya,type:Wi,minFilter:pn,magFilter:pn,generateMipmaps:!1}),k.map.texture.name=J.name+".shadowMap",k.map.depthTexture=new As(s.x,s.y,Ri),k.map.depthTexture.name=J.name+".shadowMapDepth",k.map.depthTexture.format=Hi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=rn,k.map.depthTexture.magFilter=rn}else J.isPointLight?(k.map=new id(s.x),k.map.depthTexture=new qh(s.x,Ci)):(k.map=new Kn(s.x,s.y),k.map.depthTexture=new As(s.x,s.y,Ci)),k.map.depthTexture.name=J.name+".shadowMap",k.map.depthTexture.format=Hi,this.type===$a?(k.map.depthTexture.compareFunction=rt?$f:jf,k.map.depthTexture.minFilter=pn,k.map.depthTexture.magFilter=pn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=rn,k.map.depthTexture.magFilter=rn);k.camera.updateProjectionMatrix()}let mt=k.map.isWebGLCubeRenderTarget?6:1;for(let vt=0;vt<mt;vt++){if(k.map.isWebGLCubeRenderTarget)e.setRenderTarget(k.map,vt),e.clear();else{vt===0&&(e.setRenderTarget(k.map),e.clear());let at=k.getViewport(vt);r.set(a.x*at.x,a.y*at.y,a.x*at.z,a.y*at.w),z.viewport(r)}if(J.isPointLight){let at=k.camera,Nt=k.matrix,ue=J.distance||at.far;ue!==at.far&&(at.far=ue,at.updateProjectionMatrix()),_c.setFromMatrixPosition(J.matrixWorld),at.position.copy(_c),m0.copy(at.position),m0.add(HR[vt]),at.up.copy(GR[vt]),at.lookAt(m0),at.updateMatrixWorld(),Nt.makeTranslation(-_c.x,-_c.y,-_c.z),ib.multiplyMatrices(at.projectionMatrix,at.matrixWorldInverse),k._frustum.setFromProjectionMatrix(ib,at.coordinateSystem,at.reversedDepth)}else k.updateMatrices(J);i=k.getFrustum(),v(w,x,k.camera,J,this.type)}k.isPointLightShadow!==!0&&this.type===wo&&m(k,x),k.needsUpdate=!1}h=this.type,g.needsUpdate=!1,e.setRenderTarget(T,R,D)};function m(A,w){let x=t.update(M);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Kn(s.x,s.y,{format:ya,type:Wi})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(w,null,x,u,M,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(w,null,x,d,M,null)}function S(A,w,x,T){let R=null,D=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)R=D;else if(R=x.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let z=R.uuid,Q=w.uuid,$=c[z];$===void 0&&($={},c[z]=$);let H=$[Q];H===void 0&&(H=R.clone(),$[Q]=H,w.addEventListener("dispose",E)),R=H}if(R.visible=w.visible,R.wireframe=w.wireframe,T===wo?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:p[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let z=e.properties.get(R);z.light=x}return R}function v(A,w,x,T,R){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&R===wo)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);let Q=t.update(A),$=A.material;if(Array.isArray($)){let H=Q.groups;for(let J=0,k=H.length;J<k;J++){let nt=H[J],rt=$[nt.materialIndex];if(rt&&rt.visible){let mt=S(A,rt,T,R);A.onBeforeShadow(e,A,w,x,Q,mt,nt),e.renderBufferDirect(x,null,Q,mt,A,nt),A.onAfterShadow(e,A,w,x,Q,mt,nt)}}}else if($.visible){let H=S(A,$,T,R);A.onBeforeShadow(e,A,w,x,Q,H,null),e.renderBufferDirect(x,null,Q,H,A,null),A.onAfterShadow(e,A,w,x,Q,H,null)}}let z=A.children;for(let Q=0,$=z.length;Q<$;Q++)v(z[Q],w,x,T,R)}function E(A){A.target.removeEventListener("dispose",E);for(let x in c){let T=c[x],R=A.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function XR(e,t){function n(){let U=!1,I=new Le,L=null,q=new Le(0,0,0,0);return{setMask:function(it){L!==it&&!U&&(e.colorMask(it,it,it,it),L=it)},setLocked:function(it){U=it},setClear:function(it,W,K,ut,se){se===!0&&(it*=ut,W*=ut,K*=ut),I.set(it,W,K,ut),q.equals(I)===!1&&(e.clearColor(it,W,K,ut),q.copy(I))},reset:function(){U=!1,L=null,q.set(-1,0,0,0)}}}function i(){let U=!1,I=!1,L=null,q=null,it=null;return{setReversed:function(W){if(I!==W){let K=t.get("EXT_clip_control");W?K.clipControlEXT(K.LOWER_LEFT_EXT,K.ZERO_TO_ONE_EXT):K.clipControlEXT(K.LOWER_LEFT_EXT,K.NEGATIVE_ONE_TO_ONE_EXT),I=W;let ut=it;it=null,this.setClear(ut)}},getReversed:function(){return I},setTest:function(W){W?st(e.DEPTH_TEST):Ct(e.DEPTH_TEST)},setMask:function(W){L!==W&&!U&&(e.depthMask(W),L=W)},setFunc:function(W){if(I&&(W=NM[W]),q!==W){switch(W){case Rh:e.depthFunc(e.NEVER);break;case Dh:e.depthFunc(e.ALWAYS);break;case Uh:e.depthFunc(e.LESS);break;case Qa:e.depthFunc(e.LEQUAL);break;case Nh:e.depthFunc(e.EQUAL);break;case Lh:e.depthFunc(e.GEQUAL);break;case Ih:e.depthFunc(e.GREATER);break;case Oh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}q=W}},setLocked:function(W){U=W},setClear:function(W){it!==W&&(it=W,I&&(W=1-W),e.clearDepth(W))},reset:function(){U=!1,L=null,q=null,it=null,I=!1}}}function s(){let U=!1,I=null,L=null,q=null,it=null,W=null,K=null,ut=null,se=null;return{setTest:function($t){U||($t?st(e.STENCIL_TEST):Ct(e.STENCIL_TEST))},setMask:function($t){I!==$t&&!U&&(e.stencilMask($t),I=$t)},setFunc:function($t,ve,ei){(L!==$t||q!==ve||it!==ei)&&(e.stencilFunc($t,ve,ei),L=$t,q=ve,it=ei)},setOp:function($t,ve,ei){(W!==$t||K!==ve||ut!==ei)&&(e.stencilOp($t,ve,ei),W=$t,K=ve,ut=ei)},setLocked:function($t){U=$t},setClear:function($t){se!==$t&&(e.clearStencil($t),se=$t)},reset:function(){U=!1,I=null,L=null,q=null,it=null,W=null,K=null,ut=null,se=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,f={},p={},u={},d=new WeakMap,_=[],M=null,g=!1,h=null,m=null,S=null,v=null,E=null,A=null,w=null,x=new kt(0,0,0),T=0,R=!1,D=null,z=null,Q=null,$=null,H=null,J=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,nt=0,rt=e.getParameter(e.VERSION);rt.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(rt)[1]),k=nt>=1):rt.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),k=nt>=2);let mt=null,vt={},at=e.getParameter(e.SCISSOR_BOX),Nt=e.getParameter(e.VIEWPORT),ue=new Le().fromArray(at),Jt=new Le().fromArray(Nt);function j(U,I,L,q){let it=new Uint8Array(4),W=e.createTexture();e.bindTexture(U,W),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let K=0;K<L;K++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(I,0,e.RGBA,1,1,q,0,e.RGBA,e.UNSIGNED_BYTE,it):e.texImage2D(I+K,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,it);return W}let ct={};ct[e.TEXTURE_2D]=j(e.TEXTURE_2D,e.TEXTURE_2D,1),ct[e.TEXTURE_CUBE_MAP]=j(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[e.TEXTURE_2D_ARRAY]=j(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ct[e.TEXTURE_3D]=j(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),st(e.DEPTH_TEST),r.setFunc(Qa),jt(!1),Zt(Ng),st(e.CULL_FACE),Ot(Xi);function st(U){f[U]!==!0&&(e.enable(U),f[U]=!0)}function Ct(U){f[U]!==!1&&(e.disable(U),f[U]=!1)}function Rt(U,I){return u[U]!==I?(e.bindFramebuffer(U,I),u[U]=I,U===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=I),U===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=I),!0):!1}function Mt(U,I){let L=_,q=!1;if(U){L=d.get(I),L===void 0&&(L=[],d.set(I,L));let it=U.textures;if(L.length!==it.length||L[0]!==e.COLOR_ATTACHMENT0){for(let W=0,K=it.length;W<K;W++)L[W]=e.COLOR_ATTACHMENT0+W;L.length=it.length,q=!0}}else L[0]!==e.BACK&&(L[0]=e.BACK,q=!0);q&&e.drawBuffers(L)}function Ee(U){return M!==U?(e.useProgram(U),M=U,!0):!1}let zt={[ha]:e.FUNC_ADD,[eM]:e.FUNC_SUBTRACT,[nM]:e.FUNC_REVERSE_SUBTRACT};zt[iM]=e.MIN,zt[sM]=e.MAX;let qt={[aM]:e.ZERO,[rM]:e.ONE,[oM]:e.SRC_COLOR,[wh]:e.SRC_ALPHA,[dM]:e.SRC_ALPHA_SATURATE,[hM]:e.DST_COLOR,[cM]:e.DST_ALPHA,[lM]:e.ONE_MINUS_SRC_COLOR,[Ch]:e.ONE_MINUS_SRC_ALPHA,[fM]:e.ONE_MINUS_DST_COLOR,[uM]:e.ONE_MINUS_DST_ALPHA,[pM]:e.CONSTANT_COLOR,[mM]:e.ONE_MINUS_CONSTANT_COLOR,[gM]:e.CONSTANT_ALPHA,[_M]:e.ONE_MINUS_CONSTANT_ALPHA};function Ot(U,I,L,q,it,W,K,ut,se,$t){if(U===Xi){g===!0&&(Ct(e.BLEND),g=!1);return}if(g===!1&&(st(e.BLEND),g=!0),U!==tM){if(U!==h||$t!==R){if((m!==ha||E!==ha)&&(e.blendEquation(e.FUNC_ADD),m=ha,E=ha),$t)switch(U){case Ka:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Lg:e.blendFunc(e.ONE,e.ONE);break;case Ig:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Og:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Lt("WebGLState: Invalid blending: ",U);break}else switch(U){case Ka:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Lg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Ig:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Og:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",U);break}S=null,v=null,A=null,w=null,x.set(0,0,0),T=0,h=U,R=$t}return}it=it||I,W=W||L,K=K||q,(I!==m||it!==E)&&(e.blendEquationSeparate(zt[I],zt[it]),m=I,E=it),(L!==S||q!==v||W!==A||K!==w)&&(e.blendFuncSeparate(qt[L],qt[q],qt[W],qt[K]),S=L,v=q,A=W,w=K),(ut.equals(x)===!1||se!==T)&&(e.blendColor(ut.r,ut.g,ut.b,se),x.copy(ut),T=se),h=U,R=!1}function Yt(U,I){U.side===gi?Ct(e.CULL_FACE):st(e.CULL_FACE);let L=U.side===An;I&&(L=!L),jt(L),U.blending===Ka&&U.transparent===!1?Ot(Xi):Ot(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),a.setMask(U.colorWrite);let q=U.stencilWrite;o.setTest(q),q&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Xe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?st(e.SAMPLE_ALPHA_TO_COVERAGE):Ct(e.SAMPLE_ALPHA_TO_COVERAGE)}function jt(U){D!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),D=U)}function Zt(U){U!==QS?(st(e.CULL_FACE),U!==z&&(U===Ng?e.cullFace(e.BACK):U===jS?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ct(e.CULL_FACE),z=U}function Ie(U){U!==Q&&(k&&e.lineWidth(U),Q=U)}function Xe(U,I,L){U?(st(e.POLYGON_OFFSET_FILL),($!==I||H!==L)&&($=I,H=L,r.getReversed()&&(I=-I),e.polygonOffset(I,L))):Ct(e.POLYGON_OFFSET_FILL)}function _e(U){U?st(e.SCISSOR_TEST):Ct(e.SCISSOR_TEST)}function re(U){U===void 0&&(U=e.TEXTURE0+J-1),mt!==U&&(e.activeTexture(U),mt=U)}function N(U,I,L){L===void 0&&(mt===null?L=e.TEXTURE0+J-1:L=mt);let q=vt[L];q===void 0&&(q={type:void 0,texture:void 0},vt[L]=q),(q.type!==U||q.texture!==I)&&(mt!==L&&(e.activeTexture(L),mt=L),e.bindTexture(U,I||ct[U]),q.type=U,q.texture=I)}function tn(){let U=vt[mt];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function oe(){try{e.compressedTexImage2D(...arguments)}catch(U){Lt("WebGLState:",U)}}function C(){try{e.compressedTexImage3D(...arguments)}catch(U){Lt("WebGLState:",U)}}function y(){try{e.texSubImage2D(...arguments)}catch(U){Lt("WebGLState:",U)}}function B(){try{e.texSubImage3D(...arguments)}catch(U){Lt("WebGLState:",U)}}function G(){try{e.compressedTexSubImage2D(...arguments)}catch(U){Lt("WebGLState:",U)}}function Y(){try{e.compressedTexSubImage3D(...arguments)}catch(U){Lt("WebGLState:",U)}}function lt(){try{e.texStorage2D(...arguments)}catch(U){Lt("WebGLState:",U)}}function ht(){try{e.texStorage3D(...arguments)}catch(U){Lt("WebGLState:",U)}}function Z(){try{e.texImage2D(...arguments)}catch(U){Lt("WebGLState:",U)}}function tt(){try{e.texImage3D(...arguments)}catch(U){Lt("WebGLState:",U)}}function dt(U){return p[U]!==void 0?p[U]:e.getParameter(U)}function Et(U,I){p[U]!==I&&(e.pixelStorei(U,I),p[U]=I)}function pt(U){ue.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),ue.copy(U))}function ft(U){Jt.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),Jt.copy(U))}function Tt(U,I){let L=c.get(I);L===void 0&&(L=new WeakMap,c.set(I,L));let q=L.get(U);q===void 0&&(q=e.getUniformBlockIndex(I,U.name),L.set(U,q))}function Dt(U,I){let q=c.get(I).get(U);l.get(I)!==q&&(e.uniformBlockBinding(I,q,U.__bindingPointIndex),l.set(I,q))}function Pt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},p={},mt=null,vt={},u={},d=new WeakMap,_=[],M=null,g=!1,h=null,m=null,S=null,v=null,E=null,A=null,w=null,x=new kt(0,0,0),T=0,R=!1,D=null,z=null,Q=null,$=null,H=null,ue.set(0,0,e.canvas.width,e.canvas.height),Jt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:st,disable:Ct,bindFramebuffer:Rt,drawBuffers:Mt,useProgram:Ee,setBlending:Ot,setMaterial:Yt,setFlipSided:jt,setCullFace:Zt,setLineWidth:Ie,setPolygonOffset:Xe,setScissorTest:_e,activeTexture:re,bindTexture:N,unbindTexture:tn,compressedTexImage2D:oe,compressedTexImage3D:C,texImage2D:Z,texImage3D:tt,pixelStorei:Et,getParameter:dt,updateUBOMapping:Tt,uniformBlockBinding:Dt,texStorage2D:lt,texStorage3D:ht,texSubImage2D:y,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:Y,scissor:pt,viewport:ft,reset:Pt}}function WR(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,f=new WeakMap,p=new Set,u,d=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,y){return _?new OffscreenCanvas(C,y):Xl("canvas")}function g(C,y,B){let G=1,Y=oe(C);if((Y.width>B||Y.height>B)&&(G=B/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let lt=Math.floor(G*Y.width),ht=Math.floor(G*Y.height);u===void 0&&(u=M(lt,ht));let Z=y?M(lt,ht):u;return Z.width=lt,Z.height=ht,Z.getContext("2d").drawImage(C,0,0,lt,ht),Ut("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+lt+"x"+ht+")."),Z}else return"data"in C&&Ut("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),C;return C}function h(C){return C.generateMipmaps}function m(C){e.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(C,y,B,G,Y,lt=!1){if(C!==null){if(e[C]!==void 0)return e[C];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ht;G&&(ht=t.get("EXT_texture_norm16"),ht||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=y;if(y===e.RED&&(B===e.FLOAT&&(Z=e.R32F),B===e.HALF_FLOAT&&(Z=e.R16F),B===e.UNSIGNED_BYTE&&(Z=e.R8),B===e.UNSIGNED_SHORT&&ht&&(Z=ht.R16_EXT),B===e.SHORT&&ht&&(Z=ht.R16_SNORM_EXT)),y===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.R8UI),B===e.UNSIGNED_SHORT&&(Z=e.R16UI),B===e.UNSIGNED_INT&&(Z=e.R32UI),B===e.BYTE&&(Z=e.R8I),B===e.SHORT&&(Z=e.R16I),B===e.INT&&(Z=e.R32I)),y===e.RG&&(B===e.FLOAT&&(Z=e.RG32F),B===e.HALF_FLOAT&&(Z=e.RG16F),B===e.UNSIGNED_BYTE&&(Z=e.RG8),B===e.UNSIGNED_SHORT&&ht&&(Z=ht.RG16_EXT),B===e.SHORT&&ht&&(Z=ht.RG16_SNORM_EXT)),y===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.RG8UI),B===e.UNSIGNED_SHORT&&(Z=e.RG16UI),B===e.UNSIGNED_INT&&(Z=e.RG32UI),B===e.BYTE&&(Z=e.RG8I),B===e.SHORT&&(Z=e.RG16I),B===e.INT&&(Z=e.RG32I)),y===e.RGB_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.RGB8UI),B===e.UNSIGNED_SHORT&&(Z=e.RGB16UI),B===e.UNSIGNED_INT&&(Z=e.RGB32UI),B===e.BYTE&&(Z=e.RGB8I),B===e.SHORT&&(Z=e.RGB16I),B===e.INT&&(Z=e.RGB32I)),y===e.RGBA_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.RGBA8UI),B===e.UNSIGNED_SHORT&&(Z=e.RGBA16UI),B===e.UNSIGNED_INT&&(Z=e.RGBA32UI),B===e.BYTE&&(Z=e.RGBA8I),B===e.SHORT&&(Z=e.RGBA16I),B===e.INT&&(Z=e.RGBA32I)),y===e.RGB&&(B===e.UNSIGNED_SHORT&&ht&&(Z=ht.RGB16_EXT),B===e.SHORT&&ht&&(Z=ht.RGB16_SNORM_EXT),B===e.UNSIGNED_INT_5_9_9_9_REV&&(Z=e.RGB9_E5),B===e.UNSIGNED_INT_10F_11F_11F_REV&&(Z=e.R11F_G11F_B10F)),y===e.RGBA){let tt=lt?kl:ee.getTransfer(Y);B===e.FLOAT&&(Z=e.RGBA32F),B===e.HALF_FLOAT&&(Z=e.RGBA16F),B===e.UNSIGNED_BYTE&&(Z=tt===he?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT&&ht&&(Z=ht.RGBA16_EXT),B===e.SHORT&&ht&&(Z=ht.RGBA16_SNORM_EXT),B===e.UNSIGNED_SHORT_4_4_4_4&&(Z=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(Z=e.RGB5_A1)}return(Z===e.R16F||Z===e.R32F||Z===e.RG16F||Z===e.RG32F||Z===e.RGBA16F||Z===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function E(C,y){let B;return C?y===null||y===Ci||y===Ro?B=e.DEPTH24_STENCIL8:y===Ri?B=e.DEPTH32F_STENCIL8:y===Co&&(B=e.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ci||y===Ro?B=e.DEPTH_COMPONENT24:y===Ri?B=e.DEPTH_COMPONENT32F:y===Co&&(B=e.DEPTH_COMPONENT16),B}function A(C,y){return h(C)===!0||C.isFramebufferTexture&&C.minFilter!==rn&&C.minFilter!==pn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function w(C){let y=C.target;y.removeEventListener("dispose",w),T(y),y.isVideoTexture&&f.delete(y),y.isHTMLTexture&&p.delete(y)}function x(C){let y=C.target;y.removeEventListener("dispose",x),D(y)}function T(C){let y=i.get(C);if(y.__webglInit===void 0)return;let B=C.source,G=d.get(B);if(G){let Y=G[y.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&R(C),Object.keys(G).length===0&&d.delete(B)}i.remove(C)}function R(C){let y=i.get(C);e.deleteTexture(y.__webglTexture);let B=C.source,G=d.get(B);delete G[y.__cacheKey],r.memory.textures--}function D(C){let y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(y.__webglFramebuffer[G]))for(let Y=0;Y<y.__webglFramebuffer[G].length;Y++)e.deleteFramebuffer(y.__webglFramebuffer[G][Y]);else e.deleteFramebuffer(y.__webglFramebuffer[G]);y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer[G])}else{if(Array.isArray(y.__webglFramebuffer))for(let G=0;G<y.__webglFramebuffer.length;G++)e.deleteFramebuffer(y.__webglFramebuffer[G]);else e.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&e.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let G=0;G<y.__webglColorRenderbuffer.length;G++)y.__webglColorRenderbuffer[G]&&e.deleteRenderbuffer(y.__webglColorRenderbuffer[G]);y.__webglDepthRenderbuffer&&e.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let B=C.textures;for(let G=0,Y=B.length;G<Y;G++){let lt=i.get(B[G]);lt.__webglTexture&&(e.deleteTexture(lt.__webglTexture),r.memory.textures--),i.remove(B[G])}i.remove(C)}let z=0;function Q(){z=0}function $(){return z}function H(C){z=C}function J(){let C=z;return C>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),z+=1,C}function k(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function nt(C,y){let B=i.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let G=C.image;if(G===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(B,C,y);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+y)}function rt(C,y){let B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){Ct(B,C,y);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+y)}function mt(C,y){let B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){Ct(B,C,y);return}n.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+y)}function vt(C,y){let B=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){Rt(B,C,y);return}n.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+y)}let at={[Ph]:e.REPEAT,[Vi]:e.CLAMP_TO_EDGE,[Bh]:e.MIRRORED_REPEAT},Nt={[rn]:e.NEAREST,[yM]:e.NEAREST_MIPMAP_NEAREST,[cc]:e.NEAREST_MIPMAP_LINEAR,[pn]:e.LINEAR,[pf]:e.LINEAR_MIPMAP_NEAREST,[va]:e.LINEAR_MIPMAP_LINEAR},ue={[bM]:e.NEVER,[CM]:e.ALWAYS,[EM]:e.LESS,[jf]:e.LEQUAL,[TM]:e.EQUAL,[$f]:e.GEQUAL,[AM]:e.GREATER,[wM]:e.NOTEQUAL};function Jt(C,y){if(y.type===Ri&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===pn||y.magFilter===pf||y.magFilter===cc||y.magFilter===va||y.minFilter===pn||y.minFilter===pf||y.minFilter===cc||y.minFilter===va)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,at[y.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,at[y.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,at[y.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,Nt[y.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,Nt[y.minFilter]),y.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,ue[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===rn||y.minFilter!==cc&&y.minFilter!==va||y.type===Ri&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function j(C,y){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",w));let G=y.source,Y=d.get(G);Y===void 0&&(Y={},d.set(G,Y));let lt=k(y);if(lt!==C.__cacheKey){Y[lt]===void 0&&(Y[lt]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,B=!0),Y[lt].usedTimes++;let ht=Y[C.__cacheKey];ht!==void 0&&(Y[C.__cacheKey].usedTimes--,ht.usedTimes===0&&R(y)),C.__cacheKey=lt,C.__webglTexture=Y[lt].texture}return B}function ct(C,y,B){return Math.floor(Math.floor(C/B)/y)}function st(C,y,B,G){let lt=C.updateRanges;if(lt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,y.width,y.height,B,G,y.data);else{lt.sort((Et,pt)=>Et.start-pt.start);let ht=0;for(let Et=1;Et<lt.length;Et++){let pt=lt[ht],ft=lt[Et],Tt=pt.start+pt.count,Dt=ct(ft.start,y.width,4),Pt=ct(pt.start,y.width,4);ft.start<=Tt+1&&Dt===Pt&&ct(ft.start+ft.count-1,y.width,4)===Dt?pt.count=Math.max(pt.count,ft.start+ft.count-pt.start):(++ht,lt[ht]=ft)}lt.length=ht+1;let Z=n.getParameter(e.UNPACK_ROW_LENGTH),tt=n.getParameter(e.UNPACK_SKIP_PIXELS),dt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,y.width);for(let Et=0,pt=lt.length;Et<pt;Et++){let ft=lt[Et],Tt=Math.floor(ft.start/4),Dt=Math.ceil(ft.count/4),Pt=Tt%y.width,U=Math.floor(Tt/y.width),I=Dt,L=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Pt),n.pixelStorei(e.UNPACK_SKIP_ROWS,U),n.texSubImage2D(e.TEXTURE_2D,0,Pt,U,I,L,B,G,y.data)}C.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Z),n.pixelStorei(e.UNPACK_SKIP_PIXELS,tt),n.pixelStorei(e.UNPACK_SKIP_ROWS,dt)}}function Ct(C,y,B){let G=e.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(G=e.TEXTURE_2D_ARRAY),y.isData3DTexture&&(G=e.TEXTURE_3D);let Y=j(C,y),lt=y.source;n.bindTexture(G,C.__webglTexture,e.TEXTURE0+B);let ht=i.get(lt);if(lt.version!==ht.__version||Y===!0){if(n.activeTexture(e.TEXTURE0+B),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let L=ee.getPrimaries(ee.workingColorSpace),q=y.colorSpace===ws?null:ee.getPrimaries(y.colorSpace),it=y.colorSpace===ws||L===q?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment);let tt=g(y.image,!1,s.maxTextureSize);tt=tn(y,tt);let dt=a.convert(y.format,y.colorSpace),Et=a.convert(y.type),pt=v(y.internalFormat,dt,Et,y.normalized,y.colorSpace,y.isVideoTexture);Jt(G,y);let ft,Tt=y.mipmaps,Dt=y.isVideoTexture!==!0,Pt=ht.__version===void 0||Y===!0,U=lt.dataReady,I=A(y,tt);if(y.isDepthTexture)pt=E(y.format===xa,y.type),Pt&&(Dt?n.texStorage2D(e.TEXTURE_2D,1,pt,tt.width,tt.height):n.texImage2D(e.TEXTURE_2D,0,pt,tt.width,tt.height,0,dt,Et,null));else if(y.isDataTexture)if(Tt.length>0){Dt&&Pt&&n.texStorage2D(e.TEXTURE_2D,I,pt,Tt[0].width,Tt[0].height);for(let L=0,q=Tt.length;L<q;L++)ft=Tt[L],Dt?U&&n.texSubImage2D(e.TEXTURE_2D,L,0,0,ft.width,ft.height,dt,Et,ft.data):n.texImage2D(e.TEXTURE_2D,L,pt,ft.width,ft.height,0,dt,Et,ft.data);y.generateMipmaps=!1}else Dt?(Pt&&n.texStorage2D(e.TEXTURE_2D,I,pt,tt.width,tt.height),U&&st(y,tt,dt,Et)):n.texImage2D(e.TEXTURE_2D,0,pt,tt.width,tt.height,0,dt,Et,tt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Dt&&Pt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,I,pt,Tt[0].width,Tt[0].height,tt.depth);for(let L=0,q=Tt.length;L<q;L++)if(ft=Tt[L],y.format!==_i)if(dt!==null)if(Dt){if(U)if(y.layerUpdates.size>0){let it=s0(ft.width,ft.height,y.format,y.type);for(let W of y.layerUpdates){let K=ft.data.subarray(W*it/ft.data.BYTES_PER_ELEMENT,(W+1)*it/ft.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,L,0,0,W,ft.width,ft.height,1,dt,K)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,L,0,0,0,ft.width,ft.height,tt.depth,dt,ft.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,L,pt,ft.width,ft.height,tt.depth,0,ft.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?U&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,L,0,0,0,ft.width,ft.height,tt.depth,dt,Et,ft.data):n.texImage3D(e.TEXTURE_2D_ARRAY,L,pt,ft.width,ft.height,tt.depth,0,dt,Et,ft.data)}else{Dt&&Pt&&n.texStorage2D(e.TEXTURE_2D,I,pt,Tt[0].width,Tt[0].height);for(let L=0,q=Tt.length;L<q;L++)ft=Tt[L],y.format!==_i?dt!==null?Dt?U&&n.compressedTexSubImage2D(e.TEXTURE_2D,L,0,0,ft.width,ft.height,dt,ft.data):n.compressedTexImage2D(e.TEXTURE_2D,L,pt,ft.width,ft.height,0,ft.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?U&&n.texSubImage2D(e.TEXTURE_2D,L,0,0,ft.width,ft.height,dt,Et,ft.data):n.texImage2D(e.TEXTURE_2D,L,pt,ft.width,ft.height,0,dt,Et,ft.data)}else if(y.isDataArrayTexture)if(Dt){if(Pt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,I,pt,tt.width,tt.height,tt.depth),U)if(y.layerUpdates.size>0){let L=s0(tt.width,tt.height,y.format,y.type);for(let q of y.layerUpdates){let it=tt.data.subarray(q*L/tt.data.BYTES_PER_ELEMENT,(q+1)*L/tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,q,tt.width,tt.height,1,dt,Et,it)}y.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,dt,Et,tt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,pt,tt.width,tt.height,tt.depth,0,dt,Et,tt.data);else if(y.isData3DTexture)Dt?(Pt&&n.texStorage3D(e.TEXTURE_3D,I,pt,tt.width,tt.height,tt.depth),U&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,dt,Et,tt.data)):n.texImage3D(e.TEXTURE_3D,0,pt,tt.width,tt.height,tt.depth,0,dt,Et,tt.data);else if(y.isFramebufferTexture){if(Pt)if(Dt)n.texStorage2D(e.TEXTURE_2D,I,pt,tt.width,tt.height);else{let L=tt.width,q=tt.height;for(let it=0;it<I;it++)n.texImage2D(e.TEXTURE_2D,it,pt,L,q,0,dt,Et,null),L>>=1,q>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in e){let L=e.canvas;if(L.hasAttribute("layoutsubtree")||L.setAttribute("layoutsubtree","true"),tt.parentNode!==L){L.appendChild(tt),p.add(y),L.onpaint=q=>{let it=q.changedElements;for(let W of p)it.includes(W.image)&&(W.needsUpdate=!0)},L.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,tt);else{let it=e.RGBA,W=e.RGBA,K=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,it,W,K,tt)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(Dt&&Pt){let L=oe(Tt[0]);n.texStorage2D(e.TEXTURE_2D,I,pt,L.width,L.height)}for(let L=0,q=Tt.length;L<q;L++)ft=Tt[L],Dt?U&&n.texSubImage2D(e.TEXTURE_2D,L,0,0,dt,Et,ft):n.texImage2D(e.TEXTURE_2D,L,pt,dt,Et,ft);y.generateMipmaps=!1}else if(Dt){if(Pt){let L=oe(tt);n.texStorage2D(e.TEXTURE_2D,I,pt,L.width,L.height)}U&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,dt,Et,tt)}else n.texImage2D(e.TEXTURE_2D,0,pt,dt,Et,tt);h(y)&&m(G),ht.__version=lt.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Rt(C,y,B){if(y.image.length!==6)return;let G=j(C,y),Y=y.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+B);let lt=i.get(Y);if(Y.version!==lt.__version||G===!0){n.activeTexture(e.TEXTURE0+B);let ht=ee.getPrimaries(ee.workingColorSpace),Z=y.colorSpace===ws?null:ee.getPrimaries(y.colorSpace),tt=y.colorSpace===ws||ht===Z?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let dt=y.isCompressedTexture||y.image[0].isCompressedTexture,Et=y.image[0]&&y.image[0].isDataTexture,pt=[];for(let W=0;W<6;W++)!dt&&!Et?pt[W]=g(y.image[W],!0,s.maxCubemapSize):pt[W]=Et?y.image[W].image:y.image[W],pt[W]=tn(y,pt[W]);let ft=pt[0],Tt=a.convert(y.format,y.colorSpace),Dt=a.convert(y.type),Pt=v(y.internalFormat,Tt,Dt,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,I=lt.__version===void 0||G===!0,L=Y.dataReady,q=A(y,ft);Jt(e.TEXTURE_CUBE_MAP,y);let it;if(dt){U&&I&&n.texStorage2D(e.TEXTURE_CUBE_MAP,q,Pt,ft.width,ft.height);for(let W=0;W<6;W++){it=pt[W].mipmaps;for(let K=0;K<it.length;K++){let ut=it[K];y.format!==_i?Tt!==null?U?L&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,K,0,0,ut.width,ut.height,Tt,ut.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,K,Pt,ut.width,ut.height,0,ut.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,K,0,0,ut.width,ut.height,Tt,Dt,ut.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,K,Pt,ut.width,ut.height,0,Tt,Dt,ut.data)}}}else{if(it=y.mipmaps,U&&I){it.length>0&&q++;let W=oe(pt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,q,Pt,W.width,W.height)}for(let W=0;W<6;W++)if(Et){U?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,pt[W].width,pt[W].height,Tt,Dt,pt[W].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Pt,pt[W].width,pt[W].height,0,Tt,Dt,pt[W].data);for(let K=0;K<it.length;K++){let se=it[K].image[W].image;U?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,K+1,0,0,se.width,se.height,Tt,Dt,se.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,K+1,Pt,se.width,se.height,0,Tt,Dt,se.data)}}else{U?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Tt,Dt,pt[W]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Pt,Tt,Dt,pt[W]);for(let K=0;K<it.length;K++){let ut=it[K];U?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,K+1,0,0,Tt,Dt,ut.image[W]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,K+1,Pt,Tt,Dt,ut.image[W])}}}h(y)&&m(e.TEXTURE_CUBE_MAP),lt.__version=Y.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Mt(C,y,B,G,Y,lt){let ht=a.convert(B.format,B.colorSpace),Z=a.convert(B.type),tt=v(B.internalFormat,ht,Z,B.normalized,B.colorSpace),dt=i.get(y),Et=i.get(B);if(Et.__renderTarget=y,!dt.__hasExternalTextures){let pt=Math.max(1,y.width>>lt),ft=Math.max(1,y.height>>lt);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?n.texImage3D(Y,lt,tt,pt,ft,y.depth,0,ht,Z,null):n.texImage2D(Y,lt,tt,pt,ft,0,ht,Z,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),re(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,Y,Et.__webglTexture,0,_e(y)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,G,Y,Et.__webglTexture,lt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(C,y,B){if(e.bindRenderbuffer(e.RENDERBUFFER,C),y.depthBuffer){let G=y.depthTexture,Y=G&&G.isDepthTexture?G.type:null,lt=E(y.stencilBuffer,Y),ht=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;re(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,_e(y),lt,y.width,y.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,_e(y),lt,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,lt,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ht,e.RENDERBUFFER,C)}else{let G=y.textures;for(let Y=0;Y<G.length;Y++){let lt=G[Y],ht=a.convert(lt.format,lt.colorSpace),Z=a.convert(lt.type),tt=v(lt.internalFormat,ht,Z,lt.normalized,lt.colorSpace);re(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,_e(y),tt,y.width,y.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,_e(y),tt,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,tt,y.width,y.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function zt(C,y,B){let G=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=i.get(y.depthTexture);if(Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),Y.__webglTexture===void 0){Y.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),Jt(e.TEXTURE_CUBE_MAP,y.depthTexture);let dt=a.convert(y.depthTexture.format),Et=a.convert(y.depthTexture.type),pt;y.depthTexture.format===Hi?pt=e.DEPTH_COMPONENT24:y.depthTexture.format===xa&&(pt=e.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,pt,y.width,y.height,0,dt,Et,null)}}else nt(y.depthTexture,0);let lt=Y.__webglTexture,ht=_e(y),Z=G?e.TEXTURE_CUBE_MAP_POSITIVE_X+B:e.TEXTURE_2D,tt=y.depthTexture.format===xa?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(y.depthTexture.format===Hi)re(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,tt,Z,lt,0,ht):e.framebufferTexture2D(e.FRAMEBUFFER,tt,Z,lt,0);else if(y.depthTexture.format===xa)re(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,tt,Z,lt,0,ht):e.framebufferTexture2D(e.FRAMEBUFFER,tt,Z,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qt(C){let y=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let G=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),G){let Y=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),y.__depthDisposeCallback=Y}y.__boundDepthTexture=G}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)zt(y.__webglFramebuffer[G],C,G);else{let G=C.texture.mipmaps;G&&G.length>0?zt(y.__webglFramebuffer[0],C,0):zt(y.__webglFramebuffer,C,0)}else if(B){y.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[G]),y.__webglDepthbuffer[G]===void 0)y.__webglDepthbuffer[G]=e.createRenderbuffer(),Ee(y.__webglDepthbuffer[G],C,!1);else{let Y=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=y.__webglDepthbuffer[G];e.bindRenderbuffer(e.RENDERBUFFER,lt),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,lt)}}else{let G=C.texture.mipmaps;if(G&&G.length>0?n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=e.createRenderbuffer(),Ee(y.__webglDepthbuffer,C,!1);else{let Y=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=y.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,lt),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,lt)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ot(C,y,B){let G=i.get(C);y!==void 0&&Mt(G.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&qt(C)}function Yt(C){let y=C.texture,B=i.get(C),G=i.get(y);C.addEventListener("dispose",x);let Y=C.textures,lt=C.isWebGLCubeRenderTarget===!0,ht=Y.length>1;if(ht||(G.__webglTexture===void 0&&(G.__webglTexture=e.createTexture()),G.__version=y.version,r.memory.textures++),lt){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let tt=0;tt<y.mipmaps.length;tt++)B.__webglFramebuffer[Z][tt]=e.createFramebuffer()}else B.__webglFramebuffer[Z]=e.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)B.__webglFramebuffer[Z]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(ht)for(let Z=0,tt=Y.length;Z<tt;Z++){let dt=i.get(Y[Z]);dt.__webglTexture===void 0&&(dt.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&re(C)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let tt=Y[Z];B.__webglColorRenderbuffer[Z]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let dt=a.convert(tt.format,tt.colorSpace),Et=a.convert(tt.type),pt=v(tt.internalFormat,dt,Et,tt.normalized,tt.colorSpace,C.isXRRenderTarget===!0),ft=_e(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,ft,pt,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Z,e.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),Ee(B.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(lt){n.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture),Jt(e.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0)for(let tt=0;tt<y.mipmaps.length;tt++)Mt(B.__webglFramebuffer[Z][tt],C,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,tt);else Mt(B.__webglFramebuffer[Z],C,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);h(y)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ht){for(let Z=0,tt=Y.length;Z<tt;Z++){let dt=Y[Z],Et=i.get(dt),pt=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(pt,Et.__webglTexture),Jt(pt,dt),Mt(B.__webglFramebuffer,C,dt,e.COLOR_ATTACHMENT0+Z,pt,0),h(dt)&&m(pt)}n.unbindTexture()}else{let Z=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Z,G.__webglTexture),Jt(Z,y),y.mipmaps&&y.mipmaps.length>0)for(let tt=0;tt<y.mipmaps.length;tt++)Mt(B.__webglFramebuffer[tt],C,y,e.COLOR_ATTACHMENT0,Z,tt);else Mt(B.__webglFramebuffer,C,y,e.COLOR_ATTACHMENT0,Z,0);h(y)&&m(Z),n.unbindTexture()}C.depthBuffer&&qt(C)}function jt(C){let y=C.textures;for(let B=0,G=y.length;B<G;B++){let Y=y[B];if(h(Y)){let lt=S(C),ht=i.get(Y).__webglTexture;n.bindTexture(lt,ht),m(lt),n.unbindTexture()}}}let Zt=[],Ie=[];function Xe(C){if(C.samples>0){if(re(C)===!1){let y=C.textures,B=C.width,G=C.height,Y=e.COLOR_BUFFER_BIT,lt=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=i.get(C),Z=y.length>1;if(Z)for(let dt=0;dt<y.length;dt++)n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let tt=C.texture.mipmaps;tt&&tt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let dt=0;dt<y.length;dt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),Z){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);let Et=i.get(y[dt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Et,0)}e.blitFramebuffer(0,0,B,G,0,0,B,G,Y,e.NEAREST),l===!0&&(Zt.length=0,Ie.length=0,Zt.push(e.COLOR_ATTACHMENT0+dt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Zt.push(lt),Ie.push(lt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ie)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Zt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Z)for(let dt=0;dt<y.length;dt++){n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);let Et=i.get(y[dt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.TEXTURE_2D,Et,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let y=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[y])}}}function _e(C){return Math.min(s.maxSamples,C.samples)}function re(C){let y=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function N(C){let y=r.render.frame;f.get(C)!==y&&(f.set(C,y),C.update())}function tn(C,y){let B=C.colorSpace,G=C.format,Y=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Gl&&B!==ws&&(ee.getTransfer(B)===he?(G!==_i||Y!==On)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",B)),y}function oe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=Q,this.getTextureUnits=$,this.setTextureUnits=H,this.setTexture2D=nt,this.setTexture2DArray=rt,this.setTexture3D=mt,this.setTextureCube=vt,this.rebindTextures=Ot,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=re,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function qR(e,t){function n(i,s=ws){let a,r=ee.getTransfer(s);if(i===On)return e.UNSIGNED_BYTE;if(i===gf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===_f)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Yg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Zg)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wg)return e.BYTE;if(i===qg)return e.SHORT;if(i===Co)return e.UNSIGNED_SHORT;if(i===mf)return e.INT;if(i===Ci)return e.UNSIGNED_INT;if(i===Ri)return e.FLOAT;if(i===Wi)return e.HALF_FLOAT;if(i===Jg)return e.ALPHA;if(i===Kg)return e.RGB;if(i===_i)return e.RGBA;if(i===Hi)return e.DEPTH_COMPONENT;if(i===xa)return e.DEPTH_STENCIL;if(i===Qg)return e.RED;if(i===vf)return e.RED_INTEGER;if(i===ya)return e.RG;if(i===xf)return e.RG_INTEGER;if(i===yf)return e.RGBA_INTEGER;if(i===uc||i===hc||i===fc||i===dc)if(r===he)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===uc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===uc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sf||i===Mf||i===bf||i===Ef)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Sf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ef)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tf||i===Af||i===wf||i===Cf||i===Rf||i===pc||i===Df)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Tf||i===Af)return r===he?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===wf)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Cf)return a.COMPRESSED_R11_EAC;if(i===Rf)return a.COMPRESSED_SIGNED_R11_EAC;if(i===pc)return a.COMPRESSED_RG11_EAC;if(i===Df)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Uf||i===Nf||i===Lf||i===If||i===Of||i===Pf||i===Bf||i===zf||i===Ff||i===Vf||i===Hf||i===Gf||i===kf||i===Xf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Uf)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nf)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lf)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===If)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Of)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pf)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bf)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zf)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ff)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vf)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hf)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gf)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kf)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xf)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wf||i===qf||i===Yf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Wf)return r===he?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zf||i===Jf||i===mc||i===Kf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Zf)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Jf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ro?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var YR=`
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

}`,b0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new jl(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new jn({vertexShader:YR,fragmentShader:ZR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ze(new da(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},E0=class extends Gi{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,d=null,_=null,M=typeof XRWebGLBinding<"u",g=new b0,h={},m=n.getContextAttributes(),S=null,v=null,E=[],A=[],w=new Gt,x=null,T=new dn;T.viewport=new Le;let R=new dn;R.viewport=new Le;let D=[T,R],z=new uf,Q=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ct=E[j];return ct===void 0&&(ct=new yo,E[j]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(j){let ct=E[j];return ct===void 0&&(ct=new yo,E[j]=ct),ct.getGripSpace()},this.getHand=function(j){let ct=E[j];return ct===void 0&&(ct=new yo,E[j]=ct),ct.getHandSpace()};function H(j){let ct=A.indexOf(j.inputSource);if(ct===-1)return;let st=E[ct];st!==void 0&&(st.update(j.inputSource,j.frame,c||r),st.dispatchEvent({type:j.type,data:j.inputSource}))}function J(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",k);for(let j=0;j<E.length;j++){let ct=A[j];ct!==null&&(A[j]=null,E[j].disconnect(ct))}Q=null,$=null,g.reset();for(let j in h)delete h[j];t.setRenderTarget(S),d=null,u=null,p=null,s=null,v=null,Jt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,i.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",J),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,Ct=null,Rt=null;m.depth&&(Rt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,st=m.stencil?xa:Hi,Ct=m.stencil?Ro:Ci);let Mt={colorFormat:n.RGBA8,depthFormat:Rt,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(Mt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Kn(u.textureWidth,u.textureHeight,{format:_i,type:On,depthTexture:new As(u.textureWidth,u.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,st),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Kn(d.framebufferWidth,d.framebufferHeight,{format:_i,type:On,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Jt.setContext(s),Jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(j){for(let ct=0;ct<j.removed.length;ct++){let st=j.removed[ct],Ct=A.indexOf(st);Ct>=0&&(A[Ct]=null,E[Ct].disconnect(st))}for(let ct=0;ct<j.added.length;ct++){let st=j.added[ct],Ct=A.indexOf(st);if(Ct===-1){for(let Mt=0;Mt<E.length;Mt++)if(Mt>=A.length){A.push(st),Ct=Mt;break}else if(A[Mt]===null){A[Mt]=st,Ct=Mt;break}if(Ct===-1)break}let Rt=E[Ct];Rt&&Rt.connect(st)}}let nt=new P,rt=new P;function mt(j,ct,st){nt.setFromMatrixPosition(ct.matrixWorld),rt.setFromMatrixPosition(st.matrixWorld);let Ct=nt.distanceTo(rt),Rt=ct.projectionMatrix.elements,Mt=st.projectionMatrix.elements,Ee=Rt[14]/(Rt[10]-1),zt=Rt[14]/(Rt[10]+1),qt=(Rt[9]+1)/Rt[5],Ot=(Rt[9]-1)/Rt[5],Yt=(Rt[8]-1)/Rt[0],jt=(Mt[8]+1)/Mt[0],Zt=Ee*Yt,Ie=Ee*jt,Xe=Ct/(-Yt+jt),_e=Xe*-Yt;if(ct.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(_e),j.translateZ(Xe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Rt[10]===-1)j.projectionMatrix.copy(ct.projectionMatrix),j.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{let re=Ee+Xe,N=zt+Xe,tn=Zt-_e,oe=Ie+(Ct-_e),C=qt*zt/N*re,y=Ot*zt/N*re;j.projectionMatrix.makePerspective(tn,oe,C,y,re,N),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function vt(j,ct){ct===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ct.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ct=j.near,st=j.far;g.texture!==null&&(g.depthNear>0&&(ct=g.depthNear),g.depthFar>0&&(st=g.depthFar)),z.near=R.near=T.near=ct,z.far=R.far=T.far=st,(Q!==z.near||$!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),Q=z.near,$=z.far),z.layers.mask=j.layers.mask|6,T.layers.mask=z.layers.mask&-5,R.layers.mask=z.layers.mask&-3;let Ct=j.parent,Rt=z.cameras;vt(z,Ct);for(let Mt=0;Mt<Rt.length;Mt++)vt(Rt[Mt],Ct);Rt.length===2?mt(z,T,R):z.projectionMatrix.copy(T.projectionMatrix),at(j,z,Ct)};function at(j,ct,st){st===null?j.matrix.copy(ct.matrixWorld):(j.matrix.copy(st.matrixWorld),j.matrix.invert(),j.matrix.multiply(ct.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ct.projectionMatrix),j.projectionMatrixInverse.copy(ct.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=_o*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(j){return h[j]};let Nt=null;function ue(j,ct){if(f=ct.getViewerPose(c||r),_=ct,f!==null){let st=f.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Ct=!1;st.length!==z.cameras.length&&(z.cameras.length=0,Ct=!0);for(let zt=0;zt<st.length;zt++){let qt=st[zt],Ot=null;if(d!==null)Ot=d.getViewport(qt);else{let jt=p.getViewSubImage(u,qt);Ot=jt.viewport,zt===0&&(t.setRenderTargetTextures(v,jt.colorTexture,jt.depthStencilTexture),t.setRenderTarget(v))}let Yt=D[zt];Yt===void 0&&(Yt=new dn,Yt.layers.enable(zt),Yt.viewport=new Le,D[zt]=Yt),Yt.matrix.fromArray(qt.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(qt.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),zt===0&&(z.matrix.copy(Yt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ct===!0&&z.cameras.push(Yt)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=i.getBinding();let zt=p.getDepthInformation(st[0]);zt&&zt.isValid&&zt.texture&&g.init(zt,s.renderState)}if(Rt&&Rt.includes("camera-access")&&M){t.state.unbindTexture(),p=i.getBinding();for(let zt=0;zt<st.length;zt++){let qt=st[zt].camera;if(qt){let Ot=h[qt];Ot||(Ot=new jl,h[qt]=Ot);let Yt=p.getCameraImage(qt);Ot.sourceTexture=Yt}}}}for(let st=0;st<E.length;st++){let Ct=A[st],Rt=E[st];Ct!==null&&Rt!==void 0&&Rt.update(Ct,ct,c||r)}Nt&&Nt(j,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),_=null}let Jt=new sb;Jt.setAnimationLoop(ue),this.setAnimationLoop=function(j){Nt=j},this.dispose=function(){}}},JR=new De,ub=new Bt;ub.set(-1,0,0,0,1,0,0,0,1);function KR(e,t){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,e0(e)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,m,S,v){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?a(g,h):h.isMeshLambertMaterial?(a(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(g,h),p(g,h)):h.isMeshPhongMaterial?(a(g,h),f(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(g,h),u(g,h),h.isMeshPhysicalMaterial&&d(g,h,v)):h.isMeshMatcapMaterial?(a(g,h),_(g,h)):h.isMeshDepthMaterial?a(g,h):h.isMeshDistanceMaterial?(a(g,h),M(g,h)):h.isMeshNormalMaterial?a(g,h):h.isLineBasicMaterial?(r(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,m,S):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===An&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===An&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);let m=t.get(h),S=m.envMap,v=m.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(JR.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ub),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function r(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,m,S){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*m,g.scale.value=S*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function f(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function p(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function d(g,h,m){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===An&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function M(g,h){let m=t.get(h).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function QR(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){let A=E.program;i.uniformBlockBinding(v,A)}function c(v,E){let A=s[v.id];A===void 0&&(g(v),A=f(v),s[v.id]=A,v.addEventListener("dispose",m));let w=E.program;i.updateUBOMapping(v,w);let x=t.render.frame;a[v.id]!==x&&(u(v),a[v.id]=x)}function f(v){let E=p();v.__bindingPointIndex=E;let A=e.createBuffer(),w=v.__size,x=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,w,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,A),A}function p(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let E=s[v.id],A=v.uniforms,w=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let x=0,T=A.length;x<T;x++){let R=A[x];if(Array.isArray(R))for(let D=0,z=R.length;D<z;D++)d(R[D],x,D,w);else d(R,x,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(v,E,A,w){if(M(v,E,A,w)===!0){let x=v.__offset,T=v.value;if(Array.isArray(T)){let R=0;for(let D=0;D<T.length;D++){let z=T[D],Q=h(z);_(z,v.__data,R),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(R+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(T,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,x,v.__data)}}function _(v,E,A){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,A)}function M(v,E,A,w){let x=v.value,T=E+"_"+A;if(w[T]===void 0)return typeof x=="number"||typeof x=="boolean"?w[T]=x:ArrayBuffer.isView(x)?w[T]=x.slice():w[T]=x.clone(),!0;{let R=w[T];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return w[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(v){let E=v.uniforms,A=0,w=16;for(let T=0,R=E.length;T<R;T++){let D=Array.isArray(E[T])?E[T]:[E[T]];for(let z=0,Q=D.length;z<Q;z++){let $=D[z],H=Array.isArray($.value)?$.value:[$.value];for(let J=0,k=H.length;J<k;J++){let nt=H[J],rt=h(nt),mt=A%w,vt=mt%rt.boundary,at=mt+vt;A+=vt,at!==0&&w-at<rt.storage&&(A+=w-at),$.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=A,A+=rt.storage}}}let x=A%w;return x>0&&(A+=w-x),v.__size=A,v.__cache={},this}function h(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",v),E}function m(v){let E=v.target;E.removeEventListener("dispose",m);let A=r.indexOf(E.__bindingPointIndex);r.splice(A,1),e.deleteBuffer(s[E.id]),delete s[E.id],delete a[E.id]}function S(){for(let v in s)e.deleteBuffer(s[v]);r=[],s={},a={}}return{bind:l,update:c,dispose:S}}var jR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yi=null;function $R(){return Yi===null&&(Yi=new Gh(jR,16,16,ya,Wi),Yi.name="DFG_LUT",Yi.minFilter=pn,Yi.magFilter=pn,Yi.wrapS=Vi,Yi.wrapT=Vi,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}var sd=class{constructor(t={}){let{canvas:n=RM(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=On}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=r;let M=d,g=new Set([yf,xf,vf]),h=new Set([On,Ci,Co,Ro,gf,_f]),m=new Uint32Array(4),S=new Int32Array(4),v=new P,E=null,A=null,w=[],x=[],T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,z=null,Q=null,$=null,H=null;this._outputColorSpace=fn;let J=0,k=0,nt=null,rt=-1,mt=null,vt=new Le,at=new Le,Nt=null,ue=new kt(0),Jt=0,j=n.width,ct=n.height,st=1,Ct=null,Rt=null,Mt=new Le(0,0,j,ct),Ee=new Le(0,0,j,ct),zt=!1,qt=new Mo,Ot=!1,Yt=!1,jt=new De,Zt=new P,Ie=new Le,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_e=!1;function re(){return nt===null?st:1}let N=i;function tn(b,O){return n.getContext(b,O)}try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"185"}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",$t,!1),n.addEventListener("webglcontextcreationerror",ve,!1),N===null){let O="webgl2";if(N=tn(O,b),N===null)throw tn(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Lt("WebGLRenderer: "+b.message),b}let oe,C,y,B,G,Y,lt,ht,Z,tt,dt,Et,pt,ft,Tt,Dt,Pt,U,I,L,q,it,W;function K(){oe=new rC(N),oe.init(),q=new qR(N,oe),C=new j2(N,oe,t,q),y=new XR(N,oe),C.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),Q=N.createFramebuffer(),$=N.createFramebuffer(),H=N.createFramebuffer(),B=new cC(N),G=new DR,Y=new WR(N,oe,y,G,C,q,B),lt=new aC(R),ht=new dA(N),it=new K2(N,ht),Z=new oC(N,ht,B,it),tt=new hC(N,Z,ht,it,B),U=new uC(N,C,Y),Tt=new $2(G),dt=new RR(R,lt,oe,C,it,Tt),Et=new KR(R,G),pt=new NR,ft=new zR(oe),Pt=new J2(R,lt,y,tt,_,l),Dt=new kR(R,tt,C),W=new QR(N,B,C,y),I=new Q2(N,oe,B),L=new lC(N,oe,B),B.programs=dt.programs,R.capabilities=C,R.extensions=oe,R.properties=G,R.renderLists=pt,R.shadowMap=Dt,R.state=y,R.info=B}K(),M!==On&&(T=new dC(M,n.width,n.height,o,s,a));let ut=new E0(R,N);this.xr=ut,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=oe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=oe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(b){b!==void 0&&(st=b,this.setSize(j,ct,!1))},this.getSize=function(b){return b.set(j,ct)},this.setSize=function(b,O,X=!0){if(ut.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}j=b,ct=O,n.width=Math.floor(b*st),n.height=Math.floor(O*st),X===!0&&(n.style.width=b+"px",n.style.height=O+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(j*st,ct*st).floor()},this.setDrawingBufferSize=function(b,O,X){j=b,ct=O,st=X,n.width=Math.floor(b*X),n.height=Math.floor(O*X),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(M===On){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(vt)},this.getViewport=function(b){return b.copy(Mt)},this.setViewport=function(b,O,X,F){b.isVector4?Mt.set(b.x,b.y,b.z,b.w):Mt.set(b,O,X,F),y.viewport(vt.copy(Mt).multiplyScalar(st).round())},this.getScissor=function(b){return b.copy(Ee)},this.setScissor=function(b,O,X,F){b.isVector4?Ee.set(b.x,b.y,b.z,b.w):Ee.set(b,O,X,F),y.scissor(at.copy(Ee).multiplyScalar(st).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(b){y.setScissorTest(zt=b)},this.setOpaqueSort=function(b){Ct=b},this.setTransparentSort=function(b){Rt=b},this.getClearColor=function(b){return b.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,X=!0){let F=0;if(b){let V=!1;if(nt!==null){let xt=nt.texture.format;V=g.has(xt)}if(V){let xt=nt.texture.type,St=h.has(xt),_t=Pt.getClearColor(),bt=Pt.getClearAlpha(),At=_t.r,Vt=_t.g,Wt=_t.b;St?(m[0]=At,m[1]=Vt,m[2]=Wt,m[3]=bt,N.clearBufferuiv(N.COLOR,0,m)):(S[0]=At,S[1]=Vt,S[2]=Wt,S[3]=bt,N.clearBufferiv(N.COLOR,0,S))}else F|=N.COLOR_BUFFER_BIT}O&&(F|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(F|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&N.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),z=b},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",$t,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),Pt.dispose(),pt.dispose(),ft.dispose(),G.dispose(),lt.dispose(),tt.dispose(),it.dispose(),W.dispose(),dt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Sc),ut.removeEventListener("sessionend",A0),ba.stop()};function se(b){b.preventDefault(),$g("WebGLRenderer: Context Lost."),D=!0}function $t(){$g("WebGLRenderer: Context Restored."),D=!1;let b=B.autoReset,O=Dt.enabled,X=Dt.autoUpdate,F=Dt.needsUpdate,V=Dt.type;K(),B.autoReset=b,Dt.enabled=O,Dt.autoUpdate=X,Dt.needsUpdate=F,Dt.type=V}function ve(b){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ei(b){let O=b.target;O.removeEventListener("dispose",ei),ld(O)}function ld(b){cd(b),G.remove(b)}function cd(b){let O=G.get(b).programs;O!==void 0&&(O.forEach(function(X){dt.releaseProgram(X)}),b.isShaderMaterial&&dt.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,X,F,V,xt){O===null&&(O=Xe);let St=V.isMesh&&V.matrixWorld.determinantAffine()<0,_t=vb(b,O,X,F,V);y.setMaterial(F,St);let bt=X.index,At=1;if(F.wireframe===!0){if(bt=Z.getWireframeAttribute(X),bt===void 0)return;At=2}let Vt=X.drawRange,Wt=X.attributes.position,wt=Vt.start*At,pe=(Vt.start+Vt.count)*At;xt!==null&&(wt=Math.max(wt,xt.start*At),pe=Math.min(pe,(xt.start+xt.count)*At)),bt!==null?(wt=Math.max(wt,0),pe=Math.min(pe,bt.count)):Wt!=null&&(wt=Math.max(wt,0),pe=Math.min(pe,Wt.count));let Fe=pe-wt;if(Fe<0||Fe===1/0)return;it.setup(V,F,_t,X,bt);let Oe,xe=I;if(bt!==null&&(Oe=ht.get(bt),xe=L,xe.setIndex(Oe)),V.isMesh)F.wireframe===!0?(y.setLineWidth(F.wireframeLinewidth*re()),xe.setMode(N.LINES)):xe.setMode(N.TRIANGLES);else if(V.isLine){let gn=F.linewidth;gn===void 0&&(gn=1),y.setLineWidth(gn*re()),V.isLineSegments?xe.setMode(N.LINES):V.isLineLoop?xe.setMode(N.LINE_LOOP):xe.setMode(N.LINE_STRIP)}else V.isPoints?xe.setMode(N.POINTS):V.isSprite&&xe.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))xe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let gn=V._multiDrawStarts,yt=V._multiDrawCounts,Pn=V._multiDrawCount,ae=bt?ht.get(bt).bytesPerElement:1,ni=G.get(F).currentProgram.getUniforms();for(let Di=0;Di<Pn;Di++)ni.setValue(N,"_gl_DrawID",Di),xe.render(gn[Di]/ae,yt[Di])}else if(V.isInstancedMesh)xe.renderInstances(wt,Fe,V.count);else if(X.isInstancedBufferGeometry){let gn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,yt=Math.min(X.instanceCount,gn);xe.renderInstances(wt,Fe,yt)}else xe.render(wt,Fe)};function ir(b,O,X){b.transparent===!0&&b.side===gi&&b.forceSinglePass===!1?(b.side=An,b.needsUpdate=!0,bc(b,O,X),b.side=Ms,b.needsUpdate=!0,bc(b,O,X),b.side=gi):bc(b,O,X)}this.compile=function(b,O,X=null){X===null&&(X=b),A=ft.get(X),A.init(O),x.push(A),X.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),b!==X&&b.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights();let F=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let xt=V.material;if(xt)if(Array.isArray(xt))for(let St=0;St<xt.length;St++){let _t=xt[St];ir(_t,X,V),F.add(_t)}else ir(xt,X,V),F.add(xt)}),A=x.pop(),F},this.compileAsync=function(b,O,X=null){let F=this.compile(b,O,X);return new Promise(V=>{function xt(){if(F.forEach(function(St){G.get(St).currentProgram.isReady()&&F.delete(St)}),F.size===0){V(b);return}setTimeout(xt,10)}oe.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Ma=null;function ud(b){Ma&&Ma(b)}function Sc(){ba.stop()}function A0(){ba.start()}let ba=new sb;ba.setAnimationLoop(ud),typeof self<"u"&&ba.setContext(self),this.setAnimationLoop=function(b){Ma=b,ut.setAnimationLoop(b),b===null?ba.stop():ba.start()},ut.addEventListener("sessionstart",Sc),ut.addEventListener("sessionend",A0),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(b,O);let X=ut.enabled===!0&&ut.isPresenting===!0,F=T!==null&&(nt===null||X)&&T.begin(R,nt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(O),O=ut.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,O,nt),A=ft.get(b,x.length),A.init(O),A.state.textureUnits=Y.getTextureUnits(),x.push(A),jt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),qt.setFromProjectionMatrix(jt,Ti,O.reversedDepth),Yt=this.localClippingEnabled,Ot=Tt.init(this.clippingPlanes,Yt),E=pt.get(b,w.length),E.init(),w.push(E),ut.enabled===!0&&ut.isPresenting===!0){let St=R.xr.getDepthSensingMesh();St!==null&&hd(St,O,-1/0,R.sortObjects)}hd(b,O,0,R.sortObjects),E.finish(),R.sortObjects===!0&&E.sort(Ct,Rt,O.reversedDepth),_e=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,_e&&Pt.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ot===!0&&Tt.beginShadows();let V=A.state.shadowsArray;if(Dt.render(V,b,O),Ot===!0&&Tt.endShadows(),(F&&T.hasRenderPass())===!1){let St=E.opaque,_t=E.transmissive;if(A.setupLights(),O.isArrayCamera){let bt=O.cameras;if(_t.length>0)for(let At=0,Vt=bt.length;At<Vt;At++){let Wt=bt[At];C0(St,_t,b,Wt)}_e&&Pt.render(b);for(let At=0,Vt=bt.length;At<Vt;At++){let Wt=bt[At];w0(E,b,Wt,Wt.viewport)}}else _t.length>0&&C0(St,_t,b,O),_e&&Pt.render(b),w0(E,b,O)}nt!==null&&k===0&&(Y.updateMultisampleRenderTarget(nt),Y.updateRenderTargetMipmap(nt)),F&&T.end(R),b.isScene===!0&&b.onAfterRender(R,b,O),it.resetDefaultState(),rt=-1,mt=null,x.pop(),x.length>0?(A=x[x.length-1],Y.setTextureUnits(A.state.textureUnits),Ot===!0&&Tt.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?E=w[w.length-1]:E=null,z!==null&&z.renderEnd()};function hd(b,O,X,F){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLightProbeGrid)A.pushLightProbeGrid(b);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||qt.intersectsSprite(b)){F&&Ie.setFromMatrixPosition(b.matrixWorld).applyMatrix4(jt);let St=tt.update(b),_t=b.material;_t.visible&&E.push(b,St,_t,X,Ie.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||qt.intersectsObject(b))){let St=tt.update(b),_t=b.material;if(F&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ie.copy(b.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ie.copy(St.boundingSphere.center)),Ie.applyMatrix4(b.matrixWorld).applyMatrix4(jt)),Array.isArray(_t)){let bt=St.groups;for(let At=0,Vt=bt.length;At<Vt;At++){let Wt=bt[At],wt=_t[Wt.materialIndex];wt&&wt.visible&&E.push(b,St,wt,X,Ie.z,Wt)}}else _t.visible&&E.push(b,St,_t,X,Ie.z,null)}}let xt=b.children;for(let St=0,_t=xt.length;St<_t;St++)hd(xt[St],O,X,F)}function w0(b,O,X,F){let{opaque:V,transmissive:xt,transparent:St}=b;A.setupLightsView(X),Ot===!0&&Tt.setGlobalState(R.clippingPlanes,X),F&&y.viewport(vt.copy(F)),V.length>0&&Mc(V,O,X),xt.length>0&&Mc(xt,O,X),St.length>0&&Mc(St,O,X),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function C0(b,O,X,F){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[F.id]===void 0){let wt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[F.id]=new Kn(1,1,{generateMipmaps:!0,type:wt?Wi:On,minFilter:va,samples:Math.max(4,C.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let xt=A.state.transmissionRenderTarget[F.id],St=F.viewport||vt;xt.setSize(St.z*R.transmissionResolutionScale,St.w*R.transmissionResolutionScale);let _t=R.getRenderTarget(),bt=R.getActiveCubeFace(),At=R.getActiveMipmapLevel();R.setRenderTarget(xt),R.getClearColor(ue),Jt=R.getClearAlpha(),Jt<1&&R.setClearColor(16777215,.5),R.clear(),_e&&Pt.render(X);let Vt=R.toneMapping;R.toneMapping=wi;let Wt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),A.setupLightsView(F),Ot===!0&&Tt.setGlobalState(R.clippingPlanes,F),Mc(b,X,F),Y.updateMultisampleRenderTarget(xt),Y.updateRenderTargetMipmap(xt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let pe=0,Fe=O.length;pe<Fe;pe++){let Oe=O[pe],{object:xe,geometry:gn,material:yt,group:Pn}=Oe;if(yt.side===gi&&xe.layers.test(F.layers)){let ae=yt.side;yt.side=An,yt.needsUpdate=!0,R0(xe,X,F,gn,yt,Pn),yt.side=ae,yt.needsUpdate=!0,wt=!0}}wt===!0&&(Y.updateMultisampleRenderTarget(xt),Y.updateRenderTargetMipmap(xt))}R.setRenderTarget(_t,bt,At),R.setClearColor(ue,Jt),Wt!==void 0&&(F.viewport=Wt),R.toneMapping=Vt}function Mc(b,O,X){let F=O.isScene===!0?O.overrideMaterial:null;for(let V=0,xt=b.length;V<xt;V++){let St=b[V],{object:_t,geometry:bt,group:At}=St,Vt=St.material;Vt.allowOverride===!0&&F!==null&&(Vt=F),_t.layers.test(X.layers)&&R0(_t,O,X,bt,Vt,At)}}function R0(b,O,X,F,V,xt){b.onBeforeRender(R,O,X,F,V,xt),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(R,O,X,F,b,xt),V.transparent===!0&&V.side===gi&&V.forceSinglePass===!1?(V.side=An,V.needsUpdate=!0,R.renderBufferDirect(X,O,F,V,b,xt),V.side=Ms,V.needsUpdate=!0,R.renderBufferDirect(X,O,F,V,b,xt),V.side=gi):R.renderBufferDirect(X,O,F,V,b,xt),b.onAfterRender(R,O,X,F,V,xt)}function bc(b,O,X){O.isScene!==!0&&(O=Xe);let F=G.get(b),V=A.state.lights,xt=A.state.shadowsArray,St=V.state.version,_t=dt.getParameters(b,V.state,xt,O,X,A.state.lightProbeGridArray),bt=dt.getProgramCacheKey(_t),At=F.programs;F.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,F.fog=O.fog;let Vt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;F.envMap=lt.get(b.envMap||F.environment,Vt),F.envMapRotation=F.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,At===void 0&&(b.addEventListener("dispose",ei),At=new Map,F.programs=At);let Wt=At.get(bt);if(Wt!==void 0){if(F.currentProgram===Wt&&F.lightsStateVersion===St)return U0(b,_t),Wt}else _t.uniforms=dt.getUniforms(b),z!==null&&b.isNodeMaterial&&z.build(b,X,_t),b.onBeforeCompile(_t,R),Wt=dt.acquireProgram(_t,bt),At.set(bt,Wt),F.uniforms=_t.uniforms;let wt=F.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(wt.clippingPlanes=Tt.uniform),U0(b,_t),F.needsLights=yb(b),F.lightsStateVersion=St,F.needsLights&&(wt.ambientLightColor.value=V.state.ambient,wt.lightProbe.value=V.state.probe,wt.directionalLights.value=V.state.directional,wt.directionalLightShadows.value=V.state.directionalShadow,wt.spotLights.value=V.state.spot,wt.spotLightShadows.value=V.state.spotShadow,wt.rectAreaLights.value=V.state.rectArea,wt.ltc_1.value=V.state.rectAreaLTC1,wt.ltc_2.value=V.state.rectAreaLTC2,wt.pointLights.value=V.state.point,wt.pointLightShadows.value=V.state.pointShadow,wt.hemisphereLights.value=V.state.hemi,wt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,wt.spotLightMatrix.value=V.state.spotLightMatrix,wt.spotLightMap.value=V.state.spotLightMap,wt.pointShadowMatrix.value=V.state.pointShadowMatrix),F.lightProbeGrid=A.state.lightProbeGridArray.length>0,F.currentProgram=Wt,F.uniformsList=null,Wt}function D0(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=No.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function U0(b,O){let X=G.get(b);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function _b(b,O){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(O.matrixWorld);for(let X=0,F=b.length;X<F;X++){let V=b[X];if(V.texture!==null&&V.boundingBox.containsPoint(v))return V}return null}function vb(b,O,X,F,V){O.isScene!==!0&&(O=Xe),Y.resetTextureUnits();let xt=O.fog,St=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?O.environment:null,_t=nt===null?R.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ee.workingColorSpace,bt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,At=lt.get(F.envMap||St,bt),Vt=F.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Wt=!!X.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),wt=!!X.morphAttributes.position,pe=!!X.morphAttributes.normal,Fe=!!X.morphAttributes.color,Oe=wi;F.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Oe=R.toneMapping);let xe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,gn=xe!==void 0?xe.length:0,yt=G.get(F),Pn=A.state.lights;if(Ot===!0&&(Yt===!0||b!==mt)){let Me=b===mt&&F.id===rt;Tt.setState(F,b,Me)}let ae=!1;F.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Pn.state.version||yt.outputColorSpace!==_t||V.isBatchedMesh&&yt.batching===!1||!V.isBatchedMesh&&yt.batching===!0||V.isBatchedMesh&&yt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&yt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&yt.instancing===!1||!V.isInstancedMesh&&yt.instancing===!0||V.isSkinnedMesh&&yt.skinning===!1||!V.isSkinnedMesh&&yt.skinning===!0||V.isInstancedMesh&&yt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&yt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&yt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&yt.instancingMorph===!1&&V.morphTexture!==null||yt.envMap!==At||F.fog===!0&&yt.fog!==xt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Tt.numPlanes||yt.numIntersection!==Tt.numIntersection)||yt.vertexAlphas!==Vt||yt.vertexTangents!==Wt||yt.morphTargets!==wt||yt.morphNormals!==pe||yt.morphColors!==Fe||yt.toneMapping!==Oe||yt.morphTargetsCount!==gn||!!yt.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(ae=!0):(ae=!0,yt.__version=F.version);let ni=yt.currentProgram;ae===!0&&(ni=bc(F,O,V),z&&F.isNodeMaterial&&z.onUpdateProgram(F,ni,yt));let Di=!1,Cs=!1,sr=!1,ye=ni.getUniforms(),Ve=yt.uniforms;if(y.useProgram(ni.program)&&(Di=!0,Cs=!0,sr=!0),F.id!==rt&&(rt=F.id,Cs=!0),yt.needsLights){let Me=_b(A.state.lightProbeGridArray,V);yt.lightProbeGrid!==Me&&(yt.lightProbeGrid=Me,Cs=!0)}if(Di||mt!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ye.setValue(N,"projectionMatrix",b.projectionMatrix),ye.setValue(N,"viewMatrix",b.matrixWorldInverse);let Ds=ye.map.cameraPosition;Ds!==void 0&&Ds.setValue(N,Zt.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&ye.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ye.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),mt!==b&&(mt=b,Cs=!0,sr=!0)}if(yt.needsLights&&(Pn.state.directionalShadowMap.length>0&&ye.setValue(N,"directionalShadowMap",Pn.state.directionalShadowMap,Y),Pn.state.spotShadowMap.length>0&&ye.setValue(N,"spotShadowMap",Pn.state.spotShadowMap,Y),Pn.state.pointShadowMap.length>0&&ye.setValue(N,"pointShadowMap",Pn.state.pointShadowMap,Y)),V.isSkinnedMesh){ye.setOptional(N,V,"bindMatrix"),ye.setOptional(N,V,"bindMatrixInverse");let Me=V.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),ye.setValue(N,"boneTexture",Me.boneTexture,Y))}V.isBatchedMesh&&(ye.setOptional(N,V,"batchingTexture"),ye.setValue(N,"batchingTexture",V._matricesTexture,Y),ye.setOptional(N,V,"batchingIdTexture"),ye.setValue(N,"batchingIdTexture",V._indirectTexture,Y),ye.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&ye.setValue(N,"batchingColorTexture",V._colorsTexture,Y));let Rs=X.morphAttributes;if((Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0)&&U.update(V,X,ni),(Cs||yt.receiveShadow!==V.receiveShadow)&&(yt.receiveShadow=V.receiveShadow,ye.setValue(N,"receiveShadow",V.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&O.environment!==null&&(Ve.envMapIntensity.value=O.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=$R()),Cs){if(ye.setValue(N,"toneMappingExposure",R.toneMappingExposure),yt.needsLights&&xb(Ve,sr),xt&&F.fog===!0&&Et.refreshFogUniforms(Ve,xt),Et.refreshMaterialUniforms(Ve,F,st,ct,A.state.transmissionRenderTarget[b.id]),yt.needsLights&&yt.lightProbeGrid){let Me=yt.lightProbeGrid;Ve.probesSH.value=Me.texture,Ve.probesMin.value.copy(Me.boundingBox.min),Ve.probesMax.value.copy(Me.boundingBox.max),Ve.probesResolution.value.copy(Me.resolution)}No.upload(N,D0(yt),Ve,Y)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(No.upload(N,D0(yt),Ve,Y),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ye.setValue(N,"center",V.center),ye.setValue(N,"modelViewMatrix",V.modelViewMatrix),ye.setValue(N,"normalMatrix",V.normalMatrix),ye.setValue(N,"modelMatrix",V.matrixWorld),F.uniformsGroups!==void 0){let Me=F.uniformsGroups;for(let Ds=0,ar=Me.length;Ds<ar;Ds++){let N0=Me[Ds];W.update(N0,ni),W.bind(N0,ni)}}return ni}function xb(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function yb(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(b,O,X){let F=G.get(b);F.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),G.get(b.texture).__webglTexture=O,G.get(b.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:X,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){let X=G.get(b);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,X=0){nt=b,J=O,k=X;let F=null,V=!1,xt=!1;if(b){let _t=G.get(b);if(_t.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(N.FRAMEBUFFER,_t.__webglFramebuffer),vt.copy(b.viewport),at.copy(b.scissor),Nt=b.scissorTest,y.viewport(vt),y.scissor(at),y.setScissorTest(Nt),rt=-1;return}else if(_t.__webglFramebuffer===void 0)Y.setupRenderTarget(b);else if(_t.__hasExternalTextures)Y.rebindTextures(b,G.get(b.texture).__webglTexture,G.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Vt=b.depthTexture;if(_t.__boundDepthTexture!==Vt){if(Vt!==null&&G.has(Vt)&&(b.width!==Vt.image.width||b.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(b)}}let bt=b.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(xt=!0);let At=G.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(At[O])?F=At[O][X]:F=At[O],V=!0):b.samples>0&&Y.useMultisampledRTT(b)===!1?F=G.get(b).__webglMultisampledFramebuffer:Array.isArray(At)?F=At[X]:F=At,vt.copy(b.viewport),at.copy(b.scissor),Nt=b.scissorTest}else vt.copy(Mt).multiplyScalar(st).floor(),at.copy(Ee).multiplyScalar(st).floor(),Nt=zt;if(X!==0&&(F=Q),y.bindFramebuffer(N.FRAMEBUFFER,F)&&y.drawBuffers(b,F),y.viewport(vt),y.scissor(at),y.setScissorTest(Nt),V){let _t=G.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,_t.__webglTexture,X)}else if(xt){let _t=O;for(let bt=0;bt<b.textures.length;bt++){let At=G.get(b.textures[bt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+bt,At.__webglTexture,X,_t)}}else if(b!==null&&X!==0){let _t=G.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_t.__webglTexture,X)}rt=-1},this.readRenderTargetPixels=function(b,O,X,F,V,xt,St,_t=0){if(!(b&&b.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&St!==void 0&&(bt=bt[St]),bt){y.bindFramebuffer(N.FRAMEBUFFER,bt);try{let At=b.textures[_t],Vt=At.format,Wt=At.type;if(b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+_t),!C.textureFormatReadable(Vt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Wt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-F&&X>=0&&X<=b.height-V&&N.readPixels(O,X,F,V,q.convert(Vt),q.convert(Wt),xt)}finally{let At=nt!==null?G.get(nt).__webglFramebuffer:null;y.bindFramebuffer(N.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(b,O,X,F,V,xt,St,_t=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&St!==void 0&&(bt=bt[St]),bt)if(O>=0&&O<=b.width-F&&X>=0&&X<=b.height-V){y.bindFramebuffer(N.FRAMEBUFFER,bt);let At=b.textures[_t],Vt=At.format,Wt=At.type;if(b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+_t),!C.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let wt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,wt),N.bufferData(N.PIXEL_PACK_BUFFER,xt.byteLength,N.STREAM_READ),N.readPixels(O,X,F,V,q.convert(Vt),q.convert(Wt),0);let pe=nt!==null?G.get(nt).__webglFramebuffer:null;y.bindFramebuffer(N.FRAMEBUFFER,pe);let Fe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await UM(N,Fe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,wt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,xt),N.deleteBuffer(wt),N.deleteSync(Fe),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,X=0){let F=Math.pow(2,-X),V=Math.floor(b.image.width*F),xt=Math.floor(b.image.height*F),St=O!==null?O.x:0,_t=O!==null?O.y:0;Y.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,St,_t,V,xt),y.unbindTexture()},this.copyTextureToTexture=function(b,O,X=null,F=null,V=0,xt=0){let St,_t,bt,At,Vt,Wt,wt,pe,Fe,Oe=b.isCompressedTexture?b.mipmaps[xt]:b.image;if(X!==null)St=X.max.x-X.min.x,_t=X.max.y-X.min.y,bt=X.isBox3?X.max.z-X.min.z:1,At=X.min.x,Vt=X.min.y,Wt=X.isBox3?X.min.z:0;else{let Ve=Math.pow(2,-V);St=Math.floor(Oe.width*Ve),_t=Math.floor(Oe.height*Ve),b.isDataArrayTexture?bt=Oe.depth:b.isData3DTexture?bt=Math.floor(Oe.depth*Ve):bt=1,At=0,Vt=0,Wt=0}F!==null?(wt=F.x,pe=F.y,Fe=F.z):(wt=0,pe=0,Fe=0);let xe=q.convert(O.format),gn=q.convert(O.type),yt;O.isData3DTexture?(Y.setTexture3D(O,0),yt=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Y.setTexture2DArray(O,0),yt=N.TEXTURE_2D_ARRAY):(Y.setTexture2D(O,0),yt=N.TEXTURE_2D),y.activeTexture(N.TEXTURE0),y.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),y.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),y.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);let Pn=y.getParameter(N.UNPACK_ROW_LENGTH),ae=y.getParameter(N.UNPACK_IMAGE_HEIGHT),ni=y.getParameter(N.UNPACK_SKIP_PIXELS),Di=y.getParameter(N.UNPACK_SKIP_ROWS),Cs=y.getParameter(N.UNPACK_SKIP_IMAGES);y.pixelStorei(N.UNPACK_ROW_LENGTH,Oe.width),y.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Oe.height),y.pixelStorei(N.UNPACK_SKIP_PIXELS,At),y.pixelStorei(N.UNPACK_SKIP_ROWS,Vt),y.pixelStorei(N.UNPACK_SKIP_IMAGES,Wt);let sr=b.isDataArrayTexture||b.isData3DTexture,ye=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){let Ve=G.get(b),Rs=G.get(O),Me=G.get(Ve.__renderTarget),Ds=G.get(Rs.__renderTarget);y.bindFramebuffer(N.READ_FRAMEBUFFER,Me.__webglFramebuffer),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ds.__webglFramebuffer);for(let ar=0;ar<bt;ar++)sr&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(b).__webglTexture,V,Wt+ar),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(O).__webglTexture,xt,Fe+ar)),N.blitFramebuffer(At,Vt,St,_t,wt,pe,St,_t,N.DEPTH_BUFFER_BIT,N.NEAREST);y.bindFramebuffer(N.READ_FRAMEBUFFER,null),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||G.has(b)){let Ve=G.get(b),Rs=G.get(O);y.bindFramebuffer(N.READ_FRAMEBUFFER,$),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,H);for(let Me=0;Me<bt;Me++)sr?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ve.__webglTexture,V,Wt+Me):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ve.__webglTexture,V),ye?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Rs.__webglTexture,xt,Fe+Me):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Rs.__webglTexture,xt),V!==0?N.blitFramebuffer(At,Vt,St,_t,wt,pe,St,_t,N.COLOR_BUFFER_BIT,N.NEAREST):ye?N.copyTexSubImage3D(yt,xt,wt,pe,Fe+Me,At,Vt,St,_t):N.copyTexSubImage2D(yt,xt,wt,pe,At,Vt,St,_t);y.bindFramebuffer(N.READ_FRAMEBUFFER,null),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ye?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(yt,xt,wt,pe,Fe,St,_t,bt,xe,gn,Oe.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(yt,xt,wt,pe,Fe,St,_t,bt,xe,Oe.data):N.texSubImage3D(yt,xt,wt,pe,Fe,St,_t,bt,xe,gn,Oe):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,xt,wt,pe,St,_t,xe,gn,Oe.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,xt,wt,pe,Oe.width,Oe.height,xe,Oe.data):N.texSubImage2D(N.TEXTURE_2D,xt,wt,pe,St,_t,xe,gn,Oe);y.pixelStorei(N.UNPACK_ROW_LENGTH,Pn),y.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ae),y.pixelStorei(N.UNPACK_SKIP_PIXELS,ni),y.pixelStorei(N.UNPACK_SKIP_ROWS,Di),y.pixelStorei(N.UNPACK_SKIP_IMAGES,Cs),xt===0&&O.generateMipmaps&&N.generateMipmap(yt),y.unbindTexture()},this.initRenderTarget=function(b){G.get(b).__webglFramebuffer===void 0&&Y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Y.setTextureCube(b,0):b.isData3DTexture?Y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Y.setTexture2DArray(b,0):Y.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){J=0,k=0,nt=null,y.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),n.unpackColorSpace=ee._getUnpackColorSpace()}};var ot=rr(xc()),yc={news:{name:"\uC2E0\uBB38\uC9C0 \uB531\uC9C0",size:2.15,thickness:.12,hit:.9,mass:.86,accuracy:1.15},note:{name:"\uACF5\uCC45 \uB531\uC9C0",size:1.95,thickness:.2,hit:1,mass:1,accuracy:1},cal:{name:"\uB2EC\uB825 \uB531\uC9C0",size:1.78,thickness:.31,hit:1.1,mass:1.38,accuracy:.82}},i3={phase:"menu",turn:0,scores:[3,3],power:0,tilt:.46,message:"\uAC8C\uC784\uC744 \uC2DC\uC791\uD574 \uBCF4\uC138\uC694.",result:""};function T0(){let e=(0,vi.useRef)(null),t=(0,vi.useRef)(null),[n,i]=(0,vi.useState)(i3),[s,a]=(0,vi.useState)("ai"),[r,o]=(0,vi.useState)("normal"),[l,c]=(0,vi.useState)("note"),[f,p]=(0,vi.useState)("cal"),[u,d]=(0,vi.useState)(3);(0,vi.useEffect)(()=>{let g=e.current;if(!g)return;let h=new Yl;h.background=new kt(1445642),h.fog=new ql(1445642,18,36);let m=new dn(42,1,.1,80);m.position.set(0,10.8,13.6),m.lookAt(0,0,-1.8);let S=new sd({antialias:!0,alpha:!1});S.setPixelRatio(Math.min(window.devicePixelRatio,2)),S.outputColorSpace=fn,S.shadowMap.enabled=!0,S.shadowMap.type=$a,S.domElement.setAttribute("aria-label","\uB531\uC9C0\uCE58\uAE30 \uACBD\uAE30\uC7A5"),g.appendChild(S.domElement);let v=new ic(16771005,2758157,2.15);h.add(v);let E=new rc(16766106,4.2);E.position.set(-5,12,7),E.castShadow=!0,E.shadow.mapSize.set(2048,2048),E.shadow.camera.left=-12,E.shadow.camera.right=12,E.shadow.camera.top=12,E.shadow.camera.bottom=-12,h.add(E);let A=new ac(15152160,22,16,2);A.position.set(7,4,-7),h.add(A);function w(){let I=document.createElement("canvas");I.width=I.height=1024;let L=I.getContext("2d"),q=L.createLinearGradient(0,0,1024,1024);q.addColorStop(0,"#8f6d4e"),q.addColorStop(.55,"#74543b"),q.addColorStop(1,"#573a29"),L.fillStyle=q,L.fillRect(0,0,1024,1024);for(let W=0;W<900;W++){let K=(Math.sin(W*91.73)*.5+.5)*1024,ut=(Math.sin(W*47.21+1.7)*.5+.5)*1024,se=1+W*17%7;L.fillStyle=W%3?"rgba(34,18,10,.11)":"rgba(255,226,177,.07)",L.beginPath(),L.ellipse(K,ut,se*1.7,se,W,0,Math.PI*2),L.fill()}let it=new Eo(I);return it.colorSpace=fn,it.anisotropy=S.capabilities.getMaxAnisotropy(),it}let x=new ze(new da(18,24),new $n({map:w(),roughness:1,metalness:0}));x.rotation.x=-Math.PI/2,x.position.z=-1.3,x.receiveShadow=!0,h.add(x);let T=new $n({color:10297624,roughness:.74}),R=new Qn(18.6,.48,.48),D=new Qn(.48,.48,24.6);[[0,.23,-13.3],[0,.23,10.7]].forEach(I=>{let L=new ze(R,T);L.position.set(I[0],I[1],I[2]),L.castShadow=!0,h.add(L)}),[[-9.3,.23,-1.3],[9.3,.23,-1.3]].forEach(I=>{let L=new ze(D,T);L.position.set(I[0],I[1],I[2]),L.castShadow=!0,h.add(L)});let z=new Ts({color:16377021,transparent:!0,opacity:.5});[-9,8].forEach(I=>{let L=new ze(new da(12,.045),z);L.rotation.x=-Math.PI/2,L.position.set(0,.012,I),h.add(L)});let Q=new Ai;for(let I=0;I<42;I++){let L=new ze(new $l(.035+I%4*.012,0),new $n({color:I%2?5849135:10189402,roughness:1}));L.position.set(Math.sin(I*7.7)*8.4,.03,Math.sin(I*3.31+.8)*11-1.3),L.rotation.set(I,I*.4,I*.2),Q.add(L)}h.add(Q);let $=new Map;function H(I,L){let q=`${I}-${L}`,it=$.get(q);if(it)return it;let W=document.createElement("canvas");W.width=W.height=512;let K=W.getContext("2d"),ut=I===0?"#2f61d0":"#d7352c",se=I===0?"#17377e":"#82150f";K.fillStyle=ut,K.fillRect(0,0,512,512);for(let ve=0;ve<4;ve++)K.save(),K.translate(256,256),K.rotate(ve*Math.PI/2),K.translate(-256,-256),K.fillStyle=ve%2?ut:se,K.beginPath(),K.moveTo(0,0),K.lineTo(512,0),K.lineTo(256,256),K.closePath(),K.fill(),K.restore();if(K.strokeStyle="rgba(255,255,255,.42)",K.lineWidth=12,K.beginPath(),K.moveTo(0,0),K.lineTo(512,512),K.moveTo(512,0),K.lineTo(0,512),K.stroke(),L==="news"){K.globalAlpha=.32,K.fillStyle="#eee9dd",K.fillRect(90,82,332,348),K.strokeStyle="#333",K.lineWidth=5;for(let ve=120;ve<410;ve+=38)K.beginPath(),K.moveTo(116,ve),K.lineTo(396,ve),K.stroke()}else if(L==="note"){K.globalAlpha=.3,K.strokeStyle="#bce2ff",K.lineWidth=5;for(let ve=100;ve<430;ve+=42)K.beginPath(),K.moveTo(78,ve),K.lineTo(434,ve),K.stroke();K.strokeStyle="#ff9e91",K.beginPath(),K.moveTo(134,72),K.lineTo(134,440),K.stroke()}else K.globalAlpha=.9,K.fillStyle="#f4ecdc",K.fillRect(154,144,204,226),K.fillStyle="#b9241c",K.fillRect(154,144,204,52),K.fillStyle="#8b1a16",K.font="bold 112px sans-serif",K.textAlign="center",K.fillText("15",256,320);K.globalAlpha=1,K.strokeStyle="rgba(25,10,5,.8)",K.lineWidth=18,K.strokeRect(9,9,494,494);let $t=new Eo(W);return $t.colorSpace=fn,$t.anisotropy=S.capabilities.getMaxAnisotropy(),$.set(q,$t),$t}function J(I,L){let q=yc[L],it=new Ai,W=I===0?1521534:8525071,K=[new $n({color:W,roughness:.72}),new $n({color:W,roughness:.72}),new $n({map:H(I,L),roughness:.7}),new $n({color:13220240,roughness:.95}),new $n({color:W,roughness:.72}),new $n({color:W,roughness:.72})],ut=new ze(new Qn(q.size,q.thickness,q.size),K);ut.position.y=q.thickness/2,ut.castShadow=!0,ut.receiveShadow=!0,it.add(ut);let se=new Kl(new tc(new Qn(q.size*1.002,q.thickness*1.02,q.size*1.002)),new bo({color:2757643,transparent:!0,opacity:.72}));return se.position.y=q.thickness/2,it.add(se),it.userData={team:I,type:L},it}let k=new Ai,nt=new ze(new ec(.22,.28,48),new Ts({color:16768082,transparent:!0,opacity:.95,side:gi}));nt.rotation.x=-Math.PI/2,k.add(nt);let rt=new Ts({color:16768082}),mt=new ze(new Qn(.72,.025,.035),rt),vt=new ze(new Qn(.035,.025,.72),rt);k.add(mt,vt),k.position.y=.035,k.visible=!1,h.add(k);let at=null,Nt=null,ue="note",Jt="ai",j="normal",ct=["note","cal"],st=[3,3],Ct=0,Rt="menu",Mt="\uAC8C\uC784\uC744 \uC2DC\uC791\uD574 \uBCF4\uC138\uC694.",Ee="",zt=.46,qt=0,Ot=null,Yt=new P(0,0,-1.3),jt=null,Zt=null,Ie=0,Xe=0,_e=0;function re(I=!1){let L=performance.now();!I&&L-Xe<45||(Xe=L,i({phase:Rt,turn:Ct,scores:[...st],power:qt,tilt:zt,message:Mt,result:Ee}))}function N(I){I&&h.remove(I)}function tn(I,L,q=new P(0,0,-1.3)){N(at),ue=L,at=J(I,L),at.position.copy(q),at.position.y=.015,at.rotation.set(0,(Math.random()-.5)*.55,0),h.add(at)}function oe(){return Jt==="2p"||Ct===0}function C(I){let q=I%1550/1550*2;return q<1?q:2-q}let y=new oc,B=new Gt,G=new mi(new P(0,1,0),0);function Y(I){let L=S.domElement.getBoundingClientRect();B.x=(I.clientX-L.left)/L.width*2-1,B.y=-((I.clientY-L.top)/L.height)*2+1,y.setFromCamera(B,m);let q=new P;return y.ray.intersectPlane(G,q)?(q.x=qi.clamp(q.x,-7.5,7.5),q.z=qi.clamp(q.z,-10.5,8.5),q):null}function lt(I){if(Rt!=="aim"||!oe()||!at)return;let L=Y(I);if(!L)return;let q=yc[ue].size*1.65;if(Math.hypot(L.x-at.position.x,L.z-at.position.z)>q){Mt="\uC0C1\uB300 \uB531\uC9C0 \uC8FC\uBCC0\uC744 \uB20C\uB7EC \uD0C0\uC810\uC744 \uC815\uD558\uC138\uC694.",re(!0);return}I.preventDefault(),S.domElement.setPointerCapture?.(I.pointerId),Yt.copy(L),Yt.y=.03,k.position.copy(Yt),k.visible=!0,Ot={startTime:performance.now(),startY:I.clientY,pointerId:I.pointerId,initialTilt:zt},Rt="charge",Mt="\uB204\uB978 \uCC44 \uC704\uB85C \uBC00\uBA74 \uC138\uC6CC\uCE58\uAE30, \uC544\uB798\uB85C \uB0B4\uB9AC\uBA74 \uB215\uD600\uCE58\uAE30\uC785\uB2C8\uB2E4.",re(!0)}function ht(I){!Ot||Ot.pointerId!==I.pointerId||(I.preventDefault(),zt=qi.clamp(Ot.initialTilt+(Ot.startY-I.clientY)/180,0,1),qt=Math.max(.06,C(performance.now()-Ot.startTime)),re())}function Z(I){!Ot||Ot.pointerId!==I.pointerId||(I.preventDefault(),qt=Math.max(.06,C(performance.now()-Ot.startTime)),Ot=null,tt(Ct,Yt.clone(),qt,zt))}S.domElement.addEventListener("pointerdown",lt),S.domElement.addEventListener("pointermove",ht),S.domElement.addEventListener("pointerup",Z),S.domElement.addEventListener("pointercancel",()=>{Ot=null,Rt="aim",qt=0,k.visible=!1,Mt="\uC870\uC900\uC744 \uCDE8\uC18C\uD588\uC2B5\uB2C8\uB2E4.",re(!0)}),S.domElement.addEventListener("contextmenu",I=>I.preventDefault());function tt(I,L,q,it){if(!at)return;Rt="throw",k.visible=!1,Nt=J(I,ct[I]);let W=new P(0,1.35,I===0?9.2:-11.4);Nt.position.copy(W),Nt.rotation.y=I===0?0:Math.PI,h.add(Nt),jt={start:W,end:new P(L.x,.04,L.z),started:performance.now(),duration:620+it*180,attacker:I,power:q,tilt:it},Mt=`${I===0?"\uD50C\uB808\uC774\uC5B4 1":Jt==="ai"?"AI":"\uD50C\uB808\uC774\uC5B4 2"}\uC758 \uB0B4\uB824\uCE58\uAE30!`,re(!0)}function dt(){if(!jt||!at||!Nt)return;let I=jt,L=yc[ue],q=yc[ct[I.attacker]],it=at.worldToLocal(I.end.clone()),W=L.size/2,K=qi.clamp(Math.max(Math.abs(it.x),Math.abs(it.z))/W,0,1.35),ut=Math.abs(it.x)>W*1.38||Math.abs(it.z)>W*1.38,se=Math.abs(it.x)<W*.58&&Math.abs(it.z)<W*.58,$t=I.tilt<.38?1.12-L.mass*.13:0,ve=I.tilt>.62?.88+K*.34:0,ei=I.tilt>=.38&&I.tilt<=.62?.82:0,ld=Math.max($t,ve,ei)*(.64+K*.48)*(se?.68:1),cd=.91+Math.random()*.16,ir=ut?0:q.hit*I.power*ld*cd/(.7+L.mass*.3),Ma=ir>=.82,ud=Math.abs(it.x)>Math.abs(it.z)?"z":"x",Sc=new P(I.end.x-I.start.x,0,I.end.z-I.start.z).normalize();Zt={started:performance.now(),duration:Ma?920:680,flipped:Ma,axis:ud,push:Sc.multiplyScalar(.55+I.power*.8),baseY:at.position.y,baseRx:at.rotation.x,baseRz:at.rotation.z},Rt="reaction",_e=1,Mt=ut?"\uBE57\uB098\uAC14\uC2B5\uB2C8\uB2E4.":Ma?`\uB4A4\uC9D1\uD798 \uC810\uC218 ${ir.toFixed(2)} \xB7 \uB118\uC5B4\uAC04\uB2E4!`:`\uB4A4\uC9D1\uD798 \uC810\uC218 ${ir.toFixed(2)} \xB7 \uC870\uAE08 \uBAA8\uC790\uB78D\uB2C8\uB2E4.`,jt=null,re(!0)}function Et(){if(!Zt||!at)return;let I=Ct,L=1-I;if(Zt.flipped){if(st=[...st],st[L]--,st[I]++,N(at),N(Nt),at=null,Nt=null,st[L]<=0){Rt="ended",Ee=`${I===0?"\uD50C\uB808\uC774\uC5B4 1":Jt==="ai"?"AI":"\uD50C\uB808\uC774\uC5B4 2"} \uC2B9\uB9AC`,Mt="\uC0C1\uB300 \uB531\uC9C0\uB97C \uBAA8\uB450 \uD68D\uB4DD\uD588\uC2B5\uB2C8\uB2E4.",re(!0),Zt=null;return}tn(L,ct[L]),Mt="\uC131\uACF5! \uACF5\uACA9\uAD8C\uC744 \uC720\uC9C0\uD569\uB2C8\uB2E4."}else{let q=Nt?Nt.position.clone():new P(0,0,-1.3);N(at),at=Nt,Nt=null,ue=ct[I],at&&(at.position.set(q.x,.015,q.z),at.rotation.set(0,(Math.random()-.5)*.6,0)),Ct=L,Mt="\uC2E4\uD328. \uB358\uC9C4 \uB531\uC9C0\uAC00 \uBC14\uB2E5\uC5D0 \uB0A8\uACE0 \uACF5\uACA9\uAD8C\uC774 \uB118\uC5B4\uAC11\uB2C8\uB2E4."}Zt=null,qt=0,pt()}function pt(){let I=++Ie;if(Jt==="ai"&&Ct===1){Rt="ai",Mt="AI\uAC00 \uD0C0\uC810\uACFC \uAC01\uB3C4\uB97C \uACC4\uC0B0\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4...",re(!0);let L=j==="easy"?850:j==="normal"?1050:1250;window.setTimeout(()=>{if(I!==Ie||Rt!=="ai"||!at)return;let q=yc[ue],it=j==="easy"?.5:j==="normal"?.28:.12,W=Math.floor(Math.random()*4),K=q.size*(.55+Math.random()*.12),ut=at.position.clone();W===0?ut.x+=K:W===1?ut.x-=K:W===2?ut.z+=K:ut.z-=K,ut.x+=(Math.random()-.5)*it,ut.z+=(Math.random()-.5)*it;let se=ue==="cal"?.82:ue==="news"?.25:.58,$t=j==="easy"?.72+Math.random()*.2:.88+Math.random()*.11;zt=qi.clamp(se+(Math.random()-.5)*it*.35,0,1),qt=$t,tt(1,ut,$t,zt)},L)}else Rt="aim",Mt=`${Ct===0?"\uD50C\uB808\uC774\uC5B4 1":"\uD50C\uB808\uC774\uC5B4 2"} \uCC28\uB840 \xB7 \uC0C1\uB300 \uB531\uC9C0 \uC8FC\uBCC0\uC744 \uB204\uB974\uC138\uC694.`,re(!0)}t.current={start(I){Ie++,Jt=I.mode,j=I.difficulty,ct=[I.tile,I.opponentTile],st=[I.count,I.count],Ct=0,Ee="",qt=0,zt=.46,Ot=null,jt=null,Zt=null,N(at),N(Nt),at=null,Nt=null,tn(1,ct[1]),pt()},cancel(){Rt==="charge"&&(Ot=null,qt=0,k.visible=!1,Rt="aim",Mt="\uC870\uC900\uC744 \uCDE8\uC18C\uD588\uC2B5\uB2C8\uB2E4.",re(!0))}},tn(1,"cal");let ft=0,Tt=performance.now();function Dt(I){let L=Math.min((I-Tt)/1e3,.05);if(Tt=I,Ot){qt=Math.max(.06,C(performance.now()-Ot.startTime)),nt.rotation.z+=L*1.7;let q=1+Math.sin(I*.008)*.12;k.scale.setScalar(q),re()}if(jt&&Nt){let q=qi.clamp((I-jt.started)/jt.duration,0,1),it=1-Math.pow(1-q,3);Nt.position.lerpVectors(jt.start,jt.end,it),Nt.position.y=qi.lerp(jt.start.y,.04,it)+Math.sin(Math.PI*q)*(2.2+jt.tilt*1.25),Nt.rotation.x=jt.tilt*Math.PI*.44+q*Math.PI*(1.4+jt.power),Nt.rotation.z=q*Math.PI*3.4*(jt.attacker===0?1:-1),q>=1&&dt()}if(Zt&&at){let q=qi.clamp((I-Zt.started)/Zt.duration,0,1),it=1-Math.pow(1-q,3),W=Math.sin(Math.PI*q)*(Zt.flipped?1.55:.48);at.position.y=Zt.baseY+W,at.position.x+=Zt.push.x*L*(1-q),at.position.z+=Zt.push.z*L*(1-q),Zt.axis==="x"?at.rotation.x=Zt.baseRx+it*Math.PI*(Zt.flipped?1:.3):at.rotation.z=Zt.baseRz+it*Math.PI*(Zt.flipped?1:.3),q>=1&&Et()}_e>.001?(_e*=Math.pow(.035,L),m.position.x=Math.sin(I*.07)*_e*.16):m.position.x*=.9,m.lookAt(0,0,-1.8),S.render(h,m),ft=requestAnimationFrame(Dt)}ft=requestAnimationFrame(Dt);function Pt(){let I=Math.max(320,g.clientWidth),L=Math.max(420,g.clientHeight);S.setSize(I,L,!1),m.aspect=I/L,m.updateProjectionMatrix()}let U=new ResizeObserver(Pt);return U.observe(g),Pt(),()=>{Ie++,U.disconnect(),cancelAnimationFrame(ft),S.dispose(),$.forEach(I=>I.dispose()),S.domElement.removeEventListener("pointerdown",lt),S.domElement.removeEventListener("pointermove",ht),S.domElement.removeEventListener("pointerup",Z),g.removeChild(S.domElement),t.current=null}},[]);let _=()=>t.current?.start({mode:s,difficulty:r,tile:l,opponentTile:f,count:u}),M=n.tilt<.33?"\uB215\uD600\uCE58\uAE30":n.tilt>.66?"\uC138\uC6CC\uCE58\uAE30":"\uBE44\uC2A4\uB4EC\uD788";return(0,ot.jsxs)("main",{className:"page-shell",children:[(0,ot.jsxs)("header",{className:"hero",children:[(0,ot.jsxs)("div",{children:[(0,ot.jsx)("span",{className:"eyebrow",children:"RETRO PLAYGROUND \xB7 WEB GAME"}),(0,ot.jsx)("h1",{children:"\uB531\uC9C0\uCE58\uAE30"}),(0,ot.jsx)("p",{children:"\uD0C0\uC810\uACFC \uD798, \uCE58\uB294 \uAC01\uB3C4\uB97C \uC870\uC808\uD574 \uC2E4\uC81C \uB450\uAED8\uC640 \uACF5\uC911 \uD68C\uC804\uC774 \uC0B4\uC544 \uC788\uB294 \uB531\uC9C0\uB97C \uB0B4\uB824\uCCD0 \uBCF4\uC138\uC694."})]}),(0,ot.jsx)("div",{className:"prototype-badge",children:"ONLINE EDITION \xB7 \uC124\uCE58 \uC5C6\uC774 \uD50C\uB808\uC774"})]}),(0,ot.jsxs)("section",{className:"game-layout",children:[(0,ot.jsxs)("div",{className:"stage-card",children:[(0,ot.jsx)("div",{ref:e,className:"three-stage"}),(0,ot.jsxs)("div",{className:"score-strip","aria-live":"polite",children:[(0,ot.jsxs)("div",{children:[(0,ot.jsx)("small",{children:"\uD50C\uB808\uC774\uC5B4 1"}),(0,ot.jsx)("strong",{children:n.scores[0]})]}),(0,ot.jsx)("div",{className:"turn-chip",children:n.phase==="ended"?"\uACBD\uAE30 \uC885\uB8CC":n.phase==="menu"?"\uB300\uAE30 \uC911":`${n.turn===0?"\uD50C\uB808\uC774\uC5B4 1":s==="ai"?"AI":"\uD50C\uB808\uC774\uC5B4 2"} \uCC28\uB840`}),(0,ot.jsxs)("div",{children:[(0,ot.jsx)("small",{children:s==="ai"?"AI":"\uD50C\uB808\uC774\uC5B4 2"}),(0,ot.jsx)("strong",{children:n.scores[1]})]})]}),n.phase==="menu"&&(0,ot.jsx)("div",{className:"stage-overlay",children:(0,ot.jsxs)("div",{className:"overlay-panel",children:[(0,ot.jsx)("span",{children:"\uACE8\uBAA9 \uB531\uC9C0\uCE58\uAE30"}),(0,ot.jsx)("h2",{children:"\uB531\uC9C0\uB97C \uC9C1\uC811 \uB0B4\uB824\uCCD0 \uBCF4\uC138\uC694"}),(0,ot.jsx)("p",{children:"\uC0C1\uB300 \uB531\uC9C0 \uC8FC\uBCC0\uC744 \uB204\uB978 \uCC44 \uC704\xB7\uC544\uB798\uB85C \uC6C0\uC9C1\uC5EC \uAC01\uB3C4\uB97C \uC870\uC808\uD558\uACE0, \uD798 \uAC8C\uC774\uC9C0\uC758 \uC6D0\uD558\uB294 \uC9C0\uC810\uC5D0\uC11C \uC190\uC744 \uB5BC\uC138\uC694."}),(0,ot.jsx)("button",{onClick:_,children:"\uAC8C\uC784 \uC2DC\uC791"})]})}),n.phase==="ended"&&(0,ot.jsx)("div",{className:"stage-overlay",children:(0,ot.jsxs)("div",{className:"overlay-panel result-panel",children:[(0,ot.jsx)("span",{children:"FINAL RESULT"}),(0,ot.jsx)("h2",{children:n.result}),(0,ot.jsx)("p",{children:n.message}),(0,ot.jsx)("button",{onClick:_,children:"\uB2E4\uC2DC \uD558\uAE30"})]})})]}),(0,ot.jsxs)("aside",{className:"control-card",children:[(0,ot.jsxs)("div",{className:"control-heading",children:[(0,ot.jsxs)("div",{children:[(0,ot.jsx)("span",{children:"GAME CONTROL"}),(0,ot.jsx)("h2",{children:"\uAC8C\uC784 \uC870\uC791"})]}),(0,ot.jsx)("i",{className:`phase-light ${n.phase}`})]}),(0,ot.jsxs)("div",{className:"settings-grid",children:[(0,ot.jsxs)("label",{children:["\uAC8C\uC784 \uBAA8\uB4DC",(0,ot.jsxs)("select",{value:s,onChange:g=>a(g.target.value),children:[(0,ot.jsx)("option",{value:"ai",children:"AI \uB300\uC804"}),(0,ot.jsx)("option",{value:"2p",children:"\uB85C\uCEEC 2\uC778"})]})]}),(0,ot.jsxs)("label",{children:["AI \uC2E4\uB825",(0,ot.jsxs)("select",{value:r,onChange:g=>o(g.target.value),disabled:s==="2p",children:[(0,ot.jsx)("option",{value:"easy",children:"\uC26C\uC6C0"}),(0,ot.jsx)("option",{value:"normal",children:"\uBCF4\uD1B5"}),(0,ot.jsx)("option",{value:"hard",children:"\uC5B4\uB824\uC6C0"})]})]}),(0,ot.jsxs)("label",{children:["\uB0B4 \uB531\uC9C0",(0,ot.jsxs)("select",{value:l,onChange:g=>c(g.target.value),children:[(0,ot.jsx)("option",{value:"news",children:"\uC2E0\uBB38\uC9C0"}),(0,ot.jsx)("option",{value:"note",children:"\uACF5\uCC45"}),(0,ot.jsx)("option",{value:"cal",children:"\uB2EC\uB825"})]})]}),(0,ot.jsxs)("label",{children:["\uC0C1\uB300 \uB531\uC9C0",(0,ot.jsxs)("select",{value:f,onChange:g=>p(g.target.value),children:[(0,ot.jsx)("option",{value:"news",children:"\uC2E0\uBB38\uC9C0"}),(0,ot.jsx)("option",{value:"note",children:"\uACF5\uCC45"}),(0,ot.jsx)("option",{value:"cal",children:"\uB2EC\uB825"})]})]}),(0,ot.jsxs)("label",{className:"wide-setting",children:["\uC2DC\uC791 \uC7A5\uC218",(0,ot.jsxs)("select",{value:u,onChange:g=>d(Number(g.target.value)),children:[(0,ot.jsx)("option",{value:3,children:"3\uC7A5"}),(0,ot.jsx)("option",{value:5,children:"5\uC7A5"}),(0,ot.jsx)("option",{value:7,children:"7\uC7A5"})]})]})]}),(0,ot.jsxs)("div",{className:"meter-block",children:[(0,ot.jsxs)("div",{className:"meter-label",children:[(0,ot.jsx)("span",{children:"\uD798"}),(0,ot.jsxs)("strong",{children:[Math.round(n.power*100),"%"]})]}),(0,ot.jsx)("div",{className:"power-track",children:(0,ot.jsx)("i",{style:{width:`${n.power*100}%`}})})]}),(0,ot.jsxs)("div",{className:"angle-control",children:[(0,ot.jsxs)("div",{className:"angle-copy",children:[(0,ot.jsx)("small",{children:"\uCE58\uB294 \uAC01\uB3C4"}),(0,ot.jsx)("strong",{children:M}),(0,ot.jsx)("span",{children:"\uC704\uB85C \uBC00\uBA74 \uC138\uC6B0\uACE0, \uC544\uB798\uB85C \uB0B4\uB9AC\uBA74 \uB215\uD799\uB2C8\uB2E4."})]}),(0,ot.jsxs)("div",{className:"angle-visual",children:[(0,ot.jsx)("b",{children:"\uC138\uC6CC"}),(0,ot.jsx)("div",{className:"angle-track",children:(0,ot.jsx)("i",{style:{bottom:`${n.tilt*100}%`}})}),(0,ot.jsx)("b",{children:"\uB215\uD600"})]})]}),(0,ot.jsxs)("div",{className:"status-box",children:[(0,ot.jsx)("span",{children:"\uD604\uC7AC \uC0C1\uD0DC"}),(0,ot.jsx)("p",{children:n.message})]}),(0,ot.jsxs)("div",{className:"button-row",children:[(0,ot.jsx)("button",{className:"primary",onClick:_,children:n.phase==="menu"?"\uAC8C\uC784 \uC2DC\uC791":"\uCC98\uC74C\uBD80\uD130"}),(0,ot.jsx)("button",{className:"secondary",onClick:()=>t.current?.cancel(),disabled:n.phase!=="charge",children:"\uC870\uC900 \uCDE8\uC18C"})]}),(0,ot.jsxs)("div",{className:"test-notes",children:[(0,ot.jsx)("strong",{children:"\uAC8C\uC784 \uD2B9\uC9D5"}),(0,ot.jsxs)("ul",{children:[(0,ot.jsx)("li",{children:"\uC2E4\uC81C \uB450\uAED8\uAC00 \uB2E4\uB978 3\uC885 \uB531\uC9C0"}),(0,ot.jsx)("li",{children:"\uD3EC\uBB3C\uC120 \uBE44\uD589\uACFC \uD68C\uC804"}),(0,ot.jsx)("li",{children:"\uD0C0\uC810\xB7\uD798\xB7\uAC01\uB3C4 \uAE30\uBC18 \uB4A4\uC9D1\uD798 \uD310\uC815"}),(0,ot.jsx)("li",{children:"\uC785\uCCB4 \uADF8\uB9BC\uC790\xB7\uCE74\uBA54\uB77C \uCDA9\uACA9\xB7AI \uACF5\uACA9"})]})]})]})]})]})}var gb=rr(xc()),mb=document.getElementById("ddakji-game-root");if(!mb)throw new Error("\uB531\uC9C0\uCE58\uAE30 \uAC8C\uC784\uC744 \uD45C\uC2DC\uD560 \uC601\uC5ED\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");(0,pb.createRoot)(mb).render((0,gb.jsx)(T0,{}));})();
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
