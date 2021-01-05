define([
  'jquery',
  'echarts',
  'modules/chartDataFormate'
], function($, echarts, chartDataFormate) {
  var scatter = function (obj, i) {
    var _self = this;
    var data = this.initData(obj)
    var fn = (function (obj) {
      return function () {
        var scatter_datas = chartDataFormate.FormateGroupData(data, 'scatter', obj.stack, obj.yAxisIndex);
        var scatterOptions = {
          legend: {
            data: scatter_datas.category
          },
          series: scatter_datas.series
        }
        $.extend(true, _self.chartCommonOption, scatterOptions)
        _self.renderChart(_self.chartCommonOption)
        _self._next()
      }
    })(obj)
    this.tasks.push(fn);
    return this;
  }
  
  return {
    scatter: scatter
  }
});