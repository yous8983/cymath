import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorrigesPage } from './corriges.page';

describe('CorrigesPage', () => {
  let component: CorrigesPage;
  let fixture: ComponentFixture<CorrigesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrigesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
