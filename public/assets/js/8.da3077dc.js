(window.webpackJsonp=window.webpackJsonp||[]).push([[8,11],{706:function(e,n,a){},709:function(e,n,a){"use strict";a(706)},769:function(e,n,a){"use strict";a.r(n);var t={name:"era",props:{genealogyData:{type:Array,default:function(){return[{name:"夏",sex:"man",son:"子四",daughter:"无",person:[{name:"中一",sex:"man",son:"子二",daughter:"无",children:[{name:"华二",sex:"man",children:[]},{name:"华一",sex:"woman",children:[]}]},{name:"二哥",sex:"man",son:"子二",daughter:"无",children:[{name:"华二",sex:"man",children:[]},{name:"华一",sex:"woman",children:[]}]},{name:"三",sex:"man",children:[]},{name:"龙发",sex:"man",son:"无",daughter:"无",children:[]}]}]}},eraData:{type:Array,default:function(){return["一代","二代","三代","四代","五代","六代","七代","八代","九代","十代","十一代","十二代"]}}},data:function(){return{}},methods:{}},r=(a(709),a(6)),s=Object(r.a)(t,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("main",{staticClass:"era"},e._l(e.eraData,(function(n,t){return a("div",{key:t,staticClass:"eraItem"},[a("div",{staticClass:"eraHeader"},[e._v("\n            "+e._s(n)+"\n        ")]),e._v(" "),e._m(0,!0)])})),0)}),[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"eraDetail"},[n("span",{staticClass:"line"})])}],!1,null,"415c27d3",null);n.default=s.exports},844:function(e,n,a){"use strict";a.r(n);var t={name:"genealogy",data:function(){return{genealogyData:[{name:"夏",sex:"man",son:"子四",daughter:"无",person:[{name:"中一",sex:"man",son:"子二",daughter:"无",children:[{name:"华二",sex:"man",children:[]},{name:"华一",sex:"woman",children:[]}]},{name:"二哥",sex:"man",son:"子二",daughter:"无",children:[{name:"华二",sex:"man",children:[]},{name:"华一",sex:"woman",children:[]}]},{name:"三",sex:"man",children:[]},{name:"龙发",sex:"man",son:"无",daughter:"无",children:[]}]}],eraData:["一代","二代","三代","四代","五代","六代","七代","八代","九代","十代","十一代","十二代"]}},components:{Era:a(769).default},methods:{}},r=a(6),s=Object(r.a)(t,(function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"genealogy"},[n("Era",{attrs:{genealogyData:this.genealogyData}})],1)}),[],!1,null,"4f8d262a",null);n.default=s.exports}}]);