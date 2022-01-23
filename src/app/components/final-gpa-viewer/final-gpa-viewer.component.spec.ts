import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalGpaViewerComponent } from './final-gpa-viewer.component';

describe('FinalGpaViewerComponent', () => {
  let component: FinalGpaViewerComponent;
  let fixture: ComponentFixture<FinalGpaViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalGpaViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalGpaViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
