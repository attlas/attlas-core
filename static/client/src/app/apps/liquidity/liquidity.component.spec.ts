import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidityComponent } from './liquidity.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('LiquidityComponent', () => {
  let component: LiquidityComponent;
  let fixture: ComponentFixture<LiquidityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ LiquidityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
