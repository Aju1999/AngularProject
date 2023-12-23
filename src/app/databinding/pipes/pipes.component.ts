import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent 
implements OnInit
{
name: string[] = ['Ajay','Vijay','raj','rajnI'];

ngOnInit(): void {
  
  console.log(this.name.length);
  // pipes(
  //   (value:any)=>{
  //     value.toUpperCase;
  //   }
  // );
}
}
