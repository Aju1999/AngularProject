import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenAPIComponent } from './open-api/open-api.component';
import { GenderindentityComponent } from './genderindentity/genderindentity.component';



@NgModule({
  declarations: [
    OpenAPIComponent,
    GenderindentityComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RemoteModule { }
