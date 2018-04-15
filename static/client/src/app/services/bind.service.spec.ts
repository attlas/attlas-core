import { TestBed, inject } from '@angular/core/testing';

import { BindService } from './bind.service';

describe('BindService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BindService]
    });
  });

  it('should be created', inject([BindService], (service: BindService) => {
    expect(service).toBeTruthy();
  }));
});
