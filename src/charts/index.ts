import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts/index'

import {
    BarChart,
    LineChart,
    ScatterChart,
    RadarChart,
    PieChart
} from 'echarts/charts';
import {
    TitleComponent,
    GridComponent,
    LegendComponent
} from 'echarts/components';
import {
    CanvasRenderer
} from 'echarts/renderers';


echarts.use(
    [TitleComponent, GridComponent,LegendComponent, BarChart, LineChart, CanvasRenderer, ScatterChart, RadarChart, PieChart]
);
export default class MiniEcharts {
    miniEcharts: echarts.ECharts
    constructor(dom: HTMLDivElement, theme: string = ''){
        console.log(theme)
        console.log(this.miniEcharts)
        this.miniEcharts = echarts.init(dom, theme) 
        this.miniEcharts?.dispose()
        this.initEchart(dom, theme)
    }
    //初始化echarts实例
    private initEchart(dom: HTMLDivElement, theme: string = ''): void{
        this.miniEcharts = echarts.init(dom, theme) 
    }
    public setOption(option: EChartsOption): void{
        
        this.miniEcharts?.setOption(option)
    } 
}