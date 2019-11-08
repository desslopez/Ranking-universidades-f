import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaCol2017Component } from './aca-col2017.component';

describe('AcaCol2017Component', () => {
  let component: AcaCol2017Component;
  let fixture: ComponentFixture<AcaCol2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcaCol2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcaCol2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
