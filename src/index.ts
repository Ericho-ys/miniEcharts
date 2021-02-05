

import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts'

import {
    BarChart,
    LineChart,
} from 'echarts/charts';
import {
    TitleComponent,
    GridComponent,
} from 'echarts/components';
import {
    CanvasRenderer
} from 'echarts/renderers';
import { ECharts } from 'echarts/core';

echarts.use(
    [TitleComponent, GridComponent, BarChart, LineChart, CanvasRenderer]
);
// 初始化参数接口
interface MiniOption {
    dom: HTMLElement,
    type?: string,
    vertical?: Boolean,
    data?: Array<Array<string | number | Date>>
    theme?: string
    extralOption?: EChartsOption
}
export default class MiniEcharts {
    protected echartOption!: EChartsOption;
    miniEcharts: ECharts | undefined
    constructor(option: MiniOption){
        
        this.initEchart(option.dom, option?.theme)
        //配置参数
        this.initOption(option)
    }
    //初始化echarts实例
    private initEchart(dom: HTMLElement, theme: string = ''): void{
        this.miniEcharts = echarts.init(dom, theme) 
    }
    //配置参数
    private initOption(option: MiniOption): void{
         Object.assign(this.echartOption, option.extralOption)
    }
    private initXAxis(option: MiniOption): void{
        this.echartOption.xAxis = {
            type: option.vertical ? 'category' : 'value',
        }
        this.echartOption.xAxis.axisTick = {
            show: false
        }
        if(this.echartOption.xAxis.type === 'category'){
            //this.echartOption.xAxis.data = 
        }
    }
    private initYAxis(option: MiniOption): void{}
    private initGrid(option: MiniOption): void{}
    private initSeries(option: MiniOption): void{}
    private initLegend(option: MiniOption): void{}
    private setOption(): void{
        this.miniEcharts?.setOption(this.echartOption)
    }
}