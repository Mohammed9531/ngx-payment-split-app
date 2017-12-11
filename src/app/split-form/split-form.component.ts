import { MONTHS } from './../app.constants';
import { SplitFormModel } from './split-form.model';
import { HEADERS, KEYS } from './split-form.constants';
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
  public keys: any[];
  public headers: string[];
  public billingMonth: any;
  public resources: any[] = [];

  @Input()
  public profiles: any[] = [];
  public months: any[] = [...MONTHS];
  public freeze: boolean = false;

  public splitFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.keys = [...KEYS];
    this.headers = [...HEADERS];
    this.buildResourceProfile();

    this.splitFormGroup = new FormGroup({
      billingData: new FormArray([]),
      billingMonth: new FormControl({
        value: this.months[0].value,
        disabled: false
      }, [Validators.required])
    });
    this.buildForm();
  }

  buildResourceProfile(): void {
    for (let i = 0; i < this.profiles.length; i++) {
      this.resources.push(
        new SplitFormModel({
          resourceName: this.profiles[i]
        })
      );
    }
  }

  buildForm(): void {
    const splitFormCtrls = <FormArray>this.splitFormGroup.controls['billingData'];

    this.resources.forEach((resource: SplitFormModel): void => {
      splitFormCtrls.push(this.buildIndividualForm(resource));
    });
  }

  buildIndividualForm(resource: any): FormGroup {
    return this.fb.group({
      resourceName: [resource.resourceName],
      taxes: [resource.taxes],
      eip: [resource.eip],
      total: [resource.total],
      basePay: [resource.basePay],
      adjustments: [resource.adjustments],
      others: [resource.others],
      miscServices: [resource.miscServices]
    });
  }

  onSubmit(event: MouseEvent, form: FormGroup): void {
    this.freeze = !this.freeze;
    this.updateView(this.freeze);
  }

  onModelChange(e: any, idx: number): void {
    const ev: any = <HTMLInputElement>e;
    this.resources[idx]['total'] += +(ev.target.value);
    this.updateTotal(idx);
  }

  updateTotal(idx: number): void {
    let total: number = 0;
    const formArr: FormArray = this.splitFormGroup.get('billingData') as FormArray;
    const activeProfile: any = formArr.controls[idx];

    Object.keys(activeProfile.controls).forEach(control => {
      const actCtrl: any = activeProfile.get(control).value;

      if (typeof actCtrl === 'number' && control !== 'total') {
        total += actCtrl;
      }
    });
    activeProfile.get('total').setValue(total);
  }

  updateView(display: boolean): void {
    this.splitFormGroup.get('billingMonth')[display ? 'disable' : 'enable']();

    this.keys.forEach(key => {
      if (!key.hideAlways) {
        key.hideInput = display;
      }
    });
  }
}
