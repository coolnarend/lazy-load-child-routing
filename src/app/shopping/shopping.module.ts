import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { Detail1Component } from './shopping-list/detail1/detail1.component';

import { Routes, RouterModule } from '@angular/router';
import { Detail2Component } from './shopping-list/detail2/detail2.component';
import { Detail3Component } from './shopping-list/detail3/detail3.component';

const routes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent, children: [
      {path: 'detail1', component: Detail1Component},
      {path: '', redirectTo: 'detail1'},
      {path: 'detail2', component: Detail2Component},
      {path: 'detail3', component: Detail3Component}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShoppingListComponent, Detail1Component, Detail2Component, Detail3Component]
})
export class ShoppingModule { }
