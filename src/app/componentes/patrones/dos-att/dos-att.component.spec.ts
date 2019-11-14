import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DosAttComponent } from './dos-att.component';

describe('DosAttComponent', () => {
  let component: DosAttComponent;
  let fixture: ComponentFixture<DosAttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DosAttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DosAttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
