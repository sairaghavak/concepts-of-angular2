import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Constants } from '../../shared-services/constants';
import { FileService } from '../../shared-services/FileService';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit, OnDestroy {
  private subscriber: ISubscription;
  private codeSnippet: string;
  private moduleErrorMessage: string;
  private readonly modules_snippet_file: string = Constants.MODULE_FILE_PATH;
  constructor(private _parentRouter: Router, private _activateRoute: ActivatedRoute, private _fileService: FileService) { }

  ngOnInit() {
    this.subscriber = this._fileService.getFile(this.modules_snippet_file).subscribe(
      response => {
        this.codeSnippet = response;
      },
      error => {
        this.moduleErrorMessage = error;
      },
      () => {
        console.log("Successfully loaded file.");
      }


    );
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
    console.log("unsubscribed..");
  }
  goToMetaData() {
    this._parentRouter.navigate(['../metadata'], { relativeTo: this._activateRoute });
  }

}
