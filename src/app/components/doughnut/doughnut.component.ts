import { Component } from '@angular/core';
import { ChartType } from 'chart.js';

// Imports
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent {

  // Doughnut
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public numbersRandom(): void {
    this.doughnutChartData = [
      [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)],
      [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)],
      [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)],
    ];
  }

}
