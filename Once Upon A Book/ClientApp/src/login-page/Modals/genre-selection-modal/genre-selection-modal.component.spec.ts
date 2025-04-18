import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreSelectionModalComponent } from './genre-selection-modal.component';

describe('GenreSelectionModalComponent', () => {
  let component: GenreSelectionModalComponent;
  let fixture: ComponentFixture<GenreSelectionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenreSelectionModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreSelectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
