import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../+services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
cols=[
  {field:'id',title:'شناسه'},
  {field:'fullname',title:'نام'},
  {field:'username',title:'نام کاربری'},
  {field:'phone',title:'شماره همراه'},
  {field:'enabled',title:'وضعیت',type:'check'}
];
  constructor(public users:UsersService) { }

  ngOnInit(): void {

  }

}
