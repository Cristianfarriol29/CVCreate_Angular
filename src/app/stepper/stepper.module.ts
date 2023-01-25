import { NumbersOnlyDirective } from './../directives/numbers-only.directive';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../angular-material/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './components/stepper/stepper.component';
import { ExperiencesCardsComponent } from './components/experiences-cards/experiences-cards.component';
import { LevelSelectComponent } from './components/level-select/level-select.component';
import { InfoHeaderComponent } from './components/info-header/info-header.component';





@NgModule({
  declarations: [
StepperComponent,
ExperiencesCardsComponent,
LevelSelectComponent,
InfoHeaderComponent,
NumbersOnlyDirective

  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule
  ],
  exports: [
    StepperComponent
  ]
})
export class StepperModule { }
