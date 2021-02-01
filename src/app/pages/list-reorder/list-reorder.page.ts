import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes : string[] = ['Aquaman','SuperMan','Batman','Mujer maravilla', 'Flash'];

  public controlReorder : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  doReorder( event: any ){
    console.log(event)

   /* const moveItem = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, moveItem);

    event.detail.complete();*/
    
    this.personajes = event.detail.complete(this.personajes);


    console.log('After', this.personajes);
  }

}
