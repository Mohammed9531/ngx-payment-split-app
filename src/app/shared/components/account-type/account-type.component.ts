import { Component, Input } from '@angular/core';
import { Account, ACCOUNTS } from './../../constants';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.scss']
})
export class AccountTypeComponent {
  @Input()
  private data: any;

  private activeAccount: Object = {};
  private accounts: Account[] = ACCOUNTS;

  constructor() { }

  protected onAccountSelect(ca: Account): void {
    this.activeAccount = ca;
  }
}
