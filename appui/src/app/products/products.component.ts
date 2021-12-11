import { Component, OnInit } from '@angular/core';
import {OperationsService} from "../shared/operations.service";
import {Product} from "../shared/operations.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private opservice: OperationsService) { }

  products : any = []
  throttle = 5;
  distance = 5;
  pid = 1;
  isItems = true
  itemsNone = false

  ngOnInit(): void {
    this.opservice.getProduct(this.pid).subscribe((result)=>{
      this.products.push(result)
      console.log(this.products)
    })
  }

  onScroll(): void {
      if(this.pid>=20){
        this.isItems = false
        this.itemsNone = true
      }
      else{
        this.opservice.getProduct(this.pid++).subscribe((result)=>{
          console.log(result)
          this.products.push(result)
        })
      }
  }

}
