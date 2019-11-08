import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubPA2018Component } from './pub-pa2018.component';

describe('PubPA2018Component', () => {
  let component: PubPA2018Component;
  let fixture: ComponentFixture<PubPA2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubPA2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubPA2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
