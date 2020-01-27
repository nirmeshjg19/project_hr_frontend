import { Injectable } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmtrService 
{
  @Output() fire: EventEmitter<any> = new EventEmitter();
  constructor() 
  {
    
  }

  loginbtnswitch(value)
  {
    this.fire.emit(value);
  }
  getEmittedValueFromLogInbtnSwithch()
  {
    return this.fire;
  }
  
}
