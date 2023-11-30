import { Component, HostListener } from '@angular/core';
// import { Event } from '@angular/router';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {

  name = this.getProjectName();
  
  test: any;
  test1: any;
  val:boolean = true;

  getProjectName(){
    return 'AngularProject';
  }
  ls = ['ajy','vijay','raj'];

  printName(){
    console.log(this.test);
  }
  valueFromTextBox(evt:any){
    this.test1 = evt;
    console.log();
  }
  textBoxOn(){
  this.val= false;
  }
  textBoxOff(){
    this.val=true;
  }
}
