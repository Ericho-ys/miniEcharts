import { EChartsOption } from 'echarts/index'
import { defaultTitleOption, defaultGridOption } from '../option/index'
import LineOption from '../option/lineOption'
import { getSeriesOption } from '../option/lineOption'
import Color from '../option/color'
import MiniEcharts from './index'

export default class MiniLineChart extends MiniEcharts {
    echartOption: EChartsOption = {}
    constructor(options: Mini.MiniOption) {
        super(options.dom, options.theme)
        this.initXAxis(options)
        this.initYAxis(options)
        this.initGrid()
        this.initTitle(options)
        this.initSeries(options)
        this.initLegend(options)
        this.initColor(options)

    }
    private initXAxis(option: Mini.MiniOption): void {
        LineOption.defaultXaxiosOption.data = option.data?.axios
        this.echartOption.xAxis = LineOption.defaultXaxiosOption

    }
    private initYAxis(option?: Mini.MiniOption): void {
        this.echartOption.yAxis = LineOption.defaultYAxiosOption
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
        const seriesLength = option.data?.value.length
        const seriesOption = getSeriesOption(option.type)
        this.echartOption.series = []
        if (seriesLength) {
            if (option.type && option.type.indexOf('cover') !== -1) {
                for (let i = 0; i < seriesLength; i++) {
                    const temp = {
                        data: option.data?.value[i].data,
                        name: option.data?.value[i].name,
                        areaStyle: {
                            normal: {
                                color: seriesLength > 1 ? Color.LineAreaCoLor[i] : Color.LineAreaColorSingle[i]
                            }
                        }
                    }
                    // 多种cover
                    if (seriesLength > 1) {
                        temp['itemStyle'] = {
                            color: Color.LineColor[i]
                        }
                    }
                    this.echartOption.series.push(Object.assign(temp, seriesOption))
                }
            } else {
                for (let i = 0; i < seriesLength; i++) {
                    const temp = {
                        data: option.data?.value[i].data,
                        name: option.data?.value[i].name,
                    }
                    this.echartOption.series.push(Object.assign(temp, seriesOption))
                }
            }

        }
    }
    private initLegend(option: Mini.MiniOption): void {
        const seriesLength = option.data?.value.length
        if (seriesLength && seriesLength > 1) {
            this.echartOption.legend = LineOption.defaultLegendOption
        }
    }
    private initColor(option: Mini.MiniOption): void {
        this.echartOption.color = Color.LineGraphicColor
    }
    public render() {
        this.setOption(this.echartOption)

    }
}