import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders, HttpResponse, HttpHandler } from '@angular/common/http'
import { HttpService } from './http-service.service';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpClient, 
      HttpHandler
    ]
  }));

  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });
});
