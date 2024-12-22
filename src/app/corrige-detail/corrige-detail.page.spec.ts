import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorrigeDetailPage } from './corrige-detail.page';

describe('CorrigeDetailPage', () => {
  let component: CorrigeDetailPage;
  let fixture: ComponentFixture<CorrigeDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrigeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
