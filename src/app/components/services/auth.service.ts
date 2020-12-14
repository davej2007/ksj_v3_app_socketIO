import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()

export class authService {

  constructor(public _HTTP:HttpClient) { }

  // Decode Tokens
  decodeToken(){
    return this._HTTP.get<any>(environment.apiAuth +'/decodeToken');
  }
  // Log In
  UserLogIn(data:any){
    return this._HTTP.post<any>(environment.apiAuth+'/logIn', data);
  }
}