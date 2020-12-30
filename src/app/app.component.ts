import {Component, OnInit} from '@angular/core';
import {RouteQueryParamsService} from './core/services/route-query-params.service';
import {QueryParams} from './core/interfaces/query-params';
import {QueryParamsActions} from './core/interfaces/query-params-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'refactoring-gp';

  constructor(private readonly routeQueryParams: RouteQueryParamsService) {
  }

  ngOnInit(): void {
    this.routeQueryParams.queryParamsSource$.subscribe((params: QueryParams) => {
      const actions: QueryParamsActions = this.routeQueryParams.actions;
      for (const paramKey in params) {
        if (params.hasOwnProperty(paramKey)) {
          actions[paramKey](params[paramKey]);
        }
      }
    });
  }
}
