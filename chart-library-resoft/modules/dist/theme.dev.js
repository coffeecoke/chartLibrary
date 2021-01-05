"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _echarts = _interopRequireDefault(require("echarts"));

var _lodash = _interopRequireDefault(require("lodash"));

var _customed = _interopRequireDefault(require("../json/customed"));

var _theme = _interopRequireDefault(require("../json/theme4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 配置图表主题
var setChartTheme = function setChartTheme(themeType, opts) {
  var _this = this;

  var themes = {
    customed: _customed["default"],
    theme4: _theme["default"]
  };
  var data = themes[themeType];

  if (data) {
    _this.colors = data.color;
    _this.barColors = data.barColors;
    _this.barStackColors = data.barStackColors;
    _this.pieLabelColor = data.pieLabelColor;
    _this.shieldColor = data.shieldColor;
    _this.shieldTextColor = data.shieldTextColor;
    _this.shieldValueColor = data.shieldValueColor;
    _this.shieldLineColor = data.shieldLineColor;

    if (!opts.type || opts.type === 'echarts') {
      _echarts["default"].registerTheme(themeType, data);

      _this.chart = _echarts["default"].init(document.getElementById(opts.id), themeType);
    }
  } // $.ajax({
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

};

var _default = setChartTheme;
exports["default"] = _default;