import { TestBed } from '@angular/core/testing';

import { NgxUpload64Service } from './ngx-upload64.service';

describe('NgxUpload64Service', () => {
  let service: NgxUpload64Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxUpload64Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
