import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FwCitImp2017Component } from './fw-cit-imp2017.component';

describe('FwCitImp2017Component', () => {
  let component: FwCitImp2017Component;
  let fixture: ComponentFixture<FwCitImp2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwCitImp2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwCitImp2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
