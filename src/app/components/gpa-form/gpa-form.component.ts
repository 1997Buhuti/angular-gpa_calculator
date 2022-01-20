import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable} from "@angular/material/table";
import GpaCal from "../util/GpaCal";

@Component({
  selector: 'app-gpa-form',
  templateUrl: './gpa-form.component.html',
  styleUrls: ['./gpa-form.component.scss']
})
export class GpaFormComponent implements OnInit {

  isFormVisible: boolean = false;
  isGPAVisible: boolean = false;
  finalGPA:string;
  text: string | undefined;
  //dataSource = this.GPA_DATA;

  public newRow = {course: "programing", grade: "A", credits:3, gpa: 12.00};
  public myDataArray: any;
  constructor() { }

  ngOnInit(): void {
  }
  onAddCourseClicked() {
    this.isFormVisible = !this.isFormVisible;
  }

  @ViewChild(MatTable) table: MatTable<any>;

  addSubjectDetail() {
    this.isGPAVisible=false;
    if (this.newRow.course != "" && this.newRow.grade != "") {
      //const gpa = this.calculateGPA(this.newRow.grade);
      const gpa = GpaCal.calculateGPA(this.newRow.grade,this.newRow.credits);
      this.newRow.gpa=gpa;
      //const newDetailArray: Gpa_Detail[] = this.GPA_DATA;
      //newDetailArray.push(this.newRow);
      //this.myDataArray = [...newDetailArray];
      this.newRow = {course: "programing", grade: "A", credits:3, gpa: gpa};
    } else {
      console.log('Error adding info')
    }
  }

  isCalculateFinalGPAClicked(){
    this.finalGPA = GpaCal.calculateFinalGPA(this.myDataArray);
    console.log(this.finalGPA);
    this.isGPAVisible=!this.isGPAVisible;
  }

  setCurrentStyles() {
    return this.isFormVisible ? '#FF008E' : '#24A19C'
  }
}
