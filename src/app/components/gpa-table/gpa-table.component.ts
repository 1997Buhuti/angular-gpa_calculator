import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material/table";
import GpaCal from '../util/GpaCal';

export interface gpa_detail {
  course: string;
  grade: string;
  credits:number;
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
    {course: "Introduction to Programing", grade: "A", credits:3 , gpa: 12.00},
    {course: "Object Oriented Programing", grade: "A-", credits:2, gpa: 7.4},
    {course: "Data Structures And Algorithms", credits:4, grade: "B+", gpa: 13.2},
  ];
  text: string | undefined;

  columnsToDisplay: string[] = ["course", "grade", "credits","gpa"];
  dataSource = this.GPA_DATA;
  isFormVisible: boolean = false;
  isGPAVisible: boolean = false;
  finalGPA:string;

  public newRow = {course: "programing", grade: "A", credits:3, gpa: 12.00};
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
    this.isGPAVisible=false;
    if (this.newRow.course != "" && this.newRow.grade != "") {
      //const gpa = this.calculateGPA(this.newRow.grade);
      const gpa = GpaCal.calculateGPA(this.newRow.grade,this.newRow.credits);
      this.newRow.gpa=gpa;
      const newDetailArray: gpa_detail[] = this.GPA_DATA;
      newDetailArray.push(this.newRow);
      this.myDataArray = [...newDetailArray];
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
