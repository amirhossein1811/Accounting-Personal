import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/+services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string='';
  password:string='';
  message:string='';

  constructor(private authService:AuthService
    ,private router:Router) { }

  ngOnInit(): void {
  }
  check(){
    this.message='';
    let message=this.authService.check(this.username,this.password);
    if(message=='OK'){
        this.router.navigateByUrl('/dashboard');
    }
    else{
      this.message=message;
    }
  }

}
