(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{484:function(t,e,a){},530:function(t,e,a){"use strict";var i=a(484);a.n(i).a},556:function(t,e,a){"use strict";a.r(e);var i={name:"demo-page-date-picker",props:{},data:function(){return{datePickerValue:new Date,monthPickerValue:new Date}},computed:{},components:{},methods:{pickDate:function(){var t=this;t.$mdb.datePicker({type:"date",title:"选择日期",initValue:t.datePickerValue,loop:!1,inertia:!0,afterSubmit:function(e){t.$mdb.alert(e.getFullYear()+"年"+(e.getMonth()+1)+"月"+e.getDate()+"日"),t.datePickerValue=e}})},pickMonth:function(){var t=this;t.$mdb.datePicker({type:"month",title:"选择月份",initValue:t.monthPickerValue,loop:!1,inertia:!0,afterSubmit:function(e){t.$mdb.alert(e.getFullYear()+"年"+(e.getMonth()+1)+"月"),t.monthPickerValue=e}})}}},n=(a(530),a(1)),c=Object(n.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("mdb-frame",{attrs:{title:"日期选择器 DatePicker"}},[e("mdb-panel",{attrs:{padding:""}},[e("mdb-button",{staticClass:"btn",attrs:{type:"primary",block:""},on:{click:this.pickDate}},[this._v("选择日期")]),e("mdb-button",{staticClass:"btn",attrs:{type:"primary",block:""},on:{click:this.pickMonth}},[this._v("选择月份")])],1),e("p",{staticClass:"tips"},[this._v("如果只是单纯的选择年、月或日，请使用 popPicker 来实现。")])],1)},[],!1,null,"0f2ec3b8",null);e.default=c.exports}}]);