import { Component, OnInit } from '@angular/core';
import { Constants } from '../../shared-services/constants';
import { FileService } from '../../shared-services/FileService';
import { CodeSnippetModel } from './CodeSnippetModel'

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  private htmlCodeSnippet: CodeSnippetModel;
  private componentClassCodeSnippet: CodeSnippetModel;
  codeSnippetModels: CodeSnippetModel[] = [];

  private componentErrorMessage: string;
  constructor(private _fileService: FileService) {
    this.htmlCodeSnippet = new CodeSnippetModel();
    this.htmlCodeSnippet.codeSnippetFilePath = Constants.COMPONENTS_HTML_FILE_PATH;

    this.componentClassCodeSnippet = new CodeSnippetModel();
    this.componentClassCodeSnippet.codeSnippetFilePath = Constants.COMPONENTS_FILE_PATH;

    this.codeSnippetModels = [this.htmlCodeSnippet, this.componentClassCodeSnippet];
  }

  ngOnInit() {

    for (let thisCodeSnippetModel of this.codeSnippetModels) {
      this.subscribeAndGetFile(thisCodeSnippetModel);
    }
  }


  subscribeAndGetFile(model: CodeSnippetModel) {
    this._fileService.getFile(model.codeSnippetFilePath).subscribe(
      response => {
        model.codeSnippet = response;
      },
      error => {
        this.componentErrorMessage = error;
      },
      () => {
        model.isLoading = true;
      }
    );
  }

}
