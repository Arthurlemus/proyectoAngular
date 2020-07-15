import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: [`button {margin-right:8px}`]
})
export class NgSwitchComponent implements OnInit {
 alerta = '';
  constructor() { }

  ngOnInit() {
  }

}
