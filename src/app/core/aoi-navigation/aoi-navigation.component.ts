import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-aoi-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './aoi-navigation.component.html',
  styleUrls: ['./aoi-navigation.component.scss']
})
export class AoiNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
