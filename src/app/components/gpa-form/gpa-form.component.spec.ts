import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpaFormComponent } from './gpa-form.component';

describe('GpaFormComponent', () => {
  let component: GpaFormComponent;
  let fixture: ComponentFixture<GpaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
