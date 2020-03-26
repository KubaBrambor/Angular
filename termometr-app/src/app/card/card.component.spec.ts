import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

import { HttpService } from '../services/http-service.service';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let httpBackend: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      providers: [ HttpService ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(inject([HttpTestingController],
    (backend: HttpTestingController) => {
    httpBackend = backend;
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  
    httpBackend.expectOne({
      url: 'https://cors-anywhere.herokuapp.com/https://www.wroclaw.pl/open-data/api/action/datastore_search?resource_id=9d5b2336-6f9a-4fa0-8cbe-d6b4776194c3&limit=5',
      method: 'GET'
    }, 'Get weather object').flush({
    id: 1,
    opadTyp: 'Brak_opadu',
    lokalizacja: 'ul. Lotnicza',
    wilgotnosc: '98%',
    tGrunt: '2.00',
    wiatrV: '220',
    czasRejestracji: '25.03.2020',
    tPowietrza: '3.00',
    wiatrKierunek: '250'
    });
  }));
  
  it('should create the app', () => {
    expect(component).toBeTruthy();
    expect(component.httpCheck).toBeTruthy();
  });

  // it('should load array from real service on init', 
  //   async(() => {
  //   expect(component).toBeTruthy();
  //   expect(component.temperature).toBeTruthy()

  //   // fixture.whenStable().then(() => {
  //   //   fixture.detectChanges();
  //   // });
  // }));

  afterEach(() => {
    fixture.destroy()
    httpBackend.verify()
  })
});
