import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { randomChar } from 'src/app/components/_custom/functions';
import { getAdminValues } from 'src/app/components/_custom/newDefaultValues';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'operator-create',
  templateUrl: './operator-create.component.html',
  styleUrls: ['./operator-create.component.css']
})
export class OperatorCreateComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private _USER:UserService,
    private _ROUTER:Router) { }
  public generate      : Boolean  = false;
  public processing    : Boolean  = false;
  public successMsg    : String   = null;
  public errorMsg      : String   = null;
  public adminSections : any      = getAdminValues;

  newOperatorForm = this.fb.group({
    userID        : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
    name          : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    password      : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
  });

  get userID() { return this.newOperatorForm.get('userID');}
  get name() { return this.newOperatorForm.get('name');}
  get password() { return this.newOperatorForm.get('password');}

  ngOnInit(): void {}
  // Functions For Basic Info Form
  generatePassword(){
    this.generate = true;
    let temp = randomChar('capital')+randomChar('all')+randomChar('lower')+randomChar('all')+randomChar('all')
              +randomChar('lower')+randomChar('all')+randomChar('number')+randomChar('all')+randomChar('all')
              +randomChar('lower')+randomChar('all')+randomChar('capital')+randomChar('all')+randomChar('all')
    this.password.setValue(temp);
    this.generate = false;
  }
  // Confirm
  enableForm(){
    this.processing = false;
    this.generate = false;
    this.userID.enable();
    this.name.enable();
    this.password.enable();
  }
  disableForm(){
    this.processing = true;
    this.generate = true;
    this.userID.disable();
    this.name.disable();
    this.password.disable();
  }
  submit(){
    this.disableForm();
    let Token : any = '00000000000000'.split('');
    this.adminSections.forEach((i:any) => {
      i.section.forEach((j:any) => {
        if(j.value) Token[j.button]='1';        
      });
    });
    let newOperatorData:any = {
      userID: (this.userID.value+' ').trim(),
      name: (this.name.value+' ').trim(),
      password:(this.password.value+' ').trim(),
      token:Token.join("")      
    }   
    this._USER.createNewOperator(newOperatorData).subscribe(
      data=>{
        if(!data.success){
          this.errorMsg = data.message;
          setTimeout(()=>{
            this.errorMsg = '';
            this.enableForm();
          }, 2000);
        } else {
          this.successMsg = 'New Opererator : ' + data.operator.name + ' created.'
          setTimeout(()=>{
            this.successMsg = '';
            this._ROUTER.navigateByUrl('/admin');
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
    this.disableForm();
    alert('Cancel - Are You Sure ?????');
    this._ROUTER.navigateByUrl('/admin');
  }
}
