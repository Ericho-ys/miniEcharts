import {XAXisComponentOption, YAXisComponentOption, LegendComponentOption, SeriesOption} from 'echarts/index'

let defaultXaxiosOption: XAXisComponentOption | any= {
    type: 'category',
    // boundaryGap: false,
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

let defaultYAxiosOption: YAXisComponentOption = {
    type: 'value',
    axisLabel: {
        margin: 30,
        align: 'right'
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
    left: '2%',
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
    areaStyle: {},
    emphasis: {
        focus: 'series'
    },
}, defaultBaseSeriesOption)
let defaultCoverASmoothSeriesOption: SeriesOption = Object.assign({
    symbol: 'none',
    smooth: true,
    stack: '总量',
    areaStyle: {},
    emphasis: {
        focus: 'series'
    },
}, defaultBaseSeriesOption)
export default {
    defaultXaxiosOption,
    defaultYAxiosOption,
    defaultLegendOption,
    defaultSeriesOption,
    defaultSmoothSeriesOption,
    defaultCoverSeriesOption,
    defaultCoverASmoothSeriesOption 
}



