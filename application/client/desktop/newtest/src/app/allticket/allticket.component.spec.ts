import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllticketComponent } from './allticket.component';

describe('AllticketComponent', () => {
  let component: AllticketComponent;
  let fixture: ComponentFixture<AllticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});