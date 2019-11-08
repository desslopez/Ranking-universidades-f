import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Authors2016Component } from './authors2016.component';

describe('Authors2016Component', () => {
  let component: Authors2016Component;
  let fixture: ComponentFixture<Authors2016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Authors2016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Authors2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
