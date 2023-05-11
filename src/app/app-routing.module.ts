import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PageNotFindComponent } from './page-not-find/page-not-find.component';

const routes: Routes = [
  // all contacts :http://localhost:4200/
  {
    path:'',component:AllContactsComponent
  },
   // add contacts :http://localhost:4200/
   {
    path:'add-contact',component:AddContactComponent
   },
  //  view contact
  {
    path:'view-contact/:id',component:ViewContactComponent

  },
  // edit contact
  {
    path:'edit-contact/:id',component:EditContactComponent

  },
  //page not found
 {
  path:"**",component:PageNotFindComponent
 }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
