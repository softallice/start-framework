(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[60],{f2a4:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-page",{staticClass:"q-pa-sm"},[e("div",{staticStyle:{height:"85vh"},attrs:{id:"myMap"}})])},o=[],p={name:"Map",data(){return{mapData:""}},mounted(){this.initMap()},methods:{initMap(){var a={lat:-25.363,lng:131.044};this.mapData=new google.maps.Map(document.getElementById("myMap"),{center:{lat:-25.363,lng:131.044},zoom:7});new google.maps.Marker({position:a,map:this.mapData,title:"Hello World!"})}}},s=p,i=e("2877"),l=e("9989"),m=e("eebe"),r=e.n(m),c=Object(i["a"])(s,n,o,!1,null,"a99fc48c",null);t["default"]=c.exports;r()(c,"components",{QPage:l["a"]})}}]);