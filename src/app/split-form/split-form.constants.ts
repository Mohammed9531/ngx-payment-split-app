export const HEADERS: string[] = [
  'Members',
  'Base',
  'Taxes',
  'EIP',
  'Misc Services',
  'Others',
  'Adjustments',
  'Total'
];

// 'basePay',	'taxes',	'eip', 	'miscServices',	'others',	'adjustments'
export const KEYS: any[] = [
  {
    keyName: 'resourceName',
    hideAlways: true,
    hideInput: true
  },
  {
    keyName: 'basePay',
    hideAlways: false,
    hideInput: false
  },
  {
    keyName: 'taxes',
    hideAlways: false,
    hideInput: false
  },
  {
    keyName: 'eip',
    hideAlways: false,
    hideInput: false
  },
  {
    keyName: 'miscServices',
    hideAlways: false,
    hideInput: false
  },
  {
    keyName: 'others',
    hideAlways: false,
    hideInput: false
  },
  {
    keyName: 'adjustments',
    hideAlways: false,
    hideInput: false
  },
  {
    keyName: 'total',
    hideAlways: true,
    hideInput: true
  }
];
