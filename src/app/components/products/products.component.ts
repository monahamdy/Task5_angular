import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: any;
  constructor(private productsService: ProductService) {
    this.products = this.productsService.getAllProducts().subscribe({
      next: (response: any) => {
        this.products = response;
      },
      error: (myError: any) => {
        console.log(myError);
      },
    });

}

deleteProductHandler(productId: number) {
  this.productsService.deleteProduct(productId).subscribe({
    next:(response)=> {
      this.products = this.products.filter(
        (product: any) => product.id != productId
      )
    },
  });
}
}
