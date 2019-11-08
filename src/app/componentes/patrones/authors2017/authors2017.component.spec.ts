import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Authors2017Component } from './authors2017.component';

describe('Authors2017Component', () => {
  let component: Authors2017Component;
  let fixture: ComponentFixture<Authors2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Authors2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Authors2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
