import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitBillComponent } from './split-bill.component';

describe('SplitBillComponent', () => {
  let component: SplitBillComponent;
  let fixture: ComponentFixture<SplitBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
