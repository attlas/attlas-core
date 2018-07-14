import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MsgbarComponent} from './msgbar.component';
import {BindService} from '../../services/bind.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('MsgbarComponent', () => {
  let component: MsgbarComponent;
  let fixture: ComponentFixture<MsgbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MsgbarComponent],
      providers: [BindService, HttpClient, HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
