import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentViewComponent } from './departament-view.component';

describe('DepartamentViewComponent', () => {
  let component: DepartamentViewComponent;
  let fixture: ComponentFixture<DepartamentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
