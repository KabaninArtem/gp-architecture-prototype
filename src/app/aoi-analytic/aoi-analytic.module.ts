import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AoiAnalyticComponent } from './aoi-analytic/aoi-analytic.component';
import { AnalyticOneComponent } from './components/analytic-one/analytic-one.component';
import { AnalyticTwoComponent } from './components/analytic-two/analytic-two.component';



@NgModule({
  declarations: [AoiAnalyticComponent, AnalyticOneComponent, AnalyticTwoComponent],
  imports: [
    CommonModule
  ],
  exports: [AoiAnalyticComponent]
})
export class AoiAnalyticModule { }
