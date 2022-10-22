import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { DashboardComponent } from './+pages/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UsersComponent } from './+pages/users/users.component';
import { CrudToolbarComponent } from './+components/crud-toolbar/crud-toolbar.component';
import { DataGridComponent } from './+components/data-grid/data-grid.component';
import { AccountsComponent } from './+pages/accounts/accounts.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PrivateComponent,
    DashboardComponent,
    UsersComponent,
    CrudToolbarComponent,
    DataGridComponent,
    AccountsComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ]
})
export class PrivateModule { }
