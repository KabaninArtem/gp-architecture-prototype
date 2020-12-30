import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
