import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
