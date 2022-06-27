import { TestBed } from '@angular/core/testing';

import { Http.LoginService } from './http.login.service';

describe('Http.LoginService', () => {
  let service: Http.LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Http.LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
