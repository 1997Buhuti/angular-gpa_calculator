import { TestBed } from '@angular/core/testing';

import { ShareUpdatedCoursesService } from './share-updated-courses.service';

describe('ShareUpdatedCoursesService', () => {
  let service: ShareUpdatedCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareUpdatedCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
