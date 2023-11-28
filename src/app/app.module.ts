import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UsersModule} from './users/users.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,MatListModule,MatCardModule,UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
