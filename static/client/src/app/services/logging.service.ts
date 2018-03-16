import { Injectable, Output, EventEmitter } from '@angular/core';

import { Notification } from './../models/notification'
@Injectable()
export class LoggingService {

  @Output() change: EventEmitter<Notification> = new EventEmitter();

  constructor() { }

  error(message: String){
    let notification = new Notification();
    notification.message = message;
    this.change.emit(notification);
  }

}
