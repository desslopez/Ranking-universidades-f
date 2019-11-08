import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubPA2017Component } from './pub-pa2017.component';

describe('PubPA2017Component', () => {
  let component: PubPA2017Component;
  let fixture: ComponentFixture<PubPA2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubPA2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubPA2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
