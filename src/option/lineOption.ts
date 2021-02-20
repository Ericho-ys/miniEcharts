import {XAXisComponentOption, YAXisComponentOption, LegendComponentOption, SeriesOption} from 'echarts'

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
        align: 'left',
        padding: 4,
        margin: 5,
        width: 50,
        overflow: 'breakAll'
    },
    data: []
}

let defaultYAxiosOption: YAXisComponentOption = {
    type: 'value',
    axisLabel: {
        margin: 30,
        align: 'right'
    },
}

let defaultLegendOption: LegendComponentOption | any= {
    icon: 'react',
    itemWidth: 8,
    itemHeight: 8,
    top: '9%',
    left: '2%'
}

let defaultBaseSeriesOption: SeriesOption = {
    name: '',
    type: 'line',
    data: []
}
let defaultSeriesOption:SeriesOption = Object.assign(defaultBaseSeriesOption, {})
let defaultSmoothSeriesOption:SeriesOption = Object.assign(defaultBaseSeriesOption, {
    symbol: 'none',
    smooth: true,
})
let defaultCoverSeriesOption:SeriesOption = Object.assign(defaultBaseSeriesOption, {
    stack: '总量',
    areaStyle: {},
    emphasis: {
        focus: 'series'
    },
})
let defaultCoverASmoothSeriesOption: SeriesOption = Object.assign(defaultBaseSeriesOption, {
    symbol: 'none',
    smooth: true,
    stack: '总量',
    areaStyle: {},
    emphasis: {
        focus: 'series'
    },
})
export default {
    defaultXaxiosOption,
    defaultYAxiosOption,
    defaultLegendOption,
    defaultSeriesOption,
    defaultSmoothSeriesOption,
    defaultCoverSeriesOption,
    defaultCoverASmoothSeriesOption 
}



