(this.webpackJsonpchucknorris=this.webpackJsonpchucknorris||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n.n(c),r=n(18),o=n.n(r),a=(n(24),n(25),n(9)),d=n(7),s=n.n(d),u=n(19),b=n(3),l=n(8),h=n.n(l),j=n(0),f={container:{display:"flex",flexDirection:"column",height:"100vh",width:"100vw",justifyContent:"center",alignItems:"center",gap:"16px",background:"radial-gradient(#a7d2ff, #573bb7)"},badge:{borderRadius:"12px",fontSize:"14px",fontWeight:"bold",color:"#573bb7",height:"28px",padding:"0 12px",background:"#FFFFFF40",display:"flex",alignItems:"center",justifyContent:"center",margin:"4px",float:"left"},activeBadge:{background:"linear-gradient(145deg, white, white, #a7d2ff)"},card:{padding:"8px 24px",borderRadius:"24px",width:"400px",color:"#573bb7",textAlign:"center"},button:{background:"#573bb7",color:"white",border:"none",borderRadius:"50em",height:"48px",padding:"0 24px",fontWeight:"bold"}},g=function(){var t=Object(c.useState)([]),e=Object(b.a)(t,2),n=e[0],i=e[1],r=Object(c.useState)("history"),o=Object(b.a)(r,2),d=o[0],l=o[1],g=Object(c.useState)(),p=Object(b.a)(g,2),x=p[0],O=p[1],v=Object(c.useState)(!0),k=Object(b.a)(v,2),y=k[0],m=k[1],w=function(){var t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h.a.get("https://api.chucknorris.io/jokes/categories").then((function(t){i(t.data)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),F=function(){m(!0),h.a.get("https://api.chucknorris.io/jokes/random?category=".concat(d)).then((function(t){O(t.data),m(!1)}))};return Object(c.useEffect)((function(){document.title="Chuck Norris - Fetch API",w(),F()}),[]),Object(c.useEffect)((function(){F()}),[d]),Object(j.jsxs)("div",{style:f.container,children:[Object(j.jsx)("img",{src:null===x||void 0===x?void 0:x.icon_url}),Object(j.jsx)("div",{style:f.card,children:y?"\ud83d\udd04":'"'.concat(null===x||void 0===x?void 0:x.value,'"')}),Object(j.jsx)("strong",{style:{color:"white",transition:"300ms"},children:"Select an category bellow or try a random joke by clicking button. \ud83e\udd18"}),Object(j.jsx)("div",{style:{width:"448px"},children:n.map((function(t){return Object(j.jsx)("div",{style:d===t?Object(a.a)(Object(a.a)({},f.badge),f.activeBadge):f.badge,onClick:function(){return l(t)},children:t})}))}),Object(j.jsx)("button",{style:f.button,onClick:function(){return F()},children:"try random \u26a1"})]})};var p=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(g,{})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),r(t),o(t)}))};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),x()}},[[46,1,2]]]);
//# sourceMappingURL=main.8d2a1bdb.chunk.js.map