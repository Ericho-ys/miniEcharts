import { GridComponentOption,TitleComponentOption} from 'echarts/index'
export let defaultTitleOption:TitleComponentOption = {
    show: true,
    textStyle: {
        fontWeight: 'bold'
    },
    top: '10%',
    left: '2%'
}
export let defaultGridOption:GridComponentOption = {
    top: '35%',
    right: '5%',
    bottom: '5%',
    left: '5%',
    containLabel: true
}