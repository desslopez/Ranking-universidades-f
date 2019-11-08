import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cit2017Component } from './cit2017.component';

describe('Cit2017Component', () => {
  let component: Cit2017Component;
  let fixture: ComponentFixture<Cit2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cit2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cit2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
