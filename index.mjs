// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";function o(r,o,f,n,e){var s,t,l,a,i,u,c,d,p,m,h,v,g,j,b;if(t=o[4],l=o[3],a=o[2],i=o[1],u=o[0],s=[],f){for(c=0;c<t;c++)for(d=0;d<l;d++)for(p=0;p<a;p++)for(m=0;m<i;m++)for(h=0;h<u;h++)s.push(n.call(e,r[h][m][p][d][c],[h,m,p,d,c],r));return s}for(h=0;h<u;h++)for(b=r[h],m=0;m<i;m++)for(j=b[m],p=0;p<a;p++)for(g=j[p],d=0;d<l;d++)for(v=g[d],c=0;c<t;c++)s.push(n.call(e,v[c],[h,m,p,d,c],r));return s}function f(r,o,f,n,e,s,t,l){var a,i,u,c,d,p,m,h,v,g,j,b,x,y,k;if(a=o[4],i=o[3],u=o[2],c=o[1],d=o[0],k=s,f){for(p=0;p<a;p++)for(m=0;m<i;m++)for(h=0;h<u;h++)for(v=0;v<c;v++)for(g=0;g<d;g++)n[k]=t.call(l,r[g][v][h][m][p],[g,v,h,m,p],r),k+=e;return n}for(g=0;g<d;g++)for(y=r[g],v=0;v<c;v++)for(x=y[v],h=0;h<u;h++)for(b=x[h],m=0;m<i;m++)for(j=b[m],p=0;p<a;p++)n[k]=t.call(l,j[p],[g,v,h,m,p],r),k+=e;return n}r(o,"assign",f);export{f as assign,o as default};
//# sourceMappingURL=index.mjs.map
