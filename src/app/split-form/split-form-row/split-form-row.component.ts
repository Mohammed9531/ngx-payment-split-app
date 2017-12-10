import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'split-form-row',
  templateUrl: './split-form-row.component.html',
  styleUrls: ['./split-form-row.component.scss']
})
export class SplitFormRowComponent implements OnInit {

  @Input()
  public resource: any = {};

  @Input()
  public name: string = null;

  @Input()
  public isEditing: boolean = false;

  constructor() { }

  ngOnInit() {}
}
