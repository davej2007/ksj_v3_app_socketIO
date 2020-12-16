import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()

export class TeamService {

  constructor(private _HTTP:HttpClient) { }

  checkTeam(teamID:string){
    return this._HTTP.post<any>(environment.apiTeam+'/checkTeamId', {teamID:teamID});
  }
  createNewTeam(data:any){
    return this._HTTP.post<any>(environment.apiTeam+'/createNewTeam', data);
  }
}