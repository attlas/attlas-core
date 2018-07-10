import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FeedComponent} from './feed.component';
import {NavbarComponent} from "../ctrls/navbar/navbar.component";
import {ProgressBarComponent} from "../ctrls/progress-bar/progress-bar.component";
import {LiquidityComponent} from "../apps/liquidity/liquidity.component";
import {PatronComponent} from "../apps/patron/patron.component";
import {ReferralComponent} from "../apps/referral/referral.component";

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeedComponent, NavbarComponent, ProgressBarComponent, LiquidityComponent, PatronComponent, ReferralComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
