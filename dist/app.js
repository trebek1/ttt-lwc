!function(e){function t(t){for(var s,i,a=t[0],l=t[1],u=t[2],c=0,h=[];c<a.length;c++)i=a[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);for(p&&p(t);h.length;)h.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],s=!0,a=1;a<r.length;a++){var l=r[a];0!==o[l]&&(s=!1)}s&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var s={},o={1:0},n=[];function i(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=s,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var p=l;n.push([2,0]),r()}([,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0},function(e,t,r){e.exports=r(4)},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";r.r(t);var s=r(0);var o=[function(e,t,r){return".app"+t+"{height:300px;width:300px;border:1px solid #000;box-sizing:border-box}"}];var n=[function(e,t,r){return".game"+t+"{width:100%;height:100%}"}];var i=[function(e,t,r){return".board"+t+"{display:flex;flex-wrap:wrap;height:152px;width:152px;box-sizing:border-box;border:1px solid #000}"}];var a=[function(e,t,r){return".square"+t+"{height:50px;width:50px;min-width:50px;min-height:50px;border:1px solid #000;box-sizing:border-box}"}];function l(e,t,r,s){const{d:o,h:n}=e;return[n("div",{classMap:{square:!0},key:0},[o(t.value)])]}var u=Object(s.registerTemplate)(l);l.stylesheets=[],a&&l.stylesheets.push.apply(l.stylesheets,a),l.stylesheetTokens={hostAttribute:"my-square-_square-host",shadowAttribute:"my-square-_square"};class p extends s.LightningElement{constructor(...e){super(...e),this.value="",this.position=-1}}Object(s.registerDecorators)(p,{publicProps:{value:{config:0},position:{config:0}}});var c=Object(s.registerComponent)(p,{tmpl:u});function h(e,t,r,s){const{k:o,b:n,c:i,i:a,h:l}=e,{_m0:u}=s;return[l("div",{classMap:{board:!0},key:1},a(t.squares,(function(e){return i("my-square",c,{props:{value:e.value,position:e.position},key:o(0,e.position),on:{click:u||(s._m0=n(t.handleClick))}},[])})))]}var d=Object(s.registerTemplate)(h);h.stylesheets=[],i&&h.stylesheets.push.apply(h.stylesheets,i),h.stylesheetTokens={hostAttribute:"my-board-_board-host",shadowAttribute:"my-board-_board"};class b extends s.LightningElement{constructor(...e){super(...e),this.squares=void 0}handleClick(e){e.stopPropagation();const{position:t,value:r}=e.target,s=new CustomEvent("squareclick",{cancelable:!1,composed:!0,bubbles:!0,detail:{position:t,value:r}});this.dispatchEvent(s)}}Object(s.registerDecorators)(b,{publicProps:{squares:{config:0}}});var y=Object(s.registerComponent)(b,{tmpl:d});function v(e,t,r,s){const{b:o,c:n,h:i}=e,{_m0:a}=s;return[i("div",{classMap:{game:!0},key:1},[n("my-board",y,{props:{squares:t.squares},key:0,on:{squareclick:a||(s._m0=o(t.squareclickhandler))}},[])])]}var f=Object(s.registerTemplate)(v);v.stylesheets=[],n&&v.stylesheets.push.apply(v.stylesheets,n),v.stylesheetTokens={hostAttribute:"my-game-_game-host",shadowAttribute:"my-game-_game"};var m=r(1),g=r.n(m);class x{constructor(e){this.value=null,this.value=e}}Object(s.registerDecorators)(x,{fields:["value"]});var w=Object(s.registerComponent)(x,{tmpl:g.a});class O{constructor(){this.value=[],this.value=[{value:null,position:1},{value:null,position:2},{value:null,position:3},{value:null,position:4},{value:null,position:5},{value:null,position:6},{value:null,position:7},{value:null,position:8},{value:null,position:9}]}}Object(s.registerDecorators)(O,{fields:["value"]});var j=Object(s.registerComponent)(O,{tmpl:g.a});class k extends s.LightningElement{squareclickhandler(e){console.log("clicked!",e)}constructor(){super(),this.activePlayer1=!0,this.squares=[],this.player1=void 0,this.player2=void 0,this.player1=new w("X"),this.player2=new w("O"),this.squares=new j}}Object(s.registerDecorators)(k,{track:{squares:1},fields:["activePlayer1","player1","player2"]});var _=Object(s.registerComponent)(k,{tmpl:f});function q(e,t,r,s){const{c:o}=e;return[o("my-game",_,{key:0},[])]}var P=Object(s.registerTemplate)(q);q.stylesheets=[],o&&q.stylesheets.push.apply(q.stylesheets,o),q.stylesheetTokens={hostAttribute:"my-app-_app-host",shadowAttribute:"my-app-_app"};class C extends s.LightningElement{}var T=Object(s.registerComponent)(C,{tmpl:P});customElements.define("my-app",Object(s.buildCustomElementConstructor)(T))}]);