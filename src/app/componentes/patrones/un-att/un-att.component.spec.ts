import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAttComponent } from './un-att.component';

describe('UnAttComponent', () => {
  let component: UnAttComponent;
  let fixture: ComponentFixture<UnAttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnAttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnAttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
