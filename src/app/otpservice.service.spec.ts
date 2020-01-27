import { TestBed, inject } from '@angular/core/testing';

import { OtpserviceService } from './otpservice.service';

describe('OtpserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OtpserviceService]
    });
  });

  it('should be created', inject([OtpserviceService], (service: OtpserviceService) => {
    expect(service).toBeTruthy();
  }));
});
