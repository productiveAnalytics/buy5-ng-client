import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  GET_ALL_PRODUCTS_URL = '//localhost:8080/products';
  
  constructor(private http : HttpClient) { }

  getAll() : Observable<any> {
    return this.http.get(this.GET_ALL_PRODUCTS_URL);
  }

}