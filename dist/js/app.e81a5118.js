(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],f=0,d=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-69c5c4f4":"ba05f398","chunk-1dc32507":"00dba9dc","chunk-49fdf9ec":"a8f1d283","chunk-f46af166":"39329c2d","chunk-636d570f":"542b38bd","chunk-0baa37b4":"ff673056","chunk-38868810":"6416de1e","chunk-cb04682e":"1a5d8fe9"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-69c5c4f4":1,"chunk-1dc32507":1,"chunk-f46af166":1,"chunk-0baa37b4":1,"chunk-38868810":1,"chunk-cb04682e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-69c5c4f4":"1d3270d0","chunk-1dc32507":"2f52d777","chunk-49fdf9ec":"31d6cfe0","chunk-f46af166":"e189e813","chunk-636d570f":"31d6cfe0","chunk-0baa37b4":"48ad2187","chunk-38868810":"48ad2187","chunk-cb04682e":"4dedc324"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],f=s.getAttribute("data-href");if(f===r||f===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],l.parentNode.removeChild(l),n(c)},l.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(e);var d=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view")],1)},o=[],c=n("2877"),i=n("6544"),u=n.n(i),s=n("7496"),f={},d=Object(c["a"])(f,a,o,!1,null,null,null),l=d.exports;u()(d,{VApp:s["a"]});n("d3b7");var h=n("8c4f"),p=function(){return Promise.all([n.e("chunk-69c5c4f4"),n.e("chunk-cb04682e")]).then(n.bind(null,"d115"))},v=function(){return Promise.all([n.e("chunk-69c5c4f4"),n.e("chunk-1dc32507"),n.e("chunk-636d570f"),n.e("chunk-49fdf9ec"),n.e("chunk-38868810")]).then(n.bind(null,"d702"))},m=function(){return Promise.all([n.e("chunk-69c5c4f4"),n.e("chunk-1dc32507"),n.e("chunk-636d570f"),n.e("chunk-0baa37b4")]).then(n.bind(null,"80d7"))};r["a"].use(h["a"]);var g=[{path:"/",name:"LandingPage",component:p,children:[{title:"AllData",path:"/",name:"AllData",component:v},{title:"StateWiseDetails",path:"/state-wise-detail",name:"StateWiseDetails",component:m}]}],b=new h["a"]({mode:"history",base:"/",routes:g}),A=b,_=n("2f62"),T=n("bc3a"),E=n.n(T),S={getAllCovidCasesApi:function(){var e="https://data.covid19india.org/data.json";return E.a.get(e)},getStateWiseDetailedCasesApi:function(){var e="https://data.covid19india.org/v4/min/data.min.json";return E.a.get(e)},getCasesTimeSerieDataApi:function(){var e="https://data.covid19india.org/v4/min/timeseries.min.json";return E.a.get(e)}};function k(){return{overAllCovidData:{},overAllStatewiseCovidData:{},overAllCovidTestData:{},stateWiseDetailedData:{},timeSeriesData:{},errorObj:{}}}var D={namespaced:!0,state:k(),getters:{},mutations:{SET_OVER_ALL_COVID_DATA:function(e,t){return e.overAllCovidData=t},SET_OVER_ALL_STATEWISE_COVID_DATA:function(e,t){return e.overAllStatewiseCovidData=t},SET_OVER_ALL_COVID_TEST_DATA:function(e,t){return e.overAllCovidTestData=t},SET_STATEWISE_DETAILED_DATA:function(e,t){return e.stateWiseDetailedData=t},SET_TIME_SERIES_DATA:function(e,t){return e.timeSeriesData=t},ERR_MSG:function(e,t){return e.errorObj=t}},actions:{getOverAllCovidData:function(e){var t=e.commit;return new Promise((function(e,n){S.getAllCovidCasesApi().then((function(n){t("SET_OVER_ALL_COVID_DATA",n.data.cases_time_series),t("SET_OVER_ALL_STATEWISE_COVID_DATA",n.data.statewise),t("SET_OVER_ALL_COVID_TEST_DATA",n.data.tested),e(n)})).catch((function(e){n(e)}))}))},getStateWiseDetailedCases:function(e){var t=e.commit;return new Promise((function(e,n){S.getStateWiseDetailedCasesApi().then((function(n){t("SET_STATEWISE_DETAILED_DATA",n.data),e(n)})).catch((function(e){n(e)}))}))},fetchTimeSerieData:function(e){var t=e.commit;return new Promise((function(e,n){S.getCasesTimeSerieDataApi().then((function(n){t("SET_TIME_SERIES_DATA",n.data),e(n)})).catch((function(e){n(e)}))}))}}};r["a"].use(_["a"]);var w=new _["a"].Store({modules:{covid:D}}),y=n("9483");Object(y["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var C=n("f309");n("bf40");r["a"].use(C["a"]);var O=new C["a"]({icons:{iconfont:"md"},theme:{dark:!1},themes:{light:{primary:"#4682b4",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}});r["a"].config.productionTip=!1,new r["a"]({router:A,store:w,vuetify:O,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.e81a5118.js.map