import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-fruit-demo',
  templateUrl: './ng-switch-fruit-demo.component.html',
  styleUrls: ['./ng-switch-fruit-demo.component.css']
})
export class NgSwitchFruitDemoComponent implements OnInit {
  Fruit = "Mango"
  constructor() { }

  ngOnInit() {
  }

}
