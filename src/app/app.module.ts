import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main/main.component';
import { ProductsComponent } from './pages/products/products/products.component';
import { HeaderComponent } from './components/common/header/header/header.component';
import { FooterComponent } from './components/common/footer/footer/footer.component';
import { ProductCardComponent } from './components/common/product-card/product-card/product-card.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
