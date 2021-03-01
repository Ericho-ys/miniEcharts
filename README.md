# MiniEchar 说明文档

## 使用方法

### 安装

```
npm install miniechart
```

### 使用

```
import {MiniBarChart, MiniLineChart, MiniScatterChart, MiniEcharts, MiniRadarChart ...} from 'miniechart'
```

## 类介绍

### MiniEcharts

具备完整的 echarts 能力，实例化过程传递两个参数。暴露 setOption 方法用来画图，需要传递完成的 EchartOption。

- dom 图表挂载的元素
- theme 主题,目前采用 echarts 默认两个主题

```
const node= document.querySelector('#app')
const instance = new MiniEcharts(node)
instance.setOption({...})
```

### MiniLineChart

折线图，目前仅四类

- 基础折线图
- 平滑面积图
- 平滑折线图
- 堆叠面积图

实例化传递参数对象包含属性有：

- dom 挂载的 dom 元素，必传
- type 折线图类型，字符串类型，非必传，默认是基础折线图，'smooth'代表平滑，'cover'代表面积，'smoothAcover'代表平滑面积
- name 图表标题 非必传
- data 数据，接口描述如下， axios 表示坐标轴数据，value 表示图表数据，name 表示数据集合的描述， value 表示数据集合。

调用实例 render 方法进行绘图

```
interface ChartData {
    axios?: Array<string>
    value: Array<{name:string, data: Array<number>}>
}
```

例子：

```
const node= document.querySelector('#app')
node.innerHTML = 'hello world'
const miniLineChart = new MiniLineChart({
    dom: node,
    name: '测试',
    //theme: 'dark',
    type: 'smoothAcover',
    data: {
        axios: ['周一', '周二', '周三', '周四', '周五', '周六'],
        value: [{name: 'ceshi', data:[1002, 500, 3000, 4000,2000, 1000]}, {name: 'cesjo', data:[2000, 3000, 4000, 5000, 2000, 1000]}]
    }
})
miniLineChart.render()
```

### MiniBarChart

柱形图，目前仅四类

- 基础柱形图
- 分组柱形图
- 分组条形图
- 柱状比例图

实例化传递参数对象包含属性有：

- dom 挂载的 dom 元素，必传
- name 图表标题
- type 字符串类型， 'vertical'代表分组条形图， 'verticalRate'代表柱状比例图，默认柱形图，分组柱形图，根据数据长度自动处理。
- data 数据格式同 折线图

例子：

```
const node1 = document.querySelector('#app2')
const miniBarChart = new MiniBarChart({
    dom: node1,
    name: '测试',
    //theme: 'dark',
    type: 'verticalRate',
    data: {
        title: '测试',
        axios: ['周一', '周二', '周三','周四', '周五', '周六'],
        value: [{name: 'ceshi', data:[10, 30, 40, 50,10, 20]},],
        //value: [{name: 'ceshi', data:[12, 3, 4, 5, 6, 7]}]
    }
})
miniBarChart.render()
```

### MiniRadarChart

雷达图

实例化传递参数对象包含属性有：

- dom 挂载的 dom 元素，必传
- name 图表标题
- indicator 个维度描述数组，数组对象格式，对象至少包含 'name'，'max'，name 是维度名称，max 是维度最大值
- data 数据，格式如下

```
type value = Array<{name:string, data: Array<number>}>
```

例子说明：

```
const miniRadarChart = new MiniRadarChart({
  dom: node4,
  name: '分组条形图',
  //theme: 'light',
  indicator: [{ name: 'A', max: 50000},
  { name: 'B', max: 50000},
  { name: 'C', max: 50000},
  { name: 'D', max: 50000},
  { name: 'E', max: 50000},
  { name: 'F', max: 50000},
  {name: 'G', max: 50000},
  {name: 'H', max: 50000},
  {name: 'I', max: 50000}
],
  data: {
    value: [
      { name: '例1', data: [20030, 50000, 29980, 37750, 49900, 17799, 37600, 36600, 50000] },
    ],
  }
})
miniRadarChart.render()
```

### MiniScatterChart

散点图

实例化传递参数对象包含属性有：

- dom 挂载的 dom 元素，必传
- name 图表标题
- axiosName 横纵维度名称
- scatterData 数据，格式如下

```
type value = Array<Array<Array<number | string>>>

```

数据格式描述：

```
var data = [
    [[28604,0,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
    [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
];
```

data 中的一项代表一组散点图，该项中的每个值代表一个点，该值得数组的前两个值代表对应横纵坐标的值，第三个值代表点的大小，也就是第三个维度对应的值，第四个是每个点的描述，最后一个是一组散点图的描述。

例子：

```
const node3 = document.querySelector('#app4')
const miniScatterChart = new MiniScatterChart({
    dom: node3,
    name: '测试',
    //theme: 'dark',
    axiosName: ['a', 'b'],
    scatterData: [
        [[28604,0,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
        [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
    ]
})
miniScatterChart.render()
```

### MiniPieChart

饼图

实例化传递参数对象包含属性有：

- dom 挂载的 dom 元素，必传
- name 图表标题
- axiosName 横纵维度名称
- pieData 数据，格式如下

```
type PieData = { name: string, value: number, rate?: string }
```

例子：

```
const miniPieChart = new MiniPieChart({
    dom: appPie1,
    name: '测试',
    theme,
    pieData: [{
      name: "测试1",
      value: 20,
    },
    {
      name: "测试2",
      value: 30,
    }, {
      name: "测试3",
      value: 40
    }, {
      name: "测试4",
      value: 50
    }, {
      name: "测试5",
      value: 60
    }]
})
miniPieChart.render()
```

### MiniPieRateChart

环形进度图

实例化传递参数对象包含属性有：

- dom 挂载的 dom 元素，必传
- name 图表标题
- type pies 表示环形进度图
- data 数据，格式如下

```
data: {
      value: [{
        name: 'ceshi', data: [{
          name: "测试1",
          value: 20,
          number: 300
        },
        {
          name: "测试2",
          value: 30,
          number: 303,
        }, {
          name: "测试3",
          value: 40,
          number: 504,
        }, {
          name: "测试4",
          value: 50,
          number: 651
        }, {
          name: "测试5",
          value: 60,
          number: 383
        }]
      },],
      //value: [{name: 'ceshi', data:[12, 3, 4, 5, 6, 7]}]
    }
```

例子：

```
const miniPieRateChart = new MiniPieRateChart({
    dom: appPie2,
    name: '测试',
    theme,
    type: 'pies',
    data: {
      value: [{
        name: 'ceshi', data: [{
          name: "测试1",
          value: 20,
          number: 300
        },
        {
          name: "测试2",
          value: 30,
          number: 303,
        }, {
          name: "测试3",
          value: 40,
          number: 504,
        }, {
          name: "测试4",
          value: 50,
          number: 651
        }, {
          name: "测试5",
          value: 60,
          number: 383
        }]
      },],
      //value: [{name: 'ceshi', data:[12, 3, 4, 5, 6, 7]}]
    }
  })
  miniPieRateChart.render()
```
