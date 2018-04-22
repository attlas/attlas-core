import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from './../../environments/environment';

import { ProgressService } from './../services/progress.service';
import { BindService } from './../services/bind.service';

import { NavButtons } from './../models/nav-buttons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  single = [
    {
      name:"Test",
      series: []
    }
  ];

  //view: any[] = [700, 400];

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

  readonly navButtons: NavButtons = new NavButtons();

  constructor(private router: Router, private http: HttpClient, private bindService: BindService, private progressService: ProgressService) {
    for(let i= 0; i<120; i++){
      this.single[0].series.push({name:i, value: 
        25 + 50*Math.sin(i/50)
        + 10*Math.sin(i/5)
        + this.randomInt(-10, 10)
         });
    }
    //Object.assign(this, {single/*, multi*/});
    //*
    this.navButtons.primary.initAction(
      () => {
        this.router.navigate(['/bind']);
      },
      'find-person'
    );
    this.navButtons.primary.initButton('info', undefined);
    //*/
    //*
    this.navButtons.secondary.initAction(
      () => {
          this.progressService.init(0, 75, 100);
       },
      'consultant'
    );
    this.navButtons.secondary.initButton('secondary', undefined);
    //*/
    /*/
    this.navButtons.advanced.initAction(
      null,
      '',
      '...'
    );
    this.navButtons.advanced.initButton('light', 'light');
    /*/
    this.navButtons.build('lg');
  }

  ngOnInit() {
    this.progressService.init(0, 25, 100);
  }
  
  onSelect(event) {
    console.log(event);
  }
  
  private randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
}
