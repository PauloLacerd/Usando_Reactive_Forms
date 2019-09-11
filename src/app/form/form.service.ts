import { Injectable } from '@angular/core'

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { catchError } from 'rxjs/operators'
import { Observable } from 'rxjs'

import { FormModel } from './form.model'

@Injectable()
export class FormService{

  FORM_API: string = "http://localhost:3000"
  httpOptions = {headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}

  constructor(private http: HttpClient){}

  getData(): FormModel[]{
    return [
      {name: "Paulo", secondName: "Victor", email: "teste@teste.com"},
      {name: "Vitoria", secondName: "Lacerda", email: "vitoria@hotmail.com"}
    ]
  }

  postDataForm(form: FormModel): Observable<FormModel[]>{
    return this.http.post<FormModel>(this.FORM_API, form, this.httpOptions)
  }
}
