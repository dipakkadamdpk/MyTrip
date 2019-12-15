import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelTwoWayDataBindingDemoComponent } from './ng-model-two-way-data-binding-demo.component';

describe('NgModelTwoWayDataBindingDemoComponent', () => {
  let component: NgModelTwoWayDataBindingDemoComponent;
  let fixture: ComponentFixture<NgModelTwoWayDataBindingDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgModelTwoWayDataBindingDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModelTwoWayDataBindingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
