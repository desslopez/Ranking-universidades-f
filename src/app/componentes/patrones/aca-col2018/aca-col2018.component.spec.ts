import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaCol2018Component } from './aca-col2018.component';

describe('AcaCol2018Component', () => {
  let component: AcaCol2018Component;
  let fixture: ComponentFixture<AcaCol2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcaCol2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcaCol2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
