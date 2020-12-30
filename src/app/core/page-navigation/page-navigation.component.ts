import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.scss']
})
export class PageNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
