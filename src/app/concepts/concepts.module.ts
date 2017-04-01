import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConceptsRoutingModule, CONCEPTS_ROUTING_COMPONENTS } from './concepts-routing.module';

import { ng2Gist } from 'ng2-gist';

@NgModule({
  imports: [
    CommonModule,
    ConceptsRoutingModule
  ],
  declarations: [CONCEPTS_ROUTING_COMPONENTS, ng2Gist]
})
export class ConceptsModule {
  constructor() {
    console.log('ConceptsModule has jut been lazy loaded..., this message will be displayed twice(that\'s a bug in angular2).');
  }
}
