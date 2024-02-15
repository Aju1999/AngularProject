import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { DogbreedsComponent } from './dogbreeds/dogbreeds.component';
import { ValidationsComponent } from './validations/validations.component';

@NgModule({
  declarations: [
    FormsComponent,
    DogbreedsComponent,
    ValidationsComponent
  ],
  imports: [
    CommonModule,FormsModule
  ]
})
export class BootstrapsModule { 

}
