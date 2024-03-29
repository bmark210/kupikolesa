import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {}

  getSelectBarOptions() {
    return this.http.get<IProduct[]>('https://kupikolesa.it-trends.ru/api/Option/GetAll?categoryId=5&displayType=1');
  }

  getProducts() {
    return this.http.get<IProduct[]>('https://kupikolesa.it-trends.ru/api/product/Popular');
  }
}
