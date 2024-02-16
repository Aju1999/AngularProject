import { Component } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { UserService } from 'src/app/service/UserService';
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
  mainErrors:any = "";
  public constructor(private userService: UserService){   }
  
  registered(){
    console.log(this.person);

   this.userService.register(this.person).subscribe(
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
      else {
        this.mainErrors =  error.error;
        this.errorResp = {};
      }
    }
   );
  }
}

