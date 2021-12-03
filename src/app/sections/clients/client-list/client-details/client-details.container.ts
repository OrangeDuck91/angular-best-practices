import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { Client } from '../../model/clients.model';
import { ClientService } from '../../service/clients.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.container.html',
  styleUrls: ['./client-details.container.css']
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
