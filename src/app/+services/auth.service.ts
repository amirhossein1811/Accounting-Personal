import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  check(username:string,password:string){
    if(username==='admin' && password==='admin'){
      return 'OK';
    }
    return 'نام کاربری یا کلمه عبور صحیح نیست';
  }
}
