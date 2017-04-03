import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConceptsRoutingModule, CONCEPTS_ROUTING_COMPONENTS } from './concepts-routing.module';

import { FileService } from '../shared-services/FileService';
import { Constants } from '../shared-services/constants';


@NgModule({
  imports: [
    CommonModule,
    ConceptsRoutingModule
  ],
  declarations: [CONCEPTS_ROUTING_COMPONENTS],
  providers: [Constants, FileService]
})
export class ConceptsModule {
  constructor() {
    console.log('ConceptsModule has jut been lazy loaded..., this message will be displayed twice(that\'s a bug in angular2).');
  }
}
