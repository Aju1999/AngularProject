import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { Component } from '@angular/core';
import { UsersModule } from "../users/users.module";
import { FormsModule } from '@angular/forms';
import { ConditionalsComponent } from './conditionals/conditionals.component';
import { DirectivesComponent } from './directives/directives.component';
@NgModule({
    declarations: [
        InterpolationComponent,
        ConditionalsComponent,
        DirectivesComponent
    ],
    exports: [
        InterpolationComponent,
        // ConditionalsComponent
    ],
    imports: [
        CommonModule,
        UsersModule,FormsModule
    ]
})
export class DatabindingModule { }
