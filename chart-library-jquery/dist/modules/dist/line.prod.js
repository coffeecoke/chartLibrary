"use strict";define(["jquery","echarts","modules/chartDataFormate"],function(s,l,m){String.prototype.colorRgb=function(){var t=this.toLowerCase();if(/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)){if(4===t.length){for(var o="#",e=1;e<4;e+=1)o+=t.slice(e,e+1).concat(t.slice(e,e+1));t=o}var n=[];for(e=1;e<7;e+=2)n.push(parseInt("0x"+t.slice(e,e+2)));return"rgba("+n.join(",")+")"}return t};return{line:function(t){var r,i=this,c=this.initData(t),o=(r=t,function(){var t=m.FormateGroupData(c,"line",r.stack,r.yAxisIndex),o=t.category,e=[{type:"category",data:t.xAxis,boundaryGap:!0}],n=[{nameLocation:"end",nameTextStyle:{fontSize:12,padding:[0,0,0,-50]}}],a=t.series;s.each(a,function(t,o){o.symbol="circle",o.yAxis=n}),i.chartCommonOption.legend.data.push.apply(i.chartCommonOption.legend.data,o),s.extend(!0,i.chartCommonOption.xAxis,e),s.extend(!0,i.chartCommonOption.legend,{data:[],icon:"circle",itemWidth:8,itemHeight:8}),s.extend(!0,i.chartCommonOption.yAxis,n),i.chartCommonOption.series.push.apply(i.chartCommonOption.series,a),i.chartCommonOption.color=i.color,i.renderChart(i.chartCommonOption),i._next()});return this.tasks.push(o),this},lineArea:function(t){var r,i=this,c=this.initData(t),o=(r=t,function(){var t=m.FormateGroupData(c,"line",r.stack,r.yAxisIndex),o=t.category,e=[{type:"category",data:t.xAxis,boundaryGap:!0}],a=[{nameLocation:"end",nameTextStyle:{fontSize:12,padding:[0,0,0,-50]}}];console.log(i.colors[0].colorRgb());var n=t.series;s.each(n,function(t,o){var e={normal:{color:new l.graphic.LinearGradient(0,0,0,1,[{offset:0,color:i.colors[t].colorRgb().split(")")[0]+",0.8)",opacity:.3},{offset:.8,color:i.colors[t].colorRgb().split(")")[0]+",0)",opacity:.3}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},n={color:i.colors[t]};o.areaStyle=e,o.itemStyle=n,o.symbol="circle",o.yAxis=a}),i.chartCommonOption.legend.data.push.apply(i.chartCommonOption.legend.data,o),s.extend(!0,i.chartCommonOption.xAxis,e),s.extend(!0,i.chartCommonOption.legend,{data:[],icon:"circle",itemWidth:8,itemHeight:8}),s.extend(!0,i.chartCommonOption.yAxis,a),i.chartCommonOption.series.push.apply(i.chartCommonOption.series,n),i.renderChart(i.chartCommonOption),i._next()});return this.tasks.push(o),this}}});