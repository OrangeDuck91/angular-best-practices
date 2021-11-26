import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../model/employees.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input()
  employees: Employee[];

  @Output()
  employeeSelected = new EventEmitter<Employee>();

  displayedColumns: string[] = ['firstName', 'lastName', 'poste', 'mission'];

  constructor() { }

  ngOnInit(): void {
  }

  goToDetail(row: Employee) {
    this.employeeSelected.emit(row);
  }
}
