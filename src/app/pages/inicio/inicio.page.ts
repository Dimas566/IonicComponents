import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Elemento } from 'src/app/interfaces/Interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  elementos : Observable<Elemento[]>;

  constructor(private menuCtrl: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.elementos = this.dataService.getMenuOpts();
  }

  showMenu(){
    this.menuCtrl.open('first');
  }

}
