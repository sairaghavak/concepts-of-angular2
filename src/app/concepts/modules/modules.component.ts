import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Constants } from '../../shared-services/constants';
import { FileService } from '../../shared-services/FileService';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
  isLoading: boolean;
  codeSnippet: string;

  private moduleErrorMessage: string;
  private readonly modules_snippet_file: string = Constants.MODULE_FILE_PATH;

  constructor(private _parentRouter: Router, private _activateRoute: ActivatedRoute, private _fileService: FileService) { }

  ngOnInit() {
    this._fileService.getFile(this.modules_snippet_file).subscribe(
      response => {
        this.codeSnippet = response;
      },
      error => {
        this.moduleErrorMessage = error;
      },
      () => {
        this.isLoading = true;
        console.log("Successfully loaded file.");
      }
    );
  }

  goToMetaData() {
    this._parentRouter.navigate(['../metadata'], { relativeTo: this._activateRoute });
  }

}
