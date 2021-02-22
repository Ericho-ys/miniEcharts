import {XAXisComponentOption, YAXisComponentOption, LegendComponentOption, SeriesOption, number} from 'echarts/index'

let defaultXaxiosOption: XAXisComponentOption | any= {
    type: 'category',
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
let defaultVerticalXaios: XAXisComponentOption | any = {
    type: 'value',  
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
    },
    axisLine: {
        show: false
    },
    axisTick: {
        show: false
    },
    splitNumber: 5
}
let defaultVerticalYaios: YAXisComponentOption | any = {
    type: 'category',  
    axisLabel: {
        interval: 0,
        padding: 4,
        width: 30,
        overflow: 'breakAll',
    },
    axisLine: {
        show: false
    },
    axisTick: {
        show: false
    },
    splitNumber: 5
}
let defaultYAxiosOption: YAXisComponentOption = {
    type: 'value',
    axisLine: {
        show: false
    },
    axisTick: {
        show: false
    },
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
    type: 'bar',
    barGap: '30%',
    label: {
        show: false
    }
}
let defaultSeriesOption:SeriesOption = Object.assign({
    
}, defaultBaseSeriesOption)
export function getBarWidth(type:string, length:number):string | number{
    // if(length > 1){
    //     return '20%'
    // }else{
    //     return '25%'
    // }
    if(type && type.indexOf('vertical') !== -1){
        if(length > 1){
            return 12
        }else{
            return  16
        }
    }else{
        if(length > 1){
            return 12
        }else{
            return 16
        }
    }
}

export default {
    defaultXaxiosOption,
    defaultYAxiosOption,
    defaultLegendOption,
    defaultSeriesOption,
    defaultVerticalXaios,
    defaultVerticalYaios 
}