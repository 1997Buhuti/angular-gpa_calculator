import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CourseDetailService{

  constructor(private http:HttpClient) { }

  getAllCourseDetails(){
    //return this.http.get();
  }
}
