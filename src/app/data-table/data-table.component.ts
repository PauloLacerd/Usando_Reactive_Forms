import { Component, OnInit } from '@angular/core';

import { FormModel } from '../form/form.model'
import { FormService } from '../form/form.service'

@Component({
  selector: 'tf-data-table',
  templateUrl: './data-table.component.html'
})
export class DataTableComponent implements OnInit {

  forms: FormModel[]

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.getData()
  }

  getData(): void{
    this.formService.getData().subscribe(form => this.forms = form)
  }

}
