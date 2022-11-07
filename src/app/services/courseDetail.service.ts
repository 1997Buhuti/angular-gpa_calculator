import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Gpa_Detail} from '../IGpa_Detail';
import {Observable} from "rxjs";

const httpOptions = {

  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class CourseDetailService{
  private apiUrl="http://localhost:5000/courseDetails"
  constructor(private http:HttpClient) { }

  getAllCourseDetails():Observable<Gpa_Detail[]>{
    return this.http.get<Gpa_Detail[]>(this.apiUrl);
  }
  addCourseDetail(CourseDetail:Gpa_Detail):Observable<Gpa_Detail>{
    return this.http.post<Gpa_Detail>(this.apiUrl , CourseDetail, httpOptions);
  }
}
