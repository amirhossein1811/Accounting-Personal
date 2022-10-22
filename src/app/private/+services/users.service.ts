import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users=[
    {id:1, username:'admin', enabled:true, fullname:'مدریت سیسیتم', phone:'0918'},
    {id:2, username:'admin', enabled:true, fullname:' امیرحسین', phone:'0718'},
    {id:3, username:'admin', enabled:false, fullname:'مدریت سیسیتم', phone:'0928'},
    {id:4, username:'admin', enabled:true, fullname:'مدریت سیسیتم', phone:'0968'},
    {id:5, username:'admin', enabled:false, fullname:'مدریت شاهان', phone:'0918'},
    {id:6, username:'admin', enabled:true, fullname:'مدریت سیسیتم', phone:'0938'},
  ];
  constructor() { }
}
