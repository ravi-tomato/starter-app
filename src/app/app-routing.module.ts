import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCheckoutComponent } from './product-checkout/product-checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'checkout/:productId', component: ProductCheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}