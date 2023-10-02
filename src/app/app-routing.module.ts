import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main/main.component';
import { ProductsComponent } from './pages/products/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: '*',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
