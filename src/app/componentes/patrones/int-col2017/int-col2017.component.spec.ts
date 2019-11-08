import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntCol2017Component } from './int-col2017.component';

describe('IntCol2017Component', () => {
  let component: IntCol2017Component;
  let fixture: ComponentFixture<IntCol2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntCol2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntCol2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
