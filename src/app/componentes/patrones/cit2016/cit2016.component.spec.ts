import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cit2016Component } from './cit2016.component';

describe('Cit2016Component', () => {
  let component: Cit2016Component;
  let fixture: ComponentFixture<Cit2016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cit2016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cit2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
