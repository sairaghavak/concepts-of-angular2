import { Component, OnInit, ElementRef } from '@angular/core';

import * as $ from 'jquery'; // Import jQuery

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  concepts: Concept[];

  constructor(private _elementRef: ElementRef) {
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
        name: 'Directives',
        conceptRoute: 'directives'
      },
      {
        name: 'Data Binding',
        conceptRoute: 'databinding'
      },
      {
        name: 'Services',
        conceptRoute: 'services'
      },
      {
        name: 'Dependency Injection',
        conceptRoute: 'dependencyinjection'
      },
      {
        name: 'Routing',
        conceptRoute: 'routing'
      },
      {
        name: 'More coming up..',
        conceptRoute: 'upcoming'
      }


    ];
  }

  ngOnInit() {
    /**
     * Below code helps to traverse through the DOM tree whose root is initialized in the constructor
     * $(this._elementRef.nativeElement).find('nav').click();
     */

    $('a.refreshNav').on('click', function () { // refreshNav is css class put on <a> elements in nav
      // on Click of any of the nav bar menu item, route to the respective page and hide the navbar
      // On Desktops this toggle icon is not visible, on mobiles it will be visible
      if ($('button.navbar-toggle').is(':visible')) {
        $('button.navbar-toggle').trigger('click');

      }
    });
  }

  onConceptsClick() {
    if ($('button.navbar-toggle').is(':visible')) {
      $('button.navbar-toggle').trigger('click');
    }
  }
}

export interface Concept {
  name: string;
  conceptRoute: string;
}
