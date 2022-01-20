import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Gpa_Detail} from '../IGpa_Detail';
import {Sample_Course_Details} from "../Sample_Course_Details";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseDetailService{
  private apiUrl="http://localhost:5000/courseDetails"
  constructor(private http:HttpClient) { }

  getAllCourseDetails():Observable<Gpa_Detail[]>{
    return this.http.get<Gpa_Detail[]>(this.apiUrl);
  }
}
