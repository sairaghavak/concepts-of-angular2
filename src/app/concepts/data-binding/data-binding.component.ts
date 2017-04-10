import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  // interpolation properties
  interpolationSnippet1: string;
  interpolationSnippet1Output: string;
  interpolationSnippet2: string;
  interpolationSnippet2Output: string;
  interpolationSnippet3: string;
  interpolationSnippet3Output: string;
  welcomeMessage: string;
  booleanValue: boolean;
  isResponsive: boolean;

  // property binding properties
  pbSnippet1: string;
  booleanProperty: boolean;
  pbSnippet2: string;
  defaultTextMessage: string;
  pbSnippet2Output: string;
  // css style bindings
  pbcssCodeNote: string;
  pbcssSnippet1: string;
  pbcssSnippet1Output: string;
  pbcssSnippet2: string;
  pbcssSnippet2Output: string;
  // html attribute bindings
  pbhtmlAttNote: string;
  pbhtmlAttSnippet1: string;
  pbhtmlAttSnippet1Output: string;
  pbhtmlAttSnippet2: string;
  pbhtmlAttSnippet2Output: string;

  // template to component binding
  tcSnippet1: string;

  // component to template binding
  ctSnippet1: string;
  ctSnippet2: string;

  constructor() { }

  ngOnInit() {
    this.booleanValue = true;
    this.isResponsive = true;
    this.interpolationSnippet1 = `{{ 'Hi, Welcome to Concepts of Angular2!' }}`;
    this.interpolationSnippet1Output = 'Hi, Welcome to Concepts of Angular2!';
    this.welcomeMessage = 'Welcome to Concepts of Angular2!';
    this.interpolationSnippet2 = `{{' Hi '+ welcomeMessage + ' ' + booleanValue + ' ' + 25*25 + ' ' + sayBye() }}`;
    this.interpolationSnippet2Output = 'Hi' + ' ' + this.welcomeMessage + ' ' + this.booleanValue + ' ' + 25 * 25 + ' ' + this.sayBye();
    this.interpolationSnippet3 = `System.out.println("Hi, " + welcomeMessage + " " + "This app is responsive isn't it? " + isResponsive + "." + sayBye());`;
    this.interpolationSnippet3Output = 'Hi ' + this.welcomeMessage + "  This app is responsive isn't it? " + this.isResponsive + '.' + this.sayBye();

    this.pbSnippet1 = '<input type="text" [value]="2 + 2" [readonly]="booleanProperty" />';
    this.booleanProperty = true;
    this.pbSnippet2 = '<input type="text" [value]="defaultTextMessage" [readonly]="true" />';
    this.defaultTextMessage = this.welcomeMessage;

    this.pbcssCodeNote = `<!-- CSS Style bindings -->`;
    this.pbcssSnippet1 = `<div [style.display]="displayStyle ? 'none': 'inline'"> Inline display..</div>`;
    this.pbcssSnippet2 = `<div [class]="'text-center text-uppercase'" [class.text-center]="false">z to a </div>`;

    this.pbhtmlAttNote = `<!-- HTML attribute bindings -->`;
    this.pbhtmlAttSnippet1 = `<div [attr.class]="'text-center text-uppercase'"> a to z </div>`;
    this.pbhtmlAttSnippet2 = `<input [attr.type] = "text"/>`;


    this.tcSnippet1 = `<img src="srk.png" (load) = "pressF12()">`;

    this.ctSnippet1 = `<input type="text" [(ngModel)]="defaultTextMessage"/>`;
    this.ctSnippet2 = `<span> {{ defaultTextMessage }}</span>`;
  }

  sayBye(): string {
    return 'Have a nice read!';
  }

  pressF12() {
    console.log('This is the demo of an image... And its my stackoverflow flair, srk(Sai Raghava Katepally)');
  }
}
