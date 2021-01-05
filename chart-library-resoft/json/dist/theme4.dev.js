"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  "color": ["#63a7ff", "#fc9291", "#5cdb7f", "#ff5f6e", "#3566fc", "#feb564", "#50dcb2", "#b5b8bf"],
  "barColors": ["#63a7ff", "#3566fc", "#ff5f6e", "#feb564", "#5cdb7f", "#fc9291", "#50dcb2", "#b5b8bf"],
  "barStackColors": ["#63a7ff", "#3566fc", "#fc9291", "#5cdb7f", "#ff5f6e", "#feb564", "#50dcb2", "#b5b8bf"],
  "pieLabelColor": "#333333",
  "shieldColor": "#63a7ff",
  "shieldLineColor": "#f1f1f1",
  "shieldTextColor": "#666",
  "shieldValueColor": "#3566fc",
  "backgroundColor": "rgba(0,0,0,0)",
  "textStyle": {},
  "title": {
    "textStyle": {
      "color": "#333"
    },
    "subtextStyle": {
      "color": "#aaa"
    }
  },
  "line": {
    "itemStyle": {
      "normal": {
        "borderWidth": 1
      }
    },
    "lineStyle": {
      "normal": {
        "width": 2
      }
    },
    "symbolSize": 4,
    "symbol": "emptyCircle",
    "smooth": false
  },
  "radar": {
    "name": {
      "textStyle": {
        "color": "#666"
      }
    },
    "itemStyle": {
      "normal": {
        "borderWidth": 1
      }
    },
    "lineStyle": {
      "normal": {
        "width": 2
      }
    },
    "symbolSize": 4,
    "symbol": "emptyCircle",
    "smooth": false
  },
  "bar": {
    "barWidth": "30%",
    "itemStyle": {
      "normal": {
        "barBorderWidth": "0",
        "barBorderColor": "#ccc"
      },
      "emphasis": {
        "barBorderWidth": "0",
        "barBorderColor": "#ccc"
      }
    }
  },
  "pie": {
    "itemStyle": {
      "normal": {
        "borderWidth": "0",
        "borderColor": "#ccc"
      },
      "emphasis": {
        "borderWidth": "0",
        "borderColor": "#ccc"
      }
    }
  },
  "scatter": {
    "itemStyle": {
      "normal": {
        "borderWidth": "0",
        "borderColor": "#ccc"
      },
      "emphasis": {
        "borderWidth": "0",
        "borderColor": "#ccc"
      }
    }
  },
  "boxplot": {
    "itemStyle": {
      "normal": {
        "borderWidth": "0",
        "borderColor": "#ccc"
      },
      "emphasis": {
        "borderWidth": "0",
        "borderColor": "#ccc"
      }
    }
  },
  "parallel": {
    "itemStyle": {
      "normal": {
        "borderWidth": "0",
        "borderColor": "#ccc"
      },
      "emphasis": {
        "borderWidth": "0",
        "borderColor": "#ccc"
      }
    }
  },
  "sankey": {
    "itemStyle": {
      "normal": {
        "borderWidth": "0",
        "borderColor": "#ccc"
      },
      "emphasis": {
        "borderWidth": "0",
        "borderColor": "#ccc"
      }
    }
  },
  "funnel": {
    "itemStyle": {
      "normal": {
        "borderWidth": "0",
        "borderColor": "#ccc"
      },
      "emphasis": {
        "borderWidth": "0",
        "borderColor": "#ccc"
      }
    }
  },
  "gauge": {
    "itemStyle": {
      "normal": {
        "borderWidth": "0",
        "borderColor": "#ccc"
      },
      "emphasis": {
        "borderWidth": "0",
        "borderColor": "#ccc"
      }
    }
  },
  "candlestick": {
    "itemStyle": {
      "normal": {
        "color": "#c23531",
        "color0": "#314656",
        "borderColor": "#c23531",
        "borderColor0": "#314656",
        "borderWidth": 1
      }
    }
  },
  "graph": {
    "itemStyle": {
      "normal": {
        "borderWidth": "0",
        "borderColor": "#ccc"
      }
    },
    "lineStyle": {
      "normal": {
        "width": 1,
        "color": "#aaa"
      }
    },
    "symbolSize": 4,
    "symbol": "emptyCircle",
    "smooth": false,
    "color": ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
    "label": {
      "normal": {
        "textStyle": {
          "color": "#666666"
        }
      }
    }
  },
  "map": {
    "itemStyle": {
      "normal": {
        "areaColor": "#eee",
        "borderColor": "#444",
        "borderWidth": 0.5
      },
      "emphasis": {
        "areaColor": "rgba(255,215,0,0.8)",
        "borderColor": "#444",
        "borderWidth": 1
      }
    },
    "label": {
      "normal": {
        "textStyle": {
          "color": "#000"
        }
      },
      "emphasis": {
        "textStyle": {
          "color": "rgb(100,0,0)"
        }
      }
    }
  },
  "geo": {
    "itemStyle": {
      "normal": {
        "areaColor": "#eee",
        "borderColor": "#444",
        "borderWidth": 0.5
      },
      "emphasis": {
        "areaColor": "rgba(255,215,0,0.8)",
        "borderColor": "#444",
        "borderWidth": 1
      }
    },
    "label": {
      "normal": {
        "textStyle": {
          "color": "#000"
        }
      },
      "emphasis": {
        "textStyle": {
          "color": "rgb(100,0,0)"
        }
      }
    }
  },
  "categoryAxis": {
    "axisLine": {
      "show": true,
      "lineStyle": {
        "color": "#cccccc"
      }
    },
    "axisTick": {
      "show": false,
      "lineStyle": {
        "color": "#cccccc"
      }
    },
    "axisLabel": {
      "show": true,
      "textStyle": {
        "color": "#999",
        "fontSize": 12
      }
    },
    "splitLine": {
      "show": false,
      "lineStyle": {
        "type": "dashed",
        "color": ["#ddd"]
      }
    },
    "splitArea": {
      "show": false,
      "areaStyle": {
        "color": ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
      }
    }
  },
  "valueAxis": {
    "axisLine": {
      "show": false,
      "lineStyle": {
        "color": "#c3c3c3"
      }
    },
    "axisTick": {
      "show": false,
      "lineStyle": {
        "color": "#cccccc"
      }
    },
    "axisLabel": {
      "show": true,
      "textStyle": {
        "color": "#999"
      }
    },
    "splitLine": {
      "show": true,
      "lineStyle": {
        "type": "dashed",
        "color": ["#ddd"]
      }
    },
    "splitArea": {
      "show": false,
      "areaStyle": {
        "color": ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
      }
    }
  },
  "logAxis": {
    "axisLine": {
      "show": true,
      "lineStyle": {
        "color": "#333"
      }
    },
    "axisTick": {
      "show": true,
      "lineStyle": {
        "color": "#333"
      }
    },
    "axisLabel": {
      "show": true,
      "textStyle": {
        "color": "#333"
      }
    },
    "splitLine": {
      "show": true,
      "lineStyle": {
        "color": ["#ccc"]
      }
    },
    "splitArea": {
      "show": false,
      "areaStyle": {
        "color": ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
      }
    }
  },
  "timeAxis": {
    "axisLine": {
      "show": true,
      "lineStyle": {
        "color": "#333"
      }
    },
    "axisTick": {
      "show": true,
      "lineStyle": {
        "color": "#333"
      }
    },
    "axisLabel": {
      "show": true,
      "textStyle": {
        "color": "#333"
      }
    },
    "splitLine": {
      "show": true,
      "lineStyle": {
        "color": ["#ccc"]
      }
    },
    "splitArea": {
      "show": false,
      "areaStyle": {
        "color": ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
      }
    }
  },
  "toolbox": {
    "iconStyle": {
      "normal": {
        "borderColor": "#666666"
      },
      "emphasis": {
        "borderColor": "#666"
      }
    }
  },
  "legend": {
    "textStyle": {
      "color": "#333333"
    }
  },
  "tooltip": {
    "axisPointer": {
      "lineStyle": {
        "color": "#666666",
        "width": 1
      },
      "crossStyle": {
        "color": "#666666",
        "width": 1
      }
    }
  },
  "timeline": {
    "lineStyle": {
      "color": "#293c55",
      "width": 1
    },
    "itemStyle": {
      "normal": {
        "color": "#ff0000",
        "borderWidth": 1
      },
      "emphasis": {
        "color": "#a9334c"
      }
    },
    "controlStyle": {
      "normal": {
        "color": "#293c55",
        "borderColor": "#293c55",
        "borderWidth": 0.5
      },
      "emphasis": {
        "color": "#293c55",
        "borderColor": "#293c55",
        "borderWidth": 0.5
      }
    },
    "checkpointStyle": {
      "color": "#e43c59",
      "borderColor": "rgba(194,53,49, 0.5)"
    },
    "label": {
      "normal": {
        "textStyle": {
          "color": "#293c55"
        }
      },
      "emphasis": {
        "textStyle": {
          "color": "#293c55"
        }
      }
    }
  },
  "visualMap": {
    "color": ["#bf444c", "#d88273", "#f6efa6"]
  },
  "dataZoom": {
    "backgroundColor": "rgba(47,69,84,0)",
    "dataBackgroundColor": "rgba(47,69,84,0.3)",
    "fillerColor": "rgba(167,183,204,0.4)",
    "handleColor": "#a7b7cc",
    "handleSize": "100%",
    "textStyle": {
      "color": "#333"
    }
  },
  "markPoint": {
    "label": {
      "normal": {
        "textStyle": {
          "color": "#666666"
        }
      },
      "emphasis": {
        "textStyle": {
          "color": "#666666"
        }
      }
    }
  }
};
exports["default"] = _default;