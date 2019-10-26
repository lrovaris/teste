import { Component, OnInit } from '@angular/core';
import {ToggleBasketService} from "../toggle-basket.service";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  logo = 'Logo.com';
  basketValidator = false;
  timeout = ms => new Promise(res => setTimeout(res, ms));

 async onBasket() {
    this.basket.change();
    if(this.basketValidator == true) {
      await this.timeout(200);
    }
    this.basketValidator = !this.basketValidator
  }

  constructor(private basket: ToggleBasketService) { }

  ngOnInit() {
  }

}
