import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'poste', 'mission'];

  /** Public service to be used in template -> bad */
  constructor(public employeService: EmployeeService) { }

  ngOnInit(): void {
  }

}
