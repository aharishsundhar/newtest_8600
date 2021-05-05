import { Component, OnInit } from '@angular/core';
import { AllticketService } from './allticket.service';

@Component({
  selector: 'app-allticket',
  templateUrl: './allticket.component.html',
  styleUrls: ['./allticket.component.scss'],
})

export class AllticketComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'description', field: 'description'  },{ headerName: 'groups', field: 'groups'  },{ headerName: 'types', field: 'types'  },{ headerName: 'severity', field: 'severity'  },];
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
        private allticketService: AllticketService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.allticketService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}