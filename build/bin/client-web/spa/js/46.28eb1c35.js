(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{"14f2":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"row q-col-gutter-sm q-py-sm"},[t("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},[t("q-card",{staticClass:"text-grey-8"},[t("q-card-section",{staticClass:"q-pa-none"},[t("q-table",{staticClass:"no-shadow",attrs:{data:e.data,title:"Page Visits","hide-header":"grid"===e.mode,columns:e.columns,"row-key":"name",filter:e.filter,pagination:e.pagination},on:{"update:pagination":function(a){e.pagination=a}},scopedSlots:e._u([{key:"top-right",fn:function(a){return[t("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!0),model:{value:e.filter,callback:function(a){e.filter=a},expression:"filter"}}),"list"===e.mode?t("q-btn",{staticClass:"q-px-sm",attrs:{flat:"",round:"",dense:"",icon:a.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:a.toggleFullscreen}},[t("q-tooltip",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{disable:e.$q.platform.is.mobile}},[e._v(e._s(a.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen")+"\n                ")])],1):e._e(),t("q-btn",{attrs:{color:"primary","icon-right":"archive",label:"Export to csv","no-caps":""},on:{click:e.exportTable}})]}}])})],1)],1)],1)])},l=[],i=t("a357");function o(e,a){let t=void 0!==a?a(e):e;return t=void 0===t||null===t?"":String(t),t=t.split('"').join('""'),`"${t}"`}var s={name:"TableVisits",data(){return{filter:"",mode:"list",columns:[{name:"id",align:"left",label:"User ID",field:"id",sortable:!0},{name:"user_name",align:"left",label:"User Name",field:"user_name",sortable:!0},{name:"desc",required:!0,label:"Page",align:"left",field:e=>e.name,sortable:!0},{name:"date",align:"right",label:"Date",field:"date",sortable:!0}],data:[{id:"U0001",name:"/login",date:"12-10-2019",user_name:"Pratik Patel"},{id:"U0002",name:"/Dashboard",date:"11-02-2019",user_name:"Razvan Stoenescu"},{id:"U0003",name:"/Map",date:"03-25-2019",user_name:"Pratik Patel"},{id:"U0004",name:"/Mail",date:"03-18-2019",user_name:"Jeff Galbraith"},{id:"U0005",name:"/Profile",date:"04-09-2019",user_name:"Pratik Patel"}],pagination:{rowsPerPage:10}}},methods:{exportTable(){const e=[this.columns.map(e=>o(e.label))].concat(this.data.map(e=>this.columns.map(a=>o("function"===typeof a.field?a.field(e):e[void 0===a.field?a.name:a.field],a.format)).join(","))).join("\r\n"),a=Object(i["a"])("table-export.csv",e,"text/csv");!0!==a&&this.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}}},r=s,c=t("2877"),d=t("f09f"),u=t("a370"),m=t("eaac"),p=t("27f9"),f=t("0016"),b=t("9c40"),g=t("05c0"),h=t("7f67"),v=t("eebe"),q=t.n(v),_=Object(c["a"])(r,n,l,!1,null,null,null);a["default"]=_.exports;q()(_,"components",{QCard:d["a"],QCardSection:u["a"],QTable:m["a"],QInput:p["a"],QIcon:f["a"],QBtn:b["a"],QTooltip:g["a"]}),q()(_,"directives",{ClosePopup:h["a"]})}}]);