(this["webpackJsonpreact-learn"]=this["webpackJsonpreact-learn"]||[]).push([[7],{228:function(e,t,r){e.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSummaryError:"FormsControls_formSummaryError__1F2-S"}},229:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},230:function(e,t,r){"use strict";r.d(t,"b",(function(){return m})),r.d(t,"a",(function(){return u}));var n=r(239),a=r(0),o=r.n(a),l=r(228),c=r.n(l),m=function(e){var t=e.input,r=e.meta,a=r.touched,l=r.error,m=Object(n.a)(e,["input","meta"]),u=a&&l;return o.a.createElement("div",{className:c.a.formControl+" "+(u?c.a.error:"")},o.a.createElement("div",null,o.a.createElement("textarea",Object.assign({},t,m))),u&&o.a.createElement("span",null,l))},u=function(e){var t=e.input,r=e.meta,a=r.touched,l=r.error,m=Object(n.a)(e,["input","meta"]),u=a&&l;return o.a.createElement("div",{className:c.a.formControl+" "+(u?c.a.error:"")},o.a.createElement("div",null,o.a.createElement("input",Object.assign({},t,m))),u&&o.a.createElement("span",null,l))}},299:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(108),l=r(109),c=r(230),m=r(229),u=r(25),i=r(22),s=r(6),f=r(228),d=r.n(f),E=Object(l.a)({form:"login"})((function(e){var t=e.handleSubmit,r=e.error;return a.a.createElement("form",{onSubmit:t},a.a.createElement("div",null,a.a.createElement(o.a,{placeholder:"Email",name:"email",component:c.a,validate:[m.b]})),a.a.createElement("div",null,a.a.createElement(o.a,{placeholder:"Password",name:"password",component:c.a,validate:[m.b],type:"password"})),a.a.createElement("div",null,a.a.createElement(o.a,{component:c.a,name:"rememberMe",type:"checkbox"})," remember me"),r&&a.a.createElement("div",{className:d.a.formSummaryError},r),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))}));t.default=Object(i.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:u.c})((function(e){return e.isAuth?a.a.createElement(s.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(E,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))}))}}]);
//# sourceMappingURL=7.bf6c5b07.chunk.js.map