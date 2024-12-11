import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import ProductCategoryService from './product-category.service';
import { ProductCategory, ProductWithCategory } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ProductWithCategoryService {

  constructor(
    private productService: ProductService,
    private productCategoryService: ProductCategoryService
  ) { }

  async apiGetProductsWithCategories(): Promise<ProductWithCategory[]> {
    const productsCategories: ProductWithCategory[] = []

    const categories: ProductCategory[] = await this.productCategoryService.apiGetProductCategories()
    await this.productService.apiGetProducts().subscribe({
      next: res => {
        res.forEach(product => {
          const category = categories.find(category => {
            return category.productCategoryId === product.productCategoryId
          })
          if(category) {
            productsCategories.push({
              ...product,
              categoryName: category.description
            })
          }
        })
      }
    })
    return productsCategories
  }

}
