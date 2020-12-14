import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authService } from 'src/app/components/services/auth.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(
    private fb:FormBuilder,
    private _ROUTER:Router,
    private _AUTH:authService
    ) {}

// Variables
  public errorMsg:String = '';
  public successMsg:String = '';
  public processing:Boolean = false;
  
// Form Definition
  loginForm = this.fb.group({
    userID: [null, [Validators.required]],
    password: [null, [Validators.required]]
  })
// form Get
  get userID()          { return this.loginForm.get('userID');   }
  get password()          { return this.loginForm.get('password');   }

  disableForm(){    
    this.processing = true;
    this.userID.disable();
    this.password.disable();
  }
  enableForm(){
    this.processing = false;
    this.userID.enable();
    this.password.enable();
  }

  submit(loginData:ILOGINDATA){
    this.disableForm();
    this._AUTH.UserLogIn({userID:loginData.userID.trim(), password:loginData.password.trim()}).subscribe(
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

interface ILOGINDATA {
  userID:String,
  password:String
  }
