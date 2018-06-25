import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
    { path: '', component: HomepageComponent, pathMatch: "full" },
    { path: 'shopping', loadChildren: './shopping/shopping.module#ShoppingModule'},
    { path: 'order', loadChildren: './order/order.module#OrderModule'},
    { path: 'not-found', component: PagenotfoundComponent},
    { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }