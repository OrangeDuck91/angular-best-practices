import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employees.model';
import { EmployeeService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  displayedColumns: string[] = ['firstName', 'lastName', 'poste', 'mission'];

  /** Public service to be used in template -> bad */
  constructor(
    public employeService: EmployeeService,
    private router: Router
  ) { }

  goToDetail(row: Employee) {
    console.log('row', row);
    this.router.navigate([`employees/${row.id}`])
  }

}
