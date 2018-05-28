import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from './../../environments/environment';

import { BindService } from './../services/bind.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private bindService: BindService) {
  }

  ngOnInit() {
    if (this.bindService.isAuthenticated() ){
      this.router.navigate(['/feed']);
    }
  }
}
