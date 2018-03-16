import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

import { ProgressService } from './../services/progress.service';
import { LoggingService } from './../services/logging.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  providers: String[] = [
    'facebook',
    'linkedin',
    'github',
    'stackexchange',
    'coursera',
    'foursquare',
    'glassdoor',
    'paypal',
    'soundcloud',
    'telegram',
    'whatsapp',
    'dropbox',
    'gdrive.google',
    'google',
    'live.microsoft',
    'skype',
    'twitter',
    'instagram',
    'onedrive.microsoft',
    'slack',
    'steam',
    'viber'
  ]

  constructor(private http: HttpClient, private loggingService: LoggingService, private progressService: ProgressService) { 
  }

  ngOnInit() {
    this.progressService.init(0, 50, 100);
  }

}
