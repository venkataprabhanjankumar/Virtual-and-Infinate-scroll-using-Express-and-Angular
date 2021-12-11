import { Component, OnInit } from '@angular/core';
import {OperationsService} from "../shared/operations.service";

@Component({
  selector: 'app-vscroll',
  templateUrl: './vscroll.component.html',
  styleUrls: ['./vscroll.component.css']
})
export class VscrollComponent implements OnInit {

  products: any = []

  constructor(private opservice: OperationsService) { }

  ngOnInit(): void {
    this.opservice.getProducts().subscribe((result)=>{
      this.products = result
      console.log(this.products)
    })
  }

}
