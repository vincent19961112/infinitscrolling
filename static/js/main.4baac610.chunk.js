(this.webpackJsonpinfinitscrolling=this.webpackJsonpinfinitscrolling||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(17),o=n.n(r),a=n(3),i=n(7),s=n(6),u=n.n(s);var b=n(2);function j(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(1),s=Object(a.a)(o,2),j=s[0],l=s[1],O=function(e,t){var n=Object(c.useState)(!0),r=Object(a.a)(n,2),o=r[0],s=r[1],b=Object(c.useState)(!1),j=Object(a.a)(b,2),l=j[0],O=j[1],f=Object(c.useState)([]),d=Object(a.a)(f,2),h=d[0],g=d[1],p=Object(c.useState)(!1),v=Object(a.a)(p,2),x=v[0],k=v[1];return Object(c.useEffect)((function(){g([])}),[e]),Object(c.useEffect)((function(){var n;return s(!0),O(!1),u()({method:"GET",url:"https://openlibrary.org/search.json",params:{q:e,page:t},cancelToken:new u.a.CancelToken((function(e){return n=e}))}).then((function(e){g((function(t){return Object(i.a)(new Set([].concat(Object(i.a)(t),Object(i.a)(e.data.docs.map((function(e){return e.title}))))))})),k(e.data.docs.length>0),s(!1),console.log(e.data)})).catch((function(e){u.a.isCancel(e)||O(!0)})),function(){return n()}}),[e,t]),{loading:o,error:l,books:h,hasMore:x}}(n,j),f=O.books,d=O.hasMore,h=O.loading,g=O.error,p=Object(c.useRef)(),v=Object(c.useCallback)((function(e){h||(console.log(p.current),p.current&&p.current.disconnect(),p.current=new IntersectionObserver((function(e){e[0].isIntersecting&&d&&l((function(e){return e+1}))})),e&&p.current.observe(e),console.log(e))}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{type:"text",value:n,onChange:function(e){r(e.target.value),l(1)}}),f.map((function(e,t){return f.length===t+1?Object(b.jsx)("div",{ref:v,children:e},e):Object(b.jsx)("div",{children:e},e)})),Object(b.jsx)("div",{children:h&&"loading..."}),Object(b.jsx)("div",{children:g&&"error..."})]})}o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.4baac610.chunk.js.map