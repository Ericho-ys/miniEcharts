import {graphic} from 'echarts/core'
import { graphic_d } from 'echarts/types/dist/shared'
const {LinearGradient} = graphic
let LineColor:Array<graphic_d.LinearGradient> = [
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

let LineAreaCoLor:Array<graphic_d.LinearGradient> = [
    new graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: 'rgba(0,179,244,0.5)'
    },
    {
        offset: 1,
        color: 'rgba(0,179,244,0)'
    }
], false),
    new graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: 'rgba(0,179,244,0.4)'
        },
        {
            offset: 1,
            color: 'rgba(0,179,244,0)'
        }
    ], false),
]
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
export default{
    LineColor,
    LineAreaCoLor,
    LineAreaColorSingle,
    BarBaseColor,
    BarVerticalBaseColor,
    BarRateColor
}
