"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _chartCommonOption = _interopRequireDefault(require("./modules/chartCommonOption"));

var _pies = _interopRequireDefault(require("./modules/pies"));

var _scatter = _interopRequireDefault(require("./modules/scatter"));

var _line = _interopRequireDefault(require("./modules/line"));

var _bars = _interopRequireDefault(require("./modules/bars"));

var _radar = _interopRequireDefault(require("./modules/radar"));

var _shield = _interopRequireDefault(require("./modules/shield"));

var _theme = _interopRequireDefault(require("./modules/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ChartFactory(opts) {
  this.tasks = [];
  this.init(opts);
}

ChartFactory._defaultOpts = {
  id: '' || [],
  asy: false,
  data: [],
  url: '',
  themeType: ''
}; // 各种类型图表胚子

var chartOptionTemplates = {};

_lodash["default"].assign(chartOptionTemplates, _pies["default"], _scatter["default"], _line["default"], _bars["default"], _radar["default"], _shield["default"]);

ChartFactory.prototype = {
  _next: function _next() {
    var fn = this.tasks.shift();
    fn && fn();
  },
  init: function init(opts) {
    var _self = this;

    this.id = opts.id;

    _self.setChartOptionTemplates();

    _self.opts = _lodash["default"].assign({}, ChartFactory._defaultOpts, opts);

    _theme["default"].call(_self, _self.opts.themeType, _self.opts);

    var fn = function (opts) {
      return function () {
        if (!opts.type || opts.type === 'echarts') {
          _self._setChartOption();

          _self._extendxyAxis();
        } else {}

        _self._next();
      };
    }(opts);

    this.tasks.unshift(fn);
    setTimeout(function () {
      _self._next();
    }, 0);
  },
  // 克隆CommOption，以便给多个实例使用
  _setChartOption: function _setChartOption() {
    this.chartCommonOption = _lodash["default"].cloneDeep(_chartCommonOption["default"]); //clone
  },
  // 继承线图，柱图类型的x,y坐标
  _extendxyAxis: function _extendxyAxis() {
    if (this.opts.yAxis || this.opts.xAxis) {
      _lodash["default"].assign(this.chartCommonOption.yAxis, this.opts.yAxis || []);

      _lodash["default"].assign(this.chartCommonOption.xAxis, this.opts.xAxis || []);
    }
  },
  //初始化数据
  initData: function initData(obj) {
    var data = obj.data || [];
    return data;
  },
  chartDataFormate: function chartDataFormate(data) {},
  // ChartFactory原型扩展api
  setChartOptionTemplates: function setChartOptionTemplates() {
    _lodash["default"].assign(ChartFactory.prototype, chartOptionTemplates);
  },
  renderChart: function renderChart(chartOptions) {
    // 当tasks里面的任务执行完了，在进行渲染
    if (this.tasks && this.tasks.length === 0) {
      this.chart.clear();
      this.chart.setOption(chartOptions);
      this.resize();
    }
  },
  resize: function resize() {
    var _self = this;
  }
};
var _default = ChartFactory;
exports["default"] = _default;