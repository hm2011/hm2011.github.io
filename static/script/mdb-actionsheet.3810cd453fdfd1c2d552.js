(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{482:function(t,a,c){},528:function(t,a,c){"use strict";var n=c(482);c.n(n).a},558:function(t,a,c){"use strict";c.r(a);var n=c(13),e={name:"demo-page-actionsheet",props:{},data:function(){return{}},computed:{},components:{},methods:{showActionsheetA:function(){n.a.$mdb.actionsheet({tips:"提示信息",actions:[{text:"选项一",callback:function(){n.a.$mdb.alert("选项一")}},{text:"选项二",callback:function(){n.a.$mdb.alert("选项二")}},{text:"选项三",callback:function(){n.a.$mdb.alert("选项三")}}]})},showActionsheetB:function(){n.a.$mdb.actionsheet({actions:[{text:"选项一",callback:function(){n.a.$mdb.alert("选项一")}},{text:"选项二",callback:function(){n.a.$mdb.alert("选项二")}},{text:"选项三",callback:function(){n.a.$mdb.alert("选项三")}}]})},showActionsheetC:function(){n.a.$mdb.actionsheet({actions:[{type:"denger",text:"毁灭性操作",callback:function(){n.a.$mdb.confirm("毁灭性操作")}},{text:"一般操作1",callback:function(){n.a.$mdb.alert("一般操作1")}},{text:"一般操作2",callback:function(){n.a.$mdb.alert("一般操作2")}}]})},showActionsheetD:function(){n.a.$mdb.actionsheet({tips:"提示信息",actions:[{text:"选项一",callback:function(){n.a.$mdb.alert("选项一")}},{text:"选项二",callback:function(){n.a.$mdb.alert("选项二")}},{text:"选项三",callback:function(){n.a.$mdb.alert("选项三")}},{text:"选项四",callback:function(){n.a.$mdb.alert("选项四")}},{text:"选项五",callback:function(){n.a.$mdb.alert("选项五")}},{text:"选项六",callback:function(){n.a.$mdb.alert("选项六")}},{text:"选项七",callback:function(){n.a.$mdb.alert("选项七")}},{text:"选项八",callback:function(){n.a.$mdb.alert("选项八")}},{text:"选项九",callback:function(){n.a.$mdb.alert("选项九")}}]})}},created:function(){},mounted:function(){}},o=(c(528),c(1)),l=Object(o.a)(e,function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("mdb-frame",{attrs:{title:"动作列表 Actionsheet"}},[c("mdb-panel",{attrs:{padding:""}},[c("mdb-button",{staticClass:"btn",attrs:{type:"primary",block:""},on:{click:t.showActionsheetA}},[t._v("有提示信息")]),c("mdb-button",{staticClass:"btn",attrs:{type:"primary",block:""},on:{click:t.showActionsheetB}},[t._v("无提示信息")])],1),c("mdb-panel",{attrs:{padding:""}},[c("mdb-button",{staticClass:"btn",attrs:{type:"primary",block:""},on:{click:t.showActionsheetC}},[t._v("包含危险操作")])],1),c("mdb-panel",{attrs:{padding:""}},[c("mdb-button",{staticClass:"btn",attrs:{type:"primary",block:""},on:{click:t.showActionsheetD}},[t._v("大量选项")])],1)],1)},[],!1,null,"4421a980",null);a.default=l.exports}}]);