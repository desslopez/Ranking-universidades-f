import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubTCP2017Component } from './pub-tcp2017.component';

describe('PubTCP2017Component', () => {
  let component: PubTCP2017Component;
  let fixture: ComponentFixture<PubTCP2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubTCP2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubTCP2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
