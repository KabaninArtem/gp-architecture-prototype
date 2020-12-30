import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AoiAnalyticComponent } from './aoi-analytic/aoi-analytic.component';
import { AnalyticOneComponent } from './components/analytic-one/analytic-one.component';
import { AnalyticTwoComponent } from './components/analytic-two/analytic-two.component';
import { AnalyticThreeComponent } from './components/analytic-three/analytic-three.component';
import { AnalyticFourComponent } from './components/analytic-four/analytic-four.component';
import { AnalyticFiveComponent } from './components/analytic-five/analytic-five.component';
import { AnalyticSixComponent } from './components/analytic-six/analytic-six.component';
import { AnalyticSevenComponent } from './components/analytic-seven/analytic-seven.component';
import { AnalyticEightComponent } from './components/analytic-eight/analytic-eight.component';
import { AnalyticNineComponent } from './components/analytic-nine/analytic-nine.component';
import { AnalyticTenComponent } from './components/analytic-ten/analytic-ten.component';



@NgModule({
  declarations: [AoiAnalyticComponent, AnalyticOneComponent, AnalyticTwoComponent, AnalyticThreeComponent, AnalyticFourComponent, AnalyticFiveComponent, AnalyticSixComponent, AnalyticSevenComponent, AnalyticEightComponent, AnalyticNineComponent, AnalyticTenComponent],
  imports: [
    CommonModule
  ],
  exports: [AoiAnalyticComponent]
})
export class AoiAnalyticModule { }
