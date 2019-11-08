import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubTJP2016Component } from './pub-tjp2016.component';

describe('PubTJP2016Component', () => {
  let component: PubTJP2016Component;
  let fixture: ComponentFixture<PubTJP2016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubTJP2016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubTJP2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
