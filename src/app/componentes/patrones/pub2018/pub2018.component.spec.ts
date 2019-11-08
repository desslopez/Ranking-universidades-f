import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pub2018Component } from './pub2018.component';

describe('Pub2018Component', () => {
  let component: Pub2018Component;
  let fixture: ComponentFixture<Pub2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pub2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pub2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
