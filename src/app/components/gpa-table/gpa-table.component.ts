import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material/table";

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
    if (this.newRow.course != "" && this.newRow.grade != "" && this.newRow.gpa != null) {
      const newDetailArray: gpa_detail[] = this.GPA_DATA;
      newDetailArray.push(this.newRow);
      this.myDataArray = [...newDetailArray];
      this.newRow = {course: "programing", grade: "A", gpa: 4.00};
    } else {
      console.log('Error adding info')
    }
  }

  setCurrentStyles() {
    return this.isFormVisible ? '#FF008E' : '#24A19C'
  }
}
