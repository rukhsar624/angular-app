import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteServicesComponent } from './MyComponents/delete-services/delete-services.component';
import { EditServicesComponent } from './MyComponents/edit-services/edit-services.component';

const routes: Routes = [
  { path: '',   redirectTo: '/app-component', pathMatch: 'full' },
  {path: 'edit-services' , component :EditServicesComponent},
  {path: 'delete-services' , component :DeleteServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
