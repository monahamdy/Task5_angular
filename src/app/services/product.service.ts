import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // web api using .net
  baseURL: string = ' http://localhost:3005/products';
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(this.baseURL);
  }

  getProductById(productId: any) {
    return this.http.get(`${this.baseURL}/${productId}`);
  }

  addProduct(product: any) {
    return this.http.post(this.baseURL, product);
  }

  deleteProduct(productId: any) {
    return this.http.delete(`${this.baseURL}/${productId}`);
  }
  editProduct(productId: any, product: any) {
    return this.http.put(`${this.baseURL}/${productId}`, product);
  }
}
