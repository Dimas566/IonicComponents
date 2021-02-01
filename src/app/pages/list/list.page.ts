import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios : Observable <any>;

  @ViewChild(IonList) ionList : IonList;

  constructor( private dataService : DataService) { }

  ngOnInit() {

    /*this.dataService.getUsers().subscribe( resp => {
      console.log(resp);
    });*/
    this.usuarios = this.dataService.getUsers();
  }

  favorite(user){
    console.log('Favorite', user);
    this.ionList.closeSlidingItems();
  } 
  share(user){
    console.log('Share', user);
    this.ionList.closeSlidingItems();
  }
  delete(user){
    console.log('Delete', user.name);
    this.ionList.closeSlidingItems();
  }

}
