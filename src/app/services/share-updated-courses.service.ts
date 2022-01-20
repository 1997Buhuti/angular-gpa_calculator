import { Injectable } from '@angular/core';
import {Gpa_Detail} from "../IGpa_Detail";

@Injectable({
  providedIn: 'root'
})
export class ShareUpdatedCoursesService {
  updatedCourseDetails:Gpa_Detail[];

  constructor() { }

  setUpdatedCourseDetails(data:Gpa_Detail[]){
    this.updatedCourseDetails=data;
  }

  getUpdatedCourseDetails(){
    return this.updatedCourseDetails;
  }
}
