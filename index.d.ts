interface detailData{
    value: string
    itemStyle?:{
        color?: string
    }
}
interface ChartData {
    title: string,
    axios: Array<string | Date>
    value: Array<{name:string, data: Array<number | detailData>}>
}

// 初始化参数接口
interface MiniOption {
    dom: HTMLDivElement,
    type?: 'smooth' | 'cover' | 'smoothAcover' | 'vertical' | 'verticalRate' | undefined,
    name?: string,
    vertical?: Boolean,
    data?: ChartData
    theme?: string
    extralOption?: EChartsOption
}
declare namespace Mini {
    export {
        MiniOption
    }
}