import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNavigationComponent} from './page-navigation/page-navigation.component';
import {MapComponent} from './map/map.component';
import {AoiNavigationComponent} from './aoi-navigation/aoi-navigation.component';



@NgModule({
  declarations: [PageNavigationComponent, MapComponent, AoiNavigationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PageNavigationComponent,
    MapComponent,
    AoiNavigationComponent
  ]
})
export class CoreModule { }
