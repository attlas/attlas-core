import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from './../../environments/environment';

import { NavButtons } from './../models/nav-buttons';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  readonly navButtons: NavButtons = new NavButtons();

  constructor(private router: Router, private http: HttpClient) {
    //
    this.navButtons.primary.initAction(
      () => {
        this.router.navigate(['/bind']);
      },
      'find-person'
    );
    this.navButtons.primary.initButton('info', undefined);
    //
    //
    this.navButtons.secondary.initAction(
      () => {
       },
      'consultant'
    );
    this.navButtons.secondary.initButton('secondary', undefined);
    //
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
  }

}
