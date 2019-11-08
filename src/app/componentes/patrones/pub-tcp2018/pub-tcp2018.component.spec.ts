import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubTCP2018Component } from './pub-tcp2018.component';

describe('PubTCP2018Component', () => {
  let component: PubTCP2018Component;
  let fixture: ComponentFixture<PubTCP2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubTCP2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubTCP2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
