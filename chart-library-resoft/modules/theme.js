import echarts from 'echarts'
import _ from 'lodash'
// 配置图表主题
import customed from '../json/customed'
import theme4 from '../json/theme4'
var setChartTheme = function(themeType, opts) {
    var _this = this
    var themes = {
        customed: customed,
        theme4: theme4
    }
    var data = themes[themeType]
    if (data) {
        _this.colors = data.color
        _this.barColors = data.barColors
        _this.barStackColors = data.barStackColors
        _this.pieLabelColor = data.pieLabelColor
        _this.shieldColor = data.shieldColor
        _this.shieldTextColor = data.shieldTextColor
        _this.shieldValueColor = data.shieldValueColor
        _this.shieldLineColor = data.shieldLineColor
        if (!opts.type || opts.type === 'echarts') {
            echarts.registerTheme(themeType, data);
            _this.chart = echarts.init(document.getElementById(opts.id), themeType);
        }
    }
    // $.ajax({
    //     url: themes[themeType],
    //     async: false,
    //     success: function(data) {
    //         var obj = data;
    //         if (themeType) {
    //             _this.colors = data.color
    //             _this.barColors = data.barColors
    //             _this.barStackColors = data.barStackColors
    //             _this.pieLabelColor = data.pieLabelColor
    //             _this.shieldColor = data.shieldColor
    //             _this.shieldTextColor = data.shieldTextColor
    //             _this.shieldValueColor = data.shieldValueColor
    //             _this.shieldLineColor = data.shieldLineColor
    //             if (!opts.type || opts.type === 'echarts') {
    //                 echarts.registerTheme(themeType, obj);
    //                 _this.chart = echarts.init(document.getElementById(opts.id), themeType);
    //             }
    //         }
    //     }

    // })


}
export default setChartTheme