import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ScreenSize } from './screen-size.class';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

  constructor() { }

  private _appScreenSize$: BehaviorSubject<ScreenSize> = new BehaviorSubject(new ScreenSize(window.innerWidth, window.innerHeight));
  private _height$: BehaviorSubject<number> = new BehaviorSubject(window.innerHeight);
  private _width$: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

  public get appScreenSize$(): Observable<ScreenSize> { return this._appScreenSize$.asObservable(); }
  public get appScreenSize(): ScreenSize { return this._appScreenSize$.getValue(); }

  public get height$(): Observable<number> { return this._height$.asObservable(); }
  public get height(): number { return this._height$.getValue(); }
  public get width$(): Observable<number> { return this._width$.asObservable(); }
  public get width(): number { return this._width$.getValue(); }

  public get isSmallSize(): boolean { return this.appScreenSize.isSmallSize; }
  public get isMediumSize(): boolean { return this.appScreenSize.isMediumSize; }
  public get isFullSize(): boolean { return this.appScreenSize.isFullSize; }

  public updateSize(innerWidth: number, innerHeight: number): ScreenSize {
    const appScreenSize: ScreenSize = new ScreenSize(innerWidth, innerHeight);
    this._appScreenSize$.next(appScreenSize);
    this._height$.next(innerHeight);
    this._width$.next(innerWidth);
    return appScreenSize;
  }

}
