define([
    'jquery',
    'echarts',
], function($, echarts) {
    'use strict';
    // 柱状图
    // 配置图表主题
    var setChartTheme = function(themeType, opts) {
        var _this = this
        var themes = {
            wonderland: '../json/wonderland.json', // 配置主题的路径,
            theme4: '../json/theme4.json',
            essos: '../json/essos.json',
            customed: '../json/customed.json'
        }
        $.ajax({
            url: themes[themeType],
            async: false,
            success: function(data) {
                var obj = data;
                if (themeType) {
                    _this.colors = data.color
                    _this.barColors = data.barColors
                    _this.barStackColors = data.barStackColors
                    _this.pieLabelColor = data.pieLabelColor
                    _this.shieldColor = data.shieldColor
                    _this.shieldTextColor = data.shieldTextColor
                    _this.shieldValueColor = data.shieldValueColor
                    _this.shieldLineColor = data.shieldLineColor
                    if (!opts.type || opts.type === 'echarts') {
                        echarts.registerTheme(themeType, obj);
                        _this.chart = echarts.init(document.getElementById(opts.id), themeType);
                    }
                }
            }

        })


    }
    return setChartTheme
});