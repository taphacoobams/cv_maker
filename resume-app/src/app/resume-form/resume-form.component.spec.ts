import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFormComponent } from './resume-form.component';

describe('ResumeFormComponent', () => {
  let component: ResumeFormComponent;
  let fixture: ComponentFixture<ResumeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeFormComponent]
    });
    fixture = TestBed.createComponent(ResumeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
