import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeadfootimplComponent } from './headfootimpl/headfootimpl.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeadfootimplComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    HeaderComponent,
    FooterComponent,
    HeadfootimplComponent
  ]
})
export class HeadfootModule { }
