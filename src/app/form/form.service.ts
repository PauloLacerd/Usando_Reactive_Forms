import { Injectable } from '@angular/core'

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { retry, catchError } from 'rxjs/operators'

import { FormModel } from './form.model'

@Injectable()
export class FormService{

  FORM_API: string = "http://localhost:3000/data"

  constructor(private http: HttpClient){}

  getData(): Observable<FormModel[]>{
    return this.http.get<FormModel[]>(this.FORM_API)
  }

  postDataForm(form: FormModel): Observable<FormModel>{

    const httpOptions = {headers: new HttpHeaders({
      'Content-type': 'application/json'
      })
    }

    return this.http.post<FormModel>(this.FORM_API, JSON.stringify(form), httpOptions)
    .pipe(retry(1), catchError(this.errorHandl))
  }

  errorHandl(error){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error code: ${error.status}\nMessage:${error.message}`
    }
    console.log(errorMessage)
    return throwError(errorMessage)
  }
}
