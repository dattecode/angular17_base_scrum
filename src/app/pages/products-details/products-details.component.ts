import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../contract/product.contract';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css',
})
export class ProductsDetailsComponent implements OnInit {
  //variables
  loading: boolean = true;
  public product?: IProduct

  //injects
  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);

  //init para la carga de la data
  ngOnInit(): void {

    this._route.params.subscribe({
      next: (params: Params) => {
        this._apiService.getProductById(params['id']).subscribe({
          next: (data: IProduct) => {
            this.product = data
          },
          error: (e) => {
            console.log(e);
          },
        });
      },
    });

    setTimeout(() => {
      this.loading = !this.loading
    }, 1400);
  }

  
}
