import { TestBed, inject } from '@angular/core/testing';

import { BindService } from './bind.service';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";

describe('BindService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BindService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([BindService], (service: BindService) => {
    expect(service).toBeTruthy();
  }));
});
