!function(e){function t(t){for(var s,i,a=t[0],u=t[1],l=t[2],c=0,h=[];c<a.length;c++)i=a[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);for(p&&p(t);h.length;)h.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],s=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(s=!1)}s&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var s={},o={1:0},n=[];function i(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=s,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var p=u;n.push([2,0]),r()}([,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0},function(e,t,r){e.exports=r(4)},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";r.r(t);var s=r(0);var o=[function(e,t,r){return".app"+t+"{height:300px;width:300px;border:1px solid #000;box-sizing:border-box}"}];var n=[function(e,t,r){return".game"+t+"{width:100%;height:100%}"}];var i=[function(e,t,r){return".board"+t+"{height:300px;width:300px}"}];var a=[function(e,t,r){return".square"+t+"{height:50px;width:50px;min-width:50px;min-height:50px;border:1px solid #000;box-sizing:border-box}"}];function u(e,t,r,s){const{d:o,h:n}=e;return[n("div",{classMap:{square:!0},key:0},[o(t.value)])]}var l=Object(s.registerTemplate)(u);u.stylesheets=[],a&&u.stylesheets.push.apply(u.stylesheets,a),u.stylesheetTokens={hostAttribute:"my-square-_square-host",shadowAttribute:"my-square-_square"};class p extends s.LightningElement{constructor(...e){super(...e),this.value=""}}Object(s.registerDecorators)(p,{publicProps:{value:{config:0}}});var c=Object(s.registerComponent)(p,{tmpl:l});function h(e,t,r,s){const{k:o,c:n,i:i,h:a}=e;return[a("div",{classMap:{board:!0},key:1},i(t.squares,(function(e,t){return n("my-square",c,{props:{value:e.value},key:o(0,e.position)},[])})))]}var y=Object(s.registerTemplate)(h);h.stylesheets=[],i&&h.stylesheets.push.apply(h.stylesheets,i),h.stylesheetTokens={hostAttribute:"my-board-_board-host",shadowAttribute:"my-board-_board"};class d extends s.LightningElement{constructor(...e){super(...e),this.squares=[{value:"",position:1},{value:"",position:2},{value:"",position:3},{value:"",position:4},{value:"",position:5},{value:"",position:6},{value:"",position:7},{value:"",position:8},{value:"",position:9}]}}Object(s.registerDecorators)(d,{track:{squares:1}});var b=Object(s.registerComponent)(d,{tmpl:y});function v(e,t,r,s){const{c:o,h:n}=e;return[n("div",{classMap:{game:!0},key:1},[o("my-board",b,{key:0},[])])]}var f=Object(s.registerTemplate)(v);v.stylesheets=[],n&&v.stylesheets.push.apply(v.stylesheets,n),v.stylesheetTokens={hostAttribute:"my-game-_game-host",shadowAttribute:"my-game-_game"};var m=r(1),g=r.n(m);class O{constructor(e){this.value=null,this.value=e}}Object(s.registerDecorators)(O,{fields:["value"]});var j=Object(s.registerComponent)(O,{tmpl:g.a});class w extends s.LightningElement{constructor(){super(),this.player1=void 0,this.player2=void 0,this.activePlayer1=!0,this.player1=new j("X"),this.player2=new j("O"),console.log("here!")}}Object(s.registerDecorators)(w,{fields:["player1","player2","activePlayer1"]});var x=Object(s.registerComponent)(w,{tmpl:f});function _(e,t,r,s){const{c:o,h:n}=e;return[n("div",{classMap:{app:!0},key:1},[o("my-game",x,{key:0},[])])]}var k=Object(s.registerTemplate)(_);_.stylesheets=[],o&&_.stylesheets.push.apply(_.stylesheets,o),_.stylesheetTokens={hostAttribute:"my-app-_app-host",shadowAttribute:"my-app-_app"};class P extends s.LightningElement{}var q=Object(s.registerComponent)(P,{tmpl:k});customElements.define("my-app",Object(s.buildCustomElementConstructor)(q))}]);