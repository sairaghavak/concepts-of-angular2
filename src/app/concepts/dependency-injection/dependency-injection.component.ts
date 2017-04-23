import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Constants } from '../../shared-services/constants';
import { CodeSnippetModel } from '../components/CodeSnippetModel';
import { FileService } from '../../shared-services/FileService';


@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css']
})
export class DependencyInjectionComponent implements OnInit, AfterViewChecked {

  private diAddressServiceCodeSnippet: CodeSnippetModel;
  private diAboutServiceCodeSnippet: CodeSnippetModel;
  private diInComponentsCodeSnippet: CodeSnippetModel;
  private componentErrorMessage: string;

  codeSnippetModels: CodeSnippetModel[] = [];


  constructor(private _fileService: FileService) {

    this.diAddressServiceCodeSnippet = new CodeSnippetModel();
    this.diAddressServiceCodeSnippet.codeSnippetFilePath = Constants.DEPENDENCY_INJECTION_ADDRESS_SERVICE_FILE_PATH;

    this.diAboutServiceCodeSnippet = new CodeSnippetModel();
    this.diAboutServiceCodeSnippet.codeSnippetFilePath = Constants.DEPENDENCY_INJECTION_ABOUT_SERVICE_FILE_PATH;

    this.diInComponentsCodeSnippet = new CodeSnippetModel();
    this.diInComponentsCodeSnippet.codeSnippetFilePath = Constants.DEPENDENCY_INJECTION_USAGE_IN_COMP_FILE_PATH;

    this.codeSnippetModels = [this.diAddressServiceCodeSnippet, this.diAboutServiceCodeSnippet, this.diInComponentsCodeSnippet];
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

  ngAfterViewChecked() {
    PR.prettyPrint();
  }

}
