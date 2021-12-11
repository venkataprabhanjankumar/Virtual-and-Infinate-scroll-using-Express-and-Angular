import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OperationsService} from "../shared/operations.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute,private opservice: OperationsService) { }
  product : any = {}
  ngOnInit(): void {

    this.opservice.getProduct(parseInt(this.activatedroute.snapshot.paramMap.get('id') || '')).subscribe((result)=>{
      console.log(result)
      this.product = result
    })
  }

}
