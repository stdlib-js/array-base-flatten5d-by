"use strict";var w=function(u,f){return function(){return f||u((f={exports:{}}).exports,f),f.exports}};var C=w(function(L,z){
function G(u,f,R,e,d){var S,q,y,l,c,s,o,i,r,a,v,t,n,B,m;if(q=f[4],y=f[3],l=f[2],c=f[1],s=f[0],S=[],R){for(o=0;o<q;o++)for(i=0;i<y;i++)for(r=0;r<l;r++)for(a=0;a<c;a++)for(v=0;v<s;v++)S.push(e.call(d,u[v][a][r][i][o],[v,a,r,i,o],u));return S}for(v=0;v<s;v++)for(m=u[v],a=0;a<c;a++)for(B=m[a],r=0;r<l;r++)for(n=B[r],i=0;i<y;i++)for(t=n[i],o=0;o<q;o++)S.push(e.call(d,t[o],[v,a,r,i,o],u));return S}z.exports=G
});var E=w(function(M,D){
function H(u,f,R,e,d,S,q,y){var l,c,s,o,i,r,a,v,t,n,B,m,g,j,O;if(l=f[4],c=f[3],s=f[2],o=f[1],i=f[0],O=S,R){for(r=0;r<l;r++)for(a=0;a<c;a++)for(v=0;v<s;v++)for(t=0;t<o;t++)for(n=0;n<i;n++)e[O]=q.call(y,u[n][t][v][a][r],[n,t,v,a,r],u),O+=d;return e}for(n=0;n<i;n++)for(j=u[n],t=0;t<o;t++)for(g=j[t],v=0;v<s;v++)for(m=g[v],a=0;a<c;a++)for(B=m[a],r=0;r<l;r++)e[O]=q.call(y,B[r],[n,t,v,a,r],u),O+=d;return e}D.exports=H
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=C(),J=E();I(F,"assign",J);module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
