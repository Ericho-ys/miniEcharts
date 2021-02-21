import {MiniLineChart} from './index'
const node:any = document.querySelector('#app')
node.innerHTML = 'hello world'
const miniLineChart = new MiniLineChart({
    dom: node,
    name: '测试',
    //type: 'smoothAcover',
    data: {
        title: '测试',
        xAxios: ['周一', '周二', '周三', '周四', '周五', '周六'],
        value: [{name: 'ceshi', data:[12, 3, 4, 5, 6, 7]}, {name: 'cesjo', data:[2, 3, 4, 5, 9, 7]}], 
        //value: [{name: 'ceshi', data:[12, 3, 4, 5, 6, 7]}]
    }
})
miniLineChart.render()
