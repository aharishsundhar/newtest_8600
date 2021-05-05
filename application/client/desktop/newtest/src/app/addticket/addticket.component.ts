import { Component, OnInit } from '@angular/core';
import { AddticketService } from './addticket.service';

@Component({
  selector: 'app-addticket',
  templateUrl: './addticket.component.html',
  styleUrls: ['./addticket.component.scss'],
})

export class AddticketComponent implements OnInit {
    columnDefs: any = [];
    public tickets = {
        name: '',
        description: '',
        groups: '',
        severity: '',
        types: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private addticketService: AddticketService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.addticketService.GpCreate(this.tickets).subscribe(data => {
            this.tickets.name = ''
 	 	this.tickets.description = ''
 	 	this.tickets.groups = ''
 	 	this.tickets.severity = ''
 	 	this.tickets.types = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}