import { EChartsOption } from 'echarts/index'
import { defaultTitleOption, defaultPieGridOption } from '../option/index'
import Color from '../option/color'
import MiniEcharts from './index'

export default class MiniPieRateChart extends MiniEcharts {
    echartOption: EChartsOption = {}
    constructor(options: Mini.MiniOption) {
        super(options.dom, options?.theme)
        this.initXAxis(options)
        this.initYAxis(options)
        this.initGrid()
        this.initTitle(options)
        this.initSeries(options)
        //this.initLegend(options)
        this.initColor()

    }
    private initXAxis(option: Mini.MiniOption): void {
        let xAxis = {
            show: false
        }
        this.echartOption.xAxis = xAxis

    }
    private initYAxis(option?: Mini.MiniOption): void {
        let yAxis = {
            show: false
        }
        this.echartOption.yAxis = yAxis
    }
    private initGrid(option?: Mini.MiniOption): void {
        this.echartOption.grid = defaultPieGridOption
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
        let centers: any = [['20%', '40%'], ['65%', '40%'], ['20%', '80%'], ['65%', '80%']]
        let dataStyle: any = {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 0,
                shadowColor: '#203665'
            }
        }
        let itemStyles: any = [{
            normal: {
                color: '#E92C81',
                shadowColor: '#E92C81',
                shadowBlur: 0
            }
        },
        {
            normal: {
                color: '#FFD958',
                shadowColor: '#FFD958',
                shadowBlur: 0
            }
        },
        {
            normal: {
                color: '#44ABEE',
                shadowColor: '#44ABEE',
                shadowBlur: 0
            }
        },
        {
            normal: {
                color: '#48B6AE',
                shadowColor: '#48B6AE',
                shadowBlur: 0
            }
        }]
        if (seriesLength) {
            for (let i = 0; i < seriesLength; i++) {
                for (var index = 0; index < option.data?.value[i].data.length; index++) {
                    let data: any = option.data?.value[i].data
                    let temp: any = {
                        name: data[index].name,
                        type: 'pie',
                        clockWise: false,
                        radius: [52, 60],
                        itemStyle: dataStyle,
                        hoverAnimation: false,
                        center: centers[index],
                        data: [{
                            value: data[index].value,
                            label: {
                                normal: {
                                    rich: {
                                        a: {
                                            //color: '#fff',
                                            align: 'center',
                                            fontSize: 20,
                                            padding: [10, 0, 0, 0],
                                            lelf: '33px',
                                            fontWeight: "bold"
                                        },
                                        b: {
                                            //color: '#fff',
                                            align: 'center',
                                            padding: [0, -200, 0, 0],
                                            fontSize: 20
                                        },
                                        c: {
                                            //color: '#ccc',
                                            align: 'center',
                                            padding: [0, -200, -10, 0],
                                            fontSize: 12
                                        },
                                    },
                                    formatter: function (params) {
                                        let rate = ''
                                        for (let j = 0; j < data.length; j++) {
                                            if (data[j].name == params.seriesName) {
                                                rate = data[j].number
                                            }
                                        }
                                        return "{c|" + params.seriesName + "}\n" + "{a|" + params.value + "%}" + "\n{b|" + rate + "}";
                                    },
                                    position: 'center',
                                    show: true,
                                    textStyle: {
                                        fontSize: '14',
                                        fontWeight: 'normal',
                                        //color: '#fff'
                                    }
                                }
                            },
                            itemStyle: itemStyles[index]
                        }, {
                            value: 100 - data[index].value,
                            name: 'invisible',
                            itemStyle: {
                                normal: {
                                    color: option.theme === 'dark' ? '#272937' : '#efefef'
                                },
                                emphasis: {
                                    color: option.theme === 'dark' ? '#272937' : '#efefef'
                                }
                            }
                        }]
                    }
                    // const temp = {
                    //     data:option.data?.value[i].data
                    // }
                    // console.log(option.data?.value[i].data)
                    this.echartOption.series.push(temp)
                }
            }
        }


    }
    private initLegend(option: Mini.MiniOption): void {
        const seriesLength = option.data?.value.length
        if (seriesLength) {

            this.echartOption.legend = []


            //this.echartOption.legend = PieOption.defaultLegendOption
        }
    }
    private initColor(): void {
        this.echartOption.color = Color.PieColor
    }
    public render() {
        // console.log(this.echartOption)
        this.setOption(this.echartOption)
    }
}