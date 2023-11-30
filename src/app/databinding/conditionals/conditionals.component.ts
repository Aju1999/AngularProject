import { Component } from '@angular/core';

@Component({
  selector: 'app-conditionals',
  templateUrl: './conditionals.component.html',
  styleUrls: ['./conditionals.component.css']
})
export class ConditionalsComponent {
  condition:boolean =true ; 
  hide(){
    this.condition = false;
  }
  show(){
    this.condition = true;
  }
}
