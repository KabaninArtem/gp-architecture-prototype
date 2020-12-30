import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {QueryParams} from '../interfaces/query-params';
import {QueryParamsActions} from '../interfaces/query-params-actions';
import {ActiveAoiService} from './active-aoi.service';
import {ActiveAoiAnalyticService} from './active-aoi-analytic.service';

@Injectable({
  providedIn: 'root'
})
export class RouteQueryParamsService {
  public readonly queryParamsSource$: Observable<QueryParams> = this.route.queryParams;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly activeAoiService: ActiveAoiService,
    private readonly activeAoiAnalytics: ActiveAoiAnalyticService
  ) { }

  public setParams(params: QueryParams): void {
    this.router.navigate([], {queryParams: {...params}});
  }

  public pushParams(params: QueryParams): void {
    this.router.navigate([], {queryParams: {...this.getParams(), ...params}});
  }

  public getParams(): QueryParams  {
    return this.route.snapshot.queryParams;
  }

  public get actions(): QueryParamsActions {
    return {
      aoiId: this.activeAoiService.setActiveAoiId,
      aoiAnalyticId: this.activeAoiAnalytics.setActiveAoiAnalyticId,
    };
  }
}
