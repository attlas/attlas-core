import { Injectable, Output, EventEmitter } from '@angular/core';

import { Notification } from './../models/notification'

@Injectable()
export class BindService {

  @Output() change: EventEmitter<Notification> = new EventEmitter();

  constructor() {
    console.log('bind-service:create')
  }

  error(message: String){
    console.log('bind-service:emit ' + message);
    let notification = new Notification();
    notification.message = message;
    this.change.emit(notification);
  }

}

