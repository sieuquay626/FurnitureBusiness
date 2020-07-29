export const TYPE_MESSAGE = {
  WARNING: { value: 'warning', clsName: 'fa fa-exclamation-triangle' },
  ERORR: { value: 'error', clsName: 'fa fa-exclamation' },
  SUCCESS: { value: 'success', clsName: 'fa fa-thumbs-up' },
};

export const LIST_NOTIFICATION = [
  {
    id: 0,
    type: TYPE_MESSAGE.SUCCESS.value,
    icon: TYPE_MESSAGE.SUCCESS.clsName,
    title: 'You have new order!',
    content:
      'Are your going to meet me tonight, Sesame snaps lollipop macaroon croissant cheesecake pastry cupcake.',
    time: '9 hours ago',
    position: [{ value: 'frontend' }, { value: 'backend' }, { value: 'doc' }],
  },
  {
    id: 1,
    type: TYPE_MESSAGE.SUCCESS.value,
    icon: TYPE_MESSAGE.SUCCESS.clsName,
    title: 'You are Awsome!',
    content:
      'You got new order, now, Sesame snaps lollipop macaroon croissant cheesecake pastry cupcake.',
    time: '1 hours ago',
    position: [{ value: 'frontend' }, { value: 'doc' }],
  },
  {
    id: 2,
    type: TYPE_MESSAGE.WARNING.value,
    icon: TYPE_MESSAGE.WARNING.clsName,
    title: 'Please check mail to update!',
    content:
      'John Dan just send you 2 email, Sesame snaps lollipop macaroon croissant cheesecake pastry cupcake.',
    time: '2 minute ago',
    position: [{ value: 'frontend' }, { value: 'backend' }, { value: 'doc' }],
  },
  {
    id: 3,
    type: TYPE_MESSAGE.SUCCESS.value,
    icon: TYPE_MESSAGE.SUCCESS.clsName,
    title: 'Chocolate in valentine day',
    content:
      'Food for valentine day so good, Sesame snaps lollipop macaroon croissant cheesecake pastry cupcake.',
    time: '1 day ogo',
    position: [
      { value: 'frontend' },
      { value: 'backend' },
      { value: 'doc' },
      { value: 'bug' },
    ],
  },
  {
    id: 4,
    type: TYPE_MESSAGE.ERORR.value,
    icon: TYPE_MESSAGE.ERORR.clsName,
    title: 'Erorr the task to fix',
    content:
      'Server have 99% CPU, Sesame snaps lollipop macaroon croissant cheesecake pastry cupcake.',
    time: 'Today',
    position: [{ value: 'bug' }],
  },
  {
    id: 5,
    type: TYPE_MESSAGE.SUCCESS.value,
    icon: TYPE_MESSAGE.SUCCESS.clsName,
    title: 'You are Awsome!',
    content:
      'You got new order, now, Sesame snaps lollipop macaroon croissant cheesecake pastry cupcake.',
    time: '1 hours ago',
    position: [{ value: 'frontend' }, { value: 'backend' }, { value: 'doc' }],
  },
  {
    id: 6,
    type: TYPE_MESSAGE.WARNING.value,
    icon: TYPE_MESSAGE.WARNING.clsName,
    title: 'How are you doing, today',
    content:
      'Do you need a friend ?, Sesame snaps lollipop macaroon croissant cheesecake pastry cupcake.',
    time: 'Just now',
    position: [{ value: 'frontend' }, { value: 'backend' }, { value: 'doc' }],
  },
  {
    id: 7,
    type: TYPE_MESSAGE.ERORR.value,
    icon: TYPE_MESSAGE.ERORR.clsName,
    title: 'Erorr the task to fix',
    content:
      'Server have 99% CPU, Sesame snaps lollipop macaroon croissant cheesecake pastry cupcake.',
    time: 'Today',
    position: [{ value: 'frontend' }, { value: 'backend' }],
  },
];

export const LIST_TICKET = [
  {
    id: '5ef1c87a30ea0daafc43d3e3',
    code: '#WEJIDKBBC',
    state: 'SOLVE',
    title: 'Urgent: Shipping Invoices Required',
    content:
      'Hi team, i need the latest Shipping invoices for the following package IDs, 1. 133442FDG 2,3435',
    priority: 'LOW',
    category: 'Jewel Lindsey',
    due_date: '19-02-2034',
    assignee: 'Elisa Rowe',
  },
  {
    id: '5ef1c87ac6cdc9ae48490581',
    code: '#WEJIDKBBC',
    state: 'CLOSED',
    title: 'Urgent: Shipping Invoices Required',
    content:
      'Hi team, i need the latest Shipping invoices for the following package IDs, 1. 133442FDG 2,3435',
    priority: 'LOW',
    category: 'Alisha Mack',
    due_date: '19-02-2034',
    assignee: 'Blankenship Hebert',
  },
  {
    id: '5ef1c87aa32eebcf541a8dc6',
    code: '#WEJIDKBBC',
    state: 'NEW',
    title: 'Urgent: Shipping Invoices Required',
    content:
      'Hi team, i need the latest Shipping invoices for the following package IDs, 1. 133442FDG 2,3435',
    priority: 'LOW',
    category: 'Katheryn Velez',
    due_date: '19-02-2034',
    assignee: 'Frye Serrano',
  },
  {
    id: '5ef1c87a240e0ff0274f69ac',
    code: '#WEJIDKBBC',
    state: 'SOLVE',
    title: 'Urgent: Shipping Invoices Required',
    content:
      'Hi team, i need the latest Shipping invoices for the following package IDs, 1. 133442FDG 2,3435',
    priority: 'HIGH',
    category: 'Kidd Nash',
    due_date: '19-02-2034',
    assignee: 'Francis Marks',
  },
  {
    id: '5ef1c87a29132f24dbba5cf2',
    code: '#WEJIDKBBC',
    state: 'SOLVE',
    title: 'Urgent: Shipping Invoices Required',
    content:
      'Hi team, i need the latest Shipping invoices for the following package IDs, 1. 133442FDG 2,3435',
    priority: 'HIGH',
    category: 'Isabel Garcia',
    due_date: '19-02-2034',
    assignee: 'Haley Ballard',
  },
  {
    id: '5ef1c87ab25e5b2a88e2bc60',
    code: '#WEJIDKBBC',
    state: 'SOLVE',
    title: 'Urgent: Shipping Invoices Required',
    content:
      'Hi team, i need the latest Shipping invoices for the following package IDs, 1. 133442FDG 2,3435',
    priority: 'HIGH',
    category: 'Hurst Rivas',
    due_date: '19-02-2034',
    assignee: 'Velasquez Hamilton',
  },
  {
    id: '5ef1c87a83e1f44fe3e45c58',
    code: '#WEJIDKBBC',
    state: 'NEW',
    title: 'Urgent: Shipping Invoices Required',
    content:
      'Hi team, i need the latest Shipping invoices for the following package IDs, 1. 133442FDG 2,3435',
    priority: 'HIGH',
    category: 'Dolly Higgins',
    due_date: '19-02-2034',
    assignee: 'Yesenia Vang',
  },
];
