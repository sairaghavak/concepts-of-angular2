import { Component, ElementRef, ViewChild, Renderer, AfterViewInit } from '@angular/core';
import { HeaderComponent } from './header/header.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild("dynamicNavBar") headerComponent: HeaderComponent;
  @ViewChild("contentAfterNavBar") content_after_navbar_element: ElementRef;

  title: string;

  constructor(private _renderer: Renderer) {
    this.title = 'Welcome to the concepts-of-angular2! Concepts will be published shortly..';
  }

  onResize() {
    const navBar_height = this.headerComponent.getHeaderHeight();
    // console.log('in app component ts window resized.....' + navBar_height);
    this._renderer.setElementStyle(this.content_after_navbar_element.nativeElement, 'padding-top', navBar_height + 'px');
  }

  ngAfterViewInit() {
    const navBar_height = this.headerComponent.getHeaderHeight();
    // console.log("header height => " + navBar_height);
    this._renderer.setElementStyle(this.content_after_navbar_element.nativeElement, 'padding-top', navBar_height + 'px');
  }

  setContentPadding(pad: string) {
    console.log('height passed here is ...' + pad);
    this._renderer.setElementStyle(this.content_after_navbar_element.nativeElement, 'padding-top', pad + 'px');
  }


}
