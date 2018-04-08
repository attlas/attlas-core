import { Component, OnInit, Input } from '@angular/core';

import { NavButtons } from './../../models/nav-buttons';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.css']
})
export class NavPanelComponent implements OnInit {

  @Input() options: NavButtons;

  constructor() { }

  ngOnInit() {
    this.popupMenu = false;
    //
  }
  /**/
  togglePopupMenu() { this.popupMenu = !this.popupMenu; }
  isPopupMenuVisible(): boolean { return this.popupMenu; }
  /**/
  private popupMenu: boolean = false;
}
