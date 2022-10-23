import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
@Input() title:string='فهرست کاربران';
@Input() data:any[]=[];
@Input() columns:any[]=[];
  constructor() { }

  ngOnInit(): void {

  }

}
