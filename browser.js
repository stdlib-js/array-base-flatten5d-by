// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function a(e,r,i){var a=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=i?e+t(n):t(n)+e,a&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):n.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,u=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function y(e){var r,t,a=parseFloat(e.arg);if(!isFinite(a)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);a=e.arg}switch(e.specifier){case"e":case"E":t=a.toExponential(e.precision);break;case"f":case"F":t=a.toFixed(e.precision);break;case"g":case"G":c(a)<1e-4?((r=e.precision)>0&&(r-=1),t=a.toExponential(r)):t=a.toPrecision(e.precision),e.alternate||(t=f.call(t,v,"$1e"),t=f.call(t,b,"e"),t=f.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,u,"e+0$1"),t=f.call(t,g,"e-0$1"),e.alternate&&(t=f.call(t,d,"$1."),t=f.call(t,h,"$1.e")),a>=0&&e.sign&&(t=e.sign+t),t=e.specifier===p.call(e.specifier)?p.call(t):l.call(t)}function m(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}var _=String.fromCharCode,x=Array.isArray;function k(e){return e!=e}function E(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,i,t,n,o,c,l,p,f,u,g,d,h;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",l=1,p=0;p<e.length;p++)if("string"==typeof(t=e[p]))c+=t;else{if(r=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,k(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,k(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!k(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=k(o)?String(t.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=y(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=a(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(u=t.arg,g=t.width,d=t.padRight,h=void 0,(h=g-u.length)<0?u:u=d?u+m(h):m(h)+u)),c+=t.arg||"",l+=1}return c}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function T(e){var r,i,t,a;for(i=[],a=0,t=j.exec(e);t;)(r=e.slice(a,j.lastIndex-t[0].length)).length&&i.push(r),i.push(V(t)),a=j.lastIndex,t=j.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function $(e){var r,i;if("string"!=typeof e)throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[T(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return S.apply(null,r)}var F,I=Object.prototype,A=I.toString,C=I.__defineGetter__,R=I.__defineSetter__,O=I.__lookupGetter__,P=I.__lookupSetter__;function Z(e,r,i,t,a){var n,o,s,c,l,p,f,u,g,d,h,w,b,v,y;if(o=r[4],s=r[3],c=r[2],l=r[1],p=r[0],n=[],i){for(f=0;f<o;f++)for(u=0;u<s;u++)for(g=0;g<c;g++)for(d=0;d<l;d++)for(h=0;h<p;h++)n.push(t.call(a,e[h][d][g][u][f],[h,d,g,u,f],e));return n}for(h=0;h<p;h++)for(y=e[h],d=0;d<l;d++)for(v=y[d],g=0;g<c;g++)for(b=v[g],u=0;u<s;u++)for(w=b[u],f=0;f<o;f++)n.push(t.call(a,w[f],[h,d,g,u,f],e));return n}return F=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===A.call(i))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(O.call(e,r)||P.call(e,r)?(t=e.__proto__,e.__proto__=I,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&C&&C.call(e,r,i.get),o&&R&&R.call(e,r,i.set),e},F(Z,"assign",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,i,t,a,n,o,s){var c,l,p,f,u,g,d,h,w,b,v,y,m,_,x;if(c=r[4],l=r[3],p=r[2],f=r[1],u=r[0],x=n,i){for(g=0;g<c;g++)for(d=0;d<l;d++)for(h=0;h<p;h++)for(w=0;w<f;w++)for(b=0;b<u;b++)t[x]=o.call(s,e[b][w][h][d][g],[b,w,h,d,g],e),x+=a;return t}for(b=0;b<u;b++)for(_=e[b],w=0;w<f;w++)for(m=_[w],h=0;h<p;h++)for(y=m[h],d=0;d<l;d++)for(v=y[d],g=0;g<c;g++)t[x]=o.call(s,v[g],[b,w,h,d,g],e),x+=a;return t}}),Z},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).flatten5dBy=r();
//# sourceMappingURL=browser.js.map
