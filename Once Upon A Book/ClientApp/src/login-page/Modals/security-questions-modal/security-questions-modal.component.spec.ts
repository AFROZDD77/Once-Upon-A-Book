import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityQuestionsModalComponent } from './security-questions-modal.component';

describe('SecurityQuestionsModalComponent', () => {
  let component: SecurityQuestionsModalComponent;
  let fixture: ComponentFixture<SecurityQuestionsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityQuestionsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityQuestionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
