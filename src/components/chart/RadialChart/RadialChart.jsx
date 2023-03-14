import './radialChart.scss';
import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';


class App extends Component {
  constructor(props) {
    super(props);

    

    this.state = {
      series: [28, 28, 22, 22],
      options: {
        chart: {
          height: 5000,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 360,
            hollow: {
              margin: 5,
              size: '30%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              },
            },
          },
        },
        colors: ['#fe5858', '#f3ab4c', '#b3b3b3', '#44e59d'],
        labels: ['No of A', 'No of T', 'No of C', 'No of G'],
        legend: {
          show: true,
          floating: true,
          fontSize: '12px',
          position: 'left',
          offsetX: 350,
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0,
          },
          formatter: function (seriesName, opts) {
            return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
          },
          itemMargin: {
            vertical: 3,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: false,
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id='chart'>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type='radialBar'
          height={250}
        />
      </div>
    );
  }
}

export default App;
