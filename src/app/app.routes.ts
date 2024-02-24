import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"products", component:ProductsComponent},
  {path:"products/:id", component:ProductsDetailsComponent},
  {path:"contact", component:ContactComponent},
];
