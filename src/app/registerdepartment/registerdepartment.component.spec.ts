import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterdepartmentComponent } from './registerdepartment.component';

describe('RegisterdepartmentComponent', () => {
  let component: RegisterdepartmentComponent;
  let fixture: ComponentFixture<RegisterdepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterdepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
