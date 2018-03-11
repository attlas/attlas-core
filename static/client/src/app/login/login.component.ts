import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
