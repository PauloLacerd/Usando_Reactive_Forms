import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { FormControlName } from '@angular/forms'

@Component({
  selector: 'tf-message-input',
  templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit, AfterContentInit {

  @Input() messageError: string

  input: any

  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.control
    if(this.input === undefined){
      console.log('Esse objeto não está recebendo o FormControlName.')
    }
  }

  hasSuccess(): boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
