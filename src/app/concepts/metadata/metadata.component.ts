import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Constants } from '../../shared-services/constants';
import { FileService } from '../../shared-services/FileService';
import { SmallCodeSnippet } from './SmallCodeSnippet'

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit, AfterViewChecked {

  isLoading: boolean;
  codeSnippet: string;

  inlineCodeSnippets: SmallCodeSnippet[] = [];

  private templatesErrorMessage: string;
  private readonly templates_snippet_file: string = Constants.METADATA_FILE_PATH;

  constructor(private _fileService: FileService) { }

  ngOnInit() {
    this.inlineCodeSnippets.push({
      inlineCode: '@Component({...metadata...})',
      codeDescription: 'Decorates a class as Component'
    });
    this.inlineCodeSnippets.push({
      inlineCode: '@NgModule({...metadata...})',
      codeDescription: 'Decorates a class as Module'
    });
    this.inlineCodeSnippets.push({
      inlineCode: '@Injectable()',
      codeDescription: 'Decorates a class as Service'
    });
    this.inlineCodeSnippets.push({
      inlineCode: '@Pipe',
      codeDescription: 'Decorates a class as Pipe'
    });

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

  ngAfterViewChecked() {
    PR.prettyPrint();
  }
}
