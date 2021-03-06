import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Provider, ProvidersResponse } from './../models/providers';

import { BindService } from './../services/bind.service';


@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  loading = false;
  error = '';

  expanded = false;
  providers: Provider[] = [
    { providerId: 'facebook', connected: false },
    { providerId: 'linkedin', connected: false },
    { providerId: 'github', connected: false },
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
    { providerId: 'whatsapp', connected: false },
    { providerId: 'dropbox', connected: false },
    { providerId: 'gdrive.google', connected: false },
    { providerId: 'live.microsoft', connected: false },
    { providerId: 'skype', connected: false },
    { providerId: 'instagram', connected: false },
    { providerId: 'onedrive.microsoft', connected: false },
    { providerId: 'steam', connected: false },
    { providerId: 'viber', connected: false }
  ];
  readonly providersToShow: number = 8;

  constructor(private router: Router, private bindService: BindService) {
  }

  ngOnInit() {
    this.getProviders();
  }

  getProviders() {
    //
    this.loading = true;
    this.error = '';
    this.providers = [];
    this.bindService.getProviders().subscribe(
      (v) => {
        console.log('1');
        this.providers = v;
      },
      (err) => {
        console.log('2');
        this.error = err;
        this.loading = false;
      },
      () => {
        console.log('3');
        this.loading = false;
      }
    );
    //
  }

  /**/
  getProviderBindLink(providerId: string): string {
    return this.bindService.getProviderBindLink(providerId, 'bind');
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

  /**
   */
  gotoHome() {
    this.router.navigate(['/home']);
  }

  /**
   */
  gotoProfile() {
    this.router.navigate(['/profile']);
  }

}
