import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Provider, ProvidersResponse } from './../models/providers';

import { BindService } from './../services/bind.service';
import { NavButtons } from './../models/nav-buttons';


@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  readonly navButtons: NavButtons = new NavButtons();

  loading = false;
  error = '';

  expanded = false;
  providers: Provider[] = [
    { providerId: 'facebook', connected: true },
    { providerId: 'linkedin', connected: false },
    { providerId: 'github', connected: true },
    { providerId: 'stackexchange', connected: false },
    { providerId: 'google', connected: false },
    { providerId: 'twitter', connected: false },
    { providerId: 'glassdoor', connected: false },
    { providerId: 'slack', connected: false },
    { providerId: 'coursera', connected: false },
    { providerId: 'foursquare', connected: false },
    { providerId: 'paypal', connected: false },
    { providerId: 'soundcloud', connected: false },
    { providerId: 'telegram', connected: false },
    { providerId: 'whatsapp', connected: true },
    { providerId: 'dropbox', connected: false },
    { providerId: 'gdrive.google', connected: false },
    { providerId: 'live.microsoft', connected: false },
    { providerId: 'skype', connected: false },
    { providerId: 'instagram', connected: false },
    { providerId: 'onedrive.microsoft', connected: false },
    { providerId: 'steam', connected: true },
    { providerId: 'viber', connected: false }
  ];
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
  /*
    this.loading = true;
    this.error = '';
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
    */
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
