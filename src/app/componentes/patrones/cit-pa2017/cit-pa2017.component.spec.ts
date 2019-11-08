import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitPA2017Component } from './cit-pa2017.component';

describe('CitPA2017Component', () => {
  let component: CitPA2017Component;
  let fixture: ComponentFixture<CitPA2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitPA2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitPA2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
