import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gpa-table',
  templateUrl: './gpa-table.component.html',
})
export class GpaTableComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
