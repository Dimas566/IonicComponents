import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Elemento } from 'src/app/interfaces/Interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private endpointUsers = "https://jsonplaceholder.typicode.com/users";

  constructor( private httClient: HttpClient) { }


  getUsers(){
    return this.httClient.get(this.endpointUsers);
  }

  getAlbumes(){
    return this.httClient.get<any[]>("https://jsonplaceholder.typicode.com/albums");
  }

  getMenuOpts(){
    return this.httClient.get<Elemento[]>('/assets/data/menu-opts.json');
  }

  getHeroes(){
    return this.httClient.get<Elemento[]>('/assets/data/superheroes.json')
           .pipe(
             delay( 1500)
           );
  }
}
