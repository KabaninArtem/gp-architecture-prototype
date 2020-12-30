import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNavigationComponent} from './page-navigation/page-navigation.component';
import {MapComponent} from './map/map.component';
import {AoiNavigationComponent} from './aoi-navigation/aoi-navigation.component';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [PageNavigationComponent, MapComponent, AoiNavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
  ],
  exports: [
    PageNavigationComponent,
    MapComponent,
    AoiNavigationComponent
  ]
})
export class CoreModule { }
