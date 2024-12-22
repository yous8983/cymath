import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciceDetailPage } from './exercice-detail.page';

describe('ExerciceDetailPage', () => {
  let component: ExerciceDetailPage;
  let fixture: ComponentFixture<ExerciceDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
