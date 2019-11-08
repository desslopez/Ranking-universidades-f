import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitPA2018Component } from './cit-pa2018.component';

describe('CitPA2018Component', () => {
  let component: CitPA2018Component;
  let fixture: ComponentFixture<CitPA2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitPA2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitPA2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
