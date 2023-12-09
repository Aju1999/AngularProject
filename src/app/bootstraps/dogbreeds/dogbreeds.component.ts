import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-dogbreeds',
  templateUrl: './dogbreeds.component.html',
  styleUrls: ['./dogbreeds.component.css']
})
export class DogbreedsComponent implements OnInit {

  image:string=""

  constructor(private test:TestService){}

  ngOnInit(): void {
    this.test.findDog().subscribe(
      (resp:any)=>{
        this.image=resp.message;
      },(error)=>{
        console.log(error);
      }
    );
  }
  
  changeTheBreed() {
    this.test.findDog().subscribe(
      (resp:any)=>{
        this.image=resp.message;
      },(error)=>{
        console.log(error);
      }
    );
  }
}
