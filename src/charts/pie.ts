import { EChartsOption, SeriesOption } from 'echarts/index'
import { defaultTitleOption, defaultGridOption } from '../option/index'
import PieOption from '../option/pieOption'
import Color from '../option/color'
import MiniEcharts from './index'

export default class MiniPieChart extends MiniEcharts {
    timer: any
    echartOption: EChartsOption = {}
    total: number = 0
    constructor(options: Mini.MiniOption) {
        super(options.dom, options?.theme)
        if (options.pieData.length) {
            this.total = options.pieData.reduce((prev, curr) => {
                return prev + curr.value;
            }, 0);
        }
        if (options.pieData.length && !options.pieData[0].hasOwnProperty('rate')) {
            this.calRate(options)
        }
        this.initGrid()
        this.initTitle(options)
        this.initSeries(options)
        this.initLegend(options)
        this.initColor()

    }
    private calRate(option: Mini.MiniOption): Array<Mini.PieData> {
        return option.pieData.map(item => {
            if (this.total) {
                item.rate = Math.floor(item.value / this.total).toFixed(2)
            } else {
                item.rate = '0%'
            }
            return item
        })
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
        this.echartOption.series = Object.assign({ data: option.pieData }, PieOption.defaultBaseSeriesOption)
    }
    private initLegend(option: Mini.MiniOption): void {
        // formatter: function (item) {
        //   let obj = _this.chartData.find(_item => {
        //     return _item.name == item;
        //   });
        //   let arr = ["{a|" + obj.name + "}", "{c|" + obj.rate + "%" + "}"];
        //   return arr.join("");
        // }
        let formatter = function (item) {
            let obj = option.pieData.find(_item => {
                return _item.name == item;
            });
            let arr = ["{a|" + obj.name + "}", "{b|" + obj.value + "}", "{c|" + obj.rate + "%" + "}"];
            return arr.join("");
        }
        this.echartOption.legend = Object.assign({ formatter }, PieOption.defaultLegendOption)
    }
    private initColor(): void {
        this.echartOption.color = Color.PieColor
    }
    public render() {
        this.setOption(this.echartOption)
        this.miniEcharts.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: 0
        });
        // if(Carousel){
        //     if(this?.timer){
        //         clearInterval(this.timer)
        //     }
        //     this.timer = setInterval(() => {

        //     }, 1000)
        // }
        this.miniEcharts.on('mouseover', (params) => {
            this.miniEcharts.dispatchAction({
              type: "downplay",
              seriesIndex: 0,
              dataIndex: 0
            });
            this.miniEcharts.dispatchAction({
              type: "highlight",
              seriesIndex: params.dataIndex,
              dataIndex: params.dataIndex
            });
          })
          this.miniEcharts.on('mouseout', (params) => {
            this.miniEcharts.dispatchAction({
              type: "highlight",
              seriesIndex: 0,
              dataIndex: 0
            });
          })
    }
    
}