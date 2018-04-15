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

  readonly navButtons: NavButtons = new NavButtons();

  constructor(private router: Router, private http: HttpClient, private bindService: BindService, private progressService: ProgressService) {
    //*
    this.navButtons.primary.initAction(
      () => {
        this.router.navigate(['/bind']);
      },
      'find-person'
    );
    this.navButtons.primary.initButton('info', 'light');
    //*/
    //*
    this.navButtons.secondary.initAction(
      () => {
          this.progressService.init(0, 75, 100);
       },
      'consultant'
    );
    this.navButtons.secondary.initButton('secondary', 'light');
    //*/
    //*
    this.navButtons.advanced.initAction(
      null,
      '',
      '...'
    );
    this.navButtons.advanced.initButton('light', 'light');
    //*/
    this.navButtons.build(false, 'lg');
  }

  ngOnInit() {
    this.progressService.init(0, 25, 100);
  }

}
