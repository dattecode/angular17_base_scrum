import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../contract/product.contract';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "https://fakestoreapi.com/products"
  private _http = inject(HttpClient)

  getProducts(): Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.baseUrl)
  }

  getProductById(id:number):Observable<IProduct>{
    return this._http.get<IProduct>(`${this.baseUrl}/${id}`)
  }

}
