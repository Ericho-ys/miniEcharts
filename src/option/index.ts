import { GridComponentOption,TitleComponentOption} from 'echarts/index'
export let defaultTitleOption:TitleComponentOption = {
    show: true,
    textStyle: {
        fontWeight: 'bold'
    },
    top: '10%',
    left: '3%'
}
export let defaultGridOption:GridComponentOption = {
    top: '30%',
    right: '10%',
    bottom: '10%',
    left: '12%',
}
export let defaultBorderGrid:GridComponentOption = Object.assign({
    show: true,
    borderWidth: 1,
    borderColor: '#676D9E'
}, defaultGridOption)