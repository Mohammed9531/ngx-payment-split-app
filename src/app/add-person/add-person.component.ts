import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {
  public activeIdx: number;
  public person: string = null;
  public persons: string[] = [];
  public editing: boolean = false;
  public submitted: boolean = false;

  @ViewChild('personForm')
  private personForm: NgForm;

  @Output()
  public onNextStep: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.persons = ['Shoukath', 'Sadru', 'Alam', 'Asif'];
  }

  public editPerson(person: string, idx: number): void {
    this.editing = true;
    this.activeIdx = idx;
    this.person = person;
  }

  public deletePerson(person: string, idx: number): void {
    this.persons.splice(idx, 1);
  }

  public onSubmit(event: MouseEvent, form: NgForm): void {
    if (form && form.submitted && form.valid) {
      if (this.editing) {
        this.editing = false;
        this.persons[this.activeIdx] = form.controls.personName.value;
      } else {
          this.persons.push(form.controls.personName.value);
      }

      this.person = '';
      this.personForm.resetForm();
    }
  }

  public goToNextStep(event: MouseEvent): void {
    this.onNextStep.emit(this.persons);
    // this.router.navigate(['\split']);
  }
}
