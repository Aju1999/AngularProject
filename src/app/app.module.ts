import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersModule} from './users/users.module'
import { DatabindingModule } from './databinding/databinding.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule  } from '@angular/common/http';
import { HeadfootModule } from './headfoot/headfoot.module';
import { StylebindingModule } from './stylebinding/stylebinding.module';
import { BootstrapsModule } from './bootstraps/bootstraps.module';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FormsModule,
    MatIconModule,MatListModule,MatCardModule,UsersModule,DatabindingModule,
    HttpClientModule,HeadfootModule,StylebindingModule,BootstrapsModule
    
  ],
  providers: [ {provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
