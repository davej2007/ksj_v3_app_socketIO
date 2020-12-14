import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()

export class EventService {

  constructor(private _HTTP:HttpClient) { }

  checkEvent(eventID:string){
    return this._HTTP.post<any>(environment.apiEvent+'/checkEventId', {eventID:eventID});
  }
  createNewEvent(data:any){
    return this._HTTP.post<any>(environment.apiEvent+'/createNewEvent', data);
  }
}