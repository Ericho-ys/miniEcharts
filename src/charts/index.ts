import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts/index'

import {
    BarChart,
    LineChart,
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
    [TitleComponent, GridComponent,LegendComponent, BarChart, LineChart, CanvasRenderer]
);
export default class MiniEcharts {
    miniEcharts: echarts.ECharts
    constructor(dom: HTMLDivElement, theme: string = ''){
        this.initEchart(dom, theme)
    }
    //初始化echarts实例
    private initEchart(dom: HTMLDivElement, theme: string = 'dark'): void{
        this.miniEcharts = echarts.init(dom, theme) 
    }
    public setOption(option: EChartsOption): void{
        this.miniEcharts?.setOption(option)
    } 
    
}