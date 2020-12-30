import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {RouteQueryParamsService} from '../../../core/services/route-query-params.service';
import {AoiAnalyticIds} from '../../../core/enums/aoi-analytic-ids.enum';

@Component({
  selector: 'app-analytic-control-panel',
  templateUrl: './analytic-control-panel.component.html',
  styleUrls: ['./analytic-control-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticControlPanelComponent implements OnInit {
  public readonly aoiAnalyticId = AoiAnalyticIds;
  constructor(private readonly routeQueryParams: RouteQueryParamsService) { }

  ngOnInit(): void {
  }

  public showAnalytic(id: number): void {
    this.routeQueryParams.pushParams({aoiAnalyticId: id});
  }

}
