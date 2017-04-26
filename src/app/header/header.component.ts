import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  @ViewChild("hamburgericon") hamburger_element: ElementRef;
  concepts: Concept[];

  constructor() {
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
}

export interface Concept {
  name: string;
  conceptRoute: string;
}
