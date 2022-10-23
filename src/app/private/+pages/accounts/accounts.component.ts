import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../+services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
cols=[
  {field:'id',title:'شناسه'},
  {field:'title',title:'عنوان'},
  {field:'enabled',title:'وضعیت',type:'check'}
];
  constructor(public accounts:AccountsService) { }

  ngOnInit(): void {
  }

}
