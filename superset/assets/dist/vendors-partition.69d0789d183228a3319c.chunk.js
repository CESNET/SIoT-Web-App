(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{2711:function(n,r,t){"use strict";function e(n,r){return n.parent===r.parent?1:2}function u(n,r){return n+r.x}function i(n,r){return Math.max(n,r.y)}t.r(r);var o=function(){var n=e,r=1,t=1,o=!1;function a(e){var a,f=0;e.eachAfter(function(r){var t=r.children;t?(r.x=function(n){return n.reduce(u,0)/n.length}(t),r.y=function(n){return 1+n.reduce(i,0)}(t)):(r.x=a?f+=n(r,a):0,r.y=0,a=r)});var c=function(n){for(var r;r=n.children;)n=r[0];return n}(e),h=function(n){for(var r;r=n.children;)n=r[r.length-1];return n}(e),l=c.x-n(c,h)/2,p=h.x+n(h,c)/2;return e.eachAfter(o?function(n){n.x=(n.x-e.x)*r,n.y=(e.y-n.y)*t}:function(n){n.x=(n.x-l)/(p-l)*r,n.y=(1-(e.y?n.y/e.y:1))*t})}return a.separation=function(r){return arguments.length?(n=r,a):n},a.size=function(n){return arguments.length?(o=!1,r=+n[0],t=+n[1],a):o?null:[r,t]},a.nodeSize=function(n){return arguments.length?(o=!0,r=+n[0],t=+n[1],a):o?[r,t]:null},a};function a(n){var r=0,t=n.children,e=t&&t.length;if(e)for(;--e>=0;)r+=t[e].value;else r=1;n.value=r}function f(n,r){var t,e,u,i,o,a=new p(n),f=+n.value&&(a.value=n.value),h=[a];for(null==r&&(r=c);t=h.pop();)if(f&&(t.value=+t.data.value),(u=r(t.data))&&(o=u.length))for(t.children=new Array(o),i=o-1;i>=0;--i)h.push(e=t.children[i]=new p(u[i])),e.parent=t,e.depth=t.depth+1;return a.eachBefore(l)}function c(n){return n.children}function h(n){n.data=n.data.data}function l(n){var r=0;do{n.height=r}while((n=n.parent)&&n.height<++r)}function p(n){this.data=n,this.depth=this.height=0,this.parent=null}p.prototype=f.prototype={constructor:p,count:function(){return this.eachAfter(a)},each:function(n){var r,t,e,u,i=this,o=[i];do{for(r=o.reverse(),o=[];i=r.pop();)if(n(i),t=i.children)for(e=0,u=t.length;e<u;++e)o.push(t[e])}while(o.length);return this},eachAfter:function(n){for(var r,t,e,u=this,i=[u],o=[];u=i.pop();)if(o.push(u),r=u.children)for(t=0,e=r.length;t<e;++t)i.push(r[t]);for(;u=o.pop();)n(u);return this},eachBefore:function(n){for(var r,t,e=this,u=[e];e=u.pop();)if(n(e),r=e.children)for(t=r.length-1;t>=0;--t)u.push(r[t]);return this},sum:function(n){return this.eachAfter(function(r){for(var t=+n(r.data)||0,e=r.children,u=e&&e.length;--u>=0;)t+=e[u].value;r.value=t})},sort:function(n){return this.eachBefore(function(r){r.children&&r.children.sort(n)})},path:function(n){for(var r=this,t=function(n,r){if(n===r)return n;var t=n.ancestors(),e=r.ancestors(),u=null;for(n=t.pop(),r=e.pop();n===r;)u=n,n=t.pop(),r=e.pop();return u}(r,n),e=[r];r!==t;)r=r.parent,e.push(r);for(var u=e.length;n!==t;)e.splice(u,0,n),n=n.parent;return e},ancestors:function(){for(var n=this,r=[n];n=n.parent;)r.push(n);return r},descendants:function(){var n=[];return this.each(function(r){n.push(r)}),n},leaves:function(){var n=[];return this.eachBefore(function(r){r.children||n.push(r)}),n},links:function(){var n=this,r=[];return n.each(function(t){t!==n&&r.push({source:t.parent,target:t})}),r},copy:function(){return f(this).eachBefore(h)}};var d=Array.prototype.slice;var s=function(n){for(var r,t,e=0,u=(n=function(n){for(var r,t,e=n.length;e;)t=Math.random()*e--|0,r=n[e],n[e]=n[t],n[t]=r;return n}(d.call(n))).length,i=[];e<u;)r=n[e],t&&y(t,r)?++e:(t=m(i=v(i,r)),e=0);return t};function v(n,r){var t,e;if(g(r,n))return[r];for(t=0;t<n.length;++t)if(x(r,n[t])&&g(w(n[t],r),n))return[n[t],r];for(t=0;t<n.length-1;++t)for(e=t+1;e<n.length;++e)if(x(w(n[t],n[e]),r)&&x(w(n[t],r),n[e])&&x(w(n[e],r),n[t])&&g(_(n[t],n[e],r),n))return[n[t],n[e],r];throw new Error}function x(n,r){var t=n.r-r.r,e=r.x-n.x,u=r.y-n.y;return t<0||t*t<e*e+u*u}function y(n,r){var t=n.r-r.r+1e-6,e=r.x-n.x,u=r.y-n.y;return t>0&&t*t>e*e+u*u}function g(n,r){for(var t=0;t<r.length;++t)if(!y(n,r[t]))return!1;return!0}function m(n){switch(n.length){case 1:return function(n){return{x:n.x,y:n.y,r:n.r}}(n[0]);case 2:return w(n[0],n[1]);case 3:return _(n[0],n[1],n[2])}}function w(n,r){var t=n.x,e=n.y,u=n.r,i=r.x,o=r.y,a=r.r,f=i-t,c=o-e,h=a-u,l=Math.sqrt(f*f+c*c);return{x:(t+i+f/l*h)/2,y:(e+o+c/l*h)/2,r:(l+u+a)/2}}function _(n,r,t){var e=n.x,u=n.y,i=n.r,o=r.x,a=r.y,f=r.r,c=t.x,h=t.y,l=t.r,p=e-o,d=e-c,s=u-a,v=u-h,x=f-i,y=l-i,g=e*e+u*u-i*i,m=g-o*o-a*a+f*f,w=g-c*c-h*h+l*l,_=d*s-p*v,z=(s*w-v*m)/(2*_)-e,B=(v*x-s*y)/_,M=(d*m-p*w)/(2*_)-u,A=(p*y-d*x)/_,q=B*B+A*A-1,E=2*(i+z*B+M*A),k=z*z+M*M-i*i,b=-(q?(E+Math.sqrt(E*E-4*q*k))/(2*q):k/E);return{x:e+z+B*b,y:u+M+A*b,r:b}}function z(n,r,t){var e,u,i,o,a=n.x-r.x,f=n.y-r.y,c=a*a+f*f;c?(u=r.r+t.r,u*=u,o=n.r+t.r,u>(o*=o)?(e=(c+o-u)/(2*c),i=Math.sqrt(Math.max(0,o/c-e*e)),t.x=n.x-e*a-i*f,t.y=n.y-e*f+i*a):(e=(c+u-o)/(2*c),i=Math.sqrt(Math.max(0,u/c-e*e)),t.x=r.x+e*a-i*f,t.y=r.y+e*f+i*a)):(t.x=r.x+t.r,t.y=r.y)}function B(n,r){var t=n.r+r.r-1e-6,e=r.x-n.x,u=r.y-n.y;return t>0&&t*t>e*e+u*u}function M(n){var r=n._,t=n.next._,e=r.r+t.r,u=(r.x*t.r+t.x*r.r)/e,i=(r.y*t.r+t.y*r.r)/e;return u*u+i*i}function A(n){this._=n,this.next=null,this.previous=null}function q(n){if(!(u=n.length))return 0;var r,t,e,u,i,o,a,f,c,h,l;if((r=n[0]).x=0,r.y=0,!(u>1))return r.r;if(t=n[1],r.x=-t.r,t.x=r.r,t.y=0,!(u>2))return r.r+t.r;z(t,r,e=n[2]),r=new A(r),t=new A(t),e=new A(e),r.next=e.previous=t,t.next=r.previous=e,e.next=t.previous=r;n:for(a=3;a<u;++a){z(r._,t._,e=n[a]),e=new A(e),f=t.next,c=r.previous,h=t._.r,l=r._.r;do{if(h<=l){if(B(f._,e._)){t=f,r.next=t,t.previous=r,--a;continue n}h+=f._.r,f=f.next}else{if(B(c._,e._)){(r=c).next=t,t.previous=r,--a;continue n}l+=c._.r,c=c.previous}}while(f!==c.next);for(e.previous=r,e.next=t,r.next=t.previous=t=e,i=M(r);(e=e.next)!==t;)(o=M(e))<i&&(r=e,i=o);t=r.next}for(r=[t._],e=t;(e=e.next)!==t;)r.push(e._);for(e=s(r),a=0;a<u;++a)(r=n[a]).x-=e.x,r.y-=e.y;return e.r}var E=function(n){return q(n),n};function k(n){if("function"!=typeof n)throw new Error;return n}function b(){return 0}var S=function(n){return function(){return n}};function I(n){return Math.sqrt(n.value)}var O=function(){var n=null,r=1,t=1,e=b;function u(u){return u.x=r/2,u.y=t/2,n?u.eachBefore(R(n)).eachAfter(T(e,.5)).eachBefore(D(1)):u.eachBefore(R(I)).eachAfter(T(b,1)).eachAfter(T(e,u.r/Math.min(r,t))).eachBefore(D(Math.min(r,t)/(2*u.r))),u}return u.radius=function(r){return arguments.length?(n=function(n){return null==n?null:k(n)}(r),u):n},u.size=function(n){return arguments.length?(r=+n[0],t=+n[1],u):[r,t]},u.padding=function(n){return arguments.length?(e="function"==typeof n?n:S(+n),u):e},u};function R(n){return function(r){r.children||(r.r=Math.max(0,+n(r)||0))}}function T(n,r){return function(t){if(e=t.children){var e,u,i,o=e.length,a=n(t)*r||0;if(a)for(u=0;u<o;++u)e[u].r+=a;if(i=q(e),a)for(u=0;u<o;++u)e[u].r-=a;t.r=i+a}}}function D(n){return function(r){var t=r.parent;r.r*=n,t&&(r.x=t.x+n*r.x,r.y=t.y+n*r.y)}}var J=function(n){n.x0=Math.round(n.x0),n.y0=Math.round(n.y0),n.x1=Math.round(n.x1),n.y1=Math.round(n.y1)},L=function(n,r,t,e,u){for(var i,o=n.children,a=-1,f=o.length,c=n.value&&(e-r)/n.value;++a<f;)(i=o[a]).y0=t,i.y1=u,i.x0=r,i.x1=r+=i.value*c},j=function(){var n=1,r=1,t=0,e=!1;function u(u){var i=u.height+1;return u.x0=u.y0=t,u.x1=n,u.y1=r/i,u.eachBefore(function(n,r){return function(e){e.children&&L(e,e.x0,n*(e.depth+1)/r,e.x1,n*(e.depth+2)/r);var u=e.x0,i=e.y0,o=e.x1-t,a=e.y1-t;o<u&&(u=o=(u+o)/2),a<i&&(i=a=(i+a)/2),e.x0=u,e.y0=i,e.x1=o,e.y1=a}}(r,i)),e&&u.eachBefore(J),u}return u.round=function(n){return arguments.length?(e=!!n,u):e},u.size=function(t){return arguments.length?(n=+t[0],r=+t[1],u):[n,r]},u.padding=function(n){return arguments.length?(t=+n,u):t},u},$="$",C={depth:-1},F={};function G(n){return n.id}function H(n){return n.parentId}var K=function(){var n=G,r=H;function t(t){var e,u,i,o,a,f,c,h=t.length,d=new Array(h),s={};for(u=0;u<h;++u)e=t[u],a=d[u]=new p(e),null!=(f=n(e,u,t))&&(f+="")&&(s[c=$+(a.id=f)]=c in s?F:a);for(u=0;u<h;++u)if(a=d[u],null!=(f=r(t[u],u,t))&&(f+="")){if(!(o=s[$+f]))throw new Error("missing: "+f);if(o===F)throw new Error("ambiguous: "+f);o.children?o.children.push(a):o.children=[a],a.parent=o}else{if(i)throw new Error("multiple roots");i=a}if(!i)throw new Error("no root");if(i.parent=C,i.eachBefore(function(n){n.depth=n.parent.depth+1,--h}).eachBefore(l),i.parent=null,h>0)throw new Error("cycle");return i}return t.id=function(r){return arguments.length?(n=k(r),t):n},t.parentId=function(n){return arguments.length?(r=k(n),t):r},t};function N(n,r){return n.parent===r.parent?1:2}function P(n){var r=n.children;return r?r[0]:n.t}function Q(n){var r=n.children;return r?r[r.length-1]:n.t}function U(n,r,t){var e=t/(r.i-n.i);r.c-=e,r.s+=t,n.c+=e,r.z+=t,r.m+=t}function V(n,r,t){return n.a.parent===r.parent?n.a:t}function W(n,r){this._=n,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=r}W.prototype=Object.create(p.prototype);var X=function(){var n=N,r=1,t=1,e=null;function u(u){var f=function(n){for(var r,t,e,u,i,o=new W(n,0),a=[o];r=a.pop();)if(e=r._.children)for(r.children=new Array(i=e.length),u=i-1;u>=0;--u)a.push(t=r.children[u]=new W(e[u],u)),t.parent=r;return(o.parent=new W(null,0)).children=[o],o}(u);if(f.eachAfter(i),f.parent.m=-f.z,f.eachBefore(o),e)u.eachBefore(a);else{var c=u,h=u,l=u;u.eachBefore(function(n){n.x<c.x&&(c=n),n.x>h.x&&(h=n),n.depth>l.depth&&(l=n)});var p=c===h?1:n(c,h)/2,d=p-c.x,s=r/(h.x+p+d),v=t/(l.depth||1);u.eachBefore(function(n){n.x=(n.x+d)*s,n.y=n.depth*v})}return u}function i(r){var t=r.children,e=r.parent.children,u=r.i?e[r.i-1]:null;if(t){!function(n){for(var r,t=0,e=0,u=n.children,i=u.length;--i>=0;)(r=u[i]).z+=t,r.m+=t,t+=r.s+(e+=r.c)}(r);var i=(t[0].z+t[t.length-1].z)/2;u?(r.z=u.z+n(r._,u._),r.m=r.z-i):r.z=i}else u&&(r.z=u.z+n(r._,u._));r.parent.A=function(r,t,e){if(t){for(var u,i=r,o=r,a=t,f=i.parent.children[0],c=i.m,h=o.m,l=a.m,p=f.m;a=Q(a),i=P(i),a&&i;)f=P(f),(o=Q(o)).a=r,(u=a.z+l-i.z-c+n(a._,i._))>0&&(U(V(a,r,e),r,u),c+=u,h+=u),l+=a.m,c+=i.m,p+=f.m,h+=o.m;a&&!Q(o)&&(o.t=a,o.m+=l-h),i&&!P(f)&&(f.t=i,f.m+=c-p,e=r)}return e}(r,u,r.parent.A||e[0])}function o(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function a(n){n.x*=r,n.y=n.depth*t}return u.separation=function(r){return arguments.length?(n=r,u):n},u.size=function(n){return arguments.length?(e=!1,r=+n[0],t=+n[1],u):e?null:[r,t]},u.nodeSize=function(n){return arguments.length?(e=!0,r=+n[0],t=+n[1],u):e?[r,t]:null},u},Y=function(n,r,t,e,u){for(var i,o=n.children,a=-1,f=o.length,c=n.value&&(u-t)/n.value;++a<f;)(i=o[a]).x0=r,i.x1=e,i.y0=t,i.y1=t+=i.value*c},Z=(1+Math.sqrt(5))/2;function nn(n,r,t,e,u,i){for(var o,a,f,c,h,l,p,d,s,v,x,y=[],g=r.children,m=0,w=0,_=g.length,z=r.value;m<_;){f=u-t,c=i-e;do{h=g[w++].value}while(!h&&w<_);for(l=p=h,x=h*h*(v=Math.max(c/f,f/c)/(z*n)),s=Math.max(p/x,x/l);w<_;++w){if(h+=a=g[w].value,a<l&&(l=a),a>p&&(p=a),x=h*h*v,(d=Math.max(p/x,x/l))>s){h-=a;break}s=d}y.push(o={value:h,dice:f<c,children:g.slice(m,w)}),o.dice?L(o,t,e,u,z?e+=c*h/z:i):Y(o,t,e,z?t+=f*h/z:u,i),z-=h,m=w}return y}var rn=function n(r){function t(n,t,e,u,i){nn(r,n,t,e,u,i)}return t.ratio=function(r){return n((r=+r)>1?r:1)},t}(Z),tn=function(){var n=rn,r=!1,t=1,e=1,u=[0],i=b,o=b,a=b,f=b,c=b;function h(n){return n.x0=n.y0=0,n.x1=t,n.y1=e,n.eachBefore(l),u=[0],r&&n.eachBefore(J),n}function l(r){var t=u[r.depth],e=r.x0+t,h=r.y0+t,l=r.x1-t,p=r.y1-t;l<e&&(e=l=(e+l)/2),p<h&&(h=p=(h+p)/2),r.x0=e,r.y0=h,r.x1=l,r.y1=p,r.children&&(t=u[r.depth+1]=i(r)/2,e+=c(r)-t,h+=o(r)-t,l-=a(r)-t,p-=f(r)-t,l<e&&(e=l=(e+l)/2),p<h&&(h=p=(h+p)/2),n(r,e,h,l,p))}return h.round=function(n){return arguments.length?(r=!!n,h):r},h.size=function(n){return arguments.length?(t=+n[0],e=+n[1],h):[t,e]},h.tile=function(r){return arguments.length?(n=k(r),h):n},h.padding=function(n){return arguments.length?h.paddingInner(n).paddingOuter(n):h.paddingInner()},h.paddingInner=function(n){return arguments.length?(i="function"==typeof n?n:S(+n),h):i},h.paddingOuter=function(n){return arguments.length?h.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n):h.paddingTop()},h.paddingTop=function(n){return arguments.length?(o="function"==typeof n?n:S(+n),h):o},h.paddingRight=function(n){return arguments.length?(a="function"==typeof n?n:S(+n),h):a},h.paddingBottom=function(n){return arguments.length?(f="function"==typeof n?n:S(+n),h):f},h.paddingLeft=function(n){return arguments.length?(c="function"==typeof n?n:S(+n),h):c},h},en=function(n,r,t,e,u){var i,o,a=n.children,f=a.length,c=new Array(f+1);for(c[0]=o=i=0;i<f;++i)c[i+1]=o+=a[i].value;!function n(r,t,e,u,i,o,f){if(r>=t-1){var h=a[r];return h.x0=u,h.y0=i,h.x1=o,void(h.y1=f)}var l=c[r],p=e/2+l,d=r+1,s=t-1;for(;d<s;){var v=d+s>>>1;c[v]<p?d=v+1:s=v}p-c[d-1]<c[d]-p&&r+1<d&&--d;var x=c[d]-l,y=e-x;if(o-u>f-i){var g=(u*y+o*x)/e;n(r,d,x,u,i,g,f),n(d,t,y,g,i,o,f)}else{var m=(i*y+f*x)/e;n(r,d,x,u,i,o,m),n(d,t,y,u,m,o,f)}}(0,f,n.value,r,t,e,u)},un=function(n,r,t,e,u){(1&n.depth?Y:L)(n,r,t,e,u)},on=function n(r){function t(n,t,e,u,i){if((o=n._squarify)&&o.ratio===r)for(var o,a,f,c,h,l=-1,p=o.length,d=n.value;++l<p;){for(f=(a=o[l]).children,c=a.value=0,h=f.length;c<h;++c)a.value+=f[c].value;a.dice?L(a,t,e,u,e+=(i-e)*a.value/d):Y(a,t,e,t+=(u-t)*a.value/d,i),d-=a.value}else n._squarify=o=nn(r,n,t,e,u,i),o.ratio=r}return t.ratio=function(r){return n((r=+r)>1?r:1)},t}(Z);t.d(r,"cluster",function(){return o}),t.d(r,"hierarchy",function(){return f}),t.d(r,"pack",function(){return O}),t.d(r,"packSiblings",function(){return E}),t.d(r,"packEnclose",function(){return s}),t.d(r,"partition",function(){return j}),t.d(r,"stratify",function(){return K}),t.d(r,"tree",function(){return X}),t.d(r,"treemap",function(){return tn}),t.d(r,"treemapBinary",function(){return en}),t.d(r,"treemapDice",function(){return L}),t.d(r,"treemapSlice",function(){return Y}),t.d(r,"treemapSliceDice",function(){return un}),t.d(r,"treemapSquarify",function(){return rn}),t.d(r,"treemapResquarify",function(){return on})}}]);