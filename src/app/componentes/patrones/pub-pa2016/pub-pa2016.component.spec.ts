import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubPA2016Component } from './pub-pa2016.component';

describe('PubPA2016Component', () => {
  let component: PubPA2016Component;
  let fixture: ComponentFixture<PubPA2016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubPA2016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubPA2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
