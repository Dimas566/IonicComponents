import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  async showModal(){
  
    const modal = await this.modalCtrl.create({
      component : ModalInfoPage,
      componentProps: {
        nombre : 'Dimas',
        pais   : 'El Salvador'
      }
    });
    await modal.present();

    //const resp = await modal.onDidDismiss();
    const { data }  = await modal.onWillDismiss();
    console.log(data);
  }

}
