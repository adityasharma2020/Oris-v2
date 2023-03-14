import './chart.scss';
import React, { Component, useContext, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { DataContext } from '../../context/DataContext';

function Chart() {
  const { currentFile } = useContext(DataContext);
  const [data, setData] = useState({
    series: [
      {
        name: 'Series 1',
        data: [],
      },
    ],
    options: {
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      chart: {
        id: 'chart2',
        type: 'area',
        // height: 130,
        toolbar: {
          autoSelected: 'pan',
          show: true,
        },
        // dropShadow: {
        //   enabled: true,
        //   color: '#000',
        //   top: 18,
        //   left: 7,
        //   blur: 10,
        //   opacity: 0.2,
        // },
        // animations: {
        //   enabled: true,
        //   easing: 'easeinout',
        //   speed: 200,
        //   dynamicAnimation: {
        //     enabled: true,
        //     speed: 350,
        //   },
        // },
      },

      tooltip: {
        fontSize: '40px',
        x: {
          show: true,
          // format: 'dd MMM',
          formatter: undefined,
        },
      },

      colors: ['#546E7A'],
      stroke: {
        width: 3,
      },
      // dataLabels: {
      //   enabled: true,
      // },
      fill: {
        opacity: 1,
      },
      markers: {
        size: 1,
      },
      // xaxis: {
      //   type: 'datetime',
      // },
    },
  

    // seriesLine: [
    //   {
    //     name: 'Series 2',
    //     data: [
    //       {
    //         x: '02-10-2017 GMT',
    //         y: 34,
    //       },
    //       {
    //         x: '02-11-2017 GMT',
    //         y: 43,
    //       },
    //       {
    //         x: '02-12-2017 GMT',
    //         y: 31,
    //       },
    //       {
    //         x: '02-13-2017 GMT',
    //         y: 43,
    //       },
    //       {
    //         x: '02-14-2017 GMT',
    //         y: 33,
    //       },
    //       {
    //         x: '02-15-2017 GMT',
    //         y: 52,
    //       },
    //     ],
    //   },
    // ],
    // optionsLine: {
    //   chart: {
    //     id: 'chart1',
    //     height: 130,
    //     type: 'area',
    //     brush: {
    //       target: 'chart2',
    //       enabled: true,
    //     },
    //     selection: {
    //       enabled: true,
    //       xaxis: {
    //         min: new Date('02-10-2017 GMT').getTime(),
    //         max: new Date('02-14-2017 GMT').getTime(),
    //       },
    //     },
    //     animations: {
    //       enabled: true,
    //       easing: 'easeinout',
    //       speed: 800,
    //     },
    //   },
    //   colors: ['#008FFB'],
    //   fill: {
    //     type: 'gradient',
    //     gradient: {
    //       opacityFrom: 0.91,
    //       opacityTo: 0.1,
    //     },
    //   },
    //   xaxis: {
    //     type: 'datetime',
    //     tooltip: {
    //       enabled: false,
    //     },
    //   },
    //   yaxis: {
    //     tickAmount: 2,
    //   },
    // },
  });

  useEffect(() => {
    const windowSize = 50000;
    const increment = 10000;
    let startIndex = 0;
    let endIndex = currentFile.length;

    let results = [];

    for (let i = startIndex; i < endIndex; i += increment) {
      let substring = currentFile.substring(i, i + windowSize);
      let numberOfC = substring.match(/C/g).length;
      let numberOfG = substring.match(/G/g).length;

      results.push({
        y: ((numberOfC - numberOfG) / (numberOfG + numberOfC)).toFixed(2),
        x: startIndex + 1,
      });
      startIndex = startIndex + 1;
    }
    setData((prev) => {
      return {
        ...prev,
        series: [
          {
            name: 'Series 1',
            data: results,
          },
        ],
      };
    });
    console.log(results);
  }, [currentFile]);
console.log("testing");
  return (
    <div className='chart' id='chart'>
      <div id='chart-line2'>
        <ReactApexChart
          options={data.options}
          series={data.series}
          type='line'
          height={600}
        />
      </div>
      {/* <div id='chart-line'>
    <ReactApexChart
      options={this.state.optionsLine}
      series={this.state.seriesLine}
      type='area'
      height={130}
    />
  </div> */}
    </div>
  );
}

export default Chart;
