import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresAttComponent } from './tres-att.component';

describe('TresAttComponent', () => {
  let component: TresAttComponent;
  let fixture: ComponentFixture<TresAttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresAttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresAttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
