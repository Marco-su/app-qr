(this["webpackJsonpapp-qr-codes"]=this["webpackJsonpapp-qr-codes"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},56:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(15),l=n.n(a),o=(n(24),n(25),n(26),n(0)),s=function(){return Object(o.jsx)("header",{id:"header",children:Object(o.jsx)("div",{children:Object(o.jsx)("span",{children:"QR Codes"})})})},i=(n(28),n(2)),j=Object(c.createContext)(),u=function(e){var t=e.children,n=Object(c.useState)("url"),r=Object(i.a)(n,2),a=r[0],l=r[1];return Object(o.jsx)(j.Provider,{value:{qrType:a,setQrType:l},children:t})},d=j,b=n(10),O=n.n(b),p=n(16),A=(n(30),n(17)),v=n.n(A),f=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),l=Object(i.a)(a,2),s=l[0],j=l[1],u=Object(c.useState)(null),b=Object(i.a)(u,2),A=b[0],f=b[1],x=Object(c.useState)(""),g=Object(i.a)(x,2),h=g[0],V=g[1],q=Object(c.useContext)(d).qrType,U={color:{dark:s,light:A}},Q=function(){var e=Object(p.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,v.a.toDataURL(n,U);case 4:c=e.sent,V(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{id:"generator-container",children:[Object(o.jsxs)("form",{onSubmit:Q,children:["url"===q?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{className:"url-label",children:"Your URL"}),Object(o.jsx)("input",{className:"form-control mb-3",type:"url",name:"url",placeholder:"https://example.com",required:!0,onChange:function(e){return r(e.target.value)}})]}):Object(o.jsx)("input",{className:"form-control mb-3",type:"text",name:"text",placeholder:"Your Text",required:!0,onChange:function(e){return r(e.target.value)}}),Object(o.jsxs)("div",{className:"color-content mb-3",children:[Object(o.jsxs)("div",{className:"input-color-container",children:[Object(o.jsx)("label",{children:"Code color"}),Object(o.jsx)("input",{type:"color",onChange:function(e){return j(e.target.value)}})]}),Object(o.jsxs)("div",{className:"input-color-container",children:[Object(o.jsx)("label",{children:"Background color"}),Object(o.jsx)("input",{type:"color",value:"#ffffff",onChange:function(e){return f(e.target.value)}})]}),Object(o.jsx)("span",{className:"text-danger small mt-2",children:"select contrasting colors"})]}),Object(o.jsx)("button",{className:"btn btn-success",children:"Generate QR"})]}),Object(o.jsxs)("figure",{children:[Object(o.jsx)("img",{src:h||"data:image/png;base64,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",alt:"QR-Code"}),Object(o.jsx)("button",{className:"btn btn-success ".concat(h?"":"disabled"),children:Object(o.jsx)("a",{href:h,rel:"noreferer",download:!0,children:"Download QR"})})]})]})},x=(n(56),n(18)),g=n.n(x),h=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(""),n=Object(i.a)(t,2),r=n[0],a=n[1],l=Object(c.useState)(!1),s=Object(i.a)(l,2),j=s[0],u=s[1];return Object(o.jsxs)("div",{id:"qr-reader",children:[Object(o.jsx)("button",{className:"btn btn-success",onClick:function(){e.current.openImageDialog()},children:"Scan QR"}),Object(o.jsx)("div",{className:"qr-image",children:Object(o.jsx)(g.a,{ref:e,delay:300,onError:function(e){console.log(e)},onScan:function(e){e&&(a(e),u(!0))},legacyMode:!0})}),j?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h4",{children:"Your code:"}),Object(o.jsx)("input",{className:"form-control",type:"text",value:r})," "]}):null]})},V=function(){var e=Object(c.useContext)(d),t=e.qrType,n=e.setQrType;return Object(o.jsxs)("main",{children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("div",{className:"qr-type-container",children:Object(o.jsx)("button",{className:"".concat("url"===t?"active":""," qr-type-button"),onClick:function(){return n("url")},children:"URL"})}),Object(o.jsx)("div",{className:"qr-type-container",children:Object(o.jsx)("button",{className:"".concat("url"===t?"":"active"," qr-type-button"),onClick:function(){return n("text")},children:"Text"})})]}),Object(o.jsxs)("div",{className:"qr-area",children:[Object(o.jsx)(f,{}),Object(o.jsx)(h,{})]})]})};var q=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(s,{}),Object(o.jsx)(u,{children:Object(o.jsx)(V,{})})]})};l.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(q,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.886de135.chunk.js.map