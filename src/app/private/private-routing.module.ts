import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './+pages/accounts/accounts.component';
import { UsersComponent } from './+pages/users/users.component';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  { path: '', component: PrivateComponent ,children:[
    {path:'users',component:UsersComponent},
    {path:'accounts',component:AccountsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
