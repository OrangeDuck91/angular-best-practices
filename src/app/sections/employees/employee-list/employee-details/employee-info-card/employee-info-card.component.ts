import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-info-card',
  templateUrl: './employee-info-card.component.html',
  styleUrls: ['./employee-info-card.component.css']
})
export class EmployeeInfoCardComponent implements OnInit {

  @Input()
  firstName: string;
  @Input()
  lastName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
