import{S as t,i as s,s as a,e as n,t as r,k as o,c as e,a as c,g as l,d as i,n as h,b as f,f as u,D as d,F as v,h as p,G as g,O as m,H as y}from"../chunks/vendor-ec965bd2.js";import{g as x}from"../chunks/navigation-2ffed81e.js";import{r as b}from"../chunks/dataStore-a6af55cf.js";import"../chunks/singletons-12a22614.js";function E(t,s,a){const n=t.slice();return n[2]=s[a],n}function k(t){var s;let a,g,m,y,x,b,E,k,j,P,B,D,w,H=t[2].title+"",I=t[2].description+"",O=(null==(s=t[2].author)?void 0:s.username)+"";function V(){return t[1](t[2])}return{c(){a=n("div"),g=n("h4"),m=r(H),y=o(),x=n("p"),b=r(I),E=o(),k=n("p"),j=r("By: "),P=r(O),B=o(),this.h()},l(t){a=e(t,"DIV",{class:!0});var s=c(a);g=e(s,"H4",{class:!0});var n=c(g);m=l(n,H),n.forEach(i),y=h(s),x=e(s,"P",{class:!0});var r=c(x);b=l(r,I),r.forEach(i),E=h(s),k=e(s,"P",{class:!0});var o=c(k);j=l(o,"By: "),P=l(o,O),o.forEach(i),B=h(s),s.forEach(i),this.h()},h(){f(g,"class","font-bold"),f(x,"class","mt-2 text-gray-800"),f(k,"class","text-gray-500"),f(a,"class","hover:bg-gray-200 cursor-pointer px-6 py-2 border-b border-gray-500")},m(t,s){u(t,a,s),d(a,g),d(g,m),d(a,y),d(a,x),d(x,b),d(a,E),d(a,k),d(k,j),d(k,P),d(a,B),D||(w=v(a,"click",V),D=!0)},p(s,a){var n;t=s,1&a&&H!==(H=t[2].title+"")&&p(m,H),1&a&&I!==(I=t[2].description+"")&&p(b,I),1&a&&O!==(O=(null==(n=t[2].author)?void 0:n.username)+"")&&p(P,O)},d(t){t&&i(a),D=!1,w()}}}function j(t){let s,a,v,p,y,x=t[0],b=[];for(let n=0;n<x.length;n+=1)b[n]=k(E(t,x,n));return{c(){s=n("div"),a=n("h1"),v=r("PBOX"),p=o(),y=n("div");for(let t=0;t<b.length;t+=1)b[t].c();this.h()},l(t){s=e(t,"DIV",{class:!0});var n=c(s);a=e(n,"H1",{class:!0});var r=c(a);v=l(r,"PBOX"),r.forEach(i),n.forEach(i),p=h(t),y=e(t,"DIV",{class:!0});var o=c(y);for(let s=0;s<b.length;s+=1)b[s].l(o);o.forEach(i),this.h()},h(){f(a,"class","text-center text-3xl font-bold"),f(s,"class","my-4"),f(y,"class","container mx-auto mt-4")},m(t,n){u(t,s,n),d(s,a),d(a,v),u(t,p,n),u(t,y,n);for(let s=0;s<b.length;s+=1)b[s].m(y,null)},p(t,[s]){if(1&s){let a;for(x=t[0],a=0;a<x.length;a+=1){const n=E(t,x,a);b[a]?b[a].p(n,s):(b[a]=k(n),b[a].c(),b[a].m(y,null))}for(;a<b.length;a+=1)b[a].d(1);b.length=x.length}},i:g,o:g,d(t){t&&i(s),t&&i(p),t&&i(y),m(b,t)}}}var P=function(t,s,a,n){return new(a||(a=Promise))((function(r,o){function e(t){try{l(n.next(t))}catch(s){o(s)}}function c(t){try{l(n.throw(t))}catch(s){o(s)}}function l(t){var s;t.done?r(t.value):(s=t.value,s instanceof a?s:new a((function(t){t(s)}))).then(e,c)}l((n=n.apply(t,s||[])).next())}))};const B=({fetch:t})=>P(void 0,void 0,void 0,(function*(){const s=yield t("/posts");return{props:{posts:yield s.json()}}}));function D(t,s,a){let n;y(t,b,(t=>a(0,n=t)));return[n,t=>x("/blog/"+t.id)]}class w extends t{constructor(t){super(),s(this,t,D,j,a,{})}}export{w as default,B as load};
