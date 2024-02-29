import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
      chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'AVERAGE STUDENT ADMISSION 2022-23',
        align: 'center'
    },
    subtitle: {
        text: 'Source: ' +
            'LUMINER TECHNOLAB',
        align: 'center'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    tooltip: {
        pointFormat: '{totalcount.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'total count',
        data: [
            ['PYTHON', 22],
            ['AI', 13],
            ['MEARN',25],
            ['ML', 10],
            ['JAVASCRIPT', 15],
            ['FLUTER', 15]
        ]
    }]
    }
  }

}
