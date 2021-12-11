import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import {OperationsService} from "./shared/operations.service";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {ScrollingModule} from "@angular/cdk/scrolling";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VscrollComponent } from './vscroll/vscroll.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    VscrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    ScrollingModule,
    BrowserAnimationsModule,
  ],
  providers: [OperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
