import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './databinding/interpolation/interpolation.component';
import { ConditionalsComponent } from './databinding/conditionals/conditionals.component';
import { OpenAPIComponent } from './remote/open-api/open-api.component';
import { DirectivesComponent } from './databinding/directives/directives.component';
import { GenderindentityComponent } from './remote/genderindentity/genderindentity.component';
import { HeadfootimplComponent } from './headfoot/headfootimpl/headfootimpl.component';
import { FormsComponent } from './bootstraps/forms/forms.component';
import { DogbreedsComponent } from './bootstraps/dogbreeds/dogbreeds.component';
import { ValidationsComponent } from './bootstraps/validations/validations.component';
import { PipesComponent } from './databinding/pipes/pipes.component';
import { SignupComponent } from './users/signup/signup.component';
import { LoginComponent } from './users/login/login.component';
import { ViewUsersComponent } from './users/adminpages/view-users/view-users.component';
import { AdminhomeComponent } from './users/adminpages/adminhome/adminhome.component';
import { UsertestingformComponent } from './bootstraps/usertestingform/usertestingform.component';
import { InuserformComponent } from './bootstraps/inuserform/inuserform.component';

const routes: Routes = [
  {path:"",component:HomeComponent},  
  {path:"login",component:LoginComponent},
  {path:"register",component:SignupComponent},
  
  {path: 'admin',
    children: [
      { path: 'viewusers', component: ViewUsersComponent },
      { path: 'home', component: AdminhomeComponent},
    ]
  },
  {path: 'testingui',
  children: [
    {path:"usertest",component:UsertestingformComponent},
    {path:"inuser",component:InuserformComponent},
  ]
},
  //Testing Paths
  // {path:"interpolation",component:InterpolationComponent},
  // {path:"conditional",component:ConditionalsComponent},
  // {path:"openapi",component:OpenAPIComponent},
  // {path:"directives",component:DirectivesComponent},
  // {path:"genderindentity",component:GenderindentityComponent},
  // {path:"headfoot",component:HeadfootimplComponent},
  // {path:"stylebind",component:StylebindingComponent},
  // {path:"bforms",component:FormsComponent},

  // {path:"pipes",component:PipesComponent},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
