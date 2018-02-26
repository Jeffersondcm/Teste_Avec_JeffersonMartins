import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServiceProvider {

  api : string = 'http://api.salaovip.com.br';

  constructor(public http: Http) {}

      getData(){
        return this.http.get(this.api + '/salao/66/galeria').map(res => res.json())
      }
  function (data){
    data.json()
  }
  }
