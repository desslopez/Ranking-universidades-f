import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntCol2016Component } from './int-col2016.component';

describe('IntCol2016Component', () => {
  let component: IntCol2016Component;
  let fixture: ComponentFixture<IntCol2016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntCol2016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntCol2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
