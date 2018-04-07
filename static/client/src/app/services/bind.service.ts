import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map, retry } from 'rxjs/operators';

import { Notification } from './../models/notification'
import { ApiResponse } from './../models/api-response'
import { Provider, ProvidersResponse } from './../models/providers'

import { CONSTS } from './../../environments/consts';

@Injectable()
export class BindService {

  @Output() change: EventEmitter<Notification> = new EventEmitter();

  constructor(private http: HttpClient) {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  /**/
  getProviders(): Observable<Provider[]> {
    return this.http.get<ProvidersResponse>(this.getBindEndpoint('/auth'), {withCredentials : true})
      .pipe(
        map(res => res.data),
        catchError(this.handleError)
      );
  }

  /**/
  getProviderBindLink(providerId: string) {
    return this.getBindEndpoint(`/auth/${providerId}?callback=${CONSTS.HOSTS.SELF}/bind`);
  }

  unbind(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  /**/
  private getBindEndpoint(endpoint: string): string {
    return `${CONSTS.HOSTS.BIND_SERVICE}/api/v1${endpoint}`;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };

  error(message: String){
    let notification = new Notification();
    notification.message = message;
    this.change.emit(notification);
  }
  //
  private token: string = null;

}
