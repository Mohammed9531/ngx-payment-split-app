import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitFormRowComponent } from './split-form-row.component';

describe('SplitFormRowComponent', () => {
  let component: SplitFormRowComponent;
  let fixture: ComponentFixture<SplitFormRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitFormRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitFormRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
