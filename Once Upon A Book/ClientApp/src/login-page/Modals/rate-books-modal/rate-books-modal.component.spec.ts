import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateBooksModalComponent } from './rate-books-modal.component';

describe('RateBooksModalComponent', () => {
  let component: RateBooksModalComponent;
  let fixture: ComponentFixture<RateBooksModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RateBooksModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateBooksModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
