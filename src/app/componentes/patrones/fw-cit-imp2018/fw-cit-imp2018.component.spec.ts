import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FwCitImp2018Component } from './fw-cit-imp2018.component';

describe('FwCitImp2018Component', () => {
  let component: FwCitImp2018Component;
  let fixture: ComponentFixture<FwCitImp2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwCitImp2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwCitImp2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
