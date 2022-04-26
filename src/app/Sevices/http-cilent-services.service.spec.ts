import { TestBed } from '@angular/core/testing';

import { HttpCilentServicesService } from './http-cilent-services.service';

describe('HttpCilentServicesService', () => {
  let service: HttpCilentServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCilentServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
