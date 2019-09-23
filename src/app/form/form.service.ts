import { Injectable } from '@angular/core'

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { take } from 'rxjs/operators'

import { FormModel } from './form.model'

@Injectable()
export class FormService{

  FORM_API: string = "http://localhost:3000/data"

  constructor(private http: HttpClient){}

  getData(): Observable<FormModel[]>{
    return this.http.get<FormModel[]>(this.FORM_API)
  }

  postDataForm(form: FormModel): Observable<FormModel>{
    return this.http.post<FormModel>(this.FORM_API, form).pipe(take(1))
  }
}
