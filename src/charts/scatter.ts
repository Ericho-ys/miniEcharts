import { EChartsOption } from 'echarts/index'
import { defaultTitleOption, defaultGridOption } from '../option/index'
import ScatterOption from '../option/scatterOption'
import Color from '../option/color'
import MiniEcharts from './index'

export default class MiniScatterChart extends MiniEcharts {
    echartOption: EChartsOption = {}
    constructor(options: Mini.MiniOption) {
        super(options.dom, options?.theme)
        this.initXAxis(options)
        this.initYAxis(options)
        this.initGrid()
        this.initTitle(options)
        this.initSeries(options)
        this.initLegend(options)
        this.initColor()

    }
    private initXAxis(option: Mini.MiniOption): void {
        this.echartOption.xAxis = Object.assign({ name: option.axiosName[0] }, ScatterOption.defaultXaxiosOption)
    }
    private initYAxis(option?: Mini.MiniOption): void {
        this.echartOption.yAxis = Object.assign({ name: option.axiosName[1] }, ScatterOption.defaultYAxiosOption)
    }
    private initGrid(option?: Mini.MiniOption): void {
        this.echartOption.grid = defaultGridOption
    }
    private initTitle(option: Mini.MiniOption): void {

        defaultTitleOption.text = option.name
        if (option.theme === 'dark') {
            defaultTitleOption.textStyle.color = '#85A6FF'
        }else{
            defaultTitleOption.textStyle.color = 'black'
        }
        this.echartOption.title = defaultTitleOption
    }
    private initSeries(option: Mini.MiniOption): void {
        const seriesLength = option.scatterData?.length
        this.echartOption.series = []
        if (seriesLength) {
            for (let i = 0; i < seriesLength; i++) {
                // 默认以数据最后一条为维度分类
                const dataLength = option.scatterData[i][0].length
                const temp = {
                    data: option.scatterData[i],
                    name: option.scatterData[i][0][dataLength - 1],
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(120, 36, 50, 0.5)',
                        shadowOffsetY: 5,
                        borderColor: Color.ScatterBorderColor[i]
                    }
                }
                this.echartOption.series.push(Object.assign(temp, ScatterOption.defaultBaseSeriesOption))
            }
        }
    }
    private initLegend(option: Mini.MiniOption): void {
        this.echartOption.legend = ScatterOption.defaultLegendOption
    }
    private initColor(): void {
        this.echartOption.color = Color.ScatterColor
    }
    public render() {
        this.setOption(this.echartOption)
    }
}