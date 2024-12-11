import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
class ProductCategoryService {
  private readonly baseUrl: string = 'https://utn-lubnan-api-2.herokuapp.com'
  private readonly url: string = `${this.baseUrl}/api/ProductCategory`

  constructor(private http: HttpClient) { }

  apiGetProductCategories(): Promise<any> {
    return this.http.get(this.url).toPromise()
  }
}

export default ProductCategoryService
