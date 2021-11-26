import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { Employee } from 'src/app/models/employees.model';
import { EmployeeService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

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
