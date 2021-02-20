import {MiniLineChart} from './index'
const node:any = document.querySelector('#app')
node.innerHTML = 'hello world'
const miniLineChart = new MiniLineChart({
    dom: node,
    name: '测试',
    data: {
        title: '测试',
        xAxios: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        value: [{name: 'ceshi', data:[12, 3, 4, 5, 6, 7]}]
    }
})