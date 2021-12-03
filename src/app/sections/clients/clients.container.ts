import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from './model/clients.model';
import { ClientService } from './service/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.container.html',
  styleUrls: ['./clients.container.css']
})
export class ClientsComponent implements OnInit {

  public clients: Observable<Client[]>;

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clients = this.clientService.getAllClients();
  }


  goToDetail(row: Client) {
    console.log('row', row);
    this.router.navigate([`clients/${row.id}`])
  }

}
