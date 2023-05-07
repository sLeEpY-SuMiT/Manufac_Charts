import React from 'react';
import ReactECharts from 'echarts-for-react';
import { DataSet } from '../WineDataSet';

const BarChart = () => {
  // Alcohol data initialization
  let AlcoholData = []

  // Magnesium data initialization
  let MagnesiumData = []

  // fetching both Alcohol and Magnesium data from Winedata set
  DataSet.forEach((Alc) => {
    AlcoholData.push(Alc.Alcohol)
    MagnesiumData.push(Alc.Magnesium)
  })

  // options to pass in option prop of ReactEcharts
  // Labelled Alcohol data on x-axis
  // Labelled Magnesium data on y-axis
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: AlcoholData,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: MagnesiumData,
        type: 'bar',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };
  return (
    <>
      <h1 >Bar Chart</h1>
      <ReactECharts option={options} />
    </>
  )
}

export default BarChart