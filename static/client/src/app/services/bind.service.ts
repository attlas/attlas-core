import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map, retry } from 'rxjs/operators';
import { of } from 'rxjs';

import { Notification } from './../models/notification';
import { ApiResponse } from './../models/api-response';
import { Provider, ProvidersResponse } from './../models/providers';

import { environment } from '../../environments/environment';

@Injectable()
export class BindService {

  @Output() change: EventEmitter<Notification> = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  /**/
  getProviders(): Observable<Provider[]> {
    localStorage.removeItem(environment.storage.keyName);
    const options = {
//      headers:new HttpHeaders ({
//        "Content-Type": "application/json"
//      }),
      withCredentials: true
    };
    return this.http.get<ProvidersResponse>(this.getEndpoint('/contacts'), options)
      .pipe(
        map(res => {
          const p = res.data.find(provider => provider.connected);
          if (p) {
            localStorage.setItem(environment.storage.keyName, 'authenticated');
          }
          console.log(res);
          return res.data;
        }),
        catchError(this.handleError2<Provider[]>('getProviders', undefined))
      );
  }

  /**/
  isAuthenticated(): boolean {
    if (localStorage.getItem(environment.storage.keyName)) {
      return true;
    }
    return false;
  }

  /**/
  getProviderBindLink(providerId: string) {
    return this.getEndpoint(`/auth/${providerId}?callback=${environment.self}/bind`);
  }

  /**/
  private getEndpoint(endpoint: string): string {
    return `${environment.services.bind.apiUrl}/api/v1${endpoint}`;
  }

  /*
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
  }
  */

  private handleError2<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error); // log to console instead
      throw new Error(operation + ' failed'); // use this for subscribe(error:) to fire
      // Let the app keep running by returning an empty result.
      //return of(result as T);
    };
  }

  error(message: string) {
    const notification = new Notification();
    notification.message = message;
    this.change.emit(notification);
  }

}

