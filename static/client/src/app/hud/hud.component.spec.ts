import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HudComponent } from './hud.component';
import {NavbarComponent} from "../ctrls/navbar/navbar.component";
import {ProgressBarComponent} from "../ctrls/progress-bar/progress-bar.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('HudComponent', () => {
  console.log(ProgressBarComponent);
  let component: HudComponent;
  let fixture: ComponentFixture<HudComponent>;

  beforeEach(async(() => {console.log(ProgressBarComponent);
    TestBed.configureTestingModule({
      declarations: [HudComponent, NavbarComponent, ProgressBarComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })

    .compileComponents();
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
