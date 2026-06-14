"use strict";var w=function(u,f){return function(){try{return f||u((f={exports:{}}).exports,f),f.exports}catch(d){throw (f=0, d)}};};var C=w(function(L,z){
function G(u,f,d,e,B){var S,q,y,l,c,s,o,i,r,a,v,t,n,m,O;if(q=f[4],y=f[3],l=f[2],c=f[1],s=f[0],S=[],d){for(o=0;o<q;o++)for(i=0;i<y;i++)for(r=0;r<l;r++)for(a=0;a<c;a++)for(v=0;v<s;v++)S.push(e.call(B,u[v][a][r][i][o],[v,a,r,i,o],u));return S}for(v=0;v<s;v++)for(O=u[v],a=0;a<c;a++)for(m=O[a],r=0;r<l;r++)for(n=m[r],i=0;i<y;i++)for(t=n[i],o=0;o<q;o++)S.push(e.call(B,t[o],[v,a,r,i,o],u));return S}z.exports=G
});var E=w(function(M,D){
function H(u,f,d,e,B,S,q,y){var l,c,s,o,i,r,a,v,t,n,m,O,g,j,R;if(l=f[4],c=f[3],s=f[2],o=f[1],i=f[0],R=S,d){for(r=0;r<l;r++)for(a=0;a<c;a++)for(v=0;v<s;v++)for(t=0;t<o;t++)for(n=0;n<i;n++)e[R]=q.call(y,u[n][t][v][a][r],[n,t,v,a,r],u),R+=B;return e}for(n=0;n<i;n++)for(j=u[n],t=0;t<o;t++)for(g=j[t],v=0;v<s;v++)for(O=g[v],a=0;a<c;a++)for(m=O[a],r=0;r<l;r++)e[R]=q.call(y,m[r],[n,t,v,a,r],u),R+=B;return e}D.exports=H
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=C(),J=E();I(F,"assign",J);module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
