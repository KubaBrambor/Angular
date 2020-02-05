import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainCourseComponent } from './component/main-course/main-course.component';
import { MainCourse } from './model/mainCourse/main-course';

import { DrinksComponent } from './component/drinks/drinks.component';
import { Drink } from './model/drink/drink';

import { DessersComponent } from './component/dessers/dessers.component';
import { Desser } from './model/desser/desser';

import { FormComponent } from './component/form/form.component';


describe('AppComponent', ()=> {
    let fixture,
        component;
    
    beforeEach(async(()=> {
        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            declarations: [
                AppComponent,
                MainCourseComponent,
                DrinksComponent,
                DessersComponent,
                FormComponent
            ],
        }).compileComponents();
    }));

    beforeEach(()=> {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should render MainCourseComponent elements in AppComponent', ()=> {
        const titleEl = fixture.debugElement.query(By.css('.title'));
        expect(titleEl.nativeElement.textContent).toBe('Schabowy z ziemniakami');
        const priceEl = fixture.debugElement.query(By.css('.price'));
        expect(priceEl.nativeElement.textContent).toEqual('Cena 40 zł');
        const ingridientsEl = fixture.debugElement.query(By.css('.id'));
        expect(ingridientsEl.nativeElement.textContent).toEqual('ID: 1');
    })
})