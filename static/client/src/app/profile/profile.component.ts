import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Provider, ProvidersResponse } from './../models/providers';

import { BindService } from './../services/bind.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  providers: Provider[] = [];

  constructor(private router: Router, private bindService: BindService) {
  }

  ngOnInit() {
    this.bindService.getProviders().subscribe(
      (v) => {
        this.providers = v;
      },
      (err) => {
      },
      () => {
      }
    );
  }

  /**/
  getProviderBindLink(providerId: string): string {
    return this.bindService.getProviderBindLink(providerId, 'profile');
  }

}
