import { Component } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  person : Person = new Person;
  // errorResp : ApiResponse = new ApiResponse;
  errorResp: any = {};
  public constructor(private testService: TestService){   }
  
  registered(){
    console.log(this.person);

   this.testService.register(this.person).subscribe(
    (data:any)=>{
      console.log("Registered Successfully!"+data);
       alert("Registered");
       this.errorResp = {};
    },
    error=>{
      // console.log(error);
      if(error.status==400){
        this.errorResp = error.error;
      }
    }
   );
  }
}

