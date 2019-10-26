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
<<<<<<< HEAD
import {OnCreateDirective} from "./header/side-nav/onCreate.directive";
=======
import { SubNavComponent } from './header/sub-nav/sub-nav.component';
>>>>>>> Bardi

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    TopNavComponent,
    SideNavComponent,
<<<<<<< HEAD
    OnCreateDirective
=======
    SubNavComponent
>>>>>>> Bardi
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
