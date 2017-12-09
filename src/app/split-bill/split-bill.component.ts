import * as _ from 'lodash';
import { NgForm } from '@angular/forms';
import { MONTHS } from './../app.constants';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'split-bill',
  templateUrl: './split-bill.component.html',
  styleUrls: ['./split-bill.component.scss']
})
export class SplitBillComponent implements OnInit {
  @Input()
  public persons: string[];
  public billingMonth: string;
  public months: any[] = MONTHS;
  public splittedData: any[]= [];
  public displayAddBill: boolean = false;

  constructor() { }

  ngOnInit() {}

  public onSubmit(event: MouseEvent, form: NgForm): void {
    if (form && form.submitted && form.valid) {
      const __form: any  = form.controls;
      const split: number = __form.billAmtField.value / this.persons.length;

      const fnGetRawData = (): any => {
        const mappedData = {};

        for (let i = 0; i < this.persons.length; i++) {
          mappedData[i] = split;
        }
        return mappedData;
      };

      // const __processdata = {
      //   [(this.months[__form.billingMonthField.value]['key']).toLowerCase()] : _.extend({}, {
      //     month: this.months[__form.billingMonthField.value]['key'],
      //   }, fnGetRawData())
      // };
      const __processdata = _.extend(fnGetRawData(), {
          month: this.months[__form.billingMonthField.value]['key']
        });
      this.splittedData.push(__processdata);
      console.log(this.splittedData);
    }
  }

  public getKeys(data: any): string[] {
    return _.keys(_.omit(data, 'month'));
  }
 }
