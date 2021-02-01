import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  elementos: any[] = [];
  textoBuscar: string = '';

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.onLoadAlbums();
  }

  onSearchChange( event ) {
    this.textoBuscar = event.detail.value;
  }

  onLoadAlbums(){
   this.dataService.getAlbumes().subscribe( resp => {
    this.elementos = resp;
   });
  }

}
