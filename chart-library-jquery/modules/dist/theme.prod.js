"use strict";define(["jquery","echarts"],function(o,n){return function(s,r){var l=this;o.ajax({url:{wonderland:"../json/wonderland.json",theme4:"../json/theme4.json",essos:"../json/essos.json",customed:"../json/customed.json"}[s],async:!1,success:function(o){var e=o;s&&(l.colors=o.color,l.barColors=o.barColors,l.barStackColors=o.barStackColors,l.pieLabelColor=o.pieLabelColor,l.shieldColor=o.shieldColor,l.shieldTextColor=o.shieldTextColor,l.shieldValueColor=o.shieldValueColor,l.shieldLineColor=o.shieldLineColor,r.type&&"echarts"!==r.type||(n.registerTheme(s,e),l.chart=n.init(document.getElementById(r.id),s)))}})}});