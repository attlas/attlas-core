import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BindService } from '../services/bind.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomeComponent],
      providers: [HttpClient, HttpHandler, BindService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
