import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from './model/employees.model';
import { EmployeeService } from './service/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.container.html',
  styleUrls: ['./employees.container.css']
})
export class EmployeesComponent implements OnInit {

  public employees: Observable<Employee[]>

  constructor(
    public employeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.employees = this.employeService.getAllEmployees();
  }

  goToDetail(row: Employee) {
    console.log('row', row);
    this.router.navigate([`employees/${row.id}`])
  }
}
