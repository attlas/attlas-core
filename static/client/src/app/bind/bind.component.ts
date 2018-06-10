import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Provider, ProvidersResponse } from './../models/providers'

import { BindService } from './../services/bind.service'
import { NavButtons } from './../models/nav-buttons';


@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  readonly navButtons: NavButtons = new NavButtons();

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
    this.navButtons.primary.initAction(
      () => {
        this.router.navigate(['/home']);
       },
      'home'
    );
    this.navButtons.primary.initButton('light', undefined);
    this.navButtons.build('lg');
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

  /**/
  isAuthenticated(): boolean {
    return this.bindService.isAuthenticated();
  }

  /**
   */
  showMoreLess() {
    this.expanded = !this.expanded;
  }

}
