import { Component, OnInit } from '@angular/core';

export interface gpa_detail {
  course: string;
  grade: string;
  gpa: number;
}
const GPA_DATA: gpa_detail[] = [
  { course: "Introduction to Programing", grade: "A" ,gpa:4.00},
  { course: "Object Oriented Programing", grade: "A-" ,gpa:4.00},
  { course: "Data Structures And Algorithms", grade: "B+" ,gpa:3.30},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-gpa-table',
  templateUrl: './gpa-table.component.html',
  styleUrls: ['gpa-table.component.scss'],
})
export class GpaTableComponent implements OnInit {

  columnsToDisplay: string[] = ["course", "grade","gpa"];
  dataSource = GPA_DATA;

  public newRow = {subject: "Introduction to Programing", grade: "A" ,gpa:4.00};
  public myDataArray: any;
  constructor() {
    //this.myDataArray = new MatTableDataSource<gpa_detail>([...this.GPA_DATA]);
  }


  ngOnInit(): void {
  }

}
