import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './databinding/interpolation/interpolation.component';
import { ConditionalsComponent } from './databinding/conditionals/conditionals.component';
import { OpenAPIComponent } from './remote/open-api/open-api.component';
import { DirectivesComponent } from './databinding/directives/directives.component';
import { GenderindentityComponent } from './remote/genderindentity/genderindentity.component';
import { HeadfootimplComponent } from './headfoot/headfootimpl/headfootimpl.component';
import { StylebindingComponent } from './stylebinding/stylebinding/stylebinding.component';
import { FormsComponent } from './bootstraps/forms/forms.component';
import { DogbreedsComponent } from './bootstraps/dogbreeds/dogbreeds.component';
import { ValidationsComponent } from './bootstraps/validations/validations.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"interpolation",component:InterpolationComponent},
  {path:"conditional",component:ConditionalsComponent},
  {path:"openapi",component:OpenAPIComponent},
  {path:"directives",component:DirectivesComponent},
  {path:"genderindentity",component:GenderindentityComponent},
  {path:"headfoot",component:HeadfootimplComponent},
  {path:"stylebind",component:StylebindingComponent},
  {path:"bforms",component:FormsComponent},
  {path:"bdogs",component:DogbreedsComponent},
  {path:"bvalidations",component:ValidationsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
