import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cit2018Component } from './cit2018.component';

describe('Cit2018Component', () => {
  let component: Cit2018Component;
  let fixture: ComponentFixture<Cit2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cit2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cit2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
