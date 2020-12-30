import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOneRoutingModule } from './page-one-routing.module';
import { PageOneComponent } from './page-one/page-one.component';
import { AnalyticControlPanelComponent } from './components/analytic-control-panel/analytic-control-panel.component';
import {FlexModule} from '@angular/flex-layout';


@NgModule({
  declarations: [PageOneComponent, AnalyticControlPanelComponent],
  imports: [
    CommonModule,
    PageOneRoutingModule,
    FlexModule
  ],
  exports: [
    PageOneComponent
  ]
})
export class PageOneModule { }
