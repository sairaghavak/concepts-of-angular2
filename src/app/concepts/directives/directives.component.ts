import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Constants } from '../../shared-services/constants';
import { FileService } from '../../shared-services/FileService';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit, AfterViewChecked {
  isLoading: boolean;
  codeSnippet: string;

  private moduleErrorMessage: string;
  private readonly directives_snippet_file: string = Constants.DIRECTIVES_FILE_PATH;

  addCssClasses: string;
  addCssStyles: {};
  defaultTextMessage: string;
  aBooleanValue: boolean;
  structuralDirectives: string[];

  // ngClass snippets
  ngClassCssSnippet: string;
  ngClassComponentSnippet: string;
  ngClassTemplateSnippet: string;

  // ngStyle snippets
  ngStyleComponentSnippet: string;
  ngStyleTemplateSnippet: string;

  // ngModel snippets
  ngModelComponentSnippet: string;
  ngModelTemplateSnippet: string;

  // ngIf snippets
  ngIfTemplateSnippet: string;

  // ngFor snippets
  ngForTemplateSnippet: string;

  // ngSwitch snippets
  ngSwitchTemplateSnippet: string;

  // custom directive snippets
  ngCustomDirectiveSnippet: string;

  constructor(private _fileService: FileService) { }

  ngOnInit() {
    this.addCssClasses = "decorate display color";
    this.addCssStyles = {
      'font-style': 'italic',
      'font-size': '25px'
    };
    this.defaultTextMessage = 'Welcome to Concepts of Angular2!';
    // this.isUpdated = true;
    this.structuralDirectives = ['ngIf', 'ngFor', 'ngSwitch'];

    this.ngClassCssSnippet = `<pre class="prettyprint lang-css">
.decorate {
    text-decoration: underline;
}
.display {
    display: inline-block;    
}
.color {
    color: chocolate;
}</pre>`;
    this.ngClassComponentSnippet = `<pre class="prettyprint">this.addCssClasses = "decorate display color";</pre>`;
    this.ngClassTemplateSnippet = `<pre class="prettyprint"><xmp><span [ngClass]="addCssClasses">Directives concept is interesting.</span></xmp></pre>`;
    this.ngStyleComponentSnippet = `<pre class="prettyprint">this.addCssStyles = {'font-style': 'italic', 'font-size': '25px'}; `;
    this.ngStyleTemplateSnippet = `<pre class="prettyprint"><xmp><span [ngStyle]="addCssStyles">Directives concept is interesting.</span></xmp></pre>`;

    this.ngModelComponentSnippet = `<pre class="prettyprint">this.defaultTextMessage = 'Welcome to Concepts of Angular2!';</pre>`;
    this.ngModelTemplateSnippet = `<pre class="prettyprint"><xmp><input type="text" [(ngModel)]="defaultTextMessage" size="50" />
<br>
{{ defaultTextMessage }}</xmp></pre>`;

    this.ngIfTemplateSnippet = `<pre class="prettyprint"><xmp>
<div *ngIf="!aBooleanValue">
  <span>An <code>ngIf</code> demo.</span>
</div></xmp></pre>`;

    this.ngForTemplateSnippet = `<pre class="prettyprint">
<xmp>
<div *ngFor="let thisItem of structuralDirectives">
  <ul>
    <li>
      <code>{{ thisItem }}</code>
    </li>
  </ul>
</div>
</xmp>
</pre>`;


    this.ngSwitchTemplateSnippet = `<pre class="prettyprint">
<xmp>
<div [ngSwitch] = "2*3">
  <div *ngSwitchCase = "6">
    <span>An 
      <code>ngSwitch</code> demo.
    </span>
  </div>
  <div *ngSwitchDefault>
    <span>This is the default case of 
      <code>ngSwitch</code>
    </span>
  </div>
</div>
</xmp>
</pre>`;
    this._fileService.getFile(this.directives_snippet_file).subscribe(
      response => {
        this.codeSnippet = response;
      },
      error => {
        this.moduleErrorMessage = error;
      },
      () => {
        this.isLoading = true;
      }
    );
  }



  ngAfterViewChecked() {
    PR.prettyPrint();
  }
}
