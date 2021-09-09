import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioAngularComponent } from './calendario-angular.component';

describe('CalendarioAngularComponent', () => {
  let component: CalendarioAngularComponent;
  let fixture: ComponentFixture<CalendarioAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
