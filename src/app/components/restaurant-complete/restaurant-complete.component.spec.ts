import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCompleteComponent } from './restaurant-complete.component';

describe('RestaurantCompleteComponent', () => {
  let component: RestaurantCompleteComponent;
  let fixture: ComponentFixture<RestaurantCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
