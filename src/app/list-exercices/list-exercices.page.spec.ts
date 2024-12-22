import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListExercicesPage } from './list-exercices.page';

describe('ListExercicesPage', () => {
  let component: ListExercicesPage;
  let fixture: ComponentFixture<ListExercicesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExercicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
