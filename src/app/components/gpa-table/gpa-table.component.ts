import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material/table";
import GPA_CAL from '../Util/GPA_CAL';

export interface gpa_detail {
  course: string;
  grade: string;
  gpa: number;
}

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-gpa-table',
  templateUrl: './gpa-table.component.html',
  styleUrls: ['gpa-table.component.scss'],
})
export class GpaTableComponent implements OnInit {
  GPA_DATA: gpa_detail[] = [
    {course: "Introduction to Programing", grade: "A", gpa: 4.00},
    {course: "Object Oriented Programing", grade: "A-", gpa: 4.00},
    {course: "Data Structures And Algorithms", grade: "B+", gpa: 3.30},
  ];
  text: string | undefined;

  columnsToDisplay: string[] = ["course", "grade", "gpa"];
  dataSource = this.GPA_DATA;
  isFormVisible: boolean = false;

  public newRow = {course: "programing", grade: "A", gpa: 4.00};
  public myDataArray: any;

  constructor() {
    this.myDataArray = new MatTableDataSource<gpa_detail>([...this.GPA_DATA]);
  }

  ngOnInit(): void {
  }

  onAddCourseClicked() {
    this.isFormVisible = !this.isFormVisible;
  }

  @ViewChild(MatTable) table: MatTable<any>;

  addSubjectDetail() {
    console.log(this.newRow.course, this.newRow.grade, this.newRow.gpa)
    if (this.newRow.course != "" && this.newRow.grade != "") {
      //const gpa = this.calculateGPA(this.newRow.grade);
      const gpa = GPA_CAL.calculateGPA(this.newRow.grade);
      this.newRow.gpa=gpa;
      const newDetailArray: gpa_detail[] = this.GPA_DATA;
      newDetailArray.push(this.newRow);
      this.myDataArray = [...newDetailArray];
      this.newRow = {course: "programing", grade: "A", gpa: gpa};
    } else {
      console.log('Error adding info')
    }
  }

  calculateGPA(grade) {

    switch (grade) {
      case "A":
        return 4.00;
      case "A-":
        return 3.7;
      case"B+":
        return 3.3;
      case"B":
        return 3.0;
      case"B-":
        return 2.7;
      case"C+":
        return 2.3;
      case"C":
        return 2.0;
    }

    return 0;
  }

  calculateFinalGPA(grade){

  }

  setCurrentStyles() {
    return this.isFormVisible ? '#FF008E' : '#24A19C'
  }
}
