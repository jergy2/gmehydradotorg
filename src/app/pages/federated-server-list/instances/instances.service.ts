import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { InstanceInfoDto } from './instance-info-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class InstancesService {

  constructor(private httpClient: HttpClient) { }

  private _instanceInfo$: BehaviorSubject<InstanceInfoDto[]> = new BehaviorSubject<InstanceInfoDto[]>([]);

  public get instanceInfo$(): Observable<InstanceInfoDto[]> { return this._instanceInfo$.asObservable(); }
  public get instanceInfo(): InstanceInfoDto[] { return this._instanceInfo$.getValue(); }

  public initiate$(){
    const subject: Subject<any> = new Subject();
    const endPointUrl = 'https://www.hydramailer.org/get-instances';
    const start = dayjs();

    this.httpClient.get(endPointUrl).subscribe({
      next: (response: any)=>{
        const instanceDtos: InstanceInfoDto[] = (response as any[]).map(instanceInfo =>{
          return {
            instanceType: instanceInfo.instanceType,
            name: instanceInfo.name,
            url :instanceInfo.url,
            registration: instanceInfo.registration,
            description: instanceInfo.description,
            monthlyActiveUsers: instanceInfo.monthlyActiveUsers,
            softwareVersion: instanceInfo.softwareVersion,
            isOnline: instanceInfo.isOnline,
          }
        });
        // console.log("Instance DTOS", instanceDtos);
        this._instanceInfo$.next(instanceDtos);
        const end = dayjs();
        // console.log(end.diff(start, 'milliseconds'))

      }, 
      error: (error)=>{
        console.log("Error getting instance info")
      },
      complete: ()=>{
        subject.complete();
        this._instanceInfo$.complete();
      }
    });
    return subject.asObservable();
  }

  private _data: any = null;
  public get data():any { return this._data; }

  public getInstanceInfo$(){
    
  }
}
