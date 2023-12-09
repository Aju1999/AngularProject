import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  username:string="";
  password:string="";
  files:any;

  callValue(){
    console.log(this.username+" "+this.password)
  }
  fileChange(event:any){
    this.files = event.target.value;
    console.log(this.files);
  }
}
