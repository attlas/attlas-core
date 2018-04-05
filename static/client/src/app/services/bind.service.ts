import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map, retry } from 'rxjs/operators';

import { Notification } from './../models/notification'
import { ApiResponse } from './../models/api-response'
import { Provider, ProvidersResponse } from './../models/providers'

@Injectable()
export class BindService {

  @Output() change: EventEmitter<Notification> = new EventEmitter();

  constructor(private http: HttpClient) {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }


  getProviders(): Observable<Provider[]> {
    return this.http.get<ProvidersResponse>('http://localhost:8080/api/v1/auth', {withCredentials : true})
      .pipe(
        map(res => res.data),
        catchError(this.handleError)
      );
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

  bind(providerId: string)/*: Observable<boolean>*/ {
  /*
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
            */
    }

  unbind(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  error(message: String){
    let notification = new Notification();
    notification.message = message;
    this.change.emit(notification);
  }
  //
  private token: string = null;

}
