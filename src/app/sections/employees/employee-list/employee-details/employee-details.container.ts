import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { Employee } from '../../model/employees.model';
import { EmployeeService } from '../../service/employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.container.html',
  styleUrls: ['./employee-details.container.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map(params => params.get('employeeId')),
        mergeMap((id: string) => this.employeeService.getEmployeeById(id))
      ).subscribe((employee) => this.employee = employee);
  }

}
