import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/sections/clients/model/clients.model';
import { ClientService } from 'src/app/sections/clients/service/clients.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {

  displayedColumns: string[] = ['companyName', 'phone', 'address'];

  /** Public service to be used in template -> bad */
  constructor(
    public clientService: ClientService,
    private router: Router
  ) { }

  goToDetail(row: Client) {
    console.log('row', row);
    this.router.navigate([`clients/${row.id}`])
  }

}
