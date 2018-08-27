import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    /*/
    if (localStorage.getItem(environment.storage.keyName)) {
      return true;
    }
    this.router.navigate(['/bind']);
    return false;
    /*/
    return true;
    //
  }
}


