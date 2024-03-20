import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { DogbreedsComponent } from './dogbreeds/dogbreeds.component';
import { ValidationsComponent } from './validations/validations.component';
import { HeadfootModule } from '../headfoot/headfoot.module';
import { UsertestingformComponent } from './usertestingform/usertestingform.component';
import { InuserformComponent } from './inuserform/inuserform.component';

@NgModule({
  declarations: [
    FormsComponent,
    DogbreedsComponent,
    ValidationsComponent,
    UsertestingformComponent,
    InuserformComponent
  ],
  imports: [
    CommonModule,FormsModule,HeadfootModule
  ]
})
export class BootstrapsModule { 

}
