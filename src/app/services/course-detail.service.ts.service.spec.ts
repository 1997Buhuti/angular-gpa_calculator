import { TestBed } from '@angular/core/testing';

import { CourseDetail.Service.TsService } from './course-detail.service.ts.service';

describe('CourseDetail.Service.TsService', () => {
  let service: CourseDetail.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseDetail.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
