import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pub2016Component } from './pub2016.component';

describe('Pub2016Component', () => {
  let component: Pub2016Component;
  let fixture: ComponentFixture<Pub2016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pub2016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pub2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
