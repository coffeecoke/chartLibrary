## 切换镜像源
`npm set registry http://10.168.168.127:4873`

## 安装
` npm install resoft-chart-library --save`

## demo
```
  <template>
<div class="">
   <div id="chart" style="width:400px;height:300px;">

  </div>
  <div id="chart2" style="width:400px;height:300px;">

  </div>
</div>
 
</template>

<script>
  import chartFactory from 'D:/chart-library-resoft/index'
  export default {
    data() {
      return {
        data1: [{
          name: '2014-01',
          value: 240,
          group: 'A1'
        }, {
          name: '2014-02',
          value: 210,
          group: 'A1'
        }, {
          name: '2014-03',
          value: 142,
          group: 'A1'
        }, {
          name: '2014-04',
          value: 125,
          group: 'A1'
        }, {
          name: '2014-05',
          value: 112,
          group: 'A1'
        }, {
          name: '2014-06',
          value: 129,
          group: 'A1'
        }],
        data2: [{
          name: '2014-01',
          value: 20,
          group: 'A'
        }, {
          name: '2014-01',
          value: 40,
          group: 'B'
        }, {
          name: '2014-02',
          value: 100,
          group: 'A'
        }, {
          name: '2014-02',
          value: 10,
          group: 'B'
        }, {
          name: '2014-03',
          value: 12,
          group: 'A'
        }, {
          name: '2014-03',
          value: 16,
          group: 'B'
        }, {
          name: '2014-04',
          value: 15,
          group: 'A'
        }, {
          name: '2014-04',
          value: 14.5,
          group: 'B'
        }, {
          name: '2014-05',
          value: 12,
          group: 'A'
        }, {
          name: '2014-05',
          value: 18,
          group: 'B'
        }, {
          name: '2014-06',
          value: 19,
          group: 'A'
        }, {
          name: '2014-06',
          value: 16,
          group: 'B'
        }]

      }
    },
    created() {
      
    },
    mounted () {
      // 渲染图表
      this.renderChart("chart", "theme4")
    },
    methods:{
      renderChart (id, theme) {
        var chartObj = new chartFactory({
          id: id, // 图标容器ID
          themeType: theme || 'customed', // 主题，现在有两个  一个深色主题customed  一个theme4
          yAxis: [{ //如果坐标轴有两个，需要单独配置
            type: 'value',
            name: '亿元'
          }, {
            type: 'value',
            name: '（家）'
          }]
        });
        chartObj.bars({
          yAxisIndex: 1, //当前数据对应哪个坐标轴
          data: this.data1,

        }).line({
          data: this.data2,
          yAxisIndex: 0,
        })
      }
    }
  }
</script>
```
