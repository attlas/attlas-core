import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {BindService } from './../services/bind.service'

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  expanded: boolean = false;
  providers: String[] = [
    'facebook',
    'linkedin',
    'github',
    'stackexchange',
    'google',
    'twitter',
    'glassdoor',
    'slack',
    'coursera',
    'foursquare',
    'paypal',
    'soundcloud',
    'telegram',
    'whatsapp',
    'dropbox',
    'gdrive.google',
    'live.microsoft',
    'skype',
    'instagram',
    'onedrive.microsoft',
    'steam',
    'viber'
  ]
  readonly providersToShow: number = 6;

  constructor(private router: Router, private bindService: BindService) {
  }

  ngOnInit() {
    this.bindService.getProviders().subscribe(
      (v:any) => {console.log('Observer got a next value: ' + JSON.stringify(v))},
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    );
  }

  /**
   */
  showMoreLess() {
    this.expanded = !this.expanded;
  }

}
