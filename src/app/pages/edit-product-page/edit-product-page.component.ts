import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services';
import { Product } from '../../types';

@Component({
  selector: 'app-edit-product-page',
  templateUrl: './edit-product-page.component.html',
  styleUrl: './edit-product-page.component.css'
})
export class EditProductPageComponent implements OnInit {
  product!: Product
  productForm!: FormGroup

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  get isFormLoaded() {
    return this.productForm instanceof FormGroup
  }

  get nameControl() {
    return this.productForm.get('name')
  }

  get descriptionControl() {
    return this.productForm.get('description')
  }

  get priceControl() {
    return this.productForm.get('price')
  }

  ngOnInit(): void {
    const productId: string | null = this.route.snapshot.paramMap.get('id')
    if(productId != null) {
      this.productService.apiGetProduct(parseInt(productId)).subscribe({
        next: (product: Product) => this.onSuccess(product)
      })
    }
  }
  
  initForm(product: Product) {
    this.productForm = new FormGroup({
      name: new FormControl(product?.name, [Validators.required]),
      description: new FormControl(product?.description, [Validators.required]),
      price: new FormControl(product?.price, [Validators.required])
    })
  }

  onSuccess(product: Product) {
    this.product = product
    this.initForm(product)
  }

  async onSubmit() {
    const payload = {
      ...this.product,
      ...this.productForm.value
    }
    await this.productService.apiUpdateProduct(payload).then(() => {
      alert("Producto actualizado")
      this.router.navigate([''])
    })
  }

}
