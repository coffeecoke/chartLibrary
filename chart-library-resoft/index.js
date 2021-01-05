import _ from 'lodash'
import chartCommonOption from './modules/chartCommonOption'
import pies from './modules/pies'
import scatter from './modules/scatter'
import lines from './modules/line'
import bars from './modules/bars'
import radar from './modules/radar'
import shield from './modules/shield'
import setChartTheme from './modules/theme'

function ChartFactory(opts) {
    this.tasks = []
    this.init(opts)
}
ChartFactory._defaultOpts = {
        id: '' || [],
        asy: false,
        data: [],
        url: '',
        themeType: '',
    }
    // 各种类型图表胚子
var chartOptionTemplates = {}
_.assign(
    chartOptionTemplates,
    pies,
    scatter,
    lines,
    bars,
    radar,
    shield
)
ChartFactory.prototype = {
    _next: function() {
        var fn = this.tasks.shift()
        fn && fn()
    },
    init: function(opts) {
        var _self = this;
        this.id = opts.id
        _self.setChartOptionTemplates();
        _self.opts = _.assign({}, ChartFactory._defaultOpts, opts);
        setChartTheme.call(_self, _self.opts.themeType, _self.opts);
        var fn = (function(opts) {
            return function() {
                if (!opts.type || opts.type === 'echarts') {
                    _self._setChartOption()
                    _self._extendxyAxis()
                } else {}
                _self._next()
            }
        })(opts)
        this.tasks.unshift(fn)
        setTimeout(function() {
            _self._next();
        }, 0)

    },

    // 克隆CommOption，以便给多个实例使用
    _setChartOption: function() {
        this.chartCommonOption = _.cloneDeep(chartCommonOption) //clone
    },
    // 继承线图，柱图类型的x,y坐标
    _extendxyAxis: function() {
        if (this.opts.yAxis || this.opts.xAxis) {
            _.assign(this.chartCommonOption.yAxis, this.opts.yAxis || [])
            _.assign(this.chartCommonOption.xAxis, this.opts.xAxis || [])
        }
    },
    //初始化数据
    initData: function(obj) {
        var data = obj.data || []
        return data
    },
    chartDataFormate: function(data) {},
    // ChartFactory原型扩展api
    setChartOptionTemplates: function() {
        _.assign(ChartFactory.prototype, chartOptionTemplates)
    },
    renderChart: function(chartOptions) {
        // 当tasks里面的任务执行完了，在进行渲染
        if (this.tasks && this.tasks.length === 0) {
            this.chart.clear();
            this.chart.setOption(chartOptions)
            this.resize();
        }
    },
    resize: function() {
        var _self = this;
    }
}
export default ChartFactory