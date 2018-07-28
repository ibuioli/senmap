import { TestBed, inject } from '@angular/core/testing';

import { OscService } from './osc.service';

describe('OscService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OscService]
    });
  });

  it('should be created', inject([OscService], (service: OscService) => {
    expect(service).toBeTruthy();
  }));
});
