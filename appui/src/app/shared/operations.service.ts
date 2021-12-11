import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable,throwError} from "rxjs";
import {retry,catchError} from 'rxjs/operators'

export interface Product{
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: object
}

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private httpClient: HttpClient) { }
  httpHeaders = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        "Access-Control-Allow-Origin": "*"
      }),
    }
  url1 = "http://127.0.0.1:3000/getproducts"
  url2 = "http://127.0.0.1:3000/getproduct"
  getProducts(): Observable<Product []>{
    return this.httpClient.get<Product []>(this.url1,this.httpHeaders)
      .pipe(
        retry(1),
        catchError((err => {
          console.log(err)
          return throwError(err)
        }))
      )
  }
  getProduct(id:number): Observable<Product>{
    return this.httpClient.get<Product>(this.url2+"/"+id.toString(),this.httpHeaders)
      .pipe(
        retry(1),
        catchError(err => {
          return throwError(err)
        })
      )
  }

}
