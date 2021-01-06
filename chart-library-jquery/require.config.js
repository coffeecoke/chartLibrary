require.config({
    baseUrl: "./",
    paths: {
        //RequireJS默认假定所有的依赖资源都是JS脚本，因此无需再module ID上再加上js后缀。
        'jquery': "./js/jquery-2.1.4.min",
        '_': './js/lodash/lodash-core-4.17.10',
        'chartFactory': './js/chartFactory',
        'echarts': './js/echarts-4.7.min',
        'progressCanvas': './js/progressCanvas',
    }
});