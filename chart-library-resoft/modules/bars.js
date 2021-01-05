import _ from 'lodash'
import chartDataFormate from './chartDataFormate'
// 柱状图
var bars = function(obj) {
    var _self = this;
    var data = this.initData(obj)
    var fn = (function(obj) {
        return function() {
            var bars_dates = chartDataFormate.FormateGroupData(data, 'bar', obj.stack, obj.yAxisIndex);
            var legendData = bars_dates.category;
            var xAxis = [{
                type: 'category', //X轴均为category，Y轴均为value
                data: bars_dates.xAxis,
                nameLocation: 'end',
                boundaryGap: true //数值轴两端的空白策略
            }];
            var yAxis = [{
                nameLocation: 'end',
                nameTextStyle: {
                    fontSize: 12,
                    padding: [0, 0, 0, -50]
                },
            }];
            var series = bars_dates.series
            _self.chartCommonOption.legend.data.push.apply(_self.chartCommonOption.legend.data, legendData)
            _.assign(_self.chartCommonOption.xAxis, xAxis)
            _.assign(_self.chartCommonOption.yAxis, yAxis)
            _self.chartCommonOption.series.push.apply(_self.chartCommonOption.series, series)
            if (obj.stack) {
                _self.chartCommonOption.color = _self.barStackColors
            } else {
                _self.chartCommonOption.color = _self.barColors
            }
            _self.renderChart(_self.chartCommonOption)
            _self._next()
        }
    })(obj)
    this.tasks.push(fn);
    return this;
}

// 横向柱状图
var horizontalBar = function(obj) {
        var _self = this;
        var data = this.initData(obj)
        var fn = (function(obj) {
            return function() {
                var bars_dates = chartDataFormate.FormateGroupData(data, 'bar', obj.stack);
                var legendData = bars_dates.category;
                var yAxis = [{
                    type: 'category', //X轴均为category，Y轴均为value
                    data: bars_dates.xAxis,
                    axisLabel: {
                        rotate: 0
                    }
                    //boundaryGap: true //数值轴两端的空白策略
                }];
                var series = bars_dates.series
                _self.chartCommonOption.legend.data.push.apply(_self.chartCommonOption.legend.data, legendData)
                _.assign(_self.chartCommonOption.yAxis, yAxis)
                _self.chartCommonOption.series.push.apply(_self.chartCommonOption.series, series)
                if (obj.stack) {
                    _self.chartCommonOption.color = _self.barStackColors
                } else {
                    _self.chartCommonOption.color = _self.barColors
                }
                _self.renderChart(_self.chartCommonOption)
                _self._next()
            }

        })(obj)
        this.tasks.push(fn);
        return this;
    }
    // 象形图
var pictorialBar = function(obj) {
    var _self = this;
    var data = this.initData(obj)
    var fn = (function(obj) {
        return function() {
            var bars_dates = chartDataFormate.FormateGroupData(data, 'pictorialBar');

            var legendData = bars_dates.category;
            var xAxis = [{
                max: 100,
                show: true,
                splitLine: {
                    show: false
                },
                type: 'value',
                name: '%'
            }];
            var yAxis = [{
                data: bars_dates.xAxis,
                axisLabel: {
                    inside: false,
                    // verticalAlign: 'middle',
                    fontSize: 12
                },
                axisLine: {
                    show: true
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: _self.colors[0]
                    }
                }
            }];
            var series = bars_dates.series;
            _self.chartCommonOption.legend.data.push.apply(_self.chartCommonOption.legend.data, legendData)
            _.assign(_self.chartCommonOption.xAxis, xAxis)
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
    bars: bars,
    horizontalBar: horizontalBar,
    pictorialBar: pictorialBar
}