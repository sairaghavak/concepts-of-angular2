import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Constants } from '../../shared-services/constants';
import { CodeSnippetModel } from '../components/CodeSnippetModel';
import { FileService } from '../../shared-services/FileService';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, AfterViewChecked {

  private serviceCodeSnippet: CodeSnippetModel;
  private componentCodeSnippet: CodeSnippetModel;
  private componentErrorMessage: string;

  codeSnippetModels: CodeSnippetModel[] = [];

  constructor(private _fileService: FileService) {
    this.serviceCodeSnippet = new CodeSnippetModel();
    this.serviceCodeSnippet.codeSnippetFilePath = Constants.SERVICES_FILE_PATH;

    this.componentCodeSnippet = new CodeSnippetModel();
    this.componentCodeSnippet.codeSnippetFilePath = Constants.SERVICES_USAGE_IN_COMP_FILE_PATH;

    this.codeSnippetModels = [this.serviceCodeSnippet, this.componentCodeSnippet];
  }

  ngOnInit() {
    for (let thisCodeSnippetModel of this.codeSnippetModels) {
      this.subscribeAndGetFile(thisCodeSnippetModel);
    }
  }

  ngAfterViewChecked() {
    PR.prettyPrint();
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
