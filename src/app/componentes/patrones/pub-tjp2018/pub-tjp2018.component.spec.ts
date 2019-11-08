import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubTJP2018Component } from './pub-tjp2018.component';

describe('PubTJP2018Component', () => {
  let component: PubTJP2018Component;
  let fixture: ComponentFixture<PubTJP2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubTJP2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubTJP2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
