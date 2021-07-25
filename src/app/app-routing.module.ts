import { ProductlistComponent } from './productlist/productlist.component';
import { AddProductComponent } from './productlist/add-product/add-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "", component: ProductlistComponent
  },
  {
  path: "add-product", component: AddProductComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
