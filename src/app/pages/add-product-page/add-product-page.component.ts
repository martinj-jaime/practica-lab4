import { Component, OnInit } from '@angular/core';
import { ProductCategoryService, ProductService, ProductWithCategoryService } from '../../services';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductAndCategoryForm } from '../../models';
import { ProductCategory } from '../../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrl: './add-product-page.component.css'
})
export class AddProductPageComponent implements OnInit {
  product: ProductAndCategoryForm =  new ProductAndCategoryForm()
  productForm!: FormGroup
  categories!: ProductCategory[]

  constructor(
    private productService: ProductService,
    private productWithCategoryService: ProductWithCategoryService,
    private categoryService: ProductCategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listCategories()
    this.initForm()
  }

  async listCategories() {
    this.categories = await this.categoryService.apiGetProductCategories()
  }

  initForm() {
    this.productForm = new FormGroup({
      name: new FormControl(this.product.name, [Validators.required]),
      description: new FormControl(this.product.description, [Validators.required]),
      price: new FormControl(this.product.price, [Validators.required]),
      categoryId: new FormControl(this.product.productCategoryId, [Validators.required])
    })
  }

  onSuccess() {
    alert("Producto agregado")
    this.router.navigate([''])
  }

  async onSubmit() {
    const payload = {
      ...this.productForm.value,
      productCategoryId: parseInt(this.productForm.value.categoryId),
      price: parseInt(this.productForm.value.price)
    }
    // console.log("payload", payload)
    await this.productService.apiAddProduct(payload).then(() => this.onSuccess())
  }


}
