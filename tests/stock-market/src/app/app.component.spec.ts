import { AppComponent } from './app.component';
import { Stock } from './model/stock';

describe('AppComponent', ()=> {
  it('should instantiated stock variable on ngInit', () => {
    const appComponent = new AppComponent();
    expect(appComponent.stock).toBeUndefined();
    appComponent.ngOnInit();
    expect(appComponent.stock).toEqual(
      new Stock('Test Stock Company', 'TSC', 85, 80));
  });

  it('should change boolean variable after toogleFavourite', () => {
    const appComponent = new AppComponent();
    appComponent.ngOnInit();
    expect(appComponent.stock.favorite).toBeFalsy();
    appComponent.onToggleFavorite(new Stock('Test', 'TEST', 50, 55));
    expect(appComponent.stock.favorite).toBeTruthy();
    appComponent.onToggleFavorite(new Stock('Test', 'TEST', 50, 55));
    expect(appComponent.stock.favorite).toBeFalsy();
  });

  it('name should equal "Test Stock Comapny"', () => {
    const appComponent = new AppComponent();
    appComponent.ngOnInit();
    expect(appComponent.stock.name).toEqual(
      'Test Stock Company'
    );
    })
  it('code should equal "TSC"', () =>{
    const appComponent = new AppComponent();
    appComponent.ngOnInit();
    expect(appComponent.stock.code).toEqual(
      'TSC'
    )
  });
  it('price should be a number', () => {
    const appComponent = new AppComponent();
    appComponent.ngOnInit();
    expect(appComponent.stock.price && appComponent.stock.previousPrice).toEqual(jasmine.any(Number))
  })
});