import { Component, OnInit, ElementRef } from '@angular/core';

import * as $ from 'jquery';// Import jQuery

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  topics: Topic[];

  constructor(private _elementRef: ElementRef) {
    this.topics = [
      {
        name: 'Modules',
        topicRoute: 'modules'
      },
      {
        name: 'Components',
        topicRoute: 'components'
      },
      {
        name: 'Templates',
        topicRoute: 'templates'
      },
      {
        name: 'Directives',
        topicRoute: 'directives'
      },
      {
        name: 'Data Binding',
        topicRoute: 'databinding'
      },
      {
        name: 'Services',
        topicRoute: 'services'
      },
      {
        name: 'Dependency Injection',
        topicRoute: 'dependencyinjection'
      },
      {
        name: 'Routing',
        topicRoute: 'routing'
      },
      {
        name: 'More coming up..',
        topicRoute: 'upcoming'
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
      if ($("button.navbar-toggle").is(":visible")) {
        $("button.navbar-toggle").trigger("click");

      }
    });
  }
}

export interface Topic {
  name: string;
  topicRoute: string;
}