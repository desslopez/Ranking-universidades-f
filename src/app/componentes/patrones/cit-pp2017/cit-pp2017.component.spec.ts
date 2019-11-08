import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitPP2017Component } from './cit-pp2017.component';

describe('CitPP2017Component', () => {
  let component: CitPP2017Component;
  let fixture: ComponentFixture<CitPP2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitPP2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitPP2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
