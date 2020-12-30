import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageThreeRoutingModule } from './page-three-routing.module';
import { PageThreeComponent } from './page-three/page-three.component';
import { AnalyticControlPanelComponent } from './components/analytic-control-panel/analytic-control-panel.component';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [PageThreeComponent, AnalyticControlPanelComponent],
  imports: [
    CommonModule,
    PageThreeRoutingModule,
    FlexLayoutModule
  ],
  exports: [
    PageThreeComponent
  ]
})
export class PageThreeModule { }
