(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[258],{488:function(){if("undefined"!==typeof window){if(window.parent!==window)try{window.__REACT_DEVTOOLS_GLOBAL_HOOK__=window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__}catch(t){}if(!window.__REACT_DEVTOOLS_GLOBAL_HOOK__){var e=new Map;window.__REACT_DEVTOOLS_GLOBAL_HOOK__={supportsFiber:!0,renderers:e,inject:function(t){e.set(e.size+1,t)},onCommitFiberRoot:function(){},onCommitFiberUnmount:function(){}}}window.__REACT_DEVTOOLS_GLOBAL_HOOK__.__PlasmicPreambleVersion||(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.__PlasmicPreambleVersion="1")}},8120:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plasmic-host",function(){return n(3645)}])},3645:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var r=n(5893),o=n(7294),i=n.t(o,2),a=n(4298),u=(n(488),n(3935)),c=n.t(u,2);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=globalThis;_.__PlasmicFetcherRegistry=[];var f=globalThis;null==f.__PlasmicComponentRegistry&&(f.__PlasmicComponentRegistry=[]);var d,p,m=globalThis;function v(e,t){return h(e,t)}null==m.__PlasmicContextRegistry&&(m.__PlasmicContextRegistry=[]);var h=function(e,t){return e?t:Array.isArray(t)?t.map((function(t){return v(e,t)})):t&&(0,o.isValidElement)(t)&&"string"!==typeof t?(0,o.cloneElement)(t):t},w=globalThis,E=null!=(d=null==w||null==(p=w.__Sub)?void 0:p.setRepeatedElementFn)?d:function(e){h=e};var b=(0,o.createContext)(void 0);function O(){return(0,o.useContext)(b)}var y=globalThis;null==y.__PlasmicHostVersion&&(y.__PlasmicHostVersion="2");var g=[],C=new function(e){var t=this;this.value=e,this.set=function(e){t.value=e,g.forEach((function(e){return e()}))},this.get=function(){return t.value}}(null);function P(){return function(e,t){if(void 0===t&&(t=""),null===e||void 0===e)throw t=(function(e){return"string"===typeof e}(t)?t:t())||"",new Error("Value must not be undefined or null"+(t?"- "+t:""));return e}(new URL("https://fakeurl/"+location.hash.replace(/#/,"?")).searchParams.get("origin"),"Missing information from Plasmic window.")}var R=0;var L=(0,o.createContext)(!1);function T(){var e,t,n=!!window.parent,r=!(null==(e=location.hash)||!e.match(/\bcanvas=true\b/)),i=!(null==(t=location.hash)||!t.match(/\blive=true\b/))||!n,a=n&&!document.querySelector("#plasmic-studio-tag")&&!r&&!i,c=function(){var e=(0,o.useState)(0)[1];return(0,o.useCallback)((function(){e((function(e){return e+1}))}),[])}();if((0,o.useLayoutEffect)((function(){return g.push(c),function(){var e=g.indexOf(c);e>=0&&g.splice(e,1)}}),[c]),(0,o.useEffect)((function(){a&&n&&window.parent!==window&&function(){var e=document.createElement("script"),t=P();e.src=t+"/static/js/studio.js",document.body.appendChild(e)}()}),[a,n]),(0,o.useEffect)((function(){if(!a&&!document.querySelector("#getlibs")&&i){var e=document.createElement("script");e.id="getlibs",e.src=P()+"/static/js/getlibs.js",e.async=!1,e.onload=function(){null==window.__GetlibsReadyResolver||window.__GetlibsReadyResolver()},document.head.append(e)}}),[a]),!n)return null;if(r||i){var s=document.querySelector("#plasmic-app.__wab_user-body");return s||((s=document.createElement("div")).id="plasmic-app",s.classList.add("__wab_user-body"),document.body.appendChild(s)),(0,u.createPortal)((0,o.createElement)(A,{key:""+R},(0,o.createElement)(L.Provider,{value:r},C.get())),s,"plasmic-app")}return a&&window.parent===window?(0,o.createElement)("iframe",{src:"https://docs.plasmic.app/app-content/app-host-ready#appHostUrl="+encodeURIComponent(location.href),style:{width:"100vw",height:"100vh",border:"none",position:"fixed",top:0,left:0,zIndex:99999999}}):null}var S=function(e){var t=e.enableWebpackHmr,n=(0,o.useState)(null),r=n[0],i=n[1];return(0,o.useEffect)((function(){i((0,o.createElement)(T,null))}),[]),(0,o.createElement)(o.Fragment,null,!t&&(0,o.createElement)(j,null),r)};null==y.__Sub&&(console.log("Plasmic: Setting up app host dependencies"),y.__Sub={React:i,ReactDOM:c,setPlasmicRootNode:function(e){R++,C.set(e)},registerRenderErrorListener:function(e){return x.push(e),function(){var t=x.indexOf(e);t>=0&&x.splice(t,1)}},repeatedElement:v,setRepeatedElementFn:E,PlasmicCanvasContext:L,DataProvider:function(e){var t,n,r=e.name,i=e.data,a=e.children,u=null!=(t=O())?t:{};return r?o.createElement(b.Provider,{value:s({},u,(n={},n[r]=i,n))},a):o.createElement(o.Fragment,null,a)},useDataEnv:O});var x=[];var A=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,l(t,n),r.getDerivedStateFromError=function(e){return{error:e}};var i=r.prototype;return i.componentDidCatch=function(e){x.forEach((function(t){return t(e)}))},i.render=function(){return this.state.error?(0,o.createElement)("div",null,"Error: ",""+this.state.error.message):this.props.children},r}(o.Component);function j(){return null}function V(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(a.default,{src:"https://static1.plasmic.app/preamble.js",strategy:"beforeInteractive"}),(0,r.jsx)(S,{})]})}},4298:function(e,t,n){e.exports=n(699)}},function(e){e.O(0,[774,888,179],(function(){return t=8120,e(e.s=t);var t}));var t=e.O();_N_E=t}]);