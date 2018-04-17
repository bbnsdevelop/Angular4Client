import { Component, Input, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { DataService } from '../data.service';

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  providers: [DataService]
})

export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer;

  @Input() ativaDetalhes;

  constructor(private dataService: DataService) {}
  
  ngOnInit(): void {
    this.ativaDetalhes = true;
    console.log(this.ativaDetalhes+ 'init');
  }

  delete(): void {
    this.dataService.delete(this.customer.id).then(() => this.goBack());
  }

  goBack(): void {
    window.location.replace('');
  }

  disableDetail(){
    console.log(this.ativaDetalhes + 'desa');
    this.ativaDetalhes = false;
  }
}
