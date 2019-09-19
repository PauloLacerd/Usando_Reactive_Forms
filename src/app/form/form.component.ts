import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { FormService } from './form.service'
import { FormModel } from './form.model'

@Component({
  selector: 'tf-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  formGroup: FormGroup

  form: FormModel

  constructor(private formBuilder: FormBuilder, private formService: FormService) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.formGroup = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(4)]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(8)]),
      secondName: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      id: this.formBuilder.control('', [Validators.required, Validators.minLength(11), Validators.pattern(/^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/)])
    })
  }

  submit(){
    this.form = {name: `${this.formGroup.get('name').value}`,
    secondName: `${this.formGroup.get('secondName').value}`,
    password: `${this.formGroup.get('password').value}`,
    email: `${this.formGroup.get('email').value}`,
    id: `${this.formGroup.get('id').value}`}

    this.formService.postDataForm(this.form)
    console.log(this.form)
  }
}
