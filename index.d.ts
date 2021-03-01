interface detailData {
    value: string
    itemStyle?: {
        color?: string
    }
}
interface ChartData {
    axios?: Array<string | Date>
    value: Array<{ name: string, data: Array<number | detailData> }>
}
type PieData = { name: string, value: number, rate?: string }
// 初始化参数接口
interface MiniOption {
    dom: HTMLDivElement
    type?: 'smooth' | 'cover' | 'smoothAcover' | 'vertical' | 'verticalRate' | undefined
    name?: string
    vertical?: Boolean
    data?: ChartData
    theme?: string
    extralOption?: EChartsOption
    scatterData?: Array<Array<Array<number | string>>>
    axiosName?: Array<string>
    indicator?: [],
    pieData?: Array<PieData>
}
declare namespace Mini {
    export {
        MiniOption,
        PieData
    }
}