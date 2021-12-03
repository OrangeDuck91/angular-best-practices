import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-poste-card',
  templateUrl: './employee-poste-card.component.html',
  styleUrls: ['./employee-poste-card.component.css']
})
export class EmployeePosteCardComponent implements OnInit {

  @Input()
  poste: string;
  @Input()
  mission: string;

  constructor() { }

  ngOnInit(): void {
  }

}
