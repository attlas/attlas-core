import { Component, OnInit } from '@angular/core';

import { BaseApp } from './../base-app';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.css']
})
export class ReferralComponent extends BaseApp implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
