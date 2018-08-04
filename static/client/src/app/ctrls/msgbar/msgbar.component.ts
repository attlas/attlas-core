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
  show = true;

  constructor(private bindService: BindService) {
    console.log('msgbar');
    this.notification.message = 'error';
    this.bindService.change.subscribe(notification => {
      this.notification = notification;
      this.show = true;
    });
  }

  ngOnInit() {
  }


}
