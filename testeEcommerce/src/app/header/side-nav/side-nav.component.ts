import {Directive, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HostBinding } from '@angular/core';
import { delay } from 'rxjs/operators'
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Router} from "@angular/router";

@Component({
  selector: 'app-side-nav',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '65%',
      })),
      state('openFirst', style({
        height: '70%',
      })),
      state('closed', style({
        height: '0%',
      })),
      transition('openFist => closed', [
        animate('0.4s')
      ]),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.6s')
      ]),
      transition('closed => openFirst', [
        animate('0.4s')
      ]),
    ]),
  ],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],

})
export class SideNavComponent implements OnInit {

  @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();

  total = 0;

  isOpen = true;

   async toggle() {
    this.isOpen = !this.isOpen;
  }

  Items: any = [
    {
      id: 1,
      name: 'Flor Roxa',
      price: 33.50
    },
    {
      id: 2,
      name: 'Flor Roxa',
      price: 33.50
    },
    {
      id: 3,
      name: 'Flor Roxa',
      price: 33.50
    },
    {
      id: 4,
      name: 'Flor Roxa',
      price: 33.50
    },
    {
      id: 5,
      name: 'Flor Roxa',
      price: 33.50
    },
    {
      id: 6,
      name: 'Flor Roxa',
      price: 33.50
    },
    {
      id: 7,
      name: 'Flor Roxa',
      price: 33.50
    },
    {
      id: 8,
      name: 'Flor Roxa',
      price: 33.50
    },
    {
      id: 9,
      name: 'Flor Roxa',
      price: 33.50
    }
  ];

  onSUmm(x) {
    this.total = this.total + x;
  }

   timeout = ms => new Promise(res => setTimeout(res, ms));

  constructor(private router: Router) { }

 async ngOnInit() {
await this.timeout(100);
this.toggle();
await this.timeout(5000);
  }

}
