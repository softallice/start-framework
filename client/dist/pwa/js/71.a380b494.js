(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[71],{bba6:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"container"},[a("div",{staticClass:"row justify-center"},[a("div",{staticClass:"col-12 q-pt-lg text-center text-blue-grey-9"},[a("span",{staticClass:"text-subtitle1"},[t._v("\n        Enter the String you want to insert into your custom QRCode.\n      ")])]),a("div",{staticClass:"col-10 q-pt-lg"},[a("q-input",{attrs:{rounded:"",outlined:"",label:"Value"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),a("div",{staticClass:"col-12 q-pt-md text-center"},[a("qriously",{attrs:{value:t.text,size:230}})],1),a("q-btn",{attrs:{color:"blue-grey-10",outline:"",label:"Donwload"},on:{click:t.donwloadCanvas}})],1)])},o=[],s={name:"Generator",data(){return{text:"https://www.naver.com/"}},methods:{donwloadCanvas(){const t=document.getElementsByTagName("canvas"),e=document.createElement("a");e.download="QRCode.png",e.href=t[0].toDataURL(),e.click()}}},l=s,c=a("2877"),r=a("9989"),i=a("27f9"),u=a("9c40"),d=a("eebe"),p=a.n(d),w=Object(c["a"])(l,n,o,!1,null,null,null);e["default"]=w.exports;p()(w,"components",{QPage:r["a"],QInput:i["a"],QBtn:u["a"]})}}]);