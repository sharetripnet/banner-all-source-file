(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var g=function(){this.g={};this.i="";this.c=this.a=-1;this.h="";this.f=-1;this.b=0};
g.prototype.parse=function(c){this.g={};this.i=c;this.c=this.a=-1;this.h="";this.f=-1;for(var a=this.b=0;a<c.length;a++){var b=c[a];if("@"==b)this.a=a;else if("{"==b){b=a;if(-1!=this.a){var e=(e=this.i.substr(this.a).match(/@\w+/))?e[0]:"";0==this.b&&"@media"==e?(this.c=this.a,e=this.c+6,this.h=this.i.substr(e,b-e).trim()):1==this.b&&-1!=this.c&&"@keyframes"==e&&(this.f=this.a);this.a=-1}this.b++}else"}"==b&&(-1!=this.f&&2==this.b?(b=this.f,b=this.i.substr(b,a-b+1),this.g[this.h]||(this.g[this.h]=
[]),this.g[this.h].push(b),this.f=-1):-1!=this.c&&1==this.b&&(this.c=-1),this.b--)}return this.g};var h=new g,l=null,m=function(){if(!l){l={};for(var c=[],a=document.head.querySelectorAll("style"),b=0;b<a.length;b++){var e=a[b];"gwd-text-style"!=e.id&&"gwd-lightbox-style"!=e.id&&c.push(e)}for(a=0;a<c.length;a++)for(d in b=h.parse(c[a].textContent),b){e=b[d];l[d]=l[d]||[];var k=l[d];k.push.apply(k,e)}}var d=l;c=[];for(var f in d)window.matchMedia(f).matches&&c.push.apply(c,d[f]);if(f=document.getElementById("gwd-active-media-rule-keyframes"))for(d=f.sheet,a=d.cssRules.length-1;0<=a;a--)d.deleteRule(a);
if(0<c.length)for(f||(f=document.createElement("style"),f.id="gwd-active-media-rule-keyframes",document.head.appendChild(f)),d=0;d<c.length;d++)a=f.sheet,a.insertRule(c[d],a.cssRules.length)};(function(){var c=window.navigator.userAgent||"";if(-1!=c.indexOf("Trident")||-1!=c.indexOf("MSIE"))document.addEventListener("DOMContentLoaded",function b(){m();document.removeEventListener("DOMContentLoaded",b)}),window.addEventListener("resize",m)})();}).call(this);
