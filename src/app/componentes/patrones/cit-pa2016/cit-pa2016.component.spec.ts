import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitPA2016Component } from './cit-pa2016.component';

describe('CitPA2016Component', () => {
  let component: CitPA2016Component;
  let fixture: ComponentFixture<CitPA2016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitPA2016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitPA2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
