import {graphic} from 'echarts/core'
import { graphic_d } from 'echarts/types/dist/shared'
const {LinearGradient} = graphic
let LineGraphicColor:Array<graphic_d.LinearGradient> = [
    new LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: '#88CEFF'
        },
        {
            offset: 1,
            color: '#1890FF'
        }
    ], false),
    new LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: '#BB9BF1'
        },
        {
            offset: 1,
            color: '#887BF2'
        }
    ], false),
]

let LineAreaCoLor:Array<string> = ['rgba(91,43,249,0.25)', 'rgba(97,221,170,0.25)', 'rgba(101, 120, 155, 0.25)', 'rgba(114,98,253,0.25)']
let LineColor:Array<string> = ['rgba(91,43,249,1)', 'rgba(97,221,170,1)', 'rgba(101, 120, 155, 1)', 'rgba(114,98,253,1)']
let LineAreaColorSingle:Array<graphic_d.LinearGradient> = [
    new graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(0,179,244,0.5)'
        },
        {
            offset: 1,
            color: 'rgba(0,179,244,0)'
        }
    ], false)
]
let BarBaseColor:Array<graphic_d.LinearGradient> = [
    new graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#6BC0FF'
    }, {
        offset: 1,
        color: '#3490FF'
    }], false),
    new graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#9E7DFF'
    }, {
        offset: 1,
        color: '#6149E5'
    }], false),
]
let BarVerticalBaseColor:Array<string> = [
    '#5B8FF9', '#61DDAA', '#65789B'
]
let BarRateColor:Array<graphic_d.LinearGradient> = [
    new graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#FF8AA8'
    }, {
        offset: 1,
        color: '#FF5277'
    }], false),
    new graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#9E7DFF'
    }, {
        offset: 1,
        color: '#6149E5'
    }], false),
    new graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#6BC0FF'
    }, {
        offset: 1,
        color: '#3490FF'
    }], false),
    new graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#5FC2B9'
    }, {
        offset: 1,
        color: '#36ABA5'
    }], false),
    new graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#FFEE99'
    }, {
        offset: 1,
        color: '#FFD860'
    }], false),
    new graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#FFC9A0'
    }, {
        offset: 1,
        color: '#FF8A59'
    }], false),
].reverse()

export function getBarColor(type:string): Array<graphic_d.LinearGradient | string>{
    switch (type){
        case 'vertical': return BarVerticalBaseColor
        case 'verticalRate': return BarRateColor
        default: return BarBaseColor
    }
}
let RadarColor: Array<string> = [
    'rgba(91, 143, 249, .5)', 'rgba(90, 219, 166, .5)'
]
let PieColor:Array<string> = [
    '#027BE6', '#65789B', '#AAFF7E', '#FFDF48', '#FF9D6E', '#8D69FE'
]
let ScatterBorderColor = ['#61DDAA','#5B8FF9' , '#F6BD16']
let ScatterColor = ['rgba(97,221,170,0.25)', 'rgba(91,143,249,0.25)', 'rgba(246,189,22,0.25)']
export default{
    LineColor,
    LineAreaCoLor,
    LineAreaColorSingle,
    BarBaseColor,
    BarVerticalBaseColor,
    BarRateColor,
    ScatterBorderColor,
    ScatterColor,
    LineGraphicColor,
    RadarColor,
    PieColor
}
