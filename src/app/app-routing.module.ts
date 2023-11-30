import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './databinding/interpolation/interpolation.component';
import { ConditionalsComponent } from './databinding/conditionals/conditionals.component';
import { OpenAPIComponent } from './remote/open-api/open-api.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"interpolation",component:InterpolationComponent},
  {path:"conditional",component:ConditionalsComponent},
  {path:"openapi",component:OpenAPIComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
