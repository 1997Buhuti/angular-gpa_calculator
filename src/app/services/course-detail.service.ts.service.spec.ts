import { TestBed } from '@angular/core/testing';

import { CourseDetailService } from './courseDetail.service';

describe('CourseDetail.Service.TsService', () => {
  let service: CourseDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
