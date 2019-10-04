import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H5IndexComponent } from './h5-index.component';

describe('H5IndexComponent', () => {
  let component: H5IndexComponent;
  let fixture: ComponentFixture<H5IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H5IndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H5IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
