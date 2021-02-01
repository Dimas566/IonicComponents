import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-check",
  templateUrl: "./check.page.html",
  styleUrls: ["./check.page.scss"],
})
export class CheckPage implements OnInit {
  data = [
    {
      name : 'primary',
      isChecked : false
    },
    {
      name : 'secondary',
      isChecked : true
    },
    {
      name : 'tertiary',
      isChecked : false
    },
    {
      name : 'success',
      isChecked : true
    }
  ];

  constructor() {}

  ngOnInit() {}

  onClick( d: any ) {
    console.log(d)
  }

  onShowData(){
    console.log(this.data);
  }
}
