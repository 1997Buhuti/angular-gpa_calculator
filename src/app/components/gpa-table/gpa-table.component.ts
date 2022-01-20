import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Gpa_Detail} from '../../IGpa_Detail';
import {CourseDetailService} from '../../services/courseDetail.service';
import {ShareUpdatedCoursesService} from "../../services/share-updated-courses.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-gpa-table',
  templateUrl: './gpa-table.component.html',
  styleUrls: ['gpa-table.component.scss'],
})
export class GpaTableComponent implements OnInit ,OnChanges {

  @Input () updatedData:Gpa_Detail[];
  courseDetails:any;
  public myDataArray:Gpa_Detail[] = this.shareUpdatedCoursesService.getUpdatedCourseDetails();
  columnsToDisplay: string[] = ["course", "grade", "credits","gpa"];

  constructor(private courseDetailsService:CourseDetailService ,private shareUpdatedCoursesService:ShareUpdatedCoursesService ) {
    //this.courseDetails = new MatTableDataSource<Gpa_Detail>([...this.courseDetails]);
  }


  ngOnInit(): void {
    this.courseDetailsService.getAllCourseDetails().subscribe((courseDetails)=>(
    this.courseDetails = courseDetails));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }


}
