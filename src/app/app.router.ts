import { Routes } from '@angular/router'

import { DataTableComponent } from './data-table/data-table.component'
import { FormComponent } from './form/form.component'

export const ROUTES: Routes = [
  {path: '', component: FormComponent},
  {path: 'data-table', component: DataTableComponent}
]
