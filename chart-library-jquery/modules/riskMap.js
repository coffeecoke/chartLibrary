define([
  'jquery',
  'echarts',
  'modules/chartDataFormate'
], function ($, echarts, chartDataFormate) {
  'use strict';
  var renderMap = function (riskMap_datas, map) {
    var riskSymbolStyles = [{
        name: '低风险',
        value: {
          type: 'scatter',
          symbol: 'circle',
          symbolSize: function (val) {
            if (val) {
              return val[2] / 2;
            }
          },
          itemStyle: {
            normal: {
              color: '#f4e925',
            }
          },
        }
      },
      {
        name: '高风险',
        value: {
          type: 'effectScatter',
          symbol: 'circle',
          symbolSize: function (val) {
            if (val) {
              return val[2] / 6;
            }
          },
          itemStyle: {
            normal: {
              color: '#f4e925',
            }
          },
        }
      }

    ]
    var series = [{
      type: 'map',
      map: map,
      geoIndex: 1,
      aspectScale: 0.75,
      label: {
        normal: {
          show: true,
          textStyle: {
            color: '#fff'
          }
        },
        emphasis: {
          textStyle: {
            color: '#fff'
          }
        }
      },
      itemStyle: {
        normal: {
          borderColor: 'rgba(147, 235, 248, 1)',
          borderWidth: 1,
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [{
              offset: 0,
              color: 'rgba(53, 142, 228, 0)' // 0% 处的颜色
            }, {
              offset: 0.8,
              color: 'rgba(53, 142, 228, .4)' // 0% 处的颜色
            }, {
              offset: 1,
              color: 'rgba(53, 142, 228, .8)' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          },
        },
        emphasis: {
          areaColor: '#389BB7',
          borderWidth: 0
        }
      },
      roam: false, //地图设置不可拖拽，固定的
      zoom: 1.2
    }]
    _.forEach(riskMap_datas.series, function (item, index) {

      var currSeriesObj = {
        name: item.name,
        coordinateSystem: 'geo',
        data: item.data,
        label: {
          normal: {
            formatter: function () {
              return ''
            },
            position: 'right',
            show: false
          }
        },
      }

      _.forEach(riskSymbolStyles, function (v, key) {
        if (v.name === item.name) {
          _.merge(currSeriesObj, v.value)
        }
      })
      series.push(currSeriesObj)

    })
    var option = {
      geo: {
        show: true,
        map: map,
        aspectScale: 0.75,

        itemStyle: {
          normal: {
            areaColor: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [{
                offset: 0,
                color: 'rgba(53, 142, 228, 0)' // 0% 处的颜色
              }, {
                offset: 1,
                color: 'rgba(53, 142, 228, .8)' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            },
            shadowColor: 'rgba(12, 35, 63, 1)',
            shadowOffsetX: 10,
            shadowOffsetY: 10,
            shadowBlur: 6,
          },

          emphasis: {
            areaColor: '#389BB7',
            borderWidth: 0
          }
        },

        roam: false, //地图设置不可拖拽，固定的
        zoom: 1.2
      },
      tooltip: {
        show: true,
        backgroundColor: 'transparent',
        formatter: function (params) {
          if (params.seriesType === "effectScatter" || params.seriesType === "scatter") {
            return '<div class="tooltip">' +
              '<p class="name" style="word-wrap:break-word;">' + params.name + '</p>' +
              '<p>风险等级 <span>' + parseInt(params.data.value[2] / 10) + '</span>级</p>' +
              '</div>'
          }

        }
      },
      toolbox: {
        show: true
      },
      series: series
    }
    this.renderChart(option)
  }
  // 风险地图
  var riskMap = function (obj) {
    var _self = this;
    var data = this.initData(obj);
    var fn = (function (obj) {
      return function () {
        var mapJson;
        $.ajax({
          url: obj.geoJsonUrl,
          dataType: 'json',
          async: false,
          success: function (data) {
            mapJson = data
          }
        })
        echarts.registerMap(obj.map, mapJson);
        var riskMap_datas = chartDataFormate.FormateGroupData(data, 'riskMap', obj.stack);
        renderMap.call(_self,riskMap_datas, obj.map)
      }
    })(obj)
    this.tasks.push(fn);
    return this
  }
  return {
    riskMap: riskMap
  }
});