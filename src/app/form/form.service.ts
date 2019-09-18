import { Injectable } from '@angular/core'

import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs'

import { FormModel } from './form.model'

const httpOptions = {headers: new HttpHeaders({
  'Content-type': 'application/json'
})
}

@Injectable()
export class FormService{

  FORM_API: string = "http://localhost:3000/data"

  constructor(private http: HttpClient){}

  getData(): Observable<FormModel[]>{
    return this.http.get<FormModel[]>(this.FORM_API)
  }

  postDataForm(form: FormModel){
    return this.http.post(this.FORM_API, form, httpOptions)
  }
}
