import { EChartsOption, RadarSeriesOption } from 'echarts/index'
import color from '../option/color'
import { defaultTitleOption, defaultGridOption } from '../option/index'
import RadarOption from '../option/radarOption'
import MiniEcharts from './index'

export default class MiniRadarChart extends MiniEcharts {
  echartOption: EChartsOption = {}
  constructor(options: Mini.MiniOption) {
    super(options.dom, options?.theme)
    this.initGrid(options)
    this.initTitle(options)
    this.initLegend(options)
    this.initRadar(options)
    this.initSeries(options)
    // this.initColor()
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
    const seriesOption = RadarOption.defaultSeriesOption
    this.echartOption.series = []
    const temp = {
      data: [],
    }
    if (seriesLength) {
      for (let i = 0; i < seriesLength; i++) {
        const arr = {
          value: option.data?.value[i].data,
          name: option.data?.value[i].name,
          itemStyle: {
            color: color.RadarColor[i]
          }
        }
        temp.data.push(Object.assign(arr))
      }
      this.echartOption.series.push(Object.assign(temp, seriesOption))
    }
  }

  private initLegend(option: Mini.MiniOption): void {
    const seriesLength = option.data?.value.length
    if (seriesLength && seriesLength > 1) {
      this.echartOption.legend = RadarOption.defaultLegendOption
    }
  }

  private initRadar(option: Mini.MiniOption): void {//indicator 
    const _option = Object.assign({indicator: option.indicator}, RadarOption.defaultRadarOption) as any
    _option['indicator'][0]['axisLabel'] = {
      show: true,
      showMaxLabel: false, //不显示最大值，即外圈不显示数字30
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
    this.echartOption.radar =  _option
  }

  public render() {
    // console.log(JSON.stringify(this.echartOption))
    // console.log(this.echartOption)
    this.setOption(this.echartOption)
  }
}
