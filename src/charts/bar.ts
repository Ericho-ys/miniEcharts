import { EChartsOption } from 'echarts/index'
import { defaultTitleOption, defaultGridOption, defaultBorderGrid } from '../option/index'
import BarOption from '../option/barOption'
import { getBarWidth } from '../option/barOption'
import { getBarColor } from '../option/color'
import MiniEcharts from './index'
export default class MiniBarChart extends MiniEcharts {
    echartOption: EChartsOption = {}
    constructor(options: Mini.MiniOption) {
        super(options.dom, options?.theme)
        this.initXAxis(options)
        this.initYAxis(options)
        this.initGrid(options)
        this.initTitle(options)
        this.initSeries(options)
        this.initLegend(options)
        this.initColor(options)

    }
    private initXAxis(option: Mini.MiniOption): void {
        if (option.type) {
            this.echartOption.xAxis = BarOption.defaultVerticalXaios
            if (option.type === 'verticalRate') {
                this.echartOption.xAxis = BarOption.defaultVerticalRateXaios
            }
        } else {
            BarOption.defaultXaxiosOption.data = option.data?.axios
            this.echartOption.xAxis = BarOption.defaultXaxiosOption
        }
    }
    private initYAxis(option?: Mini.MiniOption): void {
        if (option.type) {
            // 横向柱状图 Y分类限3种
            if (option.type === 'vertical') {
                BarOption.defaultVerticalYaios.data = option.data?.axios.slice(0, 3)
            } else {
                BarOption.defaultVerticalYaios.data = option.data?.axios
            }
            this.echartOption.yAxis = BarOption.defaultVerticalYaios

        } else {
            this.echartOption.yAxis = BarOption.defaultYAxiosOption
        }
    }
    private initGrid(option?: Mini.MiniOption): void {
        if (option.type === 'verticalRate') {
            this.echartOption.grid = defaultBorderGrid
        } else {
            this.echartOption.grid = defaultGridOption
        }

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
        this.echartOption.series = []
        if (seriesLength) {
            const barColor = getBarColor(option.type)
            for (let i = 0; i < seriesLength; i++) {
                const temp = {
                    data: option.data?.value[i].data,
                    name: option.data?.value[i].name,
                    barWidth: getBarWidth(option.type, seriesLength),
                    itemStyle: {
                        color: barColor[i]
                    }
                }
                if (option.type === 'verticalRate') {
                    delete temp.itemStyle
                    delete temp.data
                    const arr = option.data?.value[i].data.map((item, index) => {
                        return {
                            value: item,
                            itemStyle: {
                                color: barColor[index]
                            }
                        }
                    }) as any
                    temp.data = arr
                    this.echartOption.series.push(Object.assign(temp, BarOption.defaultRateSeriesOption))
                }else{
                    this.echartOption.series.push(Object.assign(temp, BarOption.defaultSeriesOption))
                }
            }
        }
    }
    private initLegend(option: Mini.MiniOption): void {
        const seriesLength = option.data?.value.length
        if (seriesLength && seriesLength > 1) {
            this.echartOption.legend = BarOption.defaultLegendOption
        }
    }
    private initColor(option: Mini.MiniOption): void {
        const barColor = getBarColor(option.type)
        this.echartOption.color = barColor
    }
    public render() {
        this.setOption(this.echartOption)
    }
}