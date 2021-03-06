"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _util = _interopRequireDefault(require("./util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 图表数据格式化
var FormateNOGroupData = function FormateNOGroupData(data) {
  //data的格式如上的Result1，这种格式的数据，多用于饼图、单一的柱形图的数据源
  var categories = [];
  var datas = [];

  for (var i = 0; i < data.length; i++) {
    categories.push(data[i].name || "");
    datas.push({
      name: data[i].name,
      value: data[i].value || 0
    });
  }

  ;
  return {
    category: categories,
    data: datas
  };
};

var FormateGroupData = function FormateGroupData(data, type, is_stack, yAxisIndex) {
  //data的格式如上的Result2，type为要渲染的图表类型：可以为line，bar，is_stack表示为是否是堆积图，这种格式的数据多用于展示多条折线图、分组的柱图
  var chart_type = 'line';
  if (type) chart_type = type || 'line';
  var chart_animation = '';
  var xAxis = [];
  var group = [];
  var series = [];
  var indicator = [];

  for (var i = 0; i < data.length; i++) {
    xAxis.push(data[i].name);
    group.push(data[i].group);
  }

  xAxis = _util["default"]._unique(xAxis);
  group = _util["default"]._unique(group);

  for (var i = 0; i < group.length; i++) {
    var temp = [];

    for (var j = 0; j < data.length; j++) {
      if (group[i] == data[j].group) {
        if (type == "map") {
          temp.push({
            name: data[j].name,
            value: data[i].value
          });
        } else if (type == "riskMap") {
          _lodash["default"].forEach(data[i].dataT, function (key, item) {
            var geoCoord = data[i].geoCoordMap[item.name];

            if (geoCoord) {
              temp.push({
                name: item.name,
                value: geoCoord.concat(item.value)
              });
            }
          });
        } else if (type == "radar") {
          indicator.push({
            name: data[j].name,
            max: data[j].max
          });
          temp.push(data[j].value);
        } else if (type == 'scatter') {
          temp.push.apply(temp, data[j].value);
        } else {
          temp.push(data[j].value);
        }
      }
    }

    switch (type) {
      case 'bar':
        var series_temp = {
          name: group[i],
          data: temp,
          type: chart_type,
          barWidth: 10,
          symbolRepeat: data[i].symbolRepeat,
          symbolMargin: data[i].symbolMargin,
          symbolClip: data[i].symbolClip,
          symbolBoundingData: data[i].symbolBoundingData,
          animationEasing: 'elasticOut'
        };
        if (is_stack) series_temp = _lodash["default"].assign({}, {
          stack: 'stack'
        }, series_temp);
        break;

      case 'line':
        var series_temp = {
          name: group[i],
          data: temp,
          type: chart_type
        };
        if (is_stack) series_temp = _lodash["default"].assign({}, {
          stack: 'stack'
        }, series_temp);
        break;

      case 'radar':
        var series_temp = {
          name: group[i],
          value: temp // type: chart_type,

        };
        break;

      case 'scatter':
        var series_temp = {
          name: group[i],
          data: temp,
          type: chart_type,
          symbol: data[i].symbol,
          symbolSize: data[i].symbolSize
        };
        break;

      case 'riskMap':
        var series_temp = {
          name: group[i],
          data: temp
        };
        break;

      case 'pictorialBar':
        var series_temp = [{
          name: '',
          type: 'pictorialBar',
          // itemStyle: {
          //   normal: {
          //       color: '#6c92e3'
          //   }
          // },
          z: 1,
          data: [],
          symbol: 'rect',
          symbolRepeat: 'fixed',
          symbolMargin: 2,
          symbolClip: true,
          symbolSize: [6, 20],
          animationEasing: 'elasticOut',
          // symbolBoundingData: 2000,
          animationDelay: function animationDelay(dataIndex, params) {
            return params.index * 30;
          }
        }, {
          name: '',
          type: 'pictorialBar',
          data: [],
          label: {
            normal: {
              show: false,
              formatter: function formatter(value, index) {
                return value.value;
              },
              position: 'right',
              offset: [5, 0],
              // offset: [0, 4],
              color: '#6DE8FA',
              fontSize: 20
            }
          },
          z: 10,
          symbol: 'rect',
          symbolRepeat: 'fixed',
          symbolMargin: 2,
          symbolClip: true,
          symbolSize: [6, 20],
          animationEasing: 'elasticOut',
          // symbolBoundingData: 2000,
          animationDelay: function animationDelay(dataIndex, params) {
            return params.index * 30;
          }
        }];
        var innerData = [];
        var outerData = [];
        data.forEach(function (item, index) {
          innerData.push(item.value);
          outerData.push(100);
        });
        series_temp[0].data = outerData;
        series_temp[1].data = innerData;
        break;

      default: // var series_temp = {
      //   // name: group[i],
      //   // data: temp,
      //   // type: chart_type,
      //   // yAxisIndex:yAxisIndex
      // };

    }

    if (yAxisIndex) {
      series_temp.yAxisIndex = yAxisIndex;
    }

    if (Object.prototype.toString.call(series_temp) === '[object Object]') {
      series.push(series_temp);
    } else if (Object.prototype.toString.call(series_temp) === '[object Array]') {
      series.push.apply(series, series_temp); //考虑象形图
    }
  }

  return {
    category: group,
    // category: group.length > 1? group : [],
    indicator: _util["default"]._unique(indicator),
    xAxis: xAxis,
    series: series
  };
};

var _default = {
  FormateNOGroupData: FormateNOGroupData,
  FormateGroupData: FormateGroupData
};
exports["default"] = _default;