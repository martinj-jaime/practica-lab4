import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// 
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { 
  AddProductPageComponent, 
  EditProductPageComponent, 
  ListProductsPageComponent, 
  LoginPageComponent
} from './pages';
import { 
  AuthService, 
  ProductCategoryService, 
  ProductService, 
  ProductWithCategoryService 
} from './services';

@NgModule({
  declarations: [
    AppComponent,
    EditProductPageComponent,
    ListProductsPageComponent,
    AddProductPageComponent,
    DeleteProductComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    // 
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(),
    ProductService, 
    ProductCategoryService,
    AuthService,
    ProductWithCategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
