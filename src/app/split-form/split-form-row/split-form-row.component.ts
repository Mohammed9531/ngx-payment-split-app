import { FormGroup, FormGroupName, ControlContainer, FormArray } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'split-form-row',
  templateUrl: './split-form-row.component.html',
  styleUrls: ['./split-form-row.component.scss']
})
export class SplitFormRowComponent implements OnInit {

  @Input()
  public form: FormGroup;

  @Input()
  public groupName: FormGroupName;

  @Input()
  public resource: any = {};

  @Input()
  public name: string = null;

  @Input()
  public isEditing: boolean = false;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit():void {
    this.form = <FormGroup>this.controlContainer.control;
  }
}
