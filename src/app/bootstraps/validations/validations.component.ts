import { Component } from '@angular/core';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent {
  validuser=false;

  onClickChangeClass(){
    this.validuser=true;
  }
}
