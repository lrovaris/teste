import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  Items: any = [
    {
      id: 1,
      name: 'flor roxa',
      price: 33.50
    },
    {
      id: 2,
      name: 'flor roxa',
      price: 33.50
    },
    {
      id: 3,
      name: 'flor roxa',
      price: 33.50
    },
    {
      id: 4,
      name: 'flor roxa',
      price: 33.50
    },
    {
      id: 5,
      name: 'flor roxa',
      price: 33.50
    },
    {
      id: 6,
      name: 'flor roxa',
      price: 33.50
    },
    {
      id: 7,
      name: 'flor roxa',
      price: 33.50
    },
    {
      id: 8,
      name: 'flor roxa',
      price: 33.50
    },
    {
      id: 9,
      name: 'flor roxa',
      price: 33.50
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
