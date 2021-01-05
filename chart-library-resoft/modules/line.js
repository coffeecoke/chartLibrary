import _ from 'lodash'
import echarts from 'echarts'
import chartDataFormate from './chartDataFormate'
String.prototype.colorRgb = function() {
    // 16进制颜色值的正则
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    // 把颜色值变成小写S
    var color = this.toLowerCase();
    if (reg.test(color)) {
        // 如果只有三位的值，需变成六位，如：#fff => #ffffff
        if (color.length === 4) {
            var colorNew = "#";
            for (var i = 1; i < 4; i += 1) {
                colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
            }
            color = colorNew;
        }
        // 处理六位的颜色值，转为RGB
        var colorChange = [];
        for (var i = 1; i < 7; i += 2) {
            colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
        }
        return "rgba(" + colorChange.join(",") + ")";
    } else {
        return color;
    }
};
// 折线图
var line = function(obj) {
    var _self = this;
    var data = this.initData(obj)
    var fn = (function(obj) {
        return function() {
            var stackline_datas = chartDataFormate.FormateGroupData(data, 'line', obj.stack, obj.yAxisIndex);
            var legendData = stackline_datas.category;
            var xAxis = [{
                type: 'category', //X轴均为category，Y轴均为value
                data: stackline_datas.xAxis,
                boundaryGap: true //数值轴两端的空白策略
            }];
            var yAxis = [{
                nameLocation: 'end',
                nameTextStyle: {
                    fontSize: 12,
                    padding: [0, 0, 0, -50]
                },
            }];
            var legend = {
                data: [],
                icon: 'circle',
                itemWidth: 8,
                itemHeight: 8,
            };
            var series = stackline_datas.series;
            _.forEach(series, function(item, index) {
                // var itemStyle={
                //     color: _self.colors[index],
                // }
                var symbol = 'circle';
                // item.itemStyle = itemStyle;
                item.symbol = symbol;
                item.yAxis = yAxis;
            })
            _self.chartCommonOption.legend.data.push.apply(_self.chartCommonOption.legend.data, legendData)
            _.assign(_self.chartCommonOption.xAxis, xAxis)
            _.assign(_self.chartCommonOption.legend, legend)
            _.assign(_self.chartCommonOption.yAxis, yAxis)
            _self.chartCommonOption.series.push.apply(_self.chartCommonOption.series, series)
            _self.chartCommonOption.color = _self.color
            _self.renderChart(_self.chartCommonOption)
            _self._next()
        }
    })(obj)
    this.tasks.push(fn);
    return this;
}

var lineArea = function(obj) {
    var _self = this;
    var data = this.initData(obj)
    var fn = (function(obj) {
        return function() {
            var stackline_datas = chartDataFormate.FormateGroupData(data, 'line', obj.stack, obj.yAxisIndex);
            var legendData = stackline_datas.category;
            var xAxis = [{
                type: 'category', //X轴均为category，Y轴均为value
                data: stackline_datas.xAxis,
                boundaryGap: true //数值轴两端的空白策略
            }];
            var yAxis = [{
                nameLocation: 'end',
                nameTextStyle: {
                    fontSize: 12,
                    padding: [0, 0, 0, -50]
                }
            }];
            var legend = {
                data: [],
                icon: 'circle',
                itemWidth: 8,
                itemHeight: 8,
            };
            console.log((_self.colors[0]).colorRgb())
            var series = stackline_datas.series;
            _.forEach(series, function(item, index) {
                var currObjAreaStyle = {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            // color: (_self.colors[index].split(')'))[0] + ',0.8)',
                            color: (_self.colors[index]).colorRgb().split(')')[0] + ',0.8)',
                            opacity: .3
                        }, {
                            offset: 0.8,
                            // color: (_self.colors[index].split(')'))[0] + ',0)',
                            color: (_self.colors[index]).colorRgb().split(')')[0] + ',0)',
                            opacity: 0.3
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                }
                var itemStyle = {
                    color: _self.colors[index]
                }
                var symbol = 'circle';
                item.areaStyle = currObjAreaStyle;
                item.itemStyle = itemStyle;
                item.symbol = symbol;
                item.yAxis = yAxis;
            })
            _self.chartCommonOption.legend.data.push.apply(_self.chartCommonOption.legend.data, legendData)
            _.assign(_self.chartCommonOption.xAxis, xAxis)
            _.assign(_self.chartCommonOption.legend, legend)
            _.assign(_self.chartCommonOption.yAxis, yAxis)
            _self.chartCommonOption.series.push.apply(_self.chartCommonOption.series, series)
            _self.renderChart(_self.chartCommonOption)
            _self._next()
        }

    })(obj)
    this.tasks.push(fn);
    return this;
}
export default {
    line: line,
    lineArea: lineArea
}