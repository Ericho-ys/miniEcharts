import { EChartsOption, SeriesOption } from 'echarts/index'
import {defaultTitleOption, defaultGridOption} from '../option/index'
import PieOption from '../option/pie'
import Color from '../option/color'
import MiniEcharts from './index'

export default class MiniPieChart extends MiniEcharts {
echartOption: EChartsOption = {}
constructor(options: Mini.MiniOption){
    super(options.dom, options?.theme)
    this.initXAxis(options)
    this.initYAxis(options)
    this.initGrid()
    this.initTitle(options)
    this.initSeries(options)
    this.initLegend(options)
    this.initColor()
    
}
private initXAxis(option: Mini.MiniOption): void{
    
}
private initYAxis(option?: Mini.MiniOption): void{
}
private initGrid(option?: Mini.MiniOption): void{
}
private initTitle(option: Mini.MiniOption): void{
}
private initSeries(option: Mini.MiniOption): void{
}
private initLegend(option: Mini.MiniOption): void{
}
private initColor(): void{
}
public render(){
    // console.log(JSON.stringify(this.echartOption))
    // console.log(this.echartOption)
    this.setOption(this.echartOption)
}
}