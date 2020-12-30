import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RouteQueryParamsService} from '../services/route-query-params.service';
import {ActiveAoiService} from '../services/active-aoi.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-aoi-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './aoi-navigation.component.html',
  styleUrls: ['./aoi-navigation.component.scss']
})
export class AoiNavigationComponent implements OnInit {
  public readonly aoiList$: Observable<object[]> = this.activeAoiService.getAoiList$();
  constructor(private readonly activeAoiService: ActiveAoiService, private readonly routeQueryParamsService: RouteQueryParamsService) { }

  ngOnInit(): void {
  }

  public showAoi(id: number): void {
    this.routeQueryParamsService.pushParams({aoiId: id});
  }
}
