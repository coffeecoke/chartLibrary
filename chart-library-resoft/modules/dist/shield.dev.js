"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _progressCanvas = require("./progressCanvas");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      var shieldProgress = new _progressCanvas.progressUtil["default"](opts);
      shieldProgress.render();
      shieldProgress.update(obj.value);
    };
  }(obj);

  this.tasks.push(fn);
  return this;
};

var _default = {
  shield: shield
};
exports["default"] = _default;