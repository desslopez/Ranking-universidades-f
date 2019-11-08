import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FwCitImp2016Component } from './fw-cit-imp2016.component';

describe('FwCitImp2016Component', () => {
  let component: FwCitImp2016Component;
  let fixture: ComponentFixture<FwCitImp2016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwCitImp2016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwCitImp2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
