(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            '_',
            'echarts',
            'modules/util',
            'modules/chartDataFormate',
            'modules/chartCommonOption',
            'modules/pies',
            'modules/scatter',
            'modules/line',
            'modules/bars',
            'modules/radar',
            'modules/riskMap',
            'modules/shield',
            'modules/theme'
        ], factory);
    } else if (typeof exports === 'object') {
        // Node.js
        module.exports = factory;
    } else {
        // Browser globals
        root.JSLite = root.JSLite || factory(jQuery);
    }
})(this, function(
    _,
    echarts,
    util,
    chartDataFormate,
    chartCommonOption,
    pies,
    scatter,
    lines,
    bars,
    radar,
    riskMap,
    shield,
    setChartTheme
) {

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
        riskMap,
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
    return ChartFactory
})