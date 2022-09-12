import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillDatatableComponent } from './BillGeneration/bill-datatable/bill-datatable.component';
import { BillFormComponent } from './BillGeneration/bill-form/bill-form.component';

const routes: Routes = [
  { path: '', component: BillDatatableComponent },
  { path: 'addBill', component: BillFormComponent },
  { path: ':billId/edit', component: BillFormComponent }
  // { path: 'edit/:postId', component: PostCreateComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
