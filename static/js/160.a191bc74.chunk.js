"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[160],{155:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(689),a=n(87),c="MoviesList_link__8rTGX",u=n(184),s=function(e){var t=e.movies,n=(0,r.TH)();return(0,u.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.title;return r&&(0,u.jsx)("li",{children:(0,u.jsx)(a.Link,{className:c,to:{pathname:"/movies/".concat(t)},state:{from:n},children:r})},t)}))})}},436:function(e,t,n){n.d(t,{Bt:function(){return f},Y5:function(){return i},d5:function(){return p},jb:function(){return l},n2:function(){return o}});var r=n(861),a=n(757),c=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s={method:"GET",headers:{accept:"application/json","content-type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzkzMGZmOGVjN2Y3MDIzMzQ2OTRhMjgyMWM2M2Q4MyIsInN1YiI6IjY0YzQyNzJiZWMwYzU4MDBlODBiMjI4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gnPmaXvRcXQrh2jdHCD7pTM-2igyCL7PyWdhAbgcU5A"}},o=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("trending/all/day?language=en-US",s);case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(t,"?language=en-US"),s);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("search/movie?query=".concat(t),s);case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(t,"/credits"),s);case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(t,"/reviews"),s);case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},160:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(433),a=n(439),c=n(791),u=n(436),s=n(87),o="Search_form__KGT+E",i="Search_input__PXR0c",l="Search_button__eG3f0",p=n(184),f=function(e){var t=e.onSubmit,n="";return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("form",{className:o,onSubmit:function(e){e.preventDefault();var r=e.currentTarget;n=r.elements.query.value,t(n),r.reset()},children:[(0,p.jsx)("input",{className:i,type:"text",name:"query",defaultValue:n}),(0,p.jsx)("button",{className:l,type:"submit",children:"Search"})]})})},v=n(155),h=function(){var e,t=(0,c.useState)([]),n=(0,a.Z)(t,2),o=n[0],i=n[1],l=(0,s.useSearchParams)(),h=(0,a.Z)(l,2),m=h[0],d=h[1],x=null!==(e=m.get("query"))&&void 0!==e?e:"";return(0,c.useEffect)((function(){x&&(0,u.jb)(x).then((function(e){return i((0,r.Z)(e))}))}),[x]),(0,p.jsx)("section",{children:(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)(f,{onSubmit:function(e){d({query:e})}}),(0,p.jsx)(v.Z,{movies:o})]})})}}}]);
//# sourceMappingURL=160.a191bc74.chunk.js.map