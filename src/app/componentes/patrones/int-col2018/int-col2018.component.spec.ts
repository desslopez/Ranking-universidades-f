import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntCol2018Component } from './int-col2018.component';

describe('IntCol2018Component', () => {
  let component: IntCol2018Component;
  let fixture: ComponentFixture<IntCol2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntCol2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntCol2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
