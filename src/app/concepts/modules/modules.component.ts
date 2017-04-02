import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Constants } from '../constants';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  readonly gistModuleId: string;

  constructor(private _parentRouter: Router, private _activateRoute: ActivatedRoute) {
    this.gistModuleId = Constants.getModuleGistId();
  }

  ngOnInit() { }

  goToMetaData() {
    this._parentRouter.navigate(['../metadata'], { relativeTo: this._activateRoute });
  }

}
