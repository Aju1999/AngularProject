import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HeadfootModule } from '../headfoot/headfoot.module';
import { SessionStorageService } from 'ngx-webstorage';
import { AdminhomeComponent } from './adminpages/adminhome/adminhome.component';
import { UserhomeComponent } from './userpages/userhome/userhome.component';
import { ViewUsersComponent } from './adminpages/view-users/view-users.component';
import { UserdetailsComponent } from './userpages/userdetails/userdetails.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AdminhomeComponent,
    UserhomeComponent,
    ViewUsersComponent,
    UserdetailsComponent,
    
  ],
  imports: [
    CommonModule,FormsModule,
    HeadfootModule
  ],
  exports:[
    LoginComponent,
    SignupComponent,ViewUsersComponent
  ],
  providers:[SessionStorageService]
})
export class UsersModule { }
