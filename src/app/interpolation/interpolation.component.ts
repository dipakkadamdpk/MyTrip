import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  mytext = "Hello Dipak .. Interpolation example"
  constructor() {
   }
  ngOnInit() {
  }

  sendData(data:any)
  {
  console.log("Data is ",data)
  }

}
