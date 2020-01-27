import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaboutusComponent } from './empaboutus.component';

describe('EmpaboutusComponent', () => {
  let component: EmpaboutusComponent;
  let fixture: ComponentFixture<EmpaboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpaboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpaboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
