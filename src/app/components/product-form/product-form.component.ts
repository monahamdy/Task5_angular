import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  
  productId: any;
  product: any;
  flag=true;
  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  //validation productform
  productForm = new FormGroup ({
    productname: new FormControl('', [Validators.required]),
    productprice: new FormControl('', [Validators.required]),
    productquantity:new FormControl('',[Validators.required]),
    productid:new FormControl('',[Validators.required]),
    
  });

  ngOnInit(): void {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (this.productId != 0) {
      this.productService.getProductById(this.productId).subscribe({
        next: (response) => {
          this.product = response;
          this.productForm.controls['productname'].setValue(
            this.product.productname
          );
          this.productForm.controls['productprice'].setValue(this.product.productprice);
          
        },
      });
    }
  }
 
  get getProductname() {
    return this.productForm.controls['productname'];
  }
  get getProductprice() {
    return this.productForm.controls['productprice']
  }
  get getProductquantity(){
    return this.productForm.controls['productquantity']
  }
  get ProductId(){
    return this.productForm.controls['productid']
  }

  Form(e: Event): void {
    e.preventDefault();
    // if (this.productForm.status == 'VALID'&&(this.productId == 0)) {
    //   this.flag=false;
    //   // console.log(this.productForm.value);
    //   this.productService.addProduct(this.productForm.value).subscribe({
    //   next: (response) => {
    //     this.router.navigate(['/products'])
    //   },
    if (this.productId == 0) {
        this.productService.addProduct(this.productForm.value).subscribe();
      } else {
        // edit
        this.productService
          .editProduct(this.productId, this.productForm.value)
          .subscribe();
      }
      
    }

    // if (this.productId == 0) {
    //   this.productService.addProduct(this.productForm.value).subscribe();
    // } else {
    //   // edit
    //   this.productService
    //     .editProduct(this.productId, this.productForm.value)
    //     .subscribe();
    // }

  }

// Form(e: Event): void {
//   e.preventDefault();
//   if (this.productForm.status == 'VALID'&&(this.productId == 0)) {
//     this.flag=false;
//     // console.log(this.productForm.value);
//     this.productService.addProduct(this.productForm.value).subscribe();
//   } else  {
//     console.log('Please enter data');
//     this.productService.editProduct(this.productId, this.productForm.value)
//        .subscribe();

