(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1792:function(t,e,n){"use strict";var a=function(t){return t&&t.__esModule?t:{default:t}}(n(52));n(2746);var r=function(){return function(){var t=["#313695","#4575b4","#74add1","#abd9e9","#fee090","#fdae61","#f46d43","#d73027"],e=30,n=a.default.scale.linear().range([0,e]),r=t.length>>1,o=1e3,l=0,i=0,c="offset",f=void 0,u=void 0,s=void 0,h=void 0,d=void 0;function v(i){var v=a.default.select(this),g=o/i.length;v.append("span").attr("class","title").text(u),v.append("span").attr("class","value"),(d=v.append("canvas")).attr("width",o).attr("height",e);var p=d.node().getContext("2d");p.imageSmoothingEnabled=!1;var x=s||a.default.extent(i,function(t){return t.y}),m=Math.max(-x[0],x[1]);n.domain([0,m]),f=a.default.svg.axis(h).ticks(5),p.clearRect(0,0,o,e);var w=Math.floor(Math.max(0,-l/g)),y=Math.floor(Math.min(i.length,w+o/g));if(!(w>i.length)){for(var _=!1,b=void 0,M=void 0,k=0;k<r;k+=1){p.fillStyle=t[r+k],M=(k+1-r)*e,n.range([r*e+M,M]);for(var z=w;z<y;z++)(b=i[z].y)<=0?_=!0:void 0!==b&&p.fillRect(l+z*g,n(b),g+1,n(0)-n(b))}if(_){"offset"===c&&(p.translate(0,e),p.scale(1,-1));for(var E=0;E<r;E++){p.fillStyle=t[r-E-1],M=(E+1-r)*e,n.range([r*e+M,M]);for(var R=w;R<y;R++)(b=i[R].y)>=0||p.fillRect(l+R*g,n(-b),g+1,n(0)-n(-b))}}}}return v.axis=function(t){return arguments.length?(f=t,v):f},v.title=function(t){return arguments.length?(u=t,v):u},v.canvas=function(t){return arguments.length?(d=t,v):d},v.colors=function(e){return arguments.length?(r=(t=e).length>>1,v):t},v.height=function(t){return arguments.length?(e=t,v):e},v.width=function(t){return arguments.length?(o=t,v):o},v.spacing=function(t){return arguments.length?(i=t,v):i},v.mode=function(t){return arguments.length?(c=t,v):c},v.extent=function(t){return arguments.length?(s=t,v):s},v.offsetX=function(t){return arguments.length?(l=t,v):l},v}}();t.exports=function(t,e){var n=t.formData,o=a.default.select(t.selector);o.selectAll("*").remove();var l=void 0;if("overall"===n.horizon_color_scale){var i=[];e.data.forEach(function(t){i=i.concat(t.values)}),l=a.default.extent(i,function(t){return t.y})}else"change"===n.horizon_color_scale&&e.data.forEach(function(t){var e=t.values[0].y;t.values=t.values.map(function(t){return Object.assign({},t,{y:t.y-e})})});o.selectAll(".horizon").data(e.data).enter().append("div").attr("class","horizon").each(function(e,a){r().height(n.series_height).width(t.width()).extent(l).title(e.key).call(this,e.values,a)})}},2746:function(t,e,n){}}]);