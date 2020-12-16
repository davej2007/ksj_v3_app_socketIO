import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authService } from 'src/app/components/services/auth.service';
import { TeamService } from 'src/app/components/services/team.service';

@Component({
  selector: 'registation-form',
  templateUrl: './registation-form.component.html',
  styleUrls: ['./registation-form.component.css']
})
export class RegistationFormComponent {

  constructor(
    private fb:FormBuilder,
    private _ROUTER:Router,
    private _AUTH:authService,
    private _TEAM:TeamService
    ) {}

// Variables
  public errorMsg:String = '';
  public successMsg:String = '';
  public processing:Boolean = false;
  public teamIDValid:Boolean = false;
  public teamMessage:String = '';
  
// Form Definition
  registrationForm = this.fb.group({
    teamID: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
    teamPin: [null, [Validators.required]],
    eventID: [null, [Validators.required]],
    userID: [null, [Validators.required]],
    userName : [null, [Validators.required]],
    userNickname : [null, [Validators.required]],
    password: [null, [Validators.required]]
  })
// form Get
  get teamID()          { return this.registrationForm.get('teamID');   }
  get teamPin()          { return this.registrationForm.get('teamPin');   }
  get eventID()          { return this.registrationForm.get('eventID');   }
  get userID()          { return this.registrationForm.get('userID');   }
  get userName()          { return this.registrationForm.get('userName');   }
  get userNickname()          { return this.registrationForm.get('userNickname');   }
  get password()          { return this.registrationForm.get('password');   }

  disableForm(){    
    this.processing = true;
    this.teamID.disable();
    this.teamPin.disable();
    this.eventID.disable();
    this.userID.disable();
    this.userName.disable();
    this.userNickname.disable();
    this.password.disable();
  }
  enableForm(){
    this.processing = false;
    this.teamID.enable();
    this.teamPin.enable();
    this.eventID.enable();
    this.userID.enable();
    this.userName.enable();
    this.userNickname.enable();
    this.password.enable();
  }
  checkTeamID(){
    this.disableForm();
    this._TEAM.checkTeam(this.teamID.value).subscribe(
      data=>{
        if(data.success){
          console.log(data.team)
          this.enableForm()
        } else {
          this.enableForm()
        }
      },
      err => {
        alert('Server Error : '+err.message+' If this continues Please contact Systems.');
        this.enableForm()
      }

    )
  }
  checkEventID(){}
  submit(registrationData:IREGISTRATIONDATA){
    this.disableForm();
    
    
    
    
    this._AUTH.UserLogIn({userID:registrationData.userID.trim(), password:registrationData.password.trim()}).subscribe(
      res=>{
        if(!res.success){
          this.errorMsg = res.message;
          setTimeout(()=>{
            this.errorMsg = '';
            this.enableForm();
          }, 2000);
        } else {
          this.successMsg = 'Welcome '+res.user.name;
          setTimeout(()=>{
            this.successMsg = '';
            console.log(res.token)
          }, 2000);
        }
        
      },
      err => {
        alert('Server Error : '+err.message+' If this continues Please contact Systems.');
        this.enableForm();
      }
    )
  }
  cancel(){
    this._ROUTER.navigateByUrl('/ksj/welcome')
  }
}

interface IREGISTRATIONDATA {
  teamID : String,
  teamPin : String,
  eventID : String,
  userID : String,
  userName : String,
  userNickname : String,
  password : String
  }
