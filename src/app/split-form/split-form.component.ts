import { SplitFormModel } from './split-form.model';
import { MONTHS } from './../app.constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'split-form',
  templateUrl: './split-form.component.html',
  styleUrls: ['./split-form.component.scss']
})
export class SplitFormComponent implements OnInit {
  public resources: any[];
  public headers: string[];
  public billingMonth: any[];
  public months: any[] = MONTHS;
  public freeze: boolean = false;
  constructor() { }

  ngOnInit() {
   this.billingMonth = this.months[0].value;

    console.log(new SplitFormModel())

   this.headers = [
     'Members',
     'Base',
     'Taxes',
     'EIP',
     'Misc Services',
     'Others',
     'Adjustments',
     'Total'
   ];

   this.resources = [
      {
        name: 'Shoukath',
        base: 0.00,
        taxes: 0.00,
        eip: 0.00,
        misc: 0.00,
        others: 0.00,
        adjstmts: 0.00,
        total: 0.00
      },
      {
        name: 'Sadru',
        base: 0.00,
        taxes: 0.00,
        eip: 0.00,
        misc: 0.00,
        others: 0.00,
        adjstmts: 0.00,
        total: 0.00
      }
   ];
  }
}
