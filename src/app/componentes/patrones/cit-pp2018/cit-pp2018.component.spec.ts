import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitPP2018Component } from './cit-pp2018.component';

describe('CitPP2018Component', () => {
  let component: CitPP2018Component;
  let fixture: ComponentFixture<CitPP2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitPP2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitPP2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
