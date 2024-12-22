import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChapitreDetailPage } from './chapitre-detail.page';

describe('ChapitreDetailPage', () => {
  let component: ChapitreDetailPage;
  let fixture: ComponentFixture<ChapitreDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapitreDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
