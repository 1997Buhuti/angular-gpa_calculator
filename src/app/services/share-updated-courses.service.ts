import { Injectable } from '@angular/core';
import { Gpa_Detail } from '../IGpa_Detail';

@Injectable({
  providedIn: 'root',
})
export class ShareUpdatedCoursesService {
  updatedCourseDetails: Gpa_Detail[];
  finalGPA: number;
  constructor() {}

  setUpdatedCourseDetails(data: Gpa_Detail[]) {
    this.updatedCourseDetails = data;
  }

  getUpdatedCourseDetails() {
    return this.updatedCourseDetails;
  }

  setFinalGpa(finalGPA: number) {
    this.finalGPA = finalGPA;
  }

  getFinalGpa() {
    return this.finalGPA;
  }
}
