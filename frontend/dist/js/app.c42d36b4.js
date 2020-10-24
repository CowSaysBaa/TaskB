(function(t){function e(e){for(var i,s,a=e[0],u=e[1],l=e[2],d=0,f=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={app:0},o=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"3cad":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("div",{staticClass:"ui main container"},[n("Form",{attrs:{form:t.form},on:{onFormSubmit:t.onFormSubmit}}),n("TurtleList",{attrs:{turtles:t.turtles},on:{onDelete:t.onDelete,onEdit:t.onEdit}})],1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"ui containter"},[n("h1",[t._v("Task B4")])])])}],s=(n("99af"),n("bc3a")),a=n.n(s),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form"},[n("form",{staticClass:"ui form"},[n("div",{staticClass:"fields"},[n("div",{staticClass:"four wide field"},[n("label",[t._v("Turtle species")]),n("input",{attrs:{type:"text",name:"species"},domProps:{value:t.form.species},on:{change:t.handleChange}})]),n("div",{staticClass:"four wide field"},[n("label",[t._v("Turtle location")]),n("input",{attrs:{type:"text",name:"location"},domProps:{value:t.form.location},on:{change:t.handleChange}})]),n("div",{staticClass:"two wide field"},[n("button",{class:t.btnClass,on:{click:t.onFormSubmit}},[t._v(" "+t._s(t.btnName)+" ")])])])])])},l=[],c=(n("b0c0"),{name:"Form",data:function(){return{btnName:"Submit",btnClass:"ui primary button submit-button"}},props:{form:{type:Object}},methods:{handleChange:function(t){var e=t.target,n=e.name,i=e.value,r=this.form;r[n]=i,this.form=r},onFormSubmit:function(t){t.preventDefault(),this.formValidation()&&(this.$emit("onFormSubmit",this.form),this.btnName="Submit",this.btnClass="ui primary button submit-button",this.clearFormFields())},formValidation:function(){return""===document.getElementsByName("species")[0].value?(alert("Turtle species is empty"),!1):""!==document.getElementsByName("location")[0].value||(alert("Turtle location is empty"),!1)},clearFormFields:function(){this.form.species="",this.form.location="",this.form.isEdit=!1,document.querySelector("form").reset()}},updated:function(){this.form.isEdit&&(this.btnName="Update",this.btnClass="ui red button submit-button")}}),d=c,f=(n("ac02"),n("2877")),m=Object(f["a"])(d,u,l,!1,null,"28704eb0",null),p=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"turtle-list"},[n("div",{staticClass:"data"},[n("table",{staticClass:"ui celled table"},[t._m(0),n("tbody",t._l(t.turtles,(function(e){return n("Turtle",{key:e._id,attrs:{turtle:e},on:{onDelete:t.onDelete,onEdit:t.onEdit}})})),1)])])])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{staticStyle:{width:"50px","text-align":"centre"}},[t._v("ID")]),n("th",[t._v("Species")]),n("th",[t._v("Location")]),n("th",{staticStyle:{width:"148px"}},[t._v("Action")])])])}],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v(t._s(t.turtle._id))]),n("td",[t._v(t._s(t.turtle.species))]),n("td",[t._v(t._s(t.turtle.location))]),n("td",[n("button",{staticClass:"mini ui blue button",on:{click:t.onEdit}},[t._v("Edit")]),n("button",{staticClass:"mini ui red button",on:{click:t.onDelete}},[t._v("Delete")])])])},_=[],y={name:"Turtle",props:{turtle:{type:Object}},methods:{onDelete:function(){this.$emit("onDelete",this.turtle._id)},onEdit:function(){this.$emit("onEdit",this.turtle)}}},g=y,T=Object(f["a"])(g,v,_,!1,null,"369c4d92",null),E=T.exports,C={name:"TurtleList",components:{Turtle:E},props:{turtles:{type:Array}},methods:{onDelete:function(t){this.$emit("onDelete",t)},onEdit:function(t){this.$emit("onEdit",t)}}},w=C,O=Object(f["a"])(w,h,b,!1,null,"bd77cda2",null),S=O.exports,j={name:"App",components:{Form:p,TurtleList:S},data:function(){return{url:"https://taskb-turtle-database.herokuapp.com/api/turtles",turtles:[],form:{species:"",location:"",isEdit:!1}}},methods:{getTurtles:function(){var t=this;a.a.get(this.url).then((function(e){t.turtles=e.data.data}))},deleteTurtle:function(t){var e=this;a.a.delete("".concat(this.url,"/").concat(t)).then((function(){e.getTurtles()})).catch((function(t){alert(t)}))},createTurtle:function(t){var e=this;a.a.post(this.url,{species:t.species,location:t.location}).then((function(){e.getTurtles()})).catch((function(t){alert(t)}))},editTurtle:function(t){var e=this;a.a.put("".concat(this.url,"/").concat(t._id),{species:t.species,location:t.location}).then((function(){e.getTurtles()})).catch((function(t){alert(t)}))},onDelete:function(t){this.deleteTurtle(t)},onEdit:function(t){this.form=t,this.form.isEdit=!0},onFormSubmit:function(t){t.isEdit?this.editTurtle(t):this.createTurtle(t)}},created:function(){this.getTurtles()}},x=j,D=(n("034f"),Object(f["a"])(x,r,o,!1,null,null,null)),F=D.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(F)}}).$mount("#app")},"85ec":function(t,e,n){},ac02:function(t,e,n){"use strict";var i=n("3cad"),r=n.n(i);r.a}});
//# sourceMappingURL=app.c42d36b4.js.map