import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatTable } from '@angular/material/table';
import GpaCal from '../util/GpaCal';
import IDGenerator from '../util/IDGenerator';
import { Gpa_Detail } from '../../IGpa_Detail';
import { ShareUpdatedCoursesService } from '../../services/share-updated-courses.service';
@Component({
  selector: 'app-gpa-form',
  templateUrl: './gpa-form.component.html',
  styleUrls: ['./gpa-form.component.scss'],
})
export class GpaFormComponent implements OnInit {
  @Output() onAddCourseDetail: EventEmitter<Gpa_Detail> =
    new EventEmitter<Gpa_Detail>();
  isFormVisible: boolean = false;
  isGPAVisible: boolean = false;
  finalGPA: string;
  text: string | undefined;

  public newRow = {
    course: 'programing',
    grade: 'A',
    credits: 3,
    gpa: 12.0,
    id: '1008',
  };
  public myDataArray: any;

  constructor(private CourseService: ShareUpdatedCoursesService) {}

  ngOnInit(): void {}

  onAddCourseClicked() {
    this.isFormVisible = !this.isFormVisible;
  }

  @ViewChild(MatTable) table: MatTable<any>;
  newDetailArray: Gpa_Detail[] = [];
  addSubjectDetail() {
    this.isGPAVisible = false;
    if (this.newRow.course != '' && this.newRow.grade != '') {
      const gpa = GpaCal.calculateGPA(this.newRow.grade, this.newRow.credits);
      let id = IDGenerator.generateId();
      this.newRow.gpa = gpa;
      this.newRow.id = id;
      this.newDetailArray.push(this.newRow);
      this.myDataArray = [...this.newDetailArray];
      this.newRow = {
        course: 'programing',
        grade: 'A',
        credits: 3,
        gpa: gpa,
        id: id,
      };
      this.onAddCourseDetail.emit(this.myDataArray);
    } else {
      alert('All the mandatory fields must be filled');
    }
  }

  isCalculateFinalGPAClicked() {
    this.finalGPA = GpaCal.calculateFinalGPA(this.myDataArray);
    this.isGPAVisible = !this.isGPAVisible;
    this.CourseService.setFinalGpa(parseFloat(this.finalGPA));
  }

  setCurrentStyles() {
    return this.isFormVisible ? '#FF008E' : '#24A19C';
  }
}
