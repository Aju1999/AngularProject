import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-open-api',
  templateUrl: './open-api.component.html',
  styleUrls: ['./open-api.component.css']
})
export class OpenAPIComponent implements  OnInit{
  constructor(private test: TestService){ }
  fact:String="";
  ngOnInit(): void {
    this.test.fact().subscribe(
      (resp:any)=>{
        console.log(resp.fact);
        this.fact = resp.fact;
      }
    );
  }
}
