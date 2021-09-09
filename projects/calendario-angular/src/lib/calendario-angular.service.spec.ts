import { TestBed } from '@angular/core/testing';

import { CalendarioAngularService } from './calendario-angular.service';

describe('CalendarioAngularService', () => {
  let service: CalendarioAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarioAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
