import { Component, OnInit } from '@angular/core';

import { ProgressService } from '../../services/progress.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  value: number = 0;

  constructor(private progressService: ProgressService) {
  }

  ngOnInit() {
    this.progressService.change.subscribe(value => {
      this.value = value;
    });
  }

}
