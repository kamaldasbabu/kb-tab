import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrestaurantsComponent } from './allrestaurants.component';

describe('AllrestaurantsComponent', () => {
  let component: AllrestaurantsComponent;
  let fixture: ComponentFixture<AllrestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllrestaurantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllrestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
