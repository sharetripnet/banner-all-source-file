(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var g=function(){this.l={};this.o="";this.i=this.g=-1;this.m="";this.j=-1;this.h=0};
g.prototype.parse=function(c){this.l={};this.o=c;this.i=this.g=-1;this.m="";this.j=-1;for(var a=this.h=0;a<c.length;a++){var b=c[a];if("@"==b)this.g=a;else if("{"==b){b=a;if(-1!=this.g){var e=(e=this.o.substr(this.g).match(/@\w+/))?e[0]:"";0==this.h&&"@media"==e?(this.i=this.g,e=this.i+6,this.m=this.o.substr(e,b-e).trim()):1==this.h&&-1!=this.i&&"@keyframes"==e&&(this.j=this.g);this.g=-1}this.h++}else"}"==b&&(-1!=this.j&&2==this.h?(b=this.j,b=this.o.substr(b,a-b+1),this.l[this.m]||(this.l[this.m]=
[]),this.l[this.m].push(b),this.j=-1):-1!=this.i&&1==this.h&&(this.i=-1),this.h--)}return this.l};var h=new g,l=null,m=function(){if(!l){l={};for(var c=[],a=document.head.querySelectorAll("style"),b=0;b<a.length;b++){var e=a[b];"gwd-text-style"!=e.id&&"gwd-lightbox-style"!=e.id&&c.push(e)}for(a=0;a<c.length;a++)for(d in b=h.parse(c[a].textContent),b){e=b[d];l[d]=l[d]||[];var k=l[d];k.push.apply(k,e)}}var d=l;c=[];for(var f in d)window.matchMedia(f).matches&&c.push.apply(c,d[f]);if(f=document.getElementById("gwd-active-media-rule-keyframes"))for(d=f.sheet,a=d.cssRules.length-1;0<=a;a--)d.deleteRule(a);
if(0<c.length)for(f||(f=document.createElement("style"),f.id="gwd-active-media-rule-keyframes",document.head.appendChild(f)),d=0;d<c.length;d++)a=f.sheet,a.insertRule(c[d],a.cssRules.length)};(function(){var c=window.navigator.userAgent||"";if(-1!=c.indexOf("Trident")||-1!=c.indexOf("MSIE"))document.addEventListener("DOMContentLoaded",function b(){m();document.removeEventListener("DOMContentLoaded",b)}),window.addEventListener("resize",m)})();}).call(this);
