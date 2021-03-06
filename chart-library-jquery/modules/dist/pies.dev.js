"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 饼图基本配置
define(['modules/chartDataFormate'], function (chartDataFormate) {
  var _legend, _legend2;

  var pieLabelCommonOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)',
      show: true
    },
    legend: (_legend = {
      show: false,
      orient: 'horizontal',
      x: '10%',
      data: [],
      bottom: "20px"
    }, _defineProperty(_legend, "show", true), _defineProperty(_legend, "icon", 'circle'), _defineProperty(_legend, "itemWidth", 8), _defineProperty(_legend, "itemHeight", 8), _legend),
    series: [{
      name: "",
      type: 'pie',
      radius: '45%',
      center: ['50%', '45%'],
      labelLine: {
        normal: {
          length: 15,
          length2: 15,
          lineStyle: {
            type: 'solid'
          }
        }
      }
    }]
  };
  var pieLabelCommonOption1 = {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)',
      show: true
    },
    legend: (_legend2 = {
      width: '50%',
      show: false,
      orient: 'horizontal',
      x: '10%',
      data: [],
      bottom: "20px"
    }, _defineProperty(_legend2, "show", true), _defineProperty(_legend2, "icon", 'circle'), _defineProperty(_legend2, "itemWidth", 8), _defineProperty(_legend2, "itemHeight", 8), _legend2),
    series: [{
      name: "",
      type: 'pie',
      roseType: 'radius',
      radius: '45%',
      center: ['50%', '45%'],
      labelLine: {
        normal: {
          length: 15,
          length2: 15,
          lineStyle: {
            type: 'solid'
          }
        }
      },
      label: {
        normal: {
          formatter: function formatter(params) {
            return '{c|' + params.percent.toFixed(0) + '%}\n' + '{b|' + params.name + '} ';
          },
          align: 'center',
          // padding: [0, -56],
          // height: 66,
          rich: {
            b: {
              fontSize: 14,
              lineHeight: 20 // color: '#fff',

            },
            c: {
              fontSize: 18 //lineHeight:20,
              // color: '#fff'

            }
          }
        }
      }
    }]
  };
  var pieLegendCommonOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {d} %'
    },
    series: [{
      name: "",
      type: 'pie',
      radius: '45%',
      center: ['50%', '30%'],
      label: {
        normal: {
          show: false
        }
      }
    }]
  };
  var pieRingLabelCommonOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)',
      show: true
    },
    legend: {
      orient: 'horizontal',
      x: '10%',
      data: [],
      bottom: "40px",
      show: true,
      icon: 'circle',
      itemWidth: 8,
      itemHeight: 8
    },
    series: [{
      name: "",
      type: 'pie',
      radius: ['35%', '45%'],
      center: ['50%', '45%'],
      label: {
        normal: {
          formatter: function formatter(params) {
            return '{c|' + params.percent.toFixed(0) + '%}\n' + '{b|' + params.name + '} ';
          },
          align: 'center',
          // padding: [0, -56],
          // height: 60,
          rich: {
            b: {
              fontSize: 14,
              lineHeight: 20 // color: '#fff',

            },
            c: {
              fontSize: 18 //lineHeight:20,
              // color: '#fff'

            }
          }
        }
      }
    }]
  };
  var pieRingLegendCommonOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      data: [],
      show: true,
      icon: 'circle',
      bottom: 30,
      height: "25%",
      itemWidth: 8,
      itemHeight: 8,
      padding: 20,
      formatter: function formatter(name) {
        var oa = pieRingLegendCommonOption.series[0].data;
        var total = 0;
        oa.forEach(function (item, index) {
          total += item.value;
        });

        for (var i = 0; i < oa.length; i++) {
          if (name == oa[i].name) {
            return name + '  ' + (oa[i].value / total * 100).toFixed(2) + '%';
          }
        }
      }
    },
    series: [{
      name: "",
      type: 'pie',
      radius: ['35%', '45%'],
      center: ['50%', '30%'],
      label: {
        normal: {
          show: false
        }
      }
    }]
  }; // 带label的饼图

  var pieLabel = function pieLabel(obj) {
    var _self = this;

    var data = this.initData(obj);

    var fn = function (obj) {
      return function () {
        var pie_datas = chartDataFormate.FormateNOGroupData(data);
        var option = {
          legend: {
            show: false,
            icon: 'circle',
            itemWidth: 8,
            itemHeight: 8,
            data: pie_datas.category
          },
          series: [{
            name: obj.name || "",
            data: pie_datas.data,
            // radius:obj.radius || '50%',
            label: {
              normal: {
                formatter: function formatter(params) {
                  return '{c|' + params.percent.toFixed(0) + '%}\n' + '{b|' + params.name + '} ';
                },
                align: 'center',
                // padding: [0, -56],
                // height: 66,
                rich: {
                  b: {
                    fontSize: 14,
                    lineHeight: 20,
                    color: _self.pieLabelColor
                  },
                  c: {
                    fontSize: 18,
                    //lineHeight:20,
                    color: _self.pieLabelColor
                  }
                }
              }
            }
          }]
        };

        var pieOptions = _.merge(pieLabelCommonOption, option);

        _self.renderChart(pieOptions);

        _self._next();
      };
    }(obj);

    this.tasks.push(fn);
    return this;
  };

  var pieLabel1 = function pieLabel1(obj) {
    var _self = this;

    var data = this.initData(obj);

    var fn = function (obj) {
      return function () {
        var pie_datas = chartDataFormate.FormateNOGroupData(data);
        var option = {
          legend: {
            show: false,
            icon: 'circle',
            itemWidth: 8,
            itemHeight: 8,
            data: pie_datas.category
          },
          series: [{
            name: obj.name || "",
            data: pie_datas.data,
            // radius:obj.radius || '50%',
            label: {
              normal: {
                formatter: function formatter(params) {
                  return '{c|' + params.percent.toFixed(0) + '%}\n' + '{b|' + params.name + '} ';
                },
                align: 'center',
                // padding: [0, -56],
                // height: 66,
                rich: {
                  b: {
                    fontSize: 14,
                    lineHeight: 20,
                    color: _self.pieLabelColor
                  },
                  c: {
                    fontSize: 18,
                    //lineHeight:20,
                    color: _self.pieLabelColor
                  }
                }
              }
            }
          }]
        };

        var pieOptions = _.merge(pieLabelCommonOption1, option);

        _self.renderChart(pieOptions);

        _self._next();
      };
    }(obj);

    this.tasks.push(fn);
    return this;
  }; // 图例在下方的饼图


  var pieLegend = function pieLegend(obj) {
    var _self = this;

    var data = this.initData(obj);

    var fn = function (obj) {
      return function () {
        var pie_datas = chartDataFormate.FormateNOGroupData(data);
        var seData = pie_datas.data;
        var category = pie_datas.category;
        var data1 = seData.filter(function (item, index) {
          if (index < seData.length / 2) {
            return item;
          }
        });
        var category1 = category.filter(function (item, index) {
          if (index < category.length / 2) {
            return item;
          }
        });
        var data2 = seData.filter(function (item, index) {
          if (index >= seData.length / 2) {
            return item;
          }
        });
        var category2 = category.filter(function (item, index) {
          if (index >= category.length / 2) {
            return item;
          }
        });
        var option = {
          legend: [{
            left: document.getElementById(_self.id).offsetWidth / 2 - 150,
            orient: 'vertical',
            data: category1,
            show: true,
            icon: 'circle',
            top: '60%',
            itemGap: 15,
            padding: 20,
            itemWidth: 8,
            itemHeight: 8,
            formatter: function formatter(name) {
              var oa = pie_datas.data;
              var total = 0;
              oa.forEach(function (item, index) {
                total += item.value;
              });

              for (var i = 0; i < data1.length; i++) {
                if (name == data1[i].name) {
                  return name + '  ' + (data1[i].value / total * 100).toFixed(2) + '%';
                }
              }
            }
          }, {
            left: document.getElementById(_self.id).offsetWidth / 2,
            orient: 'vertical',
            data: category2,
            show: true,
            icon: 'circle',
            top: '60%',
            itemGap: 15,
            padding: 20,
            itemWidth: 8,
            itemHeight: 8,
            formatter: function formatter(name) {
              var oa = pie_datas.data;
              var total = 0;
              oa.forEach(function (item, index) {
                total += item.value;
              });

              for (var i = 0; i < data2.length; i++) {
                if (name == data2[i].name) {
                  return name + '  ' + (data2[i].value / total * 100).toFixed(2) + '%';
                }
              }
            }
          }],
          series: [{
            name: obj.name || "",
            data: pie_datas.data
          }]
        };

        var pieOptions = _.merge(pieLegendCommonOption, option);

        _self.renderChart(pieOptions);

        _self._next();
      };
    }(obj);

    this.tasks.push(fn);
    return this;
  }; // 带label的环形图


  var pieRingLabel = function pieRingLabel(obj) {
    var _self = this;

    var data = this.initData(obj);

    var fn = function (obj) {
      return function () {
        var pie_datas = chartDataFormate.FormateNOGroupData(data);
        var option = {
          legend: {
            show: false,
            icon: 'circle',
            itemWidth: 8,
            itemHeight: 8,
            data: pie_datas.category
          },
          series: [{
            name: obj.name || "",
            data: pie_datas.data,
            // radius:obj.radius || '50%',
            label: {
              normal: {
                formatter: function formatter(params) {
                  return '{c|' + params.percent.toFixed(0) + '%}\n' + '{b|' + params.name + '} ';
                },
                align: 'center',
                // padding: [0, -56],
                // height: 66,
                rich: {
                  b: {
                    fontSize: 14,
                    lineHeight: 20,
                    color: _self.pieLabelColor
                  },
                  c: {
                    fontSize: 18,
                    //lineHeight:20,
                    color: _self.pieLabelColor
                  }
                }
              }
            }
          }]
        };

        var pieOptions = _.merge(pieRingLabelCommonOption, option);

        _self.renderChart(pieOptions);

        _self._next();
      };
    }(obj);

    this.tasks.push(fn);
    return this;
  }; // 图例在下方的环形图


  var pieRingLegend = function pieRingLegend(obj) {
    console.log(this);

    var _self = this;

    var data = this.initData(obj);

    var fn = function (obj) {
      return function () {
        var pie_datas = chartDataFormate.FormateNOGroupData(data);
        var seData = pie_datas.data;
        var category = pie_datas.category;
        var data1 = seData.filter(function (item, index) {
          if (index < seData.length / 2) {
            return item;
          }
        });
        var category1 = category.filter(function (item, index) {
          if (index < category.length / 2) {
            return item;
          }
        });
        var data2 = seData.filter(function (item, index) {
          if (index >= seData.length / 2) {
            return item;
          }
        });
        var category2 = category.filter(function (item, index) {
          if (index >= category.length / 2) {
            return item;
          }
        });
        var option = {
          legend: [{
            left: document.getElementById(_self.id).offsetWidth / 2 - 150,
            orient: 'vertical',
            data: category1,
            show: true,
            icon: 'circle',
            top: '60%',
            itemGap: 15,
            padding: 20,
            itemWidth: 8,
            itemHeight: 8,
            formatter: function formatter(name) {
              var oa = pie_datas.data;
              var total = 0;
              oa.forEach(function (item, index) {
                total += item.value;
              });

              for (var i = 0; i < data1.length; i++) {
                if (name == data1[i].name) {
                  return name + '  ' + (data1[i].value / total * 100).toFixed(2) + '%';
                }
              }
            }
          }, {
            left: document.getElementById(_self.id).offsetWidth / 2,
            orient: 'vertical',
            data: category2,
            show: true,
            icon: 'circle',
            top: '60%',
            itemGap: 15,
            padding: 20,
            itemWidth: 8,
            itemHeight: 8,
            formatter: function formatter(name) {
              var oa = pie_datas.data;
              var total = 0;
              oa.forEach(function (item, index) {
                total += item.value;
              });

              for (var i = 0; i < data2.length; i++) {
                if (name == data2[i].name) {
                  return name + '  ' + (data2[i].value / total * 100).toFixed(2) + '%';
                }
              }
            }
          }],
          series: [{
            name: obj.name || "",
            data: pie_datas.data
          }]
        };

        var pieOptions = _.merge(pieRingLegendCommonOption, option);

        console.log(444, pieOptions);

        _self.renderChart(pieOptions);

        _self._next();
      };
    }(obj);

    this.tasks.push(fn);
    return this;
  };

  return {
    pieLabel: pieLabel,
    pieLabel1: pieLabel1,
    pieLegend: pieLegend,
    pieRingLabel: pieRingLabel,
    pieRingLegend: pieRingLegend
  };
});