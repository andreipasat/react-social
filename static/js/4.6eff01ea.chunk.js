(this["webpackJsonpreact-learn"]=this["webpackJsonpreact-learn"]||[]).push([[4],{228:function(t,e,n){t.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSummaryError:"FormsControls_formSummaryError__1F2-S"}},229:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}));var r=function(t){if(!t)return"Field is required"},a=function(t){return function(e){if(e&&e.length>t)return"Max length is ".concat(t," symbols")}}},230:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return i}));var r=n(239),a=n(0),o=n.n(a),s=n(228),u=n.n(s),c=function(t){var e=t.input,n=t.meta,a=n.touched,s=n.error,c=Object(r.a)(t,["input","meta"]),i=a&&s;return o.a.createElement("div",{className:u.a.formControl+" "+(i?u.a.error:"")},o.a.createElement("div",null,o.a.createElement("textarea",Object.assign({},e,c))),i&&o.a.createElement("span",null,s))},i=function(t){var e=t.input,n=t.meta,a=n.touched,s=n.error,c=Object(r.a)(t,["input","meta"]),i=a&&s;return o.a.createElement("div",{className:u.a.formControl+" "+(i?u.a.error:"")},o.a.createElement("div",null,o.a.createElement("input",Object.assign({},e,c))),i&&o.a.createElement("span",null,s))}},238:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(59);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(r=(s=u.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},296:function(t,e,n){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3cd8Y"}},297:function(t,e,n){t.exports={postsBlock:"MyPosts_postsBlock__2ifKf",posts:"MyPosts_posts__3tZ1c"}},298:function(t,e,n){t.exports={item:"Post_item__ihtu9"}},300:function(t,e,n){"use strict";n.r(e);var r=n(32),a=n(33),o=n(35),s=n(34),u=n(0),c=n.n(u),i=n(22),l=n(296),m=n.n(l),f=n(49),p=n(238),d=function(t){var e=Object(u.useState)(!1),n=Object(p.a)(e,2),r=n[0],a=n[1],o=Object(u.useState)(t.status),s=Object(p.a)(o,2),i=s[0],l=s[1];Object(u.useEffect)((function(){l(t.status)}),[t.status]);return c.a.createElement(c.a.Fragment,null,!r&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){a(!0)}},t.status||"----")),r&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),t.updateStatus(i)},value:i})))},b=function(t){var e=t.profile,n=t.status,r=t.updateStatus;return e?c.a.createElement("div",null,c.a.createElement("div",{className:m.a.descriptionBlock},c.a.createElement("img",{src:e.photos.large}),e.aboutMe,c.a.createElement(d,{status:n,updateStatus:r}))):c.a.createElement(f.a,null)},E=n(58),h=n(26),v=n(297),g=n.n(v),y=n(298),j=n.n(y),O=function(t){return c.a.createElement("div",{className:j.a.item},c.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHYe4Erx36g6c_g5O6I9TPkKiF9JrRIffJPxGilG3EUVLP2f9U&s"}),t.message,c.a.createElement("div",null,c.a.createElement("span",null,"like (",t.likes,")")))},S=n(108),_=n(109),P=n(229),k=n(230),w=Object(P.a)(10),x=Object(_.a)({form:"addNewPost"})((function(t){return c.a.createElement("form",{onSubmit:t.handleSubmit},c.a.createElement("div",null,c.a.createElement(S.a,{name:"newPost",component:k.b,placeholder:"New post",validate:[P.b,w]})),c.a.createElement("div",null,c.a.createElement("button",null,"New Post")))})),C=function(t){var e=Object(h.a)(t.posts).reverse().map((function(t){return c.a.createElement(O,{message:t.message,likes:t.likes,key:t.id})}));return c.a.createElement("div",{className:g.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement(x,{onSubmit:function(e){t.addPost(e.newPost)}}),c.a.createElement("div",{className:g.a.posts},e))},I=Object(i.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(E.a)(e))}}}))(C),N=function(t){var e=t.status,n=t.profile,r=t.updateStatus;return c.a.createElement("div",null,c.a.createElement(b,{status:e,profile:n,updateStatus:r}),c.a.createElement(I,null))},F=n(6),B=n(19),M=function(t){Object(o.a)(n,t);var e=Object(s.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return c.a.createElement(N,Object.assign({},this.props,{profile:this.props.profile,updateStatus:this.props.updateStatus}))}}]),n}(c.a.Component);e.default=Object(B.d)(Object(i.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getProfile:E.c,getStatus:E.d,updateStatus:E.e}),F.f)(M)}}]);
//# sourceMappingURL=4.6eff01ea.chunk.js.map