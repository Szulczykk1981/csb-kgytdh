(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,n,t){e.exports=t(24)},24:function(e,n,t){"use strict";t.r(n);var o,r,a,c,i,d,l,f=t(0),u=t.n(f),b=t(13),s=t.n(b),g=t(5),h=t(3),m=t(2),k=t(1),p=t(11),x={fonts:{primary:'"Mada", sans-serif'},main:{color:"#333333",background:"#eeeeee",selection:"rgba(0, 0, 0, 0.1)"},button:{default:{color:"#333333",background:"#ffffff"},hover:{background:"#eeeeee"},focus:{borderColor:"#eeeeee"}},badge:{color:"#333333",background:"#ffffff",borderColor:"#ffffff"},input:{default:{color:"#333333",background:"#fafafa",borderColor:"#eeeeee"},hover:{background:"#fafafa",borderColor:"#cccccc"},focus:{background:"#ffffff",borderColor:"#222222"}},checkbox:{default:{color:"#333333",tickColor:"#ffffff",checkBorderColor:"#eeeeee",checkBackground:"#ffffff"},hover:{color:"#999999",background:"#eeeeee",checkBorderColor:"#cccccc"},checked:{background:"#eeeeee",checkBorderColor:"#333333",checkBackground:"#333333"}}},v=Object(p.a)(Object(p.a)({},x),{},{main:{color:"#999999",background:"#161616",selection:"rgba(0, 0, 0, 0.1)"},button:{default:{color:"#999999",background:"#1b1b1b"},hover:{background:"#232323"},focus:{borderColor:"#1b1b1b"}},badge:{color:"#dddddd",background:"#222222",borderColor:"#222222"},input:{default:{color:"#dddddd",background:"#1b1b1b",borderColor:"#333333"},hover:{background:"#1b1b1b",borderColor:"#555555"},focus:{background:"#161616",borderColor:"#dddddd"}},checkbox:{default:{color:"#dddddd",tickColor:"#ffffff",checkBorderColor:"#333333",checkBackground:"#1b1b1b"},hover:{color:"#eeeeee",background:"#222222",checkBorderColor:"#444444"},checked:{color:"#ffffff",background:"#222222",tickColor:"#333333",checkBorderColor:"#eeeeee",checkBackground:"#eeeeee"}}}),w=Object(k.createGlobalStyle)(o||(o=Object(m.a)(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  html {\n    height: -webkit-fill-available;\n  }\n\n  #root,\n  body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n    min-height: -webkit-fill-available; /* mobile viewport bug fix */\n    height: 100%;\n  }\n\n  body {\n    font-family: ",";\n    font-size: 100%;\n    line-height: 1.5;\n    color: ",";\n    background-color: ",";\n    overflow-y: auto;\n    overflow-x: auto;\n    scroll-behavior: smooth;\n    transition: all 0.45s ease;\n  }\n\n  ::selection {\n    background-color: ",";\n  }\n\n  button {\n    padding: 0;\n    border: 0;\n    outline: none;\n    background: none;\n    -webkit-appearance: none;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n  }\n"])),function(e){return e.theme.fonts.primary},function(e){return e.theme.main.text},function(e){return e.theme.main.background},function(e){return e.theme.main.selection}),y=function(){var e=Object(f.useState)("light"),n=Object(h.a)(e,2),t=n[0],o=n[1],r=Object(f.useState)(!1),a=Object(h.a)(r,2),c=a[0],i=a[1],d=function(e){window.localStorage.setItem("theme",e),o(e)};return Object(f.useEffect)(function(){var e=window.localStorage.getItem("theme");window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&!e?d("dark"):e?o(e):d("light"),i(!0)},[]),[t,function(){d("light"===t?"dark":"light")},c]},j=k.default.div(r||(r=Object(m.a)(["\n  display: inline-block;\n  padding: 4px 8px;\n  font-size: 0.815em;\n  font-weight: 700;\n  line-height: 1.25;\n  letter-spacing: 0.025em;\n  color: ",";\n  background: ",";\n  border: 2px solid ",";\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  border-radius: 4px;\n  user-select: none;\n  cursor: default;\n  transition: all 0.45s ease;\n\n  ",";\n"])),function(e){return e.theme.badge.color},function(e){return e.theme.badge.background},function(e){return e.theme.badge.borderColor},function(e){return e.fixed&&"\n    z-index: 10000;\n    position: fixed;\n    top: 12px;\n    left: 12px;\n  "}),C=function(e){var n=e.children,t=e.fixed;return u.a.createElement(j,{fixed:t},n)},O=t(9),E="linear-gradient(15deg, #ce5f10 4%, #ef7308 10%, #efa108 40%, #fbd7a5 72%, #ffecc8 100%)",B=k.default.div(a||(a=Object(m.a)(["\n  position: relative;\n  height: ","px;\n  width: ","px;\n  color: ",";\n  background: ",";\n  border-radius: 50%;\n  transition: all 0.45s ease;\n\n  /* Create a fake mask for the crescent moon */\n  &::before {\n    content: '';\n    z-index: 200;\n    position: absolute;\n    top: -2px;\n    right: -2px;\n    width: 80%;\n    height: 80%;\n    background: ",";\n    border-radius: 50%;\n    transform: translate(0, 0);\n    transition: all 0.45s ease;\n  }\n"])),20,20,function(e){return e.theme.main.text},"linear-gradient(35deg, #4e37c7 0%, #5841d0 10%, #5841d0 20%, #5841d0 28%, #93cdff 82%, #93cdff 100%)",function(e){return e.theme.main.background}),z=k.default.span(c||(c=Object(m.a)(["\n  z-index: 100000;\n  position: absolute;\n  top: -","px;\n  left: ","px;\n  display: block;\n  height: ","px;\n  width: ","px;\n  pointer-events: none;\n  transition: all 0.45s ease;\n\n  /* Create tiny dot for stars & sun dots */\n  &::before {\n    content: '';\n    position: absolute;\n    top: 2px;\n    left: 0;\n    display: flex;\n    align-items: center;\n    width: ","px;\n    height: ","px;\n    border-radius: 4px;\n    background: #93cdff;\n    background: linear-gradient(25deg, #8d77ff, #93cdff);\n    transform: translateY(1px);\n    transition: all 0.45s ease;\n  }\n\n  ",";\n\n  ",";\n"])),10,8,40,4,2,2,function(e){var n=e.index,t=e.isLight;return n&&t&&"\n    /* Sunshine position & scale for light mode */\n    opacity: 1 !important;\n    transform: rotate(".concat(45*n,"deg);\n\n    &::before {\n      width: ").concat(4,"px;\n      height: ").concat(4,"px;\n      background: ").concat(E,";\n      transform: rotate(-").concat(45*n,"deg);\n    }\n  ")},function(e){var n=e.index,t=e.isLight,o=e.rotateValue;return n&&!t&&o&&"\n    /* Stars random rotate for dark mode */\n    transform: rotate(".concat(o/8+n,"deg) translateY(").concat(-n,"px);\n  ")}),S=k.default.div(i||(i=Object(m.a)(["\n  > span {\n    opacity: 0.4;\n  }\n"]))),M=k.default.button(d||(d=Object(m.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-size: 0.815em;\n  background: ",";\n  cursor: pointer;\n  border-radius: 1000px;\n  transition: all 0.45s ease;\n\n  ",";\n"])),function(e){return e.theme.main.background},function(e){return e.isLight&&"\n    ".concat(B," {\n      background: ").concat(E,";\n\n      &::before {\n        transform: translate(100%, -100%);\n      }\n    }\n  ")}),L=function(e){var n=e.theme,t=e.toggleTheme,o="light"===n,r=Object(f.useState)([]),a=Object(h.a)(r,2),c=a[0],i=a[1];return Object(f.useEffect)(function(){var e=[];for(var n in Object.keys(Object(O.a)(Array(8))))e.push(Math.floor(360*Math.random())+n);i(e)},[]),u.a.createElement(M,{isLight:o,onClick:t},u.a.createElement(B,null,u.a.createElement(S,{isLight:o},Object.keys(Object(O.a)(Array(8))).map(function(e,n){return u.a.createElement(z,{key:e,index:n+1,isLight:o,rotateValue:c[n]})}))))},T=k.default.div(l||(l=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  font-family: ",";\n\n  * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"])),function(e){return e.theme.fonts.primary});function I(){var e=y(),n=Object(h.a)(e,2),t=n[0],o=n[1],r="light"===t?x:v;return u.a.createElement(k.ThemeProvider,{theme:r},u.a.createElement(g.Normalize,null),u.a.createElement(w,null),u.a.createElement(T,null,u.a.createElement(C,{fixed:!0},"Dark Mode Toggle"),u.a.createElement(L,{theme:t,toggleTheme:o})))}var A=document.getElementById("root");s.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(g.Normalize,null),u.a.createElement(I,null)),A)}},[[17,1,2]]]);
//# sourceMappingURL=main.f9881ec4.chunk.js.map