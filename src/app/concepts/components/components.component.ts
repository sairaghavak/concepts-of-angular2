import { Component, OnInit } from '@angular/core';
import { Constants } from '../../shared-services/constants';
import { FileService } from '../../shared-services/FileService';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  codeSnippets: string[] = [];
  isLoading: boolean[] = [];

  private readonly components_code_snippets: string[];
  private componentErrorMessage: string;

  constructor(private _fileService: FileService) {
    this.components_code_snippets = [Constants.COMPONENTS_HTML_FILE_PATH, Constants.COMPONENTS_FILE_PATH];
  }

  ngOnInit() {

    for (let index in this.components_code_snippets) {
      this.subscribeAndGetFile(index);
    }
  }


  subscribeAndGetFile(index: string) {
    this._fileService.getFile(this.components_code_snippets[index]).subscribe(
      response => {
        this.codeSnippets.push(response);
      },
      error => {
        this.componentErrorMessage = error;
      },
      () => {
        this.isLoading.push(true);
      }
    );
  }

}
