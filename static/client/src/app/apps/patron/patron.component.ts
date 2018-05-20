import { Component, OnInit } from '@angular/core';

import { BaseApp } from './../base-app';

@Component({
  selector: 'app-patron',
  templateUrl: './patron.component.html',
  styleUrls: ['./patron.component.css']
})
export class PatronComponent extends BaseApp implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
