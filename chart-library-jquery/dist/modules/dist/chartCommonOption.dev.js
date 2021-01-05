"use strict";

define(['jquery', 'echarts'], function ($, echarts) {
  'use strict'; // 折线图，柱状图，散点图带坐标柱的基本配置

  var chartCommonOption = {
    //通用的图表基本配置
    color: [],
    tooltip: {
      trigger: 'axis' //tooltip触发方式:axis以X轴线触发,item以每一个数据项触发

    },
    toolbox: {
      show: false,
      //是否显示工具栏
      feature: {
        mark: true,
        dataView: {
          readOnly: false
        },
        //数据预览
        restore: true,
        //复原
        saveAsImage: true //是否保存图片

      }
    },
    grid: {
      left: '18%',
      right: '18%'
    },
    legend: {
      data: [],
      itemWidth: 8,
      itemHeight: 8
    },
    xAxis: [],
    yAxis: [],
    series: []
  };
  return chartCommonOption;
});