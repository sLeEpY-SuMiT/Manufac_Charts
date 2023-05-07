import React from 'react';
import ReactECharts from 'echarts-for-react';
import { DataSet } from '../WineDataSet';

const LineChart = () => {
  // Flavanoid data initialization
  let FlavanoidData = []

  // Ash data initialization
  let AshData = []

  // fetching both ash and flavanoid data from Winedata set
  DataSet.forEach((Flav) => {
    FlavanoidData.push(Flav.Flavanoids)
    AshData.push(Flav.Ash)
  })

  // options to pass in option prop of ReactEcharts
  // Labelled Flavanoid data on x-axis
  // Labelled Ash data on y-axis
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: FlavanoidData,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: AshData,
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return (
    <>
      <h1>Line Chart</h1>
      <ReactECharts option={options} />
    </>
  )
}

export default LineChart