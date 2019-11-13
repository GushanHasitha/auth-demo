import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp) {
  }

  getOrders() { 
    // let headers = new Headers();
    // let token = localStorage.getItem('token');

    // headers.append('Authorization', 'Bearer ' + token);
    // let options = new RequestOptions({ headers: headers});
    return this.authHttp.get('/api/orders')
      .map(response => response.json());
  }
}
