import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {
  formatted_post_url: string;
  // /order/{userName}/{productName}/{orderQuantity}
  POST_ORDER_URL = '//localhost:8080/order/{userName}/{productName}/{orderQuantity}'; 

  constructor(private http : HttpClient) { }

  processOrder(username: string, productname: string, quantity: number) : Observable<object> 
  {
    console.log('POST: processOrder()');
    this.formatted_post_url = this.POST_ORDER_URL.replace('{userName}', username)
                                                 .replace('{productName}', productname)
                                                 .replace('{orderQuantity}', quantity.toString());
    console.log('POST: '+ this.formatted_post_url);
    return this.http.post(this.formatted_post_url, null);
  }

}