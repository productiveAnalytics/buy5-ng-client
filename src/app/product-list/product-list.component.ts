import { Component, OnInit } from '@angular/core';

import { ProductService } from '../common/product/product.service';
import { OrderService } from '../common/order/order.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Array<any>;
  username : string = "lchawathe";
  private quantity : number = 5;

  private updatedProduct : any;

  constructor(private productService : ProductService
             ,private orderService : OrderService) {
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAll()
                       .subscribe ( data => { this.products = data; } );
  }

  processOrder(userName : string, productName : string) {
    console.log('username='+ userName +'---productname='+ productName);
    this.orderService.processOrder(userName, productName, this.quantity)
                     .subscribe ();
    this.loadProducts();
  }

}
