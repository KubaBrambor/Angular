import { TestBed } from '@angular/core/testing';

import { ServiceService } from './service.service';
import { mainMenu } from '../data/mainMenu';
import { desserMenu } from '../data/desserMenu';
import { drinkMenu } from '../data/drinkMenu';

describe('ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceService = TestBed.get(ServiceService);
    expect(service).toBeTruthy();
  });

  it('should get data', () => {
    const service: ServiceService = TestBed.get(ServiceService);
    expect(service.getMainCourse()).toEqual(mainMenu);
    expect(service.getDesser()).toEqual(desserMenu);
    expect(service.getDrink()).toEqual(drinkMenu);
  })
});
