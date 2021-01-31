import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ThankyouComponent } from './thankyou/thankyou.component';



const routes: Routes = [
  {
    path: '',
    component: FormComponent
  },
  {
    path: 'thankyou',
    component: ThankyouComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
