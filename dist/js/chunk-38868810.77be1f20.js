(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38868810"],{ad2f:function(e,a,t){"use strict";var s=t("d865"),d=t.n(s);d.a},d702:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[e.isLoading?t("div",{staticClass:"loader"},[t("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"black"}})],1):e._e(),t("div",[t("v-card",{attrs:{dark:""}},[t("v-card-title",[e._v(" Covid records "),t("v-spacer"),t("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(a){e.search=a},expression:"search"}})],1),t("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.totalCases,"footer-props":{"items-per-page-options":[8,20,30,-1]},"items-per-page":8,search:e.search,dark:"",height:"70vh"},scopedSlots:e._u([{key:"item.deceased",fn:function(a){var s=a.item;return[t("span",{staticClass:"dailydeceased"},[e._v(e._s(s.deceased))])]}},{key:"item.recovered",fn:function(a){var s=a.item;return[t("span",{staticClass:"recoveredCases"},[e._v(e._s(s.recovered))])]}},{key:"item.totalRecovered",fn:function(a){var s=a.item;return[t("span",{staticClass:"allRecoveredCases"},[e._v(e._s(s.totalRecovered))])]}},{key:"item.totalDeceased",fn:function(a){var s=a.item;return[t("span",{staticClass:"totaldeceased"},[e._v(e._s(s.totalDeceased))])]}}])})],1)],1)])},d=[],i=(t("4160"),t("159b"),t("365c")),r=t("c1df"),o=t.n(r),c={name:"LandingPage",data:function(){return{casesTimeSeries:"",casesStatewise:"",casesTested:"",drawer:!1,isLoading:!1,headers:[{text:"Date",value:"date",width:"200"},{text:"Confirmed",value:"confirmed",width:"200"},{text:"Deceased",value:"deceased",width:"200"},{text:"Recovered",value:"recovered"},{text:"Total confirmed",value:"totalConfirmed",width:"200"},{text:"Total deceased",value:"totalDeceased",width:"200"},{text:"Total recovered",value:"totalRecovered",width:"200"}],totalCases:[]}},mounted:function(){this.getAllCovidCases()},methods:{getAllCovidCases:function(){var e=this;this.isLoading=!0,i["a"].getAllCovidCases().then((function(a){e.casesTimeSeries=a.data.cases_time_series.reverse(),e.casesStatewise=a.data.statewise,e.casesTested=a.data.tested,e.isLoading=!1,e.setAllTimeData(a.data.cases_time_series.reverse())})).catch((function(a){console.log(a),e.isLoading=!1}))},setAllTimeData:function(e){var a=[];e.forEach((function(e){a.push({date:o()(e.dateymd).format("DD-MM-YYYY hh:mm:a"),confirmed:e.dailyconfirmed,recovered:e.dailyrecovered,deceased:e.dailydeceased,totalConfirmed:e.totalconfirmed,totalDeceased:e.totaldeceased,totalRecovered:e.totalrecovered})})),this.totalCases=a},getColor:function(e){return e>400?"red":e>200?"orange":"green"}}},n=c,l=(t("ad2f"),t("2877")),v=t("6544"),u=t.n(v),f=t("b0af"),m=t("99d9"),h=t("8fea"),p=t("490a"),C=t("2fa4"),g=t("8654"),w=Object(l["a"])(n,s,d,!1,null,null,null);a["default"]=w.exports;u()(w,{VCard:f["a"],VCardTitle:m["a"],VDataTable:h["a"],VProgressCircular:p["a"],VSpacer:C["a"],VTextField:g["a"]})},d865:function(e,a,t){}}]);
//# sourceMappingURL=chunk-38868810.77be1f20.js.map