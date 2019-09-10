import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'tf-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  formGroup: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.formGroup = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(8)]),
      secondName: this.formBuilder.control('', [Validators.required, Validators.minLength(5)])
    })
  }

}
