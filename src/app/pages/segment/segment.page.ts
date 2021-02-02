import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes : Observable<any>;
  houseType : string = '';

  constructor( private dataService : DataService ) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event){

    /*if ( event.detail.value === 'DC comics') {
      this.houseType = event.detail.value;
      console.log(event.detail.value);
    } else if (event.detail.value === 'Marvel comics'){
      this.houseType = event.detail.value;
      console.log(event.detail.value);
    } else if ( event.detail.value === 'todos'){
      this.houseType = '';
      console.log(event.detail.value);
    }*/
    if ( event.detail.value === 'todos'){
      return this.houseType = '';
    }

    this.houseType = event.detail.value;
    
  }

}
