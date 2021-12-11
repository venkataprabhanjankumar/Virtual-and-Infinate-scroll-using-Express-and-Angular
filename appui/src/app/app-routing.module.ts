import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {ProductComponent} from "./product/product.component";
import {VscrollComponent} from "./vscroll/vscroll.component";

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent, pathMatch: 'full'},
  {path: 'product/:id', component: ProductComponent, pathMatch: 'full'},
  {path: 'vscroll', component: VscrollComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
