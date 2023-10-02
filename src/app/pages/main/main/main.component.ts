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
  popularProducts!: IProduct[];
  selectBarOptions!: any;

  ngOnInit(): void {
    this.productService.getProducts().subscribe((popularProducts) => {
      this.popularProducts = popularProducts;
    });
    this.productService.getSelectBarOptions().subscribe((options: any) => {
      this.selectBarOptions = options.items;
    })
  }
}
