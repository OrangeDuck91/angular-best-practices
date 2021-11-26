import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { Client } from 'src/app/models/clients.model';
import { ClientService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  client: Client;

  constructor(private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map(params => params.get('clientId')),
        mergeMap((id: string) => this.clientService.getClientById(id))
      ).subscribe((client) => this.client = client);
  }

}
