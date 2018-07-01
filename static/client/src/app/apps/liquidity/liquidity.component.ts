import { Component, OnInit } from '@angular/core';

import { BaseApp } from './../base-app';

@Component({
  selector: 'app-liquidity',
  templateUrl: './liquidity.component.html',
  styleUrls: ['./liquidity.component.css']
})
export class LiquidityComponent extends BaseApp implements OnInit {

  single = [
    {
      name: 'Test',
      series: []
    }
  ];

  // view: any[] = [700, 400];

  // options
  showXAxis = false;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Days';
  showYAxisLabel = false;
  yAxisLabel = 'Liquidity';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor() {
    super();
    for ( let i = 0; i < 120; i++ ) {
      this.single[0].series.push( { name: i, value:
        25 + 50 * Math.sin( i / 50 )
        + 10 * Math.sin( i / 5 )
        + this.randomInt( -10, 10 )
         } );
    }
    // Object.assign(this, {single/*, multi*/});
   }

  ngOnInit() {
  }

  onSelect(event) {
    console.log( event );
  }

  private randomInt(min, max) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
  }
}
