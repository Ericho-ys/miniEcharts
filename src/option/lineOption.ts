import {XAXisComponentOption, YAXisComponentOption, LegendComponentOption, SeriesOption} from 'echarts/index'

let defaultXaxiosOption: XAXisComponentOption | any= {
    type: 'category',
    boundaryGap: false,
    axisLine: {
        show: false
    },
    axisTick: {
        show: false
    },
    axisLabel: {
        align: 'middle',
        interval: 0,
        padding: 4,
        margin: 5,
        width: 50,
        height: 50,
        overflow: 'breakAll',
        lineOverflow: 'truncate'
    },
}

let defaultYAxiosOption: YAXisComponentOption | any= {
    type: 'value',
    axisLabel: {
        margin: 10,
        align: 'right',
        formatter: function(_value: number){
            let str = ''
            if(_value > 1000){
                str = parseFloat(Math.floor(_value / 1000).toFixed(1)) +'k'
            }else{
                str = _value + '' 
            }
            return str
        }
    },
    splitNumber: 4
}

let defaultLegendOption: LegendComponentOption | any= {
    show: true,
    type: 'plain',
    icon: 'react',
    itemWidth: 8,
    itemHeight: 8,
    top: '20%',
    left: '3%',
}

let defaultBaseSeriesOption: SeriesOption = {
    type: 'line',
}
let defaultSeriesOption:SeriesOption = Object.assign({
    symbol: 'none',
}, defaultBaseSeriesOption)
let defaultSmoothSeriesOption:SeriesOption = Object.assign( {
    symbol: 'none',
    smooth: true,
}, defaultBaseSeriesOption)
let defaultCoverSeriesOption:SeriesOption = Object.assign({
    stack: '总量',
    emphasis: {
        focus: 'series'
    },
}, defaultBaseSeriesOption)
let defaultCoverASmoothSeriesOption: SeriesOption = Object.assign({
    symbol: 'none',
    smooth: true,
    stack: '总量',
    emphasis: {
        focus: 'series'
    },
}, defaultBaseSeriesOption)

export function getSeriesOption(type: string | undefined): SeriesOption{
    switch (type){
        case 'smooth': return defaultSmoothSeriesOption
        case 'cover': return defaultCoverSeriesOption
        case 'smoothAcover': defaultCoverASmoothSeriesOption
        default: return defaultSeriesOption
    }
}
export default {
    defaultXaxiosOption,
    defaultYAxiosOption,
    defaultLegendOption,
}



