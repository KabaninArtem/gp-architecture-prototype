import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs';
import {ActiveAoiAnalyticService} from '../../core/services/active-aoi-analytic.service';
import {AoiAnalyticIds} from '../../core/enums/aoi-analytic-ids.enum';

@Component({
  selector: 'app-aoi-analytic',
  templateUrl: './aoi-analytic.component.html',
  styleUrls: ['./aoi-analytic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AoiAnalyticComponent implements OnInit {
  public readonly activeId$: Observable<number> = this.activeAoiAnalytic.activeAoiAnalyticId$;
  public readonly ids = AoiAnalyticIds;
  constructor(private readonly activeAoiAnalytic: ActiveAoiAnalyticService) { }

  ngOnInit(): void {
  }

}
