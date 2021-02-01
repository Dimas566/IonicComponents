import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Elemento } from 'src/app/interfaces/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private endpointUsers = "https://jsonplaceholder.typicode.com/users";

  constructor( private httClient: HttpClient) { }


  getUsers(){
    return this.httClient.get(this.endpointUsers);
  }

  getMenuOpts(){
    return this.httClient.get<Elemento[]>('/assets/data/menu-opts.json');
  }
}
