import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../model/clients.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {

  @Input()
  clients: Client[];

  @Output()
  clientSelected = new EventEmitter<Client>();

  displayedColumns: string[] = ['companyName', 'phone', 'address'];

  selectClient(client: Client) {
    this.clientSelected.emit(client);
  }

}
