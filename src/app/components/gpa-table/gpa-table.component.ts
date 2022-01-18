import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

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
  constructor() {
  }


  ngOnInit(): void {
  }

}
