import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindComponent } from './bind.component';
import { LoadingPanelComponent} from '../ctrls/loading-panel/loading-panel.component';
import { ErrorPanelComponent} from '../ctrls/error-panel/error-panel.component';
import { NavPanelComponent} from '../ctrls/nav-panel/nav-panel.component';
import { RouterTestingModule} from '@angular/router/testing';
import { BindService} from '../services/bind.service';
import { HttpClient, HttpHandler} from '@angular/common/http';

describe('BindComponent', () => {
  let component: BindComponent;
  let fixture: ComponentFixture<BindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [BindService, HttpClient, HttpHandler],
      declarations: [ BindComponent, LoadingPanelComponent, ErrorPanelComponent, NavPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
