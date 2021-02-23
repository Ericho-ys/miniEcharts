import {MiniLineChart, MiniBarChart} from './index'
const node:any = document.querySelector('#app')

node.innerHTML = 'hello world'
const miniLineChart = new MiniLineChart({
    dom: node,
    name: '测试',
    theme: 'dark',
    type: 'smoothAcover',
    data: {
        title: '测试',
        axios: ['周一', '周二', '周三', '周四', '周五', '周六'],
        value: [{name: 'ceshi', data:[10002, 3000, 4000, 5000,1000, 200000]}, {name: 'cesjo', data:[2000, 3000, 4000, 5000, 2000, 1000]}]
        //value: [{name: 'ceshi', data:[12, 3, 4, 5, 6, 7]}]
    }
})
miniLineChart.render()

const node1:any = document.querySelector('#app2')

const miniBarChart = new MiniBarChart({
    dom: node1,
    name: '测试',
    theme: 'dark',
    type: 'verticalRate',
    data: {
        title: '测试',
        axios: ['周一', '周二', '周三','周四', '周五', '周六'],
        value: [{name: 'ceshi', data:[10, 30, 40, 50,10, 20]},], 
        //value: [{name: 'ceshi', data:[12, 3, 4, 5, 6, 7]}]
    }
})
miniBarChart.render()
