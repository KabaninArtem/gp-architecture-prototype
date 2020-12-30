import {Component, OnInit, ChangeDetectionStrategy, HostBinding} from '@angular/core';

@Component({
  selector: 'app-analytic-control-panel',
  templateUrl: './analytic-control-panel.component.html',
  styleUrls: ['./analytic-control-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticControlPanelComponent implements OnInit {
  @HostBinding('class') class = 'global-aoi-view__analytic-control';

  constructor() { }

  ngOnInit(): void {
  }

}
