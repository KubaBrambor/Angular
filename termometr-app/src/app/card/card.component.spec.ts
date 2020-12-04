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

    
    component.ngOnInit()
    httpBackend.expectOne({
      url: 'https://cors-anywhere.herokuapp.com/https://www.wroclaw.pl/open-data/api/action/datastore_search?resource_id=9d5b2336-6f9a-4fa0-8cbe-d6b4776194c3&limit=5',
      method: 'GET'
    }, 'Get weather object').flush({
      data:{
        body:{
          result:{
            records:[{
              _id: 1,
              Opad_Typ: 'Brak_opadu',
              Lokalizacja_Opis: 'ul. Lotnicza',
              Wilgotnosc: '98%',
              T_Grunt: '2.00',
              Wiatr_V: '220',
              Czas_Rejestracji: '25.03.2020',
              T_Powietrza: '3.00',
              Wiatr_Kierunek: '250'
            }]
          }
        }
      }
    });
    fixture.detectChanges();
  }));
  
  it('should create the app', () => {
    expect(component).toBeTruthy();
    expect(component.httpCheck).toBeTruthy();
    
  });

  // it('should load array from real service on init', 
  //   async(() => {

  //   fixture.whenStable().then(() => {
  //     expect(component.httpCheck).toBeTruthy();
  //     fixture.detectChanges();
  //   });
  // }));

  afterEach(() => {
    fixture.destroy()
    httpBackend.verify()
  })
});
