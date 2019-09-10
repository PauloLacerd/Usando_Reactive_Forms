import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http'

import { Observable } from 'rxjs'

import { FormModel } from './form/form.model'

@Injectable({
  providedIn: 'root'
})
export class DataFormService {

  httpUrl: string = "http://localhost:3000/formData"

  constructor(private http: HttpClient){}

  submit(formModel: FormModel): Observable<FormModel>{
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post(this.httpUrl, JSON.stringify(formModel),
    new HttpRequest({headers: headers}))
    .map(response => response.json()).map(formModel => formModel.id)
  }
}
