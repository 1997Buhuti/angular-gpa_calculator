import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-gpa_calculator';
  updatedCourseDetails;
  receiveCourseDetails($event){
    this.updatedCourseDetails = $event;
  }
}
