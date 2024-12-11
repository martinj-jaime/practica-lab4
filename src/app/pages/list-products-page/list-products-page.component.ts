import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductWithCategory } from '../../types';
import { ProductService } from '../../services';
import { ProductWithCategoryService } from '../../services/product-with-category.service';

@Component({
  selector: 'app-list-products-page',
  templateUrl: './list-products-page.component.html',
  styleUrl: './list-products-page.component.css'
})
export class ListProductsPageComponent implements OnInit {
  products: Product[] = []
  productsTest: ProductWithCategory[] = []
  
  constructor(
    private productService: ProductService,
    private productWithCategoryService: ProductWithCategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listProducts()
    this.listProductsTest()
  }

  onSuccess(products: Product[]) {
    this.products = products
  }

  async listProductsTest() {
    const res: ProductWithCategory[] = await this.productWithCategoryService.apiGetProductsWithCategories()
    this.productsTest = res
  }

  listProducts() {
    this.productService.apiGetProducts().subscribe(
      {
        next: (products) => this.onSuccess(products)
      }
    )
  }

  onEdit(productId: number) {
    this.router.navigate(['edit', productId])
  }

  onDelete(productId: number) {
    this.productService.apiDeleteProduct(productId).then(() => {
      alert("Producto eliminado")
      this.listProducts()
    })
  }

  onAdd() {
    this.router.navigate(["add"])
  }
}
