import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {RouteQueryParamsService} from '../../core/services/route-query-params.service';
import {ActiveAoiAnalyticService} from '../../core/services/active-aoi-analytic.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageTwoComponent implements OnInit, OnDestroy {

  constructor(private readonly routeQueryParamsService: RouteQueryParamsService, private readonly activeAoiAnalyticService: ActiveAoiAnalyticService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.activeAoiAnalyticService.resetActiveAoiAnalyticId();
    this.routeQueryParamsService.deleteParam('aoiAnalyticId');
  }

}
