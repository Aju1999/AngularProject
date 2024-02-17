import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { UserService } from 'src/app/service/UserService';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  person : Person = new Person;
  // errorResp : ApiResponse = new ApiResponse;
  errorResp: any = {};
  mainErrors:any = "";
  userRole:any = [];

  public constructor(private userService: UserService){   }

  ngOnInit(): void {
    // this.userRole=["Admin","User"];
    this.populateData();
  }
  
  registered(){
    console.log(this.person);

   this.userService.register(this.person).subscribe(
    (data:any)=>{
      console.log("Registered Successfully!"+data);
      this.person= new Person();
      this.errorResp = {};
      alert("Registered");
       
    },
    error=>{
      console.log(error);
      if(error.status==400){
        this.errorResp = error.error;
      }
      else {
        this.mainErrors =  error.error;
        this.errorResp = {};
      }
      // console.log(this.errorResp);
    }
   );
  }
  populateData(){
    this.userService.getAllUserRoles().subscribe(
      (data:any)=>{
        this.userRole=data;
      },
      error=>{
          this.mainErrors =  error.error;
          this.errorResp = {};
      }
    );
  }
}

