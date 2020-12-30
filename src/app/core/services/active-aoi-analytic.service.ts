import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveAoiAnalyticService {
  private readonly activeAoiAnalyticSource$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor() { }

  public get activeAoiAnalyticId$(): Observable<number> {
    return this.activeAoiAnalyticSource$.asObservable();
  }

  public get activeAoiAnalyticId(): number {
    return this.activeAoiAnalyticSource$.getValue();
  }

  public setActiveAoiAnalyticId(id: number): void {
    this.activeAoiAnalyticSource$.next(id);
  }

  public resetActiveAoiAnalyticId(): void {
    this.setActiveAoiAnalyticId(0);
  }
}
