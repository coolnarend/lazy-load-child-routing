import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { Detail1Component } from './order-list/detail1/detail1.component';

import { Routes, RouterModule } from '@angular/router';
import { Detail2Component } from './order-list/detail2/detail2.component';

const routes: Routes = [
  { path: 'order-list', component: OrderListComponent, children: [
      {path: 'detail1', component: Detail1Component},
      {path: '', redirectTo: 'detail1'},
      {path: 'detail2', component: Detail2Component}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderListComponent, Detail1Component, Detail2Component]
})
export class OrderModule { }
