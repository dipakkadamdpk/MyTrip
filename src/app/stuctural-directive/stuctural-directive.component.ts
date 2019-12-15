import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stuctural-directive',
  templateUrl: './stuctural-directive.component.html',
  styleUrls: ['./stuctural-directive.component.css']
})
export class StucturalDirectiveComponent implements OnInit {
  myText = true
  sports = ["cricket","football","chess"]
  dkObj = [{id:1,name:"Dipak"}]
  constructor() { }

  ngOnInit() {
  }

}
