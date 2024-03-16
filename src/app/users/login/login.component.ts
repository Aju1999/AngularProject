import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { loginRequest } from 'src/app/models/Person';
import { LoginService } from 'src/app/service/LoginService';
import { UserService } from 'src/app/service/UserService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  fieldErrors:any ={};
  mainErrors:any ="";

  login : loginRequest =new loginRequest;
  // router: any;

  constructor(private userService: UserService,private loginService:LoginService,private router:Router){

  }
  ngOnInit(): void {
    
  }

  authenticate(){
    // console.log(Object.keys(this.fieldErrors).length);
    
    this.userService.login(this.login).subscribe(
      (data:any)=>{
        // console.log(data.token);
          this.loginService.loginUser(data.token);
          this.fieldErrors = {};
          this.mainErrors = "";

          this.loginService.getCurrentUser().subscribe(
            (data:any)=>{
              // console.log(data);
              this.loginService.setUser(data);
              // console.log(data);
              // console.log(this.loginService.getUserRole());
      
              if (this.loginService.getUserRole() === 'ADMIN') {
                this.loginService.loginStatusSubject.next(true);
                // this.router.navigate(['/admin/home']);
                this.router.navigate(['/admin/viewusers']);
                console.log("Admin is logged in.")
              }
              else if(this.loginService.getUserRole() === 'USER'){
                this.loginService.loginStatusSubject.next(true);
                this.router.navigate(['/user/home']);
                console.log("User is logged in.")
              }
            }
          );
      },
      error=>{
        console.log(error.status);
        if(error.status==400){
          this.fieldErrors = error.error;
        }
        else if(error.status==0){
          this.fieldErrors = {};
          this.mainErrors =  "Application Server is Unreachable.";
        }
        else {
          this.fieldErrors = {};
          this.mainErrors =  error.error;
        }
      }
     );
  }
}
