import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveAoiService {
  private readonly activeAoiSource$: BehaviorSubject<object> = new BehaviorSubject<object>({});
  private readonly activeAoiIdSource$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor() { }

  public get activeAoi$(): Observable<object> {
    return this.activeAoiSource$.asObservable();
  }

  public get activeAoiId$(): Observable<number> {
    return this.activeAoiIdSource$.asObservable();
  }

  public activeAoi(): object {
    return this.activeAoiSource$.getValue();
  }

  public activeAoiId(): number {
    return this.activeAoiIdSource$.getValue();
  }

  public setActiveAoi(aoi: object): void {
    this.activeAoiSource$.next(aoi);
  }

  public setActiveAoiId(id: number): void {
    this.activeAoiIdSource$.next(id);
  }

  public getAoiById(id: number): Observable<object> {
    return of({});
  }

  public getAoiList$(): Observable<{id: number, name: string}[]> {
    return of([{id: 1, name: 'AOI 1'}, {id: 2, name: 'AOI 2'}, {id: 3, name: 'AOI 3'}]);
  }
}
