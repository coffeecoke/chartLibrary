"use strict";

var boxTheme;
$(".container").on("click", ".box", function () {
  var chartTheme;
  var chartobj = $(this).data('chartobj');

  if (!chartFactoryWindow[chartobj]) {
    return;
  }

  var chartId = 'demoChart';
  var maskBox = '';
  maskBox += '<div class="mask">';
  maskBox += '<div class="left-mask">';
  maskBox += '<pre class="line-numbers">';
  maskBox += '<code class="language-javascript" id="jsCode">';
  maskBox += '</code>';
  maskBox += '</pre>';
  maskBox += '</div>';
  maskBox += '<div class="right-mask">';
  maskBox += '<div class="themeBox">'; // maskBox += '<ul class="theme-list">'
  // maskBox += '<li data-theme="customed">主题1</li>'
  // maskBox += '<li data-theme="theme4">主题2</li>'
  // maskBox += '</ul>'

  maskBox += '<div class="delect">';
  maskBox += '关闭';
  maskBox += '</div>';
  maskBox += '</div>';
  maskBox += '<div class="modul processFiled" id="' + chartId + '" style="width:100%;height:300px;"></div>';
  maskBox += '</div>';
  maskBox += '</div>';
  $(".container").after(maskBox);
  $(".mask").show();
  var codeString = chartFactoryWindow[chartobj].objContent.toString();
  codeString += '\n';
  codeString += 'renderChart("' + chartId + '","customed")';
  $('.mask #jsCode').text(codeString);
  Prism.highlightElement(document.getElementById('jsCode'), true);
  chartFactoryWindow[chartobj].objContent(chartId, 'customed');
  $('.theme-list li').on("click", function () {
    var modelChart = echarts.getInstanceByDom(document.getElementById(chartId));
    chartTheme = $(this).data('theme');

    if (chartTheme == 'customed') {
      $('.mask .right-mask').css({
        backgroundColor: '#0f2a5f'
      });
    } else if (chartTheme == 'theme4') {
      $('.mask .right-mask').css({
        backgroundColor: '#fff'
      });
    }

    if (modelChart) {
      echarts.dispose(modelChart);
      chartFactoryWindow[chartobj].objContent(chartId, chartTheme);
      var codeChartTheme = '"' + chartTheme + '"';
      $('.string').eq(0).text(codeChartTheme);
    }
  });
  var timer = setTimeout(function () {
    clearTimeout(timer);
    $(".theme-list li[data-theme=" + boxTheme + "]").click();
  }, 150);
  $('.delect').on("click", function () {
    var modelChart = echarts.getInstanceByDom(document.getElementById(chartId));

    if (modelChart) {
      echarts.dispose(modelChart);
    }

    ;
    $(this).parents(".mask").remove();
  });
});