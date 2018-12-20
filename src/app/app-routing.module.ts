import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';

const routes: Routes = [
  { path: '', component: CarComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'authorization', component: AuthorizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
