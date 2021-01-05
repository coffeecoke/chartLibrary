"use strict";

define(['jquery', 'progressCanvas'], function ($, progressCanvas) {
  'use strict'; // 折线图

  var shield = function shield(obj) {
    var _self = this;

    var fn = function (obj) {
      return function () {
        var opts = {
          name: obj.name,
          width: document.getElementById(_self.id).offsetWidth,
          height: 300,
          bgColors: '#111',
          lineCap: 'round',
          showShadow: false,
          type: 'shield',
          wrapDom: document.getElementById(_self.id),
          lineWidth: 8,
          textColor: _self.shieldTextColor,
          valueColor: _self.shieldValueColor,
          lineColors: _self.shieldLineColor,
          //  array or string
          color: _self.shieldColor
        };
        var shieldProgress = new ProgressUtil["default"](opts);
        shieldProgress.render();
        shieldProgress.update(obj.value);
      };
    }(obj);

    this.tasks.push(fn);
    return this;
  };

  return {
    shield: shield
  };
});