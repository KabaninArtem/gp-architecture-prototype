import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-analytic-control-panel',
  templateUrl: './analytic-control-panel.component.html',
  styleUrls: ['./analytic-control-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticControlPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
