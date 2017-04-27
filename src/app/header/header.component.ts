import { Component, ElementRef, Renderer, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  @ViewChild("header") header_element: ElementRef;
  @ViewChild("hamburgericon") hamburger_element: ElementRef;
  
  
  concepts: Concept[];

  constructor(private _renderer: Renderer) {
    this.concepts = [
      {
        name: 'Modules',
        conceptRoute: 'modules'
      },
      {
        name: 'Components',
        conceptRoute: 'components'
      },
      {
        name: 'Templates',
        conceptRoute: 'templates'
      },
      {
        name: 'MetaData',
        conceptRoute: 'metadata'
      },
      {
        name: 'Data Binding',
        conceptRoute: 'data-binding'
      },
      {
        name: 'Directives',
        conceptRoute: 'directives'
      },
      {
        name: 'Services',
        conceptRoute: 'services'
      },
      {
        name: 'Dependency Injection',
        conceptRoute: 'dependency-injection'
      }


    ];
  }

  onHeaderClick() {
    // refernce link: http://stackoverflow.com/questions/41524057/force-collapse-of-bootstrap-4-navbar-on-angular-2-route-change
    if (this.navBarTogglerIsVisible()) {
      this.hamburger_element.nativeElement.click();
    }
  }

  navBarTogglerIsVisible() {
    return this.hamburger_element.nativeElement.offsetParent !== null; // that means hamburger icon has a parent 
  }

  getHeaderHeight() {
    return this.header_element.nativeElement.offsetHeight;
  }

  ngAfterViewInit() {
    // if screen size is less than 480 px then it must be a smart phone layout and reduce left and right margin
    if (window.screen.width <= 480) {
      console.log('in header component ts screen size is less than 480, so now disabling the left and right margins');
      this._renderer.setElementStyle(this.header_element.nativeElement, 'margin', '0%');
    }
  }
}

export interface Concept {
  name: string;
  conceptRoute: string;
}
