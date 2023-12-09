import { Component } from '@angular/core';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-genderindentity',
  templateUrl: './genderindentity.component.html',
  styleUrls: ['./genderindentity.component.css']
})
export class GenderindentityComponent {
  gender:string = "";

  constructor(private test: TestService){}

  guessGender(name:string){
    // console.log(name);
    if(name.length !=0){
      this.test.findGender(name).subscribe(
        (resp:any)=>{
          this.gender = resp.gender.toUpperCase();
        }
      );
    }else{
      this.gender ="Enter Name";
    }   
  }
}
