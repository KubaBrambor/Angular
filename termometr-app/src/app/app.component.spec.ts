import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HttpService } from './services/http-service.service';
import { HttpClient, HttpHeaders, HttpResponse, HttpHandler } from '@angular/common/http'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        CardComponent
      ],
      providers: [ 
        HttpService, 
        HttpClient, 
        HttpHandler ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
