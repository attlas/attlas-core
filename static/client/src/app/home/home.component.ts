import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
