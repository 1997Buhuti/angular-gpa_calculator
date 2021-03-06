import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material/table";
import GPA_CAL from '../Util/GPA_CAL';
import {Output, EventEmitter} from '@angular/core';

export interface gpa_detail {
  course: string;
  grade: string;
  credits: number;
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
  @Output() newItemEvent = new EventEmitter<boolean>();
  finalGPA:number;
  isBtnClicked:boolean=false;

  GPA_DATA: gpa_detail[] = [
    {course: "Introduction to Programing", grade: "A", credits: 3, gpa: 12.00},
    {course: "Object Oriented Programing", grade: "A-", credits: 2, gpa: 7.4},
    {course: "Data Structures And Algorithms", credits: 4, grade: "B+", gpa: 13.2},
  ];
  text: string | undefined;

  columnsToDisplay: string[] = ["course", "grade", "credits", "gpa"];
  dataSource = this.GPA_DATA;
  isFormVisible: boolean = false;

  public newRow = {course: "programing", grade: "A", credits: 3, gpa: 12.00};
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
    this.isBtnClicked=false;
    if (this.newRow.course != "" && this.newRow.grade != "") {
      //const gpa = this.calculateGPA(this.newRow.grade);
      const gpa = GPA_CAL.calculateGPA(this.newRow.grade, this.newRow.credits);
      this.newRow.gpa = gpa;
      const newDetailArray: gpa_detail[] = this.GPA_DATA;
      newDetailArray.push(this.newRow);
      this.myDataArray = [...newDetailArray];
      this.newRow = {course: "programing", grade: "A", credits: 3, gpa: gpa};
    } else {
      console.log('Error adding info')
    }
  }

  onclickCalculate() {
    this.finalGPA=GPA_CAL.calculateFinalGPA(this.myDataArray);
    this.isBtnClicked=!this.isBtnClicked;
    console.log(this.finalGPA);
  }

  setCurrentStyles() {
    return this.isFormVisible ? '#FF008E' : '#24A19C'
  }

  changeStatus(val:boolean){
    this.newItemEvent.emit(val)
  }
}
