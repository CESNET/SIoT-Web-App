(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1183:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.formatLabel=E,e.default=function(t,e){var a=void 0,_="key",O=1===(0,n.default)("#explore-container").length,N=void 0;N=e.data?Array.isArray(e.data)?e.data.map(function(e){return Object.assign({},e,{key:E(e.key,t.datasource.verbose_map)})}):e.data:[];t.container.html(""),t.clearError();var S=t.width(),j=t.formData,I=function(){return function(){var t=void 0;t=j.bar_stacked?r.default.max(N,function(t){return t.values.length}):r.default.sum(N,function(t){return t.values.length});if(t*w>S)return t*w;return S}}(),P=j.viz_type,z=r.default.format(".3s"),G=j.reduce_x_ticks||!1,B=!1,V=void 0,W=function(){return function(){var e=r.default.select(t.selector).select("svg");e.empty()&&(e=r.default.select(t.selector).append("svg"));var w=t.height(),E=D.indexOf(P)>=0,W=0,R=!1;if("auto"===j.x_ticks_layout)["column","dist_bar"].indexOf(P)>=0&&(W=45);else if("staggered"===j.x_ticks_layout)R=!0;else if("45°"===j.x_ticks_layout){if((0,y.isTruthy)(j.show_brush)){var Y=(0,p.t)("You cannot use 45° tick layout along with the time range filter");return t.error(Y),null}W=45}var $=(0,y.isTruthy)(j.show_brush)||"auto"===j.show_brush&&w>=C&&"45°"!==j.x_ticks_layout;switch(P){case"line":$?(a=o.default.models.lineWithFocusChart(),R&&(a.focus.margin({bottom:40}),a.focusHeight(80)),a.focus.xScale(r.default.time.scale.utc())):a=o.default.models.lineChart(),a.xScale(r.default.time.scale.utc()),a.interpolate(j.line_interpolation);break;case"time_pivot":(a=o.default.models.lineChart()).xScale(r.default.time.scale.utc()),a.interpolate(j.line_interpolation);break;case"dual_line":(a=o.default.models.multiChart()).interpolate("linear");break;case"line_multi":(a=o.default.models.multiChart()).interpolate(j.line_interpolation);break;case"bar":a=o.default.models.multiBarChart().showControls(j.show_controls).groupSpacing(.1),G||(S=I()),a.width(S),a.xAxis.showMaxMin(!1),B=j.bar_stacked,a.stacked(B),j.show_bar_value&&setTimeout(function(){T(e,a,N,B,j.y_axis_format)},k);break;case"dist_bar":(a=o.default.models.multiBarChart().showControls(j.show_controls).reduceXTicks(G).groupSpacing(.1)).xAxis.showMaxMin(!1),B=j.bar_stacked,a.stacked(B),j.order_bars&&N.forEach(function(t){t.values.sort(function(t,e){return(0,x.tryNumify)(t.x)<(0,x.tryNumify)(e.x)?-1:1})}),j.show_bar_value&&setTimeout(function(){T(e,a,N,B,j.y_axis_format)},k),G||(S=I()),a.width(S);break;case"pie":if(a=o.default.models.pieChart(),_="x",a.valueFormat(z),j.donut&&a.donut(!0),a.showLabels(j.show_labels),a.labelsOutside(j.labels_outside),a.labelThreshold(.05),"key_percent"!==j.pie_label_type&&"key_value"!==j.pie_label_type?a.labelType(j.pie_label_type):"key_value"===j.pie_label_type&&a.labelType(function(t){return t.data.x+": "+r.default.format(".3s")(t.data.y)}),a.cornerRadius(!0),"percent"===j.pie_label_type||"key_percent"===j.pie_label_type){var X=0;N.forEach(function(t){X+=t.y}),a.tooltip.valueFormatter(function(t){return(t/X*100).toFixed()+"%"}),"key_percent"===j.pie_label_type&&a.labelType(function(t){return t.data.x+": "+(t.data.y/X*100).toFixed()+"%"})}break;case"column":a=o.default.models.multiBarChart().reduceXTicks(!1);break;case"compare":(a=o.default.models.cumulativeLineChart()).xScale(r.default.time.scale.utc()),a.useInteractiveGuideline(!0),a.xAxis.showMaxMin(!1);break;case"bubble":V=function(){return function(t,e){return"<tr><td>"+t+"</td><td>"+e+"</td></tr>"}}(),(a=o.default.models.scatterChart()).showDistX(!0),a.showDistY(!0),a.tooltip.contentGenerator(function(t){var e=t.point,a=(0,x.d3FormatPreset)(j.y_axis_format),n=(0,x.d3FormatPreset)(j.x_axis_format),i="<table>";return i+='<tr><td style="color: '+e.color+';"><strong>'+e[j.entity]+"</strong> ("+e.group+")</td></tr>",i+=V(j.x.label||j.x,n(e.x)),i+=V(j.y.label||j.y,a(e.y)),i+=V(j.size.label||j.size,z(e.size)),i+="</table>"}),a.pointRange([5,Math.pow(j.max_bubble_size,2)]),a.pointDomain([0,r.default.max(N,function(t){return r.default.max(t.values,function(t){return t.size})})]);break;case"area":(a=o.default.models.stackedAreaChart()).showControls(j.show_controls),a.style(j.stacked_style),a.xScale(r.default.time.scale.utc());break;case"box_plot":_="label",(a=o.default.models.boxPlotChart()).x(function(t){return t.label}),a.maxBoxWidth(75);break;case"bullet":a=o.default.models.bulletChart();break;default:throw new Error("Unrecognized visualization for nvd3"+P)}a.xAxis&&a.xAxis.staggerLabels&&a.xAxis.staggerLabels(R);a.xAxis&&a.xAxis.rotateLabels&&a.xAxis.rotateLabels(W);a.x2Axis&&a.x2Axis.staggerLabels&&a.x2Axis.staggerLabels(R);a.x2Axis&&a.x2Axis.rotateLabels&&a.x2Axis.rotateLabels(W);"showLegend"in a&&void 0!==j.show_legend&&(S<M.small&&"pie"!==P?a.showLegend(!1):a.showLegend(j.show_legend));"bullet"===P&&(w=Math.min(w,50));a.forceY&&j.y_axis_bounds&&(null!==j.y_axis_bounds[0]||null!==j.y_axis_bounds[1])&&a.forceY(j.y_axis_bounds);j.y_log_scale&&a.yScale(r.default.scale.log());j.x_log_scale&&a.xScale(r.default.scale.log());var H=(0,x.d3FormatPreset)(j.x_axis_format);E&&(H=(0,x.d3TimeFormatPreset)(j.x_axis_format),a.interactiveLayer.tooltip.headerFormatter(h.formatDateVerbose));a.x2Axis&&a.x2Axis.tickFormat&&a.x2Axis.tickFormat(H);["dist_bar","box_plot"].indexOf(P)>=0||!a.xAxis||!a.xAxis.tickFormat||a.xAxis.tickFormat(H);var J=(0,x.d3FormatPreset)(j.y_axis_format);a.yAxis&&a.yAxis.tickFormat&&((j.contribution||"percentage"===j.comparison_type)&&(J=r.default.format(".1%")),a.yAxis.tickFormat(J));a.y2Axis&&a.y2Axis.tickFormat&&a.y2Axis.tickFormat(J);a.yAxis&&a.yAxis.ticks(5);a.y2Axis&&a.y2Axis.ticks(5);function U(t,e){t&&t.showMaxMin&&void 0!==e&&t.showMaxMin(e)}U(a.xAxis,j.x_axis_showminmax||!1),U(a.x2Axis,j.x_axis_showminmax||!1),U(a.yAxis,j.y_axis_showminmax||!1),U(a.y2Axis,j.y_axis_showminmax||!1),"time_pivot"===P?a.color(function(t){var e=j.color_picker,a=1;return t.rank>0&&(a=.5*t.perc),"rgba("+e.r+", "+e.g+", "+e.b+", "+a+")"}):"bullet"!==P&&a.color(function(t){return t.color||(0,f.getColorFromScheme)(t[_],j.color_scheme)});"line"!==P&&"area"!==P||!j.rich_tooltip||(a.useInteractiveGuideline(!0),"line"===P&&a.interactiveLayer.tooltip.contentGenerator(function(t){var e="";return e+="<table><thead><tr><td colspan='3'><strong class='x-value'>"+(0,h.formatDateVerbose)(t.value)+"</strong></td></tr></thead><tbody>",t.series.sort(function(t,e){return t.value>=e.value?-1:1}),t.series.forEach(function(t){e+='<tr class="'+(t.highlight?"emph":"")+"\"><td class='legend-color-guide' style=\"opacity: "+(t.highlight?"1":"0.75")+';""><div style="border: 2px solid '+(t.highlight?"black":"transparent")+"; background-color: "+t.color+';"></div></td><td>'+c.default.sanitize(t.key)+"</td><td>"+J(t.value)+"</td></tr>"}),e+="</tbody></table>"}));if(["dual_line","line_multi"].indexOf(P)>=0){var Z=r.default.format(j.y_axis_format),q=r.default.format(j.y_axis_2_format);a.yAxis1.tickFormat(Z),a.yAxis2.tickFormat(q);var K=N.map(function(t){return 1===t.yAxis?Z:q});(0,x.customizeToolTip)(a,H,K),"dual_line"===P?a.showLegend(S>M.small):a.showLegend(j.show_legend)}if(a.width(S),a.height(w),t.container.css("height",w+"px"),e.datum(N).transition().duration(500).attr("height",w).attr("width",S).call(a),["dual_line","line_multi"].indexOf(P)>=0){var Q=a.yAxis1.ticks(),tt=a.yAxis1.scale().domain(a.yAxis1.domain()).nice(Q).ticks(Q),et=a.yAxis2.scale().domain(a.yAxis2.domain()).nice(Q).ticks(Q),at=tt.length-et.length;if(tt.length&&et.length&&0!==at){for(var nt=at<0?tt:et,it=nt[1]-nt[0],rt=0;rt<Math.abs(at);rt++)rt%2==0?nt.unshift(nt[0]-it):nt.push(nt[nt.length-1]+it);a.yDomain1([tt[0],tt[tt.length-1]]),a.yDomain2([et[0],et[et.length-1]]),a.yAxis1.tickValues(tt),a.yAxis2.tickValues(et)}}j.show_markers&&e.selectAll(".nv-point").style("stroke-opacity",1).style("fill-opacity",1);if(void 0!==a.yAxis||void 0!==a.yAxis2){var ot=t.container.width(),lt=Math.ceil(Math.min(O?.01*ot:.03*ot,A)),st=a.yAxis2?L(t.container,"nv-y1"):L(t.container,"nv-y"),ut=L(t.container,"nv-x");a.margin({left:st+lt}),j.y_axis_label&&""!==j.y_axis_label&&a.margin({left:st+lt+25});var ct=a.margin();if(ct.bottom=28,j.x_axis_showminmax&&(ct.right=Math.max(20,ut/2)+lt),45===W?(ct.bottom=ut+lt,ct.right=ut+lt):R&&(ct.bottom=40),["dual_line","line_multi"].indexOf(P)>=0){var ft=L(t.container,"nv-y2");ct.right=ft+lt}if(j.bottom_margin&&"auto"!==j.bottom_margin&&(ct.bottom=parseInt(j.bottom_margin,10)),j.left_margin&&"auto"!==j.left_margin&&(ct.left=j.left_margin),j.x_axis_label&&""!==j.x_axis_label&&a.xAxis){ct.bottom+=25;var dt=0;ct.bottom&&!isNaN(ct.bottom)&&(dt=ct.bottom-45),a.xAxis.axisLabel(j.x_axis_label).axisLabelDistance(dt)}if(j.y_axis_label&&""!==j.y_axis_label&&a.yAxis){var mt=0;ct.left&&!isNaN(ct.left)&&(mt=ct.left-70),a.yAxis.axisLabel(j.y_axis_label).axisLabelDistance(mt)}var xt=(t.formData.annotation_layers||[]).filter(function(t){return t.show});if(E&&xt&&t.annotationData){var ht,yt=xt.filter(function(t){return t.annotationType===m.default.TIME_SERIES}).reduce(function(e,a){return e.concat((t.annotationData[a.name]||[]).map(function(t){if(!t)return{};var e=Array.isArray(t.key)?a.name+", "+t.key.join(", "):a.name+", "+t.key;return Object.assign({},t,{key:e,color:a.color,strokeWidth:a.width,classed:a.opacity+" "+a.style+" nv-timeseries-annotation-layer showMarkers"+a.showMarkers+" hideLine"+a.hideLine})}))},[]);(ht=N).push.apply(ht,g(yt))}if(e.datum(N).transition().duration(500).attr("height",w).attr("width",S).call(a),(0,n.default)(window).scroll((0,i.default)(F,250)),E&&xt){var pt=xt.filter(function(t){return t.annotationType===m.default.FORMULA}).map(function(t){return Object.assign({},t,{formula:l.default.parse(t.value)})}),vt=void 0,_t=void 0,bt=void 0;if(P===v.VIZ_TYPES.bar?(_t=r.default.min(N[0].values,function(t){return t.x}),vt=r.default.max(N[0].values,function(t){return t.x}),bt=r.default.scale.quantile().domain([_t,vt]).range(a.xAxis.range())):(_t=a.xAxis.scale().domain()[0].valueOf(),vt=a.xAxis.scale().domain()[1].valueOf(),bt=a.xScale?a.xScale():a.xAxis.scale?a.xAxis.scale():r.default.scale.linear()),bt&&bt.clamp&&bt.clamp(!0),Array.isArray(pt)&&pt.length){var gt,wt=[];if(P===v.VIZ_TYPES.bar){var At=N.reduce(function(t,e){return e.values.forEach(function(e){return t.add(e.x)}),t},new Set);wt.push.apply(wt,g(At.values())),wt.sort()}else{var kt=Math.min.apply(Math,g(N.map(function(t){return Math.min.apply(Math,g(t.values.slice(1).map(function(e,a){return e.x-t.values[a].x})))}))),Ct=(vt-_t)/(kt||1);kt=Ct<100?(vt-_t)/100:kt,kt=Ct>500?(vt-_t)/500:kt,wt.push(_t);for(var Mt=_t;Mt<vt;Mt+=kt)wt.push(Mt);wt.push(vt)}var Dt=pt.map(function(t){return{key:t.name,values:wt.map(function(e){return{y:t.formula.eval({x:e}),x:e}}),color:t.color,strokeWidth:t.width,classed:t.opacity+" "+t.style}});(gt=N).push.apply(gt,g(Dt))}var Tt=a.xAxis1?a.xAxis1:a.xAxis,Ft=a.yAxis1?a.yAxis1:a.yAxis,Lt=Tt.scale().range()[1],Et=Ft.scale().range()[0],Ot=function(){return function(t){return(0,u.default)().attr("class","d3-tip").direction("n").offset([-5,0]).html(function(e){if(!e)return"";var a=e[t.titleColumn]&&e[t.titleColumn].length?e[t.titleColumn]+" - "+t.name:t.name,n=Array.isArray(t.descriptionColumns)?t.descriptionColumns.map(function(t){return e[t]}):Object.values(e);return"<div><strong>"+a+"</strong></div><br/><div>"+n.join(", ")+"</div>"})}}();t.annotationData&&(xt.filter(function(e){return e.annotationType===m.default.EVENT&&t.annotationData&&t.annotationData[e.name]}).forEach(function(e,n){var i=(0,d.applyNativeColumns)(e),o=r.default.select(t.selector).select(".nv-wrap").append("g").attr("class","nv-event-annotation-layer-"+n),l=i.color||(0,f.getColorFromScheme)(i.name,j.color_scheme),u=Ot(i),c=(t.annotationData[i.name].records||[]).map(function(t){var e=new Date(s.default.utc(t[i.timeColumn]));return Object.assign({},t,b({},i.timeColumn,e))}).filter(function(t){return!Number.isNaN(t[i.timeColumn].getMilliseconds())});c.length&&o.selectAll("line").data(c).enter().append("line").attr({x1:function(){return function(t){return bt(new Date(t[i.timeColumn]))}}(),y1:0,x2:function(){return function(t){return bt(new Date(t[i.timeColumn]))}}(),y2:Et}).attr("class",i.opacity+" "+i.style).style("stroke",l).style("stroke-width",i.width).on("mouseover",u.show).on("mouseout",u.hide).call(u),a.focus.dispatch.on("onBrush.event-annotation",function(){o.selectAll("line").data(c).attr({x1:function(){return function(t){return bt(new Date(t[i.timeColumn]))}}(),y1:0,x2:function(){return function(t){return bt(new Date(t[i.timeColumn]))}}(),y2:Et,opacity:function(){return function(t){var e=bt(new Date(t[i.timeColumn]));return e>0&&e<Lt?1:0}}()})})}),xt.filter(function(e){return e.annotationType===m.default.INTERVAL&&t.annotationData&&t.annotationData[e.name]}).forEach(function(e,n){var i=(0,d.applyNativeColumns)(e),o=r.default.select(t.selector).select(".nv-wrap").append("g").attr("class","nv-interval-annotation-layer-"+n),l=i.color||(0,f.getColorFromScheme)(i.name,j.color_scheme),u=Ot(i),c=(t.annotationData[i.name].records||[]).map(function(t){var e,a=new Date(s.default.utc(t[i.timeColumn])),n=new Date(s.default.utc(t[i.intervalEndColumn]));return Object.assign({},t,(b(e={},i.timeColumn,a),b(e,i.intervalEndColumn,n),e))}).filter(function(t){return!Number.isNaN(t[i.timeColumn].getMilliseconds())&&!Number.isNaN(t[i.intervalEndColumn].getMilliseconds())});c.length&&o.selectAll("rect").data(c).enter().append("rect").attr({x:function(){return function(t){return Math.min(bt(new Date(t[i.timeColumn])),bt(new Date(t[i.intervalEndColumn])))}}(),y:0,width:function(){return function(t){return Math.max(Math.abs(bt(new Date(t[i.intervalEndColumn]))-bt(new Date(t[i.timeColumn]))),1)}}(),height:Et}).attr("class",i.opacity+" "+i.style).style("stroke-width",i.width).style("stroke",l).style("fill",l).style("fill-opacity",.2).on("mouseover",u.show).on("mouseout",u.hide).call(u),a.focus.dispatch.on("onBrush.interval-annotation",function(){o.selectAll("rect").data(c).attr({x:function(){return function(t){return bt(new Date(t[i.timeColumn]))}}(),width:function(){return function(t){var e=bt(new Date(t[i.timeColumn]));return bt(new Date(t[i.intervalEndColumn]))-e}}()})})})),e.datum(N).attr("height",w).attr("width",S).call(a),r.default.selectAll(".slice_container .nv-timeseries-annotation-layer.showMarkerstrue .nv-point").style("stroke-opacity",1).style("fill-opacity",1),r.default.selectAll(".slice_container .nv-timeseries-annotation-layer.hideLinetrue").style("stroke-width",0)}}return function(t,e){var a=t.useInteractiveGuideline&&t.useInteractiveGuideline()?t.interactiveLayer:t,n=a.tooltip.contentGenerator();a.tooltip.contentGenerator(function(t){var a='<div style="max-width: '+.5*e.width()+'px">';return a+=n(t),a+="</div>"})}(a,t.container),a}}();F(),o.default.addGraph(W)};var n=_(a(22)),i=_(a(636)),r=_(a(52)),o=_(a(2614));a(2628);var l=_(a(1179)),s=_(a(8)),u=_(a(2624)),c=_(a(2580)),f=a(240),d=a(555),m=_(d),x=a(31),h=a(50),y=a(244),p=a(11);a(2630);var v=a(413);function _(t){return t&&t.__esModule?t:{default:t}}function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function g(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}var w=15,A=30,k=1e3,C=480,M={small:340},D=["line","dual_line","line_multi","area","compare","bar","time_pivot"],T=function(){return function(t,e,a,n,i){var o=r.default.format(i||".3s"),l=a.length,s=n&&0!==a.length?a[0].values.map(function(t,e){var n=a.map(function(t){return t.values[e]});return r.default.sum(n,function(t){return t.y})}):[],u=t.selectAll("g.nv-group").filter(function(t,e){return!n||e===l-1}).selectAll("rect"),c=t.select("g.nv-barsWrap").append("g");u.each(function(t,e){var a=r.default.select(this);if(a.attr("class").includes("positive")){var i=a.attr("transform"),l=parseFloat(a.attr("y")),u=parseFloat(a.attr("x")),f=parseFloat(a.attr("width")),d=c.append("text").attr("x",u).attr("y",l-5).text(o(n?s[e]:t.y)).attr("transform",i).attr("class","bar-chart-label"),m=d.node().getBBox().width;d.attr("x",u+f/2-m/2)}})}}();function F(){(0,n.default)(".nvtooltip").css({opacity:0})}function L(t,e){var a=t.find("."+e+" text").not(".nv-axislabel"),n=a.map(function(t){return.75*a[t].getComputedTextLength()});return Math.ceil(Math.max.apply(Math,g(n)))}function E(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=function(){return function(t){return e[t]||t}}(),n=void 0;Array.isArray(t)&&t.length?n=t.map(function(t){return y.TIME_SHIFT_PATTERN.test(t)?t:a(t)}).join(", "):n=a(t);return n}},2628:function(t,e,a){},2630:function(t,e,a){},636:function(t,e,a){(function(e){var a="Expected a function",n=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,d=c||f||Function("return this")(),m=Object.prototype.toString,x=Math.max,h=Math.min,y=function(){return d.Date.now()};function p(t,e,n){var i,r,o,l,s,u,c=0,f=!1,d=!1,m=!0;if("function"!=typeof t)throw new TypeError(a);function p(e){var a=i,n=r;return i=r=void 0,c=e,l=t.apply(n,a)}function b(t){var a=t-u;return void 0===u||a>=e||a<0||d&&t-c>=o}function g(){var t=y();if(b(t))return w(t);s=setTimeout(g,function(t){var a=e-(t-u);return d?h(a,o-(t-c)):a}(t))}function w(t){return s=void 0,m&&i?p(t):(i=r=void 0,l)}function A(){var t=y(),a=b(t);if(i=arguments,r=this,u=t,a){if(void 0===s)return function(t){return c=t,s=setTimeout(g,e),f?p(t):l}(u);if(d)return s=setTimeout(g,e),p(u)}return void 0===s&&(s=setTimeout(g,e)),l}return e=_(e)||0,v(n)&&(f=!!n.leading,o=(d="maxWait"in n)?x(_(n.maxWait)||0,e):o,m="trailing"in n?!!n.trailing:m),A.cancel=function(){void 0!==s&&clearTimeout(s),c=0,i=u=r=s=void 0},A.flush=function(){return void 0===s?l:w(y())},A}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function _(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&m.call(t)==i}(t))return n;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var a=l.test(t);return a||s.test(t)?u(t.slice(2),a?2:8):o.test(t)?n:+t}t.exports=function(t,e,n){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError(a);return v(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(t,e,{leading:i,maxWait:e,trailing:r})}}).call(this,a(36))}}]);