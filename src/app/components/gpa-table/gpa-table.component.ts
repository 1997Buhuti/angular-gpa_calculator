import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material/table";
import GpaCal from '../util/GpaCal';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-gpa-table',
  templateUrl: './gpa-table.component.html',
  styleUrls: ['gpa-table.component.scss'],
})
export class GpaTableComponent implements OnInit {
  // GPA_DATA: gpa_detail[] = [
  //   {course: "Introduction to Programing", grade: "A", credits:3 , gpa: 12.00},
  //   {course: "Object Oriented Programing", grade: "A-", credits:2, gpa: 7.4},
  //   {course: "Data Structures And Algorithms", credits:4, grade: "B+", gpa: 13.2},
  // ];
  // text: string | undefined;
  //
  // columnsToDisplay: string[] = ["course", "grade", "credits","gpa"];
  // dataSource = this.GPA_DATA;
  // isFormVisible: boolean = false;
  // isGPAVisible: boolean = false;
  // finalGPA:string;
  //
  // public newRow = {course: "programing", grade: "A", credits:3, gpa: 12.00};
  // public myDataArray: any;

  constructor() {
    //this.myDataArray = new MatTableDataSource<gpa_detail>([...this.GPA_DATA]);
  }

  ngOnInit(): void {
  }


}
