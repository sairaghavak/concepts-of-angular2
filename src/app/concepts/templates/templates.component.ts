import { Component, OnInit } from '@angular/core';
import { Constants } from '../../shared-services/constants';
import { FileService } from '../../shared-services/FileService';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  isLoading: boolean;
  codeSnippet: string;

  private templatesErrorMessage: string;
  private readonly templates_snippet_file: string = Constants.TEMPLATES_HTML_FILE_PATH;

  constructor(private _fileService: FileService) { }

  ngOnInit() {
    this._fileService.getFile(this.templates_snippet_file).subscribe(
      response => {
        this.codeSnippet = response;
      },
      error => {
        this.templatesErrorMessage = error;
      },
      () => {
        this.isLoading = true;
      }
    );
  }
}

