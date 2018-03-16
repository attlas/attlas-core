import { Component, OnInit, Input } from '@angular/core';

import { Notification } from './../../models/notification';

import { LoggingService } from './../../services/logging.service';

@Component({
  selector: 'app-msgbar',
  templateUrl: './msgbar.component.html',
  styleUrls: ['./msgbar.component.css']
})
export class MsgbarComponent implements OnInit {

  notification: Notification = new Notification();

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
    this.loggingService.change.subscribe(notification => {
      this.notification = notification;
    });
  }


}
