import { Injectable } from '@angular/core'

import { HttpClient, HttpHeaders} from '@angular/common/http'
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

  postDataForm(form: FormModel){
    return this.http.post(this.FORM_API, form)
  }
}
