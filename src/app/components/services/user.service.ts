import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()

export class UserService {

  constructor(private _HTTP:HttpClient) { }

  createNewOperator(data:any){
    return this._HTTP.post<any>(environment.apiUser+'/createNewOperator', data);
  }
}
