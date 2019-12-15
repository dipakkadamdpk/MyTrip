import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive-demo',
  templateUrl: './attribute-directive-demo.component.html',
  styleUrls: ['./attribute-directive-demo.component.css']
})
export class AttributeDirectiveDemoComponent implements OnInit {

  public cOne = true;
  public cTwo = true;
  public cThree = true;
  public style = 'italic'
  public size = '30px'
  color = 'Yellow' 

  constructor() { }


  ngOnInit() {
  }

}
