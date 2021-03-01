import { LegendComponentOption, SeriesOption } from 'echarts/index'

let defaultLegendOption: LegendComponentOption | any = {
  show: true,
  type: 'plain',
  icon: 'react',
  itemWidth: 8,
  itemHeight: 8,
  top: '20%',
  left: '3%',
}

let defaultBaseSeriesOption: SeriesOption = {
  type: 'radar',
}

let defaultSeriesOption: SeriesOption = Object.assign({
  areaStyle: {
    width: 1,
    opacity: 1,
  },
}, defaultBaseSeriesOption)

let defaultRadarOption: SeriesOption = Object.assign({
  splitNumber: 4,
  splitArea: {
    areaStyle: {
      color: ['rgba(255, 255, 255, 0)'],
    }
  },
  center:['50%', '60%'],
  radius: '60%',
  axisLine: {
    lineStyle: {
        width: 0.5,
        color: '#676D9E',
    }
},
splitLine: {
    show: true,
     lineStyle: {
        width: 0.5,
        color: '#676D9E',
    }
},
})

export default {
  defaultBaseSeriesOption,
  defaultSeriesOption,
  defaultLegendOption,
  defaultRadarOption,
}


