import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterprojectComponent } from './registerproject.component';

describe('RegisterprojectComponent', () => {
  let component: RegisterprojectComponent;
  let fixture: ComponentFixture<RegisterprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
