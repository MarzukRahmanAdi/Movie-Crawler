(this.webpackJsonpproject_m=this.webpackJsonpproject_m||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var j=c(0),n=c.n(j),i=c(26),s=c.n(i),r=(c(32),c(33),c(8)),a=c(2),b=c(9),o=c(1);var l=function(){var e=Object(j.useState)(""),t=Object(b.a)(e,2),c=t[0],n=t[1];return console.log(c),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{type:"text",onChange:function(e){return function(e){var t=e.replace(" ","+");n(t)}(e.target.value)}}),Object(o.jsxs)(r.b,{to:"/"+c,children:[" ",Object(o.jsx)("button",{children:"Search"})," "]})]})},h=c(12),O=c.n(h);var d=function(){var e=Object(a.f)().id,t=Object(j.useState)({}),c=Object(b.a)(t,2),n=c[0],i=c[1],s=Object(j.useState)(!0),l=Object(b.a)(s,2),h=l[0],d=l[1];return Object(j.useEffect)((function(){O.a.get("http://www.omdbapi.com/?apikey=969c939f&s=".concat(e)).then((function(e){console.log(e.data.Search),i(e.data.Search),d(!1),console.log(n)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Search"}),h?"loading":n.map((function(e,t){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{children:Object(o.jsxs)(r.b,{to:"/movie/".concat(e.Title),children:[Object(o.jsx)("h1",{children:e.Title},t),Object(o.jsx)("img",{src:e.Poster,alt:e.Title})]})})})}))]})};var x=function(){var e=Object(a.f)().id,t=Object(j.useState)({}),c=Object(b.a)(t,2),n=c[0],i=c[1],s=Object(j.useState)(!0),r=Object(b.a)(s,2),l=r[0],h=r[1];return Object(j.useEffect)((function(){O.a.get("http://www.omdbapi.com/?apikey=969c939f&t=".concat(e)).then((function(e){console.log(e.data),i(e.data),h(!1),console.log(n)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Show Page"}),l?"loading":Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:n.Title}),Object(o.jsx)("img",{src:n.Poster,alt:n.Title})]})})]})};function u(){return Object(o.jsx)(r.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/users",children:"Users"})})]})}),Object(o.jsxs)(a.c,{children:[Object(o.jsx)(a.a,{path:"/Search",children:Object(o.jsx)(d,{})}),Object(o.jsx)(a.a,{path:"/movie/:id",children:Object(o.jsx)(x,{})}),Object(o.jsx)(a.a,{path:"/:id",children:Object(o.jsx)(d,{})}),Object(o.jsx)(a.a,{path:"/",children:Object(o.jsx)(l,{})})]})]})})}s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.8ada5197.chunk.js.map