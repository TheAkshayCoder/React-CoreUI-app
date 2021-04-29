import React from 'react';

const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));
const NewForm=React.lazy(()=>import('./views/NewForm/NewForm.js'))

const routes = [
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/forms', name: 'Forms', component: BasicForms, exact:true },
  { path:'/base/forms/newform', name:'NewForm', component:NewForm, exact:true }
];

export default routes;
