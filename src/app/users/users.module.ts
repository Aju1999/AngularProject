import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HeadfootModule } from '../headfoot/headfoot.module';
import { SessionStorageService } from 'ngx-webstorage';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,FormsModule,
    HeadfootModule
  ],
  exports:[
    LoginComponent,
    SignupComponent,
  ],
  providers:[SessionStorageService]
})
export class UsersModule { }
