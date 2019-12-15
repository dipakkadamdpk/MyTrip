import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchFruitDemoComponent } from './ng-switch-fruit-demo.component';

describe('NgSwitchFruitDemoComponent', () => {
  let component: NgSwitchFruitDemoComponent;
  let fixture: ComponentFixture<NgSwitchFruitDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchFruitDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchFruitDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
