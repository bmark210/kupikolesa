import { IProduct } from 'src/app/interfaces/IProduct';
import { ProductsService } from './../../../services/products-service.service';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(
    @Inject(ProductsService) private productService: ProductsService
  ) {}
  products!: IProduct[];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      console.log(products);
      this.products = products;
    });
  }
}
