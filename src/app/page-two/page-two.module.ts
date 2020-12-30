import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageTwoRoutingModule } from './page-two-routing.module';
import { PageTwoComponent } from './page-two/page-two.component';
import { AnalyticControlPanelComponent } from './components/analytic-control-panel/analytic-control-panel.component';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [PageTwoComponent, AnalyticControlPanelComponent],
  imports: [
    CommonModule,
    PageTwoRoutingModule,
    FlexLayoutModule
  ],
  exports: [
    PageTwoComponent
  ]
})
export class PageTwoModule { }
