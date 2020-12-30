import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
