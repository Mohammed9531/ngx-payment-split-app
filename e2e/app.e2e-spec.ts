import { NgxPaymentSplitAppPage } from './app.po';

describe('ngx-payment-split-app App', () => {
  let page: NgxPaymentSplitAppPage;

  beforeEach(() => {
    page = new NgxPaymentSplitAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
