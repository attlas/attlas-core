import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

import { ProgressService } from './../services/progress.service';
import { BindService } from './../services/bind.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private bindService: BindService, private progressService: ProgressService) { 
  }

  ngOnInit() {
    this.progressService.init(0, 25, 100);
  }

}
