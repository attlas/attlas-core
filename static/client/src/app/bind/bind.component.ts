import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Provider, ProvidersResponse } from './../models/providers'

import { BindService } from './../services/bind.service'

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  loading: boolean = false;
  error: string = "";

  expanded: boolean = false;
  providers: Provider[] = [
  /*
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
    */
  ]
  readonly providersToShow: number = 6;

  constructor(private router: Router, private bindService: BindService) {
  }

  ngOnInit() {
    this.getProviders();
  }

  getProviders() {
    this.loading = true;
    this.error = "";
    this.providers = [];
    this.bindService.getProviders().subscribe(
      (v) => {
        this.providers = v;
      },
      (err) => {
        this.loading = false;
        this.error = err;
      },
      () => {
        this.loading = false;
      }
    );
  }
  /**/
  getProviderBindLink(providerId: string): string {
    return this.bindService.getProviderBindLink(providerId);
  }

  /**
   */
  showMoreLess() {
    this.expanded = !this.expanded;
  }

}
