import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model-two-way-data-binding-demo',
  templateUrl: './ng-model-two-way-data-binding-demo.component.html',
  styleUrls: ['./ng-model-two-way-data-binding-demo.component.css']
})
export class NgModelTwoWayDataBindingDemoComponent implements OnInit {

  name = "NG Model Demo"
  constructor() { }

  ngOnInit() {
  }

}
