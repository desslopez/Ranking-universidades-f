import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Authors2018Component } from './authors2018.component';

describe('Authors2018Component', () => {
  let component: Authors2018Component;
  let fixture: ComponentFixture<Authors2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Authors2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Authors2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
