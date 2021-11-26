import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePosteCardComponent } from './employee-poste-card.component';

describe('EmployeePosteCardComponent', () => {
  let component: EmployeePosteCardComponent;
  let fixture: ComponentFixture<EmployeePosteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePosteCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePosteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
