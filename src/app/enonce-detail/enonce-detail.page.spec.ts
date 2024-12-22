import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnonceDetailPage } from './enonce-detail.page';

describe('EnonceDetailPage', () => {
  let component: EnonceDetailPage;
  let fixture: ComponentFixture<EnonceDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnonceDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
