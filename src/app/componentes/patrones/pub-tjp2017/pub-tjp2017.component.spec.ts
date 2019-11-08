import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubTJP2017Component } from './pub-tjp2017.component';

describe('PubTJP2017Component', () => {
  let component: PubTJP2017Component;
  let fixture: ComponentFixture<PubTJP2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubTJP2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubTJP2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
