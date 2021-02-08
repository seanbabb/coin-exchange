(this["webpackJsonpcoin-exchange"]=this["webpackJsonpcoin-exchange"]||[]).push([[0],{36:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(0),a=t.n(r),i=t(22),o=t.n(i),s=(t(36),t(29)),u=t(5),l=t.n(u),h=t(10),j=t(8),b=t(3),f=t(4);function d(){var e=Object(b.a)(["\n    font-size: 2rem;\n    text-align: left;\n    padding: 1.5rem 0 1.5rem 5rem;\n"]);return d=function(){return e},e}var p=f.a.section(d());function O(e){var n=e.showBalance?"Hide Balance":"Show Balance",t=e.showBalance?Object(c.jsxs)("span",{children:["Balance: $",e.amount," "]}):null;return Object(c.jsxs)(p,{children:[t,Object(c.jsx)("button",{onClick:function(n){n.preventDefault(),e.handleToggleShowBalance()},children:n})]})}function x(){var e=Object(b.a)(["\n    border: 1px solid #cccccc;\n    width: 25vh;\n"]);return x=function(){return e},e}var v=f.a.td(x());function m(e){var n=e.showBalance?Object(c.jsx)(v,{children:e.balance}):null;return Object(c.jsxs)("tr",{children:[Object(c.jsx)(v,{children:e.name}),Object(c.jsx)(v,{children:e.ticker}),Object(c.jsxs)(v,{children:["$",e.price]}),n,Object(c.jsx)(v,{children:Object(c.jsx)("form",{action:"#",method:"POST",children:Object(c.jsx)("button",{onClick:function(n){n.preventDefault(),e.handleRefresh(e.tickerId)},children:"Refresh"})})})]})}function g(){var e=Object(b.a)(["\n    margin: 50px auto 50px auto;\n    display: inline-block;\n    font-size: 1.4rem;\n"]);return g=function(){return e},e}var k=f.a.table(g());function w(e){var n=e.showBalance?Object(c.jsx)("th",{children:"Balance"}):null;return Object(c.jsxs)(k,{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"Ticker"}),Object(c.jsx)("th",{children:"Price"}),n,Object(c.jsx)("th",{children:"Actions"})]})}),Object(c.jsx)("tbody",{children:e.coinData.map((function(n){var t=n.key,r=n.name,a=n.ticker,i=n.price,o=n.balance;return Object(c.jsx)(m,{handleRefresh:e.handleRefresh,name:r,ticker:a,showBalance:e.showBalance,balance:o,price:i,tickerId:t},t)}))})]})}var B=t(26),y=t(27),S=t(30),C=t(28),D=t.p+"static/media/logo.6ce24c58.svg";function F(){var e=Object(b.a)(["\nfont-size: 4rem;\n"]);return F=function(){return e},e}function R(){var e=Object(b.a)(["\n    height: 8rem;\n    pointer-events: none;\n"]);return R=function(){return e},e}function T(){var e=Object(b.a)(["\n    background-color: #282c34;\n    min-height: 20vh;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    color: white;\n"]);return T=function(){return e},e}var P=f.a.header(T()),I=f.a.img(R()),z=f.a.h1(F()),E=function(e){Object(S.a)(t,e);var n=Object(C.a)(t);function t(){return Object(B.a)(this,t),n.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){return Object(c.jsxs)(P,{children:[Object(c.jsx)(I,{src:D,alt:"React logo"}),Object(c.jsx)(z,{children:"Coin Exchange"})]})}}]),t}(r.Component),q=t(7),J=t.n(q);function L(){var e=Object(b.a)(["\n  text-align: center;\n  background-color: rgb(71, 71, 199);\n  color: #cccccc;\n"]);return L=function(){return e},e}var N=f.a.div(L()),U=function(e){return parseFloat(Number(e).toFixed(4))};var $=function(e){var n=Object(r.useState)(1e4),t=Object(j.a)(n,2),a=t[0],i=(t[1],Object(r.useState)(!0)),o=Object(j.a)(i,2),u=o[0],b=o[1],f=Object(r.useState)([]),d=Object(j.a)(f,2),p=d[0],x=d[1],v=function(){var e=Object(h.a)(l.a.mark((function e(){var n,t,c,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.a.get("https://api.coinpaprika.com/v1/coins");case 2:return n=e.sent,t=n.data.slice(0,10).map((function(e){return e.id})),"https://api.coinpaprika.com/v1/tickers/",c=t.map((function(e){return J.a.get("https://api.coinpaprika.com/v1/tickers/"+e)})),e.next=8,Promise.all(c);case 8:r=e.sent,a=r.map((function(e){var n=e.data;return{key:n.id,name:n.name,ticker:n.symbol,balance:0,price:U(n.quotes.USD.price)}})),x(a);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){0===p.length&&v()}));var m=function(){var e=Object(h.a)(l.a.mark((function e(n){var t,c,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.coinpaprika.com/v1/tickers/".concat(n),e.next=3,J.a.get(t);case 3:c=e.sent,r=U(c.data.quotes.USD.price),a=p.map((function(e){var t=Object(s.a)({},e);return n===e.key&&(t.price=r),t})),x(a);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(c.jsxs)(N,{children:[Object(c.jsx)(E,{}),Object(c.jsx)(O,{amount:a,showBalance:u,handleToggleShowBalance:function(){b((function(e){return!e}))}}),Object(c.jsx)(w,{coinData:p,showBalance:u,handleRefresh:m})]})},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,57)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),a(e),i(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)($,{})}),document.getElementById("root")),A()}},[[56,1,2]]]);
//# sourceMappingURL=main.d738c1e1.chunk.js.map