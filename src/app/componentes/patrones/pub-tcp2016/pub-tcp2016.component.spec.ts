import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubTCP2016Component } from './pub-tcp2016.component';

describe('PubTCP2016Component', () => {
  let component: PubTCP2016Component;
  let fixture: ComponentFixture<PubTCP2016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubTCP2016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubTCP2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
