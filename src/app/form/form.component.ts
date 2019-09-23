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
      secondName: this.formBuilder.control('', [Validators.required, Validators.minLength(5)])
    })
  }

  submit(){
    this.form = this.formGroup.value
    this.formService.postDataForm(this.form).subscribe(success => console.log('Usuário cadastrado com sucesso !!!'))
    this.formGroup.reset()
  }
}
