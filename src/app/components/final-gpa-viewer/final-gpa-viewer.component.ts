import { Component, OnInit } from '@angular/core';
import { ShareUpdatedCoursesService } from '../../services/share-updated-courses.service';
import FindClass from '../util/FindClass';
import { lblData } from '../util/lblData';
@Component({
  selector: 'app-final-gpa-viewer',
  templateUrl: './final-gpa-viewer.component.html',
  styleUrls: ['./final-gpa-viewer.component.scss'],
})
export class FinalGpaViewerComponent implements OnInit {
  label: lblData;
  GPA: number;
  msg: string;
  gif: string;
  constructor(private CourseService: ShareUpdatedCoursesService) {
    console.log('Hi constructor');
    this.GPA = this.CourseService.getFinalGpa();
    console.log('before bye constructor' + this.GPA);
    console.log('bye constructor');
  }

  ngOnInit(): void {
    console.log('hi ngOnInit');
    this.label = FindClass.findClass(this.GPA);
    this.msg = this.label.message;
    this.gif = this.label.gifImage;
    console.log('Hi ngOnInit');
  }
}
