import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@app/modules/product/models/product.model';

//fetch data process
@Injectable()
export class ProductService {
    url = 'http://localhost:3000/products'
    fetchProducts() {
        return this.http.get<Product[]>(this.url);
    }

    fetchProduct(id: string) {
        return this.http.get<Product>(`${this.url}/${id}`);
    }

    constructor(private http: HttpClient) {
    }
}
