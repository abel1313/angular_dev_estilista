import { TestBed } from '@angular/core/testing';

import { ServiceGenericoService } from './service-generico.service';

describe('ServiceGenericoService', () => {
  let service: ServiceGenericoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGenericoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
