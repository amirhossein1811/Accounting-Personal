import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'crud-toolbar',
  templateUrl: './crud-toolbar.component.html',
  styleUrls: ['./crud-toolbar.component.scss']
})
export class CrudToolbarComponent implements OnInit {
@Input() updateEnabled:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
