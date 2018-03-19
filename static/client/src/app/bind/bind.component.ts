import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  expanded: boolean = false;
  userID: String = "";
  providers: String[] = [
    'facebook',
    'linkedin',
    'github',
    'stackexchange',
    'google',
    'twitter',
    'glassdoor',
    'slack',
    'coursera',
    'foursquare',
    'paypal',
    'soundcloud',
    'telegram',
    'whatsapp',
    'dropbox',
    'gdrive.google',
    'live.microsoft',
    'skype',
    'instagram',
    'onedrive.microsoft',
    'steam',
    'viber'
  ]
  readonly providersToShow: number = 8;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   */
  showMoreLess() {
    this.expanded = !this.expanded;
  }
  /**
   */
  login() {
    /*
    FB.Event.subscribe('auth.statusChange', (response => {
      console.log(response);
      if (response.status === 'connected') {
      }
    }));
    */
    FB.getLoginStatus((response) => {
      if (response.status === 'connected') {
        console.log(response);
        this.userID = response.authResponse.userID;
        this.router.navigate(['home']);
      } else {
        FB.login((loginResponse)=>{
          console.log(loginResponse);
          //this.router.navigate(['home']);
        }, {
            scope: 'public_profile,email,user_friends',
            return_scopes: true
          }
        );
      }
    });
  }
  
  verify(){
    console.log(this.userID);
    this.router.navigate(['home']);
  }


}
