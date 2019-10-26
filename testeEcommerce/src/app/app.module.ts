import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { TopNavComponent } from './header/top-nav/top-nav.component';
import { SideNavComponent } from './header/side-nav/side-nav.component';

import {OnCreateDirective} from "./header/side-nav/onCreate.directive";

import { SubNavComponent } from './header/sub-nav/sub-nav.component';
import {ToggleBasketService} from "./header/toggle-basket.service";
import { SideCategoryComponent } from './main/home/side-category/side-category.component';
import { ShowContentComponent } from './main/home/show-content/show-content.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    TopNavComponent,
    SideNavComponent,
    OnCreateDirective,
    SubNavComponent,
    SideCategoryComponent,
    ShowContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    ToggleBasketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
