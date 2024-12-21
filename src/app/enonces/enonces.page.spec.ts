import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnoncesPage } from './enonces.page';

describe('EnoncesPage', () => {
  let component: EnoncesPage;
  let fixture: ComponentFixture<EnoncesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnoncesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
