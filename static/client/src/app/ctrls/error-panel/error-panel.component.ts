import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-panel',
  templateUrl: './error-panel.component.html',
  styleUrls: ['./error-panel.component.css']
})
export class ErrorPanelComponent implements OnInit {

  @Input() errorMessage = '';

  constructor() { }

  ngOnInit() {
  }

}
