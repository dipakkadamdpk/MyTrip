import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripTypesComponent } from './trip-types.component';

describe('TripTypesComponent', () => {
  let component: TripTypesComponent;
  let fixture: ComponentFixture<TripTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
