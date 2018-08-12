import { Component, OnInit, Input } from '@angular/core';

import { Notification } from './../../models/notification';

import { BindService } from './../../services/bind.service';

@Component({
  selector: 'app-msgbar',
  templateUrl: './msgbar.component.html',
  styleUrls: ['./msgbar.component.css']
})
export class MsgbarComponent implements OnInit {

  notification: Notification = new Notification();
  show = false;

  constructor(private bindService: BindService) {
    this.notification.message = '';
    this.bindService.change.subscribe(notification => {
      this.notification = notification;
      this.show = true;
    });
  }

  ngOnInit() {
  }


}
