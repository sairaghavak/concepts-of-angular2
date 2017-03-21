import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule, homeRoutingComponents } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [homeRoutingComponents]
})
export class HomeModule { // We can put default at this level or mention the class name @ routing level with #HomeModule
  constructor(){
    console.log('Home module is just now... Lazy loaded');
    // this constructor is called twice, this is still a bug in angular2
    // Reference: https://github.com/angular/angular/issues/12869
  }

}