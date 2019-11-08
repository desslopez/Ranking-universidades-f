import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaCol2016Component } from './aca-col2016.component';

describe('AcaCol2016Component', () => {
  let component: AcaCol2016Component;
  let fixture: ComponentFixture<AcaCol2016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcaCol2016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcaCol2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
