import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { ConvertDate, DateValue } from '../../_custom/functions';

@Component({
  selector: 'event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private _EVENT:EventService,
    private _ROUTER:Router) { }

  public processing    : Boolean  = false;
  public successMsg    : String   = null;
  public errorMsg      : String   = null;
  public songBook      : Boolean = false;
  public messageScreens: Boolean = false;
  public eventError : Boolean = false;
  public eventMessage : String = null;

  newEventForm = this.fb.group({
    eventID       : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
    hostName      : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    title         : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    date          : ['', [Validators.required]],
    startTime     : ['', [Validators.required]],
    duration      : ['', [Validators.required]],
    venue         : ['', [Validators.required]],
    type          : ['', [Validators.required]]
  });

  get eventID() { return this.newEventForm.get('eventID');}
  get hostName() { return this.newEventForm.get('hostName');}
  get title() { return this.newEventForm.get('title');}
  get date() { return this.newEventForm.get('date');}
  get startTime() { return this.newEventForm.get('startTime');}
  get duration() { return this.newEventForm.get('duration');}
  get venue() { return this.newEventForm.get('venue');}
  get type() { return this.newEventForm.get('type');}

  ngOnInit(): void {}
  // Confirm
  enableForm(){
    this.processing = false;
    this.eventID.enable();
    this.hostName.enable();
    this.title.enable();
    this.date.enable();
    this.startTime.enable();
    this.duration.enable();
    this.venue.enable();
    this.type.enable();
  }
  disableForm(){
    this.processing = true;
    this.eventID.disable();
    this.hostName.disable();
    this.title.disable();
    this.date.disable();
    this.startTime.disable();
    this.duration.disable();
    this.venue.disable();
    this.type.disable();
  }
  checkeventID(){
    console.log(this.eventID.value)
    this._EVENT.checkEvent(this.eventID.value).subscribe(
      res=>{
        if(res.success){
          console.log('true',res)
        } else {
          this.eventError = true;
          this.eventMessage = 'Event ID Found On Dates : '
          res.event.forEach(e => {
            this.eventMessage += ConvertDate(e.date)
          });
          console.log('false', res)
        }
      },
      err => {
        alert('Server Error : '+err.message+' If this continues Please contact Systems.');
        this.enableForm();
      }
    )
  }
  submit(){
    this.disableForm();
    let newEventData:any = {
      eventID: (this.eventID.value+' ').trim(),
      title: (this.title.value+' ').trim(),
      hostName: (this.hostName.value+' ').trim(),
      venue:(this.venue.value+' ').trim(),
      date:(DateValue(this.date.value)),
      startTime:this.startTime.value,
      duration:this.duration.value,
      type:this.type.value,
      songBook:this.songBook,
      messageScreens:this.messageScreens
    } 
    console.log(newEventData)  
    this._EVENT.createNewEvent(newEventData).subscribe(
      data=>{
        if(!data.success){
          this.errorMsg = data.message;
          setTimeout(()=>{
            this.errorMsg = '';
            this.enableForm();
          }, 2000);
        } else {
          this.successMsg = 'New Event : ' + data.event.eventID + ' created.'
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