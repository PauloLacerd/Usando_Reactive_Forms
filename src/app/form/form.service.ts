import { Injectable } from '@angular/core'

import { HttpClient, HttpHeaders} from '@angular/common/http'
import { catchError } from 'rxjs/operators'
import { Observable } from 'rxjs'

import { FormModel } from './form.model'

@Injectable()
export class FormService{

  FORM_API: string = "http://localhost:3000"

  httpOptions = {headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

  constructor(private http: HttpClient){}

  getData(): Observable<FormModel[]>{
    return this.http.get<FormModel[]>(`${this.FORM_API}/data`)
  }

  postDataForm(form: FormModel): Observable<FormModel>{
    return this.http.post<FormModel>(this.FORM_API, JSON.stringify(form), this.httpOptions)
  }
}
