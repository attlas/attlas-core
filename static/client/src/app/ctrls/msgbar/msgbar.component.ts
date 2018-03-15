import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-msgbar',
  templateUrl: './msgbar.component.html',
  styleUrls: ['./msgbar.component.css']
})
export class MsgbarComponent implements OnInit {

  @Input() message: string = "";

  constructor() { }

  ngOnInit() {
  }

}
