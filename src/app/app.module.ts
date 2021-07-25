import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { FormsModule } from '@angular/forms';
import { RemoveHiphanPipe } from './productlist/product/remove-hiphan.pipe';
import { StarComponentComponent } from './productlist/product/starComponent/starComponent.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './productlist/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    RemoveHiphanPipe,
    StarComponentComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
