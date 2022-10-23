import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  accounts=[
    {id:1, title:'پوشاک', enabled:true},
    {id:2, title:'خوراک', enabled:true},
    {id:3, title:'حقوق', enabled:false},
    {id:4, title:'حمل و نقل', enabled:true},
    {id:5, title:'دانشگاه', enabled:false},
    {id:6, title:'مسکن', enabled:true},
  ];
  constructor() { }
}
