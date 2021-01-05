"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _chartDataFormate = _interopRequireDefault(require("./chartDataFormate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var scatter = function scatter(obj, i) {
  var _self = this;

  var data = this.initData(obj);

  var fn = function (obj) {
    return function () {
      var scatter_datas = _chartDataFormate["default"].FormateGroupData(data, 'scatter', obj.stack, obj.yAxisIndex);

      var scatterOptions = {
        legend: {
          data: scatter_datas.category
        },
        series: scatter_datas.series
      };

      _lodash["default"].merge(_self.chartCommonOption, scatterOptions);

      _self.renderChart(_self.chartCommonOption);

      _self._next();
    };
  }(obj);

  this.tasks.push(fn);
  return this;
};

var _default = {
  scatter: scatter
};
exports["default"] = _default;