import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { HudComponent } from './hud.component';
import { NavbarComponent } from '../ctrls/navbar/navbar.component';
import { ProgressBarComponent } from '../ctrls/progress-bar/progress-bar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProgressService } from '../services/progress.service';

describe('HudComponent', () => {
  let component: HudComponent;
  let fixture: ComponentFixture<HudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HudComponent, NavbarComponent, ProgressBarComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ProgressService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
