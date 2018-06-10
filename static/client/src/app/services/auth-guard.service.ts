import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { CONSTS } from './../../environments/consts';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    /*/
    if (localStorage.getItem(CONSTS.STORAGE.USER)) {
      return true;
    }
    this.router.navigate(['/bind']);
    return false;
    /*/
    return true;
    //
  }
}


