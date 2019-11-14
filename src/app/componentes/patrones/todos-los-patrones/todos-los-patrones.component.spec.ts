import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosLosPatronesComponent } from './todos-los-patrones.component';

describe('TodosLosPatronesComponent', () => {
  let component: TodosLosPatronesComponent;
  let fixture: ComponentFixture<TodosLosPatronesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosLosPatronesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosLosPatronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
