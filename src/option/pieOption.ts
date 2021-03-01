import { SeriesOption, LegendComponentOption } from 'echarts/index'

let defaultBaseSeriesOption: SeriesOption = {
    type: 'pie',
    radius: ["38%", "52%"],
    center: ["25%", "58%"],
    emphasis: {
        itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        label: {
            show: true,
            formatter: "{a|{d}%}\n{e|{b}}",
            //color: "#fff",
            rich: {
                a: {
                    fontSize: 23,
                    lineHeight: 40,
                },
                e: {
                    fontSize: 12,
                    //color: "rgba(255, 255, 255, 0.8)"
                }
            }
        }
    },
    labelLine: {
        show: false,
    },
    label: {
        show: false,
        position: 'center'
    }
} as SeriesOption
let defaultLegendOption: LegendComponentOption = {
    show: true,
    itemWidth: 8,
    itemHeight: 8,
    selectedMode: false,
    icon: "circle",
    right: '8%',
    top: "35%",
    orient: "vertical",
    itemGap: 25,
    textStyle: {
        overflow: 'breakAll',
        width: 150,
        rich: {
            a: {
                fontFamily: "PingFang-SC-Medium",
                fontSize: 12,
                lineHeight: 10,
                padding: [0, 10, 0, 0]
                //overflow: 'breakAll',
                //width: 50
            },
            b: {
                padding: [0, 10, 0, 0],
            },
            c: {
                fontFamily: "PingFang-SC-Medium",

                fontSize: 12,
                //width: 30
            }
        }
    }
} as LegendComponentOption
export default {
    defaultLegendOption,
    defaultBaseSeriesOption
}



