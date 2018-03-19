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
    console.log('bind-component:create');
  }

  ngOnInit() {
    console.log('bind-component:init');
    console.log('bind-component:create-error');
    this.bindService.error('error');
  }

  /**
   */
  showMoreLess() {
    this.expanded = !this.expanded;
  }

}
