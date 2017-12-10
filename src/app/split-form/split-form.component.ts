import { MONTHS } from './../app.constants';
import { HEADERS } from './split-form.constants';
import { SplitFormModel } from './split-form.model';
import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'split-form',
  templateUrl: './split-form.component.html',
  styleUrls: ['./split-form.component.scss']
})
export class SplitFormComponent implements OnInit {
  public headers: string[];
  public billingMonth: any;
  public resources: any[] = [];

  @Input() public profiles: any[] = [];
  public months: any[] = MONTHS;
  public freeze: boolean = false;

  constructor() {}

  ngOnInit() {
    this.headers = HEADERS;
    this.buildResourceProfile();
    this.billingMonth = this.months[0].value;
  }

  buildResourceProfile(): void {
    for (let i = 0; i < this.profiles.length; i++) {
      this.resources.push(
        new SplitFormModel({
          resourceName: this.profiles[i]
        })
      );
    }
    console.log(this.resources);
  }
}
