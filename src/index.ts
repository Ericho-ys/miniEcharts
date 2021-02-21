

import * as echarts from 'echarts';
import { EChartsOption, SeriesOption, ECharts } from 'echarts/index'

// import {
//     BarChart,
//     LineChart,
// } from 'echarts/charts';
// import {
//     TitleComponent,
//     GridComponent,
// } from 'echarts/components';
// import {
//     CanvasRenderer
// } from 'echarts/renderers';

import {defaultTitleOption, defaultGridOption} from './option/index'
import LineOption from './option/lineOption'

// echarts.use(
//     [TitleComponent, GridComponent, BarChart, LineChart, CanvasRenderer]
// );
interface ChartData {
    title: string,
    xAxios: Array<string | Date>
    value: Array<{name:string, data: Array<number>}>
}
// 初始化参数接口
interface MiniOption {
    dom: HTMLDivElement,
    type?: 'smooth' | 'cover' | 'smoothAcover' | undefined,
    name?: string,
    vertical?: Boolean,
    data?: ChartData
    theme?: string
    extralOption?: EChartsOption
}
class MiniEcharts {
    miniEcharts
    constructor(dom: HTMLDivElement, theme: string = ''){
        this.initEchart(dom, theme)
    }
    //初始化echarts实例
    private initEchart(dom: HTMLDivElement, theme: string = 'dark'): void{
        this.miniEcharts = echarts.init(dom) 
    }
    public setOption(option: EChartsOption): void{
        this.miniEcharts?.setOption(option)
    } 
    
}
function getSeriesOption(type: string | undefined): SeriesOption{
        switch (type){
            case 'smooth': return LineOption.defaultSmoothSeriesOption
            case 'cover': return LineOption.defaultCoverSeriesOption
            case 'smoothAcover': return LineOption.defaultCoverASmoothSeriesOption
            default: return LineOption.defaultSeriesOption
        }
}
export class MiniLineChart extends MiniEcharts {
    echartOption: EChartsOption = {}
    constructor(options: MiniOption){
        super(options.dom, options?.theme)
        this.initXAxis(options)
        this.initYAxis(options)
        this.initGrid()
        this.initTitle(options)
        this.initSeries(options)
        this.initLegend(options)
        
        
    }
    private initXAxis(option: MiniOption): void{
        LineOption.defaultXaxiosOption.data = option.data?.xAxios
        this.echartOption.xAxis = LineOption.defaultXaxiosOption

    }
    private initYAxis(option?: MiniOption): void{
        this.echartOption.yAxis = LineOption.defaultYAxiosOption
    }
    private initGrid(option?: MiniOption): void{
        this.echartOption.grid = defaultGridOption
    }
    private initTitle(option: MiniOption): void{
        defaultTitleOption.text = option.name
        this.echartOption.title = defaultTitleOption
    }
    private initSeries(option: MiniOption): void{
        const seriesLength = option.data?.value.length
        const seriesOption = getSeriesOption(option.type)
        this.echartOption.series = []
        if(seriesLength){
            for(let i = 0;i < seriesLength;i++){
                const temp = {
                    data: option.data?.value[i].data,
                    name: option.data?.value[i].name
                }
                console.log(temp)
                this.echartOption.series.push(Object.assign(temp, seriesOption))
            }
        }
    }
    private initLegend(option: MiniOption): void{
        const seriesLength = option.data?.value.length
        if(seriesLength && seriesLength > 1){
            this.echartOption.legend = LineOption.defaultLegendOption
        } 
    }
    public render(){
        console.log(JSON.stringify(this.echartOption))
        console.log(this.echartOption)
        this.setOption(this.echartOption)
    }
}