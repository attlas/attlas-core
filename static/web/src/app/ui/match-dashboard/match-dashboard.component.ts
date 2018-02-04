import { Component, OnInit, Input } from '@angular/core';

import { MatchResult } from './../../utils/match-result'

@Component({
  selector: 'app-match-dashboard',
  templateUrl: './match-dashboard.component.html',
  styleUrls: ['./match-dashboard.component.css']
})
export class MatchDashboardComponent implements OnInit {

  @Input() matchResult: MatchResult;
  constructor() {
    this.matchResult = new MatchResult();
    this.matchResult.value = -1;
    this.matchResult.lTags = ['c++'];
    this.matchResult.rTags = ['c++'];
    this.matchResult.iTags = ['c++'];
  }

  ngOnInit() {
  }

}
