import { Component, OnInit, OnChanges } from '@angular/core';
import { Customer } from '../customer';
import { DataService } from '../data.service';

@Component({
  selector: 'customers-list',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})

export class CustomersComponent implements OnInit, OnChanges {
  customers: Customer[];
  selectedCustomer: Customer;
  ativaDetalhes: boolean;

  constructor(private dataService: DataService) {

  }

   ngOnChanges() {
    this.ativaDetalhes = true;
  }

  getCustomers() {
     this.dataService.getCustomers().then(customers => this.customers = customers);
  }

  ngOnInit(): void {
     this.getCustomers();
  }
  
  onSelect(cust: Customer): void {
    this.selectedCustomer = cust;
    this.ativaDetalhes = true;
  }
}
