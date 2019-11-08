import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitPP2016Component } from './cit-pp2016.component';

describe('CitPP2016Component', () => {
  let component: CitPP2016Component;
  let fixture: ComponentFixture<CitPP2016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitPP2016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitPP2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
