import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pub2017Component } from './pub2017.component';

describe('Pub2017Component', () => {
  let component: Pub2017Component;
  let fixture: ComponentFixture<Pub2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pub2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pub2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
