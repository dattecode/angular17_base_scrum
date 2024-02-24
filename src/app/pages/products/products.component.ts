import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../contract/product.contract';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  //datos
  productList: IProduct[] = [];

  //export del servicio para utilizar sus clases y valores
  private _apiService = inject(ApiService);
  private _router = inject(Router)

  //propiedades de ciclo
  ngOnInit(): void {
    this._apiService.getProducts().subscribe({
      next: (data: IProduct[]) => {
        this.productList = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  //logica
  navigate(id:number){
    this._router.navigate(["/products/", id])
  }
}
