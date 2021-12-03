import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-info-card',
  templateUrl: './client-info-card.component.html',
  styleUrls: ['./client-info-card.component.css']
})
export class ClientInfoCardComponent {

  @Input()
  companyName: string;

}
