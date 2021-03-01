import {XAXisComponentOption, YAXisComponentOption, LegendComponentOption, SeriesOption} from 'echarts/index'

let defaultXaxiosOption: XAXisComponentOption = {
    nameLocation: 'middle',
    nameTextStyle: {
        padding: [10, 0, 0, 0],
    },
    axisTick: {
        show: false
    },
    axisLine: {
        show: false
    },
    axisLabel: {
        formatter: function(_value: number){
            let str = ''
            if(_value > 1000){
                str = parseFloat(Math.floor(_value / 1000).toFixed(1)) +'k'
            }else{
                str = _value + '' 
            }
            return str
        }
    }
}
let defaultYAxiosOption: YAXisComponentOption = {
    nameLocation: 'middle',
    nameTextStyle: {
        padding: [0, 0, 10, 0],
    },
    axisTick: {
        show: false
    },
    axisLine: {
        show: false
    },
    axisLabel: {
        formatter: function(_value: number){
            let str = ''
            if(_value > 1000){
                str = parseFloat(Math.floor(_value / 1000).toFixed(1)) +'k'
            }else{
                str = _value + '' 
            }
            return str
        }
    }
}

let defaultLegendOption: LegendComponentOption | any= {
    show: true,
    type: 'plain',
    icon: 'circle',
    itemWidth: 8,
    itemHeight: 8,
    top: '20%',
    left: '3%',
}

let defaultBaseSeriesOption: SeriesOption = {
    type: 'scatter',
    symbolSize: function (data) {
        return Math.sqrt(data[2]) / 5e2;
    },
    emphasis: {
        focus: 'series',
        label: {
            show: true,
            formatter: function (param) {
                return param.data[3];
            },
            position: 'top'
        }
    },
}
export default {
    defaultXaxiosOption,
    defaultYAxiosOption,
    defaultLegendOption,
    defaultBaseSeriesOption
}



